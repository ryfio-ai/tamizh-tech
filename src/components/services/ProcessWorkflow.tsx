import React from "react";
import { ServiceWorkflowStep } from "@/data/commercialServices";

interface ProcessWorkflowProps {
  workflow: ServiceWorkflowStep[];
}

export function ProcessWorkflow({ workflow }: ProcessWorkflowProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-slate-50/40">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Execution Method
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-3">
            Engineering Workflow
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            A structured, repeatable engineering process from requirement submission to final dispatch or site commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 text-left relative overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono font-bold text-xs flex items-center justify-center">
                    0{item.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
