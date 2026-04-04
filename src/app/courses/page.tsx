"use client";
import { useState } from "react";
import { ArrowRight, Clock, Wifi, Languages, BookText, GraduationCap, ChevronRight, CheckCircle2, MoveRight } from "lucide-react";
import Link from "next/link";

const tabs = ["Robotics", "Embedded Systems", "IoT"];

const courses: Record<string, { title: string; level: string; mode: string; duration: string; languages: string[]; description: string; }[]> = {
  Robotics: [
    { title: "Robotics Fundamentals", level: "Beginner", mode: "Offline/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"], description: "Core concepts of robotics, sensors, and basic autonomous logic for industrial applications." },
    { title: "Advanced Line Follower", level: "Intermediate", mode: "Offline", duration: "2 Weeks", languages: ["Tamil", "English"], description: "Precision PID control and high-speed navigation for professional competition-grade bots." },
    { title: "Combat Robot Engineering", level: "Advanced", mode: "Offline", duration: "6 Weeks", languages: ["English"], description: "Armor design, weapon systems, and high-torque drive train engineering for heavy-duty battle bots." },
    { title: "Drone Building Workshop", level: "Intermediate", mode: "Offline", duration: "3 Weeks", languages: ["Tamil", "English"], description: "Flight controllers, ESC calibration, and FPV system integration for industrial inspection UAVs." },
  ],
  "Embedded Systems": [
    { title: "Embedded C Mastery", level: "Beginner", mode: "Online/Offline", duration: "6 Weeks", languages: ["Tamil", "English", "Hindi"], description: "Programming microcontrollers from scratch using professional-grade Embedded C for industrial hardware." },
    { title: "Arduino & ESP32", level: "Beginner", mode: "Online", duration: "3 Weeks", languages: ["Tamil", "English"], description: "Rapid prototyping and wireless communication modules for modern industrial hardware connectivity." },
    { title: "RTOS Programming", level: "Advanced", mode: "Offline", duration: "8 Weeks", languages: ["English"], description: "Real-time operating systems and bare-metal firmware optimization for critical industrial nodes." },
    { title: "PCB Design & Fabrication", level: "Intermediate", mode: "Offline/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"], description: "Schematic design and multi-layer layout for high-precision industrial hardware prototypes." },
  ],
  IoT: [
    { title: "IoT Architecture", level: "Beginner", mode: "Online/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"], description: "Cloud integration, data protocols, and smart sensor connectivity for large-scale industrial networks." },
    { title: "Edge Computing", level: "Intermediate", mode: "Offline", duration: "5 Weeks", languages: ["English"], description: "Processing data locally for low-latency industrial automation and real-time decision making." },
    { title: "Industrial IoT (IIoT)", level: "Advanced", mode: "Offline/Hybrid", duration: "8 Weeks", languages: ["English", "Hindi"], description: "Factory-floor connectivity, enterprise-level automation ecosystems, and data visualization." },
    { title: "Smart Factory Automation", level: "Beginner", mode: "Online", duration: "2 Weeks", languages: ["Tamil", "English"], description: "Custom DIY automation systems and mobile dashboarding for small-scale industrial units." },
  ],
};

const levelStyles: Record<string, string> = {
  Beginner: "text-primary-main border-primary-main/20 bg-primary-main/5",
  Intermediate: "text-secondary-main border-secondary-main/20 bg-secondary-main/5",
  Advanced: "text-red-700 border-red-700/20 bg-red-700/5",
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("Robotics");
  
  return (
    <div className="bg-bg-page pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <h1 className="text-xs font-black text-primary-main uppercase tracking-[0.5em] mb-6">Learning Academy</h1>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary tracking-tighter leading-tight mb-8">
            Specialized Technical <br className="hidden md:block" /> Certification Tracks.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
            Professional certifications and hands-on tracks delivered by industry experts to prepare the next generation of robotics and automation engineers.
          </p>
        </div>

        {/* Course Navigation */}
        <div className="flex border-b border-border-light mb-16 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-5 text-sm font-black uppercase tracking-widest transition-all relative ${
                activeTab === tab 
                  ? "text-primary-main" 
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-main"></div>}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {courses[activeTab].map((course) => (
            <div key={course.title} className="bg-white border border-border-light p-10 flex flex-col industrial-card group">
              <div className="flex items-start justify-between mb-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-black text-text-primary tracking-tighter transition-colors uppercase">{course.title}</h3>
                  <span className={`text-[10px] font-black px-3 py-1 border w-fit uppercase tracking-widest ${levelStyles[course.level]}`}>{course.level}</span>
                </div>
                <div className="w-12 h-12 bg-bg-page border border-border-light rounded-sm flex items-center justify-center text-text-muted group-hover:text-primary-main transition-all">
                    <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                </div>
              </div>
              
              <p className="text-text-secondary text-sm font-medium leading-relaxed mb-10 flex-grow">
                {course.description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-border-light">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Duration</span>
                  <p className="text-xs font-bold text-text-primary uppercase tracking-tight">{course.duration}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Mode</span>
                  <p className="text-xs font-bold text-text-primary uppercase tracking-tight">{course.mode}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Languages</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {course.languages.map(l => (
                      <span key={l} className="text-[9px] font-black px-2 py-0.5 bg-bg-page border border-border-light text-text-secondary rounded uppercase tracking-tighter">{l}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/918148045030?text=Hello!%20I%20want%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 btn-secondary flex items-center justify-center gap-2 py-4">
                  SYLLABUS <MoveRight className="w-4 h-4" />
                </a>
                <a href="https://wa.me/918148045030?text=I'd%20like%20to%20apply%20for%20the%20${encodeURIComponent(course.title)}%20course." target="_blank" rel="noopener noreferrer"
                  className="flex-1 btn-primary flex items-center justify-center gap-2 py-4">
                  ENROLL NOW <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Recognition Footer */}
        <div className="bg-white border border-border-light p-12 lg:p-20 rounded-sm text-center">
           <h2 className="text-xs font-black text-primary-main uppercase tracking-[0.5em] mb-6">Industrial Recognition</h2>
           <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase mb-6">Verifiable Professional Certifications.</h3>
           <p className="text-text-secondary text-lg max-w-3xl mx-auto font-medium leading-relaxed mb-12">
             Every technical track includes specialized training, localized language support, and a verifiable Tamizh Tech Pvt Ltd certification recognized by our 50+ industrial partners across India.
           </p>
           <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-text-muted uppercase tracking-[0.2em] border-t border-border-light pt-12">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> ISO 9001:2015 CERTIFIED</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> MNC RECOGNIZED</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> PLACEMENT SUPPORT</span>
           </div>
        </div>

      </div>
    </div>
  );
}
