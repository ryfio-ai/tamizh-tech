/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { motion } from "framer-motion";
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

const categories = ["All", "Workshops", "Events", "Competitions", "Robots", "Labs", "Drone"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Map images to categories based on index
  const galleryItems = galleryImages.map((src, idx) => {
    const cats = ["Workshops", "Events", "Competitions", "Robots", "Labs", "Drone"];
    return {
      src,
      category: cats[idx % cats.length]
    };
  });

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Media Archives
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-secondary leading-tight">
            Visualizing our <br /> Engineering Progress.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
            Browse snapshots of our interactive workshops, robotic builds, lab environments, and competitions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex border-b border-border mb-12 overflow-x-auto no-scrollbar gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "text-text-muted hover:text-secondary hover:bg-bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 mb-24">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.src}
                onClick={() => setSelectedImg(item.src)}
                className="break-inside-avoid relative overflow-hidden rounded-xl border border-border bg-bg-secondary cursor-zoom-in group shadow-sm"
              >
                <img
                  src={item.src}
                  alt={`Gallery ${item.category}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Hover overlay detail */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest bg-accent/15 border border-accent/20 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider mt-2">View Fullscreen</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 text-sm font-bold tracking-wider"
              >
                CLOSE [X]
              </button>
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-lg bg-secondary flex items-center justify-center border border-white/10"
              >
                <img 
                  src={selectedImg} 
                  alt="Full view image" 
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Grid */}
        <div className="border-t border-border pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-medium text-text-secondary">
          <div className="space-y-3">
            <span className="p-2.5 bg-bg-secondary border border-border rounded-lg inline-flex text-primary">
              <Camera className="w-5 h-5" />
            </span>
            <h4 className="text-base font-bold text-secondary uppercase">R&D Documentation</h4>
            <p className="text-xs leading-relaxed">Continuous visual logs showing physical prototype assembly, sensor integrations, and test calibrating cycles.</p>
          </div>
          <div className="space-y-3">
            <span className="p-2.5 bg-bg-secondary border border-border rounded-lg inline-flex text-accent">
              <Zap className="w-5 h-5" />
            </span>
            <h4 className="text-base font-bold text-secondary uppercase">Academic Impact</h4>
            <p className="text-xs leading-relaxed">Documenting hands-on workshops, robotics bootcamps, and student prototype evaluations across institutions.</p>
          </div>
          <div className="space-y-3">
            <span className="p-2.5 bg-bg-secondary border border-border rounded-lg inline-flex text-primary">
              <Globe className="w-5 h-5" />
            </span>
            <h4 className="text-base font-bold text-secondary uppercase">Industrial Milestones</h4>
            <p className="text-xs leading-relaxed">Photographic verification of operational lines, control cabinets, and autonomous setups deployed pan-India.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Add state support imports at the top
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

