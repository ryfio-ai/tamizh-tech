"use client";

import React, { useState, useEffect } from "react";
import { 
  B2BSolution, 
  getSolutionServices, 
  getSolutionProducts, 
  getSolutionCourses,
  SolutionNeed 
} from "@/data/b2bSolutions";
import { SolutionHero } from "./SolutionHero";
import { SolutionNeedsSelector } from "./SolutionNeedsSelector";
import { SolutionProblemSolution } from "./SolutionProblemSolution";
import { SolutionOfferings } from "./SolutionOfferings";
import { SolutionRelevantServices } from "./SolutionRelevantServices";
import { SolutionRelevantProducts } from "./SolutionRelevantProducts";
import { SolutionRelevantCourses } from "./SolutionRelevantCourses";
import { SolutionWorkflow } from "./SolutionWorkflow";
import { SolutionProof } from "./SolutionProof";
import { SolutionFaq } from "./SolutionFaq";
import { SolutionCta } from "./SolutionCta";
import { SolutionStickyCta } from "./SolutionStickyCta";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

interface SolutionPageTemplateProps {
  solution: B2BSolution;
}

export function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(solution.quoteService);

  const relevantServices = getSolutionServices(solution);
  const relevantProducts = getSolutionProducts(solution);
  const relevantCourses = getSolutionCourses(solution);

  // Track page view on mount
  useEffect(() => {
    trackMarketingEvent("solution_page_view", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
    });
  }, [solution.slug, solution.name]);

  const handleOpenQuote = (service?: string) => {
    const serviceToUse = service || solution.quoteService;
    setSelectedService(serviceToUse);
    setIsQuoteOpen(true);
    trackMarketingEvent("solution_quote_open", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
      service_id: serviceToUse,
    });
  };

  const handleSelectNeed = (need: SolutionNeed) => {
    trackMarketingEvent("solution_needs_select", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
      need_id: need.id,
      need_label: need.label,
    });

    if (need.targetSectionId) {
      const el = document.getElementById(need.targetSectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (need.defaultService) {
      handleOpenQuote(need.defaultService);
    }
  };

  const handleWhatsAppClick = () => {
    trackMarketingEvent("solution_whatsapp_click", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
    });
  };

  const handleContactClick = () => {
    trackMarketingEvent("solution_contact_click", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
    });
  };

  const handleServiceClick = (serviceSlug: string, serviceName: string) => {
    trackMarketingEvent("solution_related_service_click", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
      target_service_slug: serviceSlug,
      target_service_name: serviceName,
    });
  };

  const handleProductClick = (productSlug: string, productName: string) => {
    trackMarketingEvent("solution_related_product_click", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
      target_product_slug: productSlug,
      target_product_name: productName,
    });
  };

  const handleCourseClick = (courseSlug: string, courseTitle: string) => {
    trackMarketingEvent("solution_related_course_click", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
      target_course_slug: courseSlug,
      target_course_title: courseTitle,
    });
  };

  const handleFaqOpen = (question: string) => {
    trackMarketingEvent("solution_faq_open", {
      solution_slug: solution.slug,
      solution_name: solution.name,
      source_solution: solution.slug,
      question,
    });
  };

  // ── JSON-LD Structured Data ──
  // 1. Breadcrumbs Schema
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tamizhtech.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://www.tamizhtech.in/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": solution.name,
        "item": solution.seo.canonical
      }
    ]
  };

  // 2. Organization / LocalBusiness Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tamizh Tech Robotics Company",
    "url": "https://www.tamizhtech.in/",
    "logo": "https://www.tamizhtech.in/icon.png",
    "telephone": "+918148045030",
    "email": "info@tamizhtech.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "description": solution.seo.description
  };

  // 3. FAQPage Schema (only when visible FAQs exist)
  const faqSchema = solution.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": solution.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const schemas: any[] = [breadcrumbsSchema, orgSchema];
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-16 sm:pb-0">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* 1. Hero */}
      <SolutionHero
        solution={solution}
        onOpenQuote={handleOpenQuote}
        onWhatsAppClick={handleWhatsAppClick}
        onContactClick={handleContactClick}
      />

      {/* 2. Customer Needs Selector ("What are you looking for?") */}
      <SolutionNeedsSelector
        needs={solution.needs}
        onSelectNeed={handleSelectNeed}
      />

      {/* 3. Problem / Solution ("What We Help You Build / Achieve") */}
      <SolutionProblemSolution
        heading={solution.whatWeHelpBuild.heading}
        subheading={solution.whatWeHelpBuild.subheading}
        pillars={solution.whatWeHelpBuild.pillars}
      />

      {/* 4. Comprehensive Offerings Grid */}
      <SolutionOfferings
        heading={solution.offerings.heading}
        subheading={solution.offerings.subheading}
        items={solution.offerings.items}
        onOpenQuote={() => handleOpenQuote(solution.quoteService)}
      />

      {/* 5. Relevant Services (Separated) */}
      <SolutionRelevantServices
        services={relevantServices}
        onOpenQuote={handleOpenQuote}
        onServiceClick={handleServiceClick}
      />

      {/* 6. Relevant Products (Separated) */}
      <SolutionRelevantProducts
        products={relevantProducts}
        onOpenQuote={handleOpenQuote}
        onProductClick={handleProductClick}
      />

      {/* 7. Relevant Courses (Separated) */}
      <SolutionRelevantCourses
        courses={relevantCourses}
        onOpenQuote={handleOpenQuote}
        onCourseClick={handleCourseClick}
      />

      {/* 8. Implementation Workflow */}
      <SolutionWorkflow
        heading={solution.workflow.heading}
        subheading={solution.workflow.subheading}
        steps={solution.workflow.steps}
      />

      {/* 9. Real Visual Proof */}
      <SolutionProof
        heading={solution.visualProof.heading}
        subheading={solution.visualProof.subheading}
        items={solution.visualProof.items}
      />

      {/* 10. FAQ */}
      <SolutionFaq
        faqs={solution.faqs}
        onFaqOpen={handleFaqOpen}
      />

      {/* 11. Final CTA */}
      <SolutionCta
        title={`Partner with Tamizh Tech for ${solution.name}`}
        subtitle="Discuss your requirements with our engineering team in Coimbatore. Fast turnaround, transparent technical proposals, and reliable execution."
        primaryCtaText={solution.hero.primaryCtaText}
        whatsappMessage={solution.whatsappMessage}
        onOpenQuote={() => handleOpenQuote(solution.quoteService)}
        onWhatsAppClick={handleWhatsAppClick}
        onContactClick={handleContactClick}
      />

      {/* 12. Mobile Sticky CTA Bar */}
      <SolutionStickyCta
        whatsappMessage={solution.whatsappMessage}
        onOpenQuote={() => handleOpenQuote(solution.quoteService)}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Lead Quote Modal with Dynamic Service Pre-selection */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
