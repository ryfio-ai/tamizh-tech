import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  description?: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  image,
  href,
  description,
  className,
}: ProjectCardProps) {
  return (
    <Link href={href} className={cn("block group h-full", className)}>
      <Card className="p-0 overflow-hidden h-full border border-border bg-white rounded-lg hover:border-accent/40 hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-video w-full overflow-hidden bg-subtle">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-[180px]">
          <div>
            <span className="text-xs font-bold text-accent tracking-wider uppercase mb-2 block">
              {category}
            </span>
            <h3 className="text-xl font-bold font-heading text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed mb-4">
                {description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wide">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
