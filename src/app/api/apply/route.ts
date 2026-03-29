import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
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
      type,
      resume 
    } = body;

    // Minimum validation
    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Phone, Role)" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error("Missing Google Sheet Webhook URL configurations");
    }

    // Send to Google Sheet Webhook
    // We pass 'sheetName' so the GAS can route it to a separate sheet "Internships"
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sheetName: "Internships", // Routing to separate sheet
        name,
        email,
        phone,
        linkedin: linkedin || "N/A",
        college: college || "N/A",
        branch: branch || "N/A",
        role,
        category,
        experience: experience || "N/A",
        resume: resume || "N/A",
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      const resultText = await response.text();
      console.error("Google Sheets API Error:", resultText);
      return NextResponse.json({ error: "Institutional database connection failed." }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Internship credentials archived successfully." });
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
