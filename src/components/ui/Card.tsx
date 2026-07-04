import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "subtle";
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-all duration-300",
        {
          "bg-white border-border shadow-sm": variant === "default",
          "bg-white/5 backdrop-blur-xl border-white/10 text-white": variant === "glass",
          "bg-subtle border-border/50": variant === "subtle",
          "hover:shadow-md hover:border-border-hover hover:-translate-y-1": hover && variant !== "glass",
          "hover:bg-white/8 hover:border-white/20 hover:-translate-y-1": hover && variant === "glass",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
