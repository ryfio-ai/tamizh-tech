import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  heading: string;
  paragraphs: string[];
  highlights: { title: string; desc: string }[];
}

export function ServiceOverview({ heading, paragraphs, highlights }: ServiceOverviewProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-white">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Service Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-4">
            {heading}
          </h2>
          <div className="space-y-3.5 text-text-secondary text-base leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Key Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300 transition-colors text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <h3 className="text-sm font-bold text-text-primary">{item.title}</h3>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
