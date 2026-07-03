"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Cpu, Zap, Globe, Microscope, ShieldCheck, MoveRight } from "lucide-react";

const categories = ["All", "Student Projects", "Industrial Projects", "Research", "AI", "Robotics", "Drone", "IoT"];

interface Project {
  title: string;
  category: string[];
  img: string;
  desc: string;
  tech: string[];
  gallery: string[];
}

const projectsData: Project[] = [
  {
    title: "Autonomous Warehouse Cart",
    category: ["Industrial Projects", "Robotics", "IoT"],
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
    desc: "A self-navigating industrial utility cart integrating LIDAR mapping and real-time obstacle avoidance layers.",
    tech: ["ROS2", "LIDAR", "C++", "ESP32"],
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&q=80"
    ]
  },
  {
    title: "Micro-Defect Edge Vision Scanner",
    category: ["Industrial Projects", "AI"],
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    desc: "Deployable quality control rig analyzing metallic surface anomalies under sub-millisecond timelines.",
    tech: ["PyTorch", "OpenCV", "CUDA", "Python"],
    gallery: [
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=150&q=80"
    ]
  },
  {
    title: "Agri-Mapping Autonomous UAV",
    category: ["Research", "Drone", "IoT"],
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
    desc: "Autonomous drone mapping agricultural zones, pushing NDVI telemetry straight into a central web API.",
    tech: ["PX4 Autopilot", "Raspberry Pi", "QGIS", "Python"],
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=150&q=80"
    ]
  },
  {
    title: "ESP32 Thermal Telemetry Node",
    category: ["Student Projects", "IoT"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    desc: "Wireless diagnostic nodes Retrofitted to monitor heat footprints on factory CNC spindles.",
    tech: ["ESP32", "FreeRTOS", "MQTT", "Grafana"],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&q=80"
    ]
  },
  {
    title: "Bio-Inspired Quadruped Crawler",
    category: ["Student Projects", "Robotics"],
    img: "https://images.unsplash.com/photo-1560785496-3c9d2787718e?auto=format&fit=crop&w=500&q=80",
    desc: "A custom 3D-printed quadruped platform executing complex walking patterns using inverse kinematics.",
    tech: ["Arduino Uno", "C++", "Inverse Kinematics", "3D Printing"],
    gallery: [
      "https://images.unsplash.com/photo-1560785496-3c9d2787718e?auto=format&fit=crop&w=150&q=80"
    ]
  },
  {
    title: "Multi-Agent UAV Swarms Simulation",
    category: ["Research", "AI", "Drone"],
    img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=500&q=80",
    desc: "Simulation environment validating collective swarm flight behaviors and neural obstacle avoidance protocols.",
    tech: ["Webots Simulation", "Python", "Reinforcement Learning"],
    gallery: [
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=150&q=80"
    ]
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category.includes(activeCategory));

  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            R&D Archives
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-secondary leading-tight">
            Advanced Hardware & <br /> AI Deployments.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
            Discover our catalog of on-site industrial setups, laboratory research models, and creative student prototype builds.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex border-b border-border mb-12 overflow-x-auto no-scrollbar gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "text-text-muted hover:text-secondary hover:bg-bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={proj.title}
                className="border border-border bg-white rounded-2xl overflow-hidden flex flex-col group hover:border-primary transition-all duration-300 shadow-sm"
              >
                {/* Visual Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-bg-secondary">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold tracking-tight text-secondary uppercase leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-text-secondary text-xs font-medium leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="space-y-4 pt-4 border-t border-border/80">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t, ti) => (
                        <span key={ti} className="text-[9px] font-bold uppercase tracking-wider text-text-secondary bg-bg-secondary px-2 py-0.5 rounded border border-border">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Small Gallery Images */}
                    {proj.gallery && proj.gallery.length > 0 && (
                      <div className="flex gap-2">
                        {proj.gallery.map((g, gi) => (
                          <div key={gi} className="w-10 h-10 rounded border border-border overflow-hidden bg-bg-secondary">
                            <img src={g} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Project Callout */}
        <div className="bg-bg-secondary border border-border p-12 lg:p-16 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-secondary tracking-tighter uppercase mb-4">
            Have a custom automation outline?
          </h3>
          <p className="text-text-secondary text-sm max-w-xl mx-auto font-medium leading-relaxed mb-8">
            Collaborate with our R&D hub in Coimbatore. We fabricate custom mechanical setups and design dedicated embedded controllers under NDA.
          </p>
          <a href="/contact" className="btn-primary py-3 px-8 text-xs font-semibold rounded-lg inline-flex gap-2">
            Schedule Integration Audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
