import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/auth/',
          '/docs/',
          '/*?*category=*',
          '/search?*'
        ],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.tamizhtech.in/sitemap.xml',
    host: 'https://www.tamizhtech.in',
  };
}
