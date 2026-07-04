import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbActive: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbActive,
  className,
}: PageHeroProps) {
  return (
    <section className={cn(
      "relative bg-gray-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-center",
      className
    )}>
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-2 text-xs text-gray-500 mb-6 font-semibold uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-700" />
          <span className="text-accent">{breadcrumbActive}</span>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
