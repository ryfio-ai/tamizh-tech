import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench } from "lucide-react";
import { CommercialService } from "@/data/commercialServices";

interface SolutionRelevantServicesProps {
  services: CommercialService[];
  onOpenQuote: (serviceSlug: string) => void;
  onServiceClick: (serviceSlug: string, serviceName: string) => void;
}

export function SolutionRelevantServices({
  services,
  onOpenQuote,
  onServiceClick,
}: SolutionRelevantServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section id="solutions-services" className="py-14 sm:py-20 bg-white border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Commercial Engineering Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Relevant Engineering Services
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Explore our dedicated in-house manufacturing and engineering services supporting this solution.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group bg-neutral-50/70 rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                <Image
                  src={service.primaryImage}
                  alt={service.h1}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-neutral-800 border border-neutral-200/80">
                  {service.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() => onServiceClick(service.slug, service.h1)}
                    >
                      {service.h1}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4">
                    {service.heroSub}
                  </p>

                  {/* Highlights / Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.capabilities.slice(0, 3).map((cap: { title: string }, cIdx: number) => (
                      <span
                        key={cIdx}
                        className="inline-block px-2 py-0.5 rounded bg-white border border-neutral-200 text-[11px] text-neutral-600"
                      >
                        {cap.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    onClick={() => onServiceClick(service.slug, service.h1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-[#FF6B00] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote(service.slug)}
                    className="px-3 py-1.5 rounded-lg bg-orange-100 hover:bg-orange-200/80 text-[#FF6B00] font-semibold text-xs transition-colors"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
