import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log('GOOGLE ADSENSE SITE VERIFICATION AUDIT');
console.log('Production domain: https://www.tamizhtech.in/');
console.log('============================================================\n');

const EXPECTED_PUB_ID = 'ca-pub-1776519071587782';
const EXPECTED_META_NAME = 'google-adsense-account';

// 1. Check Source Code (src/app/layout.tsx)
const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
if (!fs.existsSync(layoutPath)) {
  console.error('❌ Error: src/app/layout.tsx not found.');
  process.exit(1);
}

const layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Check that layout contains google-adsense-account and the publisher ID
const layoutHasAdSense = layoutContent.includes(EXPECTED_META_NAME);
const layoutHasPubId = layoutContent.includes(EXPECTED_PUB_ID);

if (!layoutHasAdSense || !layoutHasPubId) {
  console.error('❌ Error: AdSense configuration missing or incorrect in src/app/layout.tsx');
  process.exit(1);
}

// 2. Check Built HTML Output (.next/server/app/index.html)
const htmlPath = path.join(process.cwd(), '.next', 'server', 'app', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.log('⚠️ Notice: .next/server/app/index.html not found. Please run "npm run build" first to verify rendered HTML.');
  console.log('Source layout check: PASS');
  process.exit(0);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract head section
const headMatch = htmlContent.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

const headContent = headMatch ? headMatch[1] : '';
const bodyContent = bodyMatch ? bodyMatch[1] : '';

// Find all meta tags with name="google-adsense-account"
const allMetaRegex = /<meta\s+[^>]*name=["']google-adsense-account["'][^>]*>/gi;
const allMetaMatches = [...htmlContent.matchAll(allMetaRegex)];

const headMetaMatches = [...headContent.matchAll(allMetaRegex)];
const bodyMetaMatches = [...bodyContent.matchAll(allMetaRegex)];

// Check empty tags: content=""
const emptyMetaRegex = /<meta\s+[^>]*name=["']google-adsense-account["'][^>]*content=["']\s*["'][^>]*>/gi;
const emptyTags = [...htmlContent.matchAll(emptyMetaRegex)].length;

// Extract content attribute of the meta tag
const contentMatch = headContent.match(/<meta\s+[^>]*name=["']google-adsense-account["'][^>]*content=["']([^"']+)["'][^>]*>/i)
  || headContent.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*name=["']google-adsense-account["'][^>]*>/i);

const foundPubId = contentMatch ? contentMatch[1] : null;

// Duplicate count is extra tags beyond 1
const duplicateTags = Math.max(0, allMetaMatches.length - 1);

// Evaluations
const metaTagPass = allMetaMatches.length >= 1;
const publisherIdPass = foundPubId === EXPECTED_PUB_ID;
const headPlacementPass = headMetaMatches.length === 1 && bodyMetaMatches.length === 0;
const duplicateTagsPass = duplicateTags === 0;
const emptyTagPass = emptyTags === 0;

console.log(`AdSense meta tag: ${metaTagPass ? 'PASS' : 'FAIL'}`);
console.log(`Publisher ID: ${publisherIdPass ? 'PASS' : 'FAIL'} (${foundPubId || 'none'})`);
console.log(`Head placement: ${headPlacementPass ? 'PASS' : 'FAIL'}`);
console.log(`Duplicate tags: ${duplicateTags}`);
console.log(`Empty tag: ${emptyTags}`);

const allPass = metaTagPass && publisherIdPass && headPlacementPass && duplicateTagsPass && emptyTagPass;

console.log(`\nFINAL STATUS: ${allPass ? 'PASS' : 'FAIL'}`);

if (!allPass) {
  process.exit(1);
}
