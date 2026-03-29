"use client";
import { useState } from "react";
import { ArrowRight, Clock, Wifi, Languages, BookText, GraduationCap, ChevronRight } from "lucide-react";

const tabs = ["Robotics", "Embedded Systems", "IoT"];

const courses: Record<string, { title: string; level: string; mode: string; duration: string; languages: string[]; description: string; }[]> = {
  Robotics: [
    { title: "Robotics Fundamentals", level: "Beginner", mode: "Offline/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"], description: "Core concepts of robotics, sensors, and basic autonomous logic." },
    { title: "Advanced Line Follower", level: "Intermediate", mode: "Offline", duration: "2 Weeks", languages: ["Tamil", "English"], description: "Precision PID control and high-speed navigation for competition bots." },
    { title: "Combat Robot Engineering", level: "Advanced", mode: "Offline", duration: "6 Weeks", languages: ["English"], description: "Armor design, weapon systems, and high-torque drive train engineering." },
    { title: "Drone Building Workshop", level: "Intermediate", mode: "Offline", duration: "3 Weeks", languages: ["Tamil", "English"], description: "Flight controllers, ESC calibration, and FPV system integration." },
  ],
  "Embedded Systems": [
    { title: "Embedded C Mastery", level: "Beginner", mode: "Online/Offline", duration: "6 Weeks", languages: ["Tamil", "English", "Hindi"], description: "Programming microcontrollers from scratch using professional Embedded C." },
    { title: "Arduino & ESP32", level: "Beginner", mode: "Online", duration: "3 Weeks", languages: ["Tamil", "English"], description: "Rapid prototyping and wireless communication for modern hardware." },
    { title: "RTOS Programming", level: "Advanced", mode: "Offline", duration: "8 Weeks", languages: ["English"], description: "Real-time operating systems and bare-metal firmware optimization." },
    { title: "PCB Design & Fabrication", level: "Intermediate", mode: "Offline/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"], description: "Schematic design and multi-layer layout for industrial hardware." },
  ],
  IoT: [
    { title: "IoT Architecture", level: "Beginner", mode: "Online/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"], description: "Cloud integration, data protocols, and smart sensor connectivity." },
    { title: "Edge Computing", level: "Intermediate", mode: "Offline", duration: "5 Weeks", languages: ["English"], description: "Processing data locally for low-latency industrial automation." },
    { title: "Industrial IoT (IIoT)", level: "Advanced", mode: "Offline/Hybrid", duration: "8 Weeks", languages: ["English", "Hindi"], description: "Factory-floor connectivity and enterprise-level automation ecosystems." },
    { title: "Smart Home Automation", level: "Beginner", mode: "Online", duration: "2 Weeks", languages: ["Tamil", "English"], description: "Custom DIY home automation systems and mobile dashboarding." },
  ],
};

const levelStyles: Record<string, string> = {
  Beginner: "text-primary-main bg-primary-light border-primary-light",
  Intermediate: "text-[#F97316] bg-[#FFEDD5] border-[#FFEDD5]",
  Advanced: "text-[#DC2626] bg-[#FEE2E2] border-[#FEE2E2]",
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("Robotics");
  
  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Learning Academy</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Learn. Build. <span className="text-primary-main">Launch.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto font-regular leading-relaxed">
            Professional certifications and hands-on tracks delivered by industry experts 
            to prepare you for the global robotics and AI workforce.
          </p>
        </div>
      </section>

      {/* Course Navigation & Grid */}
      <section className="container mx-auto px-4 py-24">
        {/* Modern Tabs */}
        <div className="flex items-center justify-center gap-4 mb-20 flex-wrap">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all border-2 ${
                activeTab === tab 
                  ? "bg-primary-main text-text-on-primary border-primary-main shadow-lg" 
                  : "bg-bg-primary border-border-light text-text-tertiary hover:border-primary-main hover:text-primary-main"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses[activeTab].map((course) => (
            <div key={course.title} className="mnc-card flex flex-col p-10 group relative transition-all duration-500">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-extrabold text-text-primary leading-tight group-hover:text-primary-main transition-colors">{course.title}</h3>
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border w-fit uppercase tracking-widest ${levelStyles[course.level]}`}>{course.level}</span>
                </div>
                <div className="p-3 bg-bg-elevated rounded-xl border border-border-light text-text-muted group-hover:text-primary-main transition-all">
                    <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              
              <p className="text-text-tertiary text-lg mb-10 font-regular leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Duration</span>
                  </div>
                  <p className="text-sm font-bold text-text-primary">{course.duration}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Wifi className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Mode</span>
                  </div>
                  <p className="text-sm font-bold text-text-primary">{course.mode}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Languages className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {course.languages.map(l => (
                      <span key={l} className="text-[9px] font-extrabold px-1.5 py-0.5 bg-bg-elevated border border-border-light text-text-muted rounded uppercase">{l}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto flex gap-4 pt-10 border-t border-border-light">
                <a href={`https://wa.me/918148045030?text=Hello!%20I%20want%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-bg-elevated text-text-primary font-bold rounded-xl border border-border-light hover:bg-border-light transition-all text-sm group/btn">
                  <BookText className="w-4 h-4" /> Syllabus <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/918148045030?text=I'd%20like%20to%20apply%20for%20the%20${encodeURIComponent(course.title)}%20course." target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-main text-text-on-primary font-bold rounded-xl shadow-md hover:bg-primary-hover transition-all text-sm whitespace-nowrap">
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placement & Certification Footer */}
      <section className="py-24 bg-bg-elevated border-y border-border-light text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary mb-8 tracking-tight">Professional <span className="text-primary-main">Certification.</span></h2>
           <p className="text-text-tertiary text-xl mb-12">Every track includes localized training, localized language support, and a verifiable TamizhTech certification recognized by 50+ industrial partners.</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-40">
              <span className="text-xl font-black text-text-muted">ISO CERTIFIED</span>
              <span className="text-xl font-black text-text-muted">MNC RECOGNIZED</span>
              <span className="text-xl font-black text-text-muted">PLACEMENT SUPPORT</span>
           </div>
        </div>
      </section>
    </div>
  );
}
