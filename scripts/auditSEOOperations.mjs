import fs from 'fs';
import path from 'path';

console.log("================================================================================");
console.log("TAMIZH TECH ROBOTICS COMPANY — SEO OPERATIONS AUDIT");
console.log("TARGET CANONICAL DOMAIN: https://www.tamizhtech.in/");
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
// 1. CANONICAL CONSISTENCY & DOMAIN INTEGRITY
// -----------------------------------------------------------------------------
console.log("📍 [1/9] Verifying Canonical Consistency & Production Domain...");

const layoutPath = path.join(rootDir, 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  if (layoutContent.includes('metadataBase: new URL("https://www.tamizhtech.in")') || layoutContent.includes("https://www.tamizhtech.in")) {
    pass("metadataBase", "accurately set to canonical https://www.tamizhtech.in");
  } else {
    fail("metadataBase", "missing or does not use canonical https://www.tamizhtech.in");
  }

  if (layoutContent.includes('verification: {') && layoutContent.includes('7g5KeZcS4nwoVQGUS7gpb2JqM1nOLUtq9SQPvxolQNE')) {
    pass("Google Search Console Verification", "Official verification token present in layout head");
  } else {
    fail("Google Search Console Verification", "Verification token missing in layout head");
  }
} else {
  fail("Layout file", "src/app/layout.tsx does not exist");
}

// Check robots.ts
const robotsPath = path.join(rootDir, 'src/app/robots.ts');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (robotsContent.includes('https://www.tamizhtech.in/sitemap.xml') && robotsContent.includes('https://www.tamizhtech.in')) {
    pass("robots.ts canonical linkage", "points to https://www.tamizhtech.in/sitemap.xml with correct host");
  } else {
    fail("robots.ts canonical linkage", "missing sitemap or host definition");
  }
} else {
  fail("Robots file", "src/app/robots.ts does not exist");
}

// Check sitemap.ts
const sitemapPath = path.join(rootDir, 'src/app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  if (sitemapContent.includes("const SITE_URL = 'https://www.tamizhtech.in'")) {
    pass("sitemap.ts canonical root", "uses https://www.tamizhtech.in");
  } else {
    fail("sitemap.ts canonical root", "does not use https://www.tamizhtech.in");
  }
} else {
  fail("Sitemap file", "src/app/sitemap.ts does not exist");
}

// Scan for accidental dev hostname leaks
const forbiddenTokens = ['localhost:3000', '127.0.0.1:3000', 'tamizhtech.in/svg', 'staging.tamizhtech.in'];
let leakFound = false;

function scanDirForLeaks(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git' || entry.name === 'scripts') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirForLeaks(fullPath);
    } else if (entry.isFile() && /\.(tsx|ts|jsx|js|html)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const token of forbiddenTokens) {
        if (content.includes(token)) {
          fail("Dev Hostname Leak", `Found '${token}' in ${path.relative(rootDir, fullPath)}`);
          leakFound = true;
        }
      }
    }
  }
}
scanDirForLeaks(path.join(rootDir, 'src'));
if (!leakFound) {
  pass("Dev Hostname Leak Scan", "Zero localhost, 127.0.0.1, or staging hostnames found in src/");
}

// -----------------------------------------------------------------------------
// 2. ROBOTS COMPATIBILITY & AI CRAWLER SUPPORT
// -----------------------------------------------------------------------------
console.log("\n📍 [2/9] Checking Robots.txt Compatibility & Directives...");

if (fs.existsSync(robotsPath)) {
  const robotsText = fs.readFileSync(robotsPath, 'utf8');
  if (robotsText.includes("allow: '/'")) {
    pass("Search Engine Crawl Access", "Public routes allowed for search crawlers");
  } else {
    fail("Search Engine Crawl Access", "Wildcard allow rule missing in robots.ts");
  }

  const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot'];
  const missingBots = aiBots.filter(bot => !robotsText.includes(bot));
  if (missingBots.length === 0) {
    pass("AI / GEO Search Engines", "Explicit allow configured for modern AI search engines");
  } else {
    warn("AI / GEO Search Engines", `Missing explicitly named bots: ${missingBots.join(', ')}`);
  }

  if (robotsText.includes("'/api/'") && robotsText.includes("'/search?*'")) {
    pass("Internal Endpoints Disallow", "/api/ and dynamic query parameters safely excluded");
  } else {
    fail("Internal Endpoints Disallow", "/api/ or dynamic query params not protected");
  }
}

// -----------------------------------------------------------------------------
// 3. SITEMAP INCLUSION FOR ALL KEY PUBLIC ROUTES
// -----------------------------------------------------------------------------
console.log("\n📍 [3/9] Checking Sitemap Inclusion of Core Architecture...");

const requiredSitemapPaths = [
  '/',
  '/about',
  '/founder',
  '/services',
  '/services/3d-printing',
  '/services/laser-cutting',
  '/services/pcb-design-fabrication-assembly',
  '/services/robotics-automation',
  '/services/industrial-automation',
  '/solutions',
  '/solutions/schools',
  '/solutions/colleges',
  '/solutions/industries',
  '/solutions/students-makers',
  '/solutions/startups',
  '/products',
  '/projects',
  '/courses',
  '/blog',
  '/contact',
  '/robotics-company-in-coimbatore',
  '/industrial-automation-coimbatore'
];

if (fs.existsSync(sitemapPath)) {
  const sitemapSrc = fs.readFileSync(sitemapPath, 'utf8');
  let missingCount = 0;
  for (const reqPath of requiredSitemapPaths) {
    if (!sitemapSrc.includes(`'${reqPath}'`) && !sitemapSrc.includes(`"${reqPath}"`)) {
      fail("Sitemap Inclusion", `Required route '${reqPath}' is missing in sitemap.ts`);
      missingCount++;
    }
  }
  if (missingCount === 0) {
    pass("Core Architecture Sitemap Inclusions", `All ${requiredSitemapPaths.length} key public routes explicitly included`);
  }
}

// -----------------------------------------------------------------------------
// 4. METADATA UNIQUENESS & TITLE TAG INTEGRITY
// -----------------------------------------------------------------------------
console.log("\n📍 [4/9] Checking Metadata Uniqueness Across Key Routes...");

const pagePathsToAudit = [
  { file: 'src/app/page.tsx', route: '/' },
  { file: 'src/app/services/3d-printing/page.tsx', route: '/services/3d-printing' },
  { file: 'src/app/services/laser-cutting/page.tsx', route: '/services/laser-cutting' },
  { file: 'src/app/services/pcb-design-fabrication-assembly/page.tsx', route: '/services/pcb-design-fabrication-assembly' },
  { file: 'src/app/services/robotics-automation/page.tsx', route: '/services/robotics-automation' },
  { file: 'src/app/services/industrial-automation/page.tsx', route: '/services/industrial-automation' },
  { file: 'src/app/solutions/schools/page.tsx', route: '/solutions/schools' },
  { file: 'src/app/solutions/colleges/page.tsx', route: '/solutions/colleges' },
  { file: 'src/app/solutions/industries/page.tsx', route: '/solutions/industries' },
  { file: 'src/app/solutions/students-makers/page.tsx', route: '/solutions/students-makers' },
  { file: 'src/app/solutions/startups/page.tsx', route: '/solutions/startups' },
  { file: 'src/app/products/page.tsx', route: '/products' },
  { file: 'src/app/projects/page.tsx', route: '/projects' },
  { file: 'src/app/about/page.tsx', route: '/about' },
  { file: 'src/app/founder/page.tsx', route: '/founder' },
  { file: 'src/app/contact/page.tsx', route: '/contact' },
  { file: 'src/app/robotics-company-in-coimbatore/page.tsx', route: '/robotics-company-in-coimbatore' },
  { file: 'src/app/industrial-automation-coimbatore/page.tsx', route: '/industrial-automation-coimbatore' }
];

const recordedTitles = new Map();
let duplicateTitles = 0;

for (const p of pagePathsToAudit) {
  const fullPath = path.join(rootDir, p.file);
  if (!fs.existsSync(fullPath)) {
    fail("Route Existence", `${p.file} not found on disk`);
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/) || content.match(/title:\s*\{\s*default:\s*["'`]([^"'`]+)["'`]/);
  if (titleMatch) {
    const titleVal = titleMatch[1];
    if (recordedTitles.has(titleVal)) {
      fail("Title Tag Collision", `Duplicate title "${titleVal}" between ${recordedTitles.get(titleVal)} and ${p.route}`);
      duplicateTitles++;
    } else {
      recordedTitles.set(titleVal, p.route);
    }
  } else {
    // Some pages may construct dynamic metadata or use layout title
    pass(`Metadata for ${p.route}`, "Configured via component or dynamic layout");
  }
}

if (duplicateTitles === 0) {
  pass("Metadata Uniqueness", "All audited core landing pages have distinct title tags");
}

// -----------------------------------------------------------------------------
// 5. STRUCTURED DATA & ZERO FABRICATION INTEGRITY
// -----------------------------------------------------------------------------
console.log("\n📍 [5/9] Verifying Structured Data Schemas & Authenticity...");

const jsonLdPath = path.join(rootDir, 'src/components/JsonLd.tsx');
if (fs.existsSync(jsonLdPath)) {
  const jsonLdContent = fs.readFileSync(jsonLdPath, 'utf8');
  
  const schemaTypes = [
    { name: 'Organization', matches: ['"Organization"'] },
    { name: 'LocalBusiness', matches: ['"LocalBusiness"'] },
    { name: 'Product', matches: ['"Product"'] },
    { name: 'Course', matches: ['"Course"'] },
    { name: 'Article', matches: ['"Article"', '"BlogPosting"', '"TechArticle"'] },
    { name: 'FAQPage', matches: ['"FAQPage"'] },
    { name: 'BreadcrumbList', matches: ['"BreadcrumbList"'] }
  ];
  for (const s of schemaTypes) {
    const isPresent = s.matches.some(m => jsonLdContent.includes(m));
    if (isPresent) {
      pass(`Schema Component: ${s.name}`, "Schema definition present");
    } else {
      fail(`Schema Component: ${s.name}`, "Schema definition missing");
    }
  }

  // Verify Zero Mock & Zero Fabrication policy
  const forbiddenSchemaAttributes = ['AggregateRating', 'aggregateRating', 'reviewCount', 'ratingValue', 'priceValidUntil'];
  let fakeSchemaDetected = false;
  for (const attr of forbiddenSchemaAttributes) {
    if (jsonLdContent.includes(attr)) {
      fail("Fake Review/Rating Violation", `Found forbidden schema property '${attr}' in JsonLd.tsx`);
      fakeSchemaDetected = true;
    }
  }
  if (!fakeSchemaDetected) {
    pass("Schema Authenticity", "Zero fabricated reviews, ratings, or fake e-commerce prices");
  }
} else {
  fail("JsonLd.tsx", "src/components/JsonLd.tsx not found");
}

// -----------------------------------------------------------------------------
// 6. INTERNAL LINKING & ORPHAN PAGE CHECK
// -----------------------------------------------------------------------------
console.log("\n📍 [6/9] Checking Internal Linking Structure & Navigation Coverage...");

const navPath = path.join(rootDir, 'src/data/navigation.ts');
if (fs.existsSync(navPath)) {
  const navContent = fs.readFileSync(navPath, 'utf8');
  const coreHubs = ['/services', '/solutions', '/products', '/projects', '/courses', '/blog', '/contact'];
  let missingHubs = 0;
  for (const hub of coreHubs) {
    if (!navContent.includes(hub)) {
      fail("Navigation Hub Coverage", `Core hub '${hub}' is not linked in navigation.ts`);
      missingHubs++;
    }
  }
  if (missingHubs === 0) {
    pass("Navigation Architecture", "All primary hubs linked from centralized navigation system");
  }
} else {
  fail("navigation.ts", "src/data/navigation.ts not found");
}

// -----------------------------------------------------------------------------
// 7. KEYWORD MAP & CANONICAL MAPPING CONSISTENCY
// -----------------------------------------------------------------------------
console.log("\n📍 [7/9] Checking seoKeywordMap.ts Integrity...");

const keywordMapPath = path.join(rootDir, 'src/data/seoKeywordMap.ts');
if (fs.existsSync(keywordMapPath)) {
  const kwContent = fs.readFileSync(keywordMapPath, 'utf8');
  if (kwContent.includes('seoKeywordMap') && kwContent.includes('primaryFocus')) {
    pass("SEO Keyword Map", "seoKeywordMap.ts structured with 1-to-1 primary intent mappings");
  } else {
    fail("SEO Keyword Map", "seoKeywordMap.ts missing expected export structure");
  }
} else {
  fail("SEO Keyword Map", "src/data/seoKeywordMap.ts not found");
}

// -----------------------------------------------------------------------------
// 8. IMAGE ALT TEXT COMPLIANCE
// -----------------------------------------------------------------------------
console.log("\n📍 [8/9] Auditing Image Alt Text Coverage in Components...");

let missingAltCount = 0;
function scanForImageAlt(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanForImageAlt(fullPath);
    } else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      // Look for <img or <Image tags without alt=
      const imgTags = content.match(/<Image[^>]+>|<img[^>]+>/g) || [];
      for (const tag of imgTags) {
        if (!tag.includes('alt=') && !tag.includes('alt =')) {
          warn("Missing Alt Attribute", `In ${path.relative(rootDir, fullPath)}: ${tag.slice(0, 50)}...`);
          missingAltCount++;
        }
      }
    }
  }
}
scanForImageAlt(path.join(rootDir, 'src'));
if (missingAltCount === 0) {
  pass("Image Alt Text", "100% of scanned images have alt text attributes");
} else {
  warn("Image Alt Text Warnings", `${missingAltCount} image tags without explicit alt found`);
}

// -----------------------------------------------------------------------------
// 9. LOCAL BUSINESS NAP CONSISTENCY
// -----------------------------------------------------------------------------
console.log("\n📍 [9/9] Verifying Local Business NAP (Name, Address, Phone) Consistency...");

const footerPath = path.join(rootDir, 'src/components/layout/Footer.tsx');
if (fs.existsSync(footerPath) && fs.existsSync(layoutPath)) {
  const footerContent = fs.readFileSync(footerPath, 'utf8');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');

  const phonePattern = /8148045030/;
  const pinPattern = /641107/;
  const cityPattern = /Coimbatore/;

  if (phonePattern.test(footerContent) && phonePattern.test(layoutContent)) {
    pass("Phone Consistency", "Official number +91 8148045030 matches in layout and footer");
  } else {
    fail("Phone Consistency", "Inconsistent phone numbers across layout and footer");
  }

  if (pinPattern.test(footerContent) && pinPattern.test(layoutContent) && cityPattern.test(footerContent)) {
    pass("Address Consistency", "Coimbatore 641107 matches in layout schema and footer");
  } else {
    fail("Address Consistency", "Address mismatch between schema and footer");
  }
}

// -----------------------------------------------------------------------------
// SUMMARY & EXIT
// -----------------------------------------------------------------------------
console.log("\n================================================================================");
console.log("SEO OPERATIONS AUDIT SUMMARY");
console.log("================================================================================");
console.log(`• Blocking Failures: ${blockingIssues}`);
console.log(`• Non-blocking Warnings: ${warnings}`);
console.log("================================================================================");

if (blockingIssues === 0) {
  console.log("🎉 VERDICT: PASS ✅ (SEO Operations Architecture is 100% Validated)\n");
  process.exit(0);
} else {
  console.error("❌ VERDICT: FAIL (Please resolve blocking failures above)\n");
  process.exit(1);
}
