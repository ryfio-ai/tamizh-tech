"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Users } from "lucide-react";

export function FloatingWidgets() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-none items-end">
      {/* Floating WhatsApp Tab */}
      <a
        href="https://wa.me/918148045030?text=Hi%20TamizhTech,%20I%20am%20interested%20in%20your%20services%20and%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-end h-12 rounded-l-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:pl-6 pl-3 pr-3.5 group pointer-events-auto cursor-pointer max-w-[48px] hover:max-w-[200px] overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2.5 font-sans">
          Chat on WhatsApp
        </span>
        <FaWhatsapp className="w-5 h-5 shrink-0" />
      </a>

      {/* Floating Join Club Tab */}
      <Link
        href="/robotics-club/join"
        className="flex items-center justify-end h-12 rounded-l-full bg-[#FF6A00] hover:bg-[#E05300] text-white shadow-[0_4px_12px_rgba(255,106,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,106,0,0.45)] transition-all duration-300 hover:pl-6 pl-3.5 pr-4 group pointer-events-auto cursor-pointer max-w-[48px] hover:max-w-[200px] overflow-hidden"
        aria-label="Join our Robotics Club"
      >
        <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2.5 font-sans">
          Join Our Club
        </span>
        <Users className="w-5 h-5 shrink-0" />
      </Link>
    </div>
  );
}
