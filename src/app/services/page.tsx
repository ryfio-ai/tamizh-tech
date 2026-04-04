import type { Metadata } from "next";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Laptop, Rocket, Globe, Database, Camera, LayoutGrid, Microscope, Smartphone, Layers, Server, Code2, Workflow } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Services | Robotics & Software | Tamizh Tech Pvt Ltd",
  description: "Specialized B2B engineering services including industrial automation integration, enterprise software development, and precision R&D prototyping.",
};

const roboticsServices = [
  { 
    icon: <Bot className="w-10 h-10" />, 
    title: "Industrial Systems Integration", 
    desc: "End-to-end deployment of multi-axis robotic cells and synchronized PLC-controlled linear actuators for high-volume manufacturing.", 
    detail: "Standardizing floor operations with global safety and OEE benchmarks." 
  },
  { 
    icon: <Cpu className="w-10 h-10" />, 
    title: "Precision R&D & Prototyping", 
    desc: "Rapid technical prototyping using industrial 3D printing, CNC machining, and multi-layer PCB fabrication for specialized hardware PoCs.", 
    detail: "From schematic design to high-fidelity mechanical assemblies." 
  },
  { 
    icon: <Workflow className="w-10 h-10" />, 
    title: "Automation Maintenance & Support", 
    desc: "Dedicated technical support and preventive maintenance infrastructure across 15+ states to ensure zero downtime for installed systems.", 
    detail: "Strategic on-ground response for industrial clusters." 
  },
];

const softwareServices = [
  { 
    icon: <Code2 className="w-10 h-10" />, 
    title: "Enterprise Software Engineering", 
    desc: "Full-stack development of mission-critical web applications, operational dashboards, and complex digital ecosystems for manufacturers.", 
    detail: "Building scalable, secure, and API-first business architectures." 
  },
  { 
    icon: <Smartphone className="w-10 h-10" />, 
    title: "B2B Mobile Ecosystems", 
    desc: "Custom iOS and Android application development for shop-floor management, real-time inventory tracking, and remote system control.", 
    detail: "Extending industrial operations to secure mobile platforms." 
  },
  { 
    icon: <Camera className="w-10 h-10" />, 
    title: "AI Vision & Monitoring", 
    desc: "Integration of deep learning vision models for automated quality inspection, defect detection, and real-time safety monitoring.", 
    detail: "Deploying high-accuracy neural processing to the industrial edge." 
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Engineering Services</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Technical <br /> Capabilities. <br /> Industrial <br /> Outcomes.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10 uppercase tracking-tight font-bold">
            Delivering high-precision engineering and digital transformation services for global institutions and industrial leaders.
          </p>
        </div>

        {/* Robotics Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Robotics & Hardware</h3>
              <div className="flex-1 h-[2px] bg-primary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {roboticsServices.map((s) => (
                <div key={s.title} className="bg-white border border-border-light p-10 lg:p-14 flex flex-col industrial-card group shadow-sm hover:shadow-2xl transition-all h-full">
                   <div className="w-16 h-16 bg-bg-page border border-border-light rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500 mb-10">
                      {s.icon}
                   </div>
                   <h4 className="text-2xl font-black text-text-primary mb-6 tracking-tighter uppercase leading-none">{s.title}</h4>
                   <p className="text-sm text-text-secondary leading-relaxed mb-10 font-bold uppercase tracking-tight opacity-70 flex-grow">{s.desc}</p>
                   <div className="pt-8 border-t border-border-light">
                      <p className="text-[10px] font-black text-primary-main uppercase tracking-widest leading-relaxed">Scope: {s.detail}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Software Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Software & Digital</h3>
              <div className="flex-1 h-[2px] bg-secondary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {softwareServices.map((s) => (
                <div key={s.title} className="bg-secondary-main p-10 lg:p-14 flex flex-col text-white industrial-card group shadow-2xl relative overflow-hidden h-full">
                   <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500 mb-10">
                        {s.icon}
                     </div>
                     <h4 className="text-2xl font-black text-white mb-6 tracking-tighter uppercase leading-none">{s.title}</h4>
                     <p className="text-sm text-white/50 leading-relaxed mb-10 font-bold uppercase tracking-tight flex-grow">{s.desc}</p>
                     <div className="pt-8 border-t border-white/10">
                        <p className="text-[10px] font-black text-primary-main uppercase tracking-widest leading-relaxed">Vertical: {s.detail}</p>
                     </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Final CTA */}
        <div className="bg-bg-page border border-border-light p-20 text-center max-w-5xl mx-auto shadow-sm relative overflow-hidden">
           <div className="relative z-10">
             <h4 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Strategic Partnership</h4>
             <h2 className="text-5xl font-black text-text-primary tracking-tighter mb-10 uppercase leading-[0.95]">Request a <br /> Technical Consultation.</h2>
             <p className="text-text-secondary leading-relaxed font-bold mb-12 uppercase text-xs tracking-widest max-w-2xl mx-auto">Discuss your engineering challenges with our multidisciplinary team of robotics and software architects. We provide comprehensive technical audits and on-ground feasibility studies.</p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="btn-primary py-6 px-12 order-1 sm:order-2 shadow-xl">SCHEDULE AUDIT</Link>
                <Link href="/case-studies" className="text-[10px] font-black text-secondary-main hover:text-primary-main transition-all uppercase tracking-widest flex items-center gap-4 border-b border-secondary-main pb-1 pb-1 order-2 sm:order-1 font-sans">
                  EXPLORE DEPLOYMENTS <MoveRight className="w-4 h-4" />
                </Link>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
