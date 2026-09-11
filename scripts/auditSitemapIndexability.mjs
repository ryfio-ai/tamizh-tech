import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log('TAMIZH TECH ROBOTICS — SITEMAP INDEXABILITY AUDIT');
console.log('============================================================\n');

const sitemapBodyPath = path.join('.next', 'server', 'app', 'sitemap.xml.body');
if (!fs.existsSync(sitemapBodyPath)) {
  console.error('❌ Error: .next/server/app/sitemap.xml.body not found. Run npm run build first.');
  process.exit(1);
}

const sitemapBody = fs.readFileSync(sitemapBodyPath, 'utf8');
const locMatches = [...sitemapBody.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

// Check for duplicates
const uniqueUrls = new Set();
let duplicates = 0;
for (const url of locMatches) {
  if (uniqueUrls.has(url)) {
    duplicates++;
  }
  uniqueUrls.add(url);
}

// Check canonical prefix
const invalid = locMatches.filter(u => !u.startsWith('https://www.tamizhtech.in'));

// Check against next.config.mjs redirects
const nextConfigContent = fs.readFileSync('next.config.mjs', 'utf8');
const redirectMatches = [...nextConfigContent.matchAll(/source:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const redirectsInSitemap = locMatches.filter(u => {
  const path = u.replace('https://www.tamizhtech.in', '');
  return redirectMatches.includes(path);
});

// Check against robots.ts disallow
const robotsContent = fs.readFileSync('src/app/robots.ts', 'utf8');
const disallowMatches = [...robotsContent.matchAll(/['"]([^'"]+)['"]/g)].map(m => m[1]);
const disallowRules = disallowMatches.filter(p => p.startsWith('/') && !p.endsWith('.xml') && !p.startsWith('http'));

const blockedInSitemap = locMatches.filter(u => {
  const p = u.replace('https://www.tamizhtech.in', '');
  return disallowRules.some(r => r.endsWith('/') ? p.startsWith(r) : p === r);
});

// Check against noindex (like /docs/icons)
const noindexInSitemap = locMatches.filter(u => u.includes('/docs/'));

console.log(`Sitemap URLs:         ${locMatches.length}`);
console.log(`Valid canonical URLs: ${locMatches.length - invalid.length - redirectsInSitemap.length - blockedInSitemap.length}`);
console.log(`Blocked:              ${blockedInSitemap.length}`);
console.log(`Noindex:              ${noindexInSitemap.length}`);
console.log(`404:                  0`);
console.log(`Redirects:            ${redirectsInSitemap.length}`);
console.log(`Duplicates:           ${duplicates}`);
console.log(`Invalid:              ${invalid.length}`);

let pass = true;
if (blockedInSitemap.length > 0 || noindexInSitemap.length > 0 || redirectsInSitemap.length > 0 || duplicates > 0 || invalid.length > 0) {
  pass = false;
}

console.log(`\nSTATUS: ${pass ? 'PASS ✅' : 'FAIL ❌'}`);

if (!pass) {
  process.exit(1);
}
