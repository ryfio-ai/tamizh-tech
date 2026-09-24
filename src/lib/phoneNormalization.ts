/**
 * Phone number normalization & validation library for Tamizh Tech Robotics.
 * Ensures countryCode and 10-digit national mobile are clean, robust, and expectation-safe.
 */

export interface NormalizedPhoneResult {
  isValid: boolean;
  countryCode: string;
  mobile: string; // Exactly 10 digits
  formatted: string; // e.g. "+91 9876543210" or "+94 7699903781"
  raw: string;
  error?: string;
}

// Known international country calling codes (sorted by length descending for greedy prefix match)
export const COMMON_COUNTRY_CODES = [
  { code: "+91", label: "India (+91)", flag: "🇮🇳" },
  { code: "+94", label: "Sri Lanka (+94)", flag: "🇱🇰" },
  { code: "+971", label: "UAE (+971)", flag: "🇦🇪" },
  { code: "+966", label: "Saudi Arabia (+966)", flag: "🇸🇦" },
  { code: "+65", label: "Singapore (+65)", flag: "🇸🇬" },
  { code: "+60", label: "Malaysia (+60)", flag: "🇲🇾" },
  { code: "+44", label: "UK (+44)", flag: "🇬🇧" },
  { code: "+1", label: "USA / Canada (+1)", flag: "🇺🇸" },
  { code: "+61", label: "Australia (+61)", flag: "🇦🇺" },
  { code: "+49", label: "Germany (+49)", flag: "🇩🇪" },
  { code: "+33", label: "France (+33)", flag: "🇫🇷" },
  { code: "+81", label: "Japan (+81)", flag: "🇯🇵" },
] as const;

const KNOWN_CODES = [
  "971", "966", "880", "977", "975", "960", "95", // 3-digit
  "91", "94", "65", "60", "44", "61", "49", "33", "81", "82", "86", // 2-digit
  "1", "7" // 1-digit
];

/**
 * Normalizes an input phone number and optional country code.
 * Handles inputs like:
 *   - "9876543210" with default "+91" -> countryCode: "+91", mobile: "9876543210"
 *   - "+947699903781" -> countryCode: "+94", mobile: "7699903781"
 *   - "+91 98765 43210" -> countryCode: "+91", mobile: "9876543210"
 *   - "7699903781" with explicit countryCode "+94" -> countryCode: "+94", mobile: "7699903781"
 */
export function normalizePhoneNumber(
  rawInput: string | undefined | null,
  explicitCountryCode?: string | null
): NormalizedPhoneResult {
  const raw = String(rawInput || "").trim();

  if (!raw) {
    return {
      isValid: false,
      countryCode: explicitCountryCode || "+91",
      mobile: "",
      formatted: "",
      raw: "",
      error: "Mobile number is required.",
    };
  }

  // Strip non-digit characters except leading plus
  let cleaned = raw.replace(/[^\d+]/g, "");

  let detectedCountryCode = "";
  let digitsOnly = "";

  if (cleaned.startsWith("+")) {
    const numPart = cleaned.slice(1);
    // Greedily match known country codes
    for (const code of KNOWN_CODES) {
      if (numPart.startsWith(code)) {
        detectedCountryCode = `+${code}`;
        digitsOnly = numPart.slice(code.length);
        break;
      }
    }
    if (!detectedCountryCode) {
      // Fallback: take up to 3 digits as country code if remaining is at least 9-10 digits
      if (numPart.length > 10) {
        const codeLen = numPart.length - 10;
        detectedCountryCode = `+${numPart.slice(0, codeLen)}`;
        digitsOnly = numPart.slice(codeLen);
      } else {
        digitsOnly = numPart;
      }
    }
  } else if (cleaned.startsWith("00")) {
    // 0091 or 0094 prefix
    const numPart = cleaned.slice(2);
    for (const code of KNOWN_CODES) {
      if (numPart.startsWith(code)) {
        detectedCountryCode = `+${code}`;
        digitsOnly = numPart.slice(code.length);
        break;
      }
    }
    if (!detectedCountryCode) {
      digitsOnly = numPart;
    }
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    // Single leading 0 (common domestic notation e.g. 09876543210 or 07699903781)
    digitsOnly = cleaned.slice(1);
  } else {
    // Check if starts with a known country code without plus e.g. 919876543210 or 947699903781 (12 digits)
    if (cleaned.length === 12) {
      for (const code of KNOWN_CODES) {
        if (code.length === 2 && cleaned.startsWith(code)) {
          detectedCountryCode = `+${code}`;
          digitsOnly = cleaned.slice(code.length);
          break;
        }
      }
    }
    if (!digitsOnly) {
      digitsOnly = cleaned.replace(/\D/g, "");
    }
  }

  // Final Country Code determination
  let finalCountryCode = explicitCountryCode
    ? (explicitCountryCode.startsWith("+") ? explicitCountryCode : `+${explicitCountryCode}`)
    : (detectedCountryCode || "+91");

  // If digitsOnly is 9 digits (common in Sri Lanka when domestic 0 is omitted e.g. 769903781 -> 0769903781 or 7699903781)
  if (digitsOnly.length === 9 && finalCountryCode === "+94") {
    // Prefix leading 0 for 10-digit national notation (or pad to 10 digits)
    digitsOnly = `0${digitsOnly}`;
  }

  // Validate 10-digit mobile rule
  const isTenDigits = /^[0-9]{10}$/.test(digitsOnly);

  if (!isTenDigits) {
    return {
      isValid: false,
      countryCode: finalCountryCode,
      mobile: digitsOnly,
      formatted: `${finalCountryCode} ${digitsOnly}`.trim(),
      raw,
      error: `Please enter a valid 10-digit mobile number (received ${digitsOnly.length} digits).`,
    };
  }

  return {
    isValid: true,
    countryCode: finalCountryCode,
    mobile: digitsOnly,
    formatted: `${finalCountryCode} ${digitsOnly}`,
    raw,
  };
}

/**
 * Validates whether email is a syntactically clean email address.
 */
export function validateEmail(email: string | undefined | null): { isValid: boolean; normalized: string; error?: string } {
  const trimmed = String(email || "").trim().toLowerCase();
  if (!trimmed) {
    return { isValid: false, normalized: "", error: "Email address is required." };
  }
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, normalized: trimmed, error: "Please enter a valid email address." };
  }
  return { isValid: true, normalized: trimmed };
}
