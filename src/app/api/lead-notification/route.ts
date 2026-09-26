import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENTS = [
  "ryfioai@gmail.com",
  "ttrcstoree@gmail.com",
  "contact@tamizhtech.in",
];

const DEFAULT_SENDER = process.env.RESEND_FROM_EMAIL || "TamizhTech Enquiries <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, submissionNo, payload, timestamp, sourcePage } = body || {};

    if (!payload || !payload.name || !payload.mobile) {
      return NextResponse.json(
        { error: "Invalid lead payload. Name and mobile are required." },
        { status: 400 }
      );
    }

    const leadName = payload.name || "N/A";
    const leadMobile = payload.mobile || "N/A";
    const leadEmail = payload.email || "Not Provided";
    const companyOrSchool = payload.company || payload.institution || payload.location || "N/A";
    const subjectLine = payload.subject || payload.position || payload.productRequirements || `${type} Submission`;
    const fullMessage =
      payload.message ||
      payload.coverMessage ||
      payload.technicalRequirements ||
      payload.productRequirements ||
      "No detailed message provided.";

    const formattedTimestamp = timestamp
      ? new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 24px; text-align: left; border-bottom: 3px solid #2563eb; }
          .header h1 { color: #ffffff; font-size: 20px; margin: 0; font-weight: 700; letter-spacing: -0.5px; }
          .header p { color: #94a3b8; font-size: 13px; margin: 6px 0 0 0; }
          .badge { display: inline-block; background: #2563eb; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-top: 10px; }
          .body { padding: 24px; }
          .grid { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .grid td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .grid td.label { font-weight: 600; color: #64748b; width: 35%; background-color: #f8fafc; }
          .grid td.value { color: #0f172a; font-weight: 500; }
          .highlight { font-weight: 700; color: #2563eb; }
          .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 16px; }
          .message-box h3 { margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; }
          .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>TamizhTech — New Lead Alert</h1>
            <p>Direct website form submission notification</p>
            <div class="badge">${type} | Ref: ${submissionNo || "PENDING"}</div>
          </div>
          <div class="body">
            <table class="grid">
              <tr>
                <td class="label">Reference No</td>
                <td class="value highlight">${submissionNo || "N/A"}</td>
              </tr>
              <tr>
                <td class="label">Customer Name</td>
                <td class="value"><strong>${leadName}</strong></td>
              </tr>
              <tr>
                <td class="label">Mobile Number</td>
                <td class="value"><a href="tel:${leadMobile}" style="color: #2563eb; font-weight: 700; text-decoration: none;">${leadMobile}</a></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value">${leadEmail !== "Not Provided" ? `<a href="mailto:${leadEmail}">${leadEmail}</a>` : leadEmail}</td>
              </tr>
              <tr>
                <td class="label">Company / Institution</td>
                <td class="value">${companyOrSchool}</td>
              </tr>
              <tr>
                <td class="label">Subject / Purpose</td>
                <td class="value">${subjectLine}</td>
              </tr>
              <tr>
                <td class="label">Source Page</td>
                <td class="value">${sourcePage || "Website Form"}</td>
              </tr>
              <tr>
                <td class="label">Submitted At</td>
                <td class="value">${formattedTimestamp} (IST)</td>
              </tr>
            </table>

            <div class="message-box">
              <h3>Detailed Requirements / Message</h3>
              <p>${fullMessage}</p>
            </div>
          </div>
          <div class="footer">
            TamizhTech Robotics Company — Automated Lead System • Coimbatore, Tamil Nadu
          </div>
        </div>
      </body>
      </html>
    `;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log(`[LEAD_ALERT_BACKUP_LOG] RESEND_API_KEY not configured. Lead details:`, {
        submissionNo,
        type,
        name: leadName,
        mobile: leadMobile,
        email: leadEmail,
        recipients: RECIPIENTS,
      });
      return NextResponse.json({
        success: true,
        emailSent: false,
        message: "RESEND_API_KEY missing; lead payload printed to server logs.",
      });
    }

    const resend = new Resend(apiKey);
    const emailSubject = `[New Website Lead - ${type}] ${leadName} (${submissionNo || "Ref"})`;

    const emailResponse = await resend.emails.send({
      from: DEFAULT_SENDER,
      to: RECIPIENTS,
      subject: emailSubject,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      emailSent: true,
      data: emailResponse,
    });
  } catch (error: any) {
    console.error("[LEAD_NOTIFICATION_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to dispatch email notification." },
      { status: 500 }
    );
  }
}
