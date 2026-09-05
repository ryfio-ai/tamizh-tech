import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface SolutionCtaProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  whatsappMessage: string;
  onOpenQuote: () => void;
  onWhatsAppClick: () => void;
  onContactClick: () => void;
}

export function SolutionCta({
  title,
  subtitle,
  primaryCtaText,
  whatsappMessage,
  onOpenQuote,
  onWhatsAppClick,
  onContactClick,
}: SolutionCtaProps) {
  return (
    <section className="py-16 sm:py-20 bg-neutral-950 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#FF6B00] text-xs font-semibold uppercase tracking-wider mb-6">
          <span>Let's Build Together</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/contact"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm sm:text-base transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-neutral-300" />
            <span>Talk to an Engineer</span>
          </Link>

          <a
            href={`https://wa.me/918148045030?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-200"
            aria-label="Chat with engineer on WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Direct Contact Links */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-neutral-400">
          <a
            href="tel:+918148045030"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>+91 81480 45030</span>
          </a>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <a
            href="mailto:info@tamizhtech.in"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>info@tamizhtech.in</span>
          </a>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Coimbatore, Tamil Nadu, India</span>
          </span>
        </div>
      </div>
    </section>
  );
}
