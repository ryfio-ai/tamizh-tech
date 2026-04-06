import Link from "next/link";
import { ArrowRight, Cpu, Zap, Bot, Shield, Globe, BarChart3, Settings, Lightbulb, CheckCircle2, Factory, Layers, Layout, Smartphone, Database, MoveRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tamizh Tech | Robotics, Software & Industrial Automation Solutions",
  description: "Tamizh Tech Pvt Ltd delivers high-performance robotic systems, AI vision, and enterprise software solutions for global manufacturers and OEMs. Engineering excellence in Coimbatore, India.",
  keywords: ["Industrial Automation", "Robotics Integration", "B2B Software Development", "SaaS Solutions", "AI Vision Systems"],
};

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-bg-page selection:bg-primary-main selection:text-white">
      
      {/* Hero Section - The Dual Engine Strategy */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-24 overflow-hidden hero-grid border-b border-border-light">
        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-10 max-w-2xl">
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-text-primary leading-[1.0] tracking-tighter uppercase">
              Robotics & <span className="text-primary-main">Software</span> for Industry.
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-xl">
              We design and deploy high-performance robotic systems integrated with enterprise-grade software to automate the world's most complex industrial operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/contact" className="btn-primary group">
                Request Engineering Proposal <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/solutions" className="btn-secondary group">
                Explore Solutions
              </Link>
            </div>
            
            <div className="flex items-center gap-12 pt-12 border-t border-border-light">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-text-primary tracking-tighter">50+</span>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Enterprise Clients</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-text-primary tracking-tighter">120+</span>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Deployments</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-text-primary tracking-tighter">15+</span>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Sectors Served</span>
                </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-[650px] w-full">
            <div className="absolute inset-0 bg-white border border-border-light rounded-xs overflow-hidden shadow-2xl flex items-center justify-center p-12">
               <div className="relative w-full h-full border border-border-light/50 bg-bg-page/30 rounded-xs flex flex-col items-center justify-center gap-8 group">
                  <Bot className="w-32 h-32 text-text-primary/10 stroke-[0.5] group-hover:text-primary-main/20 transition-colors duration-700" />
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-primary-main uppercase tracking-[0.4em]">Hardware-Software Synergy</span>
                    <div className="h-[1px] w-24 bg-primary-main"></div>
                  </div>
                  {/* Floating Tech Elements */}
                  <div className="absolute top-10 left-10 p-4 border border-border-light bg-white shadow-sm flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-primary-main" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Logic 1.0</span>
                  </div>
                  <div className="absolute bottom-10 right-10 p-4 border border-border-light bg-white shadow-sm flex items-center gap-3">
                    <Layers className="w-5 h-5 text-secondary-main" />
                    <span className="text-[10px] font-black uppercase tracking-widest">SaaS Stack</span>
                  </div>
               </div>
            </div>
            {/* Structural Accents */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-8 border-bg-page -z-10 bg-primary-main/5"></div>
            <div className="absolute top-20 -right-10 w-24 h-24 bg-secondary-main/5 border border-secondary-main/10 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Industrial Intelligence Section (Hardware) */}
      <section className="py-32 bg-white border-b border-border-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl robotics-accent">
              <h2 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-6">Robotics & Automation</h2>
              <h3 className="text-5xl md:text-6xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
                Systems Built for <br /> Industrial Resilience.
              </h3>
            </div>
            <Link href="/solutions#robotics" className="text-xs font-black text-text-primary hover:text-primary-main transition-all flex items-center gap-4 group uppercase tracking-[0.2em] border-b-2 border-primary-main pb-2">
                Hardware Portfolio <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Factory, title: "Industrial Automation", desc: "PLC programming, control systems, and full-line automation for high-volume manufacturing floors." },
              { icon: Bot, title: "Robotics Integration", desc: "Turnkey robot deployment (Cobots, Delta, 6-Axis) with custom end-effectors and safety protocols." },
              { icon: Cpu, title: "AI Vision Systems", desc: "Neural network driven defect detection and quality control with 99.9% inspection accuracy." },
            ].map((item, idx) => (
              <div key={idx} className="industrial-card p-10 flex flex-col h-full group">
                <div className="w-14 h-14 bg-bg-page flex items-center justify-center text-text-primary group-hover:bg-primary-main group-hover:text-white transition-all duration-300 mb-8 border border-border-light">
                  <item.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="text-2xl font-black text-text-primary uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-text-secondary text-sm font-medium leading-relaxed mb-10 flex-grow">{item.desc}</p>
                <Link href="/contact" className="text-[10px] font-black text-primary-main tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  Request Specs <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Section (Software) */}
      <section className="py-32 bg-secondary-main text-white relative overflow-hidden">
        {/* Subtle grid for dark section */}
        <div className="absolute inset-0 opacity-[0.03] hero-grid pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl software-accent border-primary-main">
              <h2 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-6">Software Engineering</h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] uppercase text-white">
                Digital Infrastructure <br /> For Enterprise.
              </h3>
            </div>
            <Link href="/solutions#software" className="text-xs font-black text-white hover:text-primary-main transition-all flex items-center gap-4 group uppercase tracking-[0.2em] border-b-2 border-white/20 pb-2">
                Software Stack <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: "Web Platforms", desc: "High-performance enterprise dashboards and internal management portals." },
              { icon: Smartphone, title: "Mobile Ecosystems", desc: "Cross-platform operational apps for supply chain and field services." },
              { icon: Layers, title: "SaaS Product Dev", desc: "Scalable B2B products from MVP architecture to production deployment." },
              { icon: Database, title: "API & Data", desc: "Robotic-to-Cloud integrations, IoT data lakes, and middleware pipelines." },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-white/10 hover:border-primary-main/50 bg-white/5 backdrop-blur-sm transition-all duration-300">
                <div className="text-primary-main mb-6">
                  <item.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tighter mb-3 text-white">{item.title}</h4>
                <p className="text-white/60 text-xs font-medium leading-relaxed uppercase leading-ls tracking-tighter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-32 bg-white border-y border-border-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-black text-primary-main uppercase tracking-[0.5em] mb-8">Vertical Expertise</h2>
              <h3 className="text-5xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase mb-10">
                Proven Implementation <br /> Across Sectors.
              </h3>
              <p className="text-text-secondary font-medium leading-relaxed mb-12 max-w-lg">
                We deep-dive into sector-specific operational challenges, delivering tailored engineering solutions that maximize ROI and operational uptime.
              </p>
              <div className="grid grid-cols-2 gap-y-6">
                {["Automotive & OEM", "Industrial MSMEs", "R&D Labs", "Process Industries", "Logistics Hubs", "Textile Tech"].map((industry) => (
                  <div key={industry} className="flex items-center gap-3 text-text-primary font-black text-[10px] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-primary-main"></span> {industry}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 h-[500px]">
               <div className="bg-bg-secondary w-full h-full p-8 flex flex-col justify-end border border-border-light group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Factory className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter relative z-10">Manufacturing</h4>
                  <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-2 relative z-10">OEE Optimization</p>
               </div>
               <div className="bg-primary-main w-full h-full p-8 flex flex-col justify-end border border-border-light text-white group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Database className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter relative z-10">Aerospace</h4>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-2 relative z-10">Precision Prototyping</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Process */}
      <section className="py-32 bg-bg-page">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black text-primary-main uppercase tracking-[0.5em] mb-6">The Engineering Loop</h2>
            <h3 className="text-5xl font-black text-text-primary tracking-tighter uppercase">From Concept to Deployment.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-light hidden md:block z-0"></div>
             {[
               { step: "01", title: "Discovery", desc: "Requirements gathering and on-site operational feasibility audit." },
               { step: "02", title: "Simulation", desc: "Detailed hardware-in-the-loop simulation and digital twin validation." },
               { step: "03", title: "Fabrication", desc: "Hardware assembly and software development at our Coimbatore R&D hub." },
               { step: "04", title: "Scale", desc: "On-site deployment, staff training, and continuous lifecycle support." },
             ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 border border-border-light shadow-sm relative z-10 flex flex-col items-center text-center">
                  <span className="text-[10px] font-black text-primary-main uppercase tracking-[0.3em] mb-6">{item.step}</span>
                  <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-text-secondary text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* B2B Trust CTA */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
           <div className="max-w-5xl mx-auto border-4 border-secondary-main p-16 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-black text-text-primary tracking-tighter uppercase mb-6 leading-none">Ready to Automate?</h2>
                <p className="text-text-secondary font-medium leading-relaxed max-w-md">Schedule a Technical Consultation with our engineers to discuss your project specifications and operational goals.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/contact" className="btn-primary py-6 px-10">
                   Request Proposal <MoveRight className="w-5 h-5 ml-4" />
                 </Link>
                 <Link href="/case-studies" className="btn-secondary py-6 px-10">
                   View Proof points
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}


