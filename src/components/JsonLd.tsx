import React from 'react';

export function GlobalSiteGraphSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tamizhtech.in/#organization",
        "name": "TamizhTech Robotics Company",
        "alternateName": ["Tamizh Tech", "TTRC"],
        "url": "https://www.tamizhtech.in/",
        "logo": "https://www.tamizhtech.in/logo.png",
        "image": "https://www.tamizhtech.in/hero-robotics.jpg",
        "description": "Indigenous robotics engineering, competition combat bots, SS 304/316 fiber laser cutting, PCB assembly, and STEM tinkering lab setups in Coimbatore, Tamil Nadu.",
        "telephone": "+918148045030",
        "email": "info@tamizhtech.in",
        "founder": {
          "@type": "Person",
          "name": "Er. K. Tamizharasan"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Thiruchendur Garden Road, Kurumbapalayam",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641107",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.1085,
          "longitude": 77.0152
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Coimbatore" },
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "Country", "name": "India" }
        ],
        "priceRange": "$$",
        "sameAs": [
          "https://www.instagram.com/tamizhtech",
          "https://www.instagram.com/tamizh_tech_robotics_company",
          "https://www.linkedin.com/company/tamizhtech",
          "https://www.linkedin.com/company/tamizh-tech-robotics-company",
          "https://youtube.com/@covaiscientist"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tamizhtech.in/#website",
        "name": "TamizhTech Robotics Company",
        "url": "https://www.tamizhtech.in",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.tamizhtech.in/blog?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tamizhtech.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What robotics engineering services does TamizhTech offer in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TamizhTech specializes in custom competition combat bots, precision SS 304 and SS 316 fiber laser cutting, PCB design and PCBA fabrication, turnkey STEM tinkering lab setups for schools, and industrial automation solutions across Tamil Nadu."
            }
          },
          {
            "@type": "Question",
            "name": "Does TamizhTech build custom competition robots for national tournaments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. TamizhTech designs and manufactures competition-ready platforms including Line Followers (TTRC LF 6.0), RC Robo Race, RC Robo Soccer, and combat bots with over 180+ podium tournament wins."
            }
          },
          {
            "@type": "Question",
            "name": "Can TamizhTech set up turnkey STEM and ATL labs for schools in Tamil Nadu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. TamizhTech delivers end-to-end STEM tinkering lab solutions compliant with NEP 2020 and ATL grants. Packages include ESD workbenches, 3D printers, microcontrollers, modular robotics hardware, and full teacher training programs."
            }
          }
        ]
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
      "url": "https://www.tamizhtech.in/logo.png",
      "width": 500,
      "height": 500
    },
    "image": "https://www.tamizhtech.in/hero-robotics.jpg",
    "foundingDate": "2024-10-22",
    "founders": [{ "@type": "Person", "name": "Er. K. Tamizharasan" }],
    "description": "Indigenous robotics engineering, competition combat bots, SS 304/316 fiber laser cutting, PCB assembly, and STEM tinkering lab setups in Coimbatore, Tamil Nadu.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thiruchendur Garden Road, Kurumbapalayam",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641107",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.1085,
      "longitude": 77.0152
    },
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
      "https://www.instagram.com/tamizhtech",
      "https://www.instagram.com/tamizh_tech_robotics_company",
      "https://www.linkedin.com/company/tamizhtech",
      "https://www.linkedin.com/company/tamizh-tech-robotics-company",
      "https://youtube.com/@covaiscientist"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+918148045030",
      "contactType": "customer support",
      "email": "info@tamizhtech.in",
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
    "@id": "https://www.tamizhtech.in/#organization",
    "name": "TamizhTech Robotics Company",
    "alternateName": "Tamizh Tech",
    "image": "https://www.tamizhtech.in/hero-robotics.jpg",
    "logo": "https://www.tamizhtech.in/logo.png",
    "telephone": "+918148045030",
    "email": "info@tamizhtech.in",
    "url": "https://www.tamizhtech.in/",
    "priceRange": "$$",
    "description": "Indigenous robotics engineering, competition combat bots, SS 304/316 fiber laser cutting, PCB assembly, and STEM tinkering lab setups in Coimbatore, Tamil Nadu.",
    "founder": {
      "@type": "Person",
      "name": "Er. K. Tamizharasan"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thiruchendur Garden Road, Kurumbapalayam",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641107",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.1085,
      "longitude": 77.0152
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
      "https://www.instagram.com/tamizhtech",
      "https://www.instagram.com/tamizh_tech_robotics_company",
      "https://www.linkedin.com/company/tamizhtech",
      "https://www.linkedin.com/company/tamizh-tech-robotics-company",
      "https://youtube.com/@covaiscientist"
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
      "name": product.brand || "TamizhTech Robotics"
    },
    ...(product.manufacturer ? {
      "manufacturer": {
        "@type": "Organization",
        "name": product.manufacturer
      }
    } : {}),
    ...(product.sku ? { "sku": product.sku } : {}),
    "category": product.category,
    "inLanguage": "en-IN"
  };

  // Honest published price Offer without fake merchant/stock markup
  const activeSellingPrice = product.sellingPrice || product.price;
  if (activeSellingPrice && typeof activeSellingPrice === 'number' && activeSellingPrice > 0) {
    const offer: any = {
      "@type": "Offer",
      "price": activeSellingPrice,
      "priceCurrency": "INR",
      "url": `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}`,
      "seller": {
        "@type": "Organization",
        "name": "Tamizh Tech Robotics Company"
      }
    };

    // Controlled availability field: only add schema availability if factually verified in source data
    if (product.availability) {
      const availabilityMap: Record<string, string> = {
        InStock: "https://schema.org/InStock",
        in_stock: "https://schema.org/InStock",
        OutOfStock: "https://schema.org/OutOfStock",
        out_of_stock: "https://schema.org/OutOfStock",
        PreOrder: "https://schema.org/PreOrder",
        preorder: "https://schema.org/PreOrder",
        BackOrder: "https://schema.org/BackOrder",
        backorder: "https://schema.org/BackOrder",
        InStoreOnly: "https://schema.org/InStoreOnly",
      };
      const schemaAvailability = availabilityMap[product.availability] || (typeof product.availability === "string" && product.availability.startsWith("http") ? product.availability : undefined);
      if (schemaAvailability) {
        offer.availability = schemaAvailability;
      }
    }

    // Google-compliant StrikethroughPrice PriceSpecification: only when genuine regularPrice is verified & higher
    if (
      typeof product.regularPrice === 'number' &&
      product.regularPrice > 0 &&
      product.regularPrice > activeSellingPrice
    ) {
      offer.priceSpecification = [
        {
          "@type": "UnitPriceSpecification",
          "price": product.regularPrice,
          "priceCurrency": "INR",
          "priceType": "https://schema.org/StrikethroughPrice"
        }
      ];
    }

    if (product.priceValidFrom) offer.validFrom = product.priceValidFrom;
    if (product.priceValidThrough) offer.validThrough = product.priceValidThrough;

    schema.offers = offer;
  }

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
      "name": "ThiranOli Academy (TamizhTech Robotics)",
      "sameAs": "https://www.tamizhtech.in/courses"
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

export function CompetitionGuideSchema({ guide }: { guide: any }) {
  const canonicalUrl = `https://www.tamizhtech.in/events/${guide.categorySlug}/${guide.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.metaDescription || guide.overview,
    "url": canonicalUrl,
    "datePublished": guide.createdAt || "2026-03-01T00:00:00.000Z",
    "dateModified": guide.updatedAt || "2026-09-11T00:00:00.000Z",
    "inLanguage": "en-IN",
    "author": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Club & Company",
      "url": "https://www.tamizhtech.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tamizhtech.in/logo/TTRC%20LOGO.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
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
