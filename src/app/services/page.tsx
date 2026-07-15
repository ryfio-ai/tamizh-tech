"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Brain, Cpu, Network, Factory, Zap, FlaskConical, GraduationCap, Briefcase, Settings } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { RoboticsIcon, AIIcon, DroneIcon, IoTIcon, EmbeddedIcon, AutomationIcon } from "@/components/ui/CustomIcons";

const services = [
  {
    id: "robotics",
    icon: RoboticsIcon,
    title: "Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    desc: "We design and build custom robotic systems for industrial, educational, and research applications.",
    features: ["Custom robot design & fabrication", "Autonomous navigation systems", "Competition bots", "Robotic arms & manipulators"],
    color: "blue",
  },
  {
    id: "ai",
    icon: AIIcon,
    title: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop",
    desc: "From machine learning models to computer vision — we build intelligent systems that see and think.",
    features: ["Computer vision & image processing", "Machine learning & deep learning", "Natural language processing", "Predictive analytics"],
    color: "purple",
  },
  {
    id: "drone",
    icon: DroneIcon,
    title: "Drone Technology",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    desc: "UAV design, control systems, and payload integration for agriculture, surveillance, and industrial use.",
    features: ["Custom UAV design & fabrication", "Autonomous flight control", "Agricultural & inspection drones", "Payload integration"],
    color: "sky",
  },
  {
    id: "iot",
    icon: IoTIcon,
    title: "IoT Solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    desc: "Connected ecosystems that bridge the physical and digital world through smart sensor networks.",
    features: ["Sensor network design", "Cloud connectivity & dashboards", "Real-time monitoring", "Smart environment solutions"],
    color: "teal",
  },
  {
    id: "embedded",
    icon: EmbeddedIcon,
    title: "Embedded Systems",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&h=400&fit=crop",
    desc: "Low-level firmware and hardware design for microcontrollers, FPGAs, and real-time systems.",
    features: ["Microcontroller programming", "PCB design & hardware", "Firmware & RTOS development", "Protocol integration (CAN, SPI, I2C)"],
    color: "orange",
  },
  {
    id: "automation",
    icon: AutomationIcon,
    title: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
    desc: "End-to-end factory automation solutions — from PLCs and SCADA to fully autonomous production lines.",
    features: ["PLC & SCADA programming", "Conveyor & material handling", "Vision-based quality control", "Process optimization"],
    color: "red",
  },
  {
    id: "stem",
    icon: FlaskConical,
    title: "STEM Labs",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    desc: "Turnkey STEM, Robotics, and AI laboratory setup for schools and colleges — hardware, curriculum, and training.",
    features: ["Lab design & equipment supply", "Curriculum & teaching guides", "Teacher training programs", "Ongoing support & maintenance"],
    color: "green",
  },
  {
    id: "research",
    icon: Settings,
    title: "Research & Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    desc: "Collaborative R&D for product innovation, patent development, and applied engineering research.",
    features: ["Product ideation & prototyping", "Technology feasibility studies", "Patent support", "Academic research collaboration"],
    color: "indigo",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Corporate Training",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    desc: "Customized technology training programs for engineering teams and corporate professionals.",
    features: ["Robotics & automation workshops", "AI & ML bootcamps", "Hands-on project-based learning", "Certification programs"],
    color: "yellow",
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Consulting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    desc: "Expert technology consulting for startups, enterprises, and research organizations.",
    features: ["Technology strategy", "System architecture design", "Vendor evaluation", "Project management support"],
    color: "pink",
  },
];

const colorBadge: Record<string, string> = {
  blue: "bg-accent/5 text-accent", purple: "bg-accent/5 text-accent",
  sky: "bg-accent/5 text-accent", teal: "bg-accent/5 text-accent",
  orange: "bg-accent/5 text-accent", red: "bg-accent/5 text-accent",
  green: "bg-accent/5 text-accent", indigo: "bg-accent/5 text-accent",
  yellow: "bg-accent/5 text-accent", pink: "bg-accent/5 text-accent",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Complete technology solutions"
        subtitle="10 specialized service areas covering every dimension of modern robotics and AI technology."
        breadcrumbActive="Services"
      />

      {/* Services Grid */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <div className="space-y-12">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <AnimatedSection key={svc.id} delay={i * 0.05}>
                  <div id={svc.id}>
                    <Card className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 overflow-hidden p-0 hover:border-accent/10 hover:shadow-[0_12px_30px_rgba(37,99,235,0.06)]`}>
                      <div className="relative lg:w-2/5 aspect-video lg:aspect-auto bg-subtle">
                        <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 p-8 lg:p-12">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colorBadge[svc.color]} mb-4`}>
                          <Icon className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wide">{svc.title}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary mb-3">{svc.title}</h2>
                        <p className="text-text-muted mb-6 leading-relaxed">{svc.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {svc.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <Button variant="primary" size="sm">
                            Get Started <ArrowRight className="w-4 h-4 ml-1.5" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3D Printing Service Showcase Section */}
      <section className="section bg-subtle py-24 border-t border-border/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Video */}
            <AnimatedSection className="lg:col-span-6 relative aspect-video bg-black rounded-3xl overflow-hidden border border-border shadow-lg">
              <video
                src="/3d printing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </AnimatedSection>

            {/* Right side: Copy & WhatsApp Button */}
            <AnimatedSection className="lg:col-span-6 flex flex-col justify-center text-left" direction="right" delay={0.1}>
              <span className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-4 block">
                Additive Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                Professional 3D Printing <br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Services</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                Get high-quality 3D printed parts for both <span className="text-accent font-semibold">personal (own)</span> and <span className="text-accent font-semibold">commercial purposes</span>. We deliver industrial-grade dimensional accuracy, durability, and a premium finish at an <span className="text-accent font-semibold">affordable price</span>.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "FDM & SLA Printing",
                  "Rapid Prototyping",
                  "PLA, ABS, PETG, TPU Materials",
                  "Custom Drone & Robot Parts",
                  "Industrial Design Fitment",
                  "Commercial Batch Production"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918148045030?text=Hi%20TamizhTech,%20I%20am%20interested%20in%20your%203D%20Printing%20Services.%20Can%20you%20share%20pricing%20details?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full justify-center bg-accent hover:bg-accent-hover text-white font-bold rounded-lg border-none px-8 py-3">
                    Order via WhatsApp
                  </Button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full justify-center border-border hover:bg-white hover:text-black font-bold rounded-lg px-8 py-3">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-contrast py-24 text-text-contrast relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4 text-white uppercase">
              Need a custom solution?
            </h2>
            <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed font-sans text-sm">
              Every project is unique. Let&apos;s discuss your requirements and build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full justify-center text-sm font-bold text-white bg-accent hover:bg-accent-hover px-8 py-3 rounded-lg border-none">
                  Contact Our Team <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/products" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-sm font-bold text-white border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg">
                  Explore Products
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
