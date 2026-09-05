import React from "react";
import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { projects } from "@/data/projects";
import { projectCategories } from "@/data/projectCategories";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Robotics & Automation Projects Platform | Tamizh Tech",
  description: "Explore 105 robotics and automation project topics across 10 engineering domains, alongside verified completed robotics projects engineered by Tamizh Tech in Coimbatore.",
  alternates: {
    canonical: "https://www.tamizhtech.in/projects",
  },
  openGraph: {
    title: "Robotics & Automation Projects Platform | Tamizh Tech",
    description: "Explore engineering concepts and verified robotics systems built by Tamizh Tech Robotics Company.",
    url: "https://www.tamizhtech.in/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotics & Automation Projects Platform | Tamizh Tech",
    description: "Explore engineering project topics across 10 domains alongside verified Tamizh Tech builds.",
  },
};

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Projects", url: "https://www.tamizhtech.in/projects" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProjectsClient initialProjects={projects} categories={projectCategories} />
    </>
  );
}
