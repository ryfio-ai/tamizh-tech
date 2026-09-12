#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log(' AUDIT ENQUIRY CTAs — PRODUCT & SERVICE LEAD CHANNELS      ');
console.log('============================================================\n');

const filesToCheck = [
  'src/app/products/[category]/[slug]/ProductDetailClient.tsx',
  'src/components/products/ProductCard.tsx',
  'src/components/forms/QuoteModal.tsx'
];

let allPassed = true;

filesToCheck.forEach(file => {
  const filePath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File missing: ${file}`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  const hasEnquiryCta = content.includes('ENQUIRE') || content.includes('Enquire') || content.includes('QuoteModal');
  const hasWhatsApp = content.includes('WhatsApp') || content.includes('wa.me');

  console.log(`Checking ${file}...`);
  console.log(`  - Enquiry CTA: ${hasEnquiryCta ? '✅ Present' : '❌ Missing'}`);
  console.log(`  - Direct Chat: ${hasWhatsApp ? '✅ Present' : '❌ Missing'}`);

  if (!hasEnquiryCta) allPassed = false;
});

if (allPassed) {
  console.log('\n✅ All Enquiry CTAs verified active across product flows!');
  process.exit(0);
} else {
  console.error('\n❌ Enquiry CTA audit failed.');
  process.exit(1);
}
