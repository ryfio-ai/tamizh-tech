"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, Monitor, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const categories = ["All", "School", "College", "Professionals", "Faculty", "Summer Camp"];

const courses = [
  { cat: "School",        title: "Robotics for Schools",         duration: "3 months", mode: "Offline", students: 30, desc: "Hands-on robotics program for school students (Grade 6–12). Build, program, and compete." },
  { cat: "School",        title: "STEM Basics",                  duration: "1 month",  mode: "Online",  students: 50, desc: "Introduction to STEM concepts through fun activities and mini-projects." },
  { cat: "College",       title: "Embedded Systems",             duration: "2 months", mode: "Offline", students: 25, desc: "Deep dive into microcontrollers, RTOS, and firmware development for engineering students." },
  { cat: "College",       title: "AI & Machine Learning",        duration: "3 months", mode: "Hybrid",  students: 30, desc: "From Python basics to deploying ML models — complete AI course for college students." },
  { cat: "College",       title: "Drone Engineering",            duration: "6 weeks",  mode: "Offline", students: 20, desc: "Design, build, and fly a custom UAV. Covers aerodynamics, electronics, and flight control." },
  { cat: "Professionals", title: "Industrial Automation (PLC)",  duration: "45 days",  mode: "Offline", students: 15, desc: "Industry-grade PLC, SCADA, and industrial automation for working professionals." },
  { cat: "Professionals", title: "Computer Vision with Python",  duration: "30 days",  mode: "Online",  students: 40, desc: "OpenCV, object detection, and deep learning-based vision systems for engineers." },
  { cat: "Faculty",       title: "Faculty Development Program",  duration: "5 days",   mode: "Offline", students: 20, desc: "Upskill faculty with modern robotics and AI pedagogy, tools, and lab practices." },
  { cat: "Summer Camp",   title: "Robotics Summer Camp",         duration: "2 weeks",  mode: "Offline", students: 40, desc: "Intensive summer camp where students design, build, and compete with their own robots." },
  { cat: "Summer Camp",   title: "AI Explorer Camp",             duration: "2 weeks",  mode: "Hybrid",  students: 35, desc: "Explore AI, chatbots, computer vision, and ML through hands-on summer projects." },
];

export default function CoursesPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter((c) => c.cat === active);

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Courses built for every learner"
        subtitle="From school students to industry professionals — structured programs that combine theory with hands-on experience."
        breadcrumbActive="Courses"
      />

      {/* Filter tabs */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    active === cat
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-subtle border border-border text-text-secondary hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" key={active}>
            {filtered.map((course) => (
              <StaggerItem key={course.title}>
                <Card className="flex flex-col justify-between h-full hover:border-accent/20 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="bg-accent/5 px-3 py-1 rounded-full text-xs font-bold text-accent tracking-wide uppercase">
                        {course.cat}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {course.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {course.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 py-4 border-t border-border/60 text-xs text-text-muted mb-6">
                      <div className="flex items-center gap-1.5">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span>{course.mode}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-accent" />
                        <span>{course.students} Seats</span>
                      </div>
                    </div>
                    <Link href="/contact" className="block w-full">
                      <Button variant="primary" className="w-full justify-center">
                        Register Now <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-subtle py-20 border-t border-border/30">
        <div className="container px-6 text-center">
          <AnimatedSection className="max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">Custom training for your team?</h2>
            <p className="text-text-muted mb-8 leading-relaxed">We design corporate training programs tailored to your team&apos;s needs.</p>
            <Link href="/contact">
              <Button variant="primary">
                Talk to Us <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
