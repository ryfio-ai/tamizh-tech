"use client";

import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceRequirementItem } from "@/data/commercialServices";
import { trackMarketingEvent } from "@/lib/analytics";

interface WhatYouNeedProps {
  slug: string;
  items: ServiceRequirementItem[];
  onOpenQuote: () => void;
}

export function WhatYouNeed({ slug, items, onOpenQuote }: WhatYouNeedProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-white">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-orange-50/20 p-6 sm:p-10 text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
              Quick Quotation Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-2">
              What We Need From You
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              To provide a fast, accurate engineering review and quotation, share these essential details:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-orange-100 text-accent flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{item.detail}</p>
                <p className="text-[11px] text-text-muted italic pt-1 border-t border-slate-100">
                  e.g. {item.example}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
            <p className="text-xs text-text-muted text-left">
              Have a question before submitting files? Our engineers can review your drawings directly.
            </p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                trackMarketingEvent("service_quote_open", { service_slug: slug, trigger: "what_you_need" });
                onOpenQuote();
              }}
              className="w-full sm:w-auto !bg-[#FF6B00] hover:!bg-[#e05e00] text-white font-bold rounded-xl px-6 py-2.5 shadow-sm text-xs shrink-0"
            >
              Submit Requirements Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
