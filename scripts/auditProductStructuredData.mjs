#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import ts from 'typescript';

function loadTs(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const result = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  });
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.outputText);
  fn(m, m.exports, (mod) => {
    if (mod.startsWith('@/data/')) {
      const sub = path.resolve(process.cwd(), 'src/data', mod.replace('@/data/', '') + '.ts');
      return loadTs(sub);
    }
    return {};
  });
  return m.exports;
}

const productsPath = path.resolve(process.cwd(), 'src/data/products.ts');
const { products } = loadTs(productsPath);

console.log('============================================================');
console.log(' PRODUCT STRUCTURED DATA AUDIT — AVAILABILITY & POLICIES   ');
console.log(' Tamizh Tech Robotics Company (https://www.tamizhtech.in)   ');
console.log('============================================================\n');

let productsChecked = 0;
let inStockCount = 0;
let invalidAvailabilityCount = 0;
let fakeRatingsCount = 0;
let fakeReviewsCount = 0;
let fakeShippingCount = 0;
let fakeReturnPolicyCount = 0;
let priceConsistencyErrors = 0;

// Availability mapping simulating ProductSchema in JsonLd.tsx
const availabilityMap = {
  in_stock: 'https://schema.org/InStock',
  InStock: 'https://schema.org/InStock',
  out_of_stock: 'https://schema.org/OutOfStock',
  OutOfStock: 'https://schema.org/OutOfStock',
  preorder: 'https://schema.org/PreOrder',
  PreOrder: 'https://schema.org/PreOrder',
  backorder: 'https://schema.org/BackOrder',
  BackOrder: 'https://schema.org/BackOrder',
  InStoreOnly: 'https://schema.org/InStoreOnly'
};

products.forEach((p, index) => {
  productsChecked++;
  const errors = [];

  // 1. Product & Offer Schema check
  if (!p.name || p.name.trim().length === 0) errors.push('Product name is missing');
  if (!p.sku || p.sku.trim().length === 0) errors.push('Product SKU is missing');
  if (!p.categorySlug || !p.slug) errors.push('CategorySlug or slug is missing');

  const expectedUrl = `https://www.tamizhtech.in/products/${p.categorySlug}/${p.slug}`;

  // 2. Price check
  if (typeof p.price !== 'number' || isNaN(p.price) || p.price <= 0) {
    errors.push(`Invalid price: ${p.price}`);
    priceConsistencyErrors++;
  }

  // 3. Image check
  if (!p.image && (!p.images || p.images.length === 0)) {
    errors.push('No product image defined');
  }

  // 4. Availability resolution
  const mappedAvailability = availabilityMap[p.availability];
  if (mappedAvailability === 'https://schema.org/InStock') {
    inStockCount++;
  } else if (!p.availability) {
    errors.push('Missing availability on product');
    invalidAvailabilityCount++;
  } else {
    errors.push(`Non-InStock availability: ${p.availability}`);
    invalidAvailabilityCount++;
  }

  // 5. Prohibited / Fabricated structured data checks
  if (p.aggregateRating || p.ratingValue || p.reviewCount) {
    fakeRatingsCount++;
    errors.push('Fabricated aggregateRating detected');
  }

  if (p.review || p.reviews) {
    fakeReviewsCount++;
    errors.push('Fabricated review detected');
  }

  if (p.shippingDetails || p.shippingRate) {
    fakeShippingCount++;
    errors.push('Unverified shippingDetails detected');
  }

  if (p.hasMerchantReturnPolicy || p.returnPolicy) {
    fakeReturnPolicyCount++;
    errors.push('Unverified hasMerchantReturnPolicy detected');
  }

  if (p.inventoryCount || p.stockQuantity || p.remainingCount) {
    errors.push('Fake stock quantity detected');
  }

  // Simulated schema object
  const schemaOffer = {
    "@type": "Offer",
    "price": p.price,
    "priceCurrency": "INR",
    "url": expectedUrl,
    "availability": mappedAvailability,
    "seller": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Company"
    }
  };

  const status = errors.length === 0 ? '✅ PASS' : '❌ FAIL';
  console.log(`[${index + 1}/${products.length}] ${p.sku.padEnd(10)} | ${p.name}`);
  console.log(`    Offer: Price: ₹${p.price.toLocaleString('en-IN')} INR | Availability: ${schemaOffer.availability}`);
  console.log(`    URL:   ${expectedUrl}`);
  console.log(`    Check: ${status}`);
  if (errors.length > 0) {
    errors.forEach(e => console.log(`      ⚠️  ERROR: ${e}`));
  }
});

console.log('\n============================================================');
console.log(' AUDIT VERIFICATION METRICS');
console.log('============================================================');
console.log(`Products checked:         ${productsChecked}`);
console.log(`Availability InStock:     ${inStockCount}/${productsChecked}`);
console.log(`Invalid availability:     ${invalidAvailabilityCount}`);
console.log(`Fake ratings:             ${fakeRatingsCount}`);
console.log(`Fake reviews:             ${fakeReviewsCount}`);
console.log(`Fake shipping data:       ${fakeShippingCount}`);
console.log(`Fake return policy:       ${fakeReturnPolicyCount}`);
console.log(`Price consistency errors: ${priceConsistencyErrors}`);

const isPass = 
  productsChecked === 13 &&
  inStockCount === 13 &&
  invalidAvailabilityCount === 0 &&
  fakeRatingsCount === 0 &&
  fakeReviewsCount === 0 &&
  fakeShippingCount === 0 &&
  fakeReturnPolicyCount === 0 &&
  priceConsistencyErrors === 0;

if (isPass) {
  console.log('\nSTATUS: PASS — FACTUAL PRODUCT STRUCTURED DATA');
  process.exit(0);
} else {
  console.error('\nSTATUS: FAIL');
  process.exit(1);
}
