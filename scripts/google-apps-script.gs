/**
 * =========================================================================
 * TAMIZH TECH ROBOTICS COMPANY — MASTER MULTI-SHEET CRM ROUTER (FINAL)
 * Target Google Sheet: 1HDI8h7VSfSCs-l7XCUBUNpIx6myAEMEFicIul96zg9E
 *
 * Dedicated Tabs:
 *   1. Product Enquiries
 *   2. Course Enrollments
 *   3. School Enquiries
 *   4. College Enquiries
 *   5. Industrial Enquiries
 *   6. Career Applications
 *   7. Robotics Club Applications  <-- DEDICATED CLUB JOIN TAB
 *   8. Contact & Inquiries
 *   9. Newsletters
 * =========================================================================
 */

// Tab configurations: Dedicated column headers & brand colors
var TAB_CONFIGS = {
  "Product Enquiries": {
    color: "#FF6B00", // Brand Orange
    headers: [
      "Lead ID", "Date", "Customer Name", "Mobile No", "Mail ID", "WhatsApp", 
      "Institution / Organization", "Customer Type", "Product ID", "Product Name", 
      "Category", "Quantity", "Product URL", "City", "State", 
      "Requirement / Notes", "Preferred Contact", "Status"
    ]
  },
  "Course Enrollments": {
    color: "#002B66", // Navy Blue
    headers: [
      "Lead ID", "Date", "Student Name", "Mobile No", "Mail ID", 
      "Institution", "Department", "Graduation Year", "Area of Interest / Role", 
      "Course Name", "Category", "Mode / Requirement", "City", 
      "Questions & Notes", "Course URL", "Preferred Contact", "Status"
    ]
  },
  "School Enquiries": {
    color: "#FF6B00", // Brand Orange
    headers: [
      "Lead ID", "Date", "Contact Person", "School Name", "Mobile No", "Mail ID", 
      "City", "State", "Lab Focus", "Grade Range & Students", 
      "Preferred Contact", "Status"
    ]
  },
  "College Enquiries": {
    color: "#002B66", // Navy Blue
    headers: [
      "Lead ID", "Date", "Contact Person", "Institution / College", "Department", 
      "Mobile No", "Mail ID", "Graduation Year / Batch", "Area of Interest / Role", 
      "City", "State", "Requirement", "Approx Students & Notes", 
      "Preferred Contact", "Status"
    ]
  },
  "Industrial Enquiries": {
    color: "#D95700", // Dark Rust Orange
    headers: [
      "Lead ID", "Date", "Contact Name", "Company / Enterprise", "Mobile No", "Mail ID", 
      "Industry Vertical", "Project Type", "Expected Timeline", "City", "State", 
      "Technical Requirements", "Preferred Contact", "Status"
    ]
  },
  "Career Applications": {
    color: "#1E293B", // Dark Slate
    headers: [
      "Lead ID", "Date", "Applicant Name", "Mobile No", "Mail ID", 
      "Institution", "Department", "Graduation Year", "Area of Interest / Role", 
      "Format / Category", "Resume Drive Link", "LinkedIn Profile", "Key Projects & Notes", "Status"
    ]
  },
  "Robotics Club Applications": {
    color: "#FF6B00", // Brand Orange
    headers: [
      "Lead ID", "Date", "Name", "Mobile No", "Mail ID", 
      "Membership Category", "Institution", "Department", 
      "Graduation Year", "Area of Interest / Role", "Address", 
      "Purpose & Motivation", "Status"
    ]
  },
  "Contact & Inquiries": {
    color: "#FF6B00", // Brand Orange
    headers: [
      "Lead ID", "Date", "Name", "Mobile No", "Mail ID", 
      "Institution", "Department", "Graduation Year", "Area of Interest / Role", 
      "Customer Type", "Subject", "Requirement / Purpose", "Message", 
      "City / Location", "Preferred Contact", "Source Page", "Status"
    ]
  },
  "Newsletters": {
    color: "#0F766E", // Teal
    headers: [
      "Lead ID", "Date", "Email", "Source Page", "Status"
    ]
  }
};

/**
 * ⭐️ 1-CLICK POPULATOR (DEFAULT FUNCTION)
 * Click 'Run' to create & populate all 9 tabs with complete columns and sample rows!
 */
function pushAllMockDataDirectly() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var samples = {
    "Product Enquiries": [
      "TT-PROD-SAMPLE", "03/09/2026, 4:55 PM", "Er. Ramesh Kumar", "9876543210", "ramesh@psgtech.edu", "9876543210",
      "PSG College of Technology", "College", "rc-robo-race", "RC Robo Race Chassis Kit",
      "Competition Robots", 4, "https://www.tamizhtech.in/products/competition/rc-robo-race",
      "Coimbatore", "Tamil Nadu", "Need 4 high-torque planetary chassis kits for national championship", "Phone", "New"
    ],
    "Course Enrollments": [
      "TT-CRS-SAMPLE", "03/09/2026, 4:55 PM", "Aravind Swaminathan", "9842112233", "aravind.s@cit.edu.in",
      "Coimbatore Institute of Technology", "Electronics & Communication Engineering", "2026", "Embedded Systems & Robotics",
      "Embedded Systems & Robotics Specialist", "College Training", "Offline Lab Hands-on Workshop", "Coimbatore",
      "Interested in STM32 firmware and RTOS programming", "https://www.tamizhtech.in/courses/college/embedded-systems", "WhatsApp", "New"
    ],
    "School Enquiries": [
      "TT-SCH-SAMPLE", "03/09/2026, 4:55 PM", "Mrs. Meenakshi Sundaram", "Vidhya Niketan Matriculation Higher Secondary School",
      "9443355667", "principal@vidhyaniketan.edu.in", "Coimbatore", "Tamil Nadu",
      "ATAL Tinkering Lab & Hands-on STEM Robotics Lab Setup", "Grades 6 to 10 (Approx. 250 students)", "Phone", "New"
    ],
    "College Enquiries": [
      "TT-COL-SAMPLE", "03/09/2026, 4:55 PM", "Dr. K. Balasubramanian (HOD)", "Kumaraguru College of Technology",
      "Department of Mechatronics Engineering", "9842233445", "hod.mechatronics@kct.ac.in", "2024-2028 Batches",
      "Industrial Robotics Centre of Excellence & Student MoUs", "Coimbatore", "Tamil Nadu",
      "Industry MoU & Centre of Excellence in Industrial Robotics and AMRs", "180 Students across 2nd and 3rd year Mechatronics", "Email", "New"
    ],
    "Industrial Enquiries": [
      "TT-IND-SAMPLE", "03/09/2026, 4:55 PM", "Mr. Suresh Babu", "Roots Precision Engineering Pvt Ltd", "9944112233",
      "suresh.babu@rootsautomotive.com", "Automotive Component Manufacturing", "PLC & SCADA Line Automation with OpenCV Vision",
      "1 - 3 Months", "Coimbatore", "Tamil Nadu", "Automate dimensional checks using OpenCV camera nodes & Siemens S7-1200 PLC", "Phone", "New"
    ],
    "Career Applications": [
      "TT-CAR-SAMPLE", "03/09/2026, 4:55 PM", "Karthik Raja", "9789012345", "karthik.raja.robotics@gmail.com",
      "Government College of Technology (GCT)", "Mechanical Engineering", "2025", "Robotics Hardware & Mechanical Design",
      "Full-Time / Offline", "https://drive.google.com/file/d/1sampleResumeLink/view?usp=sharing", "https://linkedin.com/in/karthik-raja-robotics",
      "Designed 15kg Robo War combat chassis in SolidWorks with FEA analysis", "New"
    ],
    "Robotics Club Applications": [
      "TT-CLB-SAMPLE", "03/09/2026, 4:55 PM", "Dharun Kumar", "9842109876", "dharun@kct.ac.in",
      "College Student", "Kumaraguru College of Technology", "Mechatronics Engineering",
      "2026", "Robo Soccer Striker & RC Robo Race", "Saravanampatti, Coimbatore, Tamil Nadu – 641035",
      "Passionate about building national championship combat robots and collaborating with fellow TRC robotics engineers", "New"
    ],
    "Contact & Inquiries": [
      "TT-CNT-SAMPLE", "03/09/2026, 4:55 PM", "Vigneshwaran P", "9894012345", "vignesh@tamizhtech.in",
      "Sri Krishna College of Engineering", "Electrical & Electronics Engineering", "2024", "Custom Robot Assembly & Prototyping",
      "General Technical Inquiry", "Custom Robotic Arm Prototyping Consultation", "6-DOF Robotic Arm Gripper mechanism with ROS MoveIt",
      "Looking to collaborate on building a customized 6-DOF robotic manipulator for automated packaging testbed",
      "Coimbatore, Tamil Nadu", "WhatsApp", "https://www.tamizhtech.in/contact", "New"
    ],
    "Newsletters": [
      "TT-NWL-SAMPLE", "03/09/2026, 4:55 PM", "subscriber@tamizhtech.in", "https://www.tamizhtech.in/blog", "Active"
    ]
  };

  Object.keys(TAB_CONFIGS).forEach(function(tabName) {
    var sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
    }

    var config = TAB_CONFIGS[tabName];
    var headers = config.headers;
    var color = config.color;

    // Header formatting
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setFontColor("#FFFFFF")
      .setBackground(color)
      .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    // Append complete sample row
    var sample = samples[tabName];
    if (sample) {
      sheet.appendRow(sample);
    }
  });

  Logger.log("All 9 tabs (including Robotics Club Applications) formatted and populated successfully!");
}

/**
 * Routes lead to the designated sheet name
 */
function getTargetSheetName(data) {
  data = data || {};
  if (data.sheetName && TAB_CONFIGS[data.sheetName]) {
    return data.sheetName;
  }

  var leadType = String(data.leadType || "").trim();

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
    case "Robotics Club Membership":
    case "Club Application":
    case "Applications":
      return "Robotics Club Applications";

    case "Newsletter":
      return "Newsletters";

    case "Contact":
    default:
      return "Contact & Inquiries";
  }
}

function cleanKey(str) {
  return String(str || "").toLowerCase().replace(/[^a-z0-9]/g, "").trim();
}

function mapDataToHeader(header, data) {
  data = data || {};
  var k = cleanKey(header);

  // 1. Lead ID
  if (k === "leadid" || k === "id" || k === "ref" || k === "referenceid") return data.leadId || "";

  // 2. Date
  if (k === "date" || k === "submittedat" || k === "timestamp") return data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // 3. Name
  if (k === "name" || k === "customername" || k === "studentname" || k === "contactperson" || k === "contactname" || k === "applicantname") {
    return data.customerName || data.name || data.contactPerson || "";
  }

  // 4. Mobile No / Phone
  if (k === "mobileno" || k === "mobile" || k === "phone" || k === "phonenumber" || k === "mobilenumber" || k === "contactphone") {
    return data.phone || data.mobile || "";
  }

  // 5. Mail ID / Email
  if (k === "mailid" || k === "email" || k === "businessemail" || k === "emailaddress") {
    return data.email || "";
  }

  // 6. WhatsApp
  if (k === "whatsapp" || k === "whatsappnumber") {
    return data.whatsapp || data.phone || "";
  }

  // 7. Institution / College / School / Company / Organization
  if (k === "institution" || k === "institutioncollege" || k === "institutionorganization" || k === "organization" || k === "company" || k === "companyenterprise" || k === "schoolname" || k === "collegename" || k === "companyname" || k === "collegeorg") {
    return data.institution || data.organization || data.college || data.collegeName || data.schoolName || data.company || "";
  }

  // 8. Department / Branch / Stream
  if (k === "department" || k === "dept" || k === "branch" || k === "stream" || k === "departmentbranch") {
    return data.department || data.dept || data.branch || "";
  }

  // 9. Graduation Year / Year of Study / Batch
  if (k === "graduationyear" || k === "yearofstudy" || k === "gradyear" || k === "graduationyearbatch" || k === "batch" || k === "year") {
    return data.graduationYear || data.yearOfStudy || data.experience || "";
  }

  // 10. Area of Interest / Role
  if (k === "areaofinterest" || k === "areaofinterestrole" || k === "appliedrole" || k === "role" || k === "interest" || k === "targetrole") {
    return data.areaOfInterest || data.role || data.jobTitle || data.requirement || "";
  }

  // 11. Resume Drive Link
  if (k === "resumedrivelink" || k === "resumelink" || k === "resume") {
    return data.resume || data.resumeUrl || "";
  }

  // 12. LinkedIn Profile
  if (k === "linkedin" || k === "linkedinprofile") {
    return data.linkedin || "";
  }

  // 13. Customer Type / Membership Category
  if (k === "membershipcategory" || k === "customertype" || k === "type") {
    return data.customerType || data.status || "";
  }

  // 14. Product Specific Fields
  if (k === "productid") return data.productId || "";
  if (k === "productname" || k === "product") return data.productName || "";
  if (k === "category") return data.productCategory || data.courseCategory || data.category || "";
  if (k === "quantity" || k === "qty") return data.quantity || 1;
  if (k === "producturl") return data.productUrl || "";

  // 15. Course Specific Fields
  if (k === "coursename" || k === "course") return data.courseName || data.courseTitle || "";
  if (k === "courseurl") return data.courseUrl || "";
  if (k === "moderequirement") return data.requirement || data.mode || "";

  // 16. School / College / Industry Specific
  if (k === "labfocus") return data.requirement || data.labInterest || "";
  if (k === "graderangestudents") return data.message || "";
  if (k === "approxstudentsnotes") return data.message || "";
  if (k === "industryvertical") return data.industry || "";
  if (k === "projecttype") return data.projectType || data.requirement || "";
  if (k === "expectedtimeline") return data.timeline || "";
  if (k === "technicalrequirements") return data.requirement || data.message || "";

  // 17. Format Preference
  if (k === "formatcategory") return data.careerCategory || data.category || "Online";

  // 18. Club Specific (Address & Motivation)
  if (k === "purposemotivation" || k === "purpose") return data.purpose || data.message || "";
  if (k === "address") return data.address || data.city || "";

  // 19. Location
  if (k === "city") return data.city || "";
  if (k === "state") return data.state || "";
  if (k === "citylocation") return data.city || data.location || "";

  // 20. Subject, Message, Notes
  if (k === "subject") return data.subject || "";
  if (k === "requirementnotes" || k === "requirement" || k === "requirementpurpose") return data.requirement || data.message || "";
  if (k === "message" || k === "questionsnotes" || k === "keyprojectsnotes" || k === "notes") return data.message || data.notes || "";

  // 21. Contact Method & Source
  if (k === "preferredcontact" || k === "contactmode") return data.preferredContactMethod || "Phone";
  if (k === "sourcepage" || k === "source" || k === "pageurl") return data.pageUrl || data.source || "";

  // 22. Status
  if (k === "status") return data.status || "New";

  return "";
}

/**
 * Main Webhook Receiver (POST)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = (e && e.parameter) || {};
      }
    } else {
      data = (e && e.parameter) || {};
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var targetTabName = getTargetSheetName(data);
    var sheet = ss.getSheetByName(targetTabName);

    // Auto-create and format sheet tab if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(targetTabName);
      var config = TAB_CONFIGS[targetTabName] || TAB_CONFIGS["Contact & Inquiries"];
      var initialHeaders = config.headers;

      sheet.getRange(1, 1, 1, initialHeaders.length).setValues([initialHeaders]);
      sheet.getRange(1, 1, 1, initialHeaders.length)
        .setFontWeight("bold")
        .setFontColor("#FFFFFF")
        .setBackground(config.color)
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var lastCol = sheet.getLastColumn();
    var headers = [];
    if (lastCol > 0) {
      headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    } else {
      var config = TAB_CONFIGS[targetTabName] || TAB_CONFIGS["Contact & Inquiries"];
      headers = config.headers;
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }

    // Lead ID idempotency check in Column A
    var leadId = String(data.leadId || "").trim();
    if (leadId && sheet.getLastRow() > 1) {
      var existingIds = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
      for (var i = 0; i < existingIds.length; i++) {
        if (String(existingIds[i][0]).trim() === leadId) {
          return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            duplicate: true,
            leadId: leadId,
            sheet: targetTabName,
            message: "Lead already recorded."
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    // Map incoming data to the sheet headers
    var rowValues = headers.map(function(h) {
      return mapDataToHeader(h, data);
    });

    // Append row
    sheet.appendRow(rowValues);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      leadId: leadId,
      sheet: targetTabName,
      message: "Lead appended successfully to " + targetTabName
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Health check endpoint (GET)
 */
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    name: "Tamizh Tech Robotics Lead Router",
    sheetsConfigured: Object.keys(TAB_CONFIGS)
  })).setMimeType(ContentService.MimeType.JSON);
}
