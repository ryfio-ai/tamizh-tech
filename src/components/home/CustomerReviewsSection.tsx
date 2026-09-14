"use client";

import React from "react";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Review {
  name: string;
  avatarText: string;
  timeAgo: string;
  headline?: string;
  content: string;
  useCase: "Custom Robotics" | "Competition Robots" | "Engineering & R&D" | "Product Quality";
  stars: number;
}

const reviews: Review[] = [
  {
    name: "ILAKA V",
    avatarText: "IV",
    timeAgo: "1 year ago",
    headline: "Innovative and Reliable Robotics Solutions!",
    content:
      "I’ve been following Tamizh Tech Robotics Company for a while and recently got a custom robotics project done through them. I’m genuinely impressed with their professionalism, creativity, and the effort they put into every detail. The team is young but extremely talented — they explained every step clearly and delivered on time. Their Robo Soccer Bot and other innovations are truly next-level.",
    useCase: "Custom Robotics",
    stars: 5,
  },
  {
    name: "AMUTHABHARATHI",
    avatarText: "AB",
    timeAgo: "4 weeks ago",
    headline: "Prize-Winning Competition Bots",
    content:
      "I have good experience with Tamizh Tech. One of my best prize-winning bots were purchased from them. Their way of interaction is excellent, and their line follower is accurate with a perfect design.",
    useCase: "Competition Robots",
    stars: 5,
  },
  {
    name: "Krishnakanth",
    avatarText: "KK",
    timeAgo: "1 year ago",
    headline: "Next-Level Innovations Built from Scratch",
    content:
      "Their Robo Soccer Bot and other innovations are truly next-level. I love that they are building everything from scratch and supporting local engineering talent. I would definitely recommend Tamizh Tech for any robotics or electronics-based needs — whether it’s for education, competition, or custom builds.",
    useCase: "Competition Robots",
    stars: 5,
  },
  {
    name: "kumara Dharshini",
    avatarText: "KD",
    timeAgo: "1 year ago",
    headline: "Dedication to Technology & Innovation",
    content:
      "I truly appreciate the work Tamil Tech Private Limited is doing in the field of robotics. Their passion for technology and innovation is clearly reflected in their projects, and it’s inspiring to see such dedication from a team based here in Coimbatore. Wishing the team continued success!",
    useCase: "Engineering & R&D",
    stars: 5,
  },
  {
    name: "Leavenson Crest",
    avatarText: "LC",
    timeAgo: "1 year ago",
    headline: "Great Build Quality & Fast Response",
    content:
      "Overall packaging and delivery times, product build quality, and customer response times are so good. Overall cool experience and once again thank you Tamizh tech pvt ltd.",
    useCase: "Product Quality",
    stars: 5,
  },
];

export function CustomerReviewsSection() {
  const googleReviewsUrl = "https://maps.google.com/?q=Tamizh+Tech+Robotics+Company+Coimbatore";

  return (
    <section className="py-24 bg-white border-t border-border/40 relative overflow-hidden" id="reviews">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,107,0,0.04),transparent_70%)] pointer-events-none" />

      <div className="container px-6 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-accent w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest">WHAT OUR CUSTOMERS SAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight font-heading leading-tight mb-4">
            Real experiences.{" "}
            <span className="text-accent underline decoration-4 decoration-accent/25 underline-offset-4">
              Real robotics.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans max-w-2xl mx-auto mb-6">
            Real feedback from students, competitive roboticists, and industry partners who design, build, and compete with Tamizh Tech.
          </p>

          {/* Google Rating Trust Badge */}
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-subtle border border-border hover:border-accent/40 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-1 text-[#FF6B00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
              ))}
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs font-black text-text-primary tracking-wide">
              5.0 RATING
            </span>
            <span className="text-xs font-semibold text-text-muted">
              • Google Reviews (14 Reviews)
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors ml-0.5" />
          </a>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.08}>
              <div className="flex flex-col justify-between h-full bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(255,107,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] hover:border-accent/40 transition-all duration-300 group">
                <div>
                  {/* Top bar: Stars + Use Case Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-0.5 text-[#FF6B00]">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-subtle border border-border/70 text-text-secondary">
                      {rev.useCase}
                    </span>
                  </div>

                  {/* Headline */}
                  {rev.headline && (
                    <h3 className="font-bold text-text-primary text-base mb-2.5 font-heading leading-snug">
                      "{rev.headline}"
                    </h3>
                  )}

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans line-clamp-5">
                    "{rev.content}"
                  </p>
                </div>

                {/* Author Footer with Google Review Tag */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-black text-xs">
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-text-primary font-heading">
                        {rev.name}
                      </div>
                      <div className="text-[10px] font-semibold text-text-muted">
                        Verified Google Customer • {rev.timeAgo}
                      </div>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200/80 px-2 py-1 rounded">
                    <svg className="w-3 h-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    Google
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Google Reviews CTA */}
        <AnimatedSection className="mt-14 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border hover:border-accent text-text-primary hover:text-accent font-bold text-sm shadow-xs hover:shadow-md transition-all group"
          >
            <span>View all Google Reviews</span>
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
