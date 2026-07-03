"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface KineticHeadingProps {
  baseTextPre: string;
  strikeWord: string;
  revealWord: string;
  baseTextPost: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function KineticHeading({
  baseTextPre,
  strikeWord,
  revealWord,
  baseTextPost,
  className = "",
  as = "h1",
}: KineticHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  const fullTextText = `${baseTextPre}${revealWord}${baseTextPost}`;

  if (shouldReduceMotion) {
    return (
      <Tag className={className}>
        {baseTextPre}
        <span className="text-[#FF4D2D]">{revealWord}</span>
        {baseTextPost}
      </Tag>
    );
  }

  return (
    <div className="relative w-full">
      {/* 1. Screen reader only text for SEO indexability & accessibility */}
      <Tag className="sr-only">{fullTextText}</Tag>

      {/* 2. Visual presentation layer, hidden from screen readers */}
      <Tag className={className} aria-hidden="true">
        <span>{baseTextPre}</span>
        
        <span className="relative inline-flex items-center mx-1">
          {/* Struck word */}
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.0, duration: 0.3 }}
            className="text-[#858E9B] relative select-none"
          >
            {strikeWord}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              className="absolute left-0 top-1/2 h-[3px] bg-[#FF4D2D] -translate-y-1/2"
            />
          </motion.span>

          {/* Reveal word */}
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            className="text-[#FF4D2D] overflow-hidden ml-2 font-black whitespace-nowrap"
          >
            {revealWord}
          </motion.span>
        </span>

        <span>{baseTextPost}</span>
      </Tag>
    </div>
  );
}
