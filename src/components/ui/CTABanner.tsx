import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function CTABanner({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
}: CTABannerProps) {
  return (
    <div className={cn(
      "relative rounded-3xl bg-gray-950 p-8 md:p-16 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8",
      className
    )}>
      {/* background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent.teal/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {title}
        </h2>
        <p className="text-base text-gray-400 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto justify-center">
        <Link href={primaryCtaHref} className="w-full sm:w-auto">
          <Button variant="primary" className="w-full justify-center">
            {primaryCtaText} <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Link>
        {secondaryCtaText && secondaryCtaHref && (
          <Link href={secondaryCtaHref} className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full justify-center bg-white/10 text-white border-white/10 hover:bg-white/15">
              {secondaryCtaText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
