import React from 'react';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.tamizhtech.in/#organization",
    "name": "Tamizh Tech Robotics Company",
    "alternateName": ["TamizhTech", "TTRC"],
    "url": "https://www.tamizhtech.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tamizhtech.in/logo/TTRC%20LOGO.png",
      "width": 500,
      "height": 500
    },
    "foundingDate": "2024-10-22",
    "founders": [{ "@type": "Person", "name": "Er. K. Tamizharasan" }],
    "description": "Coimbatore-based robotics engineering company specializing in custom competition combat bots, B2B industrial automation, STEM Tinkering labs, and engineering robotics education.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thiruchendur Gdn Rd, Kurumbapalayam",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641107",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/tamizh-tech-robotics-company",
      "https://www.instagram.com/tamizh_tech_robotics_company",
      "https://www.youtube.com/@covaiscientist"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91 8148045030",
      "contactType": "customer support",
      "email": "contact@tamizhtech.in",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    }]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.tamizhtech.in/#localbusiness",
    "name": "Tamizh Tech Robotics Company",
    "image": "https://www.tamizhtech.in/logo/TTRC%20LOGO.png",
    "telephone": "+91 8148045030",
    "email": "contact@tamizhtech.in",
    "url": "https://www.tamizhtech.in",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thiruchendur Gdn Rd, Kurumbapalayam",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641107",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0967,
      "longitude": 77.0146
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({ product }: any) {
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images.map((img: string) => (img.startsWith("http") ? img : `https://www.tamizhtech.in${img}`))
    : product.image
      ? [product.image.startsWith("http") ? product.image : `https://www.tamizhtech.in${product.image}`]
      : [];

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": images,
    "description": product.shortDescription || product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Tamizh Tech Robotics"
    },
    "sku": product.sku || product.slug || product.id,
    "category": product.category,
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

export function CourseSchema({ course }: { course: any }) {
  const canonicalUrl = course.categorySlug
    ? `https://www.tamizhtech.in/courses/${course.categorySlug}/${course.slug || course.id}`
    : `https://www.tamizhtech.in/courses/${course.id}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.desc || course.description,
    "url": canonicalUrl,
    "provider": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Company",
      "sameAs": "https://www.tamizhtech.in"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": course.mode,
      "courseWorkload": course.duration,
      "inLanguage": course.language
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ post }: { post: any }) {
  const canonicalUrl = post.categorySlug
    ? `https://www.tamizhtech.in/blog/${post.categorySlug}/${post.slug}`
    : `https://www.tamizhtech.in/blog/${post.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.desc,
    "url": canonicalUrl,
    "datePublished": post.date || "2026-01-01",
    "dateModified": post.updatedAt || post.date || "2026-03-01",
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Er. K. Tamizharasan",
      "jobTitle": post.author?.role || "Founder & Robotics Engineer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tamizhtech.in/logo/TTRC%20LOGO.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EventSchema({ event }: { event: any }) {
  const canonicalUrl = event.categorySlug
    ? `https://www.tamizhtech.in/events/${event.categorySlug}/${event.slug || event.id}`
    : `https://www.tamizhtech.in/events/${event.id}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description || event.desc,
    "url": canonicalUrl,
    "startDate": event.date || event.startDate || "2026-09-12",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": event.location || "Tamizh Tech HQ, Coimbatore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thiruchendur Gdn Rd, Kurumbapalayam",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641107",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Company"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Setup a STEM Tinkering Lab in Indian Schools",
    "description": "Step-by-step guide for school administrators to establish a standard robotics and tinkering lab under Atal Tinkering Lab guidelines.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Establish Dedicated Lab Space",
        "text": "Allocate a room of at least 800-1000 sq ft with electrical layout benches and safety setups."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Procure Hardware & Kits",
        "text": "Acquire STEM kits, microcontrollers (Arduino, ESP32), 3D printers, and mechanical chassis kits."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Design & Align Curriculum",
        "text": "Map Grade 1 to 12 STEM curriculum to local board standards (CBSE/ICSE/State Board)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Execute Teacher Training",
        "text": "Conduct structured 3-day training programs for computer science and science faculty."
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
