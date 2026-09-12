#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log(' OVERALL TAMIZH TECH SEO AUDIT                              ');
console.log('============================================================\n');

const criticalFiles = [
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/app/layout.tsx',
  'src/components/JsonLd.tsx',
  'src/data/products.ts',
  'src/data/courses.ts',
  'src/data/categories.ts'
];

let allPassed = true;

criticalFiles.forEach(file => {
  const filePath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Critical SEO file missing: ${file}`);
    allPassed = false;
  } else {
    console.log(`✅ Verified ${file}`);
  }
});

if (allPassed) {
  console.log('\n✅ Overall SEO audit passed successfully!');
  process.exit(0);
} else {
  console.error('\n❌ Overall SEO audit failed.');
  process.exit(1);
}
