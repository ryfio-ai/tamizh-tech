import React from "react";
import { GitCommit } from "lucide-react";
import { SolutionWorkflowStep } from "@/data/b2bSolutions";

interface SolutionWorkflowProps {
  heading: string;
  subheading: string;
  steps: SolutionWorkflowStep[];
}

export function SolutionWorkflow({
  heading,
  subheading,
  steps,
}: SolutionWorkflowProps) {
  return (
    <section className="py-14 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Structured Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="text-2xl font-extrabold text-[#FF6B00]/80 mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-neutral-200 text-neutral-400 flex items-center justify-center text-xs z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
