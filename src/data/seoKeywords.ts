export type KeywordIntent = 
  | 'INFORMATIONAL' 
  | 'COMMERCIAL' 
  | 'TRANSACTIONAL' 
  | 'LOCAL' 
  | 'B2B' 
  | 'EDUCATIONAL';

export interface SEOKeywordTarget {
  keyword: string;
  intent: KeywordIntent;
  contentType: 'product' | 'category' | 'course' | 'service' | 'industry' | 'blog' | 'local_landing';
  targetPage: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  businessValue: 'PRIMARY_REVENUE' | 'STRATEGIC_B2B' | 'TALENT_PIPELINE' | 'BRAND_AUTHORITY';
  notes: string;
}

/**
 * Verified keyword targeting mapped strictly to real offerings of Tamizh Tech Robotics Company.
 * No speculative or fabricated search volumes.
 */
export const seoKeywords: SEOKeywordTarget[] = [
  // ── 1. Local Authority & Coimbatore Geographic Intent ──
  {
    keyword: "robotics company in coimbatore",
    intent: "LOCAL",
    contentType: "local_landing",
    targetPage: "/robotics-company-in-coimbatore",
    priority: "HIGH",
    businessValue: "BRAND_AUTHORITY",
    notes: "Primary branded local query for factory owners, schools, and engineering colleges in Coimbatore region."
  },
  {
    keyword: "industrial automation coimbatore",
    intent: "LOCAL",
    contentType: "local_landing",
    targetPage: "/industrial-automation-coimbatore",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "B2B industrial query targeting textile, pump, foundry, and automotive manufacturing plants in the Coimbatore-Tiruppur industrial corridor."
  },
  {
    keyword: "robotics company tamil nadu",
    intent: "LOCAL",
    contentType: "local_landing",
    targetPage: "/about-tamizh-tech",
    priority: "HIGH",
    businessValue: "BRAND_AUTHORITY",
    notes: "Statewide authority query connecting ThiranOli Academy and Tamizh Robotics Club lineage."
  },

  // ── 2. B2B Industrial Automation & Custom Robotics ──
  {
    keyword: "PLC automation coimbatore",
    intent: "B2B",
    contentType: "industry",
    targetPage: "/industries",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Siemens/Delta/Allen-Bradley PLC programming and panel assembly inquiries."
  },
  {
    keyword: "machine vision company coimbatore",
    intent: "B2B",
    contentType: "service",
    targetPage: "/services",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Defect inspection, OCR code reading, and robotic pick-and-place camera integration."
  },
  {
    keyword: "industrial robotics integration",
    intent: "B2B",
    contentType: "industry",
    targetPage: "/industries",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Factory automation, AGVs, AMRs, and custom conveyor sensor automation."
  },

  // ── 3. B2B Educational Labs (Schools & Colleges) ──
  {
    keyword: "school robotics lab setup",
    intent: "B2B",
    contentType: "service",
    targetPage: "/schools",
    priority: "HIGH",
    businessValue: "STRATEGIC_B2B",
    notes: "K-12 Atal Tinkering Lab (ATL) and private CBSE school STEM laboratory implementation."
  },
  {
    keyword: "STEM lab setup for schools",
    intent: "B2B",
    contentType: "service",
    targetPage: "/schools",
    priority: "HIGH",
    businessValue: "STRATEGIC_B2B",
    notes: "Grade 1 to 12 experiential STEM, 3D printing, and visual block coding training."
  },
  {
    keyword: "college robotics lab setup",
    intent: "B2B",
    contentType: "service",
    targetPage: "/colleges",
    priority: "HIGH",
    businessValue: "STRATEGIC_B2B",
    notes: "Centre of Excellence (CoE), collegiate R&D MoUs, and advanced micro-robotics infrastructure."
  },
  {
    keyword: "engineering robotics projects",
    intent: "EDUCATIONAL",
    contentType: "service",
    targetPage: "/colleges",
    priority: "MEDIUM",
    businessValue: "TALENT_PIPELINE",
    notes: "Final year B.E./B.Tech engineering capstone projects in ROS, IoT, and embedded firmware."
  },

  // ── 4. B2C & Collegiate Competition Robot Platforms ──
  {
    keyword: "robotics products india",
    intent: "COMMERCIAL",
    contentType: "category",
    targetPage: "/robotics-products-india",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "National hardware search for authentic robotics platforms assembled in India."
  },
  {
    keyword: "robotics competition kits",
    intent: "COMMERCIAL",
    contentType: "category",
    targetPage: "/products/competition",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "National robo race, robo soccer, robo war, and autonomous line follower kits."
  },
  {
    keyword: "RC robo race robot",
    intent: "TRANSACTIONAL",
    contentType: "product",
    targetPage: "/products/competition/rc-robo-race",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Custom metal-chassis, high-torque dual-motor competition racing bot inquiries."
  },
  {
    keyword: "RC robo soccer robot",
    intent: "TRANSACTIONAL",
    contentType: "product",
    targetPage: "/products/competition/rc-robo-soccer",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Pneumatic/spring kicker robot chassis for national robotics championships."
  },
  {
    keyword: "FlySky FS-i6X transmitter india",
    intent: "TRANSACTIONAL",
    contentType: "product",
    targetPage: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Official 10-channel 2.4GHz AFHDS 2A transmitter with IA10B receiver."
  },

  // ── 5. Hands-On Training & Career Development ──
  {
    keyword: "robotics training coimbatore",
    intent: "EDUCATIONAL",
    contentType: "course",
    targetPage: "/courses",
    priority: "HIGH",
    businessValue: "PRIMARY_REVENUE",
    notes: "Hands-on weekend and semester robotics certification batches in Coimbatore."
  },
  {
    keyword: "robotics internship coimbatore",
    intent: "EDUCATIONAL",
    contentType: "course",
    targetPage: "/internship",
    priority: "HIGH",
    businessValue: "TALENT_PIPELINE",
    notes: "Offline summer/winter engineering internships in hardware assembly and firmware."
  },
  {
    keyword: "robotics club membership coimbatore",
    intent: "EDUCATIONAL",
    contentType: "category",
    targetPage: "/robotics-club/join",
    priority: "MEDIUM",
    businessValue: "TALENT_PIPELINE",
    notes: "Tamizh Robotics Club (TRC) membership and competitive team tryouts."
  },

  // ── 6. Informational Guides & Technical Authority ──
  {
    keyword: "how to build a combat robot",
    intent: "INFORMATIONAL",
    contentType: "blog",
    targetPage: "/blog/robotics/how-to-build-a-combat-robot",
    priority: "MEDIUM",
    businessValue: "BRAND_AUTHORITY",
    notes: "Technical guide on armor selection, motor ESC rating, and weight budgeting for robo wars."
  },
  {
    keyword: "PLC vs SCADA difference",
    intent: "INFORMATIONAL",
    contentType: "blog",
    targetPage: "/blog/industrial-automation/plc-vs-scada-difference",
    priority: "MEDIUM",
    businessValue: "BRAND_AUTHORITY",
    notes: "Technical explainer for industrial engineers and instrumentation students."
  }
];

export function getKeywordsByIntent(intent: KeywordIntent): SEOKeywordTarget[] {
  return seoKeywords.filter(k => k.intent === intent);
}

export function getKeywordsByPage(pageUrl: string): SEOKeywordTarget[] {
  return seoKeywords.filter(k => k.targetPage === pageUrl);
}
