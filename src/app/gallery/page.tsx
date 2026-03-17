/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

const galleryImages = [
  require("@/public/gallery/1.JPEG"),
  require("@/public/gallery/3.jpg"),
  require("@/public/gallery/6.jpg"),
  require("@/public/gallery/7.JPG"),
  require("@/public/gallery/8.jpg"),
  require("@/public/gallery/9.jpg"),
  require("@/public/gallery/10.jpg"),
  require("@/public/gallery/11.jpg"),
  require("@/public/gallery/12.jpg"),
  require("@/public/gallery/13.jpg"),
  require("@/public/gallery/14.jpg"),
  require("@/public/gallery/16.jpeg"),
  require("@/public/gallery/17.jpeg"),
  require("@/public/gallery/18.jpeg"),
  require("@/public/gallery/19.jpeg"),
  require("@/public/gallery/20.jpeg"),
  require("@/public/gallery/21.jpeg"),
  require("@/public/gallery/22.jpeg"),
  require("@/public/gallery/23.jpeg"),
  require("@/public/gallery/24.jpeg"),
  require("@/public/gallery/25.jpeg"),
  require("@/public/gallery/26.jpeg"),
  require("@/public/gallery/27.jpeg"),
  require("@/public/gallery/29.jpeg"),
  require("@/public/gallery/30.jpeg"),
  require("@/public/gallery/32.jpeg"),
  require("@/public/gallery/33.jpeg"),
  require("@/public/gallery/34.jpeg"),
  require("@/public/gallery/35.jpeg"),
  require("@/public/gallery/36.jpeg"),
  require("@/public/gallery/37.jpeg"),
  require("@/public/gallery/39.jpeg"),
  require("@/public/gallery/40.jpeg"),
  require("@/public/gallery/41.jpeg"),
  require("@/public/gallery/42.jpeg"),
  require("@/public/gallery/43.jpeg"),
  require("@/public/gallery/44.jpeg"),
  require("@/public/gallery/46.jpeg"),
  require("@/public/gallery/47.jpeg"),
  require("@/public/gallery/49.jpeg"),
  require("@/public/gallery/50.jpeg"),
  require("@/public/gallery/51.jpeg"),
  require("@/public/gallery/53.jpeg"),
  require("@/public/gallery/54.jpeg"),
  require("@/public/gallery/55.jpeg"),
  require("@/public/gallery/56.jpeg"),
  require("@/public/gallery/58.jpeg"),
  require("@/public/gallery/59.jpeg"),
  require("@/public/gallery/60.jpeg"),
  require("@/public/gallery/62.jpeg"),
  require("@/public/gallery/63.jpeg"),
  require("@/public/gallery/64.jpeg"),
  require("@/public/gallery/65.jpeg"),
  require("@/public/gallery/66.jpeg"),
  require("@/public/gallery/67.jpeg"),
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
          Innovations <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">in Motion</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Explore the projects, competitions, and training sessions that define Tamizh Robotics Club.
        </p>
      </div>
      
      <ParallaxScrollSecond images={galleryImages} />
      
      <div className="container mx-auto px-4 text-center mt-20">
        <p className="text-slate-500 italic">
          More updates coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
}
