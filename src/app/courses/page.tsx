"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const tabs = ["Robotics", "Embedded Systems", "IoT"];

const courses: Record<string, { title: string; level: string; mode: string; duration: string; languages: string[]; }[]> = {
  Robotics: [
    { title: "Robotics Fundamentals", level: "Beginner", mode: "Offline/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"] },
    { title: "Advanced Line Follower Design", level: "Intermediate", mode: "Offline", duration: "2 Weeks", languages: ["Tamil", "English"] },
    { title: "Combat Robot Engineering", level: "Advanced", mode: "Offline", duration: "6 Weeks", languages: ["English"] },
    { title: "Drone Building Workshop", level: "Intermediate", mode: "Offline", duration: "3 Weeks", languages: ["Tamil", "English"] },
  ],
  "Embedded Systems": [
    { title: "Embedded C for Microcontrollers", level: "Beginner", mode: "Online/Offline", duration: "6 Weeks", languages: ["Tamil", "English", "Hindi"] },
    { title: "Arduino Mastery", level: "Beginner", mode: "Online", duration: "3 Weeks", languages: ["Tamil", "English"] },
    { title: "RTOS & Bare Metal Programming", level: "Advanced", mode: "Offline", duration: "8 Weeks", languages: ["English"] },
    { title: "PCB Design & Electronics", level: "Intermediate", mode: "Offline/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"] },
  ],
  IoT: [
    { title: "IoT for Smart Labs", level: "Beginner", mode: "Online/Hybrid", duration: "4 Weeks", languages: ["Tamil", "English"] },
    { title: "Sensor Integration & Edge Computing", level: "Intermediate", mode: "Offline", duration: "5 Weeks", languages: ["English"] },
    { title: "Industrial IoT Applications", level: "Advanced", mode: "Offline/Hybrid", duration: "8 Weeks", languages: ["English", "Hindi"] },
    { title: "Smart Home & Automation DIY", level: "Beginner", mode: "Online", duration: "2 Weeks", languages: ["Tamil", "English"] },
  ],
};

const levelColors: Record<string, string> = {
  Beginner: "text-neon-green border-neon-green/30 bg-neon-green/5",
  Intermediate: "text-neon-orange border-neon-orange/30 bg-neon-orange/5",
  Advanced: "text-neon-magenta border-neon-magenta/30 bg-neon-magenta/5",
};

const langColors = ["bg-neon-orange/10 text-neon-orange", "bg-neon-magenta/10 text-neon-magenta", "bg-neon-green/10 text-neon-green"];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("Robotics");
  return (
    <div className="w-full">
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/30 bg-neon-magenta/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-magenta uppercase">Courses & Learning Tracks</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Learn. Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-orange">Launch.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Courses for students, college enthusiasts, and working professionals — in Tamil, English & Hindi.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all border ${
                activeTab === tab ? "bg-neon-orange text-black border-neon-orange shadow-neon-orange" : "border-white/20 text-slate-300 hover:border-neon-orange hover:text-neon-orange bg-white/5"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses[activeTab].map((course) => (
            <div key={course.title} className="relative rounded-xl border border-white/10 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-heading font-bold text-white leading-snug">{course.title}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${levelColors[course.level]}`}>{course.level}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>⏱ {course.duration}</span>
                  <span>📡 {course.mode}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.languages.map((lang, i) => (
                    <span key={lang} className={`text-xs font-bold px-3 py-1 rounded-full ${langColors[i % langColors.length]}`}>{lang}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                  <a href={`https://wa.me/918148045030?text=Hello!%20I%20want%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-neon-orange text-neon-orange text-sm font-bold rounded-md bg-neon-orange/5 hover:bg-neon-orange/10 transition-all">
                    Get Syllabus
                  </a>
                  <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-neon-magenta text-neon-magenta text-sm font-bold rounded-md bg-neon-magenta/5 hover:bg-neon-magenta/10 transition-all">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
