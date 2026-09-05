import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { courses } from '@/data/courses';
import { blogPosts, getBlogCategorySlug } from '@/data/blogPosts';
import { projects } from '@/data/projects';
import { projectCategories } from '@/data/projectCategories';
import { events } from '@/data/events';
import { careers } from '@/data/careers';
import { newsletters } from '@/data/newsletters';
import { categories } from '@/data/categories';
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
  getEventCategoryUrl,
  getCareerUrl,
  getCareerCategoryUrl,
  getNewsletterUrl,
  getNewsletterCategoryUrl
} from '@/lib/routing';

const SITE_URL = 'https://www.tamizhtech.in';
const STABLE_DEFAULT_DATE = new Date('2026-03-01T00:00:00.000Z');

interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [];
  const seenUrls = new Set<string>();

  const addEntry = (path: string, lastModified?: string | Date, priority?: number, changeFrequency?: SitemapEntry['changeFrequency']) => {
    const cleanPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
    const fullUrl = `${SITE_URL}${cleanPath}`;
    if (seenUrls.has(fullUrl)) return;
    seenUrls.add(fullUrl);

    entries.push({
      url: fullUrl,
      lastModified: lastModified ? new Date(lastModified) : STABLE_DEFAULT_DATE,
      changeFrequency: changeFrequency || 'weekly',
      priority: priority !== undefined ? priority : 0.7,
    });
  };

  // 1. Core Static Authority Pages
  addEntry('/', '2026-03-01T00:00:00.000Z', 1.0, 'weekly');
  addEntry('/about', '2026-03-01T00:00:00.000Z', 0.8, 'monthly');
  addEntry('/about-tamizh-tech', '2026-03-01T00:00:00.000Z', 0.8, 'monthly');
  addEntry('/founder', '2026-03-01T00:00:00.000Z', 0.8, 'monthly');
  addEntry('/services', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/services/3d-printing', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/services/laser-cutting', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/services/pcb-design-fabrication-assembly', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/services/robotics-automation', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/services/industrial-automation', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/solutions', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/solutions/schools', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/solutions/colleges', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/solutions/industries', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/solutions/students-makers', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/solutions/startups', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/case-studies', '2026-03-01T00:00:00.000Z', 0.8, 'monthly');
  addEntry('/clients', '2026-03-01T00:00:00.000Z', 0.8, 'monthly');
  addEntry('/careers', '2026-03-01T00:00:00.000Z', 0.7, 'monthly');
  addEntry('/internship', '2026-03-01T00:00:00.000Z', 0.8, 'weekly');
  addEntry('/robotics-club', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/robotics-club/join', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/gallery', '2026-03-01T00:00:00.000Z', 0.8, 'weekly');
  addEntry('/festfind', '2026-03-01T00:00:00.000Z', 0.8, 'weekly');
  addEntry('/contact', '2026-03-01T00:00:00.000Z', 0.9, 'monthly');
  addEntry('/privacy', '2026-01-01T00:00:00.000Z', 0.3, 'yearly');
  addEntry('/terms', '2026-01-01T00:00:00.000Z', 0.3, 'yearly');
  addEntry('/cookies', '2026-01-01T00:00:00.000Z', 0.3, 'yearly');

  // 2. High-Intent Local & National SEO/GEO Landing Pages
  addEntry('/robotics-company-in-coimbatore', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/stem-education-india', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/robotics-products-india', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/industrial-automation-coimbatore', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');

  // 3. Content Type Hub Pages
  addEntry('/products', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/courses', '2026-03-01T00:00:00.000Z', 0.9, 'weekly');
  addEntry('/blog', '2026-03-01T00:00:00.000Z', 0.8, 'weekly');
  addEntry('/projects', '2026-03-01T00:00:00.000Z', 0.8, 'monthly');
  addEntry('/events', '2026-03-01T00:00:00.000Z', 0.8, 'weekly');

  // 4. Real Category Pages (Derived directly from centralized category taxonomy)
  for (const cat of categories) {
    if (!cat.published) continue;
    let catUrl = '';
    switch (cat.contentType) {
      case 'products':
        catUrl = getProductCategoryUrl(cat.slug);
        break;
      case 'courses':
        catUrl = getCourseCategoryUrl(cat.slug);
        break;
      case 'blog':
        catUrl = getBlogCategoryUrl(cat.slug);
        break;
      case 'projects':
        catUrl = getProjectCategoryUrl(cat.slug);
        break;
      case 'events':
        catUrl = getEventCategoryUrl(cat.slug);
        break;
    }
    if (catUrl) {
      addEntry(catUrl, cat.updatedAt, 0.8, 'weekly');
    }
  }

  // 4b. 10 Project Categories
  for (const pcat of projectCategories) {
    addEntry(getProjectCategoryUrl(pcat.slug), '2026-03-01T00:00:00.000Z', 0.8, 'weekly');
  }

  // 5. Dynamic Products (from verified products data)
  for (const p of products) {
    if (!p.published) continue;
    addEntry(getProductUrl(p.categorySlug, p.slug), p.updatedAt || p.createdAt, 0.9, 'weekly');
  }

  // 6. Dynamic Courses (from verified courses data)
  for (const c of courses) {
    if (!c.published) continue;
    addEntry(getCourseUrl(c.categorySlug, c.slug), c.updatedAt || c.createdAt, 0.8, 'weekly');
  }

  // 7. Dynamic Blog Posts (from verified blog data)
  for (const b of blogPosts) {
    if (b.published === false) continue;
    const catSlug = b.categorySlug || getBlogCategorySlug(b.category);
    addEntry(getBlogUrl(catSlug, b.slug), b.updatedAt || b.date, 0.8, 'monthly');
  }

  // 8. Dynamic Projects (from verified projects data)
  for (const pr of projects) {
    if (!pr.published) continue;
    addEntry(getProjectUrl(pr.categorySlug, pr.slug), pr.updatedAt || pr.createdAt, 0.8, 'monthly');
  }

  // 9. Dynamic Events (from verified events data)
  for (const ev of events) {
    if (!ev.published) continue;
    addEntry(getEventUrl(ev.categorySlug, ev.slug), ev.updatedAt || ev.createdAt, 0.8, 'weekly');
  }

  return entries;
}
