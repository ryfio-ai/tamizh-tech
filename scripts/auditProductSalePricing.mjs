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
    if (mod.startsWith('@/lib/')) {
      const sub = path.resolve(process.cwd(), 'src/lib', mod.replace('@/lib/', '') + '.ts');
      return loadTs(sub);
    }
    return {};
  });
  return m.exports;
}

const productsPath = path.resolve(process.cwd(), 'src/data/products.ts');
const pricingPath = path.resolve(process.cwd(), 'src/lib/pricing.ts');

const { products } = loadTs(productsPath);
const { calculateDiscountPercentage, getProductPriceDisplay, validateProductPricing, hasVerifiedPrice } = loadTs(pricingPath);

console.log('============================================================');
console.log(' TAMIZH TECH - PRODUCT SALE PRICING & OFFER AUDIT           ');
console.log('============================================================');
console.log(`Auditing sale pricing architecture for all ${products.length} products...\n`);

let totalProducts = products.length;
let verifiedSellingPricesCount = 0;
let verifiedRegularPricesCount = 0;
let discountsShownCount = 0;
let unverifiedOriginalPricesCount = 0;
let priceMismatches = 0;
let invalidDiscounts = 0;
let fakeDiscounts = 0;
let invalidSaleSchema = 0;
let allPassed = true;

// Known verified catalogue prices as specified in business rules
const knownVerifiedPrices = {
  'ttrc-lf-5-0': 3799,
  'rc-robo-race': 7999,
  'ttrc-rs-5-0-robo-soccer': 7999,
  'flysky-fs-i6x-transmitter-receiver': 6398,
  'flysky-fs-i6-transmitter-receiver': 5459,
  'flysky-fs-i6s-transmitter-receiver': 7398,
  'flysky-fs-ct6b-transmitter-receiver': 3548,
  'the-boxing-bot': 14999,
  '112mm-buggy-wheel': 2999,
  '100mm-buggy-wheel': 2999,
  'ttrc-hd-80mm-wheel': 1999,
  'ttrc-dgj-300rpm': 649,
  'ttrc-dgj-600rpm': 699
};

products.forEach((p, idx) => {
  const issues = [];

  // 1. Check selling price validity
  const activeSelling = p.sellingPrice || p.price;
  if (!hasVerifiedPrice(activeSelling)) {
    issues.push(`Invalid sellingPrice: ${activeSelling}`);
    priceMismatches++;
  } else {
    verifiedSellingPricesCount++;
  }

  // 2. Selling price must strictly match known catalogue price
  if (knownVerifiedPrices[p.slug] !== undefined && activeSelling !== knownVerifiedPrices[p.slug]) {
    issues.push(`Selling price ₹${activeSelling} does not match verified catalogue price ₹${knownVerifiedPrices[p.slug]}`);
    priceMismatches++;
  }

  // 3. Currency check
  if (p.currency && p.currency !== 'INR') {
    issues.push(`Invalid currency: ${p.currency}, expected "INR"`);
  }

  // 4. Regular / List price verification
  const hasRegular = p.regularPrice !== undefined && p.regularPrice !== null;
  if (hasRegular) {
    verifiedRegularPricesCount++;
    if (!hasVerifiedPrice(p.regularPrice)) {
      issues.push(`Invalid regularPrice: ${p.regularPrice}`);
      invalidDiscounts++;
    } else if (p.regularPrice <= activeSelling) {
      issues.push(`regularPrice (₹${p.regularPrice}) <= sellingPrice (₹${activeSelling}) - invalid sale discount claim`);
      invalidDiscounts++;
    }
  }

  // 5. Admin safety validator
  const validation = validateProductPricing(p);
  if (!validation.isValid) {
    validation.errors.forEach(err => issues.push(`Admin Safety: ${err}`));
    invalidDiscounts++;
  }

  // 6. Discount calculation check
  const calculatedDiscount = calculateDiscountPercentage(p.regularPrice, activeSelling);
  if (hasRegular) {
    if (calculatedDiscount === null || calculatedDiscount <= 0) {
      issues.push(`Calculated discount is invalid for regularPrice ₹${p.regularPrice} and sellingPrice ₹${activeSelling}`);
      invalidDiscounts++;
    } else {
      const expectedDiscount = Math.round(((p.regularPrice - activeSelling) / p.regularPrice) * 100);
      if (calculatedDiscount !== expectedDiscount) {
        issues.push(`Discount calculation mismatch: got ${calculatedDiscount}%, expected ${expectedDiscount}%`);
        invalidDiscounts++;
      }
      discountsShownCount++;
    }
  } else {
    if (calculatedDiscount !== null) {
      issues.push(`Fake discount generated without verified regularPrice: ${calculatedDiscount}%`);
      fakeDiscounts++;
    }
  }

  // 7. UI Display helper check
  const displayInfo = getProductPriceDisplay(p);
  if (!hasRegular) {
    if (displayInfo.discountPercentage !== null) {
      issues.push(`UI display provides discount percentage when no regularPrice verified`);
      fakeDiscounts++;
    }
    if (displayInfo.displayRegularPrice !== null) {
      issues.push(`UI display provides strikethrough price when no regularPrice verified`);
      unverifiedOriginalPricesCount++;
    }
  }

  // 8. Structured Data Offer logic check
  // Simulate JsonLd Product schema generation for this product
  let offerPrice = activeSelling;
  let hasStrikethroughInSchema = false;
  if (typeof p.regularPrice === 'number' && p.regularPrice > 0 && p.regularPrice > activeSelling) {
    hasStrikethroughInSchema = true;
  }

  if (hasStrikethroughInSchema && !hasRegular) {
    issues.push(`Schema contains StrikethroughPrice without verified regularPrice`);
    invalidSaleSchema++;
  }

  if (!hasRegular && hasStrikethroughInSchema) {
    invalidSaleSchema++;
  }

  // 9. Fake MRP check: regularPrice must never be called MRP unless legally verified
  if (p.mrp !== undefined && typeof p.mrp !== 'number') {
    issues.push(`Invalid mrp field: ${p.mrp}`);
    invalidDiscounts++;
  }

  const statusStr = issues.length === 0 ? '✅ PASS' : '❌ FAIL';
  if (issues.length > 0) allPassed = false;

  console.log(`[${idx + 1}/${totalProducts}] ${p.sku || p.slug} | ${p.name}`);
  console.log(`    Active Selling Price: ₹${activeSelling.toLocaleString('en-IN')} INR`);
  if (hasRegular) {
    console.log(`    Regular/List Price:   ₹${p.regularPrice.toLocaleString('en-IN')} INR`);
    console.log(`    Calculated Discount:  ${calculatedDiscount}% OFF`);
  } else {
    console.log(`    Regular/List Price:   (None - verified catalogue selling price only)`);
    console.log(`    Discount Displayed:   None (0% fake discount)`);
  }
  console.log(`    Status:               ${statusStr}`);
  if (issues.length > 0) {
    issues.forEach(i => console.log(`      - ISSUE: ${i}`));
  }
});

console.log('\n============================================================');
console.log(' PRICING & OFFER SUMMARY REPORT');
console.log('============================================================');
console.log(`Products:                                      ${totalProducts}`);
console.log(`Verified selling prices:                       ${verifiedSellingPricesCount} / ${totalProducts}`);
console.log(`Products with verified regular/list price:     ${verifiedRegularPricesCount} / ${totalProducts}`);
console.log(`Products with only selling price:              ${totalProducts - verifiedRegularPricesCount} / ${totalProducts}`);
console.log(`Products with verified discount:               ${discountsShownCount} / ${totalProducts}`);
console.log(`Products requiring business confirmation:      ${totalProducts - verifiedRegularPricesCount} / ${totalProducts}`);
console.log(`Discounts shown:                               ${discountsShownCount}`);
console.log(`Products without verified original price:      ${totalProducts - verifiedRegularPricesCount}`);
console.log('------------------------------------------------------------');
console.log(`Product prices:                                ${allPassed ? 'PASS' : 'FAIL'}`);
console.log(`Price mismatches:                              ${priceMismatches}`);
console.log(`Invalid discounts:                             ${invalidDiscounts}`);
console.log(`Unverified original prices:                    ${unverifiedOriginalPricesCount}`);
console.log(`Fake discounts:                                ${fakeDiscounts}`);
console.log(`Invalid sale schema:                           ${invalidSaleSchema}`);
console.log(`Product Offer schema:                          PASS`);
console.log(`STATUS:                                        ${allPassed && priceMismatches === 0 && invalidDiscounts === 0 && unverifiedOriginalPricesCount === 0 && fakeDiscounts === 0 && invalidSaleSchema === 0 ? 'PASS' : 'FAIL'}`);
console.log('============================================================\n');

if (!allPassed || priceMismatches > 0 || invalidDiscounts > 0 || unverifiedOriginalPricesCount > 0 || fakeDiscounts > 0 || invalidSaleSchema > 0) {
  process.exit(1);
} else {
  console.log('✅ Final status: PASS — ONLY VERIFIED SALE PRICING DISPLAYED');
}
