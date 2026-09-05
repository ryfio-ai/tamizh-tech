import React from "react";
import { Cpu, ArrowUpRight } from "lucide-react";
import { ServiceApplication } from "@/data/commercialServices";

interface ServiceApplicationsProps {
  applications: ServiceApplication[];
}

export function ServiceApplications({ applications }: ServiceApplicationsProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-white">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Who It Is For & Use Cases
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-3">
            Typical Applications
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Real-world applications across student engineering, collegiate laboratories, startups, and factory automation lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-2xs transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-accent" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1.5">{app.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
