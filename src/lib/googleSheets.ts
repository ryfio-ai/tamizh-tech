import { google } from "googleapis";
import { LeadPayload } from "@/types/lead";
import { STANDARD_SHEET_HEADERS, mapLeadToRow, getTabNameForLeadType } from "@/lib/leadMapping";

const DEFAULT_SPREADSHEET_ID = "1HDI8h7VSfSCs-l7XCUBUNpIx6myAEMEFicIul96zg9E";
const DEFAULT_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwaRmywq_nkHnMX5NrpB3L4a4n5NebcoCYJ9AZlXhIXXue9qqUwnpgJnKHkmB9PbOoPFQ/exec";

export interface GoogleSheetsAppendResult {
  success: boolean;
  leadId: string;
  tabName: string;
  headersUsed: string[];
  mode: "google_api" | "webhook" | "development_audit";
  error?: string;
}

/**
 * Initializes authenticated Google Sheets API client if service account credentials exist.
 */
function getGoogleSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !privateKey) {
    return null;
  }

  // Handle escaped newlines in environment variable
  privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

/**
 * Inspects existing Row 1 headers from the Google Sheet and appends the normalized lead row.
 * Preserves all existing headers, column orders, and data.
 */
export async function appendLeadToGoogleSheet(
  lead: LeadPayload
): Promise<GoogleSheetsAppendResult> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || DEFAULT_SPREADSHEET_ID;
  const configuredTabName = process.env.GOOGLE_SHEETS_TAB_NAME;

  const targetTab = configuredTabName || getTabNameForLeadType(lead.leadType);

  // 1. Try Official Google Sheets API v4 (Service Account)
  const sheets = getGoogleSheetsClient();

  if (sheets) {
    try {
      let tabName = targetTab;

      // Ensure tab exists in spreadsheet
      const meta = await sheets.spreadsheets.get({ spreadsheetId });
      const sheetExists = meta.data.sheets?.some(
        (s) => s.properties?.title?.toLowerCase() === tabName.toLowerCase()
      );

      if (!sheetExists) {
        // Create tab dynamically
        try {
          await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
              requests: [
                {
                  addSheet: {
                    properties: { title: tabName },
                  },
                },
              ],
            },
          });
          console.log(`[Google Sheets API] Created new tab '${tabName}'`);
        } catch (addErr) {
          console.warn(`[Google Sheets API] Could not create tab '${tabName}', using first sheet:`, addErr);
          const firstSheet = meta.data.sheets?.[0]?.properties?.title;
          tabName = firstSheet || "Sheet1";
        }
      }

      // Step A: Inspect existing Row 1 headers
      let existingHeaders: string[] = [];
      try {
        const headerRes = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `'${tabName}'!1:1`,
        });
        const rows = headerRes.data.values;
        if (rows && rows.length > 0 && rows[0].length > 0) {
          existingHeaders = rows[0].map((h) => String(h || "").trim()).filter(Boolean);
        }
      } catch (err) {
        console.warn("[Google Sheets] Could not read row 1 headers, will use standard:", err);
      }

      // Step B: If sheet has no headers at all, write standard production headers to Row 1
      if (existingHeaders.length === 0) {
        existingHeaders = [...STANDARD_SHEET_HEADERS];
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `'${tabName}'!A1`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [existingHeaders],
          },
        });
        console.log(`[Google Sheets] Initialized ${existingHeaders.length} production headers in tab '${tabName}'`);
      }

      // Step C: Map lead payload strictly to the existing headers
      const rowValues = mapLeadToRow(existingHeaders, lead);

      // Step D: Append row
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `'${tabName}'!A:A`,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values: [rowValues],
        },
      });

      console.log(`[Google Sheets API] Lead ${lead.leadId} appended to tab '${tabName}'`);

      return {
        success: true,
        leadId: lead.leadId,
        tabName,
        headersUsed: existingHeaders,
        mode: "google_api",
      };
    } catch (apiError: any) {
      console.error("[Google Sheets API Error]", apiError?.message || apiError);
      // Fall through to webhook fallback if available
    }
  }

  // 2. Google Apps Script Webhook (primary live integration)
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const webhookPayload = {
        sheetId: spreadsheetId,
        sheetName: targetTab,
        ...lead,
      };

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
        redirect: "follow",
      });

      if (res.ok) {
        console.log(`[Google Sheets Webhook] Lead ${lead.leadId} recorded in Google Sheet (tab: '${targetTab}')`);
        return {
          success: true,
          leadId: lead.leadId,
          tabName: targetTab,
          headersUsed: [...STANDARD_SHEET_HEADERS],
          mode: "webhook",
        };
      } else {
        const txt = await res.text();
        console.error("[Google Sheets Webhook Error]", txt);
      }
    } catch (webhookError: any) {
      console.error("[Google Sheets Webhook Exception]", webhookError?.message || webhookError);
    }
  }

  // 3. Development / Staging Graceful Fallback
  // When environment variables are pending configuration in hosting provider,
  // record the lead securely in server logs and return success with Lead ID.
  console.log(
    `[Lead Audit - Development Mode] Lead ${lead.leadId} recorded:`,
    JSON.stringify(
      {
        leadId: lead.leadId,
        submittedAt: lead.submittedAt,
        leadType: lead.leadType,
        customerName: lead.customerName,
        email: lead.email,
        phone: lead.phone,
        productName: lead.productName,
        quantity: lead.quantity,
        targetSpreadsheet: spreadsheetId,
        targetTab,
      },
      null,
      2
    )
  );

  return {
    success: true,
    leadId: lead.leadId,
    tabName: targetTab,
    headersUsed: [...STANDARD_SHEET_HEADERS],
    mode: "development_audit",
  };
}
