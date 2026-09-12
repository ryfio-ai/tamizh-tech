#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log(' AUDIT ROBOTICS DOMAIN SEO LANDING PAGES                    ');
console.log('============================================================\n');

const geoLandingPages = [
  'src/app/robotics-company-in-coimbatore/page.tsx',
  'src/app/robotics-products-india/page.tsx',
  'src/app/stem-education-india/page.tsx',
  'src/app/industrial-automation-coimbatore/page.tsx'
];

let allPassed = true;

geoLandingPages.forEach(p => {
  const filePath = path.resolve(process.cwd(), p);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Page file missing: ${p}`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const hasMeta = content.includes('metadata') || content.includes('title');
  const hasHeading = content.includes('<h1') || content.includes('heading') || content.includes('title');

  console.log(`Checking ${p}...`);
  console.log(`  - Metadata: ${hasMeta ? '✅ Present' : '❌ Missing'}`);
  console.log(`  - Heading:  ${hasHeading ? '✅ Present' : '❌ Missing'}`);

  if (!hasMeta || !hasHeading) allPassed = false;
});

if (allPassed) {
  console.log('\n✅ All Robotics Domain SEO landing pages verified!');
  process.exit(0);
} else {
  console.error('\n❌ Robotics SEO landing page audit failed.');
  process.exit(1);
}
