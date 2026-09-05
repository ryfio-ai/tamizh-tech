"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { trackMarketingEvent } from "@/lib/analytics";

interface ServiceStickyCtaProps {
  slug: string;
  whatsappMessage: string;
  onOpenQuote: () => void;
}

export function ServiceStickyCta({ slug, whatsappMessage, onOpenQuote }: ServiceStickyCtaProps) {
  const whatsappUrl = `https://wa.me/918148045030?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg flex items-center gap-2.5"
      role="region"
      aria-label="Mobile quick actions"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackMarketingEvent("service_whatsapp_click", { service_slug: slug, trigger: "mobile_sticky" })}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-bold text-xs active:bg-emerald-100 transition-colors"
      >
        <FaWhatsapp className="w-4 h-4 text-emerald-600" /> WhatsApp
      </a>

      <button
        type="button"
        onClick={() => {
          trackMarketingEvent("service_quote_open", { service_slug: slug, trigger: "mobile_sticky" });
          onOpenQuote();
        }}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#FF6B00] active:bg-[#e05e00] text-white font-bold text-xs shadow-sm shadow-orange-500/20 transition-colors"
      >
        Get a Quote <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
