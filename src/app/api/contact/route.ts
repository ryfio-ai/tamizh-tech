import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, subject, enquiry, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "TamizhTech <contact@tamizhtech.in>", 
      to: ["tamizhtechpvtltd@gmail.com"], 
      subject: `New Contact Form Submission: ${subject || enquiry}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">New Enquiry from Website</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Enquiry Type</td>
              <td style="padding: 10px; border: 1px solid #eee;">${enquiry || "Direct Enquiry"}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Subject</td>
              <td style="padding: 10px; border: 1px solid #eee;">${subject || "No Subject"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f0fdfa; border-radius: 5px; border-left: 4px solid #0891b2;">
            <h3 style="margin-top: 0; color: #0891b2;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the TamizhTech Website Contact Form.
          </p>
        </div>
      `,
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
