import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('TAMIZH TECH — NO-MOCK PRODUCTION DATA AUDIT');
console.log('====================================================\n');

const SUSPICIOUS_PATTERNS = [
  /\bfakeReviews?\b/i,
  /\bmockReviews?\b/i,
  /\bsampleReviews?\b/i,
  /\bfakeCustomers?\b/i,
  /\bmockCustomers?\b/i,
  /\bsampleCustomers?\b/i,
  /\bfakeOrders?\b/i,
  /\bmockOrders?\b/i,
  /\bsampleOrders?\b/i,
  /\bfakeProducts?\b/i,
  /\bmockProducts?\b/i,
  /\bsampleProducts?\b/i,
  /\bdemoProducts?\b/i,
  /test@example\.com/i,
  /john\.doe@/i,
  /555-555-5555/,
  /Lorem ipsum dolor/i,
];

function scanFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name !== 'node_modules' &&
        entry.name !== '.next' &&
        entry.name !== '.git' &&
        entry.name !== 'tests' &&
        entry.name !== '__tests__' &&
        entry.name !== 'test'
      ) {
        scanFiles(fullPath, fileList);
      }
    } else if (/\.(tsx|ts|jsx|js|json)$/.test(entry.name)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = scanFiles('src');
let violationsCount = 0;
const violations = [];

for (const file of files) {
  // Allow test fixtures or icon documentation showcase
  if (file.includes('docs\\icons') || file.includes('docs/icons')) continue;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Skip comments that describe "no mock data" or testing rules
    if (line.includes('NO MOCK') || line.includes('no mock') || line.includes('No mock') || line.includes('DO NOT')) return;
    if (line.includes('0% fake discount') || line.includes('fake discount') || line.includes('fake merchant')) return;

    for (const pattern of SUSPICIOUS_PATTERNS) {
      if (pattern.test(line)) {
        violationsCount++;
        violations.push({
          file: path.relative(process.cwd(), file),
          line: idx + 1,
          matched: pattern.toString(),
          snippet: line.trim()
        });
      }
    }
  });
}

console.log(`Audited ${files.length} production source files across src/`);
if (violations.length === 0) {
  console.log('✅ ZERO production mock data detected across all source files!');
  console.log('====================================================');
  console.log('STATUS: PASS ✅');
  process.exit(0);
} else {
  console.log(`❌ Found ${violations.length} suspicious production mock references:`);
  violations.forEach(v => {
    console.log(`  [${v.file}:${v.line}] Match: ${v.matched}`);
    console.log(`    Snippet: ${v.snippet}`);
  });
  console.log('====================================================');
  console.log('STATUS: FAIL ❌');
  process.exit(1);
}
