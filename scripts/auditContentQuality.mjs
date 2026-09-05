import fs from 'fs';
import path from 'path';

console.log("============================================================");
console.log("TAMIZH TECH ROBOTICS — CONTENT QUALITY & INTEGRITY AUDIT");
console.log("============================================================\n");

const rootDir = process.cwd();
let issueCount = 0;

// 1. Audit Forbidden Mock/Placeholder Patterns
console.log("🔍 1. Scanning for Placeholder & Mock Strings across codebase...");
const bannedPatterns = [
  'Lorem ipsum',
  'lorem ipsum',
  'dolor sit amet',
  'placeholder.com',
  'example.com',
  'test client',
  'fake review',
  'only 2 left in stock',
  'verified buyer review',
  'Buy Now',
  'Add to Cart',
  'Pay Now',
  'Razorpay',
  'Stripe',
];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (['node_modules', '.next', '.git', 'scripts'].includes(file)) continue;
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath);
    } else if (/\.(tsx|ts|jsx|js|mjs)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const pattern of bannedPatterns) {
        if (content.toLowerCase().includes(pattern.toLowerCase())) {
          console.error(`  ❌ Banned pattern "${pattern}" found in ${path.relative(rootDir, fullPath)}`);
          issueCount++;
        }
      }
    }
  }
}

scanDirectory(path.join(rootDir, 'src'));
if (issueCount === 0) {
  console.log("  ✅ Zero mock data, zero placeholder text found across src/.");
}

// 2. Audit Commercial Service, B2B Solution & Product Files & Pages
console.log("\n🔍 2. Verifying Commercial Service, B2B Solution & Product Page Files...");
const requiredCommercialPages = [
  'src/app/services/3d-printing/page.tsx',
  'src/app/services/laser-cutting/page.tsx',
  'src/app/services/pcb-design-fabrication-assembly/page.tsx',
  'src/app/services/robotics-automation/page.tsx',
  'src/app/services/industrial-automation/page.tsx',
  'src/app/solutions/schools/page.tsx',
  'src/app/solutions/colleges/page.tsx',
  'src/app/solutions/industries/page.tsx',
  'src/app/solutions/students-makers/page.tsx',
  'src/app/solutions/startups/page.tsx',
  'src/app/products/page.tsx',
  'src/app/products/[category]/page.tsx',
  'src/app/products/[category]/[slug]/page.tsx',
  'src/components/products/ProductCard.tsx',
  'src/app/projects/page.tsx',
  'src/app/projects/ProjectsClient.tsx',
  'src/app/projects/[category]/page.tsx',
  'src/app/projects/[category]/ProjectCategoryClient.tsx',
  'src/app/projects/[category]/[slug]/page.tsx',
  'src/app/projects/[category]/[slug]/ProjectDetailClient.tsx',
  'src/components/projects/ProjectCard.tsx',
];

for (const p of requiredCommercialPages) {
  const full = path.join(rootDir, p);
  if (fs.existsSync(full)) {
    console.log(`  ✅ Page exists: ${p}`);
  } else {
    console.error(`  ❌ Missing page file: ${p}`);
    issueCount++;
  }
}

// 3. Audit Images
console.log("\n🔍 3. Verifying Verified Image Assets...");
const requiredImages = [
  'public/pic/3d printing.jpg',
  'public/pic/laser cutting.jpg',
  'public/pic/pcb design.jpg',
  'public/gallery/10.jpg',
  'public/gallery/16.jpeg',
  'public/gallery/17.jpeg',
  'public/gallery/18.jpeg',
  'public/gallery/21.jpeg',
  'public/projects/industrial-manufacturing.jpg',
  'public/projects/ev-smart-mobility.jpg',
  'public/projects/computer-vision-edge-ai.jpg',
  'public/projects/agri-tech.jpg',
  'public/projects/healthcare-assistive.jpg',
  'public/projects/logistics-retail.jpg',
  'public/projects/infrastructure-maintenance.jpg',
  'public/projects/security-emergency.jpg',
  'public/projects/commercial-automation.jpg',
  'public/projects/advanced-kinematics.jpg',
];

for (const img of requiredImages) {
  const full = path.join(rootDir, img);
  if (fs.existsSync(full)) {
    const stats = fs.statSync(full);
    console.log(`  ✅ Asset verified: ${img} (${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`  ❌ Missing image asset: ${img}`);
    issueCount++;
  }
}

// 4. Audit Sitemap for Commercial Services, Solutions, Products & Projects
console.log("\n🔍 4. Verifying Sitemap Inclusions...");
const sitemapContent = fs.readFileSync(path.join(rootDir, 'src/app/sitemap.ts'), 'utf8');
const sitemapRoutes = [
  '/services/3d-printing',
  '/services/laser-cutting',
  '/services/pcb-design-fabrication-assembly',
  '/services/robotics-automation',
  '/services/industrial-automation',
  '/solutions/schools',
  '/solutions/colleges',
  '/solutions/industries',
  '/solutions/students-makers',
  '/solutions/startups',
  '/products',
  '/projects',
];

for (const r of sitemapRoutes) {
  if (sitemapContent.includes(`'${r}'`)) {
    console.log(`  ✅ Canonical sitemap entry present: ${r}`);
  } else {
    console.error(`  ❌ Missing sitemap entry: ${r}`);
    issueCount++;
  }
}

console.log("\n============================================================");
if (issueCount === 0) {
  console.log("🎉 CONTENT QUALITY AUDIT: 100% PASSED (ZERO ISSUES)");
  console.log("============================================================\n");
  process.exit(0);
} else {
  console.error(`⚠️ CONTENT QUALITY AUDIT FAILED WITH ${issueCount} ISSUES.`);
  console.log("============================================================\n");
  process.exit(1);
}
