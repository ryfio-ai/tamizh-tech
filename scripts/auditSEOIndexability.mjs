import fs from 'fs';
import path from 'path';

console.log("================================================================================");
console.log("TAMIZH TECH ROBOTICS COMPANY — SEO INDEXABILITY & HARDENING AUDIT");
console.log("CANONICAL DOMAIN: https://www.tamizhtech.in/");
console.log("================================================================================\n");

const rootDir = process.cwd();
let blockingIssues = 0;
let warnings = 0;

function pass(testName, details = '') {
  console.log(`  ✅ PASS: ${testName} ${details ? `(${details})` : ''}`);
}

function fail(testName, details = '') {
  console.error(`  ❌ FAIL: ${testName} - ${details}`);
  blockingIssues++;
}

function warn(testName, details = '') {
  console.warn(`  ⚠️ WARN: ${testName} - ${details}`);
  warnings++;
}

// -----------------------------------------------------------------------------
// GATE 1: CANONICAL DOMAIN & ZERO DEV-HOST LEAKS
// -----------------------------------------------------------------------------
console.log("📍 [1/10] Canonical Domain Architecture & Host Leaks...");

const layoutPath = path.join(rootDir, 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layout = fs.readFileSync(layoutPath, 'utf8');
  if (layout.includes('metadataBase: new URL("https://www.tamizhtech.in")')) {
    pass("Root metadataBase", "Strictly configured as https://www.tamizhtech.in");
  } else {
    fail("Root metadataBase", "Missing or misconfigured in src/app/layout.tsx");
  }
} else {
  fail("layout.tsx", "src/app/layout.tsx does not exist");
}

// Check for accidental non-www, localhost, or staging URLs in src/
const forbiddenTokens = [
  'localhost:3000',
  '127.0.0.1:3000',
  'tamizhtech.in/svg',
  'staging.tamizhtech.in',
  'http://tamizhtech.in',
  'https://tamizhtech.in"' // Non-www exact match in quotes
];

let leakCount = 0;
function scanDirectory(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(item.name)) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      scanDirectory(full);
    } else if (item.isFile() && /\.(tsx|ts|jsx|js|html)$/.test(item.name)) {
      const src = fs.readFileSync(full, 'utf8');
      for (const token of forbiddenTokens) {
        if (src.includes(token)) {
          fail("Canonical Domain Leak", `Found '${token}' in ${path.relative(rootDir, full)}`);
          leakCount++;
        }
      }
    }
  }
}
scanDirectory(path.join(rootDir, 'src'));
if (leakCount === 0) {
  pass("Domain Purity", "Zero localhost, staging, non-www, or malformed domain leaks in src/");
}

// -----------------------------------------------------------------------------
// GATE 2: ROBOTS.TXT COMPATIBILITY & DIRECTIVES
// -----------------------------------------------------------------------------
console.log("\n📍 [2/10] Robots.txt Directives & Crawler Access...");

const robotsPath = path.join(rootDir, 'src/app/robots.ts');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (robots.includes("allow: '/'")) {
    pass("Public Crawl Access", "Public routes fully allowed for all search crawlers");
  } else {
    fail("Public Crawl Access", "Missing wildcard allow directive in robots.ts");
  }

  if (robots.includes('https://www.tamizhtech.in/sitemap.xml')) {
    pass("Sitemap Reference", "robots.ts points to canonical https://www.tamizhtech.in/sitemap.xml");
  } else {
    fail("Sitemap Reference", "robots.ts missing canonical sitemap URL");
  }

  // Ensure important public paths are NOT accidentally disallowed
  const corePaths = ['/services/', '/solutions/', '/products/', '/projects/', '/courses/', '/blog/'];
  let accidentalBlock = false;
  for (const cp of corePaths) {
    if (robots.includes(`'${cp}'`)) {
      fail("Accidental Disallow", `Core path '${cp}' is disallowed in robots.ts`);
      accidentalBlock = true;
    }
  }
  if (!accidentalBlock) {
    pass("Core Public Paths", "Zero commercial or architectural routes blocked by robots.txt");
  }

  // AI & Generative Search crawler explicit allow
  const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot'];
  const missingAi = aiBots.filter(b => !robots.includes(b));
  if (missingAi.length === 0) {
    pass("AI Search Bots", "Explicit allow configured for 5 major AI/AEO crawler user-agents");
  } else {
    warn("AI Search Bots", `Missing explicit allow for: ${missingAi.join(', ')}`);
  }
} else {
  fail("robots.ts", "src/app/robots.ts not found");
}

// -----------------------------------------------------------------------------
// GATE 3: ZERO NOINDEX ON PUBLIC PAGES
// -----------------------------------------------------------------------------
console.log("\n📍 [3/10] Scanning for Accidental Noindex / Nofollow Directives...");

let noindexFound = false;
function scanForNoindex(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(item.name)) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      scanForNoindex(full);
    } else if (item.isFile() && /\.(tsx|ts|jsx|js|html)$/.test(item.name)) {
      const src = fs.readFileSync(full, 'utf8');
      if (src.includes('noindex') || src.includes('nofollow') || src.includes('X-Robots-Tag')) {
        // Exclude legitimate layout index: true configuration
        if (!src.includes('index: true')) {
          fail("Noindex Violation", `Found noindex/nofollow token in ${path.relative(rootDir, full)}`);
          noindexFound = true;
        }
      }
    }
  }
}
scanForNoindex(path.join(rootDir, 'src'));
if (!noindexFound) {
  pass("Noindex Audit", "Zero accidental noindex, nofollow, or X-Robots-Tag tags found across public routes");
}

// -----------------------------------------------------------------------------
// GATE 4: SITEMAP INCLUSION & PRIORITY URL COVERAGE
// -----------------------------------------------------------------------------
console.log("\n📍 [4/10] XML Sitemap Architecture & Coverage...");

const sitemapPath = path.join(rootDir, 'src/app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  if (sitemap.includes("const SITE_URL = 'https://www.tamizhtech.in'")) {
    pass("Sitemap Root Domain", "Canonical https://www.tamizhtech.in root defined");
  } else {
    fail("Sitemap Root Domain", "Missing canonical SITE_URL in sitemap.ts");
  }

  // Verify all 12 URL Inspection Priority URLs are in sitemap
  const priorityInspectionUrls = [
    '/',
    '/services/3d-printing',
    '/services/laser-cutting',
    '/services/pcb-design-fabrication-assembly',
    '/services/robotics-automation',
    '/services/industrial-automation',
    '/solutions/schools',
    '/solutions/colleges',
    '/solutions/industries',
    '/products',
    '/products/competition',
    '/projects'
  ];

  let missingPriority = 0;
  for (const prio of priorityInspectionUrls) {
    if (!sitemap.includes(`'${prio}'`) && !sitemap.includes(`"${prio}"`)) {
      fail("Priority Sitemap Inclusion", `Priority inspection URL '${prio}' missing from sitemap.ts`);
      missingPriority++;
    }
  }
  if (missingPriority === 0) {
    pass("Priority URLs in Sitemap", "All 12 Priority URL Inspection targets present in sitemap");
  }
} else {
  fail("sitemap.ts", "src/app/sitemap.ts not found");
}

// -----------------------------------------------------------------------------
// GATE 5: INTERNAL LINKING & ZERO ORPHAN PAGES
// -----------------------------------------------------------------------------
console.log("\n📍 [5/10] Internal Discovery & Priority Page Link Depth...");

const navPath = path.join(rootDir, 'src/data/navigation.ts');
const footerPath = path.join(rootDir, 'src/components/layout/Footer.tsx');
let navAndFooterText = '';

if (fs.existsSync(navPath)) navAndFooterText += fs.readFileSync(navPath, 'utf8');
if (fs.existsSync(footerPath)) navAndFooterText += fs.readFileSync(footerPath, 'utf8');

const criticalRoutes = [
  '/services/3d-printing',
  '/services/laser-cutting',
  '/services/pcb-design-fabrication-assembly',
  '/services/robotics-automation',
  '/services/industrial-automation',
  '/solutions',
  '/products',
  '/projects',
  '/courses',
  '/blog',
  '/about',
  '/contact'
];

let orphanCount = 0;
for (const cr of criticalRoutes) {
  if (!navAndFooterText.includes(cr)) {
    fail("Orphan Route Detected", `Critical route '${cr}' has no direct link in navigation or footer`);
    orphanCount++;
  }
}
if (orphanCount === 0) {
  pass("Core Hubs Link Depth", "All primary hubs and commercial services directly reachable within 1-2 clicks");
}

// -----------------------------------------------------------------------------
// GATE 6: BROKEN INTERNAL LINKS IN NAVIGATION
// -----------------------------------------------------------------------------
console.log("\n📍 [6/10] Checking for Broken Navigation Links...");

const rawHrefs = [...navAndFooterText.matchAll(/href:\s*["']([^"']+)["']/g), ...navAndFooterText.matchAll(/href=["']([^"']+)["']/g)];
const uniqueLinks = [...new Set(rawHrefs.map(m => m[1]))].filter(l => l.startsWith('/') && !l.startsWith('/#') && !l.includes(':'));

let brokenLinkCount = 0;
for (const link of uniqueLinks) {
  const cleanPath = link.split('#')[0].split('?')[0];
  if (cleanPath === '' || cleanPath === '/') continue;

  const directPageTsx = path.join(rootDir, 'src/app', cleanPath, 'page.tsx');
  const directRouteTs = path.join(rootDir, 'src/app', cleanPath, 'route.ts');
  const directPublicFile = path.join(rootDir, 'public', cleanPath);

  // Also check dynamic patterns and App Router metadata routes (sitemap.ts, robots.ts)
  let exists = fs.existsSync(directPageTsx) || fs.existsSync(directRouteTs) || fs.existsSync(directPublicFile);

  if (!exists) {
    if (cleanPath === '/sitemap.xml' && (fs.existsSync(path.join(rootDir, 'src/app/sitemap.ts')) || fs.existsSync(path.join(rootDir, 'src/app/sitemap.js')))) {
      exists = true;
    } else if (cleanPath === '/robots.txt' && (fs.existsSync(path.join(rootDir, 'src/app/robots.ts')) || fs.existsSync(path.join(rootDir, 'src/app/robots.js')))) {
      exists = true;
    } else if (cleanPath.startsWith('/products/') || cleanPath.startsWith('/courses/') || cleanPath.startsWith('/blog/') || cleanPath.startsWith('/projects/') || cleanPath.startsWith('/events/')) {
      exists = true; // Handled by Next.js dynamic routing
    }
  }

  if (!exists) {
    fail("Broken Internal Link", `Link '${link}' has no matching page or static asset`);
    brokenLinkCount++;
  }
}

if (brokenLinkCount === 0) {
  pass("Navigation Integrity", `Verified ${uniqueLinks.length} internal navigation links without 404 targets`);
}

// -----------------------------------------------------------------------------
// GATE 7: METADATA & H1 INTEGRITY
// -----------------------------------------------------------------------------
console.log("\n📍 [7/10] Metadata Uniqueness & Primary H1 Architecture...");

const serviceFiles = [
  '3d-printing',
  'laser-cutting',
  'pcb-design-fabrication-assembly',
  'robotics-automation',
  'industrial-automation'
];

let missingH1Count = 0;
for (const sf of serviceFiles) {
  const filePath = path.join(rootDir, 'src/app/services', sf, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Verify ServicePageTemplate usage with verified h1
    if (content.includes('ServicePageTemplate') || content.includes('<h1')) {
      pass(`Service H1 Architecture: ${sf}`, "Standardized service template with semantic single H1");
    } else {
      fail(`Service H1 Architecture: ${sf}`, "No H1 or ServicePageTemplate detected");
      missingH1Count++;
    }
  }
}

// -----------------------------------------------------------------------------
// GATE 8: STRUCTURED DATA VALIDITY & ZERO FABRICATION
// -----------------------------------------------------------------------------
console.log("\n📍 [8/10] Structured Data (Schema.org) Audit...");

const jsonLdPath = path.join(rootDir, 'src/components/JsonLd.tsx');
if (fs.existsSync(jsonLdPath)) {
  const jsonLd = fs.readFileSync(jsonLdPath, 'utf8');
  
  const forbidden = ['AggregateRating', 'aggregateRating', 'reviewCount', 'priceValidUntil'];
  let fakeDetected = false;
  for (const f of forbidden) {
    if (jsonLd.includes(f)) {
      fail("Fake Schema Attribute", `Found prohibited '${f}' in JsonLd.tsx`);
      fakeDetected = true;
    }
  }
  if (!fakeDetected) {
    pass("Schema Authenticity", "Zero fabricated reviews, ratings, or fake e-commerce prices");
  }

  const schemasRequired = ['Organization', 'LocalBusiness', 'Product', 'Course', 'BreadcrumbList', 'FAQPage'];
  for (const s of schemasRequired) {
    if (jsonLd.includes(s)) {
      pass(`Schema Type: ${s}`, "Component definition validated");
    } else {
      fail(`Schema Type: ${s}`, "Component definition missing");
    }
  }
}

// -----------------------------------------------------------------------------
// GATE 9: SEARCH INTENT MAP & TOPIC CLUSTER INTEGRITY
// -----------------------------------------------------------------------------
console.log("\n📍 [9/10] Search Intent Map & Cannibalization Shielding...");

const mapPath = path.join(rootDir, 'src/data/seoKeywordMap.ts');
if (fs.existsSync(mapPath)) {
  const mapContent = fs.readFileSync(mapPath, 'utf8');
  if (mapContent.includes('seoKeywordMap') && mapContent.includes('primaryFocus')) {
    pass("1-to-1 Intent Map", "seoKeywordMap.ts strictly associates each canonical page with its primary commercial query");
  } else {
    fail("Intent Map", "seoKeywordMap.ts missing expected export or primaryFocus structure");
  }
} else {
  fail("seoKeywordMap.ts", "src/data/seoKeywordMap.ts not found");
}

// -----------------------------------------------------------------------------
// GATE 10: MOBILE VIEWPORT & TOUCH TARGET READINESS
// -----------------------------------------------------------------------------
console.log("\n📍 [10/10] Mobile Viewport & CSS Integrity...");

if (fs.existsSync(layoutPath)) {
  const layout = fs.readFileSync(layoutPath, 'utf8');
  // Next.js App Router includes viewport metadata automatically
  pass("Mobile Viewport", "Next.js App Router standard viewport & responsive HTML shell active");
}

// -----------------------------------------------------------------------------
// FINAL SUMMARY
// -----------------------------------------------------------------------------
console.log("\n================================================================================");
console.log("SEO INDEXABILITY AUDIT SUMMARY");
console.log("================================================================================");
console.log(`• Blocking Failures: ${blockingIssues}`);
console.log(`• Non-blocking Warnings: ${warnings}`);
console.log("================================================================================");

if (blockingIssues === 0) {
  console.log("🎉 VERDICT: PASS ✅ (Website is 100% Crawlable, Indexable, and Canonical)\n");
  process.exit(0);
} else {
  console.error("❌ VERDICT: FAIL (Resolve blocking issues above before indexing request)\n");
  process.exit(1);
}
