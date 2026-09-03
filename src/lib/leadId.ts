import crypto from "crypto";

/**
 * Generates a unique, collision-safe Lead ID in the format:
 * TT-YYYYMMDD-XXXX
 * Example: TT-20260903-7B8A
 */
export function generateLeadId(date = new Date()): string {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const dateStr = `${yyyy}${mm}${dd}`;

  // 4-character cryptographic random hex suffix in uppercase
  const randomSuffix = crypto.randomBytes(2).toString("hex").toUpperCase();

  return `TT-${dateStr}-${randomSuffix}`;
}
