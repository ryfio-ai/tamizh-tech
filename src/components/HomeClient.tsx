"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ArrowRight, Bot, Brain, Cpu, Zap, Factory, Plane,
  Network, FlaskConical, GraduationCap, Briefcase,
  TrendingUp, Users, Award, Globe, Shield, CheckCircle,
  HelpCircle, Swords, Ship, Wind, Route, Grid, Rocket, Target,
  X, ChevronLeft, ChevronRight,
} from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { Card } from "@/components/ui/Card";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { Spotlight } from "@/components/ui/spotlight";

// Data
const services = [
  { icon: Bot,          title: "Robotics",             desc: "Custom robotic systems from concept to deployment.",  color: "blue", href: "/services#robotics" },
  { icon: Brain,        title: "Artificial Intelligence", desc: "ML models, vision AI, and intelligent automation.", color: "purple", href: "/services#ai" },
  { icon: Plane,        title: "Drone Technology",     desc: "UAV design, control systems, and aerial solutions.",   color: "sky", href: "/services#drone" },
  { icon: Network,      title: "IoT",                  desc: "Connected ecosystems for smart environments.",         color: "teal", href: "/services#iot" },
  { icon: Cpu,          title: "Embedded Systems",     desc: "Firmware, microcontrollers, and embedded dev.",        color: "orange", href: "/services#embedded" },
  { icon: Factory,      title: "Industrial Automation",desc: "Process automation for modern manufacturing.",         color: "red", href: "/services#automation" },
  { icon: Zap,          title: "STEM Labs",            desc: "Turnkey tinkering labs for schools and colleges.",     color: "yellow", href: "/courses#school" },
  { icon: FlaskConical, title: "R&D Projects",         desc: "Research-grade engineering and product prototyping.",  color: "green", href: "/projects" },
  { icon: GraduationCap,title: "Courses",              desc: "Structured programs for students & professionals.",    color: "indigo", href: "/courses" },
  { icon: Briefcase,    title: "Consulting",           desc: "Expert guidance for tech projects and innovation.",    color: "pink", href: "/contact" },
];

const stats = [
  { value: "180+",  label: "Competition Wins" },
  { value: "15+",   label: "Industry Partners" },
  { value: "300+",  label: "Events Participated" },
  { value: "1K+",   label: "Students Trained" },
];

const industries = [
  { icon: Factory,      label: "Manufacturing" },
  { icon: GraduationCap,label: "Education" },
  { icon: Shield,       label: "Defense" },
  { icon: Globe,        label: "Smart Cities" },
  { icon: TrendingUp,   label: "Research Labs" },
  { icon: Users,        label: "Healthcare" },
  { icon: Briefcase,    label: "Agriculture" },
  { icon: Award,        label: "Automotive" },
];

const whyUs = [
  { icon: CheckCircle, title: "End-to-End Solutions", desc: "From ideation and prototyping to deployment and training." },
  { icon: Users,       title: "Expert Team",          desc: "Engineers, researchers, and educators with deep domain expertise." },
  { icon: Award,       title: "Proven Track Record",  desc: "Podium finishes in national design and engineering contests." },
  { icon: Globe,       title: "Pan-India Presence",   desc: "Serving clients across industries from Coimbatore nationwide." },
];

const projects = [
  { title: "Autonomous Navigation Robot",  category: "Robotics",   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop", href: "/projects" },
  { title: "AI Vision Quality Inspection", category: "AI",          image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop", href: "/projects" },
  { title: "Agricultural Drone System",    category: "Drone",       image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop", href: "/projects" },
];

const galleryImages = [
  "/gallery/1.JPEG",
  "/gallery/3.jpg",
  "/gallery/6.jpg",
  "/gallery/7.JPG",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/16.jpeg",
];

const faqs = [
  { q: "What industries do you build automation solutions for?", a: "We primarily work with manufacturing, automotive, agriculture, defense, and education industries, designing custom autonomous machinery, robotic arms, IoT systems, and quality control vision AI models." },
  { q: "Do you design custom competition robots?", a: "Yes, TamizhTech has a dedicated division that engineers custom combat robots, RC race cars, and student competition platforms." },
  { q: "How can schools set up STEM tinkering labs?", a: "We provide complete turnkey STEM and robotics tinkering labs. This includes structural hardware setup, procurement of learning kits, curriculum alignment, and comprehensive teacher training." },
];

const partnerLogos = [
  { name: "PSG College of Technology" },
  { name: "Amrita Vishwa Vidyapeetham" },
  { name: "Kumaraguru College of Technology" },
  { name: "Coimbatore Institute of Technology" },
  { name: "AutoCorp Industries" },
];

const competitions = [
  { icon: Zap,          title: "RC Robo Race",     desc: "High-speed custom race bots designed for track drift, control, and agility." },
  { icon: Award,        title: "RC Robo Soccer",   desc: "Solenoid and pneumatic kicker-driven robots engineered for active sports play." },
  { icon: Swords,       title: "RC Robo War",      desc: "Heavy-armored battle bots built to withstand impacts and defeat opponents." },
  { icon: Target,       title: "RC Robo Sumo",     desc: "Magnetic high-traction pushers optimized for arena dominance and strength." },
  { icon: Ship,         title: "RC Boat",          desc: "Water-cooled brushless motor aquatic speedsters engineered for speed." },
  { icon: Wind,         title: "Hovercraft",       desc: "Dual-motor air-cushion platforms designed for multi-terrain gliding." },
  { icon: Route,        title: "Line Follower",    desc: "Autonomous PID-tuned vehicles utilizing advanced sensor arrays for speed." },
  { icon: Grid,         title: "Maze Solver",      desc: "Smart pathfinding robots running custom mapping algorithms in real time." },
  { icon: Plane,        title: "Drone",            desc: "Multi-rotor UAV kits, FPV quadcopters, and custom autonomous aerial flight." },
  { icon: Rocket,       title: "Water Rocketry",   desc: "Aerodynamic pressurized launch models engineered for maximum altitude." },
];

export default function HomeClient() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);
  return (
    <div className="flex flex-col bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white hero-grid hero-gradient pt-20">
        {/* Aceternity Spotlight for high-end aesthetic */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(251, 113, 21, 0.12)" />

        {/* floating orbs */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse-slow" />

        <div className="container relative z-10 pt-24 pb-4 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Interactive 3D Robot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 h-[280px] sm:h-[350px] lg:h-[400px] relative w-full"
            >
              <InteractiveRobotSpline
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>

            {/* Right side: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 tracking-tight leading-[1.05]">
                Engineering the <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-orange-600">Future</span>
                <br />
                of Robotics & AI
              </h1>

              <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
                TamizhTech Robotics Company - a premier technology company in Coimbatore
                delivering cutting-edge automation, AI, and engineering innovation
                across industries.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link href="/services">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center">
                    Explore Services <ArrowRight className="w-5 h-5 ml-1.5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                    Buy Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* stats row */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="stat-number">{s.value}</div>
                <div className="mt-1.5 text-xs font-bold text-text-muted uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRO (WHO WE ARE) */}
      <section className="section bg-white text-text-primary py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="tag mb-6">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 leading-tight">
                A new kind of<br />
                <span className="text-accent">engineering company</span>
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
                TamizhTech Robotics Company bridges the gap between education and industry.
                We design, build, and deploy advanced robotic and AI systems while
                educating the next generation of engineers.
              </p>
              <div className="space-y-4">
                {["Founded in Coimbatore, Tamil Nadu", "Serving 15+ industry partners", "1000+ students trained nationwide"].map(pt => (
                  <div key={pt} className="flex items-center gap-3 text-text-primary">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-semibold">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <Button variant="primary">
                    About TamizhTech <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-border/20">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                  alt="TamizhTech engineering lab"
                  fill className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-border/20 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#FB7115]" />
                    <span className="text-text-primary text-xs font-semibold">Active R&D Lab * Coimbatore</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2.5 OUR JOURNEY SECTION */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Our Journey"
              title="From Club"
              highlight="to Company"
              subtitle="The evolution of TamizhTech Robotics Company over the years."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { year: "2021", text: "Tamizh Robotics Club was established." },
              { year: "2022", text: "Started participating in robotics competitions across Tamil Nadu." },
              { year: "2023", text: "Expanded participation to national and international competitions." },
              { year: "2024", text: "Tamizh Tech Robotics Company was officially established." },
              { year: "2025", text: "Robotics products supplied to schools and colleges across India." },
              { year: "2026", text: "Launch of ThiranOli Academy." },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} className="h-full">
                <Card className="h-full flex flex-col p-6 bg-white border border-border hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-extrabold text-accent mb-2 font-mono">{step.year}</div>
                  <p className="text-xs text-text-secondary leading-relaxed flex-grow">
                    {step.text}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="section bg-white py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="What We Do"
              title="Complete technology"
              highlight="solutions"
              subtitle="From robotics engineering to AI development - we cover every dimension of modern technology."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((svc) => (
              <StaggerItem key={svc.title}>
                <ServiceCard
                  title={svc.title}
                  description={svc.desc}
                  icon={svc.icon}
                  href={svc.href}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 text-center">
            <Link href="/services">
              <Button variant="secondary">
                View All Services <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. INDUSTRIES SECTION */}
      <section className="section bg-subtle py-20 border-y border-border/40">
        <div className="container px-6">
          <AnimatedSection className="mb-12">
            <SectionHeader
              tag="Industries"
              title="Built for every"
              highlight="industry"
              subtitle="Our solutions are deployed across manufacturing, defense, agriculture, and more."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <Card className="flex flex-col items-center gap-3 p-6 text-center group cursor-default h-full justify-center bg-white border border-border hover:bg-accent/10 hover:border-accent transition-all duration-300">
                  <Icon className="w-6 h-6 text-text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                  <span className="text-xs font-bold text-text-primary tracking-wide transition-colors duration-300">{label}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. WHY TAMIZHTECH SECTION */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeader
                tag="Why Choose Us"
                title="The TamizhTech"
                highlight="difference"
                align="left"
              />
              <div className="mt-10 space-y-6">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary text-base mb-1">{title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "180+", l: "Competition Wins", c: "bg-blue-500" },
                  { n: "15+",  l: "Industry Partners", c: "bg-teal-500" },
                  { n: "300+", l: "Events Participated", c: "bg-purple-500" },
                  { n: "1K+",  l: "Students Trained", c: "bg-orange-500" },
                ].map(({ n, l, c }) => (
                  <Card key={l} className="flex flex-col justify-between h-36 p-6 bg-white border border-accent/20 text-text-primary shadow-lg">
                    <div className={`w-8 h-1 rounded-full ${c}`} />
                    <div>
                      <div className="text-3xl font-extrabold text-accent tracking-tight">{n}</div>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider mt-1">{l}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5.5 ROBOTICS COMPETITION EXCELLENCE SECTION */}
      <section className="section bg-slate-950 text-white py-24 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

        <div className="container relative z-10 px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Competition Excellence"
              title="Robotics Competition"
              highlight="Excellence"
              subtitle="We have designed, developed, and competed with a wide range of robotics systems. All of these competition-ready, battle-tested platforms are built in-house and are available at our company for custom fabrication, training, and events."
              light={true}
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {competitions.map((comp) => {
              const Icon = comp.icon;
              return (
                <StaggerItem key={comp.title}>
                  <Card className="h-full bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-accent/50 p-6 flex flex-col justify-between group transition-all duration-300">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <h3 className="font-extrabold text-white text-base mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-bold text-accent tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Available Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900/80 border border-slate-800 px-8 py-5 rounded-2xl max-w-2xl mx-auto shadow-2xl backdrop-blur-xs">
              <span className="text-sm font-semibold text-gray-300">
                Need a custom-built competition robot or team mentoring?
              </span>
              <Link href="/products?category=All">
                <Button variant="primary" size="sm">
                  View Competition Kits <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="section bg-white py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Our Work"
              title="Featured"
              highlight="projects"
              subtitle="A snapshot of our most impactful engineering and research projects."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <StaggerItem key={proj.title}>
                <ProjectCard
                  title={proj.title}
                  category={proj.category}
                  image={proj.image}
                  href={proj.href}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="secondary">
                See All Projects <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. LIFE AT TAMIZHTECH (GALLERY) */}
      <section className="section bg-white py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-12">
            <SectionHeader
              tag="Gallery"
              title="Life at"
              highlight="TamizhTech"
              subtitle="Workshops, events, competitions and our state-of-the-art labs."
            />
          </AnimatedSection>

          <InfiniteSlider gap={24} duration={35} className="py-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] w-72 sm:w-96 shrink-0 group cursor-pointer border border-border/40 shadow-sm"
                onClick={() => setActiveImageIdx(idx)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 400px"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </InfiniteSlider>

          <AnimatedSection className="mt-10 text-center">
            <Link href="/gallery">
              <Button variant="secondary">
                View Full Gallery <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. FAQ SECTION (SECTION 9) */}
      <section className="section bg-white py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-1">
              <span className="tag mb-4">FAQ</span>
              <h2 className="text-3xl font-extrabold text-text-primary tracking-tight leading-tight mb-4">
                Frequently Asked <span className="gradient-text-blue">Questions</span>
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Can't find the answer you're looking for? Reach out to our technical support desk on our contact page.
              </p>
            </AnimatedSection>
            <div className="lg:col-span-2 space-y-6">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Card className="flex gap-4 items-start p-6 hover:-translate-y-0.5">
                    <HelpCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-text-primary text-base mb-2">{faq.q}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. PARTNERS & START BUILDING (CTA BANNER) */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">


          <AnimatedSection className="mt-16">
            <CTABanner
              title="Ready to build something extraordinary?"
              subtitle="Whether you need a custom robotic system, AI camera models, STEM Tinkering labs, or advanced certification courses, we are here to support your team."
              primaryCtaText="Contact Us"
              primaryCtaHref="/contact"
              secondaryCtaText="Browse Courses"
              secondaryCtaHref="/courses"
            />
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setActiveImageIdx(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={() => setActiveImageIdx(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx((activeImageIdx - 1 + galleryImages.length) % galleryImages.length);
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative max-w-[85vw] max-h-[85vh] aspect-[4/3] w-full md:w-[70vw]">
              <Image
                src={galleryImages[activeImageIdx]}
                alt={`Lightbox image ${activeImageIdx + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx((activeImageIdx + 1) % galleryImages.length);
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
