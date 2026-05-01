"use client";

import React from "react";
import { 
  Globe, 
  Brain, 
  Layers, 
  Zap, 
  Mail, 
  School, 
  Settings,
  Users
} from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Only we looking for people</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Career
          </h2>
          <div className="text-lg text-text-secondary leading-relaxed max-w-3xl font-medium mt-10 uppercase tracking-tight font-bold">
            <p className="mb-4">&quot;Lets work Together....</p>
            <p>We create and build a value for our customers with our innovative Products and Solutions. We offer you the chance to do the kind of work that adds upto something meaningful. The opportunity to challenge yourself and learn new skills. Thats the kind of work you can expect at Tamizh Tech Pvt Ltd. Sounds intersting, do Join us.&quot;</p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
           <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tighter uppercase mb-6">Our Core Values</h2>
           <p className="text-text-secondary font-bold uppercase tracking-tight mb-12 max-w-2xl opacity-80">
             The principles that guide our work and define our commitment to excellence in manufacturing.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Value 1 */}
              <div className="bg-white border border-border-light p-10 lg:p-12 industrial-card group hover:shadow-2xl transition-all">
                <Zap className="w-12 h-12 text-primary-main mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-text-primary tracking-tighter uppercase mb-4 group-hover:text-primary-main transition-colors">Excellence</h3>
                <p className="text-text-secondary font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We pursue perfection in every aspect of our work, from precision manufacturing to cost optimization.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white border border-border-light p-10 lg:p-12 industrial-card group hover:shadow-2xl transition-all">
                <Brain className="w-12 h-12 text-primary-main mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-text-primary tracking-tighter uppercase mb-4 group-hover:text-primary-main transition-colors">Innovation</h3>
                <p className="text-text-secondary font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We embrace cutting-edge technology and creative solutions to revolutionize manufacturing.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white border border-border-light p-10 lg:p-12 industrial-card group hover:shadow-2xl transition-all">
                <Layers className="w-12 h-12 text-primary-main mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-text-primary tracking-tighter uppercase mb-4 group-hover:text-primary-main transition-colors">Collaboration</h3>
                <p className="text-text-secondary font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We believe in the power of teamwork and cross-functional partnerships for success.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white border border-border-light p-10 lg:p-12 industrial-card group hover:shadow-2xl transition-all">
                <Globe className="w-12 h-12 text-primary-main mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-text-primary tracking-tighter uppercase mb-4 group-hover:text-primary-main transition-colors">Global Impact</h3>
                <p className="text-text-secondary font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We create solutions that make a meaningful difference in manufacturing worldwide.
                </p>
              </div>
           </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-32">
           <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tighter uppercase mb-12 text-center">Key Differentiators</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary-main/5 border border-secondary-main/20 p-10 text-center hover:bg-secondary-main/10 transition-colors">
                 <School className="w-12 h-12 text-secondary-main mx-auto mb-6" />
                 <h4 className="text-lg font-black text-text-primary uppercase tracking-widest">Learning focused</h4>
              </div>
              <div className="bg-secondary-main/5 border border-secondary-main/20 p-10 text-center hover:bg-secondary-main/10 transition-colors">
                 <Users className="w-12 h-12 text-secondary-main mx-auto mb-6" />
                 <h4 className="text-lg font-black text-text-primary uppercase tracking-widest">Friendly work environment</h4>
              </div>
              <div className="bg-secondary-main/5 border border-secondary-main/20 p-10 text-center hover:bg-secondary-main/10 transition-colors">
                 <Settings className="w-12 h-12 text-secondary-main mx-auto mb-6" />
                 <h4 className="text-lg font-black text-text-primary uppercase tracking-widest">Problem-solvers</h4>
              </div>
           </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-secondary-main p-16 lg:p-24 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
           <div className="relative z-10 text-center">
             <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-8 leading-[1.2] max-w-4xl mx-auto">
               If you&apos;re interested in joining our growing team drop in your resume to tamizhtechpvtltd@gmail.com
             </h3>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
               <a href="mailto:tamizhtechpvtltd@gmail.com" className="btn-primary px-12 py-6 inline-flex items-center gap-4 shadow-xl text-sm font-bold tracking-widest border border-white/20 hover:border-white transition-colors bg-white text-secondary-main">
                 <Mail className="w-5 h-5" /> EMAIL RESUME
               </a>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
