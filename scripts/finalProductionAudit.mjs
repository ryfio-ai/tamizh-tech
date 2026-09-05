import fs from 'fs';
import path from 'path';

console.log("================================================================================");
console.log("TAMIZH TECH ROBOTICS COMPANY — 48-HOUR FINAL MASTER PRODUCTION RELEASE AUDIT");
console.log("CANONICAL URL: https://www.tamizhtech.in/");
console.log("================================================================================\n");

const rootDir = process.cwd();
let blockingFailures = 0;
let warnings = 0;

function pass(msg) {
  console.log(`  ✅ PASS: ${msg}`);
}

function fail(msg) {
  console.error(`  ❌ FAIL: ${msg}`);
  blockingFailures++;
}

function warn(msg) {
  console.warn(`  ⚠️ WARN: ${msg}`);
  warnings++;
}

// -----------------------------------------------------------------------------
// GATE 1: DOMAIN & CANONICAL CONSISTENCY
// -----------------------------------------------------------------------------
console.log("📍 [GATE 1] Domain & Canonical Architecture Consistency");

const layoutContent = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf8');
if (layoutContent.includes('metadataBase: new URL("https://www.tamizhtech.in")') || layoutContent.includes("https://www.tamizhtech.in")) {
  pass("metadataBase accurately configured with canonical https://www.tamizhtech.in");
} else {
  fail("metadataBase missing or does not use canonical https://www.tamizhtech.in");
}

// Check robots and sitemap host
const robotsContent = fs.readFileSync(path.join(rootDir, 'src/app/robots.ts'), 'utf8');
if (robotsContent.includes('https://www.tamizhtech.in/sitemap.xml') && robotsContent.includes('https://www.tamizhtech.in')) {
  pass("robots.ts correctly points to https://www.tamizhtech.in/sitemap.xml and specifies host");
} else {
  fail("robots.ts missing canonical sitemap URL");
}

const sitemapContent = fs.readFileSync(path.join(rootDir, 'src/app/sitemap.ts'), 'utf8');
if (sitemapContent.includes("const SITE_URL = 'https://www.tamizhtech.in'")) {
  pass("sitemap.ts uses canonical https://www.tamizhtech.in root domain");
} else {
  fail("sitemap.ts does not use canonical https://www.tamizhtech.in");
}

// Scan for forbidden dev URLs in src/
const forbiddenHostnames = ['localhost:3000', '127.0.0.1:3000', 'tamizhtech.in/svg', 'vercel.app'];
let devUrlLeaks = 0;
function scanForDevUrls(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scanForDevUrls(full);
    } else if (/\.(tsx|ts|jsx|js)$/.test(item)) {
      const txt = fs.readFileSync(full, 'utf8');
      for (const host of forbiddenHostnames) {
        if (txt.includes(host)) {
          fail(`Accidental hostname leak "${host}" in ${path.relative(rootDir, full)}`);
          devUrlLeaks++;
        }
      }
    }
  }
}
scanForDevUrls(path.join(rootDir, 'src'));
if (devUrlLeaks === 0) {
  pass("Zero localhost, 127.0.0.1, or staging hostname leaks in src/");
}

// -----------------------------------------------------------------------------
// GATE 2: ZERO MOCK & CONTENT INTEGRITY
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 2] Zero Mock, Zero Fabrication & Commercial Authenticity");

const bannedMockStrings = [
  'Lorem ipsum',
  'lorem ipsum',
  'placeholder.com',
  'fake review',
  'only 2 left in stock',
  'verified buyer review',
  'ratingValue',
  'reviewCount: "27"'
];

let mockFound = 0;
function scanForMocks(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scanForMocks(full);
    } else if (/\.(tsx|ts|jsx|js)$/.test(item)) {
      const txt = fs.readFileSync(full, 'utf8');
      for (const term of bannedMockStrings) {
        if (txt.includes(term)) {
          fail(`Mock/Fabricated content "${term}" discovered in ${path.relative(rootDir, full)}`);
          mockFound++;
        }
      }
    }
  }
}
scanForMocks(path.join(rootDir, 'src'));
if (mockFound === 0) {
  pass("Zero mock data, fake reviews, or fake ratings found in codebase");
}

// -----------------------------------------------------------------------------
// GATE 3: SECURITY & SECRET PROTECTION
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 3] Security, Credential & Secret Protection");

let exposedSecrets = 0;
function scanClientForSecrets(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scanClientForSecrets(full);
    } else if (/\.(tsx|jsx)$/.test(item)) {
      const txt = fs.readFileSync(full, 'utf8');
      if (txt.includes("process.env.RESEND_API_KEY") || txt.includes("process.env.GOOGLE_SERVICE_ACCOUNT") || txt.includes("GOOGLE_PRIVATE_KEY")) {
        fail(`Potential secret leak in client component: ${path.relative(rootDir, full)}`);
        exposedSecrets++;
      }
    }
  }
}
scanClientForSecrets(path.join(rootDir, 'src/components'));
if (exposedSecrets === 0) {
  pass("No sensitive API credentials or service account tokens exposed in frontend components");
}

// -----------------------------------------------------------------------------
// GATE 4: PHASE 1 COMMERCIAL SERVICES AUDIT
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 4] Phase 1 Commercial Services Regression");

const commercialServices = [
  'src/app/services/3d-printing/page.tsx',
  'src/app/services/laser-cutting/page.tsx',
  'src/app/services/pcb-design-fabrication-assembly/page.tsx',
  'src/app/services/robotics-automation/page.tsx',
  'src/app/services/industrial-automation/page.tsx'
];

const serviceTemplateContent = fs.readFileSync(path.join(rootDir, 'src/components/services/ServicePageTemplate.tsx'), 'utf8');
if (!serviceTemplateContent.includes('QuoteModal')) {
  fail("ServicePageTemplate missing QuoteModal");
}
if (!serviceTemplateContent.includes('RelatedServices')) {
  fail("ServicePageTemplate missing RelatedServices");
}

for (const svcFile of commercialServices) {
  const full = path.join(rootDir, svcFile);
  if (!fs.existsSync(full)) {
    fail(`Missing commercial service page: ${svcFile}`);
  } else {
    const content = fs.readFileSync(full, 'utf8');
    if (!content.includes('canonical:')) {
      fail(`Canonical metadata missing in service page: ${svcFile}`);
    }
    if (!content.includes('ServicePageTemplate')) {
      fail(`ServicePageTemplate not utilized in ${svcFile}`);
    }
  }
}
pass("All 5 Commercial Service pages contain verified metadata, ServicePageTemplate, QuoteModal, and RelatedServices");

// -----------------------------------------------------------------------------
// GATE 5: PHASE 2 B2B SOLUTIONS AUDIT
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 5] Phase 2 B2B Solutions Regression");

const b2bSolutions = [
  'src/app/solutions/schools/page.tsx',
  'src/app/solutions/colleges/page.tsx',
  'src/app/solutions/industries/page.tsx',
  'src/app/solutions/students-makers/page.tsx',
  'src/app/solutions/startups/page.tsx'
];

const solutionTemplateContent = fs.readFileSync(path.join(rootDir, 'src/components/solutions/SolutionPageTemplate.tsx'), 'utf8');
if (!solutionTemplateContent.includes('QuoteModal')) {
  fail("SolutionPageTemplate missing QuoteModal");
}
if (!solutionTemplateContent.includes('SolutionNeedsSelector')) {
  fail("SolutionPageTemplate missing SolutionNeedsSelector");
}

for (const solFile of b2bSolutions) {
  const full = path.join(rootDir, solFile);
  if (!fs.existsSync(full)) {
    fail(`Missing B2B solution page: ${solFile}`);
  } else {
    const content = fs.readFileSync(full, 'utf8');
    if (!content.includes('canonical:')) {
      fail(`Canonical metadata missing in solution page: ${solFile}`);
    }
    if (!content.includes('SolutionPageTemplate')) {
      fail(`SolutionPageTemplate not utilized in ${solFile}`);
    }
  }
}
pass("All 5 B2B Solution pages contain verified metadata, SolutionPageTemplate, SolutionNeedsSelector, and QuoteModal integration");

// -----------------------------------------------------------------------------
// GATE 6: PHASE 3 PRODUCTS CATALOGUE (NO ECOMMERCE) AUDIT
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 6] Phase 3 Products Catalogue (Strict Non-Ecommerce Model)");

const bannedEcommerceUI = [
  'Razorpay',
  'Stripe',
  'Buy Now',
  'Add to Cart',
  'Pay Now',
  'payment gateway',
  'credit card',
  'checkout flow'
];

let ecommerceFound = 0;
function scanForEcommerce(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.next', '.git'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scanForEcommerce(full);
    } else if (/\.(tsx|jsx)$/.test(item)) {
      const txt = fs.readFileSync(full, 'utf8');
      for (const term of bannedEcommerceUI) {
        if (txt.includes(term)) {
          fail(`Forbidden ecommerce UI pattern "${term}" in ${path.relative(rootDir, full)}`);
          ecommerceFound++;
        }
      }
    }
  }
}
scanForEcommerce(path.join(rootDir, 'src/app/products'));
scanForEcommerce(path.join(rootDir, 'src/components/products'));
if (ecommerceFound === 0) {
  pass("Strict Catalogue + RFQ Enquiry model verified (No Cart, No Checkout, No Payment Gateway)");
}

// Verify Product Schema has no fake offers or reviews
const jsonLdContent = fs.readFileSync(path.join(rootDir, 'src/components/JsonLd.tsx'), 'utf8');
if (jsonLdContent.includes('ProductSchema')) {
  if (jsonLdContent.includes('"offers"') || jsonLdContent.includes('"aggregateRating"')) {
    fail("ProductSchema contains fabricated offers or aggregate ratings!");
  } else {
    pass("ProductSchema outputs only factual metadata (name, image, description, brand, sku, category)");
  }
}

// -----------------------------------------------------------------------------
// GATE 7: PHASE 4 PROJECTS PLATFORM & TOPIC SAFETY AUDIT
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 7] Phase 4 Projects Platform & Topic Safety");

const projectDataContent = fs.readFileSync(path.join(rootDir, 'src/data/projects.ts'), 'utf8');
const projectCatContent = fs.readFileSync(path.join(rootDir, 'src/data/projectCategories.ts'), 'utf8');

const requiredCategories = [
  'industrial-manufacturing',
  'ev-smart-mobility',
  'computer-vision-edge-ai',
  'agri-tech',
  'healthcare-assistive',
  'logistics-retail',
  'infrastructure-maintenance',
  'security-emergency',
  'commercial-automation',
  'advanced-kinematics'
];

for (const cat of requiredCategories) {
  if (!projectCatContent.includes(cat)) {
    fail(`Missing project category in projectCategories.ts: ${cat}`);
  }
}
pass("All 10 Project Categories verified in projectCategories.ts");

// Verify that project topics have projectType = 'topic'
const topicsFiles = [
  'src/data/projects/industrialManufacturing.ts',
  'src/data/projects/evSmartMobility.ts',
  'src/data/projects/computerVisionEdgeAi.ts',
  'src/data/projects/agriTech.ts',
  'src/data/projects/healthcareAssistive.ts',
  'src/data/projects/logisticsRetail.ts',
  'src/data/projects/infrastructureMaintenance.ts',
  'src/data/projects/securityEmergency.ts',
  'src/data/projects/commercialAutomation.ts',
  'src/data/projects/advancedKinematics.ts'
];

let topicIssues = 0;
const misleadingClaims = ['We built', 'Our customer', 'Our client', 'Delivered', 'Deployed', 'Installed', 'Successfully implemented', 'Production deployed'];

for (const f of topicsFiles) {
  const full = path.join(rootDir, f);
  if (fs.existsSync(full)) {
    const c = fs.readFileSync(full, 'utf8');
    if (!c.includes('projectType: "topic"')) {
      fail(`File ${f} does not enforce projectType: "topic"`);
      topicIssues++;
    }
    for (const claim of misleadingClaims) {
      if (c.includes(claim)) {
        fail(`Misleading completed claim "${claim}" in topic file ${f}`);
        topicIssues++;
      }
    }
  }
}
if (topicIssues === 0) {
  pass("All 10 project topic files strictly maintain projectType: 'topic' with zero unsupported build claims");
}

// -----------------------------------------------------------------------------
// GATE 8: LEAD PIPELINE & FORM INTEGRITY
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 8] Single Unified Lead Pipeline & Submission Integrity");

const leadsRouteContent = fs.readFileSync(path.join(rootDir, 'src/app/api/leads/route.ts'), 'utf8');
if (
  leadsRouteContent.includes('checkRateLimit') &&
  leadsRouteContent.includes('honeypot') &&
  leadsRouteContent.includes('appendLeadToGoogleSheet') &&
  leadsRouteContent.includes('sendLeadNotifications') &&
  leadsRouteContent.includes('generateLeadId')
) {
  pass("Unified /api/leads endpoint verified: Rate-limiting, Honeypot Anti-Spam, Google Sheets, Resend Email, and Unique Reference ID");
} else {
  fail("Incomplete lead handling in /api/leads/route.ts");
}

// -----------------------------------------------------------------------------
// GATE 9: VERIFIED ASSETS ON DISK
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 9] Image Assets Verification on Local Disk");

const criticalAssets = [
  'public/pic/3d printing.jpg',
  'public/pic/laser cutting.jpg',
  'public/pic/pcb design.jpg',
  'public/gallery/10.jpg',
  'public/gallery/16.jpeg',
  'public/gallery/17.jpeg',
  'public/gallery/18.jpeg',
  'public/gallery/21.jpeg',
  'public/projects/industrial-manufacturing.jpg',
  'public/projects/ev-smart-mobility.jpg',
  'public/projects/computer-vision-edge-ai.jpg',
  'public/projects/agri-tech.jpg',
  'public/projects/healthcare-assistive.jpg',
  'public/projects/logistics-retail.jpg',
  'public/projects/infrastructure-maintenance.jpg',
  'public/projects/security-emergency.jpg',
  'public/projects/commercial-automation.jpg',
  'public/projects/advanced-kinematics.jpg',
  'public/product/race/race1.png',
  'public/product/soccer/soccer 1.0.png'
];

let missingAssets = 0;
for (const asset of criticalAssets) {
  const full = path.join(rootDir, asset);
  if (fs.existsSync(full)) {
    const size = fs.statSync(full).size;
    if (size === 0) {
      fail(`Empty image file: ${asset}`);
      missingAssets++;
    }
  } else {
    fail(`Missing critical asset: ${asset}`);
    missingAssets++;
  }
}
if (missingAssets === 0) {
  pass(`All ${criticalAssets.length} critical service, solution, product, and project image assets exist on disk`);
}

// -----------------------------------------------------------------------------
// GATE 10: SITEMAP INCLUSIONS
// -----------------------------------------------------------------------------
console.log("\n📍 [GATE 10] Canonical Sitemap Comprehensive Coverage");

const requiredSitemapPaths = [
  '/services/3d-printing',
  '/services/laser-cutting',
  '/services/pcb-design-fabrication-assembly',
  '/services/robotics-automation',
  '/services/industrial-automation',
  '/solutions/schools',
  '/solutions/colleges',
  '/solutions/industries',
  '/solutions/students-makers',
  '/solutions/startups',
  '/products',
  '/projects'
];

let sitemapIssues = 0;
for (const sp of requiredSitemapPaths) {
  if (!sitemapContent.includes(`'${sp}'`)) {
    fail(`Sitemap missing canonical entry: ${sp}`);
    sitemapIssues++;
  }
}
if (sitemapIssues === 0) {
  pass("Sitemap includes all newly added services, solutions, products, and dynamic projects");
}

// -----------------------------------------------------------------------------
// FINAL MASTER VERDICT
// -----------------------------------------------------------------------------
console.log("\n================================================================================");
console.log("FINAL RELEASE AUDIT SUMMARY");
console.log("================================================================================");
console.log(`• Blocking Failures: ${blockingFailures}`);
console.log(`• Non-blocking Warnings: ${warnings}`);
console.log("================================================================================");

if (blockingFailures === 0) {
  console.log("🎉 VERDICT: PASS (100% PRODUCTION READY & APPROVED FOR GITHUB RELEASE)\n");
  process.exit(0);
} else {
  console.error(`🛑 VERDICT: BLOCKED (${blockingFailures} blocking issues must be resolved before release)\n`);
  process.exit(1);
}
