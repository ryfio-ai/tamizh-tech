import fs from "fs";
import path from "path";

const productsFilePath = path.resolve("./src/data/products.ts");
const seoMapFilePath = path.resolve("./src/data/productSeoMap.ts");

const productsContent = fs.readFileSync(productsFilePath, "utf8");
const seoMapContent = fs.readFileSync(seoMapFilePath, "utf8");

console.log("==================================================");
console.log("TAMIZH TECH — PRODUCT SEO AUDIT SUITE");
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

// 1. Check Product Schema in JsonLd.tsx
console.log("[1/4] Auditing Structured Data & Product Schema Integrity...");
const jsonLdContent = fs.readFileSync(path.resolve("./src/components/JsonLd.tsx"), "utf8");

assert(!jsonLdContent.includes("AggregateOffer"), "No AggregateOffer in Product Schema (Google Merchants compliant)");
assert(!jsonLdContent.includes("AggregateRating"), "No fake AggregateRating in Product Schema");
assert(!jsonLdContent.includes("Review"), "No fake Review structured data in Product Schema");
assert(!jsonLdContent.includes("InStock"), "No fabricated InStock/Availability in Product Schema");
assert(jsonLdContent.includes('"@type": "Offer"'), "Honest Offer schema included when published price exists");
assert(jsonLdContent.includes('seller":'), "Seller organization attributed correctly");

// 2. Check Product Page SEO Components
console.log("\n[2/4] Auditing Product Detail Page Dynamic Injection...");
const pageContent = fs.readFileSync(path.resolve("./src/app/products/[category]/[slug]/page.tsx"), "utf8");
assert(pageContent.includes("BreadcrumbSchema"), "BreadcrumbList Schema injected on product pages");
assert(pageContent.includes("ProductSchema"), "Product Schema injected on product pages");
assert(pageContent.includes("FAQSchema"), "FAQPage Schema injected dynamically from verified product FAQs");

// 3. Check All 13 Published Products in products.ts
console.log("\n[3/4] Auditing Individual Product Metadata & Internal Linking...");
const expectedProducts = [
  { slug: "ttrc-lf-5-0", sku: "TTRC-C-1", type: "Competition Line Follower Robot" },
  { slug: "rc-robo-race", sku: "TTRC-C-2", type: "Competition Robot" },
  { slug: "rc-robo-soccer", sku: "TTRC-C-3", type: "Robo Soccer Competition Platform" },
  { slug: "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver", sku: "TTRC-R-1", type: "10CH Radio Controller" },
  { slug: "flysky-fs-i6-2.4g-6ch", sku: "TTRC-R-2", type: "6CH Radio Transmitter" },
  { slug: "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver", sku: "TTRC-R-3", type: "Touchscreen Radio Controller" },
  { slug: "flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver", sku: "TTRC-R-4", type: "6CH Radio Set" },
  { slug: "boxing-bot", sku: "TTRC-E-1", type: "Educational Boxing Robot Kit" },
  { slug: "112mm-buggy-wheel", sku: "TTRC-RC-1", type: "Robotics Competition Wheel" },
  { slug: "100mm-buggy-wheel", sku: "TTRC-RC-2", type: "Robotics Competition Wheel" },
  { slug: "ttrc-hd-80mm-wheel", sku: "TTRC-RC-3", type: "Heavy Duty Nylon Robotics Wheel" },
  { slug: "ttrc-dgj-300rpm", sku: "TTRC-RC-4", type: "Geared DC Motor" },
  { slug: "ttrc-dgj-600rpm", sku: "TTRC-RC-5", type: "Geared DC Motor" }
];

expectedProducts.forEach((p) => {
  assert(productsContent.includes(`slug: "${p.slug}"`), `Product slug exists: ${p.slug}`);
  assert(productsContent.includes(`sku: "${p.sku}"`), `Standardized SKU exists: ${p.sku}`);
  assert(seoMapContent.includes(`"${p.slug}":`), `Distinct SEO search intent mapped in productSeoMap: ${p.slug}`);
});

// 4. Strict Catalogue + Enquiry Model Integrity
console.log("\n[4/4] Verifying Zero Ecommerce Leakage...");
const forbiddenWords = ["Add to Cart", "AddToCart", "Buy Now", "Checkout", "Razorpay", "PaymentGateway"];
forbiddenWords.forEach((word) => {
  const countInPage = (pageContent.match(new RegExp(word, "gi")) || []).length;
  assert(countInPage === 0, `Zero occurrences of '${word}' in product page logic`);
});

console.log("\n==================================================");
console.log(`AUDIT COMPLETE: ${passed} passed, ${warnings} warnings, ${errors} failed.`);
console.log("==================================================");

if (errors > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
