"use client";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_STORAGE_KEY = "ttrc_utm_attribution";

/**
 * Parses query parameters from URL and saves them in sessionStorage.
 * Safe for client-side execution in Next.js.
 */
export function captureUtmParams(): UTMParams {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utm: UTMParams = {};

    const source = urlParams.get("utm_source");
    const medium = urlParams.get("utm_medium");
    const campaign = urlParams.get("utm_campaign");
    const term = urlParams.get("utm_term");
    const content = urlParams.get("utm_content");

    if (source) utm.utm_source = source;
    if (medium) utm.utm_medium = medium;
    if (campaign) utm.utm_campaign = campaign;
    if (term) utm.utm_term = term;
    if (content) utm.utm_content = content;

    if (Object.keys(utm).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    }

    return utm;
  } catch (err) {
    console.warn("[Analytics] Error capturing UTM parameters:", err);
    return {};
  }
}

/**
 * Retrieves stored attribution parameters for attaching to form lead submissions.
 */
export function getStoredUtmParams(): UTMParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.warn("[Analytics] Error reading stored UTM parameters:", err);
  }

  return {};
}

export type MarketingEventName =
  | "page_view"
  | "product_view"
  | "category_view"
  | "product_enquiry"
  | "request_quote"
  | "school_demo"
  | "college_enquiry"
  | "industry_enquiry"
  | "course_enquiry"
  | "contact_submit"
  | "newsletter_signup"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "download";

/**
 * Dispatches privacy-conscious analytics events without transmitting personally identifiable information.
 * Dispatches to window.dataLayer (Google Analytics 4 / Tag Manager).
 */
export function trackMarketingEvent(
  eventName: MarketingEventName,
  properties?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;

  const utm = getStoredUtmParams();
  const payload = {
    event: eventName,
    ...properties,
    ...utm,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Analytics 4 dataLayer integration
  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push(payload);
  }

  // 2. Fallback console logging in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Marketing Analytics] ${eventName}`, payload);
  }
}
