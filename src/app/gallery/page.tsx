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
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen text-[#F5F6F8]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 border-l-4 border-[#FF4D2D] pl-6 md:pl-10 py-4 text-left">
          <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-8 font-sans">Project Archive</h1>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] uppercase">
            Ecosystem <br /> Gallery.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA1AC] leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-10">
            A visual documentation of specialized robotics deployments, technical R&D milestones, workshops, and student competitive tracks across India.
          </p>
        </div>

        {/* Parallax Gallery Grid */}
        <div className="bg-[#11141A] border border-[#232833] py-20 rounded-2xl relative overflow-hidden mb-40 shadow-sm">
           <div className="absolute top-0 right-0 p-8 opacity-[0.01] pointer-events-none">
             <Camera className="w-64 h-64 text-[#F5F6F8]" />
           </div>
           <div className="container mx-auto px-6 mb-16 relative z-10 text-center lg:text-left">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#FF4D2D] flex items-center gap-4 justify-center lg:justify-start">
                <span className="w-8 h-[2px] bg-[#FF4D2D]"></span> TECHNICAL & COMMUNITY DEPLOYMENTS
              </p>
           </div>
           <div className="relative z-10 -mx-6 md:mx-0">
             <ParallaxScrollSecond images={galleryImages} />
           </div>
        </div>

        {/* Footer Audit Context */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#232833] pt-20 text-left">
           <div className="flex flex-col gap-6">
              <div className="p-4 bg-[#181C24] border border-[#232833] w-fit rounded-lg text-[#FF4D2D]"><Layers className="w-6 h-6" /></div>
              <h4 className="text-xl font-heading font-black text-[#F5F6F8] uppercase tracking-tighter">Hardware Evolution</h4>
              <p className="text-xs font-bold text-[#9AA1AC] uppercase tracking-tight leading-relaxed opacity-70">Visual mapping of robotic chassis development, iterative structural testing, and localized prototyping cycles.</p>
           </div>
           <div className="flex flex-col gap-6">
              <div className="p-4 bg-[#181C24] border border-[#232833] w-fit rounded-lg text-[#FF4D2D]"><Zap className="w-6 h-6" /></div>
              <h4 className="text-xl font-heading font-black text-[#F5F6F8] uppercase tracking-tighter">On-Ground Impact</h4>
              <p className="text-xs font-bold text-[#9AA1AC] uppercase tracking-tight leading-relaxed opacity-70">Documenting live industrial installations and large-scale technical training programs across 15+ Indian states.</p>
           </div>
           <div className="flex flex-col gap-6">
              <div className="p-4 bg-[#181C24] border border-[#232833] w-fit rounded-lg text-[#FF4D2D]"><Globe className="w-6 h-6" /></div>
              <h4 className="text-xl font-heading font-black text-[#F5F6F8] uppercase tracking-tighter">Research Strategy</h4>
              <p className="text-xs font-bold text-[#9AA1AC] uppercase tracking-tight leading-relaxed opacity-70">A repository of high-spec laboratory setups and strategic R&D collaborations with premier technical institutions.</p>
           </div>
        </div>

        {/* Request Specs CTA */}
        <div className="mt-40 bg-[#11141A] border border-[#232833] p-16 lg:p-24 text-center shadow-2xl rounded-2xl relative overflow-hidden">
           <div className="relative z-10">
             <h4 className="text-3xl md:text-4xl font-heading font-black text-[#F5F6F8] tracking-tighter uppercase mb-10 leading-none">Access Technical <br /> Specifications.</h4>
             <p className="text-[#9AA1AC] text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto mb-12 leading-relaxed">For higher-resolution project documentation or specific technical guides related to these deployments, contact our coordination desk.</p>
             <Link href="/contact" className="btn-primary py-5 px-12 inline-flex items-center gap-4 shadow-xl">
               REQUEST DOCS <MoveRight className="w-4 h-4" />
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
