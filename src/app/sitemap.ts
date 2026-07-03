import { MetadataRoute } from 'next'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tamizhtech.in'
  
  const staticPages = [
    '',
    '/about',
    '/products',
    '/schools',
    '/colleges',
    '/industries',
    '/founder',
    '/about-tamizh-tech',
    '/robotics-company-in-coimbatore',
    '/stem-education-india',
    '/robotics-products-india',
    '/industrial-automation-coimbatore',
    '/contact',
    '/gallery',
    '/careers',
    '/internship', // Training
    '/services',
    '/robotics-club',
    '/courses'
  ];

  const staticEntries = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8
  }));

  const productEntries = products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  return [...staticEntries, ...productEntries];
}
