"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types =====
export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profileImage: any;
  linkedinUrl?: string; // Enhanced networking
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hook =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      onOutsideClick();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Carousel (MNC Style) =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  const handleScrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full">
      <div className="flex justify-end gap-3 mb-8 pr-4">
        <button
          className="h-10 w-10 rounded-full border border-border-medium flex items-center justify-center disabled:opacity-30 hover:bg-bg-elevated transition-colors"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-5 w-5 text-text-primary" />
        </button>
        <button
          className="h-10 w-10 rounded-full border border-border-medium flex items-center justify-center disabled:opacity-30 hover:bg-bg-elevated transition-colors"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-5 w-5 text-text-primary" />
        </button>
      </div>
      
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] pb-12"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-8 pl-4 pr-[10%] max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } }}
              viewport={{ once: true }}
              key={`card-${index}`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ===== Modern Team Card (MNC Style) =====
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: iTestimonial;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => { if (event.key === "Escape") handleCollapse(); };
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isExpanded]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="bg-text-primary/20 backdrop-blur-md h-full w-full fixed inset-0" onClick={handleCollapse} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              ref={containerRef}
              className="max-w-4xl w-full bg-bg-primary rounded-[2rem] shadow-2xl overflow-hidden relative z-[110]"
            >
              <button className="absolute top-6 right-6 h-10 w-10 rounded-full flex items-center justify-center bg-bg-elevated hover:bg-border-light transition-colors z-20" onClick={handleCollapse}>
                <X className="h-6 w-6 text-text-primary" />
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-5/12 relative h-80 md:h-auto">
                  <Image src={testimonial.profileImage} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                  <div className="mb-8">
                    <h2 className="text-4xl font-extrabold text-text-primary mb-2">{testimonial.name}</h2>
                    <p className="text-primary-main font-bold uppercase tracking-widest text-[11px] px-3 py-1 bg-primary-light rounded-full w-fit">{testimonial.designation}</p>
                  </div>
                  <p className="text-text-tertiary text-xl leading-relaxed mb-10 font-regular italic">
                    "{testimonial.description}"
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href={testimonial.linkedinUrl || "https://www.linkedin.com/company/tamizh-tech-robotics-company"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 px-6 rounded-md bg-[#0066FF] text-white hover:bg-[#0052CC] transition-all flex items-center gap-2 font-bold text-sm shadow-md"
                    >
                      <Linkedin className="w-5 h-5 fill-white" /> LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="mnc-card w-80 md:w-[22rem] flex flex-col h-[520px] overflow-hidden cursor-pointer group"
        onClick={handleExpand}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
      >
        <div className="relative h-2/3 w-full overflow-hidden bg-bg-elevated">
          <Image src={testimonial.profileImage} alt={testimonial.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg-primary to-transparent opacity-80" />
        </div>
        <div className="p-10 flex flex-col justify-between flex-grow bg-bg-primary">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-primary-main transition-colors">{testimonial.name}</h3>
            <p className="text-text-tertiary font-bold uppercase tracking-[0.1em] text-[10px] mb-4">{testimonial.designation}</p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-primary-main mt-4 group-hover:underline decoration-2 underline-offset-4">
            Executive Leadership <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { Carousel, TestimonialCard };
