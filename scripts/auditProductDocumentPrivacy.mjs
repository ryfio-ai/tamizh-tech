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

console.log('============================================================');
console.log(' PRODUCT TECHNICAL DOCUMENT PRIVACY AUDIT                   ');
console.log(' Tamizh Tech Robotics Company (https://www.tamizhtech.in)   ');
console.log('============================================================\n');

const productsPath = path.resolve(process.cwd(), 'src/data/products.ts');
const { products } = loadTs(productsPath);

let publicDatasheetLinks = 0;
let publicSchematicLinks = 0;
let publicCadLinks = 0;
let publicEngineeringDrawingLinks = 0;
let unapprovedTechnicalDownloads = 0;
let privateTechnicalFilesInPublicAssets = 0;

// 1. Audit Products Data
products.forEach((p) => {
  if (p.downloads && p.downloads.length > 0) {
    p.downloads.forEach(d => {
      unapprovedTechnicalDownloads++;
      const text = `${d.label} ${d.href}`.toLowerCase();
      if (text.includes('datasheet')) publicDatasheetLinks++;
      if (text.includes('schematic')) publicSchematicLinks++;
      if (text.includes('cad')) publicCadLinks++;
    });
  }

  if (p.documents && p.documents.length > 0) {
    p.documents.forEach(d => {
      unapprovedTechnicalDownloads++;
      const text = `${d.label} ${d.href}`.toLowerCase();
      if (text.includes('datasheet')) publicDatasheetLinks++;
      if (text.includes('schematic')) publicSchematicLinks++;
      if (text.includes('cad')) publicCadLinks++;
    });
  }

  const desc = `${p.description || ''} ${p.shortDescription || ''}`.toLowerCase();
  if (desc.includes('download datasheet') || desc.includes('view datasheet')) publicDatasheetLinks++;
  if (desc.includes('download schematic') || desc.includes('view schematic')) publicSchematicLinks++;
  if (desc.includes('download cad') || desc.includes('cad download')) publicCadLinks++;
  if (desc.includes('download engineering drawing')) publicEngineeringDrawingLinks++;
});

// 2. Audit UI Component Files
const productUiPath = path.resolve(process.cwd(), 'src/app/products/[category]/[slug]/ProductDetailClient.tsx');
if (fs.existsSync(productUiPath)) {
  const uiContent = fs.readFileSync(productUiPath, 'utf8');
  if (uiContent.includes('Downloads & Schematics') || uiContent.includes('Download Datasheet')) {
    unapprovedTechnicalDownloads++;
  }
}

// 3. Audit public/ directory for proprietary files
const publicDir = path.resolve(process.cwd(), 'public');
function scanPublicDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanPublicDir(full);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.pdf', '.step', '.stp', '.stl', '.dwg', '.dxf', '.gerber', '.cad', '.zip', '.rar'].includes(ext)) {
        privateTechnicalFilesInPublicAssets++;
      }
    }
  }
}
scanPublicDir(publicDir);

console.log(`Products audited:                          ${products.length}`);
console.log(`Public Datasheet Links:                    ${publicDatasheetLinks}`);
console.log(`Public Schematic Links:                    ${publicSchematicLinks}`);
console.log(`Public CAD Links:                          ${publicCadLinks}`);
console.log(`Public Engineering Drawing Links:          ${publicEngineeringDrawingLinks}`);
console.log(`Unapproved Technical Downloads:            ${unapprovedTechnicalDownloads}`);
console.log(`Private Technical Files in Public Assets:  ${privateTechnicalFilesInPublicAssets}`);

const isPass = 
  publicDatasheetLinks === 0 &&
  publicSchematicLinks === 0 &&
  publicCadLinks === 0 &&
  publicEngineeringDrawingLinks === 0 &&
  unapprovedTechnicalDownloads === 0 &&
  privateTechnicalFilesInPublicAssets === 0;

if (isPass) {
  console.log('\nSTATUS: PASS — TECHNICAL DOCUMENTS NOT PUBLICLY EXPOSED');
  process.exit(0);
} else {
  console.error('\nSTATUS: FAIL');
  process.exit(1);
}
