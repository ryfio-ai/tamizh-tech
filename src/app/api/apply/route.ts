import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateLeadId } from "@/lib/leadId";
import { appendLeadToGoogleSheet } from "@/lib/googleSheets";
import { sendLeadNotifications } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
  
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      linkedin, 
      college, 
      branch, 
      experience, 
      role, 
      category, 
      resume 
    } = body;

    // Minimum validation
    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Phone, Role)" },
        { status: 400 }
      );
    }

    const emailSubject = `New Internship Application: ${name} (${role})`;
    const emailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 650px; border: 1px solid #eee; padding: 30px; border-radius: 8px; background-color: #fff;">
        <h2 style="color: #FF6A00; border-bottom: 2px solid #FF6A00; padding-bottom: 10px; margin-top: 0; text-transform: uppercase;">Internship Application</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Applicant Name</td>
            <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Applied Domain</td>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; color: #FF6A00;">${role}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Category / Format</td>
            <td style="padding: 10px; border: 1px solid #eee;">${category || "Online"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">College</td>
            <td style="padding: 10px; border: 1px solid #eee;">${college || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Branch / Dept</td>
            <td style="padding: 10px; border: 1px solid #eee;">${branch || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Experience</td>
            <td style="padding: 10px; border: 1px solid #eee;">${experience || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">LinkedIn</td>
            <td style="padding: 10px; border: 1px solid #eee;"><a href="${linkedin || '#'}">${linkedin || "N/A"}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Resume Link</td>
            <td style="padding: 10px; border: 1px solid #eee;"><a href="${resume || '#'}">${resume || "Not provided"}</a></td>
          </tr>
        </table>
      </div>
    `;

    const leadId = generateLeadId();
    const submittedAt = new Date().toISOString();

    const leadPayload = {
      leadId,
      submittedAt,
      leadType: "Career Application" as const,
      source: "Internship & Careers Page",
      pageUrl: "https://www.tamizhtech.in/internship",
      customerName: name,
      email,
      phone,
      organization: college || "Individual",
      institution: college || "Individual",
      department: branch || "N/A",
      graduationYear: body.graduationYear || body.yearOfStudy || body.year || "N/A",
      areaOfInterest: role || category || "General Application",
      customerType: "Student / Job Seeker",
      jobTitle: role,
      careerCategory: category || "Internship",
      city: branch || "N/A",
      requirement: `${role} (${category || "Online"})`,
      message: `Branch: ${branch || "N/A"}, Exp: ${experience || "N/A"}, LinkedIn: ${linkedin || "N/A"}, Resume: ${resume || "Not provided"}`,
    };

    // Store in Google Sheets CRM
    await appendLeadToGoogleSheet(leadPayload);

    // Dispatch Admin Notification (6 team mailboxes) & User Thank You Confirmation
    sendLeadNotifications(leadPayload).catch((emailErr) => {
      console.warn("Resend email warning in /api/apply:", emailErr);
    });

    return NextResponse.json({
      success: true,
      leadId,
      message: "Application submitted successfully.",
    });
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
