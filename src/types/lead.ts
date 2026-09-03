export type LeadType =
  | 'Product Enquiry'
  | 'Product Quote'
  | 'Cart Enquiry'
  | 'Contact'
  | 'School Enquiry'
  | 'College Enquiry'
  | 'Industry Enquiry'
  | 'Course Enquiry'
  | 'Career Application'
  | 'Robotics Club'
  | 'Newsletter';

export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Qualified'
  | 'Quoted'
  | 'Negotiating'
  | 'Converted'
  | 'Closed'
  | 'Spam';

export type CustomerType =
  | 'Individual'
  | 'Student'
  | 'School'
  | 'College'
  | 'University'
  | 'Startup'
  | 'Business'
  | 'Industry'
  | 'Other';

export type PreferredContactMethod = 'Phone' | 'WhatsApp' | 'Email';

export interface LeadPayload {
  leadId: string;
  submittedAt: string;
  leadType: LeadType;
  source: string;
  pageUrl: string;

  // Customer / Student / Professional Information
  customerName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  organization?: string;
  institution?: string;
  department?: string;
  graduationYear?: string;
  areaOfInterest?: string;
  customerType?: CustomerType | string;

  // Product Fields (Automatic when applicable)
  productId?: string;
  productName?: string;
  productCategory?: string;
  productCategorySlug?: string;
  productSlug?: string;
  productUrl?: string;
  quantity?: number | string;

  // Multi-product line items (Cart)
  lineItems?: string;

  // Course Fields
  courseName?: string;
  courseCategory?: string;
  courseUrl?: string;

  // Career Fields
  careerCategory?: string;
  jobTitle?: string;
  jobSlug?: string;
  resumeUrl?: string;

  // Location
  city?: string;
  state?: string;
  country?: string;

  // Message & Requirements
  requirement?: string;
  subject?: string;
  message?: string;
  budget?: string;
  preferredContactMethod?: PreferredContactMethod | string;

  // Internal CRM Controls
  status?: LeadStatus;
  assignedTo?: string;
  notes?: string;

  // Spam Protection Honeypot
  honeypot?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  message: string;
  error?: string;
}
