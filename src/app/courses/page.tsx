"use client";
import { useState } from "react";
import { ArrowRight, Clock, Wifi, Languages, BookText, GraduationCap, ChevronRight, CheckCircle2, MoveRight } from "lucide-react";
import Link from "next/link";

const tabs = ["School Students", "College Students", "Professionals", "Faculty Development", "Summer Camp"];

interface Course {
  title: string;
  img: string;
  duration: string;
  mode: string;
  desc: string;
}

const courses: Record<string, Course[]> = {
  "School Students": [
    {
      title: "LEGO & Arduino Robotics Foundation",
      img: "https://images.unsplash.com/photo-1560785496-3c9d2787718e?auto=format&fit=crop&w=400&q=80",
      duration: "4 Weeks",
      mode: "Offline",
      desc: "Learn fundamental mechanical builds, logic loops, and simple sensor coding using Arduino microcontrollers."
    },
    {
      title: "Drone Dynamics & Flight Basics",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80",
      duration: "3 Weeks",
      mode: "Offline",
      desc: "An introduction to flight dynamics, safety parameters, and simple piloting of mini quadcopters."
    }
  ],
  "College Students": [
    {
      title: "Advanced Autonomous Systems (ROS2)",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      duration: "8 Weeks",
      mode: "Offline/Hybrid",
      desc: "Master robotic middleware (ROS2), path planning algorithms, and mapping simulations."
    },
    {
      title: "Embedded Firmware Design (STM32)",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      duration: "6 Weeks",
      mode: "Offline",
      desc: "Write bare-metal registers, structure RTOS tasks, and debug multi-layer microcontroller firmware."
    }
  ],
  "Professionals": [
    {
      title: "Computer Vision Edge Integration",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
      duration: "10 Weeks",
      mode: "Online/Offline",
      desc: "Train defect-detection models and package them for real-time edge hardware deployments."
    },
    {
      title: "PLC & Industrial SCADA Automation",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      duration: "8 Weeks",
      mode: "Offline",
      desc: "Cabinet layout design, logic development on Siemens TIA, and SCADA monitoring networks."
    }
  ],
  "Faculty Development": [
    {
      title: "FDP: IoT Ecosystems in Academics",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
      duration: "1 Week",
      mode: "Online",
      desc: "Enable academic leaders to setup wireless mesh networks and direct cloud telemetry pipelines."
    },
    {
      title: "FDP: Modern Robotic Kinematics",
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
      duration: "1 Week",
      mode: "Hybrid",
      desc: "Theoretical kinematics validation and structural pathway simulation frameworks for college syllabus design."
    }
  ],
  "Summer Camp": [
    {
      title: "Junior Maker Summer Camp",
      img: "https://images.unsplash.com/photo-1560785496-3c9d2787718e?auto=format&fit=crop&w=400&q=80",
      duration: "2 Weeks",
      mode: "Offline",
      desc: "A creative camp building DIY electronics, fun sensor gadgets, and racing miniature line-followers."
    },
    {
      title: "Aeromodelling & Rocketry Basics",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80",
      duration: "2 Weeks",
      mode: "Offline",
      desc: "Design gliders, assemble balsa wood wings, and launch small-scale model rockets safely."
    }
  ]
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("School Students");
  
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Learning Academy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-secondary leading-tight">
            Specialized Technical <br className="hidden md:block" /> Certification Tracks.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
            Rigorous hands-on programs designed to prepare students and professionals for modern robotics development and smart industrial setups.
          </p>
        </div>

        {/* Course Navigation */}
        <div className="flex border-b border-border mb-12 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all relative shrink-0 ${
                activeTab === tab 
                  ? "text-primary" 
                  : "text-text-muted hover:text-secondary"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-in fade-in"></div>}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {courses[activeTab].map((course, idx) => (
            <div key={idx} className="border border-border bg-white rounded-2xl overflow-hidden flex flex-col group hover:border-primary transition-all duration-300">
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-bg-secondary">
                <img 
                  src={course.img} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Card Details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-secondary uppercase">{course.title}</h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">{course.desc}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/80">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Duration</span>
                    <span className="text-xs font-semibold text-secondary">{course.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Mode</span>
                    <span className="text-xs font-semibold text-secondary">{course.mode}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/918148045030?text=Hello!%20I%20want%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-xs flex items-center justify-center gap-2 py-3"
                  >
                    Syllabus <MoveRight className="w-4 h-4" />
                  </a>
                  <a 
                    href={`https://wa.me/918148045030?text=I'd%20like%20to%20apply%20for%20the%20${encodeURIComponent(course.title)}%20course.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-xs flex items-center justify-center gap-2 py-3"
                  >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academy Certification Banner */}
        <div className="bg-bg-secondary border border-border p-12 lg:p-16 rounded-2xl text-center">
           <h3 className="text-2xl md:text-3xl font-extrabold text-secondary tracking-tighter uppercase mb-4">
             Industry Recognized Credentials
           </h3>
           <p className="text-text-secondary text-sm max-w-2xl mx-auto font-medium leading-relaxed mb-8">
             Every track includes verified credentials from TamizhTech Robotics, recognized across our 50+ enterprise and integration partners.
           </p>
           <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold text-text-muted uppercase tracking-wider border-t border-border pt-8">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ISO 9001:2015 CERTIFIED</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> LAB ACCREDITED</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> PLACEMENT COORDINATION</span>
           </div>
        </div>

      </div>
    </div>
  );
}
