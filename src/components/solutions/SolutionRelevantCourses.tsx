import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, MapPin } from "lucide-react";
import { Course } from "@/data/courses";

interface SolutionRelevantCoursesProps {
  courses: Course[];
  onOpenQuote: (serviceSlug?: string) => void;
  onCourseClick: (courseSlug: string, courseTitle: string) => void;
}

export function SolutionRelevantCourses({
  courses,
  onOpenQuote,
  onCourseClick,
}: SolutionRelevantCoursesProps) {
  if (!courses || courses.length === 0) return null;

  return (
    <section id="solutions-courses" className="py-14 sm:py-20 bg-white border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Structured Training Modules</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Relevant Courses & Training Programs
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Curriculum-aligned training tracks conducted offline at our Coimbatore lab or directly on campus.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => {
            const courseHref = `/courses/${course.categorySlug}`;

            return (
              <div
                key={course.id}
                className="group bg-neutral-50/70 rounded-2xl border border-neutral-200 p-6 sm:p-7 hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded bg-orange-100/70 text-[#FF6B00] text-xs font-semibold">
                      {course.cat} Track
                    </span>
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {course.mode}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover:text-[#FF6B00] transition-colors mb-2">
                    <Link
                      href={courseHref}
                      onClick={() => onCourseClick(course.slug, course.title)}
                    >
                      {course.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {course.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-200/70 mb-6">
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Key Syllabus Modules:
                    </div>
                    {course.syllabus.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between">
                  <div className="text-sm font-bold text-neutral-900">
                    {course.price}
                  </div>

                  <Link
                    href={courseHref}
                    onClick={() => onCourseClick(course.slug, course.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                  >
                    <span>Explore Course Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
