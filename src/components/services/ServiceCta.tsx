"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { trackMarketingEvent } from "@/lib/analytics";

interface ServiceCtaProps {
  slug: string;
  title: string;
  whatsappMessage: string;
  onOpenQuote: () => void;
}

export function ServiceCta({ slug, title, whatsappMessage, onOpenQuote }: ServiceCtaProps) {
  const whatsappUrl = `https://wa.me/918148045030?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-accent text-xs font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Coimbatore Engineering Facility</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight font-heading mb-4">
          Ready to Build Your Project?
        </h2>

        <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Submit your 2D/3D drawings, schematics, or project parameters for an engineering review and transparent quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              trackMarketingEvent("service_quote_open", { service_slug: slug, trigger: "bottom_cta" });
              onOpenQuote();
            }}
            className="w-full sm:w-auto !bg-[#FF6B00] hover:!bg-[#e05e00] text-white font-bold rounded-xl px-8 py-3.5 shadow-md shadow-orange-500/20 text-sm"
          >
            Get a Quote <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <Link
            href="/contact"
            onClick={() => trackMarketingEvent("service_contact_click", { service_slug: slug, trigger: "bottom_cta" })}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-slate-50 font-bold rounded-xl px-7 py-3.5 text-sm text-text-primary"
            >
              <MessageSquare className="w-4 h-4 mr-1.5 text-slate-500" /> Talk to an Engineer
            </Button>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMarketingEvent("service_whatsapp_click", { service_slug: slug, trigger: "bottom_cta" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-sm transition-colors"
            aria-label="Direct message on WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-600" /> WhatsApp Us
          </a>
        </div>

        <p className="text-xs text-text-muted">
          Direct engineering response &bull; No speculative pricing &bull; Genuine technical advice
        </p>
      </div>
    </section>
  );
}
