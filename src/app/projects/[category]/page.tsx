import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { projectCategories, getProjectCategoryBySlug } from "@/data/projectCategories";
import { getProjectsByCategorySlug, getProjectBySlug, projects } from "@/data/projects";
import { getProjectUrl } from "@/lib/routing";
import { BreadcrumbSchema } from "@/components/JsonLd";
import ProjectCategoryClient from "./ProjectCategoryClient";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const catParams = projectCategories.map((cat) => ({
    category: cat.slug,
  }));
  const legacyParams = projects.map((p) => ({
    category: p.slug,
  }));
  return [...catParams, ...legacyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getProjectCategoryBySlug(categorySlug);
  if (!category) {
    const legacyProject = getProjectBySlug(categorySlug);
    if (legacyProject) {
      return {
        title: `${legacyProject.name} | Tamizh Tech`,
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
    },
  };
}

export default async function ProjectCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getProjectCategoryBySlug(categorySlug);

  if (!category) {
    // Check if this was a legacy project flat slug
    const legacyProject = getProjectBySlug(categorySlug);
    if (legacyProject) {
      permanentRedirect(getProjectUrl(legacyProject.categorySlug, legacyProject.slug));
    }
    notFound();
  }

  const categoryProjects = getProjectsByCategorySlug(category.slug);
  const otherCategories = projectCategories.filter((c) => c.slug !== category.slug);

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Projects", url: "https://www.tamizhtech.in/projects" },
    { name: category.name, url: `https://www.tamizhtech.in/projects/${category.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProjectCategoryClient
        category={category}
        projects={categoryProjects}
        otherCategories={otherCategories}
      />
    </>
  );
}
