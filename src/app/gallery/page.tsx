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
    <div className="pt-32 pb-20 min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
          Innovations <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-magenta">in Motion</span>
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
