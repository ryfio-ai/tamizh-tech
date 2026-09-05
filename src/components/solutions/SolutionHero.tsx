import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { B2BSolution } from "@/data/b2bSolutions";

interface SolutionHeroProps {
  solution: B2BSolution;
  onOpenQuote: (service?: string) => void;
  onWhatsAppClick: () => void;
  onContactClick: () => void;
}

export function SolutionHero({
  solution,
  onOpenQuote,
  onWhatsAppClick,
  onContactClick,
}: SolutionHeroProps) {
  const { hero, badge, audience } = solution;

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 via-white to-white border-b border-neutral-200/80 pt-6 pb-14 md:pt-8 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-500">
            <li>
              <Link href="/" className="hover:text-neutral-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </li>
            <li>
              <Link href="/solutions" className="hover:text-neutral-900 transition-colors">
                Solutions
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </li>
            <li className="font-medium text-neutral-900 truncate max-w-[200px] sm:max-w-none">
              {solution.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text + CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF6B00] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{badge}</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-600 font-normal normal-case">{audience}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.15]">
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id={`hero-quote-btn-${solution.slug}`}
                onClick={() => onOpenQuote(solution.quoteService)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                id={`hero-contact-btn-${solution.slug}`}
                href="/contact"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 font-medium text-sm sm:text-base shadow-xs hover:bg-neutral-50 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-neutral-600" />
                <span>{hero.secondaryCtaText}</span>
              </Link>

              <a
                id={`hero-whatsapp-btn-${solution.slug}`}
                href={`https://wa.me/918148045030?text=${encodeURIComponent(solution.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 font-medium text-sm transition-all duration-200"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Location & Trust Signals */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Engineering Workshop in Coimbatore
              </span>
              <span>•</span>
              <span>Fast Turnaround Prototyping</span>
              <span>•</span>
              <span>Direct Engineer Consultation</span>
            </div>
          </div>

          {/* Right: Verified Image Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md bg-neutral-100 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-lg border border-neutral-200/70 text-xs text-neutral-800 flex items-center justify-between">
                <span className="font-medium truncate">{hero.imageAlt}</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider ml-2 shrink-0 font-semibold text-[#FF6B00]">
                  Verified Hardware
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
