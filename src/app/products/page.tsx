import Link from "next/link";
import { 
  MoveRight, Bot, Layers, Microscope, Brain, Activity, Database, Zap
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue | Tamizh Tech Pvt Ltd",
  description: "Explore our software platforms and R&D updates.",
};

export default function ProductsPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Product Catalogue</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Our <br /> Products
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            We are currently in the Research &amp; Development phase for our hardware systems. On the software side, we are proud to introduce our flagship AI platform.
          </p>
        </div>

        {/* Software Platform Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Software Solutions</h3>
              <div className="flex-1 h-[2px] bg-secondary-main/10"></div>
           </div>
           
           <div className="bg-secondary-main p-10 lg:p-16 flex flex-col lg:flex-row gap-16 text-white industrial-card shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex items-start justify-between mb-8">
                   <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary-main">
                      <Brain className="w-8 h-8 stroke-[1.5]" />
                   </div>
                   <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] border border-white/10 px-4 py-2">Flagship Product</span>
                </div>
                
                <h4 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">MODLIQ</h4>
                <p className="text-lg text-white/80 leading-relaxed mb-10 font-bold uppercase tracking-tight max-w-2xl">
                  An all-in-one AI-driven machine learning platform designed for seamless, no-code data analysis, predictive modeling, and real-time operational insights.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   <div className="flex items-start gap-4 text-sm font-black text-white uppercase tracking-widest border-l-2 border-primary-main/50 pl-4">
                      <Layers className="w-5 h-5 text-primary-main shrink-0" />
                      <div>
                        <span className="block mb-1">No-Code ML Workflow</span>
                        <span className="text-[10px] text-white/50 block font-normal tracking-normal">Build classification, regression, and clustering models without writing code.</span>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 text-sm font-black text-white uppercase tracking-widest border-l-2 border-primary-main/50 pl-4">
                      <Zap className="w-5 h-5 text-primary-main shrink-0" />
                      <div>
                        <span className="block mb-1">AI Copilot Suite</span>
                        <span className="text-[10px] text-white/50 block font-normal tracking-normal">Interactive AI chat, auto-generated insights, and smart recommendations.</span>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 text-sm font-black text-white uppercase tracking-widest border-l-2 border-primary-main/50 pl-4">
                      <Activity className="w-5 h-5 text-primary-main shrink-0" />
                      <div>
                        <span className="block mb-1">Advanced Analytics</span>
                        <span className="text-[10px] text-white/50 block font-normal tracking-normal">Time series forecasting, anomaly detection, and real-time monitoring.</span>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 text-sm font-black text-white uppercase tracking-widest border-l-2 border-primary-main/50 pl-4">
                      <Database className="w-5 h-5 text-primary-main shrink-0" />
                      <div>
                        <span className="block mb-1">Universal Data Upload</span>
                        <span className="text-[10px] text-white/50 block font-normal tracking-normal">Connect via CSV, JSON, PostgreSQL, AWS S3, REST APIs, and more.</span>
                      </div>
                   </div>
                </div>
                
                <Link href="/contact" className="btn-primary py-5 px-10 inline-flex items-center gap-3 shadow-xl text-xs uppercase tracking-widest">
                   REQUEST ACCESS <MoveRight className="w-4 h-4" />
                </Link>
              </div>
           </div>
        </div>

        {/* R&D Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Hardware (R&amp;D Phase)</h3>
              <div className="flex-1 h-[2px] bg-primary-main/10"></div>
           </div>
           
           <div className="bg-white border border-border-light p-10 lg:p-16 flex flex-col items-center text-center industrial-card shadow-sm relative overflow-hidden group">
              <div className="w-20 h-20 bg-bg-page border border-border-light rounded-full flex items-center justify-center text-primary-main mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Microscope className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-text-primary tracking-tighter uppercase mb-6">
                Next-Gen Hardware Under Development
              </h4>
              <p className="text-text-secondary leading-relaxed max-w-2xl font-bold uppercase text-sm tracking-widest opacity-80 mb-10">
                Our team of engineers is actively researching and prototyping state-of-the-art robotic hardware, including industrial arms, IoT gateways, and autonomous systems. Stay tuned for our upcoming releases.
              </p>
              <div className="flex items-center gap-4 text-[10px] font-black text-text-muted uppercase tracking-[0.2em] border border-border-light px-6 py-3 bg-bg-page rounded-full">
                 <Bot className="w-4 h-4" /> CURRENTLY IN R&amp;D
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
