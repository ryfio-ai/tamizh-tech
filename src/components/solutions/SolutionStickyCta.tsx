"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

interface SolutionStickyCtaProps {
  whatsappMessage: string;
  onOpenQuote: () => void;
  onWhatsAppClick: () => void;
}

export function SolutionStickyCta({
  whatsappMessage,
  onOpenQuote,
  onWhatsAppClick,
}: SolutionStickyCtaProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-3 shadow-lg flex items-center gap-2">
      <a
        href={`https://wa.me/918148045030?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onWhatsAppClick}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-xs transition-colors"
        aria-label="WhatsApp enquiry"
      >
        <FaWhatsapp className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenQuote}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#FF6B00] active:bg-[#e05e00] text-white font-semibold text-xs shadow-xs transition-colors"
      >
        <span>Get a Quote</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
