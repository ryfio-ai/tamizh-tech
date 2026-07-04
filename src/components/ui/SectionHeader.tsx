import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean; // Set to true if background is dark, so text should be white
}

export function SectionHeader({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter ? "text-center" : "text-left", className)}>
      {tag && (
        <div className={cn("mb-4", isCenter && "flex justify-center")}>
          <span className="tag">{tag}</span>
        </div>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
        light ? "text-white" : "text-text-primary"
      )}>
        {title}{" "}
        {highlight && (
          <span className="gradient-text-blue">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
          light ? "text-gray-400" : "text-text-muted",
          isCenter ? "mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
