import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { b2bSolutions } from "@/data/b2bSolutions";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";

const solution = b2bSolutions["industries"];

export const metadata: Metadata = {
  title: solution.seo.title,
  description: solution.seo.description,
  keywords: solution.seo.keywords,
  alternates: {
    canonical: solution.seo.canonical,
  },
  openGraph: {
    title: solution.seo.title,
    description: solution.seo.description,
    url: solution.seo.canonical,
    siteName: "Tamizh Tech Robotics Company",
    images: [
      {
        url: solution.hero.image,
        width: 1200,
        height: 630,
        alt: solution.hero.imageAlt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function IndustriesSolutionPage() {
  if (!solution) return notFound();
  return <SolutionPageTemplate solution={solution} />;
}
