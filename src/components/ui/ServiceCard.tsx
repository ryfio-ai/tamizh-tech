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
    <Link href={href} className={cn("block group h-full transition-transform duration-300 hover:-translate-y-1", className)}>
      <Card className="flex flex-col justify-between h-full p-8 border border-border bg-white rounded-lg hover:border-accent/40 hover:shadow-lg transition-all duration-300">
        <div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent-soft text-accent mb-6 transition-transform duration-300 group-hover:scale-105">
            <Icon className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-xl font-bold font-heading text-text-primary mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-accent mt-6 transition-transform duration-300 group-hover:translate-x-1 uppercase tracking-wide">
          <span>Explore More</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </Card>
    </Link>
  );
}
