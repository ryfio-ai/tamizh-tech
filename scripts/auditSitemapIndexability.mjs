#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log(' SITEMAP & ROBOTS INDEXABILITY AUDIT                        ');
console.log(' Tamizh Tech Robotics Company (https://www.tamizhtech.in)   ');
console.log('============================================================\n');

const sitemapPath = path.resolve(process.cwd(), 'src/app/sitemap.ts');
const robotsPath = path.resolve(process.cwd(), 'src/app/robots.ts');

let allPassed = true;

if (!fs.existsSync(sitemapPath)) {
  console.error('❌ src/app/sitemap.ts missing');
  allPassed = false;
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  // Check for unwanted technical file exposure
  const hasDocUrls = /['"]\/.*?\.(pdf|step|cad|dwg|dxf|zip)['"]/i.test(sitemapContent);
  if (hasDocUrls) {
    console.error('❌ Proprietary document files detected in sitemap!');
    allPassed = false;
  } else {
    console.log('✅ Sitemap contains no proprietary file links');
  }

  if (sitemapContent.includes('products') && sitemapContent.includes('getProductUrl')) {
    console.log('✅ Dynamic products correctly mapped in sitemap');
  } else {
    console.error('❌ Products missing from sitemap mapping');
    allPassed = false;
  }
}

if (!fs.existsSync(robotsPath)) {
  console.error('❌ src/app/robots.ts missing');
  allPassed = false;
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (robotsContent.includes('sitemap.xml') && robotsContent.includes('allow: \'/\'')) {
    console.log('✅ Robots.txt allows search crawlers and points to sitemap.xml');
  } else {
    console.error('❌ Robots.txt missing standard directives');
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\nSTATUS: PASS — SITEMAP & INDEXABILITY VALIDATED');
  process.exit(0);
} else {
  console.error('\nSTATUS: FAIL');
  process.exit(1);
}
