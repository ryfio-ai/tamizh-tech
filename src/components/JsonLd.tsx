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
  const canonicalUrl = product.categorySlug
    ? `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}`
    : `https://www.tamizhtech.in/products/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images || [product.image],
    "description": product.shortDescription || product.description,
    "brand": { "@type": "Brand", "name": "TamizhTech" },
    "sku": product.slug || product.id,
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
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

export function CourseSchema({ course }: { course: any }) {
  const canonicalUrl = course.categorySlug
    ? `https://www.tamizhtech.in/courses/${course.categorySlug}/${course.slug || course.id}`
    : `https://www.tamizhtech.in/courses/${course.id}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.desc,
    "url": canonicalUrl,
    "provider": {
      "@type": "Organization",
      "name": "TamizhTech Robotics Company",
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
      "name": event.location || "TamizhTech HQ, Coimbatore",
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
      "name": "TamizhTech Robotics Company"
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
