import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, Award } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BreadcrumbSchema } from "@/components/JsonLd";
import TeamShowcase from "@/components/ui/team-showcase";

export const metadata: Metadata = {
  title: "Core Leadership & Engineering Team | Tamizh Tech Robotics",
  description: "Meet the engineering minds and leadership behind Tamizh Tech Robotics Company in Coimbatore — Founder, CTO, R&D Heads, and Embedded Engineers.",
  alternates: {
    canonical: "https://www.tamizhtech.in/team",
  },
  openGraph: {
    title: "Core Leadership & Engineering Team | Tamizh Tech Robotics",
    description: "Meet the engineering minds and leadership behind Tamizh Tech Robotics Company in Coimbatore.",
    url: "https://www.tamizhtech.in/team",
    siteName: "TamizhTech Robotics Company",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Leadership & Engineering Team | Tamizh Tech Robotics",
    description: "Meet the engineering minds and leadership behind Tamizh Tech Robotics Company in Coimbatore.",
  },
};

export default function TeamPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "About", url: "https://www.tamizhtech.in/about" },
    { name: "Team", url: "https://www.tamizhtech.in/team" },
  ];

  return (
    <div className="bg-white min-h-screen text-text-primary text-left">
      <BreadcrumbSchema items={breadcrumbItems} />

      <PageHero
        title="Leadership & Engineering Team"
        subtitle="Meet the passionate engineers, researchers, and innovators driving indigenous robotics manufacturing, STEM education, and industrial automation in Coimbatore."
        breadcrumbActive="Team"
      />

      {/* Interactive Team Showcase Section */}
      <section className="section py-16 bg-white">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">
              The Minds Behind TamizhTech
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-text-primary">
              Core Leadership & Engineering
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              Hover over any team member to view their profile, role, and professional links.
            </p>
          </div>

          <div className="bg-subtle/50 border border-border/60 rounded-3xl p-6 sm:p-10 shadow-xs">
            <TeamShowcase />
          </div>
        </div>
      </section>

      {/* Team Culture & Philosophy */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl border border-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight text-text-primary mb-2">
                Hands-on Engineering
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                From fiber laser cutting and PCB assembly to embedded firmware, every leader actively designs, tests, and builds hardware.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight text-text-primary mb-2">
                R&D & Innovation
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Continuous experimentation with high-speed line followers, holonomic drivetrains, and IoT telemetry for real-world deployments.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight text-text-primary mb-2">
                Student Mentorship
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Our leadership team has directly guided over 1000+ students and 50+ podium-winning robotics teams across national tech fests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 text-text-primary border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 px-6 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4 text-text-primary uppercase">
              Want to Build the Future with Us?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed font-sans text-sm md:text-base">
              We are always looking for passionate robotics engineers, embedded developers, and STEM educators to join our Coimbatore team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/careers" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full justify-center text-sm font-bold text-white !bg-[#FF6A00] hover:!bg-[#E05300] px-8 py-3.5 rounded-lg border-none shadow-lg shadow-orange-500/25 transition-all">
                  View Open Roles <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-sm font-bold text-text-primary border-border hover:bg-subtle px-8 py-3 rounded-lg">
                  Contact Team
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
