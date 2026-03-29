"use client";

import type { Metadata } from "next";
import { MessageCircle, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Inquiry Center</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Connect with <span className="text-primary-main">TamizhTech.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-3xl mx-auto font-regular leading-relaxed">
            Our expert engineering team is ready to assist with your robotics, AI, or automation projects. 
            Reach out via our secure channel below.
          </p>
        </div>
      </section>

      {/* Contact Distribution */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Details Column */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-8 tracking-tight">Official Channels</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-xl bg-primary-light text-primary-main border border-border-light shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-text-muted text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">Direct Line</p>
                    <a href="tel:+918148045030" className="text-2xl font-bold text-text-primary hover:text-primary-main transition-colors">+91 81480 45030</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-xl bg-primary-light text-primary-main border border-border-light shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-text-muted text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">WhatsApp Business</p>
                    <a href="https://wa.me/918148045030" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-text-primary hover:text-primary-main transition-colors">Chat securely with our team</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-xl bg-primary-light text-primary-main border border-border-light shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-text-muted text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">Enterprise Email</p>
                    <a href="mailto:office@tamizhtech.in" className="text-2xl font-bold text-text-primary hover:text-primary-main transition-colors">office@tamizhtech.in</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-xl bg-primary-light text-primary-main border border-border-light shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-text-muted text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">Global Headquarters</p>
                    <p className="text-xl font-bold text-text-primary leading-tight">Coimbatore, Tamil Nadu,<br />Republic of India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-elevated border border-border-light p-10 rounded-2xl shadow-sm border-l-4 border-l-primary-main">
              <h3 className="text-xl font-bold text-text-primary mb-4 italic leading-relaxed">&quot;Bringing professional MNC-standard robotics and AI to every student and enterprise across India.&quot;</h3>
              <p className="text-primary-main text-xs font-bold uppercase tracking-widest mt-6">TamizhTech Corporate Mission</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-bg-primary border border-border-light p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Send className="w-32 h-32 text-primary-main" />
            </div>
            
            {submitted ? (
              <div className="py-20 text-center relative z-10">
                <div className="w-24 h-24 bg-primary-light text-primary-main rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-4 tracking-tight">Inquiry Logged.</h2>
                <p className="text-text-tertiary text-lg mb-10 leading-relaxed">
                  Thank you, <span className="text-primary-main font-bold">{form.name}</span>. Our engineering coordination team has received your request and will contact you via <span className="text-text-primary font-bold">{form.email}</span> within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-bg-elevated text-text-primary font-bold rounded-lg border border-border-light hover:bg-border-light transition-all text-sm"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                <div className="mb-4">
                  <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-2">Direct Inquiry</h2>
                  <p className="text-text-tertiary">Please complete the brief form below for technical consultation.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-bg-page/50 border border-border-light rounded-xl px-5 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:bg-bg-primary focus:ring-4 focus:ring-primary-main/5 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="email@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-bg-page/50 border border-border-light rounded-xl px-5 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:bg-bg-primary focus:ring-4 focus:ring-primary-main/5 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Inquiry Domain</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-bg-page/50 border border-border-light rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary-main focus:bg-bg-primary transition-all cursor-pointer appearance-none"
                  >
                    <option value="Training">Robotics Training / Global Courses</option>
                    <option value="Club">Robotics Club Elite Membership</option>
                    <option value="Automation">Industrial Automation Solutions</option>
                    <option value="Prototyping">Technical Prototyping / 3D Services</option>
                    <option value="Partnership">Corporate Partnership / R&D</option>
                    <option value="Other">Other Specialist Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Brief Description</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="How can our engineering team assist your project?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bg-page/50 border border-border-light rounded-xl px-5 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:bg-bg-primary focus:ring-4 focus:ring-primary-main/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-primary-main text-text-on-primary font-extrabold rounded-xl hover:bg-primary-hover shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg mt-4 group"
                >
                  Submit Inquiry <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
