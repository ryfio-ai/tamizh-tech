"use client";

import { CheckCircle2, Building2, MoveRight, GraduationCap, School, Trophy, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

const collaborationSectors = [
  {
    icon: <Trophy className="w-7 h-7 text-accent" />,
    sector: "Competition Robotics",
    headline: "Tournament Platforms & Event Kits",
    description: "Equipping student robotics clubs and university teams across India with championship-grade RC Robo Race, Robo Soccer, and Line Follower platforms.",
    highlights: ["180+ Podium Finishes", "Rigid 2mm SS Chassis", "Pre-Tested Drivetrains"]
  },
  {
    icon: <School className="w-7 h-7 text-accent" />,
    sector: "School Education",
    headline: "Turnkey STEM Tinkering Labs",
    description: "Installing hands-on robotics labs in schools, complete with modular microcontrollers, 3D printers, safety workbenches, and NEP-aligned curriculum.",
    highlights: ["K-12 Aligned Kits", "Faculty Training Modules", "Hands-on Student Engagement"]
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-accent" />,
    sector: "Engineering Colleges",
    headline: "Centres of Excellence & R&D Labs",
    description: "Partnering with technical institutions to establish advanced robotics CoE facilities, research test rigs, and faculty development programs.",
    highlights: ["Robotics & Automation CoE", "Capstones & Faculty FDPs", "Kinematics Test Beds"]
  },
  {
    icon: <Cpu className="w-7 h-7 text-accent" />,
    sector: "Hardware Makers & Startups",
    headline: "On-Demand Fabrication & Prototyping",
    description: "Supporting hardware startups, engineers, and product designers with precision stainless steel laser cutting, custom 3D printing (PLA/PETG/TPU), and PCB assembly.",
    highlights: ["SS 304/316 Laser Cutting", "Additive Rapid Prototyping", "Zero Mold Overhead"]
  }
];

export default function ClientsPage() {
  return (
    <div className="bg-background pt-32 pb-24 selection:bg-accent selection:text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 border-l-4 border-accent pl-8 py-2">
          <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3 font-heading">Ecosystem & Partners</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#002B66] tracking-tight leading-[1] uppercase font-heading">
            Institutional Collaborations & Engineering Deployments.
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl font-medium mt-6">
            Tamizh Tech Robotics Company partners with educational institutions, tournament teams, hardware startups, and makers across India.
          </p>
        </div>

        {/* Collaboration Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {collaborationSectors.map((sector) => (
            <div 
              key={sector.sector} 
              className="bg-white border border-border rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-14 h-14 bg-orange-50 border border-orange-200/80 rounded-2xl flex items-center justify-center mb-6">
                  {sector.icon}
                </div>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-2">{sector.sector}</span>
                <h2 className="text-2xl font-black text-[#002B66] tracking-tight uppercase mb-4">{sector.headline}</h2>
                <p className="text-xs text-text-secondary leading-relaxed mb-6">{sector.description}</p>
              </div>

              <div className="pt-6 border-t border-border space-y-2">
                {sector.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-text-primary font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Footprint Band */}
        <div className="bg-[#002B66] rounded-3xl p-10 sm:p-16 text-white mb-28 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-4">Centred in Coimbatore, Serving All India</span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
              Engineering Hardware Built For Real Tournament & Lab Requirements.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8">
              From tournament arenas in engineering symposiums to hands-on school classrooms, our hardware is designed, manufactured, and bench-tested locally at our Coimbatore facility.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-accent">180+</div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-1">Podium Wins</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-accent">1,000+</div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-1">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-accent">24h</div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-1">RFQ Response</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-accent">100%</div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-1">Direct Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="bg-white border-2 border-accent/40 rounded-3xl p-10 sm:p-16 text-center max-w-3xl mx-auto shadow-sm">
           <h4 className="text-2xl sm:text-3xl font-black text-[#002B66] tracking-tight mb-4 uppercase">
             Partner With Tamizh Tech
           </h4>
           <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
             Whether you need a dedicated school lab setup, college CoE collaboration, custom tournament chassis, or rapid additive prototyping, our engineering team is ready to assist.
           </p>
           <Link 
             href="/contact" 
             className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
           >
             <span>Contact Engineering Team</span>
             <MoveRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </div>
  );
}
