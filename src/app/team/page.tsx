import type { Metadata } from "next";
import { Globe, ShieldCheck, Zap, Linkedin, MoveRight, Layers, Cpu, Code2, Factory, Microscope } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Executive Leadership | Engineering & Systems | Tamizh Tech Pvt Ltd",
  description: "Meet the executive leadership and technical division heads driving industrial innovation at Tamizh Tech Pvt Ltd Coimbatore.",
};

const leaders = [
  {
    name: "Tamizharasan K",
    designation: "Founder & Chief Executive Office",
    specialization: "Industrial Automation & Strategy",
    bio: "Lead visionary driving the firm's strategic repositioning and national expansion across 15+ states.",
    image: "/team/Tamizharasan K.jpg"
  },
  {
    name: "Suraj A",
    designation: "Co-founder & Chief Operations Officer",
    specialization: "Deployment & Supply Chain",
    bio: "Ensures operational excellence and technical reliability in high-volume industrial deployments.",
    image: "/team/suraj.jpg"
  },
  {
    name: "Dhanush S",
    designation: "Co-founder & Chief Technology Officer",
    specialization: "Robotics & Embedded Systems",
    bio: "Head of hardware architecture and primary systems integrator for custom robotic hardware.",
    image: "/team/dhanus.jpg"
  },
  {
    name: "Sathish P",
    designation: "Chief Information Officer",
    specialization: "Cloud Infrastructure & Data",
    bio: "Manages the firm's digital ecosystem, remote monitoring stacks, and secure data pipelines.",
    image: "/team/sathish.jpeg"
  }
];

const divisionHeads = [
  {
    name: "Aananth S",
    designation: "Head of Software Engineering",
    specialization: "Full-stack & SaaS Architecture",
    bio: "Leads the digital division, architecting scalable B2B platforms and operational dashboards.",
    image: "/team/anandth.jpg",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    name: "Sukeshan",
    designation: "Head of Research & Development",
    specialization: "AI Vision & Neural Systems",
    bio: "Directs the R&D hub in Coimbatore, specializing in deep learning for industrial inspection.",
    image: "/team/sukesh.jpeg",
    icon: <Microscope className="w-5 h-5" />
  },
  {
    name: "Yuvaraj K",
    designation: "Head of Robotics Engineering",
    specialization: "Kinematics & Multi-axis Systems",
    bio: "Lead mechanical engineer for bespoke industrial arms and multi-axis assembly lines.",
    image: "/team/yuvaraj.png",
    icon: <BotIcon className="w-5 h-5" />
  },
  {
    name: "Kowsik K",
    designation: "Head of Embedded Systems",
    specialization: "PCB Design & Real-time OS",
    bio: "Specializes in high-density board fabrication and secure hardware control protocols.",
    image: "/team/kowsik.jpeg",
    icon: <Cpu className="w-5 h-5" />
  }
];

export default function TeamPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">The Leadership</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Multidisciplinary <br /> Engineering <br /> Minds.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            Meet the executive team and specialized technical heads driving Tamizh Tech Pvt Ltd&apos;s dual-engine strategy in robotics and software engineering.
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Executive Board</h3>
              <div className="flex-1 h-[2px] bg-primary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((member) => (
                <div key={member.name} className="bg-white border border-border-light group overflow-hidden industrial-card shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                   <div className="aspect-[4/5] bg-bg-page overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter mb-2">{member.name}</h4>
                      <p className="text-[9px] font-black text-primary-main uppercase tracking-widest mb-6">{member.designation}</p>
                      <div className="mt-auto pt-6 border-t border-border-light">
                         <p className="text-xs font-bold text-text-secondary leading-relaxed opacity-70 mb-6 uppercase tracking-tight">{member.bio}</p>
                         <p className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                           <Layers className="w-3 h-3" /> {member.specialization}
                         </p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Technical Division Heads */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Technical Division Heads</h3>
              <div className="flex-1 h-[2px] bg-secondary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {divisionHeads.map((member) => (
                <div key={member.name} className="bg-secondary-main p-10 lg:p-14 flex flex-col lg:flex-row gap-10 industrial-card group shadow-2xl relative overflow-hidden h-full">
                   <div className="absolute inset-0 opacity-[0.03] hero-grid pointer-events-none"></div>
                   <div className="w-32 h-32 rounded-2xl bg-white/10 shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all relative z-10 border border-white/10">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="relative z-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-primary-main/20 text-primary-main rounded-lg">
                            {member.icon}
                         </div>
                         <h4 className="text-2xl font-black text-white uppercase tracking-tighter">{member.name}</h4>
                      </div>
                      <p className="text-[10px] font-black text-primary-main uppercase tracking-widest mb-6 px-1">{member.designation}</p>
                      <p className="text-xs font-bold text-white/50 leading-relaxed uppercase tracking-tight max-w-md">{member.bio}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Culture Section */}
        <div className="bg-white border-4 border-secondary-main p-20 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Globe className="w-32 h-32 text-primary-main" />
           </div>
           <div className="relative z-10">
             <h4 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-8 font-sans">Human Infrastructure</h4>
             <h2 className="text-5xl font-black text-text-primary tracking-tighter mb-10 uppercase leading-[0.95]">Join the <br /> Engineering Hub.</h2>
             <p className="text-text-secondary leading-relaxed font-bold mb-12 uppercase text-xs tracking-widest max-w-2xl mx-auto">We are always scouting for high-caliber engineers and technical architects to join our R&D facility in Coimbatore.</p>
             <Link href="/careers" className="btn-secondary py-6 px-12 inline-flex shadow-xl border-2 border-secondary-main">EXPLORE OPPORTUNITIES</Link>
           </div>
        </div>

      </div>
    </div>
  );
}

function BotIcon(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
