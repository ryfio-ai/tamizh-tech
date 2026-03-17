import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, mobile, email, status, address, purpose } = body;

    if (!name || !mobile || !email || !status || !address || !purpose) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const statusLabel: Record<string, string> = {
      school: "School Student",
      college: "College Student",
      professional: "Working Professional",
      other: "Other",
    };

    const { data, error } = await resend.emails.send({
      from: "TamizhTech <contact@tamizhtech.in>",
      to: ["tamizhtechpvtltd@gmail.com"],
      subject: `New Robotics Club Application: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #EB9234; border-bottom: 2px solid #EB9234; padding-bottom: 10px;">🤖 New Club Membership Application</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 30%;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Mobile Number</td>
              <td style="padding: 10px; border: 1px solid #eee;"><a href="tel:${mobile}">${mobile}</a></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Current Status</td>
              <td style="padding: 10px; border: 1px solid #eee;">${statusLabel[status] || status}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Address</td>
              <td style="padding: 10px; border: 1px solid #eee;">${address}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #FFF7ED; border-radius: 5px; border-left: 4px solid #EB9234;">
            <h3 style="margin-top: 0; color: #EB9234;">Purpose of Joining:</h3>
            <p style="white-space: pre-wrap;">${purpose}</p>
          </div>

          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the TamizhTech Robotics Club Join Form.
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
