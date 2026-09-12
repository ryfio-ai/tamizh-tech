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

const mapPath = path.resolve(process.cwd(), 'src/data/seoKeywordMap.ts');
const { seoKeywordMap } = loadTs(mapPath);

console.log('============================================================');
console.log(' AUDIT KEYWORD TO PAGE MAPPING                              ');
console.log('============================================================\n');

console.log(`Auditing ${seoKeywordMap.length} keyword-to-page mappings...\n`);

let allPassed = true;
let validCount = 0;

seoKeywordMap.forEach((entry, idx) => {
  if (!entry.keyword || !entry.page || !entry.intent) {
    console.error(`❌ Entry #${idx + 1} has invalid fields:`, entry);
    allPassed = false;
  } else {
    validCount++;
  }
});

console.log(`Verified ${validCount}/${seoKeywordMap.length} keyword mappings.`);

if (allPassed && validCount > 0) {
  console.log('\n✅ Keyword to Page Mapping audit passed!');
  process.exit(0);
} else {
  console.error('\n❌ Keyword to Page Mapping audit failed.');
  process.exit(1);
}
