export type SearchIntent = 
  | 'COMMERCIAL'
  | 'TRANSACTIONAL'
  | 'INFORMATIONAL'
  | 'LOCAL'
  | 'NAVIGATIONAL'
  | 'B2B'
  | 'EDUCATIONAL';

export type TargetAudience = 
  | 'Industrial Manufacturers'
  | 'B2B Enterprises'
  | 'K-12 Schools & Educators'
  | 'Engineering Colleges & Universities'
  | 'Engineering Students & Makers'
  | 'Robotics Competition Teams'
  | 'Hardware Startups & R&D Teams'
  | 'General Audience';

export type BusinessValue = 
  | 'PRIMARY_REVENUE'
  | 'HIGH_COMMERCIAL'
  | 'STRATEGIC_B2B'
  | 'TALENT_ACQUISITION'
  | 'BRAND_AUTHORITY';

export type MappingStatus = 
  | 'INDEXED_CANONICAL'
  | 'PLANNED_OPTIMIZATION'
  | 'SUPPORTING_CONTENT';

export interface SEOKeywordMapping {
  keyword: string;
  intent: SearchIntent;
  page: string;
  audience: TargetAudience;
  businessValue: BusinessValue;
  status: MappingStatus;
  primaryFocus: boolean;
  notes?: string;
}

/**
 * TAMIZH TECH ROBOTICS COMPANY — CANONICAL KEYWORD MAP
 * 
 * Strict 1-to-1 Mapping Principle:
 * Each canonical URL owns a primary commercial/informational intent.
 * Secondary queries provide long-tail support without cannibalizing core pages.
 */
export const seoKeywordMap: SEOKeywordMapping[] = [
  // ── 1. Core Brand & Company Authority ──
  {
    keyword: "tamizh tech robotics company",
    intent: "NAVIGATIONAL",
    page: "/",
    audience: "General Audience",
    businessValue: "BRAND_AUTHORITY",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Official corporate entity domain targeting Coimbatore, India."
  },
  {
    keyword: "robotics company",
    intent: "COMMERCIAL",
    page: "/",
    audience: "General Audience",
    businessValue: "BRAND_AUTHORITY",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Broad commercial seed for national engineering brand."
  },
  {
    keyword: "robotics company coimbatore",
    intent: "LOCAL",
    page: "/robotics-company-in-coimbatore",
    audience: "B2B Enterprises",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Dedicated geo-targeted landing page for regional enterprise and institutional clients."
  },
  {
    keyword: "er k tamizharasan",
    intent: "NAVIGATIONAL",
    page: "/founder",
    audience: "General Audience",
    businessValue: "BRAND_AUTHORITY",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "E-E-A-T founder and technical leadership entity mapping."
  },

  // ── 2. Commercial Engineering Services ──
  {
    keyword: "3d printing",
    intent: "COMMERCIAL",
    page: "/services/3d-printing",
    audience: "Engineering Students & Makers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Rapid prototyping in PLA, PETG, ABS, TPU, Carbon Fiber."
  },
  {
    keyword: "3d printing coimbatore",
    intent: "LOCAL",
    page: "/services/3d-printing",
    audience: "Hardware Startups & R&D Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Local rapid prototyping intent mapped to canonical 3D printing service."
  },
  {
    keyword: "3d printing for robotics parts",
    intent: "COMMERCIAL",
    page: "/services/3d-printing",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Long-tail query for robotics structural components and brackets."
  },
  {
    keyword: "laser cutting",
    intent: "COMMERCIAL",
    page: "/services/laser-cutting",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "High-precision fiber laser cutting service."
  },
  {
    keyword: "laser cutting coimbatore",
    intent: "LOCAL",
    page: "/services/laser-cutting",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Regional industrial cutting intent mapped directly to service page."
  },
  {
    keyword: "stainless steel laser cutting",
    intent: "COMMERCIAL",
    page: "/services/laser-cutting",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Long-tail sheet metal cutting query for SS 304 / SS 316 chassis."
  },
  {
    keyword: "pcb design",
    intent: "COMMERCIAL",
    page: "/services/pcb-design-fabrication-assembly",
    audience: "Hardware Startups & R&D Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Schematic design, multi-layer routing, high-speed signal integrity."
  },
  {
    keyword: "pcb assembly",
    intent: "COMMERCIAL",
    page: "/services/pcb-design-fabrication-assembly",
    audience: "B2B Enterprises",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "SMD pick-and-place, reflow, through-hole assembly."
  },
  {
    keyword: "pcb design and assembly service",
    intent: "COMMERCIAL",
    page: "/services/pcb-design-fabrication-assembly",
    audience: "B2B Enterprises",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Turnkey PCBA prototyping and low-volume manufacturing."
  },
  {
    keyword: "robotics automation",
    intent: "COMMERCIAL",
    page: "/services/robotics-automation",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Custom robotic arms, AGVs, AMRs, and custom manipulators."
  },
  {
    keyword: "industrial automation",
    intent: "COMMERCIAL",
    page: "/services/industrial-automation",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "PLC, SCADA, HMI, machine retrofit, and industrial IoT."
  },
  {
    keyword: "industrial automation coimbatore",
    intent: "LOCAL",
    page: "/industrial-automation-coimbatore",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Local industrial corridor focus (Kurumbapalayam, Peelamedu, SIDCO)."
  },
  {
    keyword: "industrial automation services",
    intent: "COMMERCIAL",
    page: "/services/industrial-automation",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Comprehensive enterprise automation service line."
  },

  // ── 3. Audience & B2B Solutions ──
  {
    keyword: "stem robotics",
    intent: "COMMERCIAL",
    page: "/solutions/schools",
    audience: "K-12 Schools & Educators",
    businessValue: "STRATEGIC_B2B",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "School STEM curriculum, Atal Tinkering Lab setup, grade 1-12 kits."
  },
  {
    keyword: "robotics lab",
    intent: "COMMERCIAL",
    page: "/solutions/schools",
    audience: "K-12 Schools & Educators",
    businessValue: "STRATEGIC_B2B",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "School tinkering lab physical design and workbench equipment."
  },
  {
    keyword: "robotics lab setup",
    intent: "COMMERCIAL",
    page: "/solutions/schools",
    audience: "K-12 Schools & Educators",
    businessValue: "STRATEGIC_B2B",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Turnkey laboratory design, equipment procurement, teacher training."
  },
  {
    keyword: "college robotics lab",
    intent: "COMMERCIAL",
    page: "/solutions/colleges",
    audience: "Engineering Colleges & Universities",
    businessValue: "STRATEGIC_B2B",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Center of Excellence (CoE) setup, college R&D MoUs, advanced lab."
  },
  {
    keyword: "manufacturing automation solutions",
    intent: "B2B",
    page: "/solutions/industries",
    audience: "Industrial Manufacturers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Factory automation, process engineering, textile/pump machine retrofit."
  },
  {
    keyword: "prototyping for startups",
    intent: "B2B",
    page: "/solutions/startups",
    audience: "Hardware Startups & R&D Teams",
    businessValue: "HIGH_COMMERCIAL",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Enclosure 3D printing, PCB prototyping, mechanical assembly for MVPs."
  },
  {
    keyword: "maker lab and student components",
    intent: "COMMERCIAL",
    page: "/solutions/students-makers",
    audience: "Engineering Students & Makers",
    businessValue: "HIGH_COMMERCIAL",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Component kits, electronics guidance, maker workspace support."
  },

  // ── 4. Products & Hardware Catalogue ──
  {
    keyword: "robotics kits",
    intent: "COMMERCIAL",
    page: "/products",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Catalogue hub for competition robot kits, parts, and radio gear."
  },
  {
    keyword: "competition robots",
    intent: "COMMERCIAL",
    page: "/products/competition",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Robo race, robo soccer, robo war, line follower combat bots."
  },
  {
    keyword: "robotics competition kits",
    intent: "COMMERCIAL",
    page: "/products/competition",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Ready-to-assemble battle and race kits with motors and chassis."
  },
  {
    keyword: "RC robo race",
    intent: "TRANSACTIONAL",
    page: "/products/competition/rc-robo-race",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Precision CNC aluminium & acrylic chassis high-speed racing bot."
  },
  {
    keyword: "RC robo soccer",
    intent: "TRANSACTIONAL",
    page: "/products/competition/rc-robo-soccer",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Pneumatic kicker robot chassis for national university competitions."
  },
  {
    keyword: "radio controllers",
    intent: "COMMERCIAL",
    page: "/products/radio-controllers",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Transmitter and receiver sets for robots and UAVs."
  },
  {
    keyword: "FlySky FS-i6X 2.4GHz transmitter",
    intent: "TRANSACTIONAL",
    page: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    audience: "Robotics Competition Teams",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "10-channel AFHDS 2A system for robot remote piloting."
  },

  // ── 5. Projects Platform & Educational Topics ──
  {
    keyword: "engineering projects",
    intent: "INFORMATIONAL",
    page: "/projects",
    audience: "Engineering Students & Makers",
    businessValue: "BRAND_AUTHORITY",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Engineering project ideas, architecture frameworks, educational topics."
  },
  {
    keyword: "engineering robotics projects",
    intent: "INFORMATIONAL",
    page: "/projects",
    audience: "Engineering Students & Makers",
    businessValue: "BRAND_AUTHORITY",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Robotics capstone reference designs across 10 industry verticals."
  },
  {
    keyword: "industrial manufacturing robotics projects",
    intent: "INFORMATIONAL",
    page: "/projects/industrial-manufacturing",
    audience: "Engineering Students & Makers",
    businessValue: "BRAND_AUTHORITY",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Category hub for factory automation and manufacturing project topics."
  },

  // ── 6. Courses & Hands-On Training ──
  {
    keyword: "robotics training",
    intent: "COMMERCIAL",
    page: "/courses",
    audience: "Engineering Students & Makers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "ThiranOli Academy practical robotics, embedded, and drone training."
  },
  {
    keyword: "robotics training coimbatore",
    intent: "LOCAL",
    page: "/courses",
    audience: "Engineering Students & Makers",
    businessValue: "PRIMARY_REVENUE",
    status: "INDEXED_CANONICAL",
    primaryFocus: false,
    notes: "Classroom and lab training in Kurumbapalayam, Coimbatore."
  },
  {
    keyword: "robotics internship coimbatore",
    intent: "EDUCATIONAL",
    page: "/internship",
    audience: "Engineering Students & Makers",
    businessValue: "TALENT_ACQUISITION",
    status: "INDEXED_CANONICAL",
    primaryFocus: true,
    notes: "Engineering students winter and summer technical internships."
  },

  // ── 7. Informational Blog Guides (Cannibalization Shields) ──
  {
    keyword: "how to build a combat robot",
    intent: "INFORMATIONAL",
    page: "/blog/robotics/how-to-build-a-combat-robot",
    audience: "Robotics Competition Teams",
    businessValue: "BRAND_AUTHORITY",
    status: "SUPPORTING_CONTENT",
    primaryFocus: true,
    notes: "Educational guide linking directly to /products/competition and /services/laser-cutting."
  },
  {
    keyword: "plc vs scada difference",
    intent: "INFORMATIONAL",
    page: "/blog/industrial-automation/plc-vs-scada-difference",
    audience: "Industrial Manufacturers",
    businessValue: "BRAND_AUTHORITY",
    status: "SUPPORTING_CONTENT",
    primaryFocus: true,
    notes: "Technical explainer linking directly to /services/industrial-automation."
  }
];

/**
 * Retrieve primary keyword mapping for a specific canonical page
 */
export function getKeywordForPage(pagePath: string): SEOKeywordMapping | undefined {
  return seoKeywordMap.find(k => k.page === pagePath && k.primaryFocus);
}

/**
 * Retrieve all mappings (primary + long-tail) for a specific page
 */
export function getAllKeywordsForPage(pagePath: string): SEOKeywordMapping[] {
  return seoKeywordMap.filter(k => k.page === pagePath);
}

/**
 * Filter mappings by target search intent
 */
export function getKeywordsByIntent(intent: SearchIntent): SEOKeywordMapping[] {
  return seoKeywordMap.filter(k => k.intent === intent);
}
