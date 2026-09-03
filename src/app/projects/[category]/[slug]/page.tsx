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

  return {
    title: `${project.title} | ${project.category} Project | Tamizh Tech`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Tamizh Tech Robotics`,
      description: project.description,
      url: canonicalUrl,
      type: "website",
      images: [{ url: project.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Tamizh Tech Robotics`,
      description: project.description,
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
    { name: project.title, url: `https://www.tamizhtech.in/projects/${project.categorySlug}/${project.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProjectDetailClient project={project} />
    </>
  );
}
