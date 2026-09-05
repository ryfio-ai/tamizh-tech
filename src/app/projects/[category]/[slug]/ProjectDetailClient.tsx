"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, CheckCircle2, Lightbulb, MessageSquare, Wrench, ShieldAlert, Cpu, Bot, Check, Layers } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Project } from "@/types/project";
import { QuoteModal, ProjectEnquiryContext } from "@/components/forms/QuoteModal";
import { getProjectCategoryUrl } from "@/lib/routing";
import { trackMarketingEvent } from "@/lib/analytics";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const isCompleted = project.projectType === "completed";

  const handleDiscuss = () => {
    trackMarketingEvent("project_discuss_open", {
      projectSlug: project.slug,
      projectCategory: project.categorySlug,
      projectType: project.projectType,
      sourcePage: `/projects/${project.categorySlug}/${project.slug}`,
    });
    setIsQuoteOpen(true);
  };

  const handleWhatsApp = () => {
    trackMarketingEvent("project_whatsapp_click", {
      projectSlug: project.slug,
      projectCategory: project.categorySlug,
      projectType: project.projectType,
      sourcePage: `/projects/${project.categorySlug}/${project.slug}`,
    });
    const text = encodeURIComponent(
      `Hello Tamizh Tech Engineering Team, I am interested in discussing your project: "${project.name}" (${isCompleted ? "Completed Project" : "Project Topic"}). Page: https://www.tamizhtech.in/projects/${project.categorySlug}/${project.slug}`
    );
    window.open(`https://wa.me/919361661667?text=${text}`, "_blank");
  };

  const projectContext: ProjectEnquiryContext = {
    sourceType: "project",
    projectSlug: project.slug,
    projectName: project.name,
    projectCategory: project.category,
    projectType: project.projectType,
    sourcePage: `/projects/${project.categorySlug}/${project.slug}`,
  };

  const coverSrc = project.coverImage || (isCompleted ? "/product/race/race1.png" : "/projects/industrial-manufacturing.jpg");

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-neutral-900 font-sans">
      <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-6 text-xs font-bold text-neutral-500 uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <Link href="/projects" className="hover:text-[#FF6B00] transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <Link href={getProjectCategoryUrl(project.categorySlug)} className="hover:text-[#FF6B00] transition-colors">
            {project.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="text-[#FF6B00] truncate max-w-[220px]">{project.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link
            href={getProjectCategoryUrl(project.categorySlug)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-[#FF6B00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {project.category}
          </Link>
        </div>

        {/* Header Area */}
        <div className="text-left mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            {isCompleted ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-500/50 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                COMPLETED PROJECT
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-orange-400 border border-orange-500/40 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                <Lightbulb className="w-3 h-3 text-orange-400" />
                PROJECT TOPIC
              </span>
            )}
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-neutral-900 mb-4 leading-tight">
            {project.name}
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            {project.description || project.shortDescription}
          </p>
        </div>

        {/* Hero Visual Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 mb-12 shadow-xs">
          <Image
            src={coverSrc}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Why This Project? */}
        {project.whyThisProject && (
          <section className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 mb-12 text-left">
            <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-1">
              Engineering Rationale
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-heading text-neutral-900 mb-4">
              {project.whyThisProject.heading}
            </h2>
            <ul className="space-y-2.5">
              {project.whyThisProject.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Problem vs Concept Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          {/* Problem / Objective */}
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white">
            <span className="inline-block px-2.5 py-1 rounded bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold uppercase tracking-wider mb-3">
              The Engineering Challenge
            </span>
            <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">
              Problem / Objective
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {project.problem || project.objective}
            </p>
          </div>

          {/* System Concept */}
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white">
            <span className="inline-block px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider mb-3">
              Conceptual Signal Flow
            </span>
            <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">
              System Concept
            </h3>
            <p className="text-sm font-mono text-neutral-700 bg-neutral-50 p-3 rounded-lg border border-neutral-200 leading-relaxed">
              {project.concept || "Sensors → Microcontroller / AI → Processing → Actuation"}
            </p>
          </div>
        </div>

        {/* Architecture Modules */}
        {project.architectureModules && project.architectureModules.length > 0 && (
          <section className="border-t border-neutral-200 pt-10 mb-12 text-left">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest block mb-2">
              Modular Breakdown
            </span>
            <h2 className="text-2xl font-black font-heading text-neutral-900 mb-6">
              Architecture Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.architectureModules.map((mod, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-neutral-200 text-neutral-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium text-neutral-800">{mod}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hardware & Software Stacks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
          {/* Hardware */}
          {project.hardware && project.hardware.length > 0 && (
            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-2 mb-4 text-neutral-900">
                <Cpu className="w-5 h-5 text-[#FF6B00]" />
                <h3 className="text-base font-bold uppercase tracking-wide">Hardware Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.hardware.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Software / Technologies */}
          <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <div className="flex items-center gap-2 mb-4 text-neutral-900">
              <Bot className="w-5 h-5 text-[#FF6B00]" />
              <h3 className="text-base font-bold uppercase tracking-wide">Technologies & Software</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold">
                  {tech}
                </span>
              ))}
              {project.software && project.software.map((sw, idx) => (
                <span key={`sw-${idx}`} className="px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-semibold">
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Considerations */}
        {project.engineeringConsiderations && project.engineeringConsiderations.length > 0 && (
          <section className="p-6 sm:p-8 rounded-2xl border border-amber-200 bg-amber-50/50 mb-12 text-left">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <h3 className="text-base font-bold uppercase tracking-wide">Engineering Considerations & Edge Cases</h3>
            </div>
            <ul className="space-y-2">
              {project.engineeringConsiderations.map((c, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-amber-900/90 leading-relaxed list-disc list-inside">
                  {c}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Potential Applications */}
        {project.applications && project.applications.length > 0 && (
          <section className="border-t border-neutral-200 pt-10 mb-12 text-left">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest block mb-2">
              Industry Use Cases
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-heading text-neutral-900 mb-4">
              Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.applications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-white text-xs font-semibold text-neutral-800">
                  {app}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Primary Action Buttons */}
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900 text-white text-left mb-16 border border-neutral-800">
          <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest block mb-2">
            Engineering Inquiry & Collaboration
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading mb-4">
            Interested in Developing this Architecture?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            Connect directly with Tamizh Tech engineers in Coimbatore to discuss mechanical fabrication, sensor selection, firmware implementation, or turnkey system commissioning.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleDiscuss}
              className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss This Project
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp Engineering Team
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        projectContext={projectContext}
      />
    </div>
  );
}
