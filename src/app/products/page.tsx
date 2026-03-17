import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const metadata: Metadata = {
  title: "Products | TamizhTech Robotics Company",
  description: "Explore TamizhTech's robotics hardware — industrial robots, drones, IoT systems, educational kits, AI vision platforms, and more.",
};

const productCategories = [
  { title: "Industrial Robots", description: "Custom automation and robotics platforms for manufacturing, assembly, and material handling.", badge: "Enterprise", icon: "🦾" },
  { title: "Drones", description: "Custom drones for training, competitions, surveillance, and specialized industry applications.", badge: "Multi-Use", icon: "🚁" },
  { title: "Corporate / Service Robots", description: "Display robots, engagement robots, and smart assistants for corporate events and lobbies.", badge: "Corporate", icon: "🤖" },
  { title: "IoT & Embedded Systems", description: "Smart sensor modules, microcontroller boards, and IoT gateways for connected automation projects.", badge: "IoT", icon: "📡" },
  { title: "3D Printing Solutions", description: "FDM and resin printers, custom prototyping services, and 3D-printed robot parts on demand.", badge: "Prototyping", icon: "🖨️" },
  { title: "Educational Platforms", description: "Interactive learning stations, trainer boards, and STEM lab setups for schools and colleges.", badge: "Education", icon: "🎓" },
  { title: "AI & Vision Systems", description: "Camera modules, edge AI kits, and computer vision platforms for intelligent robot navigation.", badge: "AI", icon: "👁️" },
  { title: "Competition Arenas", description: "Ready-to-deploy arenas and tracks for Robo Soccer, Sumo, Line Follower, and Race events.", badge: "Events", icon: "🏟️" },
  { title: "Custom R&D Projects", description: "End-to-end research and development for specialised robotic solutions tailored to your needs.", badge: "R&D", icon: "🔬" },
];

const kits = [
  { name: "Line Follower Kit", desc: "Complete kit for building and programming autonomous line-following robots.", badge: "Education Kit" },
  { name: "Maze Solver Kit", desc: "Autonomous maze navigation robot kit with sensor array and intelligent pathfinding algorithms.", badge: "Education Kit" },
  { name: "RC Soccer Kit", desc: "RC-controlled soccer robot kit for club competitions and training.", badge: "Education Kit" },
  { name: "RC Race Kit", desc: "High-speed RC race car kit for competitive robot racing tracks.", badge: "Education Kit" },
  { name: "RC Sumo Kit", desc: "Push-based combat robot kit for sumo ring competitions and strategy-driven battles.", badge: "Education Kit" },
  { name: "Mini RC Soccer Kit", desc: "Compact soccer kit for smaller arenas and younger students.", badge: "Starter" },
  { name: "Career Board", desc: "Multi-purpose electronics trainer board for student projects.", badge: "Learning" },
  { name: "2-in-1 RC Soccer Kit", desc: "Versatile kit that doubles as both a soccer bot and general RC platform.", badge: "Education Kit" },
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase">Products & Platforms</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Robotics <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-orange">Hardware</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From industrial automation platforms to student-friendly kits — built for education, enterprise, and everything in between.
          </p>
          <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%27d%20like%20to%20learn%20more%20about%20your%20robotics%20products." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon-green text-black font-bold rounded-md hover:bg-white hover:shadow-neon-green transition-all">
            <MessageCircle className="w-5 h-5" /> Request Product Catalogue
          </a>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-heading font-black text-white mb-10 text-center">Product <span className="text-neon-orange">Categories</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((p) => (
            <div key={p.title} className="relative rounded-xl border border-white/10 p-2 group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                <div className="text-5xl mb-2">{p.icon}</div>
                <span className="text-xs font-bold px-3 py-1 rounded-full border border-neon-orange/30 bg-neon-orange/5 text-neon-orange w-fit">{p.badge}</span>
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-neon-orange transition-colors">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.description}</p>
                <a href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(p.title)}.`} target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-neon-orange text-sm font-bold hover:underline">
                  Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kits */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-black text-white mb-3 text-center">Robotics <span className="text-neon-magenta">Development Kits</span></h2>
          <p className="text-center text-slate-400 mb-12">Ready-to-assemble kits for schools, clubs, and competitions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kits.map((kit) => (
              <div key={kit.name} className="relative rounded-xl border border-white/10 p-2 group">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col gap-3 overflow-hidden rounded-lg bg-white/[0.03] p-7 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-neon-orange transition-colors">{kit.name}</h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full border border-neon-orange/30 bg-neon-orange/5 text-neon-orange whitespace-nowrap shrink-0">{kit.badge}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{kit.desc}</p>
                  <a href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20the%20${encodeURIComponent(kit.name)}.`} target="_blank" rel="noopener noreferrer"
                    className="mt-auto text-sm font-bold text-neon-green hover:underline flex items-center gap-1">
                    Order / Enquire <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
