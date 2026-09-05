import React from "react";
import { 
  Bot, 
  Cpu, 
  FlaskConical, 
  Factory, 
  Scissors, 
  Printer, 
  Wrench, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Check,
  ArrowRight
} from "lucide-react";
import { SolutionOffering } from "@/data/b2bSolutions";

interface SolutionOfferingsProps {
  heading: string;
  subheading: string;
  items: SolutionOffering[];
  onOpenQuote: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Cpu,
  FlaskConical,
  Factory,
  Scissors,
  Printer,
  Wrench,
  BookOpen,
  Sparkles,
  GraduationCap,
  Layers,
};

export function SolutionOfferings({
  heading,
  subheading,
  items,
  onOpenQuote,
}: SolutionOfferingsProps) {
  return (
    <section id="solutions-offerings" className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Capability Breakdown</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = (item.iconName && ICON_MAP[item.iconName]) || Layers;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200 p-7 shadow-xs hover:border-[#FF6B00]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/70 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-neutral-100">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-neutral-100 flex items-center justify-end">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                  >
                    <span>Enquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
