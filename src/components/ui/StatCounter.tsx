"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export function StatCounter({ target, label, prefix = "", suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, shouldReduceMotion]);

  return (
    <div 
      ref={ref} 
      className="bg-[#11141A] border border-[#232833] rounded-xl p-8 text-center transition-all duration-300 hover:border-[#FF4D2D] hover:shadow-[0_12px_32px_rgba(255,77,45,0.08)] flex flex-col justify-center items-center h-full min-h-[140px]"
    >
      <span 
        className="text-4xl md:text-5xl font-black text-[#F5F6F8] tracking-tight block mb-2 font-mono"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {prefix}{count}{suffix}
      </span>
      <span className="text-[10px] font-black text-[#9AA1AC] uppercase tracking-widest leading-snug">
        {label}
      </span>
    </div>
  );
}
