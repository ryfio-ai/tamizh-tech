import React from 'react';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.tamizhtech.in/#organization",
    "name": "TamizhTech Robotics Company",
    "alternateName": ["Tamizh Tech", "TTRC"],
    "url": "https://www.tamizhtech.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tamizhtech.in/logo/TTRC%20LOGO.png",
      "width": 500,
      "height": 500
    },
    "foundingDate": "2024-10-22",
    "founders": [{ "@type": "Person", "name": "Er. K. Tamizharasan" }],
    "description": "Coimbatore-based robotics company specializing in B2B industrial automation (AGVs, AMRs, PLCs), custom competition bots, STEM Tinkering labs, and technology education. Evolved from Tamizh Robotics Club (2021).",
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/tamizh-tech-robotics-company",
      "https://www.instagram.com/tamizh_tech_robotics_company",
      "https://youtube.com/@covaiscientist"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-8148045030",
      "contactType": "customer service",
      "email": "info@tamizhtech.in",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta", "hi"]
    }]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({ product }: any) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images || [product.image],
    "description": product.description,
    "brand": { "@type": "Brand", "name": "TamizhTech" },
    "sku": product.slug || product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://www.tamizhtech.in/products/${product.slug}`,
      "priceCurrency": "INR",
      "price": product.price || "0",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "TamizhTech Robotics Company" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "27"
    },
    "inLanguage": "en-IN"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    })),
    "inLanguage": "en-IN"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
