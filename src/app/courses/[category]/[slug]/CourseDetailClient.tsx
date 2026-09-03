"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen, 
  ArrowLeft, 
  ChevronDown, 
  Globe 
} from "lucide-react";
import { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

import { getCourseCategoryUrl } from "@/lib/routing";
import { ChevronRight } from "lucide-react";

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [openSyllabusIndex, setOpenSyllabusIndex] = useState<number | null>(0);
  const [enrollForm, setEnrollForm] = useState({
    name: "",
    email: "",
    phone: "",
    mode: course.mode,
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const courseUrl = `https://www.tamizhtech.in/courses/${course.categorySlug}/${course.slug}`;
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "Course Enquiry",
          source: "Course Detail Page",
          pageUrl: courseUrl,
          customerName: enrollForm.name,
          email: enrollForm.email,
          phone: enrollForm.phone,
          courseName: course.title,
          courseCategory: course.cat,
          courseUrl: courseUrl,
          requirement: `Preferred Mode: ${enrollForm.mode}`,
          message: enrollForm.notes,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setLeadId(data.leadId || "");
      } else {
        alert(data.error || "Failed to submit enrollment request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit enrollment request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-6 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <Link href="/courses" className="hover:text-accent transition-colors">Courses</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <Link href={getCourseCategoryUrl(course.categorySlug)} className="hover:text-accent transition-colors">{course.cat}</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <span className="text-accent truncate max-w-[200px]">{course.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href={getCourseCategoryUrl(course.categorySlug)} className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {course.cat} Programs
          </Link>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 text-left">
          {/* Main Info */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider self-start mb-4">
              {course.cat} Program
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-4">
              {course.title}
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              {course.desc}
            </p>

            {/* Course Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-border py-6 mb-8">
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Duration</span>
                <div className="flex items-center gap-1.5 text-sm font-bold text-text-primary">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Learning Mode</span>
                <div className="flex items-center gap-1.5 text-sm font-bold text-text-primary">
                  <Globe className="w-4 h-4 text-accent" />
                  <span>{course.mode}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Languages</span>
                <span className="text-sm font-bold text-text-primary">{course.language.join(" / ")}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Pricing</span>
                <span className="text-sm font-bold text-accent">{course.price}</span>
              </div>
            </div>
          </div>

          {/* Enroll Interest Form Sidebar Card */}
          <div className="lg:col-span-4">
            <Card className="border border-border bg-subtle p-6 rounded-lg sticky top-32 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <Check className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div>
                    <h3 className="text-lg font-bold font-heading uppercase text-text-primary">Application Received</h3>
                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                      Thank you for your interest! A counselor from TamizhTech will call or email you with batch timetables within 24 hours.
                    </p>
                  </div>
                  {leadId && (
                    <div className="bg-white p-3 rounded-xl border border-border inline-block">
                      <span className="text-[10px] font-bold text-text-muted uppercase block">Reference ID</span>
                      <span className="text-sm font-black font-mono text-accent">{leadId}</span>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <div className="text-left mb-6">
                    <h3 className="text-lg font-bold font-heading uppercase text-text-primary">Enroll Interest</h3>
                    <p className="text-xs text-text-muted mt-1 uppercase">Reserve your seat. No payment needed today.</p>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={enrollForm.email}
                      onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={enrollForm.phone}
                      onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Preferred Batch Mode</label>
                    <select
                      value={enrollForm.mode}
                      onChange={(e) => setEnrollForm({ ...enrollForm, mode: e.target.value as any })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                    >
                      <option value="Offline">Offline Classroom (Coimbatore)</option>
                      <option value="Online">Online Interactive</option>
                      <option value="Hybrid">Hybrid (Classroom + Labs)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Any Questions/Notes</label>
                    <textarea
                      value={enrollForm.notes}
                      onChange={(e) => setEnrollForm({ ...enrollForm, notes: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent h-20 resize-none"
                      placeholder="e.g. Batch timings, weekend preferences..."
                    />
                  </div>

                  <div className="bg-accent/5 p-3 rounded-lg border border-accent/20 flex gap-2.5 text-[10px] font-bold text-accent uppercase tracking-wider items-center mb-2">
                    <Users className="w-4 h-4 shrink-0" />
                    <span>Hurry! Only {course.seatsLeft} seats left for next batch.</span>
                  </div>

                  <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center py-3.5 font-bold text-white">
                    {isSubmitting ? "Registering..." : "Submit Enrollment"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* Syllabus Accordion & Bio Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left: Syllabus Accordion */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black font-heading uppercase mb-6 tracking-tight text-text-primary">
              Course Syllabus
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {course.syllabus.map((item, index) => {
                const isOpen = openSyllabusIndex === index;
                return (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => setOpenSyllabusIndex(isOpen ? null : index)}
                      className="flex items-center justify-between w-full text-left font-bold font-heading text-lg text-text-primary hover:text-accent transition-colors focus:outline-none"
                    >
                      <span className={isOpen ? "text-accent" : "text-text-primary"}>
                        Module {index + 1}: {item.split(":")[0]}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="mt-4 text-sm text-text-secondary leading-relaxed font-sans pl-1">
                        {item.includes(":") ? item.split(":")[1].trim() : "Deep dive into core conceptual topics and structured practical laboratory exercises corresponding to this module."}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Instructor Bio */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-black font-heading uppercase tracking-tight text-text-primary">
              Your Instructor
            </h2>
            <Card className="border border-border bg-white p-6 rounded-lg text-left shadow-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-soft text-accent flex items-center justify-center font-bold text-lg">
                  {course.instructor.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary font-heading uppercase text-base">{course.instructor.name}</h4>
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Lead Technical Mentor</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                {course.instructor.bio}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
