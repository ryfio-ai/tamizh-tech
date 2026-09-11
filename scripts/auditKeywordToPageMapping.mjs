import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runKeywordToPageAudit() {
  console.log('='.repeat(65));
  console.log('TAMIZH TECH — KEYWORD-TO-PAGE & TAXONOMY VALIDATION AUDIT');
  console.log('='.repeat(65));

  const masterFilePath = path.join(rootDir, 'src', 'data', 'seoKeywordMaster.ts');
  const content = fs.readFileSync(masterFilePath, 'utf8');
  const match = content.match(/export const seoKeywordMaster: SEOKeywordRecord\[\] = (\[[\s\S]*?\]);\n\n\/\//);
  if (!match) {
    console.error('FAIL: Could not load seoKeywordMaster');
    process.exit(1);
  }
  const records = JSON.parse(match[1]);

  console.log(`Total Keyword Records Loaded: ${records.length}`);

  // 1. Gather all valid routes on the site
  const validRoutes = new Set([
    '/',
    '/products',
    '/products/competition',
    '/products/competition/ttrc-lf-5-0',
    '/products/competition/rc-robo-race',
    '/products/competition/rc-robo-soccer',
    '/products/radio-controllers',
    '/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
    '/products/radio-controllers/flysky-fs-i6-2.4g-6ch',
    '/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver',
    '/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver',
    '/products/educational-robotics',
    '/products/educational-robotics/boxing-bot',
    '/products/robotics-components',
    '/products/robotics-components/112mm-buggy-wheel',
    '/products/robotics-components/100mm-buggy-wheel',
    '/products/robotics-components/ttrc-hd-80mm-wheel',
    '/products/robotics-components/ttrc-dgj-300rpm',
    '/products/robotics-components/ttrc-dgj-600rpm',
    '/events',
    '/events/competition/robo-soccer',
    '/events/competition/robo-race',
    '/events/competition/line-follower',
    '/events/competition/robo-war',
    '/events/competition/robo-sumo',
    '/events/competition/drone-race',
    '/events/competition/maze-solver',
    '/events/competition/general-robotics',
    '/services',
    '/services/3d-printing',
    '/services/laser-cutting',
    '/services/pcb-design',
    '/services/robotics-automation',
    '/services/industrial-automation',
    '/services/embedded-iot',
    '/services/ai-vision',
    '/services/stem-lab-setup',
    '/services/engineering-rd',
    '/solutions/schools',
    '/solutions/colleges',
    '/solutions/industries',
    '/solutions/students-makers',
    '/solutions/startups',
    '/courses',
    '/learn/school-students',
    '/learn/engineering-students',
    '/learn/industrial-training',
    '/projects',
    '/about',
    '/contact'
  ]);

  let passed = true;
  let nonExistentUrls = [];
  let categoryVsProductMismatches = [];
  let eventVsProductMismatches = [];

  for (const item of records) {
    const kw = item.keyword.toLowerCase().trim();
    const url = item.primaryUrl;

    // A. URL Existence check
    if (!validRoutes.has(url)) {
      nonExistentUrls.push({ kw, url });
    }

    // B. Category vs Specific Product Intent Consistency
    // If query mentions a specific model, it should NOT map to generic /products or broad category
    if (kw.includes('ttrc lf') && url !== '/products/competition/ttrc-lf-5-0') {
      categoryVsProductMismatches.push({ kw, url, expected: '/products/competition/ttrc-lf-5-0' });
    }
    if (kw.includes('ttrc rr') && url !== '/products/competition/rc-robo-race') {
      categoryVsProductMismatches.push({ kw, url, expected: '/products/competition/rc-robo-race' });
    }
    if (kw.includes('ttrc rs') && url !== '/products/competition/rc-robo-soccer') {
      categoryVsProductMismatches.push({ kw, url, expected: '/products/competition/rc-robo-soccer' });
    }
    if (kw.includes('boxing bot') && url !== '/products/educational-robotics/boxing-bot') {
      categoryVsProductMismatches.push({ kw, url, expected: '/products/educational-robotics/boxing-bot' });
    }
    if (kw.includes('300rpm') && !url.includes('300rpm') && item.keywordType === 'product' && !kw.includes('difference')) {
      categoryVsProductMismatches.push({ kw, url, expected: '/products/robotics-components/ttrc-dgj-300rpm' });
    }
    if (kw.includes('600rpm') && !url.includes('600rpm') && item.keywordType === 'product' && !kw.includes('difference')) {
      categoryVsProductMismatches.push({ kw, url, expected: '/products/robotics-components/ttrc-dgj-600rpm' });
    }

    // C. Event Guide vs Product Intent Consistency
    // Event guides should own tournament rules/dimensions/matches
    if (kw.includes('rules') && url.startsWith('/products/')) {
      eventVsProductMismatches.push({ kw, url, issue: 'Rules intent mapped to product' });
    }
    if (kw.includes('arena dimensions') && url.startsWith('/products/')) {
      eventVsProductMismatches.push({ kw, url, issue: 'Arena dimensions intent mapped to product' });
    }
  }

  console.log('\n[1/3] Validating URL Existence Across Mapped Terms:');
  if (nonExistentUrls.length === 0) {
    console.log(`  ✅ 100% of mapped URLs (${records.length} records) exist on canonical routes.`);
  } else {
    console.error(`  ❌ Found ${nonExistentUrls.length} non-existent URLs:`);
    nonExistentUrls.slice(0, 5).forEach(e => console.error(`     - "${e.kw}" -> ${e.url}`));
    passed = false;
  }

  console.log('\n[2/3] Validating Category vs Product Intent Consistency:');
  if (categoryVsProductMismatches.length === 0) {
    console.log('  ✅ Specific product queries map strictly to individual product pages.');
  } else {
    console.error(`  ❌ Found ${categoryVsProductMismatches.length} category/product mismatches:`);
    categoryVsProductMismatches.slice(0, 5).forEach(e => console.error(`     - "${e.kw}" is at ${e.url}, expected ${e.expected}`));
    passed = false;
  }

  console.log('\n[3/3] Validating Event vs Product Intent Separation:');
  if (eventVsProductMismatches.length === 0) {
    console.log('  ✅ Informational competition rules cleanly separated from transactional products.');
  } else {
    console.error(`  ❌ Found ${eventVsProductMismatches.length} event/product mismatches:`);
    eventVsProductMismatches.slice(0, 5).forEach(e => console.error(`     - "${e.kw}" (${e.issue}) -> ${e.url}`));
    passed = false;
  }

  console.log('\n' + '='.repeat(65));
  if (passed) {
    console.log('STATUS: KEYWORD-TO-PAGE AUDIT PASS (100% INTENT CONSISTENCY)');
    process.exit(0);
  } else {
    console.log('STATUS: KEYWORD-TO-PAGE AUDIT FAIL');
    process.exit(1);
  }
}

runKeywordToPageAudit();
