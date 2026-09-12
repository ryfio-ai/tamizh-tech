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
console.log(' TAMIZH TECH - PRODUCT AEO (ANSWER ENGINE) AUDIT   ');
console.log('====================================================');
console.log(`Auditing ${products.length} products for AI & Search Snippet answers...\n`);

let allPassed = true;

products.forEach((p, idx) => {
  const issues = [];

  // AEO checks
  if (!p.quickAnswer || p.quickAnswer.length < 30) {
    issues.push(`quickAnswer missing or too short (${p.quickAnswer?.length || 0} chars)`);
  }

  if (!p.faqs || p.faqs.length === 0) {
    issues.push('No FAQs defined for conversational retrieval');
  } else {
    p.faqs.forEach((faq, fIdx) => {
      if (!faq.question || faq.question.trim().length === 0) {
        issues.push(`FAQ #${fIdx + 1} has empty question`);
      }
      if (!faq.answer || faq.answer.trim().length === 0) {
        issues.push(`FAQ #${fIdx + 1} has empty answer`);
      }
    });
  }

  if (!p.highlights || p.highlights.length === 0) {
    issues.push('No bulleted highlights for feature list extraction');
  }

  if (!p.specs || p.specs.trim().length === 0) {
    issues.push('No specifications summary for entity comparison');
  }

  const statusStr = issues.length === 0 ? '✅ PASS' : '❌ FAIL';
  if (issues.length > 0) allPassed = false;

  console.log(`[${idx + 1}/${products.length}] ${p.sku} | ${p.name}`);
  console.log(`    AEO Answer: "${p.quickAnswer?.slice(0, 75)}..."`);
  console.log(`    FAQ count:  ${p.faqs?.length || 0} | Highlights: ${p.highlights?.length || 0}`);
  console.log(`    Status:     ${statusStr}`);
  if (issues.length > 0) {
    issues.forEach(i => console.log(`      - ISSUE: ${i}`));
  }
});

if (!allPassed) {
  console.error('\n❌ Product AEO audit failed with errors.');
  process.exit(1);
} else {
  console.log(`\n✅ All ${products.length} products passed AEO (Answer Engine Optimization) audit!`);
}
