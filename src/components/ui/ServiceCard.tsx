import React from "react";
import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
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
    <Link href={href} className={cn("block group h-full", className)}>
      <Card className="flex flex-col justify-between h-full p-8 hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(251,113,21,0.15)]">
        <div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 text-accent mb-5 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-accent mt-6 transition-transform duration-300 group-hover:translate-x-1">
          <span>Explore More</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </Card>
    </Link>
  );
}
