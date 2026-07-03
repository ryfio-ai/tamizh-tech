"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Cpu, Target, Zap, Microscope, Globe, ShieldCheck, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const timelineData = [
  { year: "2021", title: "Genesis in Coimbatore", desc: "Started as an advanced prototyping laboratory resolving mechanical and hardware firmware integration." },
  { year: "2022", title: "STEM & Club Launch", desc: "Established our academic outreach modules and initialized the Tamil Robotics Club (TRC)." },
  { year: "2023", title: "Enterprise Scaling", desc: "Crossed 50+ enterprise factory deployments, integrating PLC pipelines and analytics systems." },
  { year: "2024", title: "AI & Drone Integration", desc: "Pioneered neural defect inspection models and long-range autonomous drone platforms." },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mb-24 space-y-6"
        >
          <motion.span variants={fadeInUp} className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Firm Profile
          </motion.span>
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-secondary leading-tight"
          >
            Engineering the physical <br />
            intelligence of tomorrow.
          </motion.h1>
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium"
          >
            TamizhTech Robotics Company designs, simulates, and deploys custom multi-axis robotics, smart telemetry, and custom AI systems from our engineering hub in Coimbatore, India.
          </motion.p>
        </motion.div>

        {/* Who We Are Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase leading-none">
              A Culture of Rigorous Innovation.
            </h3>
            <p className="text-text-secondary leading-relaxed font-medium text-sm">
              We started TamizhTech to merge advanced computing layers with tangible mechanical units. Rather than selling rigid, off-the-shelf automation packages, we design open, adaptable environments tailored to on-site needs.
            </p>
            <p className="text-text-secondary leading-relaxed font-medium text-sm">
              Today, our active deployments manage factory inventory data, run defect detection vision nodes, and introduce young students to foundational robotics logic.
            </p>
          </div>
          
          <div className="p-8 border border-border bg-bg-secondary rounded-2xl flex flex-col justify-between h-64 relative overflow-hidden group">
            <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <Globe className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold tracking-tight text-secondary uppercase mb-2">Pan-India Support</h4>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">
                Our support architecture reaches operations across 15+ Indian states, ensuring deployment calibrations and remote hardware diagnostics remain active.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-8 border border-border bg-white rounded-2xl space-y-6 shadow-sm hover:border-primary transition-colors duration-300">
            <Target className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight text-secondary uppercase">Our Mission</h3>
            <p className="text-text-secondary text-sm font-medium leading-relaxed">
              To build reliable, scalable robotic environments that make hardware intelligence accessible to both large-scale enterprises and academic labs.
            </p>
          </div>
          
          <div className="p-8 border border-border bg-white rounded-2xl space-y-6 shadow-sm hover:border-accent transition-colors duration-300">
            <Zap className="w-10 h-10 text-accent" />
            <h3 className="text-2xl font-bold tracking-tight text-secondary uppercase">Our Vision</h3>
            <p className="text-text-secondary text-sm font-medium leading-relaxed">
              To establish a leading engineering collective that defines standard interfaces for hardware-software communication, fostering domestic R&D growth.
            </p>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="mb-32">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Evolution</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tighter uppercase mt-2">
              Our Journey Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {timelineData.map((item, idx) => (
              <div key={idx} className="p-6 border border-border bg-white rounded-xl relative shadow-sm hover:border-primary transition-colors duration-300">
                <span className="text-3xl font-extrabold text-primary/30 tracking-tight block mb-4">
                  {item.year}
                </span>
                <h4 className="text-base font-bold text-secondary uppercase mb-2">{item.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Hub */}
        <section className="p-8 lg:p-12 border border-border rounded-2xl bg-bg-secondary relative overflow-hidden mb-32">
          <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="p-3 bg-white border border-border w-fit rounded-lg inline-flex text-primary">
                <Microscope className="w-8 h-8" />
              </span>
              <h3 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase">
                The Coimbatore R&D Hub
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-medium">
                Our multi-disciplinary engineering facility houses structural drone testing platforms, active camera vision rigs, and logic simulators. This unified sandbox ensures each integration is verified before deployment.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Hardware Firmware Sandbox",
                "Neural Vision Testing Rigs",
                "STEM Educational Lab Prototyping",
                "Advanced CNC & 3D Fabrication Setup"
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-text-secondary uppercase">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-secondary text-white p-12 lg:p-16 rounded-2xl relative overflow-hidden text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-4 text-white">
            Want to learn more about our hardware integrations?
          </h3>
          <p className="text-white/70 text-sm font-medium leading-relaxed max-w-xl mx-auto mb-8">
            Get in touch with our technical directors to arrange an on-site facility audit at Coimbatore.
          </p>
          <Link href="/contact" className="btn-primary py-3 px-8 text-xs font-semibold rounded-lg inline-flex gap-2">
            Contact Technical Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

