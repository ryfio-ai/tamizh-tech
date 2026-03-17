"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MessageCircle } from "lucide-react";

const clients = [
  { name: "Bonifon", type: "Industry Partner" },
  { name: "Nura Robotics", type: "Robotics Partner" },
  { name: "Adithya Tech", type: "Tech Partner" },
  { name: "Tech-X Robot", type: "Robotics Partner" },
  { name: "RYFIO", type: "Platform Partner" },
  { name: "Yoi Robotics Lab LLP", type: "Research Partner" },
  { name: "RoboAiQ", type: "AI Partner" },
  { name: "Robo Club SREC", type: "College Club" },
  { name: "Aalam Learning Community", type: "Education Partner" },
  { name: "Tamizh Robotics Club", type: "Community" },
  { name: "AGS", type: "Enterprise Client" },
  { name: "TRD Squad", type: "Community" },
];

const caseStudies = [
  {
    icon: "🏫",
    title: "Robotics Lab Setup for Engineering College",
    desc: "Partnered with a top Coimbatore engineering college to set up a full robotics lab — kits, tracks, and mentor training included.",
    outcome: "350+ students trained in Year 1.",
    color: "neon-orange",
  },
  {
    icon: "🏭",
    title: "Industrial Automation for MSME",
    desc: "Designed a conveyor-based sorting robot for a Tirupur garment manufacturer, cutting manual sorting time by 60%.",
    outcome: "ROI achieved within 8 months.",
    color: "neon-magenta",
  },
  {
    icon: "🏆",
    title: "Robotics Club Network for Schools",
    desc: "Established active robotics clubs across 20+ Tamil Nadu schools with monthly competitions and inter-school events.",
    outcome: "150+ events over 3 years.",
    color: "neon-green",
  },
];

const clientColors = [
  { text: "text-neon-orange", border: "border-neon-orange/40", bg: "bg-neon-orange/10" },
  { text: "text-neon-magenta", border: "border-neon-magenta/40", bg: "bg-neon-magenta/10" },
  { text: "text-neon-green", border: "border-neon-green/40", bg: "bg-neon-green/10" },
  { text: "text-neon-violet", border: "border-neon-violet/40", bg: "bg-neon-violet/10" },
];

export default function ClientsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-violet/30 bg-neon-violet/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-violet uppercase">Clients & Partners</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-magenta">Institutions</span> &amp; <span className="text-neon-orange">Companies</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            50+ enterprise collaborations and 100+ deployed solutions across India.
          </p>
        </div>
      </section>

      {/* InfiniteSlider Row 1 — forward */}
      <div className="py-8 border-y border-white/10 bg-white/[0.02]">
        <InfiniteSlider gap={48} duration={30} durationOnHover={60}>
          {clients.map((c, i) => {
            const style = clientColors[i % clientColors.length];
            return (
              <div key={c.name}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border ${style.border} ${style.bg} backdrop-blur-sm shrink-0`}>
                <span className={`text-2xl font-black font-heading ${style.text}`}>{c.name.charAt(0)}</span>
                <div>
                  <p className={`font-heading font-bold text-base ${style.text} whitespace-nowrap`}>{c.name}</p>
                  <p className="text-xs text-slate-500 whitespace-nowrap">{c.type}</p>
                </div>
              </div>
            );
          })}
        </InfiniteSlider>

        {/* Row 2 — reverse */}
        <div className="mt-4">
          <InfiniteSlider gap={48} duration={25} durationOnHover={60} reverse>
            {[...clients].reverse().map((c, i) => {
              const style = clientColors[(i + 2) % clientColors.length];
              return (
                <div key={c.name}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border ${style.border} ${style.bg} backdrop-blur-sm shrink-0`}>
                  <span className={`text-2xl font-black font-heading ${style.text}`}>{c.name.charAt(0)}</span>
                  <div>
                    <p className={`font-heading font-bold text-base ${style.text} whitespace-nowrap`}>{c.name}</p>
                    <p className="text-xs text-slate-500 whitespace-nowrap">{c.type}</p>
                  </div>
                </div>
              );
            })}
          </InfiniteSlider>
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 container mx-auto px-4">
        <div className="glass-panel rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { val: "50+", label: "Enterprise Clients", color: "text-neon-orange" },
            { val: "100+", label: "Solutions Deployed", color: "text-neon-magenta" },
            { val: "15+", label: "States Served", color: "text-neon-green" },
            { val: "150+", label: "Events Supported", color: "text-neon-violet" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-4">
              <span className={`text-4xl font-black ${s.color}`}>{s.val}</span>
              <span className="text-slate-400 text-sm mt-1 tracking-wide uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-black text-white mb-12 text-center">
            Case <span className="text-neon-magenta">Studies</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="relative rounded-xl border border-white/10 p-2">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-7 h-full">
                  <div className="text-4xl">{cs.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-white">{cs.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cs.desc}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-xs font-bold text-neon-green">Outcome: </span>
                    <span className="text-xs text-slate-300">{cs.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%27d%20like%20to%20explore%20a%20partnership."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neon-violet text-neon-violet bg-neon-violet/10 hover:bg-neon-violet/20 font-bold rounded-md transition-all">
              <MessageCircle className="w-5 h-5" /> Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
