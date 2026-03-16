import Link from "next/link";
import { ArrowRight, MessageCircle, Brain, Trophy, Zap, Users } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const events = [
  { name: "Robo Soccer", desc: "Team-based autonomous or RC robot soccer competition.", icon: "⚽" },
  { name: "Robo Sumo", desc: "Push rivals out of the ring using strength and strategy.", icon: "🤼" },
  { name: "Robo Race", desc: "Time-trial speed racing on custom tracks.", icon: "🏎️" },
  { name: "Robo War", desc: "Battle bots competition with custom-built combat machines.", icon: "⚔️" },
  { name: "Line Follower Race", desc: "Automated bots that follow a marked path at high speed.", icon: "〰️" },
  { name: "Fast LF & Maze Solver", desc: "Advanced autonomous navigation with maze-solving AI.", icon: "🧩" },
  { name: "Water Rocket", desc: "Design and launch water-powered rockets for altitude.", icon: "🚀" },
  { name: "Drone Race", desc: "FPV drone piloting through timed obstacle courses.", icon: "🚁" },
];

const benefits = [
  { icon: <Brain className="w-6 h-6 text-neon-cyan" />, title: "Training & Mentorship", desc: "Structured training for all club events with expert mentors." },
  { icon: <Trophy className="w-6 h-6 text-neon-magenta" />, title: "National & International Events", desc: "150+ events supported over the last 3 years." },
  { icon: <Zap className="w-6 h-6 text-neon-green" />, title: "Access to Labs & Tools", desc: "Hands-on access to labs, tools, and practice arenas." },
  { icon: <Users className="w-6 h-6 text-neon-violet" />, title: "Builder Community", desc: "Network of builders, innovators, and mentors across India." },
];

export default function RoboticsClubPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-neon-cyan uppercase">TamizhTech Robotics Club</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Build. Compete. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">Innovate.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Hands-on robotics, competitions, and an innovation hub for school and college students across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-md hover:bg-white hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2 group">
              Fill Membership Form <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20want%20to%20join%20the%20Robotics%20Club." target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-neon-magenta text-white font-bold rounded-md bg-neon-magenta/10 hover:bg-neon-magenta/20 hover:shadow-neon-magenta transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 text-neon-magenta" /> Talk to a Mentor
            </a>
          </div>
        </div>
      </section>

      {/* Events Grid with GlowingEffect */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">Club <span className="text-neon-cyan">Events</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Train for and compete in these exciting robotics disciplines.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event.name} className="relative rounded-xl border border-white/10 p-2 group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-3 overflow-hidden rounded-lg bg-white/[0.03] p-6 h-full">
                <div className="text-4xl mb-2">{event.icon}</div>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-neon-cyan transition-colors">{event.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits with GlowingEffect */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">Why Join <span className="text-neon-magenta">TTRC?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="relative rounded-xl border border-white/10 p-2">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                  <div className="p-3 rounded-xl bg-white/5 w-fit">{b.icon}</div>
                  <h3 className="font-heading font-bold text-white text-lg">{b.title}</h3>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Panel */}
      <section className="py-24 container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-neon-cyan/30 p-10 md:p-16 text-center"
          style={{ background: "radial-gradient(circle at center, rgba(0, 243, 255, 0.08) 0%, rgba(10, 10, 26, 0.9) 100%)" }}>
          <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
              Become a <span className="text-neon-cyan">Club Member</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Training, event support, facility access, and exclusive benefits at TamizhTech Robotics Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-md hover:bg-white hover:shadow-neon-cyan transition-all">
                Fill Membership Form
              </a>
              <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20want%20to%20join%20the%20Robotics%20Club." target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 border border-neon-magenta text-white bg-neon-magenta/10 hover:bg-neon-magenta/20 hover:shadow-neon-magenta font-bold rounded-md transition-all">
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
