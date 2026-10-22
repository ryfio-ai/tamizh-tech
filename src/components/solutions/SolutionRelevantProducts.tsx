import React from "react";
import { ArrowRight, Bot, ExternalLink } from "lucide-react";

interface SolutionRelevantProductsProps {
  products?: any[];
  onOpenQuote?: (serviceSlug?: string) => void;
  onProductClick?: (productSlug: string, productName: string) => void;
}

export function SolutionRelevantProducts({}: SolutionRelevantProductsProps) {
  return (
    <section id="solutions-products" className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-50 via-white to-amber-50/60 rounded-3xl border border-orange-200/90 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3">
                <Bot className="w-3.5 h-3.5" />
                <span>Official Hardware Store</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                Looking to Purchase Robotics Kits & Hardware?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                All competition-grade platforms, student STEM tinkering kits, FlySky radio transmitters, geared DC motors, and high-traction buggy wheels engineered at Tamizh Tech are officially sold through our dedicated ecommerce store: <strong className="text-neutral-900">TTRC Store</strong>.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  Competition Bots (LF 6.0, Race, Soccer)
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  FlySky Transmitters & Telemetry
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  Geared DC Motors & Buggy Wheels
                </span>
              </div>
            </div>

            <a
              href="https://www.ttrc.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0 hover:scale-105 active:scale-95"
            >
              <span>Visit TTRC Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
