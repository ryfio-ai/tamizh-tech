import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/auth/',
          '/account/',
          '/login/',
          '/register/',
          '/cart/',
          '/checkout/',
          '/docs/',
          '/search',
        ],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot'],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/auth/',
          '/account/',
          '/login/',
          '/register/',
          '/cart/',
          '/checkout/',
          '/docs/',
          '/search',
        ],
      },
    ],
    sitemap: 'https://www.tamizhtech.in/sitemap.xml',
    host: 'https://www.tamizhtech.in',
  };
}
