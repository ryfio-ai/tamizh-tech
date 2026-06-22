"use client";

import React, { useState, FormEvent } from "react";
import { 
  Cpu, 
  Layers, 
  Globe, 
  Code, 
  Terminal, 
  GraduationCap, 
  CheckCircle2, 
  Zap, 
  Award, 
  Users, 
  ArrowRight, 
  BookOpen,
  MessageCircle,
  Clock,
  Compass,
  FileCheck
} from "lucide-react";

const domains = [
  { id: "robotics", name: "Robotics Internship", icon: Cpu, desc: "Hands-on experience in robot kinematics, sensor integration, autonomous logic, and motor controller interfacing." },
  { id: "electronics", name: "Basic Electronics Internship", icon: Zap, desc: "Master circuit design, soldering, component diagnosis, oscilloscope operation, and hardware prototyping fundamentals." },
  { id: "embedded", name: "Embedded Systems Internship", icon: Terminal, desc: "Firmware development using Embedded C, microcontroller programming (Arduino, ESP32, STM32), and sensor interfacing." },
  { id: "fullstack", name: "Full Stack Web Development Internship", icon: Layers, desc: "End-to-end web architecture using modern stacks (React, Next.js, Node.js, Express, and SQL/NoSQL databases)." },
  { id: "frontend", name: "Frontend Development Internship", icon: Code, desc: "Build responsive, premium user interfaces using React, Next.js, HTML5, CSS3, and modern UI/UX design concepts." },
  { id: "backend", name: "Backend Development Internship", icon: Globe, desc: "Architect APIs, optimize server logic, handle user authentication, database normalization, and secure cloud endpoints." },
  { id: "c-prog", name: "C Programming Internship", icon: Terminal, desc: "Strengthen computational logic, data structures, pointer mechanics, and memory allocation frameworks from the ground up." },
  { id: "cpp-prog", name: "C++ Programming Internship", icon: Terminal, desc: "Master Object-Oriented Programming (OOP), templates, Standard Template Library (STL), and hardware-level performance controls." },
  { id: "java-dev", name: "Java Development Internship", icon: BookOpen, desc: "Learn object-oriented backend application architecture, design patterns, enterprise database integrations, and multithreading." },
  { id: "python-dev", name: "Python Development Internship", icon: Code, desc: "Dive into scripting automation, data scraping, API building, machine learning fundamentals, and core programming paradigms." }
];

const benefits = [
  { title: "Online & Offline Options", desc: "Choose complete flexibility. Learn from anywhere online or join our physical classroom training modules.", icon: Globe },
  { title: "Hands-on Practical Training", desc: "No boring theory. Spend 100% of your time building real prototypes and hardware/software modules.", icon: Zap },
  { title: "Real-Time Industry Projects", desc: "Gain experience by deploying production-level projects that solve actual industrial problems.", icon: Compass },
  { title: "Expert Mentorship", desc: "Get direct 1-on-1 guidance from experienced robotics researchers and software architects.", icon: Users },
  { title: "Completion Certificate", desc: "Get a verified certificate from Tamizh Tech Robotics Company to showcase your capabilities to employers.", icon: Award },
  { title: "Resume & Portfolio Support", desc: "Learn how to document your internship projects on GitHub and design a high-impact resume.", icon: FileCheck }
];

export default function InternshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    college: "",
    branch: "",
    role: "Robotics Internship",
    category: "Online",
    experience: "Beginner",
    resume: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleDomainSelect = (domainName: string) => {
    setFormData(prev => ({ ...prev, role: domainName }));
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed. Please check fields.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again or apply via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111]">
      <div className="container mx-auto px-6">
        
        {/* Header Hero Section */}
        <div className="max-w-4xl mb-12 md:mb-24 border-l-4 border-[#FF6B00] pl-6 md:pl-10 py-4 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FFF2E6] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-xs font-black tracking-widest text-[#FF6B00] uppercase">Internship Program 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#111111] tracking-tighter leading-[0.95] uppercase mb-8">
            Learn. Build. <br /> Innovate.
          </h1>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl font-bold uppercase tracking-tight">
            Kickstart your career with Tamizh Tech Robotics Company's Industry-Focused Internship Programs. Designed for school students, college scholars, and job seekers looking for hands-on, project-based training.
          </p>
        </div>

        {/* Formats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 text-left">
          <div className="bg-white border border-[#E5E5E5] p-10 rounded-2xl flex flex-col justify-between hover:border-[#FF6B00] transition-colors">
            <div>
              <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest block mb-4">🚀 Track 01</span>
              <h3 className="text-3xl font-black text-[#111111] tracking-tighter uppercase mb-4">Online Internships</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                Learn from anywhere in the world with our interactive online module. Includes live mentorship sessions, digitized code sandboxes, and virtual team check-ins.
              </p>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">🌍 Available Pan-India</span>
          </div>
          <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-10 rounded-2xl flex flex-col justify-between hover:border-[#FF6B00] transition-colors">
            <div>
              <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest block mb-4">🏫 Track 02</span>
              <h3 className="text-3xl font-black text-[#111111] tracking-tighter uppercase mb-4">Offline Internships</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                Join our physical classroom and electronics laboratory hub for dedicated hardware access, components kit, oscilloscope diagnostics, and team project building.
              </p>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">📍 Coimbatore R&D Center</span>
          </div>
        </div>

        {/* Domains Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.5em] mb-4">Internship Tracks</h2>
            <h3 className="text-4xl font-black text-[#111111] tracking-tighter uppercase">Choose Your Specialized Domain</h3>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-tight mt-2">Click on any domain card to select and apply below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div 
                  key={domain.id} 
                  onClick={() => handleDomainSelect(domain.name)}
                  className="bg-white border border-[#E5E5E5] p-8 flex flex-col h-full justify-between rounded-2xl group cursor-pointer hover:border-[#FF6B00] hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#FAFAFA] rounded-xl flex items-center justify-center text-[#111111] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 mb-6 border border-[#E5E5E5]">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xl font-black text-[#111111] uppercase tracking-tighter mb-3 group-hover:text-[#FF6B00] transition-colors">{domain.name}</h4>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed opacity-70 mb-6">{domain.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-[#FF6B00] uppercase tracking-widest pt-4 border-t border-[#F0F0F0] mt-auto">
                    Apply for this track <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-32 bg-[#FAFAFA] border border-[#E5E5E5] py-20 px-8 lg:px-16 rounded-2xl text-left">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.5em] mb-4">Our Commitment</h2>
            <h3 className="text-4xl font-black text-[#111111] tracking-tighter uppercase">Why Choose Tamizh Tech Robotics?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="p-3 bg-[#FFF2E6] border border-[#FF6B00]/25 text-[#FF6B00] rounded-xl shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#111111] uppercase tracking-tighter mb-2">{benefit.title}</h4>
                    <p className="text-xs font-medium text-gray-500 leading-relaxed opacity-70 uppercase tracking-tight">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Registration Form */}
        <div id="registration-form" className="max-w-4xl mx-auto border-2 border-[#FF6B00] p-8 md:p-16 bg-[#FAFAFA] rounded-2xl shadow-2xl text-left">
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#FFF2E6] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#FF6B00]/20">
                <CheckCircle2 className="w-10 h-10 text-[#FF6B00] animate-pulse" />
              </div>
              <h3 className="text-3xl font-black text-[#111111] tracking-tighter uppercase mb-4">Registration Received!</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-tight mb-8 max-w-lg mx-auto leading-relaxed">
                Thank you for applying to the <span className="text-[#FF6B00]">{formData.role}</span> program, <span className="text-[#111111]">{formData.name}</span>! We've received your credentials and our onboarding team will contact you at <span className="text-[#111111]">{formData.email}</span> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: "", email: "", phone: "", linkedin: "", college: "", branch: "",
                    role: "Robotics Internship", category: "Online", experience: "Beginner", resume: ""
                  });
                }}
                className="btn-primary py-4 px-8 inline-flex items-center gap-3"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.4em] block mb-2">Registration Form</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#111111] tracking-tighter uppercase leading-none">Register For Internship</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mt-2">Fill in your details below to archive your application in our industry database.</p>
              </div>

              {error && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-bold uppercase tracking-wide rounded-sm flex items-center gap-3">
                  <Zap className="w-4 h-4 shrink-0" /> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="e.g. Tamizharasan K"
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="e.g. 8148045030"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Email & LinkedIn */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="linkedin" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">LinkedIn Profile Link</label>
                    <input 
                      type="url" 
                      id="linkedin" 
                      name="linkedin" 
                      value={formData.linkedin} 
                      onChange={handleChange}
                      placeholder="e.g. https://linkedin.com/in/username"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* College & Department */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="college" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">College / Institution *</label>
                    <input 
                      type="text" 
                      id="college" 
                      name="college" 
                      required
                      value={formData.college} 
                      onChange={handleChange}
                      placeholder="e.g. PSG College of Technology"
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="branch" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Branch / Degree *</label>
                    <input 
                      type="text" 
                      id="branch" 
                      name="branch" 
                      required
                      value={formData.branch} 
                      onChange={handleChange}
                      placeholder="e.g. B.E. Robotics & Automation"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Domain & Mode & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="role" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Internship Domain *</label>
                    <select 
                      id="role" 
                      name="role" 
                      value={formData.role} 
                      onChange={handleChange}
                      className="form-input"
                    >
                      {domains.map(d => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Format Preference *</label>
                    <select 
                      id="category" 
                      name="category" 
                      value={formData.category} 
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="Online">Online / Remote</option>
                      <option value="Offline">Offline / Classroom</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="experience" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Experience level *</label>
                    <select 
                      id="experience" 
                      name="experience" 
                      value={formData.experience} 
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="Beginner">Beginner (No past experience)</option>
                      <option value="Intermediate">Intermediate (Done basic projects)</option>
                      <option value="Advanced">Advanced (Done industrial prototypes)</option>
                    </select>
                  </div>
                </div>

                {/* Resume Link */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="resume" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Resume Link (Google Drive / GitHub / LinkedIn)</label>
                  <input 
                    type="url" 
                    id="resume" 
                    name="resume" 
                    value={formData.resume} 
                    onChange={handleChange}
                    placeholder="e.g. https://drive.google.com/.../your-resume.pdf"
                    className="form-input"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide leading-relaxed">
                    Once submitted, details are instantly routed to our review board.
                  </p>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary py-5 px-10 flex items-center justify-center gap-3 w-full sm:w-auto"
                  >
                    {isSubmitting ? "PROCESSING..." : "SUBMIT APPLICATION"} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>

        {/* WhatsApp Callout */}
        <div className="mt-12 text-center max-w-lg mx-auto">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Or Apply directly via WhatsApp</p>
          <a 
            href={`https://wa.me/918148045030?text=Hello%20Tamizh%20Tech%20Robotics!%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(formData.role)}%20internship%20program.`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#25D366] hover:text-[#25D366]/90 transition-all font-black text-sm uppercase tracking-widest pb-1 border-b-2 border-[#25D366]/30 hover:border-[#25D366]"
          >
            <MessageCircle className="w-5 h-5" /> CHAT ON WHATSAPP
          </a>
        </div>

      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background-color: #FFFFFF;
          border: 1px solid #E5E5E5;
          padding: 1rem 1.25rem;
          color: #111111;
          font-weight: 700;
          font-size: 0.825rem;
          outline: none;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        .form-input:focus {
          border-color: #FF6B00;
          box-shadow: 0 0 0 1px #FF6B00;
        }
        .form-input::placeholder {
          color: #999999;
          font-weight: 600;
          opacity: 0.5;
        }
        select.form-input {
          appearance: none;
        }
      `}</style>
    </div>
  );
}
