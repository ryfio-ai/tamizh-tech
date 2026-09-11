import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runAudit() {
  console.log('='.repeat(50));
  console.log('TAMIZH TECH — SEO KEYWORD MASTER AUDIT');
  console.log('='.repeat(50));

  const masterFilePath = path.join(rootDir, 'src', 'data', 'seoKeywordMaster.ts');
  if (!fs.existsSync(masterFilePath)) {
    console.error('ERROR: src/data/seoKeywordMaster.ts does not exist!');
    process.exit(1);
  }

  // Load ts file content
  const content = fs.readFileSync(masterFilePath, 'utf8');

  // Extract seoKeywordMaster array using regex or evaluating
  const match = content.match(/export const seoKeywordMaster: SEOKeywordRecord\[\] = (\[[\s\S]*?\]);\n\n\/\//);
  if (!match) {
    console.error('ERROR: Could not parse seoKeywordMaster from TypeScript file!');
    process.exit(1);
  }

  const records = JSON.parse(match[1]);

  const totalRecords = records.length;
  const keywordMap = new Map();
  const duplicateKeywords = [];
  const invalidPriorities = [];
  const invalidIntents = [];
  const invalidAudiences = [];
  const invalidUrls = [];
  const unmappedKeywords = [];
  const clustersSet = new Set();
  const canonicalUrlsSet = new Set();
  let fabricatedMetricsCount = 0;

  const validPriorities = new Set(['P0', 'P1', 'P2', 'P3', 'P4']);
  const validIntents = new Set(['brand', 'navigational', 'informational', 'commercial', 'transactional', 'educational', 'local', 'competition']);
  const validAudiences = new Set(['students-colleges', 'schools-educators', 'b2b-industries', 'hobbyists-makers', 'general']);

  // Priority counts
  const priorityCounts = { P0: 0, P1: 0, P2: 0, P3: 0, P4: 0 };
  let aeoQuestionsCount = 0;
  let commercialCount = 0;
  let localCount = 0;

  for (const item of records) {
    const kw = item.keyword.trim().toLowerCase();
    
    // Check duplicates and cannibalization
    if (!keywordMap.has(kw)) {
      keywordMap.set(kw, new Set());
    } else {
      duplicateKeywords.push(kw);
    }
    keywordMap.get(kw).add(item.primaryUrl);

    // Check cluster
    if (item.cluster) {
      clustersSet.add(item.cluster);
    }

    // Check primaryUrl
    if (!item.primaryUrl || item.primaryUrl.trim() === '') {
      unmappedKeywords.push(kw);
    } else {
      canonicalUrlsSet.add(item.primaryUrl);
      if (!item.primaryUrl.startsWith('/')) {
        invalidUrls.push({ kw, url: item.primaryUrl });
      }
    }

    // Check priority
    if (!validPriorities.has(item.priority)) {
      invalidPriorities.push({ kw, priority: item.priority });
    } else {
      priorityCounts[item.priority]++;
    }

    // Check intent
    if (!validIntents.has(item.intent)) {
      invalidIntents.push({ kw, intent: item.intent });
    }

    // Check audience
    if (!validAudiences.has(item.audience)) {
      invalidAudiences.push({ kw, audience: item.audience });
    }

    // Counts
    if (item.keywordType === 'question' || item.aeoQuickAnswer) {
      aeoQuestionsCount++;
    }
    if (item.commercialIntent) {
      commercialCount++;
    }
    if (item.intent === 'local' || item.location === 'coimbatore' || item.location === 'tamil-nadu') {
      localCount++;
    }

    // Fabricated metrics check: ensures no fake search volume, KD, CPC fields are added to records
    if ('searchVolume' in item || 'keywordDifficulty' in item || 'cpc' in item || 'ranking' in item) {
      fabricatedMetricsCount++;
    }
  }

  // Cannibalization conflicts: where same keyword maps to more than 1 URL
  const cannibalizationConflicts = [];
  for (const [kw, urls] of keywordMap.entries()) {
    if (urls.size > 1) {
      cannibalizationConflicts.push({ kw, urls: Array.from(urls) });
    }
  }

  const uniqueKeywords = keywordMap.size;

  // Print Report exactly as requested
  console.log(`Total records:                 ${totalRecords}`);
  console.log(`Unique keywords:               ${uniqueKeywords}`);
  console.log(`Duplicate keywords:            ${duplicateKeywords.length}`);
  console.log(`Clusters:                      ${clustersSet.size}`);
  console.log(`Mapped canonical URLs:         ${canonicalUrlsSet.size}`);
  console.log(`Unmapped keywords:             ${unmappedKeywords.length}`);
  console.log(`Invalid priorities:            ${invalidPriorities.length}`);
  console.log(`Invalid intents:               ${invalidIntents.length}`);
  console.log(`Invalid audiences:             ${invalidAudiences.length}`);
  console.log(`Invalid URLs:                  ${invalidUrls.length}`);
  console.log(`Cannibalization conflicts:     ${cannibalizationConflicts.length}`);
  console.log(`Fabricated metrics:            ${fabricatedMetricsCount}`);
  console.log('');
  console.log(`P0 keywords:                   ${priorityCounts.P0}`);
  console.log(`P1 keywords:                   ${priorityCounts.P1}`);
  console.log(`P2 keywords:                   ${priorityCounts.P2}`);
  console.log(`P3 keywords:                   ${priorityCounts.P3}`);
  console.log(`P4 keywords:                   ${priorityCounts.P4}`);
  console.log('');
  console.log(`AEO questions:                 ${aeoQuestionsCount}`);
  console.log(`Commercial-intent keywords:    ${commercialCount}`);
  console.log(`Local-intent keywords:         ${localCount}`);
  console.log('');

  // Validations
  let pass = true;

  if (uniqueKeywords < 500) {
    console.error(`FAIL: Minimum 500 unique keywords required, got ${uniqueKeywords}`);
    pass = false;
  }
  if (duplicateKeywords.length > 0) {
    console.error(`FAIL: Duplicates found: ${duplicateKeywords.slice(0, 5).join(', ')}...`);
    pass = false;
  }
  if (cannibalizationConflicts.length > 0) {
    console.error(`FAIL: Cannibalization conflicts found:`, cannibalizationConflicts.slice(0, 3));
    pass = false;
  }
  if (unmappedKeywords.length > 0) {
    console.error(`FAIL: Unmapped keywords found: ${unmappedKeywords.slice(0, 5).join(', ')}`);
    pass = false;
  }
  if (invalidPriorities.length > 0 || invalidIntents.length > 0 || invalidAudiences.length > 0 || invalidUrls.length > 0) {
    console.error(`FAIL: Schema validation errors detected`);
    pass = false;
  }
  if (fabricatedMetricsCount > 0) {
    console.error(`FAIL: Fabricated metrics detected!`);
    pass = false;
  }

  if (pass) {
    console.log('STATUS: PASS');
    process.exit(0);
  } else {
    console.log('STATUS: FAIL');
    process.exit(1);
  }
}

runAudit();
