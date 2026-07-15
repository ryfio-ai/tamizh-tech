import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";

export async function generateStaticParams() {
  return courses.map((c) => ({
    slug: c.id,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const course = courses.find((c) => c.id === params.slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
