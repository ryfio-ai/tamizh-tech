"use client";

import React from "react";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink } from "lucide-react";

export default function FestFindPage() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="FestFind Live Map"
        subtitle="Explore technical festivals, robotics championships, code hackathons, and academic seminars across India."
        breadcrumbActive="FestFind"
      />

      {/* Map Embed Section */}
      <section className="section bg-white py-12 text-left">
        <div className="container px-6 max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className="mb-8 p-6 bg-subtle border border-border/80 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">Ecosystem Portal</span>
              <h3 className="text-xl font-extrabold font-heading text-text-primary uppercase mb-2">FestFind Event Network</h3>
              <p className="text-xs text-text-secondary leading-relaxed max-w-2xl font-sans">
                FestFind is our proprietary technical festival tracking platform. It maps active college seminars, coding contests, and robotics tournaments in real-time, helping engineering minds connect, compete, and showcase innovation.
              </p>
            </div>
            <a 
              href="https://festfind.live/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="primary" className="font-bold text-white bg-accent hover:bg-accent-hover text-xs rounded-full gap-1.5 shadow-sm">
                <Globe className="w-4 h-4" /> Open In New Tab
              </Button>
            </a>
          </div>

          {/* Map Preview Fallback */}
          <div className="relative w-full h-[70vh] rounded-2xl border border-border/80 shadow-2xl overflow-hidden bg-zinc-950 group">
            {/* Background Map Image */}
            <Image
              src="/find fest.png"
              alt="FestFind Live Map Preview"
              fill
              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            
            {/* Gradient Overlay for modern look */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            
            {/* Interactive glassmorphic card in the center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="max-w-md p-8 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl space-y-6 transform transition-all duration-500 hover:scale-[1.02] hover:border-accent/40">
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent animate-pulse">
                  <Globe className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-heading text-white uppercase tracking-tight">
                    Launch FestFind Live Map
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    FestFind runs as an independent tracking application to map tournaments, symposiums, and college events in real-time.
                  </p>
                </div>
                
                <a 
                  href="https://festfind.live/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button 
                    className="w-full font-bold text-white bg-accent hover:bg-accent-hover text-sm rounded-full py-6 shadow-[0_4px_14px_rgba(255,106,0,0.35)] hover:shadow-[0_8px_24px_rgba(255,106,0,0.5)] transition-all gap-2"
                  >
                    Open Live Application <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
