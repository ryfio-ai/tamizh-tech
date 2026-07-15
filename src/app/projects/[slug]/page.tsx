import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
