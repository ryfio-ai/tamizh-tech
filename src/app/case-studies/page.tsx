import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Activity, TrendingUp, Layers, Rocket, Laptop, Database, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Engineering & Digital Outcomes | Tamizh Tech Pvt Ltd",
  description: "Real-world engineering deployments and digital transformation case studies. High-performance robotics and scalable enterprise software.",
};

const caseStudies = [
  {
    category: "Robotics & Automation",
    title: "High-Speed Robotic Assembly Line",
    client: "Tier-1 Automotive OEM",
    challenge: "Low throughput and inconsistent weld quality in the manual sub-assembly process.",
    solution: "Bespoke multi-axis robotic cell with synchronized PLC-controlled linear actuators and real-time monitoring.",
    result: "45% increase in throughput and 99.8% quality consistency across 3 shifts.",
    stats: ["45% Higher OEE", "99.8% Quality", "6 Months ROI"]
  },
  {
    category: "Software Engineering",
    title: "Enterprise Logistics OS & AMR Fleet",
    client: "Global Logistics & E-commerce Hub",
    challenge: "Disconnected data silos and fragmented manual material transport workflows.",
    solution: "Custom B2B operational dashboard integrated with a swarm of Autonomous Mobile Robots (AMRs).",
    result: "Recovered 3,000+ man-hours per month and achieved 100% real-time inventory visibility.",
    stats: ["3,000+ Hours Saved", "100% Visibility", "99.9% Path Guard"]
  },
  {
    category: "Digital Transformation",
    title: "B2B SaaS Industrial Marketplace",
    client: "National Manufacturing Network",
    challenge: "Lack of a centralized digital ecosystem for vendor-procurement and workflow tracking.",
    solution: "Full-stack development of a scalable multi-tenant SaaS platform with secure API-first architecture.",
    result: "Streamlined procurement for 200+ manufacturers and reduced lead times by 40%.",
    stats: ["200+ Manufacturers", "40% Lead-time Drop", "Secure Cloud Arch"]
  },
  {
    category: "Precision Engineering",
    title: "Aerospace Micro-Actuator Rig",
    client: "National Defense R&D Lab",
    challenge: "Extreme precision requirements for low-vibration actuator testing in high-spec environments.",
    solution: "Modular robotic testing rigs and precision fabrication using high-grade aerospace materials.",
    result: "Met 5-micron precision requirement and enabled high-fidelity diagnostic research.",
    stats: ["5-Micron Precision", "Aerospace Grade", "Iterative R&D"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Engineering Proof</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Measured Outcomes. <br /> Technical Validation.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            Case studies from our industrial and software engineering deployments, showcasing the tangible impact of our integrated solutions.
          </p>
        </div>

        {/* Case Study Grid Section */}
        <div className="grid grid-cols-1 gap-16 mb-40">
          {caseStudies.map((study, idx) => (
            <div 
              key={study.title} 
              className="bg-white border border-border-light p-0 flex flex-col lg:flex-row items-stretch industrial-card group overflow-hidden"
            >
              <div className="w-full lg:w-[400px] bg-secondary-main p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Layers className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-primary-main uppercase tracking-widest block mb-4">{study.category}</span>
                  <h3 className="text-3xl font-black tracking-tighter uppercase leading-tight mb-6">{study.title}</h3>
                </div>
                
                <div className="space-y-6 mt-8 relative z-10">
                   {study.stats.map((stat, sIdx) => (
                     <div key={sIdx} className="flex flex-col border-l-2 border-primary-main pl-4">
                        <span className="text-xl font-black tracking-tight">{stat}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="flex-1 p-12 lg:p-16 flex flex-col">
                <div className="flex items-center gap-2 mb-10 bg-bg-page border border-border-light w-fit px-4 py-2 rounded-sm uppercase text-[9px] font-black tracking-widest text-text-muted">
                   CLIENT PROFILE: <span className="text-text-primary">{study.client}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mb-16">
                   <div className="space-y-4">
                     <p className="text-[10px] font-black text-primary-main uppercase tracking-widest font-sans opacity-70">The Challenge</p>
                     <p className="text-sm text-text-secondary leading-relaxed font-bold border-l-2 border-border-light pl-6 italic">{study.challenge}</p>
                   </div>
                   <div className="space-y-4">
                     <p className="text-[10px] font-black text-primary-main uppercase tracking-widest font-sans opacity-70">The Engineering Solution</p>
                     <p className="text-sm text-text-primary leading-relaxed font-black">{study.solution}</p>
                   </div>
                </div>

                <div className="mt-auto pt-10 border-t border-border-light flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-main text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                         <CheckCircle2 className="w-6 h-6 stroke-[3]" />
                      </div>
                      <p className="text-xs font-black text-text-primary uppercase tracking-tight max-w-xs">{study.result}</p>
                   </div>
                   <Link href="/contact" className="text-[10px] font-black text-secondary-main hover:text-primary-main transition-all uppercase tracking-widest flex items-center gap-4 border-b-2 border-primary-main pb-1">
                      Technical Deep-dive <MoveRight className="w-4 h-4 group-hover:translate-x-1" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-bg-page border border-border-light p-20 text-center mb-32">
            <h4 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-16">Aggregated Trust Metrics</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { label: "Engineering Deployments", val: "120+" },
                 { label: "B2B Strategic Partners", val: "10+" },
                 { label: "States Served", val: "15+" },
                 { label: "Technical Uptime", val: "99.9%" }
               ].map((stat) => (
                 <div key={stat.label}>
                   <div className="text-5xl font-black text-text-primary tracking-tighter mb-3 uppercase">{stat.val}</div>
                   <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>
        </div>

      </div>
    </div>
  );
}

