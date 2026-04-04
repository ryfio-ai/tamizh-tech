/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import { MoveRight, Camera, Cpu, Zap, Layers, Globe } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  "/gallery/1.JPEG",
  "/gallery/3.jpg",
  "/gallery/6.jpg",
  "/gallery/7.JPG",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/16.jpeg",
  "/gallery/17.jpeg",
  "/gallery/18.jpeg",
  "/gallery/19.jpeg",
  "/gallery/20.jpeg",
  "/gallery/21.jpeg",
  "/gallery/22.jpeg",
  "/gallery/23.jpeg",
  "/gallery/24.jpeg",
  "/gallery/25.jpeg",
  "/gallery/26.jpeg",
  "/gallery/27.jpeg",
  "/gallery/29.jpeg",
  "/gallery/30.jpeg",
  "/gallery/32.jpeg",
  "/gallery/33.jpeg",
  "/gallery/34.jpeg",
  "/gallery/35.jpeg",
  "/gallery/36.jpeg",
  "/gallery/37.jpeg",
  "/gallery/39.jpeg",
  "/gallery/40.jpeg",
  "/gallery/41.jpeg",
  "/gallery/42.jpeg",
  "/gallery/43.jpeg",
  "/gallery/44.jpeg",
  "/gallery/46.jpeg",
  "/gallery/47.jpeg",
  "/gallery/49.jpeg",
  "/gallery/50.jpeg",
  "/gallery/51.jpeg",
  "/gallery/53.jpeg",
  "/gallery/54.jpeg",
  "/gallery/55.jpeg",
  "/gallery/56.jpeg",
  "/gallery/58.jpeg",
  "/gallery/59.jpeg",
  "/gallery/60.jpeg",
  "/gallery/62.jpeg",
  "/gallery/63.jpeg",
  "/gallery/64.jpeg",
  "/gallery/65.jpeg",
  "/gallery/66.jpeg",
  "/gallery/67.jpeg",
];

export default function GalleryPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Project Archive</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Visualizing <br /> Industrial <br /> Excellence.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10 uppercase tracking-tight font-bold">
            A comprehensive visual documentation of specialized robotics deployments, technical R&D milestones, and localized engineering excellence across the Tamizh Tech Pvt Ltd ecosystem.
          </p>
        </div>

        {/* Parallax Gallery Grid */}
        <div className="bg-white border-y border-border-light py-20 relative overflow-hidden mb-40 shadow-sm industrial-card">
           <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
             <Camera className="w-64 h-64 text-secondary-main" />
           </div>
           <div className="container mx-auto px-6 mb-16 relative z-10 text-center lg:text-left">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-text-muted flex items-center gap-4 justify-center lg:justify-start">
                <span className="w-8 h-[2px] bg-primary-main"></span> TECHNICAL DEPLOYMENT LOGS
              </p>
           </div>
           <div className="relative z-10 -mx-6 md:mx-0">
             <ParallaxScrollSecond images={galleryImages} />
           </div>
        </div>

        {/* Footer Audit Context */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-light pt-20">
           <div className="flex flex-col gap-6">
              <div className="p-4 bg-primary-light/50 w-fit rounded-lg"><Layers className="w-6 h-6 text-primary-main" /></div>
              <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter">Hardware Evolution</h4>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-tight leading-relaxed opacity-70">Visual mapping of robotic chassis development, iterative structural testing, and localized PCB fabrication cycles.</p>
           </div>
           <div className="flex flex-col gap-6">
              <div className="p-4 bg-primary-light/50 w-fit rounded-lg"><Zap className="w-6 h-6 text-primary-main" /></div>
              <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter">On-Ground Impact</h4>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-tight leading-relaxed opacity-70">Documenting live industrial installations and large-scale technical training programs across 15+ Indian states.</p>
           </div>
           <div className="flex flex-col gap-6">
              <div className="p-4 bg-primary-light/50 w-fit rounded-lg"><Globe className="w-6 h-6 text-primary-main" /></div>
              <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter">Research Strategic</h4>
              <p className="text-xs font-bold text-text-secondary uppercase tracking-tight leading-relaxed opacity-70">A repository of high-spec laboratory setups and strategic R&D collaborations with premier technical institutions.</p>
           </div>
        </div>

        {/* Request Specs CTA */}
        <div className="mt-40 bg-secondary-main p-16 lg:p-24 text-center shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
           <div className="relative z-10">
             <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-10 leading-none">Access Technical <br /> Specifications.</h4>
             <p className="text-white/50 text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto mb-12 leading-relaxed">For higher-resolution project documentation or specific technical SOPs related to these deployments, contact our engineering PR division.</p>
             <Link href="/contact" className="btn-primary py-5 px-12 inline-flex items-center gap-4 shadow-xl">
               REQUEST DOCS <MoveRight className="w-4 h-4" />
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}

