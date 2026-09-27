"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Zap, FlaskConical, GraduationCap, Briefcase,
  Users, Award, Globe, CheckCircle, Grid, X, ChevronLeft, ChevronRight,
  ShieldCheck, Wrench, Cpu, Bot, Scissors, Printer, Factory
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { StatCounter } from "@/components/ui/StatCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  RoboticsIcon, AIIcon, DroneIcon, IoTIcon, EmbeddedIcon, AutomationIcon,
  MfgIcon, EduIcon, DefIcon, CityIcon, LabIcon, HealthIcon, AgriIcon, AutoIcon
} from "@/components/ui/CustomIcons";
import { CustomerReviewsSection } from "@/components/home/CustomerReviewsSection";

// Data
const services = [
  { icon: RoboticsIcon, title: "Robotics", desc: "Custom robotic systems from concept to deployment.", color: "blue", href: "/services#robotics" },
  { icon: AIIcon, title: "Artificial Intelligence", desc: "ML models, vision AI, and intelligent automation.", color: "purple", href: "/services#ai" },
  { icon: DroneIcon, title: "Drone Technology", desc: "UAV design, control systems, and aerial solutions.", color: "sky", href: "/services#drone" },
  { icon: IoTIcon, title: "IoT", desc: "Connected ecosystems for smart environments.", color: "teal", href: "/services#iot" },
  { icon: EmbeddedIcon, title: "Embedded Systems", desc: "Firmware, microcontrollers, and embedded dev.", color: "orange", href: "/services#embedded" },
  { icon: AutomationIcon, title: "Industrial Automation", desc: "Process automation for modern manufacturing.", color: "red", href: "/services#automation" },
  { icon: Zap, title: "STEM Labs", desc: "Turnkey tinkering labs for schools and colleges.", color: "yellow", href: "/courses#school" },
  { icon: FlaskConical, title: "R&D Projects", desc: "Research-grade engineering and product prototyping.", color: "green", href: "/projects" },
  { icon: GraduationCap, title: "Courses", desc: "Structured programs for students & professionals.", color: "indigo", href: "/courses" },
  { icon: Briefcase, title: "Consulting", desc: "Expert guidance for tech projects and innovation.", color: "pink", href: "/contact" },
];

const stats = [
  { value: "180+", label: "Competition Wins" },
  { value: "15+", label: "Industry Partners" },
  { value: "300+", label: "Events Participated" },
  { value: "1K+", label: "Students Trained" },
];

const industries = [
  { icon: MfgIcon, label: "Manufacturing" },
  { icon: EduIcon, label: "Education" },
  { icon: DefIcon, label: "Defense" },
  { icon: CityIcon, label: "Smart Cities" },
  { icon: LabIcon, label: "Research Labs" },
  { icon: HealthIcon, label: "Healthcare" },
  { icon: AgriIcon, label: "Agriculture" },
  { icon: AutoIcon, label: "Automotive" },
];

const whyUs = [
  {
    icon: CheckCircle,
    title: "Quality-Focused",
    badge: "Quality Priority",
    desc: "We prioritize practical product and engineering quality across tournament robots, components, and fabrication.",
    highlight: "Quality as Key Parameter"
  },
  {
    icon: Award,
    title: "Competitive Value",
    badge: "Value Always",
    desc: "We aim to keep products and services competitively priced with transparent scopes and no artificial markups.",
    highlight: "Accessible & Fair Pricing"
  },
  {
    icon: Zap,
    title: "Practical Engineering",
    badge: "Built for Real Use",
    desc: "Solutions and hardware platforms are engineered around actual use cases, from student tournaments to factory floors.",
    highlight: "Real-World Engineering"
  },
  {
    icon: ShieldCheck,
    title: "Clear Communication",
    badge: "Transparent Scope",
    desc: "Specifications, inclusions, and limitations are communicated clearly before enquiry and ordering.",
    highlight: "Informed Decision-Making"
  },
  {
    icon: Users,
    title: "Direct Support",
    badge: "Direct Team Access",
    desc: "Customers and engineering teams can discuss their requirements directly with our technical team.",
    highlight: "Direct Team Communication"
  },
];

const projects = [
  { title: "Autonomous Navigation Robot", category: "Robotics", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop", href: "/projects" },
  { title: "AI Vision Quality Inspection", category: "AI", image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop", href: "/projects" },
  { title: "Agricultural Drone System", category: "Drone", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop", href: "/projects" },
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
  { q: "What is TamizhTech Robotics Company?", a: "TamizhTech is an indigenous robotics engineering company based in Coimbatore, Tamil Nadu. We specialize in custom competition combat bots, turnkey STEM lab setups for schools, custom PCB design and assembly, embedded firmware development, and B2B industrial automation." },
  { q: "Do you design and build custom competition robots?", a: "Yes. TamizhTech designs and manufactures national-level competition robots, including Line Followers (TTRC LF 5.0), RC Robo Race, RC Robo Soccer, and custom combat bots (Beetleweight to Featherweight) with 180+ podium competition wins." },
  { q: "Do you offer PCB design, fabrication, and SMT assembly in Coimbatore?", a: "Yes. We deliver complete turnkey PCB engineering services, from schematic capture and multi-layer layout (1, 2, 4-layer FR-4) to bare board fabrication, component sourcing, SMT/THT assembly, and bench testing in our Coimbatore lab." },
  { q: "What industrial automation solutions do you provide for factories?", a: "We engineer industrial automation solutions including PLC control panel wiring, SCADA telemetry dashboards, computer vision defect inspection, machine retrofitting, and Autonomous Mobile Robots (AMRs) for manufacturing units in Coimbatore and South India." },
  { q: "How does TamizhTech set up STEM tinkering labs for schools?", a: "We provide end-to-end STEM tinkering lab setups for schools (CBSE, ICSE, State Board, and ATL grants). This includes ESD workbenches, Arduino/ESP32 kits, 3D printers, soldering bays, 40-week NEP 2020 curriculum, and hands-on teacher training." },
  { q: "Can engineering colleges get robotics R&D lab support?", a: "Yes. We partner with engineering colleges across Tamil Nadu under MoU frameworks to establish robotics R&D centers, provide faculty development programs (FDP), and mentor student teams for national robotics championships." },
  { q: "Do you offer custom 3D printing and laser cutting services?", a: "Yes. We provide precision FDM 3D printing (PLA, PETG, ABS) and fiber laser cutting for SS304/SS316 stainless steel and aluminium chassis parts with rapid local turnaround in Coimbatore." },
  { q: "How do I submit an engineering requirement or request a quotation?", a: "You can submit your engineering requirements directly through our online quote forms, contact page, or WhatsApp CTA. Every enquiry is registered into our central ERP system and receives a tracking reference (e.g., TTRC-RFQ-2026-XXXX)." },
];

const partnerLogos = [
  { name: "PSG College of Technology" },
  { name: "Amrita Vishwa Vidyapeetham" },
  { name: "Kumaraguru College of Technology" },
  { name: "Coimbatore Institute of Technology" },
  { name: "AutoCorp Industries" },
];

const competitions = [
  { title: "RC Robo Race", spec: "High-RPM metal gear motors, drift chassis, carbon fiber structure.", image: "/product/race/race1.png", categorySlug: "competition", slug: "rc-robo-race" },
  { title: "RC Robo Soccer", spec: "Pneumatic active striker mechanism, omni-directional wheels, customized RC remote.", image: "/product/soccer/soccer 1.0.png", categorySlug: "competition", slug: "rc-robo-soccer" },
  { title: "Flysky FS-i6X 10CH", spec: "2.4GHz 10-Channel AFHDS 2A Transmitter & FS-iA10B Receiver.", image: "/product/flysky/flysky-fs-i6x-10ch.jpg", categorySlug: "radio-controllers", slug: "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
];

function LazyVideo({ src = "/3d printing.mp4" }: { src?: string }) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {inView ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-zinc-900" />
      )}
    </div>
  );
}

export default function HomeClient() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <div className="flex flex-col bg-white">

      {/* 1. HERO SECTION: compact on mobile, fits viewport on desktop */}
      <section
        ref={heroRef}
        className="relative flex items-center overflow-hidden bg-white hero-grid hero-gradient border-b border-border/40 py-6 md:py-0 md:min-h-[calc(100dvh-80px)] mt-20"
      >
        {/* Global radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_100%_50%,rgba(255,136,0,0.10),transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[46%_54%] items-center gap-6 md:gap-0">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="flex flex-col justify-center text-left relative z-10 py-2 md:py-0 pr-0 md:pr-6 lg:pr-10 gap-4"
            >
              {/* Eyebrow */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="flex items-center gap-2 text-[#FF6B00] font-bold text-xs sm:text-sm md:text-[15px] tracking-[0.1em] uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
                <span>INDIA&apos;S LEADING GAMIFIED PLATFORM</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="font-black text-text-primary font-heading tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-5xl lg:text-[3.6rem] uppercase"
              >
                Learn. Build.<br />
                Play.{' '}
                <span className="text-accent underline decoration-4 decoration-accent/25 underline-offset-6">
                  Compete.
                </span>
              </motion.h1>

              {/* Tamil tagline & secondary motto */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="border-l-2 border-accent pl-3.5 py-0.5 space-y-0.5"
              >
                <p className="text-xs sm:text-sm font-black text-text-primary font-heading leading-snug">
                  தமிழின் தொழில்நுட்பம், நாளைய உலகிற்காக
                </p>
                <p className="text-[11px] sm:text-xs font-bold text-accent tracking-wide">
                  More Than Robots. We Build Skills, Ideas & Innovation.
                </p>
              </motion.div>

              {/* Supporting headline */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="text-xs sm:text-base text-text-secondary leading-relaxed font-sans max-w-[480px]"
              >
                Hands-on robotics, competition hardware and engineering solutions for students, schools, colleges, makers and businesses.
              </motion.p>

              {/* Supporting proof categories */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              >
                {[
                  "Robotics Education",
                  "Competition Hardware",
                  "Robotics Products & Parts",
                  "Automation & Solutions",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {feat}
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="flex items-center gap-3 flex-wrap pt-1"
              >
                <Link href="/solutions" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center pl-6 pr-2 py-2.5 text-sm font-bold text-white bg-accent hover:bg-accent-hover rounded-full shadow-[0_4px_16px_rgba(255,106,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,106,0,0.35)] active:scale-[0.98] transition-all duration-300 group">
                    <span>Explore Our Robotics World</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center pl-6 pr-2 py-2.5 text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-full shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all duration-300 group">
                    <span>Build With Us</span>
                    <span className="w-8 h-8 rounded-full bg-slate-200/80 group-hover:bg-accent/15 flex items-center justify-center ml-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0">
                      <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-accent" />
                    </span>
                  </button>
                </Link>
              </motion.div>

              {/* Supporting B2B/B2C Micro-strip */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="text-[11px] font-semibold text-text-muted tracking-wide pt-0.5"
              >
                Schools & Colleges • Student Competitions • Hardware Startups • Industrial Plants
              </motion.p>
            </motion.div>

            {/* RIGHT COLUMN: TamizhTech Robotics Fleet Showcase */}
            <div className="relative flex items-center justify-center w-full py-4 lg:py-6">
              {/* Diffused Ambient Glow Behind the Showcase */}
              <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-tr from-accent/20 via-accent/5 to-transparent rounded-[2.8rem] blur-2xl opacity-60 pointer-events-none -z-10" />

              {/* Machined Double-Bezel Hardware Showcase Container with scroll parallax & soft zoom */}
              <motion.div
                style={shouldReduceMotion ? {} : { y: heroY, scale: heroScale }}
                className="relative w-full max-w-[600px] p-2 sm:p-2.5 rounded-[2rem] sm:rounded-[2.4rem] bg-slate-100/90 ring-1 ring-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.12)]"
              >
                <div className="relative w-full aspect-[3/2] rounded-[calc(2rem-0.5rem)] sm:rounded-[calc(2.4rem-0.625rem)] overflow-hidden bg-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.03)] border border-slate-200/60">
                  {/* Product Fleet Photograph */}
                  <Image
                    src="/hero-combined.jpg"
                    alt="TamizhTech Robotics Fleet: Combat Robot, Bipedal Platform, Line Follower and All-Terrain Rover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 590px"
                    className="object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                    priority
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.1 COMMERCIAL PRINCIPLE: QUALITY FIRST. VALUE ALWAYS. */}
      <section className="bg-white border-b border-[#E5E5E5] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-accent text-xs font-bold tracking-[0.16em] uppercase mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Commercial Positioning</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight text-[#111111] uppercase leading-tight">
              QUALITY FIRST. <span className="text-accent">VALUE ALWAYS.</span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-text-secondary leading-relaxed">
              Quality is our key parameter, paired with competitive pricing across our robotics products and engineering services. We focus on dependable quality, practical engineering and competitive pricing across products and services.
            </p>
          </div>

          {/* Double-Bezel Dual Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Pillar 1 */}
            <div className="p-1 rounded-3xl bg-slate-100/80 ring-1 ring-slate-200/80">
              <div className="p-6 sm:p-7 rounded-[calc(1.5rem-4px)] bg-white h-full border border-slate-200/60 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent font-mono">01 / Discipline</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-50 text-accent border border-orange-200/60">Quality Standard</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary mb-2">Engineered for Dependability</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Tournament-tested combat frames, IPC-compliant PCB layouts, high-precision SS 304/316 fiber laser cut brackets, and industrial grade deterministic firmware.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Podium-proven engineering quality</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-1 rounded-3xl bg-slate-100/80 ring-1 ring-slate-200/80">
              <div className="p-6 sm:p-7 rounded-[calc(1.5rem-4px)] bg-white h-full border border-slate-200/60 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent font-mono">02 / Integrity</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200/80">Direct Pricing</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary mb-2">Transparent Commercial Value</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Accessible, fair pricing with zero middleman inflations. All hardware products and service scopes are communicated transparently before production.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Direct Coimbatore engineering pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Island Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/products">
              <button className="inline-flex items-center pl-6 pr-2 py-2 text-xs sm:text-sm font-bold text-white bg-accent hover:bg-accent-hover rounded-full shadow-xs hover:shadow-md active:scale-[0.98] transition-all group">
                <span>Explore Products</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="inline-flex items-center pl-6 pr-2 py-2 text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-full shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all group">
                <span>Explore Services</span>
                <span className="w-7 h-7 rounded-full bg-slate-200/80 group-hover:bg-accent/15 flex items-center justify-center ml-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-accent" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 1.2 FESTFIND LIVE SHOWCASE */}
      {/* 1.5 STATS BAND */}
      <section className="bg-subtle border-y border-border/60 py-12">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { target: 180, suffix: "+", label: "Competition Wins", icon: Award },
              { target: 15, suffix: "+", label: "Industry Partners", icon: Users },
              { target: 300, suffix: "+", label: "Events Participated", icon: Globe },
              { target: 1, suffix: "K+", label: "Students Trained", icon: GraduationCap },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                  className="p-1 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:shadow-sm hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center p-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <StatCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    customCard={true}
                    numberClassName="text-3xl md:text-4xl font-black text-text-primary tracking-tight font-heading"
                    labelClassName="mt-1 text-[11px] font-bold text-text-muted uppercase tracking-wider block"
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
                  src="/office.png"
                  alt="TamizhTech Headquarters & R&D Office in Coimbatore"
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

          {/* Horizontal Timeline Grid/Scroller with animated connecting progress bar */}
          <div className="relative w-full py-4">
            {/* Connecting progress line behind dots */}
            <div className="hidden lg:block absolute top-[24px] left-6 right-6 h-[2px] bg-slate-200 z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-accent origin-left"
              />
            </div>

            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 relative z-10">
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
                  className="snap-start shrink-0 w-[280px] sm:w-auto relative pt-6"
                >
                  {/* Dot indicator aligned to the card top */}
                  <div className="absolute top-[18px] left-6 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-white shadow-sm z-20" />

                  {/* Card container */}
                  <Card className="h-full flex flex-col p-6 bg-white border border-border/80 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-black text-accent mb-2 font-heading tracking-tight">{step.year}</div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                      {step.text}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="section bg-white engineering-grid py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Industrial Automation & PCB Design"
              title="Robotics & Engineering"
              highlight="Services in Coimbatore"
              subtitle="Specializing in industrial automation, PCB design, 3D printing, laser cutting, and custom robotics development across Tamil Nadu."
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
                View All Engineering Services <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>



      {/* 5. WHY TAMIZHTECH SECTION */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <SectionHeader
              tag="Why Choose Tamizh Tech?"
              title="Quality First."
              highlight="Value Always."
              subtitle="We focus on dependable quality, practical engineering and competitive pricing across our robotics products and engineering services."
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} className="h-full">
                  <div className="h-full bg-white border border-border/80 hover:border-accent/40 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 group">
                    <div>
                      {/* Top Header: Badge & Icon */}
                      <div className="flex items-start justify-between gap-2 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                          <Icon className="w-6 h-6 stroke-[2.25]" />
                        </div>
                        <div className="bg-slate-100 group-hover:bg-accent/10 border border-slate-200/80 group-hover:border-accent/30 text-slate-700 group-hover:text-accent text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="truncate">{item.badge}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-base font-bold font-heading text-text-primary mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                        <p className="text-xs text-text-secondary leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer Highlight */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
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
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0">
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
                      <div className="absolute top-3 left-3 bg-accent text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm backdrop-blur-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Enquire Now</span>
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
                        href={`/products/${comp.categorySlug}/${comp.slug}`}
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

      {/* 5.6 PRODUCT + SERVICE CROSS-POSITIONING: END-TO-END PROJECT SUPPORT */}
      <section className="section bg-slate-50/60 py-20 border-t border-border/30">
        <div className="container px-6 max-w-6xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>End-to-End Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-text-primary uppercase tracking-tight mb-3">
              Supporting Your Build <span className="text-accent">Beyond A Single Product</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              From initial idea to tournament platform and industrial deployment, Tamizh Tech brings together hardware products and engineering services under one roof.
            </p>
          </AnimatedSection>

          {/* Lifecycle Flow Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 relative">
            {[
              { step: "01", title: "Idea", desc: "Requirements, concept scoping & CAD design", icon: FlaskConical, href: "/contact" },
              { step: "02", title: "Robotics Product", desc: "Competition robots, chassis kits & transmitters", icon: Bot, href: "/products/competition" },
              { step: "03", title: "Custom Fabrication", desc: "SS laser cutting & precision 3D printing", icon: Scissors, href: "/services/laser-cutting" },
              { step: "04", title: "PCB", desc: "Design, fabrication & board assembly", icon: Cpu, href: "/services/pcb-design-fabrication-assembly" },
              { step: "05", title: "Automation", desc: "Firmware, kinematics, sensor fusion & PLC", icon: Factory, href: "/services/industrial-automation" },
              { step: "06", title: "Engineering Support", desc: "Testing, direct consultation & team training", icon: Users, href: "/colleges" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.step}
                  href={item.href}
                  className="bg-white border border-border/80 hover:border-accent/40 rounded-xl p-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-black text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {item.step}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {idx < 5 && (
                    <div className="hidden lg:flex justify-end pt-3 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          <p className="text-center text-xs text-text-muted mt-6 italic">
            * Projects can utilize individual products or leverage our multi-disciplinary engineering services as needed.
          </p>
        </div>
      </section>

      {/* 3D Printing Service Section */}
      <section className="section bg-white py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Video */}
            <AnimatedSection className="lg:col-span-6 relative aspect-video bg-black rounded-3xl overflow-hidden border border-border shadow-lg">
              <LazyVideo />
            </AnimatedSection>

            {/* Right side: Copy & WhatsApp Button */}
            <AnimatedSection className="lg:col-span-6 flex flex-col justify-center text-left" direction="right" delay={0.1}>
              <span className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-4 block">
                Additive Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                Functional Parts with Practical <br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Engineering Value</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                Quality-focused 3D printing for robotics, prototypes and functional parts, with quotations based on actual part requirements. Turnaround times are planned realistically based on part geometry, infill density, and machine schedule.
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
                  <Button variant="primary" size="lg" className="w-full justify-center !bg-[#FF6A00] hover:!bg-[#E05300] text-white font-bold rounded-lg border-none px-8 py-3.5 shadow-md shadow-orange-500/20">
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

      {/* Stainless Steel Laser Cutting Service Section */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Copy & Actions */}
            <AnimatedSection className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold tracking-wide uppercase mb-4 w-fit">
                <span>Precision Fiber Laser Cutting</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                Stainless Steel Laser Cutting <br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Engineered for Metal (Not Wood)</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
                We specialize strictly in <span className="text-text-primary font-bold">Stainless Steel (SS 304 & SS 316)</span> and precision sheet metal laser cutting (<span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">strictly metal, not wood or MDF</span>). Engineered for heavy-duty combat bot chassis, custom brackets, motor mounts, industrial panels, and tight-tolerance mechanical assemblies.
              </p>

              <div className="mb-6 p-1 rounded-2xl bg-slate-100/80 ring-1 ring-slate-200/80">
                <div className="p-4 sm:p-5 rounded-[calc(1rem-2px)] bg-white border border-slate-200/60 text-xs text-text-primary space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                    <span>Specialized Stainless Steel Capabilities</span>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    Burr-free clean edge quality with tight mechanical tolerances. Direct processing from DXF, DWG, and STEP CAD files with nesting optimization to minimize metal scrap.
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Stainless Steel SS 304 & SS 316 Sheet Cutting",
                  "Dedicated Metal Laser Cutting (Not Wood)",
                  "Custom Robot Chassis Panels & Brackets",
                  "Clean, Burr-Free Edges & High Accuracy",
                  "DXF / DWG / 2D CAD Nesting Optimization",
                  "Competitive Direct Coimbatore Quotations"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href="https://wa.me/918148045030?text=Hi%20TamizhTech,%20I%20am%20looking%20for%20Stainless%20Steel%20Laser%20Cutting%20services%20(Not%20wood).%20Can%20you%20share%20pricing%20and%20turnaround%20time%20for%20SS%20parts?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center pl-6 pr-2 py-2.5 text-xs sm:text-sm font-bold text-white bg-accent hover:bg-accent-hover rounded-full shadow-xs hover:shadow-md active:scale-[0.98] transition-all group">
                    <span>Order SS Laser Cutting</span>
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </button>
                </a>
                <Link href="/services/laser-cutting" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center pl-6 pr-2 py-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all group">
                    <span>View Laser Cutting Details</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-accent/10 flex items-center justify-center ml-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-accent" />
                    </span>
                  </button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Right side: Video with Double-Bezel Frame */}
            <AnimatedSection className="lg:col-span-6 order-1 lg:order-2" direction="left">
              <div className="p-2 sm:p-2.5 rounded-[2rem] bg-slate-100/90 ring-1 ring-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-video bg-black rounded-[calc(2rem-0.5rem)] overflow-hidden border border-slate-200/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <LazyVideo src="/laser-cutting.mp4" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
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
                <span className="text-accent">Robotics Club</span>
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
                  Explore Robotics Club
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
                  className="object-cover transition-transform duration-250 ease-out group-hover:scale-[1.03]"
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
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
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

      {/* 9.5 CUSTOMER REVIEWS (REAL GOOGLE REVIEWS TRUST LAYER) */}
      <CustomerReviewsSection />

      {/* 10. START BUILDING (FINAL CTA BAND) - Pure Orange & White Brand Identity */}
      <section className="bg-white py-24 text-text-primary border-t border-border/40 relative overflow-hidden">
        {/* Subtle orange accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="container relative z-10 px-6 max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent w-fit mb-4 mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest">Your Idea. Our Innovation.</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-heading tracking-tight text-text-primary uppercase">
              Ready to build something <span className="text-accent">extraordinary</span>?
            </h2>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Whether you need a custom <span className="text-accent font-semibold">robotic system</span>, <span className="text-accent font-semibold">AI camera models</span>, <span className="text-accent font-semibold">STEM Tinkering labs</span>, or advanced <span className="text-accent font-semibold">certification courses</span>, we are here to support your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full justify-center text-base font-bold text-white !bg-[#FF6A00] hover:!bg-[#E05300] px-8 py-3.5 rounded-lg border-none shadow-lg shadow-orange-500/25 transition-all">
                  Contact Us <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/courses" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-base font-bold text-text-primary border-border hover:bg-subtle px-8 py-3.5 rounded-lg">
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

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-[85vw] max-h-[85vh] aspect-[4/3] w-full md:w-[70vw]"
            >
              <Image
                src={galleryImages[activeImageIdx]}
                alt={`Lightbox image ${activeImageIdx + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

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
