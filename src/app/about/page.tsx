import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Globe, Users, Target, Zap, Microscope, Laptop, Database, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firm Profile | Engineering & Software Leadership | TamizhTech",
  description: "TamizhTech is a multi-disciplinary engineering firm specialized in robotic systems and enterprise software platforms. Discover our mission, technical hub, and 15+ state presence.",
};

const values = [
  { icon: <ShieldCheck />, title: "Technical Rigor", desc: "We adhere to international industrial standards across hardware assembly and software architecture." },
  { icon: <Target />, title: "Precision Outcomes", desc: "Our engineering success is measured by the ROI and operational uptime of our global client base." },
  { icon: <Zap />, title: "Digital Agility", desc: "Constant evolution of our tech stack ensures we remain at the frontier of industrial digital transformation." },
  { icon: <Globe />, title: "Pan-India Scale", desc: "Based in Coimbatore with a strategic technical support network spanning 15+ Indian states." },
  { icon: <Users />, title: "Multidisciplinary", desc: "Robotics, AI, Mechanical, and Full-stack Software specialists working in a unified ecosystem." },
  { icon: <BarChart3 />, title: "Logic Driven", desc: "Leveraging data-driven insights to optimize both physical floor performance and digital workflows." },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Firm Profile</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Engineering <br /> The Industrial <br /> Interface.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            Tamizh Tech Pvt Ltd is a Coimbatore-based engineering firm delivering high-performance robotic systems integrated with enterprise-grade software for the world&apos;s most complex industrial operations.
          </p>
        </div>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-24 items-start mb-40">
           <div className="space-y-12">
              <h3 className="text-4xl font-black text-text-primary tracking-tighter uppercase leading-[0.95] mb-8">Integrated Engineering. <br /> Domestic Heritage.</h3>
              <div className="space-y-8 text-text-secondary font-bold text-sm uppercase tracking-tight leading-relaxed">
                 <p className="border-l-2 border-border-light pl-6 italic">
                    Founded in the heart of Coimbatore—India&apos;s industrial core—Tamizh Tech Pvt Ltd was built to solve the fragmentation between physical hardware and digital control systems.
                 </p>
                 <p>
                    What began as a specialized prototyping lab has evolved into a comprehensive industrial partner, serving 120+ active deployments and maintaining a strategic presence across 15+ Indian states.
                 </p>
                 <p>
                    Our approach is defined by 'Hardware-Software Synergy.' We don't just build robots; we build the digital infrastructure that makes them intelligent, scalable, and ROI-positive.
                 </p>
              </div>
              <div className="pt-10">
                 <Link href="/contact" className="btn-primary py-6 px-12">Consult Leadership</Link>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-6 h-full">
              <div className="bg-white border border-border-light p-12 flex flex-col justify-center text-center industrial-card">
                 <span className="text-6xl font-black text-secondary-main tracking-tighter mb-2">120+</span>
                 <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Deployments</span>
              </div>
              <div className="bg-secondary-main text-white p-12 flex flex-col justify-center border-none shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
                 <Globe className="w-12 h-12 text-primary-main mb-8 relative z-10" />
                 <p className="text-xs font-black uppercase tracking-widest relative z-10 leading-relaxed text-white/70">Strategic Support <br /> in 15+ States.</p>
              </div>
              <div className="col-span-2 bg-white border border-border-light p-16 industrial-card">
                 <div className="flex items-center gap-8 mb-8">
                    <div className="w-16 h-16 bg-bg-page border border-border-light rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500">
                       <Microscope className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-text-primary uppercase tracking-tighter">The R&D Hub</h4>
                 </div>
                 <p className="text-sm text-text-secondary font-bold leading-relaxed uppercase tracking-tight">Our multi-disciplinary facility in Coimbatore houses our hardware fabrication lab, AI vision testing rigs, and enterprise software sandbox.</p>
              </div>
           </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10 mb-40">
           <div className="bg-white border-4 border-secondary-main p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-main opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 transition-all group-hover:opacity-10"></div>
              <h2 className="text-3xl font-black text-text-primary tracking-tighter uppercase mb-8 border-b border-border-light pb-8">The Mission</h2>
              <p className="text-xl text-text-secondary leading-relaxed font-black uppercase tracking-tight">To deliver transformative engineering outcomes that prioritize technical reliability and operational scale for the global manufacturing sector.</p>
           </div>
           
           <div className="bg-white border-4 border-primary-main p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-main opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 transition-all group-hover:opacity-10"></div>
              <h2 className="text-3xl font-black text-text-primary tracking-tighter uppercase mb-8 border-b border-border-light pb-8">The Vision</h2>
              <p className="text-xl text-text-secondary leading-relaxed font-black uppercase tracking-tight">To become India&apos;s premier multi-disciplinary engineering firm, setting global benchmarks for hardware-software integration.</p>
           </div>
        </section>

        {/* Values Grid */}
        <section className="bg-white border border-border-light p-12 lg:p-24 shadow-2xl">
          <div className="text-center mb-24">
             <h2 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-6 font-sans">Engineering Principles</h2>
             <h3 className="text-5xl font-black text-text-primary tracking-tighter uppercase">The Technical Creed.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">
            {values.map((v, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="w-16 h-16 flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500 mb-8 border border-border-light bg-bg-page rounded-2xl shadow-sm">
                  {cloneIcon(v.icon, "w-8 h-8 stroke-[1.5]")}
                </div>
                <h4 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tighter">{v.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed font-bold uppercase tracking-tight opacity-70">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// Helper to clone icons with custom classes
function cloneIcon(icon: any, className: string) {
  return <icon.type {...icon.props} className={className} />;
}

