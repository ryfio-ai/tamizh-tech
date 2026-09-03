import { Resend } from "resend";
import { LeadPayload } from "@/types/lead";

const TEAM_RECIPIENTS = [
  "contact@tamizhtech.in",
  "ryfioai@gmail.com",
  "sathishpandiyan126@gmail.com",
  "purchase.tamizhtech@gmail.com",
  "design.ttrc@gmail.com",
  "tamizhtechpvtltd@gmail.com",
];

const SENDER_EMAIL = "TamizhTech <contact@tamizhtech.in>";

export async function sendLeadNotifications(payload: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[Resend] RESEND_API_KEY is not configured. Skipping email dispatch.");
    return { success: false, reason: "No API key" };
  }

  const resend = new Resend(apiKey);

  try {
    // 1. ADMIN SIDE LEAD NOTIFICATION (Dispatched to all 6 team mailboxes)
    const teamSubject = `[${payload.leadType}] ${payload.customerName} — Ref: ${payload.leadId}`;
    
    const teamHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background: #FF6B00; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
            New ${payload.leadType} Lead
          </h1>
          <p style="color: #fff3eb; margin: 4px 0 0; font-size: 13px; font-family: monospace;">Reference ID: <strong>${payload.leadId}</strong></p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 35%;">Name</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${payload.customerName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Mobile No</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${payload.phone}" style="color: #FF6B00; text-decoration: none; font-weight: 700;">${payload.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Mail ID</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${payload.email}" style="color: #FF6B00; text-decoration: none;">${payload.email}</a></td>
            </tr>
            ${payload.institution ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Institution / Organization</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.institution}</td>
            </tr>` : ''}
            ${payload.department ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Department / Branch</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.department}</td>
            </tr>` : ''}
            ${payload.graduationYear ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Graduation Year</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.graduationYear}</td>
            </tr>` : ''}
            ${payload.areaOfInterest ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Area of Interest / Role</td>
              <td style="padding: 10px 0; color: #FF6B00; font-weight: 700;">${payload.areaOfInterest}</td>
            </tr>` : ''}
            ${payload.productName ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Product</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.productName} (Qty: ${payload.quantity || 1})</td>
            </tr>` : ''}
            ${payload.courseName ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Course</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.courseName}</td>
            </tr>` : ''}
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Source Page</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="${payload.pageUrl}" style="color: #64748b; font-size: 11px;">${payload.pageUrl}</a></td>
            </tr>
          </table>

          ${payload.message ? `
          <div style="margin-top: 20px; padding: 14px; background: #f8fafc; border-left: 4px solid #FF6B00; border-radius: 6px;">
            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Requirement / Message / Details:</div>
            <p style="margin: 0; font-size: 13px; color: #334155; white-space: pre-wrap;">${payload.message}</p>
          </div>` : ''}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
            This lead was automatically captured and logged to the <a href="https://docs.google.com/spreadsheets/d/1HDI8h7VSfSCs-l7XCUBUNpIx6myAEMEFicIul96zg9E/" style="color: #FF6B00;">Tamizh Tech Google Sheet CRM</a>.
          </div>
        </div>
      </div>
    `;

    // Dispatch to Team
    await resend.emails.send({
      from: SENDER_EMAIL,
      to: TEAM_RECIPIENTS,
      subject: teamSubject,
      html: teamHtml,
    });

    // 2. USER SIDE FORMAL THANK YOU NOTIFICATION (Sent to applicant/inquirer email)
    if (payload.email && payload.leadType !== "Newsletter") {
      let contextMessage = "Thank you for reaching out to us. Our team will review your enquiry and reach out to you soon.";
      let contextHeading = "Thank you for submitting your enquiry";

      if (payload.leadType === "Career Application") {
        contextHeading = "Thank you for applying in our career portal";
        contextMessage = "Thank you for submitting your application to Tamizh Tech Robotics Company. Our technical recruitment team will review your profile and reach out to you soon.";
      } else if (payload.leadType === "Robotics Club") {
        contextHeading = "Thank you for applying to Tamizh Robotics Club";
        contextMessage = "Thank you for submitting your membership application to Tamizh Robotics Club (TRC). Our team will review your details and reach out to you soon.";
      } else if (payload.leadType === "Product Enquiry" || payload.leadType === "Product Quote") {
        contextHeading = "Thank you for your product quotation request";
        contextMessage = `Thank you for your interest in <strong>${payload.productName || "our robotics solutions"}</strong>. Our technical engineering team will review your specification requirements and reach out to you soon.`;
      } else if (payload.leadType === "Course Enquiry") {
        contextHeading = "Thank you for your course enrollment enquiry";
        contextMessage = `Thank you for your interest in <strong>${payload.courseName || "our robotics training"}</strong>. Our academic team will reach out to you soon with syllabus and schedule details.`;
      }

      const customerSubject = `${contextHeading} [Ref: ${payload.leadId}]`;
      const customerHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
          <div style="background: #FF6B00; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">
              TAMIZH TECH ROBOTICS
            </h1>
            <p style="color: #fff3eb; margin: 4px 0 0; font-size: 13px;">Future of Engineering & Robotics Coimbatore</p>
          </div>

          <div style="padding: 30px;">
            <p style="font-size: 15px; color: #0f172a; margin-top: 0;">
              Dear <strong>${payload.customerName}</strong>,
            </p>

            <p style="font-size: 14px; color: #334155; line-height: 1.7;">
              ${contextMessage}
            </p>

            <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px 18px; margin: 20px 0; text-align: center;">
              <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; display: block; margin-bottom: 2px;">Your Application Reference ID</span>
              <strong style="font-size: 18px; color: #FF6B00; font-family: monospace;">${payload.leadId}</strong>
            </div>

            <p style="font-size: 13px; color: #475569; margin-bottom: 24px;">
              If you have any urgent queries or updates regarding your submission, you can reach out directly via Phone or WhatsApp.
            </p>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 18px; font-size: 13px; color: #0f172a; line-height: 1.6;">
              <p style="margin: 0 0 4px 0;"><strong>Team Tamizh Tech Robotics Company</strong></p>
              <p style="margin: 0 0 4px 0;">📞 <a href="tel:+918148045030" style="color: #FF6B00; text-decoration: none; font-weight: 600;">+91 8148045030</a></p>
              <p style="margin: 0 0 4px 0;">✉️ <a href="mailto:contact@tamizhtech.in" style="color: #FF6B00; text-decoration: none;">contact@tamizhtech.in</a></p>
              <p style="margin: 0 0 4px 0;">🌐 <a href="https://www.tamizhtech.in" style="color: #FF6B00; text-decoration: none;">www.tamizhtech.in</a></p>
              <p style="margin: 0;">📍 Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: SENDER_EMAIL,
        to: [payload.email],
        subject: customerSubject,
        html: customerHtml,
      });
    }

    return { success: true };
  } catch (err: any) {
    console.error("[Resend Exception]", err);
    return { success: false, error: err.message };
  }
}
