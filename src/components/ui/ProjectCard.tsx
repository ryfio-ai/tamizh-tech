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
    <Link href={href} className={cn("block group", className)}>
      <Card className="p-0 overflow-hidden h-full hover:border-accent/20 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-subtle">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-accent tracking-wide uppercase shadow-sm">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-text-muted line-clamp-2 leading-relaxed mb-4">
              {description}
            </p>
          )}
          <div className="flex items-center gap-1.5 text-sm font-semibold text-text-primary group-hover:text-accent transition-colors mt-auto">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
