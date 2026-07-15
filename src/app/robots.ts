import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow major AI crawlers for GEO
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'cohere-ai',      allow: '/' },
      { userAgent: 'Applebot',       allow: '/' },
    ],
    sitemap: 'https://www.tamizhtech.in/sitemap.xml',
  }
}
