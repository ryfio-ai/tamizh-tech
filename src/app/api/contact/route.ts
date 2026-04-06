import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  try {
    const body = await request.json();
    let { 
      name, email, phone, 
      company, designation, industry, 
      projectType, budget, timeline, 
      requirement, callbackMode 
    } = body;

    // Basic Input Validation
    if (!name || !email || !requirement) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Requirement)" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Basic sanitization
    name = name.replace(/[<>]/g, "");
    company = company ? company.replace(/[<>]/g, "") : "N/A";
    requirement = requirement.replace(/[<>]/g, "");

    const { data, error } = await resend.emails.send({
      from: "TamizhTech <contact@tamizhtech.in>", 
      to: ["tamizhtechpvtltd@gmail.com"], 
      subject: `New Technical Proposal Request: ${company}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 650px; border: 1px solid #eee; padding: 30px; border-radius: 12px; background-color: #fff;">
          <h2 style="color: #F47A20; border-bottom: 3px solid #F47A20; padding-bottom: 10px; margin-top: 0; text-transform: uppercase; letter-spacing: 1px;">Technical Proposal Inquiry</h2>
          
          <div style="margin-bottom: 25px;">
            <p style="text-[10px] font-black color: #666; text-transform: uppercase;">01. Stakeholder Identity</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 5px;">
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Name</td>
                <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Enterprise</td>
                <td style="padding: 10px; border: 1px solid #eee;">${company} (${designation || "N/A"})</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
                <td style="padding: 10px; border: 1px solid #eee;"><a href="mailto:${email}" style="color: #F47A20;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border: 1px solid #eee;">${phone || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="text-[10px] font-black color: #666; text-transform: uppercase;">02. Engineering Scope</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 5px;">
              <tr style="background-color: #f0fdfa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 35%;">Vertical</td>
                <td style="padding: 10px; border: 1px solid #eee;">${industry}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Project Type</td>
                <td style="padding: 10px; border: 1px solid #eee;">${projectType}</td>
              </tr>
              <tr style="background-color: #f0fdfa;">
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Budget</td>
                <td style="padding: 10px; border: 1px solid #eee;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Timeline</td>
                <td style="padding: 10px; border: 1px solid #eee;">${timeline}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 20px; padding: 20px; background-color: #F7F7F5; border-radius: 8px; border-left: 5px solid #F47A20;">
            <h3 style="margin-top: 0; color: #1F2A44; text-transform: uppercase; font-size: 14px;">Technical Specifications:</h3>
            <p style="white-space: pre-wrap; font-size: 15px; color: #333;">${requirement}</p>
          </div>

          <div style="margin-top: 20px; text-align: center; font-size: 13px; color: #666;">
            Contact via: <strong style="color: #F47A20;">${callbackMode}</strong>
          </div>

          <p style="font-size: 11px; color: #999; margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
            This technical proposal request was generated from the Tamizh Tech Pvt Ltd official website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // --- Google Sheets Archiving ---
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheetName: "Contact",
            name,
            email,
            phone: phone || "N/A",
            company: company || "N/A",
            designation: designation || "N/A",
            industry: industry || "N/A",
            projectType: projectType || "N/A",
            budget: budget || "N/A",
            timeline: timeline || "N/A",
            message: requirement,
            callbackMode: callbackMode || "Email",
            timestamp: new Date().toISOString()
          }),
        });
      } catch (err) {
        console.error("Google Sheets Archiving Failed:", err);
      }
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
