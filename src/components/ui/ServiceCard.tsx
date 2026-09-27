import React from "react";
import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }> | any;
  href: string;
  className?: string;
  iconColorClass?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  className,
  iconColorClass = "text-accent",
}: ServiceCardProps) {
  return (
    <Link href={href} className={cn("block group h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 active:scale-[0.98]", className)}>
      <div className="p-1 rounded-2xl bg-slate-100/70 ring-1 ring-slate-200/80 group-hover:ring-accent/30 group-hover:bg-orange-50/30 transition-all duration-500 h-full">
        <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-[calc(1rem-2px)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_-10px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_30px_-10px_rgba(255,106,0,0.12)] transition-all duration-500 border border-slate-200/60">
          <div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-soft text-accent mb-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:bg-accent group-hover:text-white shadow-2xs group-hover:shadow-md">
              <Icon className="w-6 h-6 stroke-[2] transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-bold font-heading text-text-primary mb-2.5 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-5 mt-5 border-t border-slate-100">
            <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Explore Capability</span>
            <span className="w-7 h-7 rounded-full bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0 shadow-2xs">
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
