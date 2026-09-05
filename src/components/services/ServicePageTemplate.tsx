"use client";

import React, { useState, useEffect } from "react";
import { CommercialServiceDetail } from "@/data/commercialServices";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceApplications } from "@/components/services/ServiceApplications";
import { ProcessWorkflow } from "@/components/services/ProcessWorkflow";
import { WhatYouNeed } from "@/components/services/WhatYouNeed";
import { ServiceProof } from "@/components/services/ServiceProof";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCta } from "@/components/services/ServiceCta";
import { ServiceStickyCta } from "@/components/services/ServiceStickyCta";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

interface ServicePageTemplateProps {
  service: CommercialServiceDetail;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    trackMarketingEvent("service_page_view", {
      service_slug: service.slug,
      service_name: service.h1,
    });
  }, [service.slug, service.h1]);

  const siteUrl = "https://www.tamizhtech.in";
  const canonicalUrl = `${siteUrl}${service.canonicalPath}`;

  // Structured Data (JSON-LD)
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${siteUrl}/services`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.badge,
          "item": canonicalUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.h1,
      "serviceType": service.badge,
      "description": service.heroSub,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Tamizh Tech Robotics Company",
        "image": `${siteUrl}/logo/TTRC LOGO.png`,
        "telephone": "+91 81480 45030",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "India",
        },
        "url": siteUrl,
      },
      "areaServed": {
        "@type": "Country",
        "name": "India",
      },
      "url": canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ];

  return (
    <div className="bg-white min-h-screen text-text-primary pb-16 sm:pb-0">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* 1. Hero */}
      <ServiceHero
        slug={service.slug}
        badge={service.badge}
        h1={service.h1}
        heroSub={service.heroSub}
        primaryImage={service.primaryImage}
        whatsappMessage={service.whatsappMessage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 2. Overview */}
      <ServiceOverview
        heading={service.overview.heading}
        paragraphs={service.overview.paragraphs}
        highlights={service.overview.highlights}
      />

      {/* 3. Capabilities & Materials */}
      <ServiceCapabilities
        capabilities={service.capabilities}
        materialsOrSpecs={service.materialsOrSpecs}
      />

      {/* 4. Applications / Who It Is For */}
      <ServiceApplications applications={service.applications} />

      {/* 5. Process Workflow */}
      <ProcessWorkflow workflow={service.workflow} />

      {/* 6. What We Need From You */}
      <WhatYouNeed
        slug={service.slug}
        items={service.whatWeNeed}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 7. Real Visual Proof */}
      <ServiceProof items={service.visualProof} />

      {/* 8. Related Services & Products */}
      <RelatedServices
        relatedServices={service.relatedServices}
        relatedProducts={service.relatedProducts}
      />

      {/* 9. FAQs */}
      <ServiceFaq slug={service.slug} faqs={service.faqs} />

      {/* 10. Final CTA */}
      <ServiceCta
        slug={service.slug}
        title={service.h1}
        whatsappMessage={service.whatsappMessage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 11. Mobile Sticky Bar */}
      <ServiceStickyCta
        slug={service.slug}
        whatsappMessage={service.whatsappMessage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 12. Quote Modal Integration */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={service.quoteServiceId}
      />
    </div>
  );
}
