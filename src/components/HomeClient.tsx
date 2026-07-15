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
import { StatCounter } from "@/components/ui/StatCounter";
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
import {
  RoboticsIcon, AIIcon, DroneIcon, IoTIcon, EmbeddedIcon, AutomationIcon,
  MfgIcon, EduIcon, DefIcon, CityIcon, LabIcon, HealthIcon, AgriIcon, AutoIcon
} from "@/components/ui/CustomIcons";

// Data
const services = [
  { icon: RoboticsIcon,   title: "Robotics",             desc: "Custom robotic systems from concept to deployment.",  color: "blue", href: "/services#robotics" },
  { icon: AIIcon,         title: "Artificial Intelligence", desc: "ML models, vision AI, and intelligent automation.", color: "purple", href: "/services#ai" },
  { icon: DroneIcon,      title: "Drone Technology",     desc: "UAV design, control systems, and aerial solutions.",   color: "sky", href: "/services#drone" },
  { icon: IoTIcon,        title: "IoT",                  desc: "Connected ecosystems for smart environments.",         color: "teal", href: "/services#iot" },
  { icon: EmbeddedIcon,   title: "Embedded Systems",     desc: "Firmware, microcontrollers, and embedded dev.",        color: "orange", href: "/services#embedded" },
  { icon: AutomationIcon, title: "Industrial Automation",desc: "Process automation for modern manufacturing.",         color: "red", href: "/services#automation" },
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
  { icon: MfgIcon,      label: "Manufacturing" },
  { icon: EduIcon,      label: "Education" },
  { icon: DefIcon,      label: "Defense" },
  { icon: CityIcon,     label: "Smart Cities" },
  { icon: LabIcon,      label: "Research Labs" },
  { icon: HealthIcon,   label: "Healthcare" },
  { icon: AgriIcon,     label: "Agriculture" },
  { icon: AutoIcon,     label: "Automotive" },
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
  "/gallery/j14.jpg",
  "/gallery/j15.jpg",
  "/gallery/j16.jpg",
  "/gallery/j17.jpg",
  "/gallery/j18.jpg",
  "/gallery/j19.jpg",
  "/gallery/j20.jpg",
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
  { title: "RC Robo Race",     spec: "High-RPM metal gear motors, drift chassis", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop", slug: "apex-race-bot-v2" },
  { title: "RC Robo Soccer",   spec: "Solenoid active kicker, pneumatic cylinder", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop", slug: "striker-pneumatic-soccer-bot" },
  { title: "RC Robo War",      spec: "Hardened steel spinner, 15kg weight class", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop", slug: "titan-combat-bot-15kg" },
  { title: "RC Robo Sumo",     spec: "Rare-earth magnets, high-traction tires", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop", slug: "shogun-sumo-bot" },
  { title: "RC Boat",          spec: "Brushless water-cooled motor, fiberglass hull", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=400&fit=crop", slug: "aquajet-rc-speedboat" },
  { title: "Hovercraft",       spec: "Dual-motor air cushion, lightweight shroud", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop", slug: "aquajet-rc-speedboat" },
  { title: "Line Follower",    spec: "PID sensor arrays, high-speed micro-metal gear", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop", slug: "tracker-pid-line-follower" },
  { title: "Maze Solver",      spec: "Micromouse mapping algorithms, encoder motors", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop", slug: "micromouse-maze-solver" },
  { title: "Drone Kit",        spec: "Pixhawk Cube Orange flight avionics, carbon fiber", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop", slug: "falcon-quadcopter-build-kit" },
  { title: "Water Rocketry",   spec: "Aerodynamic launcher, pressurized nozzles", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", slug: "falcon-quadcopter-build-kit" },
];

export default function HomeClient() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  return (
    <div className="flex flex-col bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white hero-grid hero-gradient pt-24 pb-12 border-b border-border/40">
        
        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center text-left relative z-10"
            >
              {/* Glowing Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-accent mb-6 w-fit shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] tracking-[0.08em] font-extrabold uppercase">
                  Coimbatore's Premier Robotics Core
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 tracking-tight leading-[1.05] font-heading">
                Engineering the <span style={{ color: '#FF6A00' }} className="underline decoration-4 decoration-accent/25 underline-offset-4">Future</span>
                <br />
                of <span style={{ color: '#FF6A00' }}>Robotics & AI</span>
              </h1>

              {/* Slogan */}
              <div className="mb-6 border-l-2 border-accent pl-4 py-1">
                <p className="text-base sm:text-lg font-black text-text-primary font-heading leading-tight mb-1">
                  தமிழின் தொழில்நுட்பம், நாளைய உலகிற்காக
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-accent tracking-wider uppercase leading-none">
                  Tamizh Technology for Tomorrow’s World
                </p>
              </div>

              <p className="text-base md:text-lg text-text-secondary mb-5 leading-relaxed font-sans max-w-xl">
                <span style={{ color: '#FF6A00' }} className="font-bold">TamizhTech Robotics Company</span> is a premier indigenously-focused automation firm headquartered in Tamil Nadu, delivering cutting-edge automation, AI models, and custom machinery across industries.
              </p>

              {/* Technical Value Highlights Deck */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 text-left max-w-md">
                {[
                  "Competition Robotics Platforms",
                  "B2B Automation & PLCs",
                  "Rapid 3D Prototyping Services",
                  "School & College STEM Labs"
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-start gap-4 flex-wrap">
                <Link href="/services" className="w-full sm:w-auto">
                  <Button className="w-full justify-center text-base font-bold shadow-[0_4px_14px_rgba(255,106,0,0.2)] hover:shadow-[0_8px_24px_rgba(255,106,0,0.35)] hover:-translate-y-px transition-all rounded-full btn-primary-orange">
                    Explore Services <ArrowRight className="w-5 h-5 ml-1.5" />
                  </Button>
                </Link>
                <Link href="/products" className="w-full sm:w-auto">
                  <Button className="w-full justify-center text-base font-bold hover:bg-subtle hover:-translate-y-px transition-all rounded-full btn-outline-orange">
                    Buy Products
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right side: Premium Humanoid Robot Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 h-[320px] sm:h-[400px] lg:h-[500px] relative w-full group flex items-center justify-center"
            >
              {/* Radial Halo Glow Behind Robot */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
              
              <Image
                src="/hero-robot.png"
                alt="TamizhTech Humanoid Robot"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02] z-10"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.2 FESTFIND LIVE SHOWCASE */}
      <section className="bg-white py-16 border-b border-border/40 text-left relative overflow-hidden">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: FestFind Map Image */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[360px] w-full rounded-2xl border border-border/80 bg-zinc-950 overflow-hidden shadow-lg group">
              <Image
                src="/find fest.png"
                alt="FestFind Live Map"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Right Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                Technical Event Tracker
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-text-primary uppercase tracking-tight leading-none">
                Track Live College <br />
                <span style={{ color: '#FF6A00' }}>Symposiums & Hackathons</span>
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-sans max-w-xl">
                Explore FestFind — our dedicated event discovery network. Track robotics tournaments, academic seminars, coding hackathons, and design championships across top institutions in Tamil Nadu in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://festfind.live/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full justify-center text-base font-bold shadow-[0_4px_14px_rgba(255,106,0,0.2)] hover:shadow-[0_8px_24px_rgba(255,106,0,0.35)] hover:-translate-y-px transition-all rounded-full btn-primary-orange">
                    Open FestFind Map ↗
                  </Button>
                </a>
                <Link href="/festfind" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full justify-center text-base font-bold hover:-translate-y-px transition-all rounded-full btn-outline-orange">
                    About FestFind
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.5 STATS BAND */}
      <section className="bg-subtle border-y border-border py-10">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {[
              { target: 180, suffix: "+", label: "Competition Wins", icon: Award },
              { target: 15,  suffix: "+", label: "Industry Partners", icon: Users },
              { target: 300, suffix: "+", label: "Events Participated", icon: Globe },
              { target: 1,   suffix: "K+", label: "Students Trained", icon: GraduationCap },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-4 md:p-0"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent mb-3">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <StatCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    customCard={true}
                    numberClassName="text-3xl md:text-4xl font-black text-text-primary tracking-tight font-heading"
                    labelClassName="mt-1 text-xs font-bold text-text-muted uppercase tracking-wider block"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRO (WHO WE ARE) */}
      <section className="section bg-white text-text-primary py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Image */}
            <AnimatedSection direction="left">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-md border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                  alt="TamizhTech engineering lab"
                  fill className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-border p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,106,0,0.4)]" />
                    <span className="text-text-primary text-xs font-bold tracking-wide uppercase">Active R&D Lab • Coimbatore</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right side: Text */}
            <AnimatedSection direction="right" delay={0.1}>
              <span className="text-xs font-bold tracking-wider text-accent uppercase mb-4 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                A new kind of<br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">engineering company</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                <span className="text-accent font-semibold">TamizhTech Robotics Company</span> bridges the gap between education and industry.
                We design, build, and deploy advanced <span className="text-accent font-semibold">robotic and AI systems</span> while
                educating the next generation of engineers.
              </p>
              <div className="space-y-4">
                {[
                  "Founded in Coimbatore, Tamil Nadu",
                  "Serving 15+ industry partners",
                  "1000+ students trained nationwide"
                ].map(pt => (
                  <div key={pt} className="flex items-center gap-3 text-text-primary">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-semibold">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <Button variant="outline" className="font-bold">
                    About TamizhTech <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2.5 OUR JOURNEY SECTION */}
      <section className="section bg-subtle py-24 border-t border-border/30 overflow-hidden">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Our Journey"
              title="From Club"
              highlight="to Company"
              subtitle="The evolution of TamizhTech Robotics Company over the years."
            />
          </AnimatedSection>

          {/* Horizontal Infinite Marquee Slider */}
          <div className="relative w-full overflow-hidden py-4">
            <InfiniteSlider gap={24} duration={35} durationOnHover={100} className="w-full">
              {[
                { year: "2021", text: "Tamizh Robotics Club was established." },
                { year: "2022", text: "Started participating in robotics competitions across Tamil Nadu." },
                { year: "2023", text: "Expanded participation to national and international competitions." },
                { year: "2024", text: "Tamizh Tech Robotics Company was officially established." },
                { year: "2025", text: "Robotics products supplied to schools and colleges across India." },
                { year: "2026", text: "Launch of ThiranOli Academy." },
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 w-[280px] sm:w-[320px] relative pt-6"
                >
                  {/* Dot indicator aligned to the card top */}
                  <div className="absolute top-[18px] left-6 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-white shadow-sm z-20" />

                  {/* Card container */}
                  <Card className="relative z-10 flex flex-col p-6 bg-white border border-border/80 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-black text-accent mb-2 font-heading tracking-tight">{step.year}</div>
                    <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                      {step.text}
                    </p>
                  </Card>
                </div>
              ))}
            </InfiniteSlider>
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



      {/* 5. WHY TAMIZHTECH SECTION */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16 text-center">
            <SectionHeader
              tag="Why Choose Us"
              title="The TamizhTech"
              highlight="difference"
              subtitle="What sets us apart in custom engineering and robotics solutions."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title} className="text-left flex flex-col items-start space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center text-accent">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-text-primary">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. STATS BAND (REPEAT) */}
      <section className="bg-subtle border-y border-border py-10">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {[
              { target: 180, suffix: "+", label: "Competition Wins", icon: Award },
              { target: 15,  suffix: "+", label: "Industry Partners", icon: Users },
              { target: 300, suffix: "+", label: "Events Participated", icon: Globe },
              { target: 1,   suffix: "K+", label: "Students Trained", icon: GraduationCap },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center p-4 md:p-0"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent mb-3">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <StatCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    customCard={true}
                    numberClassName="text-3xl md:text-4xl font-black text-text-primary tracking-tight font-heading"
                    labelClassName="mt-1 text-xs font-bold text-text-muted uppercase tracking-wider block"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.5 ROBOTICS COMPETITION EXCELLENCE SECTION */}
      <section className="section bg-white py-24 border-t border-border/30 overflow-hidden">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Competition Excellence"
              title="Robotics Competition"
              highlight="Excellence"
              subtitle="We have designed, developed, and competed with a wide range of robotics systems. All of these competition-ready, battle-tested platforms are built in-house and are available at our company for custom fabrication, training, and events."
            />
          </AnimatedSection>

          {/* Horizontal scroll snap on mobile, Grid on desktop */}
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-5 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0">
            {competitions.map((comp) => {
              return (
                <div key={comp.title} className="snap-start shrink-0 w-[260px] sm:w-auto h-full">
                  <Card className="h-full bg-white border border-border hover:border-accent/40 p-0 flex flex-col justify-between group overflow-hidden transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-subtle">
                      <Image
                        src={comp.image}
                        alt={comp.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 280px, 200px"
                      />
                      <div className="absolute top-3 left-3 bg-accent text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Available Now
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-bold font-heading text-text-primary text-base mb-2 group-hover:text-accent transition-colors">
                          {comp.title}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed mb-4">
                          {comp.spec}
                        </p>
                      </div>
                      <Link 
                        href={`/products/${comp.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent tracking-wider uppercase"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-subtle border border-border px-8 py-5 rounded-lg max-w-2xl mx-auto shadow-sm">
              <span className="text-sm font-semibold text-text-secondary font-sans">
                Need a custom-built competition robot or team mentoring?
              </span>
              <Link href="/products">
                <Button variant="primary" size="sm" className="font-bold">
                  View Competition Kits <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3D Printing Service Section */}
      <section className="section bg-white py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Video */}
            <AnimatedSection className="lg:col-span-6 relative aspect-video bg-black rounded-3xl overflow-hidden border border-border shadow-lg">
              <video
                src="/3d printing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </AnimatedSection>

            {/* Right side: Copy & WhatsApp Button */}
            <AnimatedSection className="lg:col-span-6 flex flex-col justify-center text-left" direction="right" delay={0.1}>
              <span className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-4 block">
                Additive Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                Professional 3D Printing <br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Services</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                Get high-quality 3D printed parts for both <span className="text-accent font-semibold">personal (own)</span> and <span className="text-accent font-semibold">commercial purposes</span>. We deliver industrial-grade dimensional accuracy, durability, and a premium finish at an <span className="text-accent font-semibold">affordable price</span>.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "FDM & SLA Printing",
                  "Rapid Prototyping",
                  "PLA, ABS, PETG, TPU Materials",
                  "Custom Drone & Robot Parts",
                  "Industrial Design Fitment",
                  "Commercial Batch Production"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918148045030?text=Hi%20TamizhTech,%20I%20am%20interested%20in%20your%203D%20Printing%20Services.%20Can%20you%20share%20pricing%20details?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full justify-center bg-accent hover:bg-accent-hover text-white font-bold rounded-lg border-none px-8 py-3">
                    Order via WhatsApp
                  </Button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full justify-center border-border hover:bg-subtle text-text-primary font-bold rounded-lg px-8 py-3">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* 6. JOIN OUR EXCLUSIVE ROBOTICS CLUB */}
      <section className="section bg-subtle py-24 border-t border-border/30 overflow-hidden text-left">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-md border border-border/80 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
            
            <div className="relative z-10 flex-1 space-y-6">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                Exclusive Club Membership
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-text-primary uppercase tracking-tight leading-none">
                Join our exclusively <br />
                <span style={{ color: '#FF6A00' }}>Robotics Club</span>
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xl font-sans">
                Unlock direct access to advanced robotics kits, professional R&D testing labs, student competitions training, and expert mentoring. Connect with Coimbatore's largest community of young makers and engineering minds.
              </p>
              
              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Hands-on Arena Tournaments",
                  "Advanced R&D Testing Tools",
                  "Expert Project Mentorship",
                  "National-Level Certifications"
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-3 text-xs font-semibold text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col gap-3">
              <Link href="/robotics-club/join" className="w-full">
                <Button size="lg" className="w-full justify-center text-base font-bold shadow-[0_4px_14px_rgba(255,106,0,0.2)] hover:shadow-[0_8px_24px_rgba(255,106,0,0.35)] hover:-translate-y-px transition-all rounded-full btn-primary-orange">
                  Join Club Now
                </Button>
              </Link>
              <Link href="/robotics-club" className="w-full">
                <Button size="lg" className="w-full justify-center text-base font-bold hover:-translate-y-px transition-all rounded-full btn-outline-orange">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer border border-border bg-subtle"
                onClick={() => setActiveImageIdx(idx)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-accent text-white text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-sm">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link href="/gallery">
              <Button variant="outline" className="font-bold">
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
              <span className="text-xs font-bold tracking-wider text-accent uppercase mb-4 block">FAQ</span>
              <h2 className="text-3xl font-black text-text-primary tracking-tight leading-tight mb-4 font-heading">
                Frequently Asked<br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Questions</span>
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                Can't find the answer you're looking for? Reach out to our technical support desk on our contact page.
              </p>
            </AnimatedSection>
            
            <div className="lg:col-span-2 divide-y divide-border border-y border-border">
              {faqs.map((faq, i) => {
                const isOpen = activeFaqIdx === i;
                return (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setActiveFaqIdx(isOpen ? null : i)}
                      className="flex items-center justify-between w-full text-left font-bold font-heading text-lg text-text-primary hover:text-accent transition-colors focus:outline-none"
                    >
                      <span className={isOpen ? "text-accent" : "text-text-primary"}>
                        {faq.q}
                      </span>
                      {/* Plus icon rotates to X on open */}
                      <span className="ml-4 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-border text-text-secondary hover:border-accent">
                        <span className={`transform transition-transform duration-300 font-normal text-sm ${isOpen ? "rotate-45" : "rotate-0"}`}>
                          ＋
                        </span>
                      </span>
                    </button>
                    {/* Collapsible Answer */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-text-secondary leading-relaxed font-sans">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. START BUILDING (FINAL CTA BAND) */}
      <section className="bg-dark-contrast py-24 text-text-contrast relative overflow-hidden">
        {/* Subtle orange accent glow behind */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container relative z-10 px-6 max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-heading tracking-tight text-white uppercase">
              Ready to build something <span className="text-accent">extraordinary</span>?
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Whether you need a custom <span className="text-accent font-semibold text-orange-500">robotic system</span>, <span className="text-accent font-semibold text-orange-500">AI camera models</span>, <span className="text-accent font-semibold text-orange-500">STEM Tinkering labs</span>, or advanced <span className="text-accent font-semibold text-orange-500">certification courses</span>, we are here to support your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full justify-center text-base font-bold text-white bg-accent hover:bg-accent-hover px-8 py-3 rounded-lg border-none">
                  Contact Us <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/courses" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-base font-bold text-white border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg">
                  Browse Courses
                </Button>
              </Link>
            </div>
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
