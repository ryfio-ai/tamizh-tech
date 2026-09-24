/**
 * TAMIZHTECH CENTRALIZED ERP API CLIENT
 * Connects the public website directly to the authoritative TamizhTech ERP.
 * 
 * Production Origin: https://www.tamizhtech.in
 * ERP Base URL: https://tamizhtech-erp.vercel.app
 */

import {
  SubmissionType,
  SubmissionPayloadMap,
  SubmissionEnvelope,
  SubmissionResponse,
  UploadResponse,
  AttachmentMetadata,
  ERPApiError,
} from "@/types/erp";

export const ERP_BASE_URL =
  process.env.NEXT_PUBLIC_ERP_API_BASE_URL || "https://tamizhtech-erp.vercel.app";

const SUBMISSIONS_ENDPOINT = `${ERP_BASE_URL}/api/public/v1/submissions`;
const UPLOADS_ENDPOINT = `${ERP_BASE_URL}/api/public/v1/uploads`;

const DEFAULT_TIMEOUT_MS = 25000;
const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

/**
 * Generate a cryptographically secure UUIDv4 for submission idempotency.
 */
export function generateIdempotencyKey(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Validates resume file locally prior to calling the ERP upload endpoint.
 */
export function validateResumeFileLocally(file: File): { isValid: boolean; error?: string } {
  if (!file) {
    return { isValid: false, error: "Please select a resume file to upload." };
  }

  if (file.size > MAX_RESUME_SIZE_BYTES) {
    return {
      isValid: false,
      error: "Resume file size exceeds the 5MB limit. Please upload a smaller file.",
    };
  }

  const name = file.name.toLowerCase();
  const hasValidExt = ALLOWED_RESUME_EXTENSIONS.some((ext) => name.endsWith(ext));
  if (!hasValidExt) {
    return {
      isValid: false,
      error: "Invalid file type. Please upload a PDF, DOC, or DOCX document.",
    };
  }

  return { isValid: true };
}

/**
 * Submit public form data (RFQ, CONTACT, CAREER, CLUB_REGISTRATION) to the ERP.
 */
export async function submitPublicForm<T extends SubmissionType>(params: {
  type: T;
  idempotencyKey: string;
  payload: SubmissionPayloadMap[T];
  timeoutMs?: number;
}): Promise<SubmissionResponse> {
  const { type, idempotencyKey, payload, timeoutMs = DEFAULT_TIMEOUT_MS } = params;

  if (!idempotencyKey) {
    throw new ERPApiError("Submission idempotency key is required.", 400);
  }

  const envelope: SubmissionEnvelope<T> = {
    type,
    idempotencyKey,
    source: "WEBSITE",
    payload,
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(SUBMISSIONS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(envelope),
      signal: controller.signal,
    });

    clearTimeout(timer);

    let data: any = null;
    try {
      data = await res.json();
    } catch {
      // Body may not be valid JSON in rare gateway crashes
    }

    if (res.ok && data?.success) {
      if (!data.submissionNo) {
        throw new ERPApiError(
          "Submission received but missing confirmation reference. Please contact support.",
          500
        );
      }
      return {
        success: true,
        submissionNo: data.submissionNo,
        message: data.message || "Your request has been received successfully.",
        isDuplicate: Boolean(data.isDuplicate),
      };
    }

    // Normalized HTTP status handling
    if (res.status === 409 && data?.code === "IDEMPOTENCY_KEY_REUSE") {
      throw new ERPApiError(
        "This submission could not be retried with the same request token. Please submit the form again.",
        409,
        "IDEMPOTENCY_KEY_REUSE"
      );
    }

    if (res.status === 429 || data?.code === "RATE_LIMIT_EXCEEDED") {
      throw new ERPApiError(
        "Too many requests. Please wait a moment and try again.",
        429,
        "RATE_LIMIT_EXCEEDED"
      );
    }

    if (res.status === 413) {
      throw new ERPApiError(
        "Your submission is too large. Please reduce the content or attachment and try again.",
        413
      );
    }

    if (res.status === 400) {
      const userMessage =
        typeof data?.error === "string" && data.error.trim().length > 0
          ? data.error.replace(/[<>]/g, "")
          : "Please check the information entered and try again.";
      throw new ERPApiError(userMessage, 400, data?.code, data?.details);
    }

    if (res.status >= 500) {
      throw new ERPApiError(
        "Our submission service encountered a temporary error. Please try again in a moment.",
        res.status
      );
    }

    throw new ERPApiError(
      data?.error || "We couldn't process your submission right now. Please try again.",
      res.status
    );
  } catch (err: any) {
    clearTimeout(timer);

    if (err instanceof ERPApiError) {
      throw err;
    }

    if (err.name === "AbortError") {
      throw new ERPApiError(
        "The submission request timed out. Please check your connection and try again.",
        408
      );
    }

    throw new ERPApiError(
      "We couldn't reach our submission service right now. Please try again.",
      0
    );
  }
}

/**
 * Upload a candidate resume file directly to the ERP's private upload service.
 * Returns the attachment metadata to be sent within the subsequent CAREER submission payload.
 */
export async function uploadCareerResume(params: {
  file: File;
  idempotencyKey: string;
  timeoutMs?: number;
}): Promise<AttachmentMetadata> {
  const { file, idempotencyKey, timeoutMs = 45000 } = params;

  // Local pre-validation
  const localCheck = validateResumeFileLocally(file);
  if (!localCheck.isValid) {
    throw new ERPApiError(localCheck.error || "Invalid file.", 400);
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("idempotencyKey", idempotencyKey);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(UPLOADS_ENDPOINT, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timer);

    let data: UploadResponse | any = null;
    try {
      data = await res.json();
    } catch {
      // Non-JSON response
    }

    if (res.ok && data?.success) {
      const metadata = data.metadata || {
        storageKey: data.storageKey,
        fileName: file.name,
        mimeType: file.type || "application/pdf",
        size: file.size,
      };

      if (!metadata.storageKey) {
        throw new ERPApiError("Upload succeeded but storage identifier was missing.", 500);
      }

      return metadata;
    }

    if (res.status === 413) {
      throw new ERPApiError(
        "Your resume is too large. Please upload a file smaller than 5MB.",
        413
      );
    }

    if (res.status === 429) {
      throw new ERPApiError(
        "Too many upload attempts. Please wait a moment and try again.",
        429
      );
    }

    if (res.status === 400) {
      throw new ERPApiError(
        data?.error || "We couldn't upload your resume. Please check file format and try again.",
        400
      );
    }

    throw new ERPApiError(
      data?.error || "We couldn't upload your resume. Please try again.",
      res.status
    );
  } catch (err: any) {
    clearTimeout(timer);

    if (err instanceof ERPApiError) {
      throw err;
    }

    if (err.name === "AbortError") {
      throw new ERPApiError(
        "Resume upload timed out. Please check your connection and try again.",
        408
      );
    }

    throw new ERPApiError(
      "We couldn't upload your resume. Please try again.",
      0
    );
  }
}
