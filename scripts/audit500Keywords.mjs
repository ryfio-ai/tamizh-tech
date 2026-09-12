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
  fn(m, m.exports, () => ({}));
  return m.exports;
}

const masterPath = path.resolve(process.cwd(), 'src/data/seoKeywordMaster.ts');
const { seoKeywordMaster } = loadTs(masterPath);

console.log('============================================================');
console.log(' AUDIT 500+ KEYWORD INTELLIGENCE MASTER                     ');
console.log('============================================================\n');

console.log(`Auditing ${seoKeywordMaster.length} master keywords...\n`);

let allPassed = true;
let validCount = 0;
const seenKeywords = new Set();
let duplicates = 0;

seoKeywordMaster.forEach((entry, idx) => {
  if (!entry.keyword || !entry.primaryUrl || !entry.intent || !entry.keywordType) {
    console.error(`❌ Record #${idx + 1} has invalid fields:`, entry);
    allPassed = false;
  } else {
    validCount++;
  }

  const normalized = entry.keyword.toLowerCase().trim();
  if (seenKeywords.has(normalized)) {
    duplicates++;
  }
  seenKeywords.add(normalized);
});

console.log(`Total Records:    ${seoKeywordMaster.length}`);
console.log(`Valid Records:    ${validCount}`);
console.log(`Unique Keywords:  ${seenKeywords.size}`);
console.log(`Duplicates:       ${duplicates}`);

if (allPassed && validCount >= 500) {
  console.log(`\n✅ 500+ Keyword Intelligence Master audit passed with ${validCount} valid entries!`);
  process.exit(0);
} else {
  console.error('\n❌ 500+ Keyword audit failed.');
  process.exit(1);
}
