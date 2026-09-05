import { projects, getProjectByCategoryAndSlug } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const project = getProjectByCategoryAndSlug(category, slug);
  if (!project) return {};

  const canonicalUrl = `https://www.tamizhtech.in/projects/${project.categorySlug}/${project.slug}`;
  const isCompleted = project.projectType === "completed";
  const titleSuffix = isCompleted ? "Completed Robotics Project | Tamizh Tech" : "Robotics Project Topic & Architecture | Tamizh Tech";
  const metaDescription = project.shortDescription || project.description;
  const ogImage = project.coverImage || "/projects/industrial-manufacturing.jpg";

  return {
    title: `${project.name} | ${titleSuffix}`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.name} | ${isCompleted ? "Verified Project Build" : "Project Topic Concept"} | Tamizh Tech`,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Tamizh Tech Robotics`,
      description: metaDescription,
      images: [ogImage],
    }
  };
}

export default async function HierarchicalProjectDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const project = getProjectByCategoryAndSlug(category, slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Projects", url: "https://www.tamizhtech.in/projects" },
    { name: project.category, url: `https://www.tamizhtech.in/projects/${project.categorySlug}` },
    { name: project.name, url: `https://www.tamizhtech.in/projects/${project.categorySlug}/${project.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProjectDetailClient project={project} />
    </>
  );
}
