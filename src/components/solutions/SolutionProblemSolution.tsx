import React from "react";
import { CheckCircle2, Target } from "lucide-react";

interface Pillar {
  title: string;
  description: string;
}

interface SolutionProblemSolutionProps {
  heading: string;
  subheading: string;
  pillars: Pillar[];
}

export function SolutionProblemSolution({
  heading,
  subheading,
  pillars,
}: SolutionProblemSolutionProps) {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
            <Target className="w-3.5 h-3.5" />
            <span>Core Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-50/70 border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-orange-100/70 text-[#FF6B00] flex items-center justify-center font-bold text-xs mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Engineering Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
