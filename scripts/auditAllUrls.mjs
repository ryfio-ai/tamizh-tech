import fs from 'fs';
import path from 'path';

// Load products, categories, courses, blogPosts, projects, events, competitionGuides
import { products } from '../src/data/products.ts';
import { categories } from '../src/data/categories.ts';
import { courses } from '../src/data/courses.ts';
import { blogPosts, getBlogCategorySlug } from '../src/data/blogPosts.ts';
import { projects } from '../src/data/projects.ts';
import { projectCategories } from '../src/data/projectCategories.ts';
import { events } from '../src/data/events.ts';
import { competitionGuides } from '../src/data/competitionGuides.ts';
import { 
  getProductUrl, 
  getProductCategoryUrl, 
  getCourseUrl, 
  getCourseCategoryUrl, 
  getBlogUrl, 
  getBlogCategoryUrl, 
  getProjectUrl, 
  getProjectCategoryUrl, 
  getEventUrl, 
  getEventCategoryUrl 
} from '../src/lib/routing.ts';

// 1. Build authoritative inventory of valid canonical routes
const validCanonicalRoutes = new Set([
  '/',
  '/about',
  '/team',
  '/services',
  '/services/3d-printing',
  '/services/laser-cutting',
  '/services/pcb-design-fabrication-assembly',
  '/services/robotics-automation',
  '/services/industrial-automation',
  '/solutions',
  '/solutions/schools',
  '/solutions/colleges',
  '/solutions/industries',
  '/solutions/students-makers',
  '/solutions/startups',
  '/case-studies',
  '/clients',
  '/careers',
  '/internship',
  '/robotics-club',
  '/robotics-club/join',
  '/gallery',
  '/festfind',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/robotics-company-in-coimbatore',
  '/stem-education-india',
  '/robotics-products-india',
  '/industrial-automation-coimbatore',
  '/products',
  '/courses',
  '/blog',
  '/projects',
  '/events',
  '/sitemap.xml',
]);

// Add category pages
for (const cat of categories) {
  if (!cat.published) continue;
  if (cat.contentType === 'products') validCanonicalRoutes.add(getProductCategoryUrl(cat.slug));
  if (cat.contentType === 'courses') validCanonicalRoutes.add(getCourseCategoryUrl(cat.slug));
  if (cat.contentType === 'blog') validCanonicalRoutes.add(getBlogCategoryUrl(cat.slug));
  if (cat.contentType === 'projects') validCanonicalRoutes.add(getProjectCategoryUrl(cat.slug));
  if (cat.contentType === 'events') validCanonicalRoutes.add(getEventCategoryUrl(cat.slug));
}

for (const pcat of projectCategories) {
  validCanonicalRoutes.add(getProjectCategoryUrl(pcat.slug));
}

// Add dynamic entities
for (const p of products) {
  if (p.published) validCanonicalRoutes.add(getProductUrl(p.categorySlug, p.slug));
}
for (const c of courses) {
  if (c.published) validCanonicalRoutes.add(getCourseUrl(c.categorySlug, c.slug));
}
for (const b of blogPosts) {
  if (b.published !== false) {
    const cat = b.categorySlug || getBlogCategorySlug(b.category);
    validCanonicalRoutes.add(getBlogUrl(cat, b.slug));
  }
}
for (const pr of projects) {
  if (pr.published) validCanonicalRoutes.add(getProjectUrl(pr.categorySlug, pr.slug));
}
for (const ev of events) {
  if (ev.published) validCanonicalRoutes.add(getEventUrl(ev.categorySlug, ev.slug));
}
for (const g of competitionGuides) {
  validCanonicalRoutes.add(getEventUrl(g.categorySlug, g.slug));
}

console.log(`====================================================`);
console.log(`TOTAL VALID CANONICAL ROUTES IN SYSTEM: ${validCanonicalRoutes.size}`);
console.log(`====================================================`);

// 2. Audit primaryUrls in seoKeywordMaster.ts
const seoMasterContent = fs.readFileSync('src/data/seoKeywordMaster.ts', 'utf8');
const kwUrls = [...seoMasterContent.matchAll(/"primaryUrl":\s*"([^"]+)"/g)].map(m => m[1]);
const uniqueKwUrls = [...new Set(kwUrls)];

const invalidKwUrls = uniqueKwUrls.filter(u => !validCanonicalRoutes.has(u));
console.log(`Unique URLs in seoKeywordMaster: ${uniqueKwUrls.length}`);
console.log(`Invalid / Non-Canonical URLs in seoKeywordMaster: ${invalidKwUrls.length}`);
if (invalidKwUrls.length > 0) {
  console.log('List of invalid URLs in seoKeywordMaster:');
  invalidKwUrls.forEach(u => console.log('  ❌', u));
}

// 3. Scan codebase for hardcoded hrefs to detect broken or non-canonical links
function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        scanDirectory(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allSourceFiles = scanDirectory('src');
const brokenInternalLinks = [];

for (const f of allSourceFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const hrefMatches = [...content.matchAll(/href=["'](\/[^"'#?]*)["']/g)].map(m => m[1]);
  for (const href of hrefMatches) {
    if (href.startsWith('/api') || href.startsWith('/_next') || href.startsWith('/#')) continue;
    // Strip trailing slash if any
    const normalized = href.length > 1 && href.endsWith('/') ? href.slice(0, -1) : href;
    if (!validCanonicalRoutes.has(normalized)) {
      brokenInternalLinks.push({ file: f, href });
    }
  }
}

console.log(`\nInternal Links Audited in src/: Total checked across ${allSourceFiles.length} files`);
console.log(`Non-Canonical or Broken Internal Links: ${brokenInternalLinks.length}`);
if (brokenInternalLinks.length > 0) {
  console.log('Sample of non-canonical internal links:');
  brokenInternalLinks.slice(0, 25).forEach(b => console.log(`  ❌ ${b.file}: ${b.href}`));
}
