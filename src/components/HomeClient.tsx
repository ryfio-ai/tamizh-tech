"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, Bot, Brain, Cpu, Zap, Factory, Plane,
  Network, FlaskConical, GraduationCap, Briefcase,
  TrendingUp, Users, Award, Globe, Shield, CheckCircle,
  HelpCircle,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { Card } from "@/components/ui/Card";

// ─── Data ───────────────────────────────────────────────────
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
  { value: "150+",  label: "Events Conducted" },
  { value: "50+",   label: "Enterprise Clients" },
  { value: "100+",  label: "Solutions Delivered" },
  { value: "15+",   label: "States Served" },
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
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=350&fit=crop",
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

export default function HomeClient() {
  return (
    <div className="flex flex-col">

      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white hero-grid hero-gradient pt-20">
        {/* floating orbs */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-accent.teal/5 blur-[120px] pointer-events-none animate-pulse-slow" />

        <div className="container relative z-10 py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="tag">🚀 Robotics · AI · Drones · IoT</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.05]">
              Engineering the <span className="gradient-text-blue">Future</span>
              <br />
              of Robotics & AI
            </h1>

            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              TamizhTech Robotics — a premier technology company in Coimbatore
              delivering cutting-edge automation, AI, and engineering innovation
              across industries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button variant="primary" size="lg">
                  Explore Services <ArrowRight className="w-5 h-5 ml-1.5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="secondary" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>

            {/* stats row */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
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
          </motion.div>
        </div>
      </section>

      {/* ── 2. COMPANY INTRO (WHO WE ARE) ────────────────────── */}
      <section className="section bg-gray-950 text-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="tag tag-teal mb-6">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                A new kind of<br />
                <span className="gradient-text-teal">engineering company</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                TamizhTech Robotics bridges the gap between education and industry.
                We design, build, and deploy advanced robotic and AI systems while
                educating the next generation of engineers.
              </p>
              <div className="space-y-4">
                {["Founded in Coimbatore, Tamil Nadu", "Serving 50+ industry partners", "10,000+ students trained nationwide"].map(pt => (
                  <div key={pt} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                    <span className="text-sm font-semibold">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <Button variant="primary" className="bg-[#0D9488] hover:bg-[#0b7a70] shadow-[0_4px_14px_rgba(13,148,136,0.3)]">
                    About TamizhTech <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                  alt="TamizhTech engineering lab"
                  fill className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="glow-dot" />
                    <span className="text-white text-xs font-semibold">Active R&D Lab · Coimbatore</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES SECTION ───────────────────────────────── */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="What We Do"
              title="Complete technology"
              highlight="solutions"
              subtitle="From robotics engineering to AI development — we cover every dimension of modern technology."
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

      {/* ── 4. INDUSTRIES SECTION ─────────────────────────────── */}
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
                <Card className="flex flex-col items-center gap-3 p-6 text-center group cursor-default h-full justify-center">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-bold text-text-primary tracking-wide">{label}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 5. WHY TAMIZHTECH SECTION ────────────────────────── */}
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
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent shrink-0">
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
                  { n: "50+",  l: "Industry Partners", c: "bg-teal-500" },
                  { n: "500+", l: "Projects Done", c: "bg-purple-500" },
                  { n: "10K+", l: "Students Trained", c: "bg-orange-500" },
                ].map(({ n, l, c }) => (
                  <Card key={l} className="flex flex-col justify-between h-36">
                    <div className={`w-8 h-1 rounded-full ${c}`} />
                    <div>
                      <div className="text-3xl font-extrabold text-text-primary tracking-tight">{n}</div>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider mt-1">{l}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 6. FEATURED PROJECTS ──────────────────────────────── */}
      <section className="section bg-gray-950 text-white py-24">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Our Work"
              title="Featured"
              highlight="projects"
              subtitle="A snapshot of our most impactful engineering and research projects."
              light
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
                  className="bg-white/5 border-white/10 text-white"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="secondary" className="bg-white/10 text-white border-white/10 hover:bg-white/15">
                See All Projects <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. LIFE AT TAMIZHTECH (GALLERY) ───────────────────── */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <AnimatedSection className="mb-12">
            <SectionHeader
              tag="Gallery"
              title="Life at"
              highlight="TamizhTech"
              subtitle="Workshops, events, competitions and our state-of-the-art labs."
            />
          </AnimatedSection>

          <GalleryGrid images={galleryImages} />

          <AnimatedSection className="mt-10 text-center">
            <Link href="/gallery">
              <Button variant="secondary">
                View Full Gallery <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>



      {/* ── 9. FAQ SECTION (SECTION 9) ───────────────────────── */}
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

      {/* ── 10. PARTNERS & START BUILDING (CTA BANNER) ───────── */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">
          {/* Partner Slider / Carousel Title */}
          <AnimatedSection className="mb-10 text-center">
            <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Trusted by Academics & Enterprises</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6 opacity-60">
              {partnerLogos.map((p, idx) => (
                <span key={idx} className="text-sm font-bold text-text-secondary tracking-wide">{p.name}</span>
              ))}
            </div>
          </AnimatedSection>

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

    </div>
  );
}
