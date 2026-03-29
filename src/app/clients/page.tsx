"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MessageCircle, School, Factory, Trophy, Globe, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

const clients = [
  { name: "Bonifon", type: "Industry Partner" },
  { name: "Nura Robotics", type: "Robotics Partner" },
  { name: "Adithya Tech", type: "Tech Partner" },
  { name: "Tech-X Robot", type: "Robotics Partner" },
  { name: "RYFIO", type: "Platform Partner" },
  { name: "Yoi Robotics Lab", type: "Research Partner" },
  { name: "RoboAiQ", type: "AI Partner" },
  { name: "Robo Club SREC", type: "College Club" },
  { name: "Aalam Learning", type: "Education Partner" },
];

const caseStudies = [
  {
    icon: <School className="w-6 h-6" />,
    title: "Robotics Lab Specification for Tier-1 Institutes",
    desc: "Partnered with premier engineering colleges to set up MNC-standard robotics labs — including precise kits and curriculum.",
    outcome: "350+ students graduated in Year 1.",
    badge: "Education"
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Industrial SOP Automation for Manufacturing",
    desc: "Designed a high-speed conveyor sorting robot for a garment assembly line, increasing throughput by 60%.",
    outcome: "Full ROI achieved within 8 months.",
    badge: "Industrial"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "National Robotics Club Network",
    desc: "Established a persistent network of robotics clubs across 20+ institutions with monthly technical hackathons.",
    outcome: "150+ major events over 3 years.",
    badge: "Community"
  },
];

export default function ClientsPage() {
  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Global Partnerships</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Trusted by <span className="text-primary-main">Industry Leaders.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto font-regular leading-relaxed">
            Delivering high-precision robotics and AI solutions to 50+ enterprise clients 
            and leading academic institutions across 15+ Indian states.
          </p>
        </div>
      </section>

      {/* Corporate Slider */}
      <div className="py-12 border-y border-border-light bg-bg-primary">
        <div className="container mx-auto px-4 mb-8 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-text-muted">Direct Technical Collaborations</p>
        </div>
        <InfiniteSlider gap={32} duration={40} durationOnHover={80}>
          {clients.map((c) => (
            <div key={c.name} className="flex items-center gap-4 px-8 py-5 rounded-xl border border-border-light bg-bg-page shadow-sm shrink-0 hover:bg-bg-elevated transition-colors">
              <div className="w-10 h-10 bg-primary-main/10 rounded-lg flex items-center justify-center font-black text-primary-main">{c.name.charAt(0)}</div>
              <div>
                <p className="font-bold text-sm text-text-primary whitespace-nowrap">{c.name}</p>
                <p className="text-[10px] font-medium text-text-tertiary uppercase tracking-wider">{c.type}</p>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>

      {/* Global Reach Stats */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-bg-primary border border-border-light rounded-[2rem] p-10 md:p-16 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 divide-y md:divide-y-0 md:divide-x divide-border-light">
          {[
            { val: "50+", label: "Enterprise Clients" },
            { val: "100+", label: "Solutions Deployed" },
            { val: "15+", label: "States Served" },
            { val: "2M+", label: "Digital Reach" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2 tracking-tighter">{s.val}</span>
              <span className="text-text-tertiary text-[10px] font-bold tracking-[0.2em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Case Studies */}
      <section className="py-24 bg-bg-elevated border-y border-border-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-6 tracking-tight">Technical <span className="text-primary-main">Impact</span></h2>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto">Real-world results achieved through precision robotics and strategic automation deployment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-bg-primary p-12 rounded-2xl border border-border-light shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-primary-light text-primary-main rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-main group-hover:text-text-on-primary transition-all duration-300">
                    {cs.icon}
                </div>
                <span className="text-[10px] font-bold text-primary-main bg-primary-light px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">{cs.badge}</span>
                <h3 className="text-2xl font-bold text-text-primary mb-6 leading-tight group-hover:text-primary-main transition-colors">{cs.title}</h3>
                <p className="text-text-tertiary text-sm leading-relaxed mb-10">{cs.desc}</p>
                <div className="mt-auto flex items-center gap-3 p-4 bg-bg-page rounded-lg border border-border-light">
                  <CheckCircle2 className="w-5 h-5 text-primary-main shrink-0" />
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wider">{cs.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary-main text-text-on-primary font-bold rounded-lg hover:bg-primary-hover shadow-xl transition-all group">
              <MessageCircle className="w-6 h-6" /> Partner with TamizhTech <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Deployment Map Simulation */}
      <section className="py-24 container mx-auto px-4 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-6">Technical Deployment Across <span className="text-primary-main">15+ States</span></h2>
            <p className="text-text-tertiary mb-12">Our localized technical teams provide on-site setup and mentorship across 50+ major cities in India.</p>
            <div className="relative aspect-[21/9] bg-bg-elevated rounded-[2.5rem] border border-border-light shadow-inner flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none hero-gradient" />
                <Globe className="w-32 h-32 text-text-muted opacity-20" />
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary-main rounded-full animate-ping" />
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-primary-main rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-primary-main rounded-full animate-ping" style={{ animationDelay: '2s' }} />
                <p className="relative z-10 text-xs font-bold text-text-muted uppercase tracking-[0.5em]">Global Operations Visualized</p>
            </div>
         </div>
      </section>
    </div>
  );
}
