"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

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
    <div>
      {/* Hero */}
      <PageHero
        title="Advanced Hardware & AI Deployments"
        subtitle="Discover our catalog of on-site industrial setups, laboratory research models, and creative student prototype builds."
        breadcrumbActive="Projects"
      />

      <div className="section bg-white py-24">
        <div className="container px-6">
          {/* Filter Navigation */}
          <div className="flex justify-center flex-wrap gap-2 mb-12 border-b border-border/65 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-subtle text-text-secondary hover:text-accent border border-border hover:border-accent"
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
                >
                  <Card className="p-0 overflow-hidden h-full flex flex-col justify-between hover:border-accent/20 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]">
                    <div>
                      {/* Visual Banner */}
                      <div className="relative h-48 w-full overflow-hidden bg-subtle">
                        <img
                          src={proj.img}
                          alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold text-accent tracking-wide uppercase shadow-sm">
                          {proj.category[0]}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight uppercase">
                          {proj.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                          {proj.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-border/60">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.tech.map((t, ti) => (
                          <span key={ti} className="text-[9px] font-bold uppercase tracking-wider text-text-secondary bg-subtle px-2 py-0.5 rounded border border-border">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Small Gallery Images */}
                      {proj.gallery && proj.gallery.length > 0 && (
                        <div className="flex gap-2">
                          {proj.gallery.map((g, gi) => (
                            <div key={gi} className="w-10 h-10 rounded border border-border overflow-hidden bg-subtle">
                              <img src={g} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Custom Project Callout */}
          <div className="bg-subtle border border-border p-12 lg:p-16 rounded-3xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight mb-4">
              Have a custom automation outline?
            </h3>
            <p className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Collaborate with our R&D hub in Coimbatore. We fabricate custom mechanical setups and design dedicated embedded controllers under NDA.
            </p>
            <Link href="/contact">
              <Button variant="primary">
                Schedule Integration Audit <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
