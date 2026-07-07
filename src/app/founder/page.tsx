"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Award, ShieldCheck, Heart, Sparkles, BookOpen, Star, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function FounderPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Er. K. Tamizharasan",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Tamizh Tech Robotics Company"
    },
    "alumniOf": "Anna University",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "description": "Founder & CEO of Tamizh Tech Robotics Company, robotics researcher, and STEM mentor in India."
  };

  return (
    <div className="bg-white min-h-screen text-text-primary text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageHero
        title="Founder & CEO Profile"
        subtitle="Er. K. Tamizharasan — Driving indigenous robotics development, B2B industrial automation, and hands-on K-12 STEM education setups across India."
        breadcrumbActive="Founder"
      />

      {/* Profile Section */}
      <section className="section py-16">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Placeholder/Design */}
            <div className="lg:col-span-5 bg-subtle border border-border rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] shadow-sm relative overflow-hidden text-center">
              <div className="absolute top-4 right-4 text-accent z-10">
                <Star className="w-6 h-6 fill-current animate-pulse" />
              </div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg mb-6 shrink-0 bg-white">
                <Image
                  src="/team/Tamizharasan K.jpg"
                  alt="Er. K. Tamizharasan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-text-primary">Er. K. Tamizharasan</h2>
              <span className="text-xs font-bold text-accent uppercase tracking-widest mt-1 block">Founder & CEO</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-0.5 block">Tamizh Tech Robotics Company</span>
              
              <div className="mt-8 pt-6 border-t border-border w-full space-y-2 text-xs text-text-secondary">
                <div><strong>Qualification:</strong> B.E. Robotics & Automation</div>
                <div><strong>Domain:</strong> Embedded Systems, Machine Vision & Kinematics</div>
              </div>
            </div>

            {/* Biography & Message */}
            <div className="lg:col-span-7">
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">Message from the Founders</span>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4">Engineering the Future Starts Here</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 font-semibold italic">
                "Engineering is not just about learning theories; it is about transforming ideas into reality."
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Tamizh Tech Robotics was born from a passion for innovation, robotics, and hands-on engineering. What began as a student robotics club has now evolved into a technology company committed to developing future engineers, creating indigenous robotics solutions, and bridging the gap between education and industry.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Today, we proudly serve students, industries, and institutions through robotics products, mentorship programs, industrial automation solutions, and technology education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">The Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">Milestones & Growth</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
            {[
              { year: "2020", title: "Inception in Coimbatore", desc: "Started as a micro-consultancy for student electronics assemblies, establishing initial partnerships." },
              { year: "2022", title: "Launch of STEM Lab Setup Services", desc: "Began deployment of complete laboratory packages for CBSE/ICSE schools across Tamil Nadu." },
              { year: "2024", title: "National Robotics Competition Dominance", desc: "Engineered and supplied components for over 50+ podium-winning college teams in Robo War and Soccer." },
              { year: "2026", title: "B2B Automation Expansion", desc: "Scaling custom AMR development and computer vision inspection benches for industrial clients." }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-12 text-left">
                <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-4 border-white" />
                <span className="text-xs font-extrabold text-accent block font-mono">{item.year}</span>
                <h4 className="text-base font-bold uppercase text-text-primary mt-1">{item.title}</h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section py-16 bg-white border-t border-border">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border border-border text-left hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-text-primary mb-2">STEM Mentor Award</h4>
              <p className="text-text-secondary text-xs leading-relaxed">Recognized for training and guiding over 5,000+ K-12 students in coding and robotics principles.</p>
            </Card>

            <Card className="p-6 border border-border text-left hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-text-primary mb-2">IP & Innovation Focus</h4>
              <p className="text-text-secondary text-xs leading-relaxed">Collaborating with colleges for final-year engineering patent drafting and custom firmware development.</p>
            </Card>

            <Card className="p-6 border border-border text-left hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase text-text-primary mb-2">Made in India Vision</h4>
              <p className="text-text-secondary text-xs leading-relaxed">Dedicated to replacing imported Chinese robotics modules with local CNC/3D printed electronics kits.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation / Contact CTA */}
      <section className="section py-16 bg-subtle border-t border-border text-center">
        <div className="container px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold uppercase mb-4 text-text-primary">Connect with Er. K. Tamizharasan</h2>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            Interested in speaking at your college symposium? Or would you like to discuss a customized R&D project or industrial automation feasibility audit?
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">Send Message</Button>
            </Link>
            <a href="mailto:info@tamizhtech.com">
              <Button variant="secondary" size="lg">Email Directly</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
