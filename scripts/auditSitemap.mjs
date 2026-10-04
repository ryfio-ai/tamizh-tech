import * as mod from '../src/app/sitemap.ts';
const sitemapFn = mod.default?.default || mod.default || mod;
const entries = sitemapFn();
console.log('====================================================');
console.log('SITEMAP GENERATION AUDIT');
console.log('====================================================');
console.log(`Total URLs generated in sitemap: ${entries.length}`);

// Check uniqueness
const seen = new Set();
const duplicates = [];
for (const entry of entries) {
  if (seen.has(entry.url)) {
    duplicates.push(entry.url);
  }
  seen.add(entry.url);
}

if (duplicates.length > 0) {
  console.log(`❌ Found ${duplicates.length} duplicate URLs in sitemap:`, duplicates);
  process.exit(1);
} else {
  console.log('✅ 100% Unique URLs (0 duplicates)');
}

// Check protocol and domain
const invalidDomains = entries.filter(e => !e.url.startsWith('https://www.tamizhtech.in'));
if (invalidDomains.length > 0) {
  console.log(`❌ Invalid domains found:`, invalidDomains);
  process.exit(1);
} else {
  console.log('✅ 100% Canonical Domain (https://www.tamizhtech.in)');
}

// Check lastModified
const invalidDates = entries.filter(e => !(e.lastModified instanceof Date) || isNaN(e.lastModified.getTime()));
if (invalidDates.length > 0) {
  console.log(`❌ Invalid lastModified dates found:`, invalidDates);
  process.exit(1);
} else {
  console.log('✅ 100% Valid lastModified dates');
}

// Check that no private routes are in the sitemap
const privateRoutes = ['/admin', '/api', '/private', '/auth', '/cart', '/checkout', '/dashboard', '/docs', '/search'];
const leakedPrivate = entries.filter(e => privateRoutes.some(p => e.url.includes(p)));
if (leakedPrivate.length > 0) {
  console.log(`❌ Leaked private routes in sitemap:`, leakedPrivate);
  process.exit(1);
} else {
  console.log('✅ Zero private routes in sitemap');
}

console.log('====================================================');
console.log('✅ SITEMAP AUDIT COMPLETED WITH ZERO ERRORS');
console.log('====================================================');
