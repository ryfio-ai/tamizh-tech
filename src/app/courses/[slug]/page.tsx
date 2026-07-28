import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";

export async function generateStaticParams() {
  return courses.map((c) => ({
    slug: c.id,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
