"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, ArrowRight, Lightbulb, CheckCircle2, Bot, Wrench, Factory, Cpu } from "lucide-react";
import { Project, ProjectType } from "@/types/project";
import { ProjectCategory } from "@/data/projectCategories";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { QuoteModal, ProjectEnquiryContext } from "@/components/forms/QuoteModal";
import { getProjectCategoryUrl } from "@/lib/routing";
import { trackMarketingEvent } from "@/lib/analytics";

interface ProjectCategoryClientProps {
  category: ProjectCategory;
  projects: Project[];
  otherCategories: ProjectCategory[];
}

export default function ProjectCategoryClient({ category, projects, otherCategories }: ProjectCategoryClientProps) {
  const [selectedType, setSelectedType] = useState<"all" | ProjectType>("all");
  const [quoteProject, setQuoteProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (!p.published) return false;
      if (selectedType !== "all" && p.projectType !== selectedType) return false;
      return true;
    });
  }, [projects, selectedType]);

  const topicCount = projects.filter((p) => p.projectType === "topic" && p.published).length;
  const completedCount = projects.filter((p) => p.projectType === "completed" && p.published).length;

  const handleDiscuss = (project: Project) => {
    trackMarketingEvent("project_discuss_open", {
      projectSlug: project.slug,
      projectCategory: project.categorySlug,
      projectType: project.projectType,
      sourcePage: `/projects/${category.slug}`,
    });
    setQuoteProject(project);
  };

  const projectContext: ProjectEnquiryContext | undefined = quoteProject
    ? {
        sourceType: "project",
        projectSlug: quoteProject.slug,
        projectName: quoteProject.name,
        projectCategory: quoteProject.category,
        projectType: quoteProject.projectType,
        sourcePage: `/projects/${quoteProject.categorySlug}/${quoteProject.slug}`,
      }
    : undefined;

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-neutral-900 font-sans">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-6 text-xs font-bold text-neutral-500 uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <Link href="/projects" className="hover:text-[#FF6B00] transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="text-[#FF6B00]">{category.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-[#FF6B00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all projects
          </Link>
        </div>

        {/* Category Hero Header */}
        <header className="mb-12 text-left bg-neutral-900 text-white p-8 sm:p-12 rounded-2xl border border-neutral-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest block mb-2">
              Engineering Domain Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-4 leading-tight">
              {category.name}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {category.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-neutral-400 uppercase">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-orange-400">
                <Lightbulb className="w-3.5 h-3.5" />
                {topicCount} Project Topics
              </span>
              {completedCount > 0 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {completedCount} Verified Builds
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Project Type Filter (if completed items exist in this category) */}
        {completedCount > 0 && (
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-neutral-100">
            <button
              type="button"
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedType === "all"
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("topic")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedType === "topic"
                  ? "bg-[#FF6B00] text-white"
                  : "bg-orange-50 border border-orange-200 text-[#FF6B00] hover:bg-orange-100"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              Project Topics ({topicCount})
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("completed")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedType === "completed"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed Projects ({completedCount})
            </button>
          </div>
        )}

        {/* Category Project Cards Grid */}
        <section aria-labelledby="category-projects-heading" className="mb-20">
          <h2 id="category-projects-heading" className="sr-only">
            Engineering Projects in {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDiscuss={handleDiscuss}
              />
            ))}
          </div>
        </section>

        {/* Relevant Commercial Services */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-12 mb-20 text-left">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest block mb-2">
            Commercial Engineering Support
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-heading text-neutral-900 mb-4">
            Need In-House Engineering Assistance for {category.shortName}?
          </h3>
          <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed mb-6 font-sans">
            Tamizh Tech provides complete contract mechanical fabrication, electronic PCB layout, and custom software architecture from our Coimbatore engineering facility.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/robotics-automation"
              className="px-4 py-2.5 rounded-lg bg-white border border-neutral-300 hover:border-[#FF6B00] text-xs font-bold uppercase tracking-wider text-neutral-800 transition-colors"
            >
              Robotics & Automation →
            </Link>
            <Link
              href="/services/laser-cutting"
              className="px-4 py-2.5 rounded-lg bg-white border border-neutral-300 hover:border-[#FF6B00] text-xs font-bold uppercase tracking-wider text-neutral-800 transition-colors"
            >
              Laser Cutting →
            </Link>
            <Link
              href="/services/pcb-design-fabrication-assembly"
              className="px-4 py-2.5 rounded-lg bg-white border border-neutral-300 hover:border-[#FF6B00] text-xs font-bold uppercase tracking-wider text-neutral-800 transition-colors"
            >
              PCB Design & Assembly →
            </Link>
          </div>
        </div>

        {/* Other Engineering Domains Navigation */}
        {otherCategories.length > 0 && (
          <nav aria-label="Other Engineering Domains" className="text-left">
            <h2 className="text-lg font-bold text-neutral-900 uppercase font-heading mb-4 tracking-tight">
              Other Engineering Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCategories.slice(0, 6).map((other) => (
                <Link
                  key={other.id}
                  href={getProjectCategoryUrl(other.slug)}
                  className="p-5 rounded-xl border border-neutral-200 hover:border-[#FF6B00] bg-white transition-all flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#FF6B00] transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {other.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Shared Lead Pipeline Modal */}
      <QuoteModal
        isOpen={Boolean(quoteProject)}
        onClose={() => setQuoteProject(null)}
        projectContext={projectContext}
      />
    </div>
  );
}
