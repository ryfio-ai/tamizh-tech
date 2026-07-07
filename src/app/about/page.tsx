"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users, Award, Target, Heart, Zap, Cpu } from "lucide-react";
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
  { name: "Er. K. Tamizharasan", role: "Founder & CEO", image: "/team/Tamizharasan K.jpg" },
  { name: "Priya Krishnan",       role: "Head of R&D",   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Arun Selvaraj",        role: "Lead Engineer",  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Meera Nair",           role: "AI Specialist",  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const competitions = [
  { name: "RC Robo Race", desc: "Drift-tuned chassis and high-torque motors engineered for race track agility." },
  { name: "RC Robo Soccer", desc: "Dual solenoid active kicker bots designed for precision and power on the soccer field." },
  { name: "RC Robo War", desc: "High-impact combat robots with active spinners, lifters, and steel armor plating." },
  { name: "RC Robo Sumo", desc: "Heavy steel frame and magnetic drive bases designed to push opponents out of the ring." },
  { name: "RC Boat", desc: "Brushless water-cooled aquatic speedboats designed for stability and speed." },
  { name: "Hovercraft", desc: "Dual-propeller air cushion vehicles for friction-free terrain navigation." },
  { name: "Line Follower", desc: "PID-tuned microcontroller speedsters utilizing multi-sensor arrays." },
  { name: "Maze Solver", desc: "Micromouse platforms featuring real-time autonomous flood-fill algorithms." },
  { name: "Drone", desc: "Custom-configured multi-rotor systems, FPV racing quadcopters, and drone kits." },
  { name: "Water Rocketry", desc: "Pressurized launch setups with aerodynamic recovery and fins." },
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
                TamizhTech Robotics Company is a Coimbatore-based technology company specializing in Robotics, AI, Drone Technology, IoT, and Embedded Systems. We serve industries ranging from manufacturing to healthcare while empowering thousands of students with hands-on STEM education.
              </p>
              <div className="mt-8 space-y-3">
                {["Founded in Coimbatore, Tamil Nadu", "8+ years of engineering excellence", "Serving 15+ industry partners nationally", "1000+ students trained across India"].map(pt => (
                  <div key={pt} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-semibold">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                <h4 className="font-bold text-text-primary text-sm tracking-wide uppercase mb-1">TamizhTech Robotics Company</h4>
                <p className="text-xs text-accent font-bold mb-4">The Future of Engineering Starts Here</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <span className="text-text-muted text-xs block">Established</span>
                    22 October 2024
                  </div>
                  <div>
                    <span className="text-text-muted text-xs block">Location</span>
                    Coimbatore, Tamil Nadu
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-text-muted text-xs block">Evolution</span>
                    From a student robotics club to a leading robotics, engineering, and technology solutions company.
                  </div>
                </div>
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
      <section className="section bg-white text-text-primary py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader tag="Our Journey" title="The" highlight="TamizhTech story" />
          </AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-zinc-200" />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1} className={`relative flex gap-8 mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="flex-1">
                  <div className={`bg-white border border-border p-6 rounded-2xl shadow-sm ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-accent text-sm font-bold">{item.year}</span>
                    <h3 className="text-text-primary font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm z-10" />
                <div className="flex-1" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-subtle py-24 border-y border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Achievements"
              title="Numbers That Define"
              highlight="Our Journey"
              subtitle="A summary of our impact, wins, and community engagement over the years."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { val: "200+", label: "Robotics Events Participated" },
              { val: "40+", label: "State-Level Events" },
              { val: "100+", label: "National-Level Events" },
              { val: "15+", label: "International Events" },
              { val: "180+", label: "Winning Positions" },
              { val: "₹8 Lakhs+", label: "Prize Money Won" },
              { val: "20+", label: "Robotics Events Organized" },
              { val: "200+", label: "Active Club Members" },
              { val: "1000+", label: "Students Mentored" },
            ].map((ach, idx) => (
              <StaggerItem key={idx}>
                <Card className="flex flex-col items-center text-center p-8 bg-white border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-3xl font-extrabold text-accent mb-2 font-mono">{ach.val}</span>
                  <span className="text-sm font-bold text-text-secondary tracking-wide">{ach.label}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Robotics Competition Excellence */}
      <section className="section bg-white py-24 border-b border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Competition Excellence"
              title="Robotics Competition"
              highlight="Excellence"
              subtitle="Our team designs, builds, and competes with world-class robotics systems. All 10 categories of competition platforms are engineered in-house and are commercially available in our company for colleges, schools, and teams."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {competitions.map((comp, idx) => (
              <StaggerItem key={idx}>
                <Card className="flex flex-col justify-between h-full p-6 bg-white border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-4">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-text-primary text-base mb-2">{comp.name}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{comp.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[10px] font-bold text-accent tracking-wider uppercase">
                    In-House Available
                  </div>
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
