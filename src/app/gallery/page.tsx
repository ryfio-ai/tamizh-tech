/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

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
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Portfolio in Action</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Innovations <span className="text-primary-main">Visualized.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto font-regular leading-relaxed">
            A visual documentation of specialized robotics projects, nationwide competitions, 
            and localized technical training delivered across the TamizhTech ecosystem.
          </p>
        </div>
      </section>

      {/* Parallax Gallery Grid */}
      <section className="py-24 bg-bg-page">
        <ParallaxScrollSecond images={galleryImages} />
      </section>
      
      {/* Footer Disclaimer */}
      <section className="py-24 container mx-auto px-4 text-center border-t border-border-light">
        <div className="max-w-2xl mx-auto">
            <p className="text-text-muted font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Technical Archive</p>
            <p className="text-text-tertiary italic text-sm">
                This repository is updated monthly with new technical deployments and training highlights. 
                Contact our PR team for higher-resolution project specifications.
            </p>
        </div>
      </section>
    </div>
  );
}
