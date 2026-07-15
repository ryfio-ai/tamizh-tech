import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
  
  try {
    const body = await request.json();
    const { type } = body;

    let emailSubject = "New Form Submission - TamizhTech";
    let emailHtml = "";

    if (type === "product_rfq") {
      const { name, email, org, qty, notes, productName } = body;
      emailSubject = `B2B RFQ Request: ${productName} (${org})`;
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 650px; border: 1px solid #eee; padding: 30px; border-radius: 8px; background-color: #fff;">
          <h2 style="color: #FF6A00; border-bottom: 2px solid #FF6A00; padding-bottom: 10px; margin-top: 0; text-transform: uppercase;">Product RFQ Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Product Name</td>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; color: #FF6A00;">${productName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Contact Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Institution / Company</td>
              <td style="padding: 10px; border: 1px solid #eee;">${org}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Quantity</td>
              <td style="padding: 10px; border: 1px solid #eee;">${qty}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #F7F7F5; border-radius: 8px; border-left: 5px solid #FF6A00;">
            <strong style="font-size: 13px; text-transform: uppercase;">Requirements & Notes:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px; font-size: 14px;">${notes || "None"}</p>
          </div>
        </div>
      `;
    } else if (type === "course_enroll") {
      const { name, email, phone, mode, notes, courseTitle } = body;
      emailSubject = `Course Enrollment Interest: ${courseTitle}`;
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 650px; border: 1px solid #eee; padding: 30px; border-radius: 8px; background-color: #fff;">
          <h2 style="color: #FF6A00; border-bottom: 2px solid #FF6A00; padding-bottom: 10px; margin-top: 0; text-transform: uppercase;">Course Enrollment Interest</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Course Title</td>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; color: #FF6A00;">${courseTitle}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Student Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
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
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Preferred Mode</td>
              <td style="padding: 10px; border: 1px solid #eee;">${mode}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #F7F7F5; border-radius: 8px; border-left: 5px solid #FF6A00;">
            <strong style="font-size: 13px; text-transform: uppercase;">Student Questions & Notes:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px; font-size: 14px;">${notes || "None"}</p>
          </div>
        </div>
      `;
    } else if (type === "event_register") {
      const { name, email, phone, org, teamSize, notes, eventTitle } = body;
      emailSubject = `Event Registration: ${eventTitle}`;
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 650px; border: 1px solid #eee; padding: 30px; border-radius: 8px; background-color: #fff;">
          <h2 style="color: #FF6A00; border-bottom: 2px solid #FF6A00; padding-bottom: 10px; margin-top: 0; text-transform: uppercase;">Event Delegate Registration</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Event Title</td>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; color: #FF6A00;">${eventTitle}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Attendee Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
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
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Institution/Company</td>
              <td style="padding: 10px; border: 1px solid #eee;">${org}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Team Size</td>
              <td style="padding: 10px; border: 1px solid #eee;">${teamSize || 1}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #F7F7F5; border-radius: 8px; border-left: 5px solid #FF6A00;">
            <strong style="font-size: 13px; text-transform: uppercase;">Additional Notes:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px; font-size: 14px;">${notes || "None"}</p>
          </div>
        </div>
      `;
    } else {
      // Fallback: General Contact Inquiry
      const { name, email, phone, company, requirement } = body;
      emailSubject = `General Business Inquiry: ${name} (${company || "Individual"})`;
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 650px; border: 1px solid #eee; padding: 30px; border-radius: 8px; background-color: #fff;">
          <h2 style="color: #FF6A00; border-bottom: 2px solid #FF6A00; padding-bottom: 10px; margin-top: 0; text-transform: uppercase;">General Contact Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Company/Enterprise</td>
              <td style="padding: 10px; border: 1px solid #eee;">${company || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #F7F7F5; border-radius: 8px; border-left: 5px solid #FF6A00;">
            <strong style="font-size: 13px; text-transform: uppercase;">Inquiry Message:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px; font-size: 14px;">${requirement || body.message || "None"}</p>
          </div>
        </div>
      `;
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating form submission locally (success).");
      return NextResponse.json({ success: true, simulated: true });
    }

    const { data, error } = await resend.emails.send({
      from: "TamizhTech <contact@tamizhtech.in>", 
      to: ["info@tamizhtech.com", "tamizhtechpvtltd@gmail.com"], 
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
