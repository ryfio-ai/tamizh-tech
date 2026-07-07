"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  images: string[];
  className?: string;
}

export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [index, setIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === null) return;
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === null) return;
    setIndex((index + 1) % images.length);
  };

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-6", className)}>
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer border border-border/40 shadow-sm"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative max-w-[85vw] max-h-[85vh] aspect-[4/3] w-full md:w-[70vw]">
              <Image
                src={images[index]}
                alt={`Lightbox image ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
