import React from "react";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft, ArrowRight, Clock, Globe, Sparkles, BookOpen } from "lucide-react";
import { getCategoryBySlug, getCategoriesByContentType } from "@/data/categories";
import { getCoursesByCategorySlug, getCourseBySlug, courses, Course } from "@/data/courses";
import { getCourseUrl, getCourseCategoryUrl } from "@/lib/routing";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const courseCats = getCategoriesByContentType("courses");
  const catParams = courseCats.map((cat) => ({
    category: cat.slug,
  }));
  const legacyParams = courses.map((c) => ({
    category: c.id,
  }));
  return [...catParams, ...legacyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("courses", categorySlug);
  if (!category) {
    const legacyCourse = getCourseBySlug(categorySlug);
    if (legacyCourse) {
      return {
        title: `${legacyCourse.title} | Tamizh Tech`,
        alternates: {
          canonical: `https://www.tamizhtech.in/courses/${legacyCourse.categorySlug}/${legacyCourse.slug}`,
        },
      };
    }
    return {};
  }

  const canonicalUrl = `https://www.tamizhtech.in/courses/${category.slug}`;

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

export default async function CourseCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("courses", categorySlug);

  if (!category) {
    // Check if this was a legacy course flat slug
    const legacyCourse = getCourseBySlug(categorySlug);
    if (legacyCourse) {
      permanentRedirect(getCourseUrl(legacyCourse.categorySlug, legacyCourse.slug));
    }
    notFound();
  }

  const categoryCourses = getCoursesByCategorySlug(category.slug);
  const otherCategories = getCategoriesByContentType("courses").filter(
    (c) => c.slug !== category.slug
  );

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Courses", url: "https://www.tamizhtech.in/courses" },
    { name: category.name, url: `https://www.tamizhtech.in/courses/${category.slug}` },
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
          <Link href="/courses" className="hover:text-accent transition-colors">
            Courses
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <span className="text-accent truncate">{category.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all courses
          </Link>
        </div>

        {/* Category Hero Header */}
        <header className="mb-12 text-left bg-gradient-to-r from-subtle via-white to-subtle p-8 md:p-12 rounded-3xl border border-border/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Training Track
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] uppercase tracking-tight font-heading mb-4 leading-tight">
            {category.name}
          </h1>
          <p className="text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed font-sans">
            {category.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border/60 text-xs font-bold text-text-muted uppercase">
            <span>🎓 {categoryCourses.length} Structured Programs</span>
            <span>⚡ Practical Hands-on Labs</span>
            <span>🏆 Industry-Recognized Certification</span>
          </div>
        </header>

        {/* Courses Grid */}
        <section aria-labelledby="courses-heading" className="mb-16">
          <h2 id="courses-heading" className="sr-only">Available {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {categoryCourses.map((course) => {
              const courseDetailHref = getCourseUrl(category.slug, course.slug);

              return (
                <article
                  key={course.id}
                  className="rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group p-6 space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-accent uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10">
                        {course.mode}
                      </span>
                      <span className="text-xs font-bold text-text-muted flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold font-heading text-[#002B66] uppercase tracking-tight group-hover:text-accent transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 space-y-3 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-text-muted uppercase block">Course Fee</span>
                        <span className="text-base font-black text-accent">{course.price}</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        {course.seatsLeft} seats left
                      </span>
                    </div>

                    <Link href={courseDetailHref} className="block w-full">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-full justify-center gap-1.5 bg-[#002B66] hover:bg-[#001D47] text-white font-black text-[11px] py-2.5 uppercase tracking-wider rounded-xl shadow-xs"
                      >
                        Explore Curriculum <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Related Categories Navigation */}
        {otherCategories.length > 0 && (
          <nav aria-label="Related Training Tracks" className="mb-16 text-left">
            <h2 className="text-lg font-bold text-text-primary uppercase font-heading mb-4 tracking-tight">
              Other Training Tracks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={getCourseCategoryUrl(other.slug)}
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
