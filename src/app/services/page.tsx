"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Zap, Microscope, Globe, GraduationCap, ShieldCheck, HelpCircle, Layers } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const services = [
  {
    title: "Robotics Development",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
    desc: "We engineer custom robotic arm integrations, automated delta sorting grids, and specialized mobile platforms.",
    features: ["Custom kinematic modeling", "Multi-axis controller coding", "High-torque actuator layouts"],
    benefits: ["Elevates factory throughput", "Reduces repetitive stress hazards", "Maintains sub-millimeter precision"],
    icon: <Bot className="w-5 h-5 text-primary" />
  },
  {
    title: "Artificial Intelligence",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    desc: "Deploy neural vision models directly onto shop-floor edge nodes for sorting, counting, and defect identification.",
    features: ["Deep learning vision networks", "Edge computing optimizations", "Real-time logging pipelines"],
    benefits: ["99.98% quality verification", "Reduces QC latency below 10ms", "Auto-logs structural statistics"],
    icon: <Cpu className="w-5 h-5 text-accent" />
  },
  {
    title: "Drone Technology",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
    desc: "Autonomous aerial platforms designed for utility surveying, crop telemetry mapping, and structural inspection.",
    features: ["Autonomous waypoint flight scripts", "Multispectral sensor payloads", "Companion computing interfaces"],
    benefits: ["Maps remote structures safely", "Reduces surveying costs", "Enables rapid structural updates"],
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "IoT & Embedded Systems",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    desc: "Retrofitted sensor nodes mapping real-time temperature, acoustics, and power parameters across legacy equipment.",
    features: ["ESP32 & ARM micro-nodes", "Low-power mesh data routing", "Secure MQTT cloud pipelines"],
    benefits: ["Monitors remote machinery health", "Prevents unexpected breakdowns", "Stores telemetry records"],
    icon: <Globe className="w-5 h-5 text-accent" />
  },
  {
    title: "Industrial Automation",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    desc: "Full-line logic programming, control cabinet layouts, and hardware integration matching global safety guidelines.",
    features: ["PLC & HMI programming (Siemens, Delta)", "Safety interlock layouts", "Linear actuator synchronization"],
    benefits: ["Stabilizes daily line cycles", "Secures floor operator safety", "Implements robust recovery loops"],
    icon: <ShieldCheck className="w-5 h-5 text-primary" />
  },
  {
    title: "Automation Solutions",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=500&q=80",
    desc: "Bespoke mechanical components and specialized grippers fabricated to automate unique operational workflows.",
    features: ["Pneumatic actuator systems", "Custom structural extrusion frame", "Active solenoid control grids"],
    benefits: ["Tailored to custom product shapes", "Maximizes workspace efficiency", "Integrates with current conveyors"],
    icon: <Layers className="w-5 h-5 text-accent" />
  },
  {
    title: "STEM Labs Setup",
    img: "https://images.unsplash.com/photo-1560785496-3c9d2787718e?auto=format&fit=crop&w=500&q=80",
    desc: "Turnkey equipment layouts, certified hardware kits, and syllabus curation for modern academic institutions.",
    features: ["Certified educational training kits", "Comprehensive lecture guides", "Instructor training workshops"],
    benefits: ["Fosters practical R&D focus", "Aligns with industry needs", "Prepares students for work roles"],
    icon: <GraduationCap className="w-5 h-5 text-primary" />
  },
  {
    title: "Research Projects",
    img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=500&q=80",
    desc: "Custom R&D partnerships, advanced hardware simulations, and mechanical prototypes developed under NDA.",
    features: ["Finite Element Analysis", "Kinematic path validation", "High-fidelity mock assemblies"],
    benefits: ["Validates product viability early", "Verifies algorithms dynamically", "Reduces physical mold cycles"],
    icon: <Microscope className="w-5 h-5 text-accent" />
  },
  {
    title: "Corporate Training",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80",
    desc: "Specialized training tracks covering ROS2, embedded microcontroller architecture, and computer vision models.",
    features: ["Intense structural labs", "Real-world project challenges", "Direct engineer review sessions"],
    benefits: ["Upskills technical employees fast", "Improves modern framework use", "Minimizes deployment mistakes"],
    icon: <Layers className="w-5 h-5 text-primary" />
  },
  {
    title: "Consulting Services",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
    desc: "On-site audits, logic blueprint design, and budget assessments for greenfield factory automation designs.",
    features: ["On-site logic audit checks", "OEE bottlenecks assessment", "Vendor quote reviews"],
    benefits: ["Secures design viability early", "Optimizes capital equipment budgets", "Mitigates deployment risks"],
    icon: <HelpCircle className="w-5 h-5 text-accent" />
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mb-24 space-y-6"
        >
          <motion.span variants={fadeInUp} className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Capabilities
          </motion.span>
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-secondary leading-tight"
          >
            Capabilities designed <br />
            for physical logic.
          </motion.h1>
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium"
          >
            From custom robotics kinematics to smart drone mapping and deep computer vision nodes, we design systems that integrate seamlessly into complex workflows.
          </motion.p>
        </motion.div>

        {/* All Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((s, idx) => (
            <div 
              key={idx} 
              className="border border-border bg-white rounded-2xl overflow-hidden flex flex-col group hover:border-primary transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-bg-secondary">
                <img 
                  src={s.img} 
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md border border-border">
                  {s.icon}
                </div>
              </div>

              {/* Content details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-secondary uppercase leading-none">{s.title}</h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">{s.desc}</p>
                  
                  {/* Two column lists */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/60">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Features</span>
                      <ul className="space-y-1">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="text-xs font-semibold text-text-secondary flex items-start gap-1">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Benefits</span>
                      <ul className="space-y-1">
                        {s.benefits.map((b, bi) => (
                          <li key={bi} className="text-xs font-semibold text-text-secondary flex items-start gap-1">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/contact?interest=${encodeURIComponent(s.title)}`}
                  className="text-xs font-bold text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit pt-4"
                >
                  Request Technical Specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Callout Banner */}
        <div className="bg-bg-secondary border border-border p-12 lg:p-16 rounded-2xl flex flex-col lg:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase leading-none">
              Need custom hardware blueprints?
            </h3>
            <p className="text-text-secondary font-medium leading-relaxed text-sm">
              We design specialized end-effectors, companion computer layouts, and mechanical brackets custom to your physical dimensions.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link href="/contact" className="btn-primary py-3 px-8 text-xs font-semibold rounded-lg flex items-center gap-2">
              Request Custom Blueprint <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
