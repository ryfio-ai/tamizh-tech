/**
 * Canonical TamizhTech ERP Inbound Submission & Upload Types
 * Adheres strictly to the frozen ERP public API contract.
 */

export type SubmissionType = "RFQ" | "CONTACT" | "CAREER" | "CLUB_REGISTRATION";

export interface AttachmentMetadata {
  storageKey: string;
  fileName: string;
  mimeType: string;
  size: number;
  checksum?: string;
  createdAt?: string;
}

export interface RFQPayload {
  name: string;
  mobile?: string;
  email?: string;
  company?: string;
  city?: string;
  state?: string;
  country?: string;
  subject?: string;
  message?: string;
  productRequirements?: string;
  quantity?: number;
  configurationRequirements?: string;
  technicalRequirements?: string;
  budget?: string;
  deliveryTimeline?: string;
  attachmentReferences?: unknown;
}

export interface ContactPayload {
  name: string;
  mobile?: string;
  email?: string;
  company?: string;
  city?: string;
  state?: string;
  subject?: string;
  message?: string;
}

export interface CareerPayload {
  name: string;
  mobile?: string;
  email?: string;
  position?: string;
  qualification?: string;
  experience?: string;
  location?: string;
  coverMessage?: string;
  attachmentMetadata?: AttachmentMetadata;
}

export interface ClubRegistrationPayload {
  name: string;
  mobile?: string;
  email?: string;
  institution?: string;
  department?: string;
  year?: string;
  city?: string;
  state?: string;
  interests?: string[];
  message?: string;
}

export type SubmissionPayloadMap = {
  RFQ: RFQPayload;
  CONTACT: ContactPayload;
  CAREER: CareerPayload;
  CLUB_REGISTRATION: ClubRegistrationPayload;
};

export interface SubmissionEnvelope<T extends SubmissionType = SubmissionType> {
  type: T;
  idempotencyKey: string;
  source?: "WEBSITE";
  payload: SubmissionPayloadMap[T];
}

export interface SubmissionResponse {
  success: boolean;
  submissionNo: string;
  message?: string;
  isDuplicate?: boolean;
}

export interface UploadResponse {
  success: boolean;
  storageKey: string;
  metadata?: AttachmentMetadata;
  message?: string;
}

export class ERPApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;

  constructor(message: string, status: number, code?: string, details?: unknown) {
    super(message);
    this.name = "ERPApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}
