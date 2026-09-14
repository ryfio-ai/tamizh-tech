"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { getProductUrl } from "@/lib/routing";
import { trackMarketingEvent } from "@/lib/analytics";

export function FloatingCompetitionRobotAd() {
  // 1. Data Integrity: Filter ONLY published Competition Robots with valid image
  const competitionProducts = useMemo(() => {
    return products.filter(
      (p) => p.category === "Competition Robots" && p.published !== false && p.image
    );
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 2. Product Rotation: Rotate every 6 seconds if multiple products exist and not hovered
  useEffect(() => {
    if (competitionProducts.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % competitionProducts.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [competitionProducts.length, isHovered]);

  if (competitionProducts.length === 0) return null;

  const currentProduct = competitionProducts[currentIndex];
  const productHref = getProductUrl(currentProduct.categorySlug, currentProduct.slug);

  const handleClick = () => {
    trackMarketingEvent("product_ad_click", {
      product_name: currentProduct.name,
      product_sku: currentProduct.sku || currentProduct.id,
      product_category: currentProduct.category,
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
    });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      aria-label="Featured Competition Robot Promotion"
      className="absolute top-6 right-4 sm:top-8 sm:right-6 lg:top-8 lg:right-8 xl:right-12 z-30 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={productHref}
        onClick={handleClick}
        className="group block w-[200px] sm:w-[215px] md:w-[230px] bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-6px_rgba(255,107,0,0.22),0_4px_12px_rgba(0,0,0,0.06)] hover:border-[#FF6B00]/50 transition-all duration-300 hover:scale-[1.025] p-3 sm:p-3.5 text-center cursor-pointer select-none"
      >
        {/* Advertisement Header: Label + Indicators */}
        <div className="flex items-center justify-between gap-2 mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00] leading-none">
              COMPETITION ROBOT
            </span>
          </div>
          {/* Subtle rotation dots */}
          <div className="flex items-center gap-1">
            {competitionProducts.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-3 bg-[#FF6B00]" : "w-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Product Content (Image + Name only) */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {/* Product Image Focus — Larger, clean display */}
              <div className="relative w-full aspect-[4/3] rounded-xl bg-slate-50/80 border border-slate-100/90 flex items-center justify-center p-2 overflow-hidden my-1">
                <Image
                  src={currentProduct.image}
                  alt={`${currentProduct.name} - Tamizh Tech Robotics`}
                  fill
                  sizes="(max-width: 640px) 190px, 230px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-2.5 text-sm sm:text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors leading-tight line-clamp-1">
                {currentProduct.name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </Link>
    </motion.aside>
  );
}
