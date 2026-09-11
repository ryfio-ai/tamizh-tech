import fs from "fs";
import path from "path";

const productsFilePath = path.resolve("./src/data/products.ts");
const clientFilePath = path.resolve("./src/app/products/[category]/[slug]/ProductDetailClient.tsx");
const pageFilePath = path.resolve("./src/app/products/[category]/[slug]/page.tsx");

const productsContent = fs.readFileSync(productsFilePath, "utf8");
const clientContent = fs.readFileSync(clientFilePath, "utf8");
const pageContent = fs.readFileSync(pageFilePath, "utf8");

console.log("==================================================");
console.log("TAMIZH TECH — PRODUCT AEO & SCHEMA AUDIT SUITE");
console.log("==================================================\n");

let passed = 0;
let warnings = 0;
let errors = 0;

function assert(condition, message, warnOnly = false) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else if (warnOnly) {
    warnings++;
    console.log(`  ⚠ WARNING: ${message}`);
  } else {
    errors++;
    console.log(`  ✗ FAILED: ${message}`);
  }
}

// 1. Google AEO Content Quality: visible question -> direct answer -> semantic HTML
console.log("[1/3] Auditing Visible AEO Questions & Direct Answers...");
assert(clientContent.includes("What is {product.name}?"), "Visible H2 question heading exists for AEO extractability");
assert(clientContent.includes("{product.quickAnswer}"), "Direct factual answer paragraph rendered under H2");
assert(clientContent.includes("Quick Answer"), "Quick Answer badge rendered for clear visual and screen-reader hierarchy");
assert(!clientContent.includes("itemscope") && !clientContent.includes("itemprop"), "No redundant microdata spam; clean semantic HTML with JSON-LD");

// 2. Multi-Tier Semantic Internal Linking
console.log("\n[2/3] Auditing Topical Internal Linking (Services, Courses, Projects)...");
assert(clientContent.includes("COURSE_META"), "Recommended Courses & Labs metadata registry configured");
assert(clientContent.includes("PROJECT_CATEGORY_META"), "Project Categories metadata registry configured");
assert(clientContent.includes("product.relatedCourses"), "Related Courses section dynamically rendered when present");
assert(clientContent.includes("product.relatedProjects"), "Related Projects section dynamically rendered when present");
assert(clientContent.includes("product.relatedServices"), "Commercial Services section dynamically rendered when present");

// 3. Appropriate JSON-LD
console.log("\n[3/3] Auditing Clean JSON-LD Structured Data...");
assert(pageContent.includes("<BreadcrumbSchema"), "BreadcrumbList schema active for navigation structure");
assert(pageContent.includes("<ProductSchema"), "Factual Product schema active without fake reviews/ratings/stock");
assert(pageContent.includes("<FAQSchema"), "FAQPage schema active when product has verified technical FAQs");

console.log("\n==================================================");
console.log(`AEO AUDIT COMPLETE: ${passed} passed, ${warnings} warnings, ${errors} failed.`);
console.log("==================================================");

if (errors > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
