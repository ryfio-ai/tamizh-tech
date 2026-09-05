"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { trackMarketingEvent } from "@/lib/analytics";

interface ServiceHeroProps {
  slug: string;
  badge: string;
  h1: string;
  heroSub: string;
  primaryImage: string;
  whatsappMessage: string;
  onOpenQuote: () => void;
}

export function ServiceHero({
  slug,
  badge,
  h1,
  heroSub,
  primaryImage,
  whatsappMessage,
  onOpenQuote,
}: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/918148045030?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 border-b border-border/40 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-text-muted">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-accent transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-none">
            {badge}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-[1.15] mb-5 font-heading">
              {h1}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              {heroSub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackMarketingEvent("service_quote_open", { service_slug: slug });
                  onOpenQuote();
                }}
                className="justify-center !bg-[#FF6B00] hover:!bg-[#e05e00] text-white font-bold rounded-xl px-7 py-3.5 shadow-md shadow-orange-500/20 text-sm"
              >
                Get a Quote <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Link
                href="/contact"
                onClick={() => trackMarketingEvent("service_contact_click", { service_slug: slug })}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center border-border hover:bg-slate-50 font-bold rounded-xl px-6 py-3.5 text-sm text-text-primary"
                >
                  <MessageSquare className="w-4 h-4 mr-1.5 text-slate-500" /> Talk to an Engineer
                </Button>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMarketingEvent("service_whatsapp_click", { service_slug: slug })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-sm transition-colors"
                aria-label="Chat with engineer on WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-600" /> WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Verified Coimbatore Engineering Support
              </span>
              <span>&bull;</span>
              <span>Direct Factory Pricing</span>
            </div>
          </div>

          {/* Right Column: Visual Proof Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg bg-slate-900 group">
              <Image
                src={primaryImage}
                alt={h1}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold drop-shadow-sm">
                Tamizh Tech Production Facility &bull; Coimbatore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
