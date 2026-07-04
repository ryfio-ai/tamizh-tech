"use client";

import React, { useState } from "react";
import { Check, Mail, Phone, MapPin, Sparkles, BookOpen, Users, Cpu, Award } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function SchoolsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    labInterest: "STEM Lab Setup"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What ages are Tamizh Tech School Labs designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our labs are modularly structured for K-12 students: Grades 1-5 (basic tinkering), Grades 6-8 (visual programming and basic automation), and Grades 9-12 (advanced embedded systems, Arduino C, and AI modeling)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide training for school teachers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every lab setup includes comprehensive, certified teacher training workshops (both on-site and virtual) to empower your teachers to run classes independently."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title="School Robotics, STEM & AI Labs"
        subtitle="Empower the next generation of innovators. Complete K-12 school laboratory setups, mapped curriculum, hardware kits, and certified teacher training."
        breadcrumbActive="Schools"
      />

      {/* Lab Types Grid */}
      <section className="section py-16 bg-white">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">Integrated Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">Our School Laboratory Configurations</h2>
            <p className="text-text-secondary text-sm mt-3">We supply customized, turnkey laboratory setups for schools looking to integrate STEM education into their standard school day curriculum.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border text-left hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">1. STEM Tinkering Labs</h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">Focuses on building fine motor skills, design thinking, and simple mechanical linkages. Best suited for primary and middle school grades.</p>
              <ul className="space-y-2">
                {["Solderless breadboard setups", "Cardboard tinkering assemblies", "Mechanical gear modules"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border border-border text-left hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">2. Robotics & Coding Labs</h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">Hands-on microcontrollers, sensors, and actuator assemblies. Enables kids to build autonomous vehicles, line followers, and competition platforms.</p>
              <ul className="space-y-2">
                {["Arduino & ESP32 developer kits", "Sensor-shield configurations", "Autonomous vehicle chassis"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border border-border text-left hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">3. AI & IoT Learning Labs</h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">Brings machine learning, smart telemetry, and home automation to life. Students learn to interface cloud dashboards and basic AI modeling nodes.</p>
              <ul className="space-y-2">
                {["Wi-Fi smart node controllers", "Cloud IoT telemetry dashboards", "Voice and image AI nodes"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="section py-16 bg-subtle">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">Age-Appropriate Syllabus</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">K-12 Robotics Mapped Modules</h2>
            <p className="text-text-secondary text-sm mt-3">Every laboratory is mapped with physical textbook materials and online support slides, categorized into three distinct learning bands.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-border p-8 rounded-2xl text-left">
              <div className="text-xs font-extrabold uppercase text-accent tracking-wider mb-2">Grades 1–5</div>
              <h3 className="text-lg font-bold uppercase mb-4 text-text-primary">Foundational Tinkering</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Introduction to structures, gear wheels, basic circuits, magnets, and mechanical design thinking. Promotes manual agility.</p>
              <div className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">Key Projects:</div>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Toy Motor Fan assembly</li>
                <li>• Magnetic Scraper Crawler</li>
                <li>• Balloon-Powered Chassis</li>
              </ul>
            </div>

            <div className="bg-white border border-border p-8 rounded-2xl text-left">
              <div className="text-xs font-extrabold uppercase text-accent tracking-wider mb-2">Grades 6–8</div>
              <h3 className="text-lg font-bold uppercase mb-4 text-text-primary">Logic & Programming</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Transition to visual blocks coding (Scratch), sensor input loops, basic logic branching, and introductory RC vehicle controls.</p>
              <div className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">Key Projects:</div>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Obstacle-Avoiding Rover</li>
                <li>• Smart Alarm Sound System</li>
                <li>• Basic Bluetooth Race Bot</li>
              </ul>
            </div>

            <div className="bg-white border border-border p-8 rounded-2xl text-left">
              <div className="text-xs font-extrabold uppercase text-accent tracking-wider mb-2">Grades 9–12</div>
              <h3 className="text-lg font-bold uppercase mb-4 text-text-primary">Advanced Engineering</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">Embedded C/C++, Arduino architecture, Internet of Things cloud feeds, basic automation controllers, and CAD 3D prints.</p>
              <div className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">Key Projects:</div>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• 8-Sensor PID Line Tracker</li>
                <li>• Wi-Fi IoT Plant Hydrator</li>
                <li>• Pneumatic Striker Soccer Bot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form & Contact info */}
      <section className="section py-16 bg-white border-t border-border">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">Institutional Booking</span>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4">Request a School Lab Demo & Presentation</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Are you looking to install a state-of-the-art STEM Tinkering Lab or AI Robotics laboratory in your school? Our certified educational consultants can bring sample kits, demonstration rovers, and syllabus guidelines directly to your school board meeting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-accent w-5 h-5" />
                  <span className="text-xs font-bold uppercase text-text-primary">Free Physical Textbook Copy during demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-accent w-5 h-5" />
                  <span className="text-xs font-bold uppercase text-text-primary">Teacher Training and Syllabus mapping slides</span>
                </div>
              </div>
            </div>

            <div className="bg-subtle border border-border rounded-2xl p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-12 bg-white rounded-xl border border-border">
                  <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold uppercase text-text-primary">Request Submitted</h4>
                  <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Our academic coordinators will contact your board.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">School Name</label>
                    <input
                      type="text"
                      required
                      value={form.schoolName}
                      onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                      placeholder="e.g. Tamizh Tech Public School"
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Contact Name & Role</label>
                      <input
                        type="text"
                        required
                        value={form.contactPerson}
                        onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                        placeholder="Principal / Admin Officer"
                        className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Select Lab Focus</label>
                      <select
                        value={form.labInterest}
                        onChange={(e) => setForm({ ...form, labInterest: e.target.value })}
                        className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      >
                        <option>STEM Lab Setup</option>
                        <option>Robotics Lab Setup</option>
                        <option>AI & IoT Setup</option>
                        <option>Teacher Training Package</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="admin@school.org"
                        className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">City & State</label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Coimbatore, Tamil Nadu"
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center py-3.5 mt-2">
                    Request School Lab Demo
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
