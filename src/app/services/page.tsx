import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Printer, Cpu, Scissors, Settings, Wrench, Hammer, Bot, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | TamizhTech Robotics Company",
  description: "3D printing, PCB fabrication, laser cutting, CNC machining, welding, and custom robotics & automation services from TamizhTech.",
};

const services = [
  { icon: <Printer className="w-6 h-6" />, title: "3D Printing & Prototyping", desc: "MNC-quality rapid prototyping for robotics chassis, complex enclosures, and custom mechanical parts.", detail: "High-precision FDM and Resin printing for industrial PoC builds." },
  { icon: <Cpu className="w-6 h-6" />, title: "PCB Fabrication", desc: "Precision multi-layer PCB design, layout, and localized manufacturing for IoT and AI systems.", detail: "Enterprise-grade circuits from schematic to high-density board fabrication." },
  { icon: <Scissors className="w-6 h-6" />, title: "Laser Cutting", desc: "Industrial-spec precision cutting of technical acrylic, sheet metal, and wood for robotics frames.", detail: "High-accuracy detailing for enclosures, displays, and structural components." },
  { icon: <Settings className="w-6 h-6" />, title: "Precision Machining", desc: "Advanced CNC machining and turning for drive systems, axles, and high-tolerance robotic mounts.", detail: "Durable metal components machined to exact technical specifications." },
  { icon: <Hammer className="w-6 h-6" />, title: "Structural Welding", desc: "High-integrity structural welding for heavy-duty robotic rigs and industrial automation frames.", detail: "Certified welding services for large-scale industrial automation solutions." },
  { icon: <Bot className="w-6 h-6" />, title: "Industrial Automation", desc: "End-to-end integration of specialized custom robotic solutions for factories and supply chains.", detail: "Concept-to-deployment integration according to global safety standards." },
  { icon: <Layers className="w-6 h-6" />, title: "Rapid Manufacturing", desc: "Fast-track production of custom parts and assemblies for immediate industrial testing.", detail: "Quick-turnaround service for hardware R&D cycles." },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Technical Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Design & <span className="text-primary-main">Precision.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto mb-12 leading-relaxed font-regular">
            TamizhTech provides world-class engineering services — from rapid prototyping with 3D printing 
            to industrial-grade PCB fabrication and full-scale custom automation.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((s) => (
            <div key={s.title} className="mnc-card flex flex-col p-10 group h-full">
              <div className="w-14 h-14 bg-primary-light text-primary-main rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-main group-hover:text-text-on-primary transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-main transition-colors">{s.title}</h3>
              <p className="text-text-tertiary text-sm leading-relaxed mb-10 flex-grow">{s.desc}</p>
              <div className="mt-auto">
                <p className="text-xs text-text-muted mb-6 font-medium italic">"{s.detail}"</p>
                <a href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20your%20${encodeURIComponent(s.title)}%20services.`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-main text-sm font-bold group/link">
                  Consultation Request <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Project CTA Panel */}
      <section className="py-24 container mx-auto px-4">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-border-light p-12 md:p-24 text-center bg-bg-primary shadow-2xl">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none hero-gradient" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary mb-8 tracking-tight leading-tight">
              Enterprise <span className="text-primary-main">Custom Solutions</span>
            </h2>
            <p className="text-text-tertiary text-xl mb-12 font-regular leading-relaxed">
              Whether you are a startup building a proof-of-concept or a global factory scaling industrial automation, 
              our engineering team is ready to deliver precise, localized technical excellence.
            </p>
            <a href="https://wa.me/918148045030?text=Hello!%20I%20have%20a%20project%20idea%20I'd%20like%20to%20discuss." target="_blank" rel="noopener noreferrer"
              className="px-12 py-6 bg-primary-main text-text-on-primary font-bold text-lg rounded-lg hover:bg-primary-hover shadow-xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-4">
              <MessageCircle className="w-6 h-6" /> Partner with Our Engineers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
