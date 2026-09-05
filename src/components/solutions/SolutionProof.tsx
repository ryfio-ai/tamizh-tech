import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { SolutionProofItem } from "@/data/b2bSolutions";

interface SolutionProofProps {
  heading: string;
  subheading: string;
  items: SolutionProofItem[];
}

export function SolutionProof({
  heading,
  subheading,
  items,
}: SolutionProofProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Factual Evidence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50/70 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col hover:border-neutral-300 transition-colors"
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-neutral-800 border border-neutral-200/80">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/70 flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Tamizh Tech Workshop</span>
                  <span className="font-semibold text-emerald-600">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
