import Link from "next/link";
import { CheckCircle2, Layers, MoveRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Engineering & Robotics Deployments | Tamizh Tech Robotics Company",
  description: "Real-world engineering deployments, tournament robotics platforms, and school STEM lab installations engineered by Tamizh Tech Robotics Company in Coimbatore.",
  alternates: {
    canonical: "https://www.tamizhtech.in/case-studies",
  },
};

const caseStudies = [
  {
    category: "Competition Robotics",
    title: "Championship-Grade RC Robo Race Chassis",
    client: "Collegiate Robotics Teams & Racing Competitors",
    challenge: "Standard commercial plastic chassis suffered structural flex and drive slip during high-speed obstacle navigation.",
    solution: "Bespoke CNC laser-cut 2mm stainless steel chassis with planetary gear drivetrains, low-center-of-gravity battery balance, and 112mm high-grip buggy wheels.",
    result: "Rigid, non-deflecting mobile platform deployed across inter-college obstacle and speed tournaments with zero chassis deflection under heavy lateral loads.",
    stats: ["2mm Stainless Steel", "Planetary Drive", "Zero Chassis Flex"]
  },
  {
    category: "Sports Robotics",
    title: "Pneumatic Striker Holonomic Soccer Bot",
    client: "Collegiate Robo Soccer Tournament Teams",
    challenge: "Conventional 2WD robot configurations lacked rapid multi-directional maneuverability and dynamic ball striking force.",
    solution: "4-wheel high-torque DGJ drive system integrated with a calibrated solenoid-actuated pneumatic kicker and protective ball-control scoops.",
    result: "Instant 360-degree vector translation and reliable ball engagement under rigorous tournament arena conditions.",
    stats: ["Holonomic Drive", "High-Torque DGJ", "Instant Striking"]
  },
  {
    category: "STEM Education",
    title: "Turnkey School STEM Lab & Curriculum Setup",
    client: "K-12 Schools & Academic Institutions",
    challenge: "Schools required structured hardware kits, safety protocols, and lesson plans to teach robotics and coding practically.",
    solution: "Modular school STEM Tinkering Lab packages featuring Arduino/ESP32 kits, 3D printing equipment, lesson manuals, and hands-on teacher training.",
    result: "Hands-on robotics curriculum active across student cohorts with physical project building, circuit prototyping, and competition readiness.",
    stats: ["Hands-on STEM Kits", "NEP-Aligned", "Teacher Training"]
  },
  {
    category: "Rapid Prototyping",
    title: "Precision SS Laser Cutting & 3D Printed Parts",
    client: "Hardware Startups & Engineering Innovators",
    challenge: "High tooling and mold costs for low-volume custom robotic enclosures, brackets, and mechanical frames.",
    solution: "Direct-to-digital manufacturing using precision fiber laser cutting for SS 304/316 sheet metal and additive manufacturing in PLA, PETG, and TPU.",
    result: "Rapid prototype turnarounds without tooling overhead, enabling agile iteration for functional hardware testing.",
    stats: ["SS 304/316 Sheets", "PLA/PETG/TPU", "Zero Tooling Cost"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background pt-32 pb-24 selection:bg-accent selection:text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 border-l-4 border-accent pl-8 py-2">
          <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3 font-heading">Engineering Proof</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#002B66] tracking-tight leading-[1] uppercase font-heading">
            Verified Engineering Deployments.
          </h1>
          <p className="text-base text-text-secondary leading-relaxed max-w-2xl font-medium mt-6">
            Documented engineering outcomes from our competition robotics platforms, custom fabrication services, and school STEM lab installations.
          </p>
        </div>

        {/* Case Study Grid Section */}
        <div className="grid grid-cols-1 gap-12 mb-32">
          {caseStudies.map((study) => (
            <div 
              key={study.title} 
              className="bg-white border border-border rounded-3xl p-0 flex flex-col lg:flex-row items-stretch group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full lg:w-[380px] bg-[#002B66] p-10 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Layers className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-3">{study.category}</span>
                  <h2 className="text-2xl font-black tracking-tight uppercase leading-snug mb-4">{study.title}</h2>
                </div>
                
                <div className="space-y-4 mt-8 relative z-10">
                   {study.stats.map((stat, sIdx) => (
                     <div key={sIdx} className="flex flex-col border-l-2 border-accent pl-3">
                        <span className="text-sm font-black tracking-wide uppercase text-white/90">{stat}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-8 bg-subtle border border-border px-3.5 py-1.5 rounded-full uppercase text-[10px] font-black tracking-wider text-text-muted">
                     CLIENT / DOMAIN: <span className="text-[#002B66]">{study.client}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                     <div className="space-y-2">
                       <p className="text-[10px] font-black text-accent uppercase tracking-widest">The Challenge</p>
                       <p className="text-xs text-text-secondary leading-relaxed border-l-2 border-border pl-4 italic">{study.challenge}</p>
                     </div>
                     <div className="space-y-2">
                       <p className="text-[10px] font-black text-[#002B66] uppercase tracking-widest">The Engineering Solution</p>
                       <p className="text-xs text-text-primary leading-relaxed font-semibold">{study.solution}</p>
                     </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <p className="text-xs font-bold text-text-primary">{study.result}</p>
                   </div>
                   <Link href="/contact" className="text-xs font-bold text-accent hover:text-[#e05e00] transition-colors uppercase tracking-wider flex items-center gap-2 shrink-0">
                      Discuss Requirements <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Engineering Pillars */}
        <div className="bg-subtle border border-border rounded-3xl p-10 sm:p-14 text-center mb-24">
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] block mb-8">TamizhTech Robotics Verified Footprint</span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "Competition Podiums", val: "180+" },
                 { label: "Students & Makers Trained", val: "1,000+" },
                 { label: "Materials Handled", val: "SS 304 / PETG / TPU" },
                 { label: "Engineering Base", val: "Coimbatore, TN" }
               ].map((stat) => (
                 <div key={stat.label}>
                   <div className="text-2xl sm:text-3xl font-black text-[#002B66] tracking-tight mb-2 uppercase">{stat.val}</div>
                   <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>
        </div>

      </div>
    </div>
  );
}
