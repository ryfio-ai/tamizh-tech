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
  return null;
}
