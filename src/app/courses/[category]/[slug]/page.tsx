import { courses, getCourseByCategoryAndSlug } from "@/data/courses";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";
import { CourseSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({
    category: c.categorySlug,
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const course = getCourseByCategoryAndSlug(category, slug);
  if (!course) return {};

  const canonicalUrl = `https://www.tamizhtech.in/courses/${course.categorySlug}/${course.slug}`;

  return {
    title: `${course.title} | ${course.cat} Robotics Course Coimbatore | Tamizh Tech`,
    description: course.desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${course.title} | Tamizh Tech Robotics`,
      description: course.desc,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Tamizh Tech Robotics`,
      description: course.desc,
    }
  };
}

export default async function HierarchicalCourseDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const course = getCourseByCategoryAndSlug(category, slug);

  if (!course) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Courses", url: "https://www.tamizhtech.in/courses" },
    { name: course.cat, url: `https://www.tamizhtech.in/courses/${course.categorySlug}` },
    { name: course.title, url: `https://www.tamizhtech.in/courses/${course.categorySlug}/${course.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CourseSchema course={course} />
      <CourseDetailClient course={course} />
    </>
  );
}
