import { NextResponse } from "next/server";
import { generateLeadId } from "@/lib/leadId";
import { appendLeadToGoogleSheet } from "@/lib/googleSheets";
import { sendLeadNotifications } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { 
      name, mobile, email, status, 
      standard, schoolName, schoolLocation,
      department, yearOfStudy, collegeName, collegeLocation,
      organizationName, role,
      address, purpose 
    } = body;

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

    const leadId = generateLeadId();
    const submittedAt = new Date().toISOString();

    const detailsText = status === "school" 
      ? `Standard: ${standard}, School: ${schoolName}, Loc: ${schoolLocation}`
      : status === "college"
      ? `Dept: ${department}, Year: ${yearOfStudy}, College: ${collegeName}, Loc: ${collegeLocation}`
      : status === "professional"
      ? `Org: ${organizationName}, Role: ${role}`
      : "N/A";

    const leadPayload = {
      leadId,
      submittedAt,
      leadType: "Robotics Club" as const,
      source: "Robotics Club Membership Application",
      pageUrl: "https://www.tamizhtech.in/robotics-club/join",
      customerName: name,
      email,
      phone: mobile,
      organization: schoolName || collegeName || organizationName || "Individual",
      institution: collegeName || schoolName || organizationName || "Individual",
      department: department || standard || role || "",
      graduationYear: yearOfStudy || "",
      areaOfInterest: role || purpose || "Robotics Club Membership",
      customerType: statusLabel[status] || status,
      city: schoolLocation || collegeLocation || address,
      requirement: "Robotics Club Membership",
      message: `Address: ${address}. Purpose: ${purpose}. Details: ${detailsText}`,
    };

    // 1. Centralized Google Sheets append (Stores in dedicated 'Robotics Club Applications' sheet)
    await appendLeadToGoogleSheet(leadPayload);

    // 2. Dispatch Admin Notification (6 team mailboxes) & User Thank You Confirmation
    sendLeadNotifications(leadPayload).catch((emailErr) => {
      console.warn("Resend email warning in /api/join-club:", emailErr);
    });

    return NextResponse.json({ 
      success: true, 
      leadId, 
      message: "Thank you! Your Robotics Club application has been received. Our team will reach out to you soon." 
    });
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
