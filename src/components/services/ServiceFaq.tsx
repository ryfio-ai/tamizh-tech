"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceFaqItem } from "@/data/commercialServices";
import { trackMarketingEvent } from "@/lib/analytics";

interface ServiceFaqProps {
  slug: string;
  faqs: ServiceFaqItem[];
}

export function ServiceFaq({ slug, faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    const nextState = openIndex === index ? null : index;
    setOpenIndex(nextState);
    if (nextState !== null) {
      trackMarketingEvent("service_faq_open", { service_slug: slug, faq_index: index });
    }
  };

  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-slate-50/40">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Customer Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Direct, factual answers to real customer questions regarding files, materials, tolerances, and delivery.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-150"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
