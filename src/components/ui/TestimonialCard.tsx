import React from "react";
import { Star } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  quote,
  avatar,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] border-border/80", className)}>
      <div>
        <div className="flex gap-1 mb-5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-base text-text-secondary italic leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-5 border-t border-border/40">
        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-sm shrink-0">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-text-primary text-sm leading-tight">
            {name}
          </h4>
          <p className="text-xs text-text-muted mt-0.5">
            {role}
          </p>
        </div>
      </div>
    </Card>
  );
}
