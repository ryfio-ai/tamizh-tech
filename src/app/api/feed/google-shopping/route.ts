import { NextResponse } from 'next/server';
import { products } from '@/data/products';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const publishedProducts = products.filter((p) => p.published && p.status !== 'draft');
  const DOMAIN = 'https://www.tamizhtech.in';

  const itemsXml = publishedProducts.map((p) => {
    const id = p.sku || p.id;
    const title = escapeXml(p.name);
    const description = escapeXml(p.shortDescription || p.description || p.name);
    const link = `${DOMAIN}/products/${p.categorySlug}/${p.slug}`;
    
    const rawImage = p.images && p.images.length > 0 ? p.images[0] : (p.image || '/logo/TTRC LOGO.png');
    const imageLink = rawImage.startsWith('http') ? rawImage : `${DOMAIN}${rawImage.startsWith('/') ? rawImage : `/${rawImage}`}`;

    const activePrice = p.sellingPrice || p.price || 0;
    const hasDiscount = typeof p.regularPrice === 'number' && activePrice > 0 && p.regularPrice > activePrice;

    const priceXml = hasDiscount 
      ? `<g:price>${p.regularPrice} INR</g:price>\n      <g:sale_price>${activePrice} INR</g:sale_price>`
      : `<g:price>${activePrice} INR</g:price>`;

    const availability = p.availability === 'out_of_stock' || p.availability === 'OutOfStock'
      ? 'out_of_stock'
      : 'in_stock';

    const brand = escapeXml(p.brand || 'Tamizh Tech Robotics Company');
    const category = escapeXml(p.category);

    return `    <item>
      <g:id>${id}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${link}</g:link>
      <g:image_link>${imageLink}</g:image_link>
      <g:brand>${brand}</g:brand>
      <g:condition>new</g:condition>
      <g:availability>${availability}</g:availability>
      ${priceXml}
      <g:product_type>${category}</g:product_type>
      <g:mpn>${id}</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
    </item>`;
  }).join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Tamizh Tech Robotics Company — Product Feed</title>
    <link>${DOMAIN}</link>
    <description>Official Google Merchant Center Product Feed for Tamizh Tech Robotics Company in Coimbatore, India. Precision competition robots, high-speed line followers, motor modules, and components.</description>
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
