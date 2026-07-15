"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";

const categories = ["All", "Robotics", "Artificial Intelligence", "Drone Technology"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(proj => proj.category.includes(activeCategory) || proj.title.includes(activeCategory));

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Advanced Hardware & AI Deployments"
        subtitle="Discover our catalog of on-site industrial setups, laboratory research models, and creative student prototype builds."
        breadcrumbActive="Projects"
      />

      {/* Main Content */}
      <section className="section bg-white py-24 text-left">
        <div className="container px-6">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-accent text-white border border-accent shadow-sm"
                    : "bg-subtle border border-border text-text-secondary hover:text-accent hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Projects */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={activeCategory}>
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.coverImage}
                  href={`/projects/${project.id}`}
                  description={project.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>
    </div>
  );
}
