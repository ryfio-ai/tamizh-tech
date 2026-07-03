"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Brain, Layers, Globe, Mail, Send, CheckCircle2, UserCircle2, Briefcase, FileText } from "lucide-react";

const openings = [
  { id: "rob", title: "Robotics Integration Engineer", type: "Full-Time", dept: "Engineering", loc: "Coimbatore" },
  { id: "cv", title: "Computer Vision / AI Developer", type: "Full-Time", dept: "Research & AI", loc: "Coimbatore / Hybrid" },
  { id: "stem", title: "STEM Instructor & Coordinator", type: "Full-Time", dept: "Education", loc: "Coimbatore" }
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", position: "rob", note: "", resume: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Careers
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-secondary leading-tight">
            Build the systems <br />
            of the future.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
            We are always looking for curious, logic-driven developers, designers, and educators to join our multidisciplinary team in Coimbatore.
          </p>
        </div>

        {/* Life at TamizhTech */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase leading-none">Life at TamizhTech</h3>
            <p className="text-text-secondary text-sm font-medium leading-relaxed">
              We collaborate in an open sandbox environment, prototyping direct mechanical rigs, adjusting firmware codes, and designing cloud dashboard models side-by-side. 
            </p>
            <p className="text-text-secondary text-sm font-medium leading-relaxed">
              Whether you are optimizing a PID actuator route or lecturing young minds at the Tamil Robotics Club, we value absolute logic, execution speed, and clear communication.
            </p>
          </div>
          
          <div className="p-8 border border-border bg-bg-secondary rounded-2xl relative overflow-hidden h-64">
            <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Coimbatore Lab</span>
              <p className="text-xl font-bold text-secondary uppercase tracking-tight">
                An open workspace dedicated to physical assembly and system design.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase mb-12">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-primary" />, title: "Mentorship", desc: "Work directly alongside engineers with deep hardware & firmware experience." },
              { icon: <Brain className="w-8 h-8 text-accent" />, title: "Growth", desc: "Continuous learning tracks in ROS2, machine learning, and PCB layout." },
              { icon: <Layers className="w-8 h-8 text-primary" />, title: "Tools", desc: "Access high-spec CNC machines, 3D printers, and digital analysis tools." },
              { icon: <Globe className="w-8 h-8 text-accent" />, title: "Impact", desc: "Help build STEM educational pathways for school and college students." }
            ].map((perk, idx) => (
              <div key={idx} className="p-6 border border-border bg-white rounded-2xl shadow-sm hover:border-primary transition-colors duration-300">
                <div className="mb-4">{perk.icon}</div>
                <h4 className="text-base font-bold text-secondary uppercase mb-2">{perk.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jobs & Application Grid */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Active Openings */}
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase">Active Openings</h3>
            <div className="space-y-4">
              {openings.map((job) => (
                <div key={job.id} className="p-6 border border-border bg-white rounded-xl shadow-sm hover:border-primary transition-colors duration-300 flex justify-between items-center group">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-secondary group-hover:text-primary transition-colors uppercase">{job.title}</h4>
                    <div className="flex gap-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                      <span>{job.dept}</span>
                      <span>•</span>
                      <span>{job.loc}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-bg-secondary px-2.5 py-1 border border-border rounded text-text-secondary">
                    {job.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="border border-border p-8 rounded-2xl bg-white shadow-lg">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-secondary uppercase tracking-tight">Application Received</h4>
                <p className="text-text-secondary text-xs leading-relaxed max-w-sm mx-auto font-medium">
                  Thank you for applying, <span className="text-primary font-bold">{form.name}</span>. Our coordinators will review your resume and reach out via email.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary py-2.5 text-xs font-semibold rounded-md">
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h4 className="text-xl font-extrabold text-secondary uppercase tracking-tight">Quick Application</h4>
                  <p className="text-xs text-text-secondary font-medium">Submit your details and resume link below.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                    <input 
                      type="text" required placeholder="John Doe"
                      className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Official Email</label>
                    <input 
                      type="email" required placeholder="john@domain.com"
                      className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Applying Position</label>
                    <select 
                      className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium cursor-pointer"
                      value={form.position} onChange={e => setForm({...form, position: e.target.value})}
                    >
                      {openings.map(op => (
                        <option key={op.id} value={op.id}>{op.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Resume/Portfolio Link</label>
                    <input 
                      type="url" required placeholder="https://drive.google.com/... or github.com/..."
                      className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
                      value={form.resume} onChange={e => setForm({...form, resume: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Brief Cover Note</label>
                    <textarea 
                      rows={3} required placeholder="Why do you want to join TamizhTech?"
                      className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary resize-none focus:outline-none focus:border-primary font-medium"
                      value={form.note} onChange={e => setForm({...form, note: e.target.value})}
                    />
                  </div>
                </div>

                <button type="submit" className="w-full btn-primary py-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </form>
            )}
          </div>

        </section>

      </div>
    </div>
  );
}
