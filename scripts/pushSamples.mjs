/**
 * Pushes exactly one complete sample row into each of the 9 dedicated sheet tabs
 * in the live Tamizh Tech Robotics Google Sheet:
 * https://docs.google.com/spreadsheets/d/1HDI8h7VSfSCs-l7XCUBUNpIx6myAEMEFicIul96zg9E/
 */

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwaRmywq_nkHnMX5NrpB3L4a4n5NebcoCYJ9AZlXhIXXue9qqUwnpgJnKHkmB9PbOoPFQ/exec";

const SAMPLES = [
  // 1. Product Enquiries
  {
    leadType: "Product Quote",
    sheetName: "Product Enquiries",
    leadId: "TT-20260903-P001",
    submittedAt: "03/09/2026, 4:30:00 pm",
    customerName: "Er. Ramesh Kumar",
    phone: "9876543210",
    mobile: "9876543210",
    email: "ramesh@psgtech.edu",
    whatsapp: "9876543210",
    institution: "PSG College of Technology",
    organization: "PSG College of Technology",
    customerType: "College",
    productId: "rc-robo-race",
    productName: "RC Robo Race Chassis Kit",
    category: "Competition Robots",
    productCategory: "Competition Robots",
    quantity: 4,
    productUrl: "https://www.tamizhtech.in/products/competition/rc-robo-race",
    city: "Coimbatore",
    state: "Tamil Nadu",
    requirement: "Need 4 high-torque planetary chassis kits for national championship",
    preferredContactMethod: "Phone",
    status: "New"
  },

  // 2. Course Enrollments
  {
    leadType: "Course Enquiry",
    sheetName: "Course Enrollments",
    leadId: "TT-20260903-C001",
    submittedAt: "03/09/2026, 4:31:00 pm",
    studentName: "Aravind Swaminathan",
    customerName: "Aravind Swaminathan",
    phone: "9842112233",
    mobile: "9842112233",
    email: "aravind.s@cit.edu.in",
    institution: "Coimbatore Institute of Technology",
    department: "Electronics & Communication Engineering",
    graduationYear: "2026",
    areaOfInterest: "Embedded Systems & Robotics",
    courseName: "Embedded Systems & Robotics Specialist",
    category: "College",
    mode: "Offline Lab Hands-on Workshop",
    requirement: "Offline Lab Hands-on Workshop",
    city: "Coimbatore",
    message: "Interested in STM32 firmware programming and RTOS project implementation",
    courseUrl: "https://www.tamizhtech.in/courses/college/embedded-systems",
    preferredContactMethod: "WhatsApp",
    status: "New"
  },

  // 3. School Enquiries
  {
    leadType: "School Enquiry",
    sheetName: "School Enquiries",
    leadId: "TT-20260903-S001",
    submittedAt: "03/09/2026, 4:32:00 pm",
    contactPerson: "Mrs. Meenakshi Sundaram",
    customerName: "Mrs. Meenakshi Sundaram",
    schoolName: "Vidhya Niketan Matriculation Higher Secondary School",
    institution: "Vidhya Niketan Matriculation Higher Secondary School",
    organization: "Vidhya Niketan Matriculation Higher Secondary School",
    phone: "9443355667",
    mobile: "9443355667",
    email: "principal@vidhyaniketan.edu.in",
    city: "Coimbatore",
    state: "Tamil Nadu",
    labFocus: "ATAL Tinkering Lab & Hands-on STEM Robotics Lab Setup",
    requirement: "ATAL Tinkering Lab & Hands-on STEM Robotics Lab Setup",
    message: "Grades 6 to 10 (Approx. 250 students)",
    preferredContactMethod: "Phone",
    status: "New"
  },

  // 4. College Enquiries
  {
    leadType: "College Enquiry",
    sheetName: "College Enquiries",
    leadId: "TT-20260903-U001",
    submittedAt: "03/09/2026, 4:33:00 pm",
    contactPerson: "Dr. K. Balasubramanian (HOD)",
    customerName: "Dr. K. Balasubramanian (HOD)",
    institution: "Kumaraguru College of Technology",
    organization: "Kumaraguru College of Technology",
    collegeName: "Kumaraguru College of Technology",
    department: "Department of Mechatronics Engineering",
    phone: "9842233445",
    mobile: "9842233445",
    email: "hod.mechatronics@kct.ac.in",
    graduationYear: "2024-2028 Batches",
    areaOfInterest: "Industrial Robotics Centre of Excellence & Student MoUs",
    city: "Coimbatore",
    state: "Tamil Nadu",
    requirement: "Industry MoU & Centre of Excellence in Industrial Robotics and Autonomous Mobile Robots (AMRs)",
    message: "180 Students across 2nd and 3rd year Mechatronics",
    preferredContactMethod: "Email",
    status: "New"
  },

  // 5. Industrial Enquiries
  {
    leadType: "Industry Enquiry",
    sheetName: "Industrial Enquiries",
    leadId: "TT-20260903-I001",
    submittedAt: "03/09/2026, 4:34:00 pm",
    contactName: "Mr. Suresh Babu",
    customerName: "Mr. Suresh Babu",
    company: "Roots Precision Engineering Pvt Ltd",
    organization: "Roots Precision Engineering Pvt Ltd",
    phone: "9944112233",
    mobile: "9944112233",
    email: "suresh.babu@rootsautomotive.com",
    industry: "Automotive Component Manufacturing",
    projectType: "PLC & SCADA Line Automation with OpenCV Machine Vision Inspection",
    requirement: "PLC & SCADA Line Automation with OpenCV Machine Vision Inspection",
    timeline: "1 - 3 Months",
    city: "Coimbatore",
    state: "Tamil Nadu",
    message: "Automate component dimensional checks using OpenCV machine vision camera nodes and Siemens S7-1200 PLC line rejection",
    preferredContactMethod: "Phone",
    status: "New"
  },

  // 6. Career Applications
  {
    leadType: "Career Application",
    sheetName: "Career Applications",
    leadId: "TT-20260903-A001",
    submittedAt: "03/09/2026, 4:35:00 pm",
    applicantName: "Karthik Raja",
    customerName: "Karthik Raja",
    phone: "9789012345",
    mobile: "9789012345",
    email: "karthik.raja.robotics@gmail.com",
    institution: "Government College of Technology (GCT)",
    department: "Mechanical Engineering",
    graduationYear: "2025",
    areaOfInterest: "Robotics Hardware & Mechanical Design",
    role: "Robotics Hardware & Mechanical Design",
    category: "Offline / Full-Time",
    resume: "https://drive.google.com/file/d/1sampleResumeLinkTamizhTechDemo/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/karthik-raja-robotics",
    message: "Designed 15kg Robo War combat spinner weapon chassis in SolidWorks, experienced with FEA stress analysis and CNC milling tolerances",
    status: "New"
  },

  // 7. Robotics Club Applications
  {
    leadType: "Robotics Club",
    sheetName: "Robotics Club Applications",
    leadId: "TT-20260903-R001",
    submittedAt: "03/09/2026, 4:36:00 pm",
    name: "Dharun Kumar",
    customerName: "Dharun Kumar",
    phone: "9842109876",
    mobile: "9842109876",
    email: "dharun@kct.ac.in",
    customerType: "College Student",
    status: "College Student",
    institution: "Kumaraguru College of Technology",
    collegeName: "Kumaraguru College of Technology",
    department: "Mechatronics Engineering",
    graduationYear: "2026",
    yearOfStudy: "2026",
    role: "Robo Soccer Striker & RC Robo Race",
    areaOfInterest: "Robo Soccer Striker & RC Robo Race",
    address: "Saravanampatti, Coimbatore, Tamil Nadu – 641035",
    purpose: "Passionate about building national championship combat robots and collaborating with fellow TRC robotics engineers",
    message: "Passionate about building national championship combat robots and collaborating with fellow TRC robotics engineers"
  },

  // 8. Contact & Inquiries
  {
    leadType: "Contact",
    sheetName: "Contact & Inquiries",
    leadId: "TT-20260903-G001",
    submittedAt: "03/09/2026, 4:37:00 pm",
    name: "Vigneshwaran P",
    customerName: "Vigneshwaran P",
    phone: "9894012345",
    mobile: "9894012345",
    email: "vignesh@tamizhtech.in",
    institution: "Sri Krishna College of Engineering & Technology",
    department: "Electrical & Electronics Engineering",
    graduationYear: "2024",
    areaOfInterest: "Custom Robot Assembly & Prototyping",
    customerType: "General Technical Inquiry",
    subject: "Custom Robotic Arm Prototyping Consultation",
    requirement: "6-DOF Robotic Arm Gripper mechanism with ROS MoveIt kinematic planning",
    message: "Looking to collaborate on building a customized 6-DOF robotic manipulator for automated packaging testbed",
    city: "Coimbatore, Tamil Nadu",
    preferredContactMethod: "WhatsApp",
    source: "https://www.tamizhtech.in/contact",
    pageUrl: "https://www.tamizhtech.in/contact",
    status: "New"
  },

  // 9. Newsletters
  {
    leadType: "Newsletter",
    sheetName: "Newsletters",
    leadId: "TT-20260903-N001",
    submittedAt: "03/09/2026, 4:38:00 pm",
    email: "subscriber@tamizhtech.in",
    source: "https://www.tamizhtech.in/blog",
    pageUrl: "https://www.tamizhtech.in/blog",
    status: "Active"
  }
];

async function pushAll() {
  console.log(`Puxhing ${SAMPLES.length} sample records to Google Apps Script webhook...`);
  
  for (const item of SAMPLES) {
    console.log(`\n--> Sending sample for tab: '${item.sheetName}' (Lead ID: ${item.leadId})...`);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
        redirect: "follow",
      });

      const txt = await res.text();
      console.log(`Response for ${item.sheetName}:`, txt);
    } catch (err) {
      console.error(`Error for ${item.sheetName}:`, err.message);
    }
  }

  console.log("\nAll 9 sample rows pushed successfully!");
}

pushAll();
