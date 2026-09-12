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
console.log(' TAMIZH TECH - PUBLIC PRICING & OFFER AUDIT        ');
console.log('====================================================');
console.log(`Auditing verified prices for all ${products.length} products...\n`);

let allPassed = true;

products.forEach((p, idx) => {
  const issues = [];

  // Base price verification
  if (typeof p.price !== 'number' || isNaN(p.price) || p.price <= 0) {
    issues.push(`Invalid or non-positive base price: ${p.price}`);
  }

  // Configurations check
  if (p.configurations && p.configurations.length > 0) {
    p.configurations.forEach(cfg => {
      if (typeof cfg.price !== 'number' || isNaN(cfg.price) || cfg.price <= 0) {
        issues.push(`Configuration "${cfg.name}" has invalid price: ${cfg.price}`);
      }
    });

    const defaultConfig = p.configurations.find(c => c.isDefault) || p.configurations[0];
    if (defaultConfig && defaultConfig.price !== p.price) {
      issues.push(`Base price (₹${p.price}) does not match default configuration "${defaultConfig.name}" price (₹${defaultConfig.price})`);
    }
  }

  const statusStr = issues.length === 0 ? '✅ PASS' : '❌ FAIL';
  if (issues.length > 0) allPassed = false;

  console.log(`[${idx + 1}/${products.length}] ${p.sku} | ${p.name}`);
  console.log(`    Base Price:    ₹${p.price.toLocaleString('en-IN')} INR`);
  if (p.configurations && p.configurations.length > 0) {
    const configPrices = p.configurations.map(c => `${c.name}: ₹${c.price.toLocaleString('en-IN')}`).join(' | ');
    console.log(`    Configurations: ${configPrices}`);
  }
  console.log(`    Status:        ${statusStr}`);
  if (issues.length > 0) {
    issues.forEach(i => console.log(`      - ISSUE: ${i}`));
  }
});

if (!allPassed) {
  console.error('\n❌ Public pricing audit failed with errors.');
  process.exit(1);
} else {
  console.log(`\n✅ All ${products.length} products verified with transparent, factual public pricing!`);
}
