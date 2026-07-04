"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users, Award, Target, Heart } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2016", title: "Founded", desc: "Started as a student robotics club in Coimbatore." },
  { year: "2018", title: "First Industry Project", desc: "Delivered our first industrial automation project for a local manufacturer." },
  { year: "2020", title: "Education Wing", desc: "Launched structured robotics courses for schools and colleges." },
  { year: "2022", title: "AI & Drone Division", desc: "Expanded into AI, machine learning, and drone technology services." },
  { year: "2024", title: "Pan-India Reach", desc: "Serving clients across 15+ states with 500+ projects delivered." },
];

const values = [
  { icon: Target,      title: "Vision",    desc: "To be India's most trusted robotics and AI engineering company." },
  { icon: Heart,       title: "Mission",   desc: "Building technology that empowers industries and educates the next generation." },
  { icon: Award,       title: "Excellence",desc: "Every project is built to the highest standards of engineering quality." },
  { icon: Users,       title: "Community", desc: "Creating a thriving ecosystem of engineers, innovators, and educators." },
];

const team = [
  { name: "Er. K. Tamizharasan", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Priya Krishnan",       role: "Head of R&D",   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Arun Selvaraj",        role: "Lead Engineer",  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Meera Nair",           role: "AI Specialist",  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Engineering the future, one innovation at a time"
        subtitle="From a student robotics club to a premier AI & engineering company — the TamizhTech story is built on passion, innovation, and impact."
        breadcrumbActive="About"
      />

      {/* Who We Are */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeader tag="Who We Are" title="A technology company" highlight="with purpose" align="left" />
              <p className="mt-6 text-text-muted text-base md:text-lg leading-relaxed">
                TamizhTech Robotics is a Coimbatore-based technology company specializing in Robotics, AI, Drone Technology, IoT, and Embedded Systems. We serve industries ranging from manufacturing to healthcare while empowering thousands of students with hands-on STEM education.
              </p>
              <div className="mt-8 space-y-3">
                {["Founded in Coimbatore, Tamil Nadu", "8+ years of engineering excellence", "Serving 50+ industry partners nationally", "10,000+ students trained across India"].map(pt => (
                  <div key={pt} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-semibold">{pt}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-border">
                <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" alt="TamizhTech lab" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-subtle py-24 border-y border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader tag="Our Values" title="What drives" highlight="us" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-5"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-bold text-text-primary text-lg mb-2">{title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-950 text-white py-24">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader tag="Our Journey" title="The" highlight="TamizhTech story" light />
          </AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gray-800" />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1} className={`relative flex gap-8 mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="flex-1">
                  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-accent text-sm font-bold">{item.year}</span>
                    <h3 className="text-white font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-accent border-4 border-gray-950 z-10" />
                <div className="flex-1" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader tag="Our Team" title="The people behind" highlight="the innovation" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="text-center group hover:border-accent/20">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-accent/5 group-hover:ring-accent/10 transition-all">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-text-primary text-sm">{member.name}</h3>
                  <p className="text-xs text-text-muted mt-1">{member.role}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-subtle py-20 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-text-primary mb-4">Join the TamizhTech movement</h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">Collaborate with us on cutting-edge projects or start your engineering journey today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary">Contact Us <ArrowRight className="w-4 h-4 ml-1.5" /></Button>
              </Link>
              <Link href="/courses">
                <Button variant="secondary">Browse Courses</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
