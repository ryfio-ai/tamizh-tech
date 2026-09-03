import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft, ArrowRight, Layers, Sparkles } from "lucide-react";
import { getCategoryBySlug, getCategoriesByContentType } from "@/data/categories";
import { getProjectsByCategorySlug, getProjectBySlug, projects, Project } from "@/data/projects";
import { getProjectUrl, getProjectCategoryUrl } from "@/lib/routing";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const projectCats = getCategoriesByContentType("projects");
  const catParams = projectCats.map((cat) => ({
    category: cat.slug,
  }));
  const legacyParams = projects.map((p) => ({
    category: p.slug,
  }));
  return [...catParams, ...legacyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("projects", categorySlug);
  if (!category) {
    const legacyProject = getProjectBySlug(categorySlug);
    if (legacyProject) {
      return {
        title: `${legacyProject.title} | Tamizh Tech`,
        alternates: {
          canonical: `https://www.tamizhtech.in/projects/${legacyProject.categorySlug}/${legacyProject.slug}`,
        },
      };
    }
    return {};
  }

  const canonicalUrl = `https://www.tamizhtech.in/projects/${category.slug}`;

  return {
    title: `${category.seoTitle}`,
    description: category.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.seoTitle,
      description: category.seoDescription,
    }
  };
}

export default async function ProjectCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("projects", categorySlug);

  if (!category) {
    // Check if this was a legacy project flat slug
    const legacyProject = getProjectBySlug(categorySlug);
    if (legacyProject) {
      permanentRedirect(getProjectUrl(legacyProject.categorySlug, legacyProject.slug));
    }
    notFound();
  }

  const categoryProjects = getProjectsByCategorySlug(category.slug);
  const otherCategories = getCategoriesByContentType("projects").filter(
    (c) => c.slug !== category.slug
  );

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Projects", url: "https://www.tamizhtech.in/projects" },
    { name: category.name, url: `https://www.tamizhtech.in/projects/${category.slug}` },
  ];

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <Link href="/projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <span className="text-accent truncate">{category.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>
        </div>

        {/* Category Hero Header */}
        <header className="mb-12 text-left bg-gradient-to-r from-subtle via-white to-subtle p-8 md:p-12 rounded-3xl border border-border/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Engineering Domain
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] uppercase tracking-tight font-heading mb-4 leading-tight">
            {category.name}
          </h1>
          <p className="text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed font-sans">
            {category.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border/60 text-xs font-bold text-text-muted uppercase">
            <span>⚙️ {categoryProjects.length} Verified Deployments</span>
            <span>⚡ Custom Engineered in Coimbatore</span>
            <span>📈 Measured Production Impact</span>
          </div>
        </header>

        {/* Projects Grid */}
        <section aria-labelledby="projects-heading" className="mb-16">
          <h2 id="projects-heading" className="sr-only">Case Studies in {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {categoryProjects.map((project) => {
              const projectDetailHref = getProjectUrl(category.slug, project.slug);

              return (
                <article
                  key={project.id}
                  className="rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative w-full h-52 bg-subtle/50 overflow-hidden border-b border-border/60">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-accent text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-extrabold font-heading text-[#002B66] uppercase tracking-tight group-hover:text-accent transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[9px] font-bold text-text-muted bg-subtle px-2 py-0.5 rounded border border-border/60">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={projectDetailHref} className="block w-full">
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="w-full justify-center gap-1.5 bg-[#002B66] hover:bg-[#001D47] text-white font-black text-[11px] py-2.5 uppercase tracking-wider rounded-xl shadow-xs"
                        >
                          View Case Study <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Related Categories Navigation */}
        {otherCategories.length > 0 && (
          <nav aria-label="Other Engineering Domains" className="mb-16 text-left">
            <h2 className="text-lg font-bold text-text-primary uppercase font-heading mb-4 tracking-tight">
              Other Project Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={getProjectCategoryUrl(other.slug)}
                  className="p-5 rounded-2xl border border-border hover:border-accent/40 bg-white hover:bg-subtle/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#002B66] group-hover:text-accent uppercase transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-1 mt-0.5">
                      {other.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </nav>
        )}

      </div>
    </div>
  );
}
