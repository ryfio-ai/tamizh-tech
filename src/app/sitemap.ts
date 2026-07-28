import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.tamizhtech.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: '/', priority: 1, changeFreq: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { url: '/about-tamizh-tech', priority: 0.7, changeFreq: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFreq: 'weekly' as const },
    { url: '/products', priority: 0.9, changeFreq: 'weekly' as const },
    { url: '/products/rc-robo-race', priority: 0.8, changeFreq: 'monthly' as const },
    { url: '/products/rc-robo-soccer', priority: 0.8, changeFreq: 'monthly' as const },
    { url: '/robotics-club', priority: 0.8, changeFreq: 'weekly' as const },
    { url: '/courses', priority: 0.8, changeFreq: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFreq: 'monthly' as const },
    { url: '/founder', priority: 0.6, changeFreq: 'yearly' as const },
    { url: '/gallery', priority: 0.7, changeFreq: 'weekly' as const },
    { url: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.url === '/' ? '' : r.url}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
    alternates: {
      languages: {
        'en-IN': `${SITE_URL}${r.url === '/' ? '' : r.url}`,
        'en-US': `${SITE_URL}/en-us${r.url === '/' ? '' : r.url}`,
        'ta-IN': `${SITE_URL}/ta${r.url === '/' ? '' : r.url}`,
        'x-default': `${SITE_URL}${r.url === '/' ? '' : r.url}`,
      },
    },
  }));
}
