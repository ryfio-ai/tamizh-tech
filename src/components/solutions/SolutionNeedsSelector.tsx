"use client";

import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { SolutionNeed } from "@/data/b2bSolutions";

interface SolutionNeedsSelectorProps {
  needs: SolutionNeed[];
  onSelectNeed: (need: SolutionNeed) => void;
}

export function SolutionNeedsSelector({ needs, onSelectNeed }: SolutionNeedsSelectorProps) {
  if (!needs || needs.length === 0) return null;

  return (
    <section className="bg-neutral-50/80 border-b border-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Requirements</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
              What are you looking for?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
            Select your requirement below to explore matching engineering offerings or request an accurate quotation.
          </p>
        </div>

        {/* Needs Grid / Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {needs.map((need) => (
            <button
              key={need.id}
              onClick={() => onSelectNeed(need)}
              className="text-left p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#FF6B00] hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="font-semibold text-sm text-neutral-950 group-hover:text-[#FF6B00] transition-colors mb-1">
                  {need.label}
                </div>
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {need.description}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium group-hover:text-[#FF6B00]">
                <span>Explore Details</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
