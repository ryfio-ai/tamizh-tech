import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Laptop, Cpu, Globe, Rocket, ShieldCheck, Database, Camera, LayoutGrid, Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | TamizhTech Robotics Company",
  description: "Explore TamizhTech's robotics hardware — industrial robots, drones, IoT systems, educational kits, AI vision platforms, and more.",
};

const productCategories = [
  { title: "Industrial Robots", description: "MNC-standard automation platforms for manufacturing, material handling, and high-precision assembly.", badge: "Enterprise", icon: <Cpu className="w-6 h-6" /> },
  { title: "Drones", description: "High-spec UAVs for thermal surveillance, industrial inspections, and specialized pilot training.", badge: "Advanced", icon: <Rocket className="w-6 h-6" /> },
  { title: "Corporate Robots", description: "Display and engagement robots for MNC lobbies, smart concierge, and event automation.", badge: "Corporate", icon: <Globe className="w-6 h-6" /> },
  { title: "IoT Systems", description: "Smart industrial gateways and custom sensor ecosystems for large-scale connected automation.", badge: "IoT", icon: <Database className="w-6 h-6" /> },
  { title: "Prototyping Solutions", description: "Enterprise-grade 3D printing, FDM/Resin printing, and rapid R&D part manufacturing.", badge: "R&D", icon: <Laptop className="w-6 h-6" /> },
  { title: "Educational Platforms", description: "Interactive STEM learning stations and AI/Robotics curriculum for world-class institutions.", badge: "Education", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "AI Vision Platforms", description: "Neural processing camera modules and edge AI kits for intelligent navigation and QC.", badge: "AI Ready", icon: <Camera className="w-6 h-6" /> },
  { title: "Competition Arenas", description: "Global-standard arena tracks for Robo Soccer, Sumo, and Maze Solver events.", badge: "Events", icon: <LayoutGrid className="w-6 h-6" /> },
  { title: "Custom R&D", description: "Specialized engineering research for unique robotic challenges across diverse industries.", badge: "Specialized", icon: <Microscope className="w-6 h-6" /> },
];

const kits = [
  { name: "Line Follower Kit", desc: "Enterprise-level autonomous kits with high-precision IR arrays and optimized firmware.", badge: "Education" },
  { name: "Maze Solver Pro", desc: "Advanced navigation robot kit with ultrasonic pathfinding and AI intersection logic.", badge: "Elite" },
  { name: "RC Soccer Kit", desc: "Durable RC-controlled bot kit designed for professional club-level performance.", badge: "Club Gear" },
  { name: "RC Race Kit", desc: "High-speed competitive racing chassis with low-latency controller modules.", badge: "Speed" },
  { name: "RC Sumo Kit", desc: "High-torque push-fighting chassis for competitive sumo ring engineering.", badge: "Battle" },
  { name: "Career Board V2", desc: "MNC-standard multi-purpose electronics trainer platform for professional systems.", badge: "Learning" },
];

export default function ProductsPage() {
  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Catalogue 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Robotics <span className="text-primary-main">Evolution.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our comprehensive suite of industrial robots and educational development kits 
            engineered to global MNC standards and technical precision.
          </p>
          <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%27d%20like%20to%20learn%20more%20about%20your%20robotics%20products." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary-main text-text-on-primary font-bold text-lg rounded-lg hover:bg-primary-hover shadow-lg transition-all transform hover:-translate-y-1">
            <MessageCircle className="w-6 h-6" /> Request Product Specification
          </a>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4">Enterprise <span className="text-primary-main">Categories</span></h2>
            <p className="text-text-tertiary text-lg">Scalable industrial and educational hardware platforms designed for maximum impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((p) => (
            <div key={p.title} className="mnc-card flex flex-col p-10 group">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-primary-light text-primary-main rounded-xl flex items-center justify-center group-hover:bg-primary-main group-hover:text-text-on-primary transition-all duration-300">
                  {p.icon}
                </div>
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-bg-elevated border border-border-light text-text-muted uppercase tracking-wider">{p.badge}</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-main transition-colors">{p.title}</h3>
              <p className="text-text-tertiary text-sm leading-relaxed mb-10 flex-grow">{p.description}</p>
              <a href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(p.title)}.`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-main text-sm font-bold group/link">
                Technical Inquiry <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Development Kits Slider/Grid */}
      <section className="py-24 bg-bg-elevated border-y border-border-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4">MNC-Standard <span className="text-primary-main">Kits</span></h2>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto">Precision-engineered hardware development kits for students and professional prototype testing.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kits.map((kit) => (
              <div key={kit.name} className="bg-bg-primary p-10 rounded-xl border border-border-light shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-text-primary">{kit.name}</h3>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-primary-light text-primary-main uppercase tracking-widest">{kit.badge}</span>
                </div>
                <p className="text-text-tertiary text-sm leading-relaxed mb-10">{kit.desc}</p>
                <div className="flex gap-4">
                  <a href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20the%20${encodeURIComponent(kit.name)}.`} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-bold text-primary-main hover:underline">
                    Specifications
                  </a>
                  <a href={`https://wa.me/918148045030?text=I'd%20like%20to%20order%20the%20${encodeURIComponent(kit.name)}.`} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-bold text-primary-main hover:underline">
                    Order Kit
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
