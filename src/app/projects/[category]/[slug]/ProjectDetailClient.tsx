"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Check } from "lucide-react";
import { Project } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

import { getProjectCategoryUrl } from "@/lib/routing";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-6 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <Link href={getProjectCategoryUrl(project.categorySlug)} className="hover:text-accent transition-colors">{project.category}</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <span className="text-accent truncate max-w-[200px]">{project.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href={getProjectCategoryUrl(project.categorySlug)} className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {project.category} Projects
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="text-left max-w-4xl mb-12">
          <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-text-primary mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-text-secondary text-base leading-relaxed font-sans mt-4">
            {project.description}
          </p>
        </div>

        {/* Verified Metrics Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {project.metrics.map((m, idx) => (
            <Card key={idx} className="border border-border bg-subtle p-6 rounded-lg text-center shadow-xs">
              <span className="text-3xl sm:text-4xl font-black font-heading text-accent block mb-1">
                {m.value}
              </span>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                {m.label}
              </span>
            </Card>
          ))}
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border mb-16 bg-subtle">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Case Study Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mb-16">
          {/* Problem */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-lg text-[10px] font-bold uppercase tracking-wider">
              The Challenge
            </div>
            <h2 className="text-2xl font-black font-heading uppercase text-text-primary">
              Core Problem
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-green-50 text-green-600 border border-green-100 rounded-lg text-[10px] font-bold uppercase tracking-wider">
              The Engineering Result
            </div>
            <h2 className="text-2xl font-black font-heading uppercase text-text-primary">
              Implemented Solution
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack used */}
        <div className="border-t border-border pt-12 mb-16 text-left">
          <h3 className="text-xl font-bold font-heading uppercase mb-6 text-text-primary">
            Technology Stack & Avionics
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="bg-subtle border border-border text-text-secondary text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="border-t border-border pt-12 text-left">
            <h3 className="text-xl font-bold font-heading uppercase mb-6 text-text-primary">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <div 
                  key={idx}
                  className="relative aspect-video rounded-lg overflow-hidden border border-border cursor-pointer group bg-subtle"
                  onClick={() => setActiveImageIdx(idx)}
                >
                  <Image 
                    src={img} 
                    alt={`Project Gallery ${idx + 1}`}
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-accent text-white text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
                      Zoom
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
