import { NextResponse } from "next/server";
import { LeadPayload, LeadType } from "@/types/lead";
import { generateLeadId } from "@/lib/leadId";
import { appendLeadToGoogleSheet } from "@/lib/googleSheets";
import { sendLeadNotifications } from "@/lib/email";
import { getProductBySlug } from "@/data/products";
import { getCourseBySlug } from "@/data/courses";
import { getProductUrl, getCourseUrl } from "@/lib/routing";

export const dynamic = "force-dynamic";

// Basic in-memory rate limiting: 10 requests per minute per IP
const ipRequestCounts = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequestCounts.get(ip);

  if (!entry || now > entry.expiresAt) {
    ipRequestCounts.set(ip, { count: 1, expiresAt: now + 60_000 });
    return true;
  }

  if (entry.count >= 10) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Anti-Spam Honeypot
    if (body.honeypot || body.website_hp) {
      // Silently accept bot submission without writing
      const dummyId = generateLeadId();
      return NextResponse.json({
        success: true,
        leadId: dummyId,
        message: "Thank you. Your enquiry has been received.",
      });
    }

    const leadType: LeadType = body.leadType || "Contact";

    // 3. Common Validation
    const customerName = String(body.customerName || body.name || "").trim().slice(0, 120);
    const email = String(body.email || "").trim().toLowerCase().slice(0, 150);
    const phone = String(body.phone || body.mobile || "").trim().slice(0, 25);
    const whatsapp = String(body.whatsapp || "").trim().slice(0, 25);
    const organization = String(body.organization || body.org || body.schoolName || body.collegeName || body.institution || "").trim().slice(0, 150);
    const institution = String(body.institution || body.collegeName || body.schoolName || body.organization || "").trim().slice(0, 150);
    const department = String(body.department || body.dept || body.branch || "").trim().slice(0, 100);
    const graduationYear = String(body.graduationYear || body.yearOfStudy || body.gradYear || body.year || "").trim().slice(0, 50);
    const areaOfInterest = String(body.areaOfInterest || body.role || body.interest || body.jobTitle || "").trim().slice(0, 120);
    const customerType = String(body.customerType || "").trim().slice(0, 50);
    const message = String(body.message || body.notes || body.requirement || "").trim().slice(0, 2000);
    const subject = String(body.subject || "").trim().slice(0, 200);
    const city = String(body.city || "").trim().slice(0, 100);
    const state = String(body.state || "").trim().slice(0, 100);
    const budget = String(body.budget || "").trim().slice(0, 100);
    const preferredContactMethod = String(body.preferredContactMethod || "Phone").trim();
    const source = String(body.source || "Website Form").trim().slice(0, 100);
    const pageUrl = String(body.pageUrl || request.headers.get("referer") || "https://www.tamizhtech.in").trim();

    // Validation Rules
    if (leadType !== "Newsletter") {
      if (!customerName || customerName.length < 2) {
        return NextResponse.json({ success: false, error: "Please enter your full name." }, { status: 400 });
      }

      if (!phone || phone.length < 7) {
        return NextResponse.json({ success: false, error: "Please provide a valid phone number." }, { status: 400 });
      }
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    // 4. Product-Specific Server Verification
    let productId = body.productId;
    let productName = body.productName;
    let productCategory = body.productCategory;
    let productCategorySlug = body.productCategorySlug;
    let productSlug = body.productSlug;
    let productUrl = body.productUrl;
    let quantity: number | undefined = undefined;

    if (leadType === "Product Enquiry" || leadType === "Product Quote") {
      if (body.productSlug) {
        const verifiedProduct = getProductBySlug(body.productSlug);
        if (verifiedProduct) {
          productId = verifiedProduct.id;
          productName = verifiedProduct.name;
          productCategory = verifiedProduct.category;
          productCategorySlug = verifiedProduct.categorySlug;
          productSlug = verifiedProduct.slug;
          productUrl = `https://www.tamizhtech.in${getProductUrl(verifiedProduct.categorySlug, verifiedProduct.slug)}`;
        }
      }

      // Quantity validation
      const rawQty = parseInt(String(body.quantity || "1"), 10);
      quantity = Number.isInteger(rawQty) && rawQty > 0 ? rawQty : 1;
    }

    // 5. Course-Specific Server Verification
    let courseName = body.courseName;
    let courseCategory = body.courseCategory;
    let courseUrl = body.courseUrl;

    if (leadType === "Course Enquiry" && (body.courseSlug || body.courseId)) {
      const slugToCheck = body.courseSlug || body.courseId;
      const verifiedCourse = getCourseBySlug(slugToCheck);
      if (verifiedCourse) {
        courseName = verifiedCourse.title;
        courseCategory = verifiedCourse.cat;
        courseUrl = `https://www.tamizhtech.in${getCourseUrl(verifiedCourse.categorySlug, verifiedCourse.slug)}`;
      }
    }

    // 6. Generate Unique Lead ID
    const leadId = generateLeadId();
    const submittedAt = new Date().toISOString();

    // 7. Assemble Normalized Payload
    const normalizedPayload: LeadPayload = {
      leadId,
      submittedAt,
      leadType,
      source,
      pageUrl,
      customerName,
      email,
      phone,
      whatsapp: whatsapp || phone,
      organization,
      institution,
      department,
      graduationYear,
      areaOfInterest,
      customerType,
      productId,
      productName,
      productCategory,
      productCategorySlug,
      productSlug,
      productUrl,
      quantity,
      lineItems: body.lineItems ? String(body.lineItems).slice(0, 1000) : undefined,
      courseName,
      courseCategory,
      courseUrl,
      careerCategory: body.careerCategory,
      jobTitle: body.jobTitle,
      jobSlug: body.jobSlug,
      city,
      state,
      country: body.country || "India",
      requirement: body.requirement || body.projectType || body.subject,
      subject,
      message,
      budget,
      preferredContactMethod,
      status: "New",
    };

    // 8. Append to Google Sheets
    const sheetResult = await appendLeadToGoogleSheet(normalizedPayload);

    if (!sheetResult.success) {
      console.error(`[Leads API] Failed to append to sheet for lead ${leadId}`);
      // Continue without breaking customer UX; response confirms receipt with Lead ID
    }

    // 9. Dispatch Email Notifications (to Team & Customer)
    sendLeadNotifications(normalizedPayload).catch((emailErr) => {
      console.warn(`[Email Notification Warning for ${leadId}]`, emailErr);
    });

    return NextResponse.json({
      success: true,
      leadId,
      message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
      referenceId: leadId,
    });
  } catch (error: any) {
    console.error("[Leads API Unhandled Exception]", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong while submitting your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
