"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Brain, Cpu, Network, Factory, Zap, FlaskConical, GraduationCap, Briefcase, Settings } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { RoboticsIcon, AIIcon, DroneIcon, IoTIcon, EmbeddedIcon, AutomationIcon } from "@/components/ui/CustomIcons";

import { services } from "@/data/services";

const colorBadge: Record<string, string> = {
  blue: "bg-accent/5 text-accent", purple: "bg-accent/5 text-accent",
  sky: "bg-accent/5 text-accent", teal: "bg-accent/5 text-accent",
  orange: "bg-accent/5 text-accent", red: "bg-accent/5 text-accent",
  green: "bg-accent/5 text-accent", indigo: "bg-accent/5 text-accent",
  yellow: "bg-accent/5 text-accent", pink: "bg-accent/5 text-accent",
};

function getServiceIcon(id: string) {
  switch (id) {
    case "robotics": return RoboticsIcon;
    case "automation": return AutomationIcon;
    case "embedded": return EmbeddedIcon;
    case "iot": return IoTIcon;
    case "ai": return AIIcon;
    case "drone": return DroneIcon;
    case "stem": return FlaskConical;
    case "research": return Settings;
    case "training": return GraduationCap;
    case "consulting": return Briefcase;
    case "3d-printing": return Settings;
    case "laser-cutting": return Settings;
    case "pcb-services": return Cpu;
    default: return Bot;
  }
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Complete technology solutions"
        subtitle="Specialized service areas covering modern robotics, industrial automation, rapid prototyping, and embedded intelligence."
        breadcrumbActive="Services"
      />

      {/* Services Grid */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <div className="space-y-12">
            {services.map((svc, i) => {
              const Icon = getServiceIcon(svc.id);
              return (
                <AnimatedSection key={svc.id} delay={i * 0.05}>
                  <div id={svc.id} className="scroll-mt-24">
                    <Card className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 overflow-hidden p-0 hover:border-accent/10 hover:shadow-[0_12px_30px_rgba(37,99,235,0.06)]`}>
                      <div className="relative lg:w-2/5 aspect-video lg:aspect-auto bg-subtle">
                        <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 p-8 lg:p-12">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colorBadge[svc.color] || "bg-accent/5 text-accent"} mb-4`}>
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
                        <div className="flex items-center gap-3">
                          <Link href={svc.href}>
                            <Button variant="primary" size="sm" className="!bg-[#FF6B00] hover:!bg-[#e05e00] text-white font-bold rounded-lg text-xs">
                              Explore Service <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Button>
                          </Link>
                          <Link href="/contact">
                            <Button variant="outline" size="sm" className="font-semibold text-xs border-border">
                              Contact Team
                            </Button>
                          </Link>
                        </div>
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
      <section id="3d-printing-showcase" className="section bg-subtle py-24 border-t border-border/30 scroll-mt-24">
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
                High Quality Additive Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                High Quality 3D Printing Services <br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Affordable & Best Price</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
                We create <span className="text-accent font-semibold">prototypes, custom parts, robotic components, and miniatures</span>. Printed with high precision for smooth and accurate results, we guarantee fast delivery and reliable service for all your engineering, academic, and commercial projects.
              </p>
              
              <div className="mb-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-text-primary font-medium flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#FF6A00] text-white font-bold tracking-wide uppercase text-[10px]">
                  Available Materials
                </span>
                <span className="text-slate-800 font-semibold">
                  PLA &bull; PETG &bull; TPU (Flexible)
                </span>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Functional Prototypes & Miniatures",
                  "Custom Parts & Robotic Components",
                  "Available in PLA, PETG & TPU Materials",
                  "Printed with High Precision for Smooth Results",
                  "Affordable & Best Price Guarantee",
                  "Fast Delivery & Reliable Engineering Service"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918148045030?text=Hi%20TamizhTech,%20I%20am%20interested%20in%20your%20High%20Quality%203D%20Printing%20Services%20(Prototypes%2FCustom%20Parts%2FRobotic%20Components%2FMiniatures%20in%20PLA%2C%20PETG%20or%20TPU).%20Please%20share%20pricing%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full justify-center !bg-[#FF6A00] hover:!bg-[#E05300] text-white font-bold rounded-lg border-none px-8 py-3.5 shadow-md shadow-orange-500/20">
                    Order 3D Prints via WhatsApp
                  </Button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full justify-center border-border hover:bg-white hover:text-black font-bold rounded-lg px-8 py-3.5">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Laser Cutting Showcase Section - Stainless Steel (Not Wood) */}
      <section id="laser-cutting-showcase" className="section bg-white py-24 border-t border-border/30 scroll-mt-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Copy & Actions */}
            <AnimatedSection className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold tracking-wide uppercase mb-4 w-fit">
                <span>Precision Fiber Laser Cutting</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight font-heading">
                Stainless Steel Laser Cutting <br />
                <span className="text-accent underline decoration-2 decoration-accent/40 underline-offset-4">Engineered for Metal (Not Wood)</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
                We specialize strictly in <span className="text-text-primary font-bold">Stainless Steel (SS 304 & SS 316)</span> and precision sheet metal laser cutting — <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">not wood or MDF</span>. Engineered for heavy-duty combat bot chassis, custom brackets, motor mounts, industrial panels, and tight-tolerance mechanical assemblies.
              </p>

              <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-text-primary space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                  <span>Specialized Stainless Steel Capabilities</span>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Burr-free clean edge quality with tight mechanical tolerances. Direct processing from DXF, DWG, and STEP CAD files with nesting optimization to minimize metal scrap.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Stainless Steel SS 304 & SS 316 Sheet Cutting",
                  "Dedicated Metal Laser Cutting (Not Wood)",
                  "Custom Robot Chassis Panels & Brackets",
                  "Clean, Burr-Free Edges & High Accuracy",
                  "DXF / DWG / 2D CAD Nesting Optimization",
                  "Affordable Factory Direct Coimbatore Pricing"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918148045030?text=Hi%20TamizhTech,%20I%20am%20looking%20for%20Stainless%20Steel%20Laser%20Cutting%20services%20(Not%20wood).%20Can%20you%20share%20pricing%20and%20turnaround%20time%20for%20SS%20parts?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full justify-center !bg-[#FF6A00] hover:!bg-[#E05300] text-white font-bold rounded-lg border-none px-8 py-3.5 shadow-md shadow-orange-500/20">
                    Order SS Laser Cutting via WhatsApp
                  </Button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full justify-center border-border hover:bg-white hover:text-black font-bold rounded-lg px-8 py-3.5">
                    Request Metal Quote
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Right side: Image Showcase */}
            <AnimatedSection className="lg:col-span-6 relative aspect-[4/3] bg-slate-950 rounded-3xl overflow-hidden border border-border shadow-xl order-1 lg:order-2" direction="left">
              <Image
                src="/gallery/17.jpeg"
                alt="Stainless Steel Laser Cutting Services Coimbatore"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="inline-block px-3 py-1 rounded-md bg-[#FF6A00] text-white text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                  Metal Laser Fabrication
                </div>
                <h3 className="text-xl font-bold text-white mb-1">High-Precision Stainless Steel Sheet Cutting</h3>
                <p className="text-xs text-white/80">
                  Custom robot chassis, high-strength brackets, and precision industrial sheet metal parts fabricated in Coimbatore.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA - Clean Orange + White Brand Theme */}
      <section className="bg-white py-24 text-text-primary border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4 text-text-primary uppercase">
              Need a custom solution?
            </h2>
            <p className="text-text-secondary mb-10 max-w-md mx-auto leading-relaxed font-sans text-sm">
              Every project is unique. Let&apos;s discuss your requirements and build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full justify-center text-sm font-bold text-white !bg-[#FF6A00] hover:!bg-[#E05300] px-8 py-3.5 rounded-lg border-none shadow-lg shadow-orange-500/25 transition-all">
                  Contact Our Team <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/products" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-sm font-bold text-text-primary border-border hover:bg-subtle px-8 py-3 rounded-lg">
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
