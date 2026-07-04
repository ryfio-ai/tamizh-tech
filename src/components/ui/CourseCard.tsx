import React from "react";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  duration: string;
  level: string;
  lessons: string;
  description: string;
  href: string;
  className?: string;
}

export function CourseCard({
  title,
  duration,
  level,
  lessons,
  description,
  href,
  className,
}: CourseCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full hover:border-accent/20 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]", className)}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="bg-accent/5 px-3 py-1 rounded-full text-xs font-bold text-accent tracking-wide uppercase">
            {level}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-4 py-4 border-t border-border/60 text-xs text-text-muted mb-6">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} Lessons</span>
          </div>
          <div>• Practical Labs Included</div>
        </div>
        <Link href={href} className="block w-full">
          <Button variant="secondary" className="w-full justify-center group/btn">
            View Syllabus 
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
