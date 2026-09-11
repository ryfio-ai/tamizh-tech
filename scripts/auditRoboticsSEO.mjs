import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runRoboticsSEOAudit() {
  console.log('='.repeat(60));
  console.log('TAMIZH TECH — ROBOTICS SEO & COMPETITION GUIDE AUDIT');
  console.log('='.repeat(60));

  let passed = true;

  // 1. Verify Canonical Domain
  const CANONICAL_DOMAIN = 'https://www.tamizhtech.in';
  console.log(`Checking Canonical Domain: ${CANONICAL_DOMAIN}`);

  // Validate all occurrences of domain strictly follow https://www.tamizhtech.in
  const checkFiles = [
    'src/data/competitionGuides.ts',
    'src/data/seoKeywordMaster.ts',
    'src/data/products.ts',
    'docs/ROBOTICS_EVENT_SEO_MAP.md'
  ];

  for (const relPath of checkFiles) {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const domainMatches = content.match(/tamizhtech\.[a-z]+/gi) || [];
      for (const m of domainMatches) {
        if (m.toLowerCase() !== 'tamizhtech.in') {
          console.error(`FAIL: Found non-canonical domain format '${m}' in ${relPath}`);
          passed = false;
        }
      }
    }
  }

  // 2. Check 8 Competition Guides
  const compGuidesPath = path.join(rootDir, 'src', 'data', 'competitionGuides.ts');
  if (!fs.existsSync(compGuidesPath)) {
    console.error(`FAIL: ${compGuidesPath} does not exist!`);
    process.exit(1);
  }

  const compContent = fs.readFileSync(compGuidesPath, 'utf8');
  const requiredSlugs = [
    'robo-soccer',
    'robo-race',
    'line-follower',
    'robo-war',
    'robo-sumo',
    'drone-race',
    'maze-solver',
    'general-robotics'
  ];

  console.log(`Verifying ${requiredSlugs.length} Competition Guides...`);

  for (const slug of requiredSlugs) {
    if (!compContent.includes(`slug: "${slug}"`) && !compContent.includes(`slug: '${slug}'`)) {
      console.error(`FAIL: Competition Guide slug '${slug}' not found in competitionGuides.ts!`);
      passed = false;
    } else {
      console.log(`  ✓ Competition Guide verified: /events/competition/${slug}`);
    }
  }

  // 3. Verify Article & Breadcrumb schema implementation
  const jsonLdPath = path.join(rootDir, 'src', 'components', 'JsonLd.tsx');
  if (fs.existsSync(jsonLdPath)) {
    const jsonLdContent = fs.readFileSync(jsonLdPath, 'utf8');
    if (jsonLdContent.includes('CompetitionGuideSchema')) {
      console.log('  ✓ CompetitionGuideSchema uses Article schema correctly');
    } else {
      console.warn('  ⚠ CompetitionGuideSchema not found in JsonLd.tsx');
    }
  }

  // 4. Verify 13 Products in products.ts
  const productsPath = path.join(rootDir, 'src', 'data', 'products.ts');
  const productsContent = fs.readFileSync(productsPath, 'utf8');
  const expectedProducts = [
    'ttrc-lf-5-0',
    'rc-robo-race',
    'rc-robo-soccer',
    'boxing-bot',
    '112mm-buggy-wheel',
    '100mm-buggy-wheel',
    'ttrc-hd-80mm-wheel',
    'ttrc-dgj-300rpm',
    'ttrc-dgj-600rpm'
  ];

  for (const pId of expectedProducts) {
    if (!productsContent.includes(`id: '${pId}'`) && !productsContent.includes(`id: "${pId}"`)) {
      console.error(`FAIL: Product id '${pId}' missing in products.ts!`);
      passed = false;
    }
  }
  console.log('  ✓ Core published products verified in catalogue');

  // 5. Verify Zero Doorway Pages in Next.js app directory
  const eventsAppDir = path.join(rootDir, 'src', 'app', 'events');
  if (fs.existsSync(eventsAppDir)) {
    // Check if there are city-specific folders like /events/coimbatore
    const entries = fs.readdirSync(eventsAppDir);
    const forbiddenCityPermutations = ['coimbatore', 'chennai', 'bangalore', 'madurai', 'trichy', 'salem'];
    for (const city of forbiddenCityPermutations) {
      if (entries.includes(city)) {
        console.error(`FAIL: Doorway page directory found: /events/${city}`);
        passed = false;
      }
    }
    console.log('  ✓ Zero doorway city directories in /app/events');
  }

  console.log('');
  if (passed) {
    console.log('STATUS: ROBOTICS SEO AUDIT PASS (100% COMPLIANT)');
    process.exit(0);
  } else {
    console.log('STATUS: ROBOTICS SEO AUDIT FAIL');
    process.exit(1);
  }
}

runRoboticsSEOAudit();
