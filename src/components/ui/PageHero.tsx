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
      "relative bg-subtle pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border text-center overflow-hidden",
      className
    )}>
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-6">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-2 text-xs text-text-muted mb-6 font-bold uppercase tracking-wider">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-text-subtle" />
          <span className="text-accent">{breadcrumbActive}</span>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] uppercase">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
