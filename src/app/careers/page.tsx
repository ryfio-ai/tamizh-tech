"use client";

import React, { useState, useMemo } from "react";
import { 
  Briefcase, Search, Filter, Globe, 
  Clock, CheckCircle, ChevronRight, X, 
  Cpu, Brain, School, LayoutGrid, 
  Palette, MousePointer2, Settings, 
  BarChart, Megaphone, CheckCircle2,
  Zap, Mail, User, Phone, Linkedin,
  Paperclip, ArrowRight, MoveRight, Layers, Code2, Microscope, Bot
} from "lucide-react";
import Link from "next/link";

// --- Types ---
interface CareerRole {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  location: string;
  track: string;
  isUrgent?: boolean;
  type: string;
}

interface FilterState {
  search: string;
  category: string;
}

// --- Roles Data ---
const CAREER_ROLES: CareerRole[] = [
  {
    id: 1,
    title: "Engineering Recruitment | Strategic Hires | Tamizh Tech Pvt Ltd",
    category: "Software Engineering",
    description: "Join the Tamizh Tech Pvt Ltd Robotics Club — hands-on technical training, national competitions, and a professional builder community for the next generation of engineers.",
    duration: "Full-Time",
    location: "Remote / Coimbatore",
    track: "Engineering Elite",
    isUrgent: true,
    type: "Professional Hire"
  },
  {
    id: 2,
    title: "Robotics Club & Community | Tamizh Tech Pvt Ltd",
    category: "Robotics Engineering",
    description: "Design and integrate complex multi-axis robotic cells and synchronized automation workflows for global manufacturing leaders.",
    duration: "Full-Time",
    location: "Coimbatore / On-site",
    track: "Technical Leadership",
    type: "On-site Deployment"
  },
  {
    id: 3,
    title: "Computer Vision Researcher",
    category: "Artificial Intelligence",
    description: "Develop deep learning models for high-accuracy defect detection and spatial mapping for industrial inspection UAVs.",
    duration: "Full-Time / Contract",
    location: "Remote / Hybrid",
    track: "Innovation Lab",
    type: "Research Core"
  },
  {
    id: 4,
    title: "Embedded Firmware Engineer",
    category: "Electronics & IoT",
    description: "Architect secure, low-latency firmware protocols for edge IoT gateways and specialized motor control modules.",
    duration: "Full-Time",
    location: "Remote / Hybrid",
    track: "Hardware Track",
    type: "Systems Core"
  }
];

const CATEGORIES = [
  "All Tracks",
  "Software Engineering",
  "Robotics Engineering",
  "Artificial Intelligence",
  "Electronics & IoT"
];

export default function CareersPage() {
  const [filters, setFilters] = useState<FilterState>({ search: "", category: "All Tracks" });

  const filteredRoles = useMemo(() => {
    return CAREER_ROLES.filter(role => {
      const matchesSearch = role.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                           role.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === "All Tracks" || role.category === filters.category;
      return matchesSearch && matchesCategory;
    });
  }, [filters]);

  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Human Infrastructure</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Build the <br /> Future of <br /> Autonomy.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10 uppercase tracking-tight font-bold">
            Meet the executive team and specialized technical heads driving Tamizh Tech Pvt Ltd&apos;s dual-engine strategy in robotics and software engineering.
          </p>
        </div>

        {/* Portal Controls */}
        <div className="bg-white border border-border-light p-8 md:p-12 shadow-sm mb-16 flex flex-col lg:flex-row gap-8 items-center industrial-card">
           <div className="relative w-full lg:flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-main" />
              <input 
                type="text" 
                placeholder="Search by role or specialization..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full bg-bg-page border-b-2 border-border-light px-16 py-4 text-sm font-black text-text-primary outline-none focus:border-primary-main transition-all uppercase tracking-widest"
              />
           </div>
           <div className="flex gap-4 overflow-x-auto no-scrollbar w-full lg:w-auto">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilters({ ...filters, category: cat })}
                  className={`px-8 py-4 border text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${
                    filters.category === cat 
                      ? "bg-secondary-main text-white border-secondary-main shadow-xl" 
                      : "bg-white text-text-muted border-border-light hover:border-primary-main hover:text-primary-main"
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Role Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
          {filteredRoles.map((role) => (
            <div key={role.id} className="bg-white border border-border-light p-10 lg:p-16 flex flex-col industrial-card group relative shadow-sm hover:shadow-2xl transition-all">
               <div className="flex justify-between items-start mb-10">
                  <span className="text-[9px] font-black px-4 py-2 bg-secondary-main/5 border border-secondary-main/20 text-secondary-main uppercase tracking-[0.2em]">{role.type}</span>
                  {role.isUrgent && <span className="text-[9px] font-black px-3 py-1 bg-red-600 text-white uppercase tracking-widest animate-pulse">Priority Hire</span>}
               </div>

               <h3 className="text-3xl font-black text-text-primary mb-4 tracking-tighter uppercase leading-none group-hover:text-primary-main transition-colors">{role.title}</h3>
               <p className="text-primary-main text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-l-2 border-primary-main pl-4">{role.category}</p>

               <p className="text-text-secondary text-sm font-bold uppercase tracking-tight leading-relaxed mb-12 opacity-70">
                 {role.description}
               </p>

               <div className="grid grid-cols-2 gap-10 pt-10 border-t border-border-light mb-12">
                  <div className="flex flex-col gap-2">
                     <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.4em]">Structure</span>
                     <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-primary-main" />
                        <span className="text-[10px] font-black text-text-primary uppercase tracking-widest">{role.duration}</span>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                     <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.4em]">Career Path</span>
                     <div className="flex items-center justify-end gap-2">
                        <Layers className="w-3 h-3 text-secondary-main" />
                        <span className="text-[10px] font-black text-secondary-main uppercase tracking-widest">{role.track}</span>
                     </div>
                  </div>
               </div>

               <div className="mt-auto flex flex-col sm:flex-row gap-6">
                  <Link href="/contact" className="flex-1 text-[10px] font-black text-text-muted flex items-center justify-center gap-3 border border-border-light py-4 hover:border-primary-main hover:text-primary-main transition-all uppercase tracking-widest">
                    <Paperclip className="w-4 h-4" /> REQ SPEC
                  </Link>
                  <Link href="/contact" className="flex-1 btn-primary py-4 text-[10px] flex items-center justify-center gap-3 shadow-lg">
                    APPLY FOR ROLE <MoveRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
          ))}
        </div>

        {/* Talent Pool Banner */}
        <div className="bg-secondary-main p-16 lg:p-24 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
           <div className="relative z-10 text-center">
             <h2 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Persistent Intake</h2>
             <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-10 leading-[0.95] max-w-2xl mx-auto">Can&apos;t Find Your <br /> Technical Track?</h3>
             <p className="text-white/50 text-lg max-w-2xl mx-auto font-bold uppercase tracking-tight leading-relaxed mb-16">
               Log your credentials for our automated recruitment ecosystem. If you don't know a specific Tamizh Tech Pvt Ltd detail, please contact the team via WhatsApp or Email. We are always scouting for high-end talent in PLC logic, neural inspection, and systems architecture.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <a href="mailto:office@tamizhtech.in" className="btn-primary px-12 py-6 inline-flex items-center gap-4 shadow-xl">
                 <Mail className="w-5 h-5" /> SUBMIT GENERAL APPLICATION
               </a>
               <Link href="/about" className="text-[10px] font-black text-white hover:text-primary-main transition-all uppercase tracking-[0.2em] flex items-center gap-4 border-b border-white/20 pb-1">
                 LEARN ABOUT OUR FIRM at Tamizh Tech Pvt Ltd <ArrowRight className="w-4 h-4" />
               </Link>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
