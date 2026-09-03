/**
 * Pushes exactly one fresh complete sample row with all columns populated into each of the 4 tabs:
 * 1. Contact & Inquiries
 * 2. Career Applications
 * 3. Course Enrollments
 * 4. Product Enquiries
 */

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwaRmywq_nkHnMX5NrpB3L4a4n5NebcoCYJ9AZlXhIXXue9qqUwnpgJnKHkmB9PbOoPFQ/exec";

const FOUR_SAMPLES = [
  // 1. Contact & Inquiries
  {
    leadType: "Contact",
    sheetName: "Contact & Inquiries",
    leadId: "TT-CONTACT-SAMPLE",
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
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

  // 2. Career Applications
  {
    leadType: "Career Application",
    sheetName: "Career Applications",
    leadId: "TT-CAREER-SAMPLE",
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    customerName: "Karthik Raja",
    applicantName: "Karthik Raja",
    phone: "9789012345",
    mobile: "9789012345",
    email: "karthik.raja.robotics@gmail.com",
    institution: "Government College of Technology (GCT)",
    department: "Mechanical Engineering",
    graduationYear: "2025",
    areaOfInterest: "Robotics Hardware & Mechanical Design",
    role: "Robotics Hardware & Mechanical Design",
    category: "Full-Time / Offline",
    resume: "https://drive.google.com/file/d/1sampleResumeDriveLink/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/karthik-raja-robotics",
    message: "Designed 15kg Robo War combat spinner weapon chassis in SolidWorks, experienced with FEA stress analysis and CNC milling tolerances",
    status: "New"
  },

  // 3. Course Enrollments
  {
    leadType: "Course Enquiry",
    sheetName: "Course Enrollments",
    leadId: "TT-COURSE-SAMPLE",
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    customerName: "Aravind Swaminathan",
    studentName: "Aravind Swaminathan",
    phone: "9842112233",
    mobile: "9842112233",
    email: "aravind.s@cit.edu.in",
    institution: "Coimbatore Institute of Technology",
    department: "Electronics & Communication Engineering",
    graduationYear: "2026",
    areaOfInterest: "Embedded Systems & Robotics",
    courseName: "Embedded Systems & Robotics Specialist",
    category: "College Training",
    mode: "Offline Lab Hands-on Workshop",
    requirement: "Offline Lab Hands-on Workshop",
    city: "Coimbatore",
    message: "Interested in STM32 firmware programming and RTOS project implementation",
    courseUrl: "https://www.tamizhtech.in/courses/college/embedded-systems",
    preferredContactMethod: "WhatsApp",
    status: "New"
  },

  // 4. Product Enquiries
  {
    leadType: "Product Quote",
    sheetName: "Product Enquiries",
    leadId: "TT-PRODUCT-SAMPLE",
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
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
  }
];

async function push4Fresh() {
  console.log(`Pushing 1 fresh sample for each of the 4 tabs...`);

  for (const item of FOUR_SAMPLES) {
    console.log(`\n--> Sending fresh sample to tab: '${item.sheetName}' (ID: ${item.leadId})...`);
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

  console.log("\nFinished pushing fresh samples to all 4 tabs!");
}

push4Fresh();
