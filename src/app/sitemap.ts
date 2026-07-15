import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { courses } from '@/data/courses'
import { blogPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tamizhtech.in'
  
  const staticPages = [
    '',
    '/about',
    '/products',
    '/schools',
    '/colleges',
    '/founder',
    '/about-tamizh-tech',
    '/robotics-company-in-coimbatore',
    '/stem-education-india',
    '/robotics-products-india',
    '/industrial-automation-coimbatore',
    '/contact',
    '/gallery',
    '/careers',
    '/internship',
    '/services',
    '/robotics-club',
    '/robotics-club/join',
    '/courses',
    '/events',
    '/projects',
    '/blog',
    '/clients',
    '/case-studies',
    '/festfind',
  ];

  const staticEntries = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : page.startsWith('/blog') ? 0.9 : 0.8
  }));

  const productEntries = products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.75
  }));

  const courseEntries = courses.map(course => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const blogEntries = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85
  }));

  return [...staticEntries, ...productEntries, ...courseEntries, ...blogEntries];
}
