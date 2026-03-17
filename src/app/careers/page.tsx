import type { Metadata } from "next";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | TamizhTech Robotics Company",
  description: "Join the TamizhTech team — explore career opportunities in robotics, AI, embedded systems, training, and operations from Coimbatore.",
};

const culturePoints = [
  { icon: "🤖", title: "Hands-On Robotics & Real Projects", desc: "Work in our labs on live competition bots, industrial automation rigs, and student kits — not just mockups." },
  { icon: "🎓", title: "Student, Educator & Industry Impact", desc: "Every day you help schools, colleges, and enterprises level up with robotics and AI — impact you can see." },
  { icon: "📚", title: "Learning-First Environment", desc: "Mentorship, workshops, access to tools, CNC machines, 3D printers, and practice arenas built into the job." },
  { icon: "🌏", title: "Made in Coimbatore, Serving India", desc: "Local roots, national reach — 15+ states, 50+ enterprise clients, 150+ events. Big mission, close-knit team." },
  { icon: "🤝", title: "Collaborative Multi-Disciplinary Teams", desc: "Engineers, educators, designers, and operations people working side-by-side on the same outcomes." },
  { icon: "🚀", title: "Fast-Moving, Mission-Driven", desc: "We move fast, iterate, and pivot. If you want to see your work deployed in the real world quickly, this is the place." },
];

const roleCategories = [
  {
    icon: "⚙️",
    title: "Robotics & Embedded Engineering",
    desc: "Robot design, PCB development, firmware, ROS, actuator systems, and competition robot builds.",
    color: "neon-orange",
  },
  {
    icon: "🧠",
    title: "AI & Software",
    desc: "Automation tools, computer vision, internal dashboards, IoT platforms, and customer-facing apps.",
    color: "neon-magenta",
  },
  {
    icon: "🏫",
    title: "Training & Community",
    desc: "Trainers, mentors, curriculum designers, and workshop facilitators for student and enterprise programs.",
    color: "neon-green",
  },
  {
    icon: "📋",
    title: "Operations & Project Management",
    desc: "End-to-end execution of lab setups, robotics events, client deployments, and service delivery.",
    color: "neon-violet",
  },
  {
    icon: "🤝",
    title: "Sales & Partnerships",
    desc: "Growing relationships with educational institutions, MSMEs, enterprises, and ecosystem partners.",
    color: "neon-orange",
  },
  {
    icon: "🎨",
    title: "Design & Content",
    desc: "Visual design, brand content, social media, video production, and technical documentation.",
    color: "neon-magenta",
  },
];

const colorMap: Record<string, string> = {
  "neon-orange": "text-neon-orange border-neon-orange/30 bg-neon-orange/5",
  "neon-magenta": "text-neon-magenta border-neon-magenta/30 bg-neon-magenta/5",
  "neon-green": "text-neon-green border-neon-green/30 bg-neon-green/5",
  "neon-violet": "text-neon-violet border-neon-violet/30 bg-neon-violet/5",
};

export default function CareersPage() {
  const mailHref =
    "mailto:tamizhtechpvtltd@gmail.com?subject=Career%20–%20Open%20Application&body=Hi%20TamizhTech%2C%0A%0AI%20would%20like%20to%20join%20your%20Talent%20Pool.%0A%0APreferred%20Role%20Category%3A%20%5BRobotics%20%2F%20AI%20%2F%20Training%20%2F%20Operations%20%2F%20Sales%20%2F%20Design%5D%0A%0AAbout%20me%3A";
  const waHref =
    "https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%E2%80%99m%20interested%20in%20joining%20your%20Talent%20Pool.%20Here%E2%80%99s%20a%20bit%20about%20me%3A";

  return (
    <div className="w-full">
      {/* ─── Hero ─── */}
      <section className="py-28 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-orange uppercase">Careers at TamizhTech Robotics</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Join the Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-magenta">
              Building the Future
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            Join the team building the future of robotics, AI, and automation from Coimbatore to the world.
          </p>
          <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
            TamizhTech is a fast-growing robotics, AI, IoT, and automation company serving students, colleges, and enterprises across 15+ states in India with 50+ enterprise clients. We work on real labs, real robots, and real outcomes — and we are always looking for passionate people who want to build, teach, and innovate.
          </p>
        </div>
      </section>

      {/* ─── No Active Openings Notice ─── */}
      <section className="container mx-auto px-4 pb-20 max-w-3xl">
        <div className="relative rounded-2xl border border-neon-magenta/30 p-2">
          <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
          <div className="relative rounded-xl bg-neon-magenta/5 px-8 py-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/40 bg-neon-magenta/10 text-neon-magenta text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" /> Currently Not Hiring
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              No Active Openings Right Now
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-xl mx-auto">
              We don{"'"}t have any open roles at the moment — but we{"'"}re always interested in talented people in
              robotics, embedded systems, AI, IoT, training, operations, and community building. Join our{" "}
              <span className="text-neon-orange font-bold">Talent Pool</span> and be the first to know when something opens up.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Life at TamizhTech ─── */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Life at <span className="text-neon-green">TamizhTech</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A culture built on impact, curiosity, and maker spirit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturePoints.map((point) => (
              <div key={point.title} className="relative rounded-xl border border-white/10 p-2">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                  <div className="text-4xl">{point.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-white">{point.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Future Role Categories ─── */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Future <span className="text-neon-orange">Opportunities</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We{"'"}re not hiring for these categories right now — but we keep a Talent Pool for future roles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roleCategories.map((role) => (
            <div key={role.title} className="relative rounded-xl border border-white/10 p-2 group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                <div className="text-4xl">{role.icon}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border w-fit ${colorMap[role.color]}`}>
                  Future Role
                </span>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-neon-orange transition-colors">
                  {role.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
                <p className="text-slate-500 text-xs italic mt-auto pt-3 border-t border-white/10">
                  Not hiring right now — join the Talent Pool for future roles in this area.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Students & Internships ─── */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl border border-neon-violet/30 p-2 max-w-4xl mx-auto">
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
            <div className="relative rounded-xl bg-white/[0.03] px-8 md:px-14 py-12">
              <div className="text-4xl mb-4">🎓</div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
                Students &amp; <span className="text-neon-violet">Internships</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We{"'"}re open to internships and project collaborations in robotics, embedded systems, AI, and IoT — and to students who want to become campus ambassadors or club coordinators for Tamizh Robotics Club at their college or school.
              </p>
              <div className="space-y-3 mb-8 text-slate-400 text-sm">
                <p>📩 Send us the following via email or WhatsApp:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Your <span className="text-white font-medium">resume</span></li>
                  <li>Portfolio, <span className="text-white font-medium">GitHub</span>, or <span className="text-white font-medium">LinkedIn</span> profile</li>
                  <li>A short note on what you want to work on or learn</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={mailHref}
                  className="flex-1 text-center px-6 py-3 border border-neon-violet text-neon-violet bg-neon-violet/10 hover:bg-neon-violet/20 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 border border-neon-green text-neon-green bg-neon-green/10 hover:bg-neon-green/20 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Talent Pool CTA ─── */}
      <section className="py-28 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Join Our <span className="text-neon-cyan">Talent Pool</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 text-lg">
            Even when we{"'"}re not actively hiring, we review applications from people who are excited about robotics, AI,
            and education. Send us your CV and portfolio — we{"'"}ll reach out when the right role opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href={mailHref}
              className="px-8 py-4 bg-neon-cyan text-black font-bold text-lg rounded-md hover:bg-white hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Submit Your Profile
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-neon-green text-white font-bold text-lg rounded-md bg-neon-green/10 hover:bg-neon-green/20 hover:shadow-neon-green transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 text-neon-green" /> WhatsApp About Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
