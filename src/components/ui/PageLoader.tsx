"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("ttrc-loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("ttrc-loaded", "true");
    }, shouldReduceMotion ? 100 : 700);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0C10] text-[#F5F6F8] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-6 select-none pointer-events-none">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-24 h-24"
            >
              <Image
                src="/logo/TTRC LOGO.png"
                alt="TTRC Loading Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            <div className="w-40 h-[2px] bg-[#232833] rounded-full overflow-hidden relative">
              <motion.div
                initial={shouldReduceMotion ? { width: "100%" } : { left: "-100%", width: "100%" }}
                animate={shouldReduceMotion ? {} : { left: "100%" }}
                transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="absolute h-full bg-[#FF4D2D]"
              />
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2 }}
              className="text-[9px] font-black uppercase tracking-[0.3em] text-[#9AA1AC]"
            >
              TAMIZH TECH INDUSTRIAL
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
