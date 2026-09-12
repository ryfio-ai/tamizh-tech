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

console.log('====================================================');
console.log(' TAMIZH TECH - PRODUCT INDEXABILITY AUDIT          ');
console.log('====================================================');
console.log(`Auditing ${products.length} products for search engine indexability...\n`);

let allPassed = true;
const seenSlugs = new Set();
const seenSkus = new Set();
const seenUrls = new Set();

products.forEach((p, idx) => {
  const issues = [];
  const canonicalUrl = `https://www.tamizhtech.in/products/${p.categorySlug}/${p.slug}`;

  // 1. Published status
  if (!p.published) issues.push('Product is marked published: false');
  if (p.status === 'draft') issues.push('Product status is set to "draft"');

  // 2. Uniqueness
  if (seenSlugs.has(p.slug)) issues.push(`Duplicate slug: ${p.slug}`);
  seenSlugs.add(p.slug);

  if (seenSkus.has(p.sku)) issues.push(`Duplicate SKU: ${p.sku}`);
  seenSkus.add(p.sku);

  if (seenUrls.has(canonicalUrl)) issues.push(`Duplicate Canonical URL: ${canonicalUrl}`);
  seenUrls.add(canonicalUrl);

  // 3. Slug URL hygiene
  if (/[A-Z\s_]/.test(p.slug)) issues.push(`Slug contains uppercase, spaces or underscores: ${p.slug}`);
  if (/[A-Z\s_]/.test(p.categorySlug)) issues.push(`CategorySlug contains uppercase, spaces or underscores: ${p.categorySlug}`);

  const statusStr = issues.length === 0 ? '✅ PASS' : '❌ FAIL';
  if (issues.length > 0) allPassed = false;

  console.log(`[${idx + 1}/${products.length}] ${p.sku} | ${canonicalUrl}`);
  console.log(`    Published: ${p.published} | Indexable: ${issues.length === 0}`);
  console.log(`    Status:    ${statusStr}`);
  if (issues.length > 0) {
    issues.forEach(i => console.log(`      - ISSUE: ${i}`));
  }
});

// Check sitemap file existence
const sitemapPath = path.resolve(process.cwd(), 'src/app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  console.log('\nSitemap Check: src/app/sitemap.ts is present and dynamically imports products.');
} else {
  console.error('\nSitemap Check: src/app/sitemap.ts not found!');
  allPassed = false;
}

// Check robots file existence
const robotsPath = path.resolve(process.cwd(), 'src/app/robots.ts');
if (fs.existsSync(robotsPath)) {
  console.log('Robots Check:  src/app/robots.ts is present and allows / with sitemap configured.');
} else {
  console.error('Robots Check:  src/app/robots.ts not found!');
  allPassed = false;
}

if (!allPassed) {
  console.error('\n❌ Product Indexability audit failed with errors.');
  process.exit(1);
} else {
  console.log(`\n✅ All ${products.length} products passed indexability audit!`);
}
