import { LeadPayload, LeadType } from "@/types/lead";

/**
 * Maps each leadType to its dedicated sheet/tab name.
 */
export function getTabNameForLeadType(leadType?: string): string {
  switch (leadType) {
    case "Product Enquiry":
    case "Product Quote":
    case "Cart Enquiry":
      return "Product Enquiries";

    case "Course Enquiry":
      return "Course Enrollments";

    case "School Enquiry":
      return "School Enquiries";

    case "College Enquiry":
      return "College Enquiries";

    case "Industry Enquiry":
      return "Industrial Enquiries";

    case "Career Application":
      return "Career Applications";

    case "Robotics Club":
      return "Robotics Club Applications";

    case "Newsletter":
      return "Newsletters";

    case "Contact":
    default:
      return "Contact & Inquiries";
  }
}

/**
 * Standard production headers matching Tamizh Tech Robotics Lead Architecture.
 * If the target Google Sheet is empty, these headers are initialized in Row 1.
 */
export const STANDARD_SHEET_HEADERS = [
  "Lead ID",
  "Submitted At",
  "Lead Type",
  "Source",
  "Page URL",
  "Customer Name",
  "Email",
  "Phone",
  "WhatsApp",
  "Organization",
  "Institution",
  "Department",
  "Graduation Year",
  "Area of Interest / Role",
  "Customer Type",
  "Product ID",
  "Product Name",
  "Product Category",
  "Product Category Slug",
  "Product Slug",
  "Product URL",
  "Quantity",
  "Line Items",
  "Course Name",
  "Course Category",
  "Course URL",
  "Career Category",
  "Job Title",
  "Job Slug",
  "City",
  "State",
  "Country",
  "Requirement",
  "Subject",
  "Message",
  "Budget",
  "Preferred Contact Method",
  "Status",
  "Assigned To",
  "Notes"
] as const;

/**
 * Normalizes header string for robust matching:
 * lowercase, removes special characters, and trims whitespace.
 */
function normalizeHeaderName(header: string): string {
  return header.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
}

/**
 * Maps a single lead payload to a specific header name using flexible synonym matching.
 */
export function getFieldValueForHeader(header: string, lead: LeadPayload): string {
  const norm = normalizeHeaderName(header);

  switch (norm) {
    // Lead Identifiers & Meta
    case "leadid":
    case "id":
    case "referenceid":
    case "refid":
      return lead.leadId || "";

    case "submittedat":
    case "date":
    case "timestamp":
    case "createdat":
    case "submissiondate":
      return lead.submittedAt || "";

    case "leadtype":
    case "type":
    case "enquirytype":
    case "inquirytype":
      return lead.leadType || "";

    case "source":
    case "leadsource":
      return lead.source || "";

    case "pageurl":
    case "url":
    case "sourceurl":
    case "referer":
      return lead.pageUrl || "";

    // Customer
    case "customername":
    case "name":
    case "fullname":
    case "contactname":
    case "clientname":
    case "studentname":
      return lead.customerName || "";

    case "email":
    case "emailaddress":
    case "businessemail":
      return lead.email || "";

    case "phone":
    case "mobile":
    case "phonenumber":
    case "mobilenumber":
    case "contactnumber":
    case "contactno":
    case "mobileno":
    case "phoneno":
    case "telephone":
    case "cell":
    case "cellphone":
      return lead.phone || "";

    case "whatsapp":
    case "whatsappnumber":
    case "wanumber":
      return lead.whatsapp || lead.phone || "";

    case "organization":
    case "organizationname":
    case "company":
    case "companyname":
    case "institution":
    case "institutionname":
    case "institute":
    case "schoolname":
    case "collegename":
    case "org":
    case "orgname":
      return lead.institution || lead.organization || "";

    case "department":
    case "dept":
    case "branch":
    case "stream":
    case "departmentbranch":
      return lead.department || "";

    case "graduationyear":
    case "yearofstudy":
    case "gradyear":
    case "year":
    case "batch":
      return lead.graduationYear || "";

    case "areaofinterest":
    case "areaofinterestrole":
    case "interest":
    case "targetrole":
    case "role":
    case "domain":
      return lead.areaOfInterest || lead.jobTitle || lead.requirement || "";

    case "customertype":
    case "usertype":
    case "categoryofuser":
      return lead.customerType || "";

    // Product
    case "productid":
      return lead.productId || "";

    case "productname":
    case "product":
    case "item":
    case "itemname":
      return lead.productName || "";

    case "productcategory":
    case "productcategoryslug":
      return lead.productCategory || "";

    case "productslug":
      return lead.productSlug || "";

    case "producturl":
      return lead.productUrl || "";

    case "quantity":
    case "qty":
    case "numberofunits":
      return lead.quantity !== undefined ? String(lead.quantity) : "";

    case "lineitems":
    case "cartitems":
    case "items":
      return lead.lineItems || "";

    // Course
    case "coursename":
    case "course":
    case "program":
    case "coursetitle":
      return lead.courseName || "";

    case "coursecategory":
      return lead.courseCategory || "";

    case "courseurl":
      return lead.courseUrl || "";

    // Career
    case "careercategory":
      return lead.careerCategory || "";

    case "jobtitle":
    case "position":
    case "role":
      return lead.jobTitle || "";

    case "jobslug":
      return lead.jobSlug || "";

    // Location
    case "city":
    case "location":
    case "town":
      return lead.city || "";

    case "state":
    case "region":
    case "province":
      return lead.state || "";

    case "country":
      return lead.country || "";

    // Requirement & Message
    case "requirement":
    case "requirements":
    case "projecttype":
    case "service":
      return lead.requirement || "";

    case "subject":
    case "inquirysubject":
      return lead.subject || "";

    case "message":
    case "requirementmessage":
    case "details":
    case "notesandrequirements":
    case "comments":
      return lead.message || "";

    case "budget":
    case "pricingrequirement":
    case "estimatedbudget":
      return lead.budget || "";

    case "preferredcontactmethod":
    case "preferredcontact":
    case "contactpreference":
      return lead.preferredContactMethod || "";

    // CRM Status
    case "status":
    case "leadstatus":
      return lead.status || "New";

    case "assignedto":
    case "owner":
      return lead.assignedTo || "";

    case "notes":
    case "internalnotes":
      return lead.notes || "";

    default:
      return "";
  }
}

/**
 * Transforms a LeadPayload into an ordered array of values matching
 * the existing sheet headers. If no existing headers are supplied,
 * uses the standard production headers.
 */
export function mapLeadToRow(headers: string[], lead: LeadPayload): string[] {
  const targetHeaders = headers && headers.length > 0 ? headers : [...STANDARD_SHEET_HEADERS];
  return targetHeaders.map((header) => getFieldValueForHeader(header, lead));
}
