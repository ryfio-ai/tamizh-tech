import { Lightbulb, Globe, GraduationCap, Users, Shield, Cpu } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const values = [
  { icon: <Lightbulb className="w-7 h-7 text-neon-cyan" />, title: "Innovation Leadership", desc: "Pushing the boundaries of what's possible with robotics and AI." },
  { icon: <GraduationCap className="w-7 h-7 text-neon-magenta" />, title: "Educational Impact", desc: "Making robotics and AI learning accessible to every student in Tamil Nadu and beyond." },
  { icon: <Shield className="w-7 h-7 text-neon-green" />, title: "Enterprise Excellence", desc: "Delivering high-quality automation and IoT solutions to MSMEs and large enterprises." },
  { icon: <Globe className="w-7 h-7 text-neon-violet" />, title: "Global Reach", desc: "Operating across 15+ Indian states with ambitions to reach 50+ countries by 2030." },
  { icon: <Users className="w-7 h-7 text-neon-cyan" />, title: "Community & Collaboration", desc: "Building a thriving ecosystem of makers, mentors, and innovators." },
  { icon: <Cpu className="w-7 h-7 text-neon-magenta" />, title: "Ethics in AI", desc: "Committed to responsible, transparent, and human-centered AI development." },
];

const certifications = ["ISO 9001:2015 – Quality Management", "ISO 27001 – Information Security", "IEEE Member", "STEM Certified"];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/30 bg-neon-magenta/5 mb-6">
              <span className="text-xs font-bold tracking-widest text-neon-magenta uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">
              Born in <span className="text-neon-cyan">Coimbatore.</span><br />
              Built for <span className="text-neon-magenta">India.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              TamizhTech started with a simple belief: every student in Tamil Nadu deserves access to world-class robotics and AI education. From a small lab in Coimbatore, we have grown into a robotics innovation hub serving schools, colleges, and enterprises across 15+ states.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, TamizhTech drives innovation through hands-on training, custom automation solutions, and a thriving robotics club community, with the vision to become a global benchmark by 2030.
            </p>
          </div>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-neon-cyan/20"
            style={{ background: "radial-gradient(circle at top right, rgba(176, 38, 255, 0.2), rgba(0, 243, 255, 0.05) 60%, rgba(10, 10, 26, 0.9) 100%)" }}>
            <div className="absolute inset-0 bg-cyber-grid opacity-20" />
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-center p-8">
              <div className="text-6xl font-black text-white">2050</div>
              <div className="text-neon-cyan text-xl font-bold tracking-widest font-heading">VISION</div>
              <p className="text-slate-400 text-sm max-w-xs">Global robotics innovation hub — from Tamil Nadu to the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl border border-white/10 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative rounded-lg bg-white/[0.03] p-10 h-full">
                <h2 className="text-3xl font-heading font-black text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-neon-cyan" /> Our Mission
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  To empower institutions worldwide with transformative robotics, automation, and training solutions that deliver measurable results and inspire the next generation of innovators.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl border border-white/10 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative rounded-lg bg-white/[0.03] p-10 h-full">
                <h2 className="text-3xl font-heading font-black text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-neon-magenta" /> Vision 2030
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  To be the most trusted partner for educational technology transformation, operating in 50+ countries and setting the global benchmark for innovation and client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with GlowingEffect */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">Core <span className="text-neon-green">Values</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">The principles that guide everything we build and everyone we train.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="relative rounded-xl border border-white/10 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                <div className="p-3 bg-white/5 rounded-xl w-fit">{v.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <span key={cert} className="px-5 py-2 rounded-full text-sm font-bold text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur">
              {cert}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
