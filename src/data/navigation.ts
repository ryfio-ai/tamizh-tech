export interface NavLinkItem {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavGroup {
  heading: string;
  items: NavLinkItem[];
}

export interface SolutionsColumn {
  audience: string;
  tagline: string;
  items: NavLinkItem[];
}

// ── Solutions Mega Menu Data ───────────────────────────────────────────────────
export const solutionsMegaMenu: SolutionsColumn[] = [
  {
    audience: "Students & Makers",
    tagline: "Hands-on bots & prototyping",
    items: [
      { label: "Robotics Kits", href: "/products/competition", desc: "Competition & learning chassis" },
      { label: "Project Development", href: "/projects", desc: "Hardware guidance & capstones" },
      { label: "3D Printing", href: "/services/3d-printing", desc: "High quality PLA, PETG & TPU prints" },
      { label: "Laser Cutting", href: "/services/laser-cutting", desc: "Precision stainless steel sheet cutting" },
      { label: "PCB Services", href: "/services/pcb-design-fabrication-assembly", desc: "Custom circuit fabrication" },
      { label: "Robotics Training", href: "/courses", desc: "Beginner to advanced courses" }
    ]
  },
  {
    audience: "Schools",
    tagline: "K-12 STEM & ATL innovation",
    items: [
      { label: "STEM Labs", href: "/schools", desc: "Turnkey ATL lab setup" },
      { label: "Robotics Programs", href: "/courses/school", desc: "Curriculum-aligned courses" },
      { label: "School Workshops", href: "/schools", desc: "Hands-on science bootcamps" },
      { label: "Competition Support", href: "/events", desc: "Tournament prep & arena kits" }
    ]
  },
  {
    audience: "Colleges",
    tagline: "Engineering R&D & CoE",
    items: [
      { label: "Robotics Labs", href: "/colleges", desc: "Advanced Centre of Excellence" },
      { label: "Engineering Projects", href: "/projects", desc: "Industry-grade capstones" },
      { label: "Training Programs", href: "/courses/college", desc: "Embedded, AI & drone tracks" },
      { label: "R&D Collaboration", href: "/colleges", desc: "Faculty & student innovation" }
    ]
  },
  {
    audience: "Industries",
    tagline: "Factory automation & vision",
    items: [
      { label: "Industrial Automation", href: "/services/industrial-automation", desc: "PLC, SCADA & conveyor control" },
      { label: "Robotics Integration", href: "/solutions", desc: "AGVs & multi-axis manipulators" },
      { label: "Machine Vision", href: "/services#ai", desc: "Real-time defect detection" },
      { label: "IoT & Embedded", href: "/services#iot", desc: "Remote telemetry & telemetry" },
      { label: "Custom Engineering", href: "/services#consulting", desc: "Special purpose machinery" }
    ]
  },
  {
    audience: "Startups & Teams",
    tagline: "Speed-to-market prototypes",
    items: [
      { label: "Rapid Prototyping", href: "/services/3d-printing", desc: "Functional concept parts" },
      { label: "PCB Development", href: "/services/pcb-design-fabrication-assembly", desc: "Schematic to assembled board" },
      { label: "3D Printing & Enclosures", href: "/services/3d-printing", desc: "PLA, PETG & TPU custom parts" },
      { label: "Laser Cutting", href: "/services/laser-cutting", desc: "Stainless steel chassis & brackets" },
      { label: "Product Engineering", href: "/solutions", desc: "Full-lifecycle engineering" }
    ]
  }
];

// ── Products Dropdown Data ─────────────────────────────────────────────────────
export const productsDropdown = {
  heading: "Products",
  viewAllHref: "/products",
  viewAllLabel: "View All Products",
  categories: [
    {
      title: "Robotics & Kits",
      items: [
        { label: "Competition Robots", href: "/products/competition", desc: "Combat & race bots engineered in Coimbatore" },
        { label: "RC Robo Race", href: "/products/competition/rc-robo-race", desc: "High-RPM racing & drift chassis" },
        { label: "RC Robo Soccer", href: "/products/competition/rc-robo-soccer", desc: "High-torque tournament striker" }
      ]
    },
    {
      title: "Radio Controllers",
      items: [
        { label: "Radio Controllers", href: "/products/radio-controllers", desc: "FlySky 2.4GHz transmitters & telemetry" },
        { label: "FlySky FS-i6X 10CH", href: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver", desc: "10-Channel telemetry controller" }
      ]
    }
  ]
};

// ── Services Mega Menu Data ────────────────────────────────────────────────────
export const servicesMegaMenu = {
  heading: "Services",
  viewAllHref: "/services",
  viewAllLabel: "View All Services",
  groups: [
    {
      title: "Core Engineering",
      items: [
        { label: "Robotics & Automation", href: "/services/robotics-automation", desc: "Custom autonomous & manipulator systems" },
        { label: "Industrial Automation", href: "/services/industrial-automation", desc: "PLC, SCADA & factory lines" }
      ]
    },
    {
      title: "Prototyping & Fabrication",
      isStrategic: true,
      items: [
        { label: "3D Printing", href: "/services/3d-printing", desc: "High Quality & Affordable (PLA, PETG, TPU)", badge: "Strategic" },
        { label: "Laser Cutting", href: "/services/laser-cutting", desc: "Precision Stainless Steel Cutting (Not Wood)", badge: "Strategic" },
        { label: "PCB Services", href: "/services/pcb-design-fabrication-assembly", desc: "Design + Fabrication + Assembly (PCBA)", badge: "Strategic" }
      ]
    },
    {
      title: "Technology",
      items: [
        { label: "Embedded Systems", href: "/services#embedded", desc: "Microcontroller firmware & RTOS" },
        { label: "IoT Solutions", href: "/services#iot", desc: "Sensors & cloud telemetry" },
        { label: "AI & Computer Vision", href: "/services#ai", desc: "Defect inspection & edge models" },
        { label: "Drone Technology", href: "/services#drone", desc: "UAV design & flight systems" }
      ]
    },
    {
      title: "Education & R&D",
      items: [
        { label: "STEM Labs", href: "/schools", desc: "Turnkey school lab setup" },
        { label: "R&D Collaboration", href: "/colleges", desc: "Centre of Excellence & patents" },
        { label: "Training & Workshops", href: "/courses", desc: "Practical hands-on bootcamps" },
        { label: "Engineering Consulting", href: "/services#consulting", desc: "Architecture & feasibility review" }
      ]
    }
  ]
};

// ── Learn Dropdown Data ────────────────────────────────────────────────────────
export const learnDropdown = {
  heading: "Learn",
  items: [
    { label: "Courses", href: "/courses", desc: "STEM, college engineering, & automation tracks" },
    { label: "Technical Blog", href: "/blog", desc: "Robotics guides, PLC vs SCADA, & OpenCV" },
    { label: "Events & Competitions", href: "/events", desc: "National tournaments, battles & fests" },
    { label: "Robotics in Coimbatore", href: "/robotics-company-in-coimbatore", desc: "Regional engineering ecosystem" },
    { label: "FAQs", href: "/about#faq", desc: "Answers to common institutional queries" }
  ]
};

// ── Company Dropdown Data ──────────────────────────────────────────────────────
export const companyDropdown = {
  heading: "Company",
  items: [
    { label: "About Us", href: "/about", desc: "Company journey, mission & values" },
    { label: "Founder Profile", href: "/founder", desc: "Er. K. Tamizharasan" },
    { label: "Careers", href: "/careers", desc: "Join our engineering & training team" },
    { label: "Robotics Club", href: "/robotics-club/join", desc: "Tamizh Robotics Club (TRC) membership" },
    { label: "Contact Us", href: "/contact", desc: "Coimbatore office & direct lines" }
  ]
};
