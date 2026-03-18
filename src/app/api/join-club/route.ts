import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name, mobile, email, status, address, purpose } = body;

    if (!name || !mobile || !email || !status || !address || !purpose) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (name.length > 100 || mobile.length > 15 || address.length > 500 || purpose.length > 1000) {
      return NextResponse.json({ error: "Input exceeds length limits" }, { status: 400 });
    }

    // Sanitization
    name = name.replace(/[<>]/g, "");
    address = address.replace(/[<>]/g, "");
    purpose = purpose.replace(/[<>]/g, "");

    const statusLabel: Record<string, string> = {
      school: "School Student",
      college: "College Student",
      professional: "Working Professional",
      other: "Other",
    };

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error("Missing Google Sheet Webhook URL configurations");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mobile,
        email,
        status: statusLabel[status] || status,
        address,
        purpose
      }),
    });

    if (!response.ok) {
      const resultText = await response.text();
      console.error("Google Sheets Webhook Error:", resultText);
      return NextResponse.json({ error: "Failed to submit application to Google Sheets" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
