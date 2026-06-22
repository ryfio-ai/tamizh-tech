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
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 border-l-4 border-[#FF6B00] pl-6 md:pl-10 py-4 text-left">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-8 font-sans">Join Our Team</h1>
          <h2 className="text-5xl md:text-7xl font-black text-[#111111] tracking-tighter leading-[0.95] uppercase">
            Careers
          </h2>
          <div className="text-base text-gray-500 leading-relaxed max-w-3xl font-bold uppercase tracking-tight mt-10">
            <p className="mb-4">"Let's work Together...</p>
            <p>We create and build value for our customers with our innovative Products and Solutions. We offer you the chance to do work that adds up to something meaningful. The opportunity to challenge yourself and learn new skills. That's the kind of work you can expect at Tamizh Tech Robotics Company. Join us."</p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32 text-left">
           <h2 className="text-3xl md:text-4xl font-black text-[#111111] tracking-tighter uppercase mb-6">Our Core Values</h2>
           <p className="text-gray-500 font-bold uppercase tracking-tight mb-12 max-w-2xl opacity-80">
             The principles that guide our work and define our commitment to excellence in engineering and mentoring.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Value 1 */}
              <div className="bg-white border border-[#E5E5E5] p-10 lg:p-12 rounded-2xl group hover:border-[#FF6B00] hover:shadow-2xl transition-all">
                <Zap className="w-12 h-12 text-[#FF6B00] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#111111] tracking-tighter uppercase mb-4 group-hover:text-[#FF6B00] transition-colors">Excellence</h3>
                <p className="text-gray-500 font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We pursue perfection in every aspect of our work, from precision engineering to cost optimization.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white border border-[#E5E5E5] p-10 lg:p-12 rounded-2xl group hover:border-[#FF6B00] hover:shadow-2xl transition-all">
                <Brain className="w-12 h-12 text-[#FF6B00] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#111111] tracking-tighter uppercase mb-4 group-hover:text-[#FF6B00] transition-colors">Innovation</h3>
                <p className="text-gray-500 font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We embrace cutting-edge technology and creative solutions to revolutionize K-12 STEM education.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white border border-[#E5E5E5] p-10 lg:p-12 rounded-2xl group hover:border-[#FF6B00] hover:shadow-2xl transition-all">
                <Layers className="w-12 h-12 text-[#FF6B00] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#111111] tracking-tighter uppercase mb-4 group-hover:text-[#FF6B00] transition-colors">Collaboration</h3>
                <p className="text-gray-500 font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We believe in the power of teamwork and cross-functional partnerships to build India's largest robotics ecosystem.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white border border-[#E5E5E5] p-10 lg:p-12 rounded-2xl group hover:border-[#FF6B00] hover:shadow-2xl transition-all">
                <Globe className="w-12 h-12 text-[#FF6B00] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#111111] tracking-tighter uppercase mb-4 group-hover:text-[#FF6B00] transition-colors">Global Impact</h3>
                <p className="text-gray-500 font-bold uppercase tracking-tight text-sm leading-relaxed opacity-70">
                  We build hardware and software solutions that make a meaningful difference globally, representing domestic heritage.
                </p>
              </div>
           </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-32 text-center">
           <h2 className="text-3xl md:text-4xl font-black text-[#111111] tracking-tighter uppercase mb-12">Key Differentiators</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-10 rounded-2xl hover:border-[#FF6B00] transition-colors">
                 <School className="w-12 h-12 text-[#FF6B00] mx-auto mb-6" />
                 <h4 className="text-lg font-black text-[#111111] uppercase tracking-widest">Learning Focused</h4>
              </div>
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-10 rounded-2xl hover:border-[#FF6B00] transition-colors">
                 <Users className="w-12 h-12 text-[#FF6B00] mx-auto mb-6" />
                 <h4 className="text-lg font-black text-[#111111] uppercase tracking-widest">Collaborative Work environment</h4>
              </div>
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-10 rounded-2xl hover:border-[#FF6B00] transition-colors">
                 <Settings className="w-12 h-12 text-[#FF6B00] mx-auto mb-6" />
                 <h4 className="text-lg font-black text-[#111111] uppercase tracking-widest">Active Problem-solvers</h4>
              </div>
           </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-16 lg:p-24 rounded-2xl relative overflow-hidden shadow-2xl">
           <div className="relative z-10 text-center">
             <h3 className="text-2xl md:text-4xl font-black text-[#111111] tracking-tighter uppercase mb-8 leading-[1.2] max-w-4xl mx-auto">
               If you're interested in joining our growing team, drop your resume to office@tamizhtech.in
             </h3>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
               <a href="mailto:office@tamizhtech.in" className="btn-primary px-12 py-6 inline-flex items-center gap-4 shadow-xl text-sm font-bold tracking-widest">
                 <Mail className="w-5 h-5" /> EMAIL RESUME
               </a>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
