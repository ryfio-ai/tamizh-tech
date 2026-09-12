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

const policiesPath = path.resolve(process.cwd(), 'src/data/productPolicies.ts');
const { productPolicies } = loadTs(policiesPath);

const productsPath = path.resolve(process.cwd(), 'src/data/products.ts');
const { products } = loadTs(productsPath);

console.log('============================================================');
console.log(' PRODUCT POLICIES AUDIT — SHIPPING, PAYMENT & RETURNS       ');
console.log(' Tamizh Tech Robotics Company (https://www.tamizhtech.in)   ');
console.log('============================================================\n');

let productsChecked = 0;
let shippingPolicyCount = 0;
let freeDeliveryClaims = 0;
let codAvailableClaims = 0;
let customerMistakeReturnClaims = 0;
let fakeShippingValues = 0;
let fakeReturnPeriods = 0;
let policySchemaConflicts = 0;

// Verify central policy configuration
if (!productPolicies.shipping.customerPays || productPolicies.shipping.freeDelivery !== false) {
  console.error('❌ Shipping policy configuration mismatch in productPolicies.ts');
  process.exit(1);
}

if (productPolicies.payment.codAvailable !== false) {
  console.error('❌ Payment policy configuration mismatch (COD must be false)');
  process.exit(1);
}

if (
  productPolicies.returns.customerMistakeReturn !== false ||
  !productPolicies.returns.wrongProductByCompany ||
  !productPolicies.returns.verifiedDefect ||
  !productPolicies.returns.deliveryDamage ||
  !productPolicies.returns.verificationRequired
) {
  console.error('❌ Return policy configuration mismatch in productPolicies.ts');
  process.exit(1);
}

// Check all 13 products
products.forEach((p, idx) => {
  productsChecked++;
  shippingPolicyCount++;

  // Check product description / text for illegal claims
  const fullText = `${p.description || ''} ${p.shortDescription || ''} ${p.specs || ''} ${p.pricingNote || ''}`.toLowerCase();

  if (fullText.includes('free shipping') || fullText.includes('free delivery') || fullText.includes('complimentary delivery')) {
    freeDeliveryClaims++;
  }

  if (fullText.includes('cod available') || fullText.includes('cash on delivery available') || fullText.includes('pay on delivery')) {
    codAvailableClaims++;
  }

  if (fullText.includes('30-day return') || fullText.includes('15-day return') || fullText.includes('7-day return') || fullText.includes('money back guarantee')) {
    fakeReturnPeriods++;
  }

  if (fullText.includes('no questions asked return') || fullText.includes('return for any reason')) {
    customerMistakeReturnClaims++;
  }

  // Schema / Factual check
  if (p.shippingDetails || p.shippingRate) {
    fakeShippingValues++;
  }

  if (p.hasMerchantReturnPolicy || p.merchantReturnDays) {
    fakeReturnPeriods++;
  }

  if (p.price === 0) {
    policySchemaConflicts++;
  }
});

console.log(`Products checked:                ${productsChecked}`);
console.log(`Shipping policy:                 ${shippingPolicyCount}/${productsChecked}`);
console.log(`Free delivery claims:            ${freeDeliveryClaims}`);
console.log(`COD available claims:            ${codAvailableClaims}`);
console.log(`Customer-mistake return claims:  ${customerMistakeReturnClaims}`);
console.log(`Fake shipping values:            ${fakeShippingValues}`);
console.log(`Fake return periods:             ${fakeReturnPeriods}`);
console.log(`Policy/schema conflicts:         ${policySchemaConflicts}`);

const isPass = 
  productsChecked === 13 &&
  shippingPolicyCount === 13 &&
  freeDeliveryClaims === 0 &&
  codAvailableClaims === 0 &&
  customerMistakeReturnClaims === 0 &&
  fakeShippingValues === 0 &&
  fakeReturnPeriods === 0 &&
  policySchemaConflicts === 0;

if (isPass) {
  console.log('\nSTATUS: PASS');
  process.exit(0);
} else {
  console.error('\nSTATUS: FAIL');
  process.exit(1);
}
