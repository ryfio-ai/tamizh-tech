"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronRight, CheckCircle2, Lightbulb, ArrowRight, Wrench, MessageSquare, Bot, Cpu, Factory, Zap, Eye, Sprout, HeartPulse, Boxes, HardHat, ShieldAlert, Store, Binary } from "lucide-react";
import { Project, ProjectType } from "@/types/project";
import { ProjectCategory } from "@/data/projectCategories";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { QuoteModal, ProjectEnquiryContext } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

interface ProjectsClientProps {
  initialProjects: Project[];
  categories: ProjectCategory[];
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Factory,
  Zap,
  Eye,
  Sprout,
  HeartPulse,
  Boxes,
  HardHat,
  ShieldAlert,
  Store,
  Binary,
};

export default function ProjectsClient({ initialProjects, categories }: ProjectsClientProps) {
  const [selectedType, setSelectedType] = useState<"all" | ProjectType>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [quoteProject, setQuoteProject] = useState<Project | null>(null);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      if (!project.published) return false;

      // Type filter
      if (selectedType !== "all" && project.projectType !== selectedType) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && project.categorySlug !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDesc = (project.shortDescription || project.description).toLowerCase().includes(query);
        const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = project.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesTech && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, selectedType, selectedCategory, searchQuery]);

  const completedCount = initialProjects.filter((p) => p.projectType === "completed" && p.published).length;
  const topicCount = initialProjects.filter((p) => p.projectType === "topic" && p.published).length;

  const handleDiscuss = (project: Project) => {
    trackMarketingEvent("project_discuss_open", {
      projectSlug: project.slug,
      projectCategory: project.categorySlug,
      projectType: project.projectType,
      sourcePage: "/projects",
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
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-8 text-xs font-bold text-neutral-500 uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="text-[#FF6B00]">Projects Hub</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-neutral-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            Tamizh Tech Projects Platform
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-neutral-900 mb-4 leading-tight">
            ROBOTS. AUTOMATION. ENGINEERING.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            Explore robotics and automation project topics across multiple engineering domains, alongside verified projects built by Tamizh Tech.
          </p>

          {/* Clarity Architecture Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 text-[#FF6B00]">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-0.5">
                  Project Topics ({topicCount})
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Engineering concepts, potential architectures, and technical exploration. Designed for discovery and research direction.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 block mb-0.5">
                  Completed Projects ({completedCount})
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Verified robotic systems engineered, fabricated, and validated in-house by Tamizh Tech with genuine deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Type Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-neutral-100">
          <button
            type="button"
            onClick={() => setSelectedType("all")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedType === "all"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"
            }`}
          >
            All Projects ({initialProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("topic")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedType === "topic"
                ? "bg-[#FF6B00] text-white shadow-xs"
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
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed Projects ({completedCount})
          </button>
        </div>

        {/* Engineering Domains Horizontal Navigation */}
        <div className="mb-8">
          <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-3 text-left">
            Explore By Engineering Domain
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              All Domains
            </button>
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.iconName] || Bot;
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#FF6B00] text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search robotics project topics by technology, sensor, or domain (e.g. SLAM, ROS 2, LiDAR, In-pipe, AMR)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#FF6B00] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-neutral-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results Count & Current Active Filters */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-500">
          <span>Showing {filteredProjects.length} results</span>
          {(selectedType !== "all" || selectedCategory !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedType("all");
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[#FF6B00] font-bold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDiscuss={handleDiscuss}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-neutral-300 rounded-2xl mb-20 bg-neutral-50">
            <Bot className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-900 mb-1">No Projects Found</h3>
            <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
              No matching project topics found for the current search query and category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedType("all");
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-neutral-900 hover:bg-[#FF6B00] transition-colors uppercase tracking-wider"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Custom Engineering Banner CTA */}
        <div className="rounded-2xl bg-neutral-900 text-white p-8 sm:p-12 mb-20 text-left relative overflow-hidden border border-neutral-800">
          <div className="max-w-2xl relative z-10">
            <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest block mb-2">
              Bespoke Engineering & Prototyping
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading mb-4 leading-tight">
              Have a Custom Robotics or Automation Requirement?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need to turn a project concept into a functional mechanical prototype or deploy an industrial PLC line, our engineering lab in Coimbatore provides full turnkey fabrication and firmware development.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  trackMarketingEvent("project_discuss_open", {
                    projectSlug: "custom-inquiry",
                    projectCategory: "custom-engineering",
                    projectType: "topic",
                    sourcePage: "/projects",
                  });
                  setQuoteProject({
                    id: "custom-requirement",
                    slug: "custom-requirement",
                    category: "Custom Engineering",
                    categorySlug: "custom-engineering",
                    name: "Custom Robotics / Automation Requirement",
                    projectType: "topic",
                    shortDescription: "Custom engineering requirement submission",
                    description: "Bespoke engineering requirement submission",
                    technologies: ["Robotics", "Automation"],
                    applications: ["Industry", "Research"],
                    published: true,
                    indexable: false,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                  });
                }}
                className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                Discuss Your Project
              </button>
              <Link
                href="/services/robotics-automation"
                className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Explore Robotics Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Commercial Services Link Grid */}
        <div className="border-t border-neutral-200 pt-16 text-left">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            In-House Manufacturing Capabilities
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-heading text-neutral-900 mb-8">
            How Tamizh Tech Supports These Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services/robotics-automation"
              className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-[#FF6B00] transition-all group"
            >
              <Bot className="w-6 h-6 text-[#FF6B00] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm text-neutral-900 mb-1">Robotics & Automation</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">Turnkey autonomous systems, kinematic manipulators, and embedded firmware.</p>
            </Link>

            <Link
              href="/services/laser-cutting"
              className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-[#FF6B00] transition-all group"
            >
              <Factory className="w-6 h-6 text-[#FF6B00] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm text-neutral-900 mb-1">Laser Cutting (SS Metal)</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">Precision fiber laser cutting for aluminum brackets, robot chassis, and enclosures.</p>
            </Link>

            <Link
              href="/services/3d-printing"
              className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-[#FF6B00] transition-all group"
            >
              <Wrench className="w-6 h-6 text-[#FF6B00] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm text-neutral-900 mb-1">3D Rapid Prototyping</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">High-precision functional enclosures, gear housings, and custom jigs.</p>
            </Link>

            <Link
              href="/services/pcb-design-fabrication-assembly"
              className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-[#FF6B00] transition-all group"
            >
              <Cpu className="w-6 h-6 text-[#FF6B00] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm text-neutral-900 mb-1">PCB Design & Assembly</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">Schematic capture, multi-layer routing, component sourcing, and SMT assembly.</p>
            </Link>
          </div>
        </div>
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
