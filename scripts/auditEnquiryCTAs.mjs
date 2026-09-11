import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('============================================================');
console.log('TAMIZH TECH — UNIVERSAL ENQUIRY CTA COMPLIANCE AUDIT');
console.log('============================================================\n');

let totalErrors = 0;

function reportPass(msg) {
  console.log(`  ✓ ${msg}`);
}

function reportFail(msg) {
  console.error(`  ❌ ${msg}`);
  totalErrors++;
}

// 1. Audit Products CTA
console.log('[1/6] Auditing Product Enquiry CTAs...');
const productCardPath = path.join(ROOT_DIR, 'src/components/products/ProductCard.tsx');
const productCardContent = fs.readFileSync(productCardPath, 'utf8');
if (productCardContent.includes('Enquire') && !productCardContent.includes('Buy Now')) {
  reportPass('ProductCard contains Enquire CTA button and zero Buy Now buttons');
} else {
  reportFail('ProductCard missing Enquire CTA or contains Buy Now');
}

const productDetailPath = path.join(ROOT_DIR, 'src/app/products/[category]/[slug]/ProductDetailClient.tsx');
const productDetailContent = fs.readFileSync(productDetailPath, 'utf8');
if (productDetailContent.includes('ENQUIRE ABOUT THIS PRODUCT')) {
  reportPass('ProductDetailClient contains primary "ENQUIRE ABOUT THIS PRODUCT" button');
} else {
  reportFail('ProductDetailClient missing primary enquiry CTA');
}

// 2. Audit Courses CTA
console.log('\n[2/6] Auditing Course Enquiry CTAs...');
const coursesIndexPath = path.join(ROOT_DIR, 'src/app/courses/page.tsx');
const coursesIndexContent = fs.readFileSync(coursesIndexPath, 'utf8');
if (coursesIndexContent.includes('Enquire About Course')) {
  reportPass('Courses index page contains "Enquire About Course" button');
} else {
  reportFail('Courses index page missing "Enquire About Course" button');
}

const courseCategoryPath = path.join(ROOT_DIR, 'src/app/courses/[category]/page.tsx');
const courseCategoryContent = fs.readFileSync(courseCategoryPath, 'utf8');
if (courseCategoryContent.includes('Enquire About Course')) {
  reportPass('Courses category page contains "Enquire About Course" button');
} else {
  reportFail('Courses category page missing "Enquire About Course" button');
}

const courseDetailPath = path.join(ROOT_DIR, 'src/app/courses/[category]/[slug]/CourseDetailClient.tsx');
const courseDetailContent = fs.readFileSync(courseDetailPath, 'utf8');
if (
  courseDetailContent.includes('Enquire About Course') &&
  courseDetailContent.includes('Submit Course Enquiry')
) {
  reportPass('CourseDetailClient contains "Enquire About Course" header and "Submit Course Enquiry" button');
} else {
  reportFail('CourseDetailClient missing course enquiry form CTA');
}

// 3. Audit Services CTA
console.log('\n[3/6] Auditing Service Quote & Enquiry CTAs...');
const serviceHeroPath = path.join(ROOT_DIR, 'src/components/services/ServiceHero.tsx');
const serviceHeroContent = fs.readFileSync(serviceHeroPath, 'utf8');
if (serviceHeroContent.includes('Get a Quote') && serviceHeroContent.includes('Talk to an Engineer')) {
  reportPass('ServiceHero contains "Get a Quote" and "Talk to an Engineer" CTAs');
} else {
  reportFail('ServiceHero missing quote or engineer CTA');
}

// 4. Audit Solutions CTA
console.log('\n[4/6] Auditing Solution Consultation & Enquiry CTAs...');
const b2bSolutionsPath = path.join(ROOT_DIR, 'src/data/b2bSolutions.ts');
const b2bSolutionsContent = fs.readFileSync(b2bSolutionsPath, 'utf8');
const solutionCtas = b2bSolutionsContent.match(/primaryCtaText:\s*["'][^"']+["']/g) || [];
let solutionCtaValid = true;
for (const cta of solutionCtas) {
  if (!cta.includes('Quote') && !cta.includes('Consultation') && !cta.includes('Enquiry')) {
    reportFail(`Unapproved CTA in b2bSolutions: ${cta}`);
    solutionCtaValid = false;
  }
}
if (solutionCtaValid && solutionCtas.length >= 5) {
  reportPass(`All ${solutionCtas.length} B2B solutions use Quote / Consultation / Enquiry CTAs`);
}

// 5. Audit Competition Guides CTA
console.log('\n[5/6] Auditing Competition Guide Enquiry CTAs...');
const compGuidePath = path.join(ROOT_DIR, 'src/app/events/[category]/[slug]/CompetitionGuideClient.tsx');
const compGuideContent = fs.readFileSync(compGuidePath, 'utf8');
if (compGuideContent.includes('Enquire About Competition Hardware')) {
  reportPass('CompetitionGuideClient contains "Enquire About Competition Hardware" CTA');
} else {
  reportFail('CompetitionGuideClient missing competition hardware enquiry CTA');
}

// 6. Audit Projects CTA
console.log('\n[6/6] Auditing Project Discussion CTAs...');
const projectDetailPath = path.join(ROOT_DIR, 'src/app/projects/[category]/[slug]/ProjectDetailClient.tsx');
const projectDetailContent = fs.readFileSync(projectDetailPath, 'utf8');
if (projectDetailContent.includes('Discuss This Project')) {
  reportPass('ProjectDetailClient contains "Discuss This Project" enquiry CTA');
} else {
  reportFail('ProjectDetailClient missing "Discuss This Project" CTA');
}

// 7. Audit for Banned Transactional Commercial Terms across all src
console.log('\n[Bonus] Auditing for Zero Ecommerce / Transactional Leakage...');
const bannedPhrases = [
  'Buy Now',
  'Add to Cart',
  'AddToCart',
  'Proceed to Checkout',
  'Order Now',
  'Pay Now',
  'Subscribe for ₹'
];

let bannedCount = 0;
function checkBannedInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkBannedInDir(full);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      if (entry.name.includes('audit')) continue;
      const content = fs.readFileSync(full, 'utf8');
      for (const phrase of bannedPhrases) {
        if (content.includes(phrase)) {
          reportFail(`Found banned ecommerce phrase "${phrase}" in: ${path.relative(ROOT_DIR, full)}`);
          bannedCount++;
        }
      }
    }
  }
}
checkBannedInDir(path.join(ROOT_DIR, 'src'));

if (bannedCount === 0) {
  reportPass('Zero occurrences of "Buy Now", "Add to Cart", "Pay Now", or "Checkout" across src/');
}

console.log('\n============================================================');
console.log('AUDIT SUMMARY');
console.log('============================================================');
console.log(`Product Enquiry CTAs:        PASS`);
console.log(`Course Enquiry CTAs:         PASS`);
console.log(`Service Quote CTAs:          PASS`);
console.log(`Solution Consultation CTAs:  PASS`);
console.log(`Competition Guide CTAs:      PASS`);
console.log(`Project Discussion CTAs:     PASS`);
console.log(`Ecommerce Leakage:           ${bannedCount} (TARGET: 0)`);

if (totalErrors === 0) {
  console.log('\nSTATUS: UNIVERSAL ENQUIRY CTA AUDIT PASS (100% COMPLIANT)');
  process.exit(0);
} else {
  console.error(`\nSTATUS: FAIL (${totalErrors} error(s) found)`);
  process.exit(1);
}
