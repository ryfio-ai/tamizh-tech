import React from "react";
import { Wrench, Layers } from "lucide-react";
import { ServiceCapability, ServiceMaterialSpec } from "@/data/commercialServices";

interface ServiceCapabilitiesProps {
  capabilities: ServiceCapability[];
  materialsOrSpecs?: {
    sectionTitle: string;
    sectionDesc: string;
    items: ServiceMaterialSpec[];
  };
}

export function ServiceCapabilities({ capabilities, materialsOrSpecs }: ServiceCapabilitiesProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-slate-50/50">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Engineering Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-3">
            What We Provide
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Practical, in-house technical capabilities backed by proven hardware methodologies and quality control.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-accent/40 hover:shadow-sm transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-accent mb-4">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{cap.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4">{cap.desc}</p>
              </div>

              {cap.tags && cap.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional Materials / Specs Sub-section */}
        {materialsOrSpecs && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold text-text-primary font-heading">
                {materialsOrSpecs.sectionTitle}
              </h3>
            </div>
            <p className="text-xs text-text-muted mb-6">{materialsOrSpecs.sectionDesc}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {materialsOrSpecs.items.map((mat, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200/70 bg-slate-50/50 space-y-2">
                  {mat.badge && (
                    <span className="inline-block px-2 py-0.5 rounded bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-wide">
                      {mat.badge}
                    </span>
                  )}
                  <h4 className="text-sm font-bold text-text-primary">{mat.name}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{mat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
