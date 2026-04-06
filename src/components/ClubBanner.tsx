"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Rocket, Users, Target, Zap } from "lucide-react";

export function ClubBanner() {
  return (
    <section className="w-full bg-secondary-main py-24 relative overflow-hidden border-t border-white/5">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] hero-grid pointer-events-none"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-main/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-main/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary-main/10 border border-primary-main/20 mb-8">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-main opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-main"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.3em] text-primary-main uppercase">Limited Memberships Open</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-8">
              The Future of <br /> <span className="text-primary-main">Engineering</span> Starts Here.
            </h2>
            
            <p className="text-xl text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Join the Tamil Robotics Club (TRC). A high-performance ecosystem <span className="text-white font-bold underline decoration-primary-main/50 underline-offset-4 font-sans">exclusively for school students</span> to master robotics, AI, and industrial innovation.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white/5 flex items-center justify-center text-primary-main border border-white/10">
                     <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <span className="text-white font-black text-xs uppercase tracking-tight">Hands-on</span>
                     <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Advanced Labs</span>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white/5 flex items-center justify-center text-primary-main border border-white/10">
                     <Target className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <span className="text-white font-black text-xs uppercase tracking-tight">Competitions</span>
                     <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Global Events</span>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white/5 flex items-center justify-center text-primary-main border border-white/10">
                     <Users className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <span className="text-white font-black text-xs uppercase tracking-tight">Mentorship</span>
                     <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">MNC Standards</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:w-[400px] w-full shrink-0">
            <div className="bg-white p-12 border-4 border-primary-main shadow-[20px_20px_0px_0px_#F47A20] relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary-main flex items-center justify-center border-4 border-primary-main">
                <Rocket className="w-8 h-8 text-primary-main" />
              </div>
              <h3 className="text-2xl font-black text-secondary-main uppercase tracking-tighter mb-6 leading-none italic">Apply to <br /> TRC Hub.</h3>
              <p className="text-text-secondary text-xs font-bold leading-relaxed mb-10 uppercase tracking-tight">Gain access to professional-grade hardware, specialized training tracks, and industrial certification.</p>
              
              <Link href="/robotics-club" className="w-full btn-primary py-6 flex items-center justify-between group">
                <span>JOIN THE CLUB</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
