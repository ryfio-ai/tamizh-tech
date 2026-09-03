"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, Monitor, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { CourseSchema } from "@/components/JsonLd";
import { getCourseUrl, getCourseCategoryUrl } from "@/lib/routing";

const categories = ["All", "School", "College", "Professionals"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? courses : courses.filter((c) => c.cat === activeCategory);

  return (
    <div>
      {courses.map((course) => (
        <CourseSchema key={course.id} course={course} />
      ))}
      {/* Hero */}
      <PageHero
        title="Courses built for every learner"
        subtitle="From school students to industry professionals — structured programs that combine theory with hands-on experience."
        breadcrumbActive="Courses"
      />

      {/* Filter tabs */}
      <section className="section bg-white py-24 text-left">
        <div className="container px-6">
          <AnimatedSection className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-accent text-white border border-accent shadow-sm"
                      : "bg-subtle border border-border text-text-secondary hover:text-accent hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" key={activeCategory}>
            {filtered.map((course) => (
              <StaggerItem key={course.id}>
                <Card className="flex flex-col justify-between h-full border border-border bg-white rounded-lg hover:border-accent/40 hover:shadow-lg transition-all duration-300 p-8">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="bg-accent-soft px-3 py-1 rounded-full text-[10px] font-bold text-accent tracking-wide uppercase">
                        {course.cat}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-text-secondary font-semibold uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                      {course.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                      {course.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 py-4 border-t border-border text-xs text-text-secondary mb-6 uppercase tracking-wider font-bold">
                      <div className="flex items-center gap-1.5">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span>{course.mode}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-accent" />
                        <span>{course.seatsLeft} Seats Left</span>
                      </div>
                    </div>
                    <Link href={getCourseUrl(course.categorySlug, course.slug)} className="block w-full">
                      <Button variant="primary" className="w-full justify-center font-bold text-white">
                        Explore Syllabus <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
