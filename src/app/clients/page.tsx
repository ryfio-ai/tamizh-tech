"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MessageCircle, School, Factory, Trophy, Globe, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Building2, MoveRight } from "lucide-react";
import Link from "next/link";

const clients = [
  { name: "Bonifon Systems", type: "Industrial OEM" },
  { name: "Nura Robotics", type: "Technology Partner" },
  { name: "Adithya Tech", type: "Automation Partner" },
  { name: "Tech-X Robot", type: "Robotics OEM" },
  { name: "RYFIO Digital", type: "Software Partner" },
  { name: "Yoi Robotics Lab", type: "Research Strategic" },
  { name: "RoboAiQ", type: "AI Integration" },
  { name: "Aalam Precision", type: "Manufacturing" },
];

const impactCases = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: "High-Volume Assembly Automation",
    client: "Tier-1 Automotive Component OEM",
    outcome: "45% throughput increase in 6 months.",
    v: "Industrial"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Enterprise Logistics OS Deployment",
    client: "Global E-commerce Fulfillment Hub",
    outcome: "Recovered 3,000+ monthly man-hours.",
    v: "Digital"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Precision Defense Micro-Actuators",
    client: "National Health-Tech Research Lab",
    outcome: "Verified 5-micron precision standard.",
    v: "R&D"
  },
];

export default function ClientsPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Partnerships</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Trusted by <br /> Industry <br /> Leaders.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10 uppercase tracking-tight font-bold">
            A comprehensive visual documentation of specialized robotics deployments, technical R&D milestones, and localized engineering excellence across the Tamizh Tech Pvt Ltd ecosystem.
          </p>
        </div>

        {/* Corporate Slider */}
        <div className="py-20 border-y border-border-light bg-white mb-40 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
             <Building2 className="w-64 h-64 text-secondary-main" />
           </div>
           <div className="container mx-auto px-6 mb-16 relative z-10 text-center lg:text-left">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted flex items-center gap-4 justify-center lg:justify-start">
                <span className="w-8 h-[2px] bg-primary-main"></span> DIRECT TECHNICAL COLLABORATIONS
              </p>
           </div>
           <div className="relative z-10">
             <InfiniteSlider gap={40} duration={50} durationOnHover={100}>
               {clients.map((c) => (
                 <div key={c.name} className="flex items-center gap-6 px-10 py-8 border border-border-light bg-bg-page shadow-sm hover:shadow-xl transition-all duration-500 industrial-card group">
                   <div className="w-12 h-12 bg-secondary-main text-primary-main flex items-center justify-center font-black text-xl tracking-tighter group-hover:bg-primary-main group-hover:text-white transition-all">{c.name.charAt(0)}</div>
                   <div>
                     <p className="font-black text-sm text-text-primary uppercase tracking-tighter whitespace-nowrap">{c.name}</p>
                     <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mt-1">{c.type}</p>
                   </div>
                 </div>
               ))}
             </InfiniteSlider>
           </div>
        </div>

        {/* Technical Impact Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Measured Engineering Impact</h3>
              <div className="flex-1 h-[2px] bg-primary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {impactCases.map((cs) => (
                <div key={cs.title} className="bg-white border border-border-light p-10 lg:p-14 flex flex-col industrial-card group shadow-sm hover:shadow-2xl transition-all h-full">
                   <div className="w-16 h-16 bg-bg-page border border-border-light rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500 mb-10">
                      {cs.icon}
                   </div>
                   <span className="text-[9px] font-black text-primary-main bg-primary-main/5 px-4 py-2 border border-primary-main/20 uppercase tracking-widest mb-8 inline-block w-fit">{cs.v} Division</span>
                   <h4 className="text-2xl font-black text-text-primary mb-6 tracking-tighter uppercase leading-tight group-hover:text-primary-main transition-colors">{cs.title}</h4>
                   <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-10 border-l-2 border-border-light pl-4 leading-relaxed font-sans">{cs.client}</p>
                   <div className="mt-auto pt-8 border-t border-border-light flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-secondary-main shrink-0 stroke-[3]" />
                      <span className="text-[11px] font-black text-text-primary uppercase tracking-tight italic">{cs.outcome}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* National Deployment Map Simulation */}
        <div className="bg-secondary-main p-16 lg:p-32 relative overflow-hidden mb-40 shadow-2xl">
           <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
           <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
                 <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-[0.95]">National <br /> Engineering <br /> Footprint.</h2>
                 <p className="text-lg text-white/50 leading-relaxed font-bold uppercase tracking-tight">Our technical teams provide on-site setup, audits, and maintenance across 15+ states and 50+ major industrial clusters in India.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { val: "15+", label: "ACTIVE STATES" },
                      { val: "50+", label: "INDUSTRIAL HUBS" },
                    ].map(st => (
                      <div key={st.label} className="border-l-2 border-primary-main pl-6 py-2">
                        <div className="text-4xl font-black text-white tracking-tighter">{st.val}</div>
                        <div className="text-[9px] font-black text-white/30 tracking-widest mt-2">{st.label}</div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
                 <div className="relative w-full aspect-square bg-white/5 border border-white/10 rounded-full flex items-center justify-center p-10 group overflow-hidden">
                    <Globe className="w-48 h-48 text-primary-main opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary-main rounded-full shadow-[0_0_20px_#F47A20]" />
                    <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-primary-main rounded-full animate-pulse shadow-[0_0_20px_#F47A20]" />
                    <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-primary-main rounded-full shadow-[0_0_20px_#F47A20]" />
                    <div className="absolute top-[60%] left-[45%] w-4 h-4 bg-primary-main rounded-full animate-pulse shadow-[0_0_20px_#F47A20]" />
                 </div>
              </div>
           </div>
        </div>

        {/* Partner CTA */}
        <div className="bg-white border-4 border-primary-main p-20 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <ShieldCheck className="w-32 h-32 text-secondary-main" />
           </div>
           <div className="relative z-10">
             <h4 className="text-4xl font-black text-text-primary tracking-tighter mb-8 uppercase leading-none">Scale Your <br /> Technical Ambitions.</h4>
             <p className="text-text-secondary leading-relaxed font-bold mb-12 uppercase text-xs tracking-widest max-w-2xl mx-auto">Join a network of global industrial leaders leveraging Tamizh Tech Pvt Ltd&apos;s dual hardware-software ecosystem for operational excellence.</p>
             <Link href="/contact" className="btn-primary py-6 px-12 inline-flex shadow-xl">PARTNER WITH TAMIZH TECH</Link>
           </div>
        </div>

      </div>
    </div>
  );
}

function Database(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" />
      <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" />
    </svg>
  );
}
