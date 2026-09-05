"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, CheckCircle2, Lightbulb } from "lucide-react";
import { Project } from "@/types/project";
import { getProjectUrl } from "@/lib/routing";

interface ProjectCardProps {
  project: Project;
  onDiscuss?: (project: Project) => void;
  className?: string;
}

export function ProjectCard({ project, onDiscuss, className }: ProjectCardProps) {
  const isCompleted = project.projectType === "completed";
  const projectHref = getProjectUrl(project.categorySlug, project.slug);
  const imageSrc = project.coverImage || (isCompleted ? "/product/race/race1.png" : "/pic/3d printing.jpg");

  return (
    <div
      className={`group flex flex-col justify-between h-full bg-white rounded-xl border transition-all duration-300 ${
        isCompleted
          ? "border-emerald-200/80 hover:border-emerald-500 hover:shadow-md"
          : "border-border hover:border-[#FF6B00]/60 hover:shadow-md"
      } ${className || ""}`}
    >
      {/* Top Visual Area */}
      <div>
        <Link href={projectHref} className="block relative aspect-video w-full rounded-t-xl overflow-hidden bg-subtle">
          <Image
            src={imageSrc}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            {isCompleted ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                COMPLETED PROJECT
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900/90 text-orange-400 border border-orange-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-xs">
                <Lightbulb className="w-3 h-3 text-orange-400" />
                PROJECT TOPIC
              </span>
            )}
          </div>
        </Link>

        {/* Card Body */}
        <div className="p-5 sm:p-6 text-left">
          {/* Category Tag */}
          <span className="text-[#FF6B00] font-bold text-[11px] uppercase tracking-wider block mb-2">
            {project.category}
          </span>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold font-heading text-neutral-900 mb-2.5 line-clamp-2 leading-snug group-hover:text-[#FF6B00] transition-colors">
            <Link href={projectHref}>{project.name}</Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription || project.description}
          </p>

          {/* Technology Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-semibold tracking-tight"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-0.5 text-[10px] font-semibold text-neutral-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-neutral-100 flex items-center justify-between gap-3 mt-auto">
        <Link
          href={projectHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-[#FF6B00] transition-colors uppercase tracking-wider"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        {onDiscuss && (
          <button
            type="button"
            onClick={() => onDiscuss(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#FF6B00] bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors uppercase tracking-wide cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discuss</span>
          </button>
        )}
      </div>
    </div>
  );
}
