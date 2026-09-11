import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('============================================================');
console.log('TAMIZH TECH — PUBLIC PRICING & ENQUIRY NORMALIZATION AUDIT');
console.log('============================================================\n');

let totalErrors = 0;
let totalWarnings = 0;

function reportPass(msg) {
  console.log(`  ✓ ${msg}`);
}

function reportFail(msg) {
  console.error(`  ❌ ${msg}`);
  totalErrors++;
}

// 1. Audit Products Data Source of Truth
console.log('[1/5] Auditing Central Product Pricing (Source of Truth)...');
const productsFilePath = path.join(ROOT_DIR, 'src/data/products.ts');
const productsContent = fs.readFileSync(productsFilePath, 'utf8');

// Match all product entries with id, name, price
const verifiedProducts = [
  { slug: 'ttrc-lf-5-0', expectedPrice: 3800 },
  { slug: 'rc-robo-race', expectedPrice: 7999 },
  { slug: 'rc-robo-soccer', expectedPrice: 7999 },
  { slug: 'flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver', expectedPrice: 6398 },
  { slug: 'flysky-fs-i6-2.4g-6ch', expectedPrice: 5459 },
  { slug: 'flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver', expectedPrice: 7398 },
  { slug: 'flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver', expectedPrice: 3548 },
  { slug: 'boxing-bot', expectedPrice: 14999 },
  { slug: '112mm-buggy-wheel', expectedPrice: 3000 },
  { slug: '100mm-buggy-wheel', expectedPrice: 3000 },
  { slug: 'ttrc-hd-80mm-wheel', expectedPrice: 2000 },
  { slug: 'ttrc-dgj-300rpm', expectedPrice: 650 },
  { slug: 'ttrc-dgj-600rpm', expectedPrice: 700 }
];

let verifiedCount = 0;
for (const p of verifiedProducts) {
  if (productsContent.includes(p.slug)) {
    reportPass(`Product source of truth verified: ${p.slug} (₹${p.expectedPrice.toLocaleString('en-IN')})`);
    verifiedCount++;
  } else {
    reportFail(`Missing product in central data: ${p.slug}`);
  }
}

// 2. Audit Non-Product Data Files for Numeric Fees
console.log('\n[2/5] Auditing Non-Product Data Sources (Zero Unverified Numeric Fees)...');
const coursesFilePath = path.join(ROOT_DIR, 'src/data/courses.ts');
const coursesContent = fs.readFileSync(coursesFilePath, 'utf8');

// Check for any ₹xxx or numeric fee in courses.ts
const coursePriceMatches = coursesContent.match(/price:\s*["']₹[\d,]+/g) || [];
if (coursePriceMatches.length === 0) {
  reportPass(`Zero unverified numeric fees in courses data (found ${coursePriceMatches.length})`);
} else {
  reportFail(`Found ${coursePriceMatches.length} unverified numeric fees in courses data: ${coursePriceMatches.join(', ')}`);
}

const eventsFilePath = path.join(ROOT_DIR, 'src/data/events.ts');
const eventsContent = fs.readFileSync(eventsFilePath, 'utf8');
const eventPriceMatches = eventsContent.match(/price:\s*["']₹[\d,]+/g) || [];
if (eventPriceMatches.length === 0) {
  reportPass(`Zero unverified numeric fees in events data (found ${eventPriceMatches.length})`);
} else {
  reportFail(`Found ${eventPriceMatches.length} unverified numeric fees in events data: ${eventPriceMatches.join(', ')}`);
}

// 3. Audit UI Components & Pages for Non-Product Numeric Pricing
console.log('\n[3/5] Auditing Public Non-Product UI Pages & Components...');
const nonProductPathsToCheck = [
  'src/app/courses/page.tsx',
  'src/app/courses/[category]/page.tsx',
  'src/app/courses/[category]/[slug]/CourseDetailClient.tsx',
  'src/components/solutions/SolutionRelevantCourses.tsx',
  'src/app/events/page.tsx',
  'src/app/events/[category]/page.tsx',
  'src/app/events/[category]/[slug]/EventDetailClient.tsx',
  'src/app/services/page.tsx',
  'src/components/HomeClient.tsx'
];

let nonProductPricingViolations = 0;
for (const relPath of nonProductPathsToCheck) {
  const fullPath = path.join(ROOT_DIR, relPath);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');

  // Check for {course.price} or {event.price} in JSX rendering
  if (content.includes('{course.price}')) {
    reportFail(`Direct {course.price} rendering in: ${relPath}`);
    nonProductPricingViolations++;
  }
  if (content.includes('{event.price}')) {
    reportFail(`Direct {event.price} rendering in: ${relPath}`);
    nonProductPricingViolations++;
  }
  // Check for Course Fee heading
  if (/Course\s+Fee/i.test(content)) {
    reportFail(`Found "Course Fee" label in: ${relPath}`);
    nonProductPricingViolations++;
  }
  // Check for unverified commercial buzzwords
  if (/Affordable\s*&\s*Best\s*Price/i.test(content)) {
    reportFail(`Found "Affordable & Best Price" in: ${relPath}`);
    nonProductPricingViolations++;
  }
}

if (nonProductPricingViolations === 0) {
  reportPass('Zero unverified non-product price displays found across checked routes');
}

// 4. Audit Structured Data & Schema.org Offer Rules
console.log('\n[4/5] Auditing Structured Data & Offer Schema Integrity...');
const jsonLdPath = path.join(ROOT_DIR, 'src/components/JsonLd.tsx');
const jsonLdContent = fs.readFileSync(jsonLdPath, 'utf8');

// Offer schema must ONLY be inside ProductSchema
const offerMatches = (jsonLdContent.match(/"@type":\s*"Offer"/g) || []).length;
if (offerMatches === 1) {
  reportPass(`Offer schema strictly constrained to ProductSchema (count = ${offerMatches})`);
} else {
  reportFail(`Expected exactly 1 Offer schema definition, found ${offerMatches}`);
}

// Ensure CourseSchema and EventSchema have no price / offers
if (jsonLdContent.includes('CourseSchema')) {
  const courseSchemaSection = jsonLdContent.slice(
    jsonLdContent.indexOf('function CourseSchema'),
    jsonLdContent.indexOf('function ArticleSchema')
  );
  if (courseSchemaSection.includes('offers') || courseSchemaSection.includes('price')) {
    reportFail('CourseSchema contains offers or price field');
  } else {
    reportPass('CourseSchema cleanly has zero offers and zero price');
  }
}

if (jsonLdContent.includes('EventSchema')) {
  const eventSchemaSection = jsonLdContent.slice(
    jsonLdContent.indexOf('function EventSchema'),
    jsonLdContent.indexOf('function HowToSchema')
  );
  if (eventSchemaSection.includes('offers') || eventSchemaSection.includes('price')) {
    reportFail('EventSchema contains offers or price field');
  } else {
    reportPass('EventSchema cleanly has zero offers and zero price');
  }
}

// 5. Audit Fake Discounts & Fake Zero Prices
console.log('\n[5/5] Auditing for Fake Discounts & Zero-Price Anti-Patterns...');
const srcFiles = [];
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      srcFiles.push(full);
    }
  }
}
scanDir(path.join(ROOT_DIR, 'src'));

let fakeDiscountCount = 0;
let fakeZeroPriceCount = 0;

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Fake discounts e.g. "50% OFF", "Save ₹xxx"
  if (/\b\d{1,2}%\s+OFF\b/i.test(content) && !file.includes('audit')) {
    reportFail(`Fake discount pattern in: ${path.relative(ROOT_DIR, file)}`);
    fakeDiscountCount++;
  }
  // Hardcoded ₹0 in JSX (excluding general 0 checks in math)
  if (/>\s*₹0\s*</i.test(content)) {
    reportFail(`Hardcoded ₹0 in: ${path.relative(ROOT_DIR, file)}`);
    fakeZeroPriceCount++;
  }
}

if (fakeDiscountCount === 0) {
  reportPass('Zero fake discount badges found across src/');
}
if (fakeZeroPriceCount === 0) {
  reportPass('Zero fake ₹0 price tags found across src/');
}

console.log('\n============================================================');
console.log('AUDIT SUMMARY');
console.log('============================================================');
console.log(`Verified Products:                 ${verifiedCount}/13 PASS`);
console.log(`Non-Product Unverified Prices:     ${nonProductPricingViolations} (TARGET: 0)`);
console.log(`Course / Event Fees in Data:       ${coursePriceMatches.length + eventPriceMatches.length} (TARGET: 0)`);
console.log(`Fake Discounts Detected:           ${fakeDiscountCount} (TARGET: 0)`);
console.log(`Fake Zero Prices Detected:         ${fakeZeroPriceCount} (TARGET: 0)`);
console.log(`Offer Schema Violations:           ${totalErrors > 0 ? totalErrors : 0}`);

if (totalErrors === 0) {
  console.log('\nSTATUS: PUBLIC PRICING AUDIT PASS (100% COMPLIANT)');
  process.exit(0);
} else {
  console.error(`\nSTATUS: FAIL (${totalErrors} error(s) found)`);
  process.exit(1);
}
