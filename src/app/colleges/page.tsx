"use client";

import React, { useState } from "react";
import { Check, Mail, Phone, BookOpen, Settings, Zap, GraduationCap, Award } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function CollegesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    collegeName: "",
    dept: "Department of Robotics / Mechatronics",
    contactPerson: "",
    email: "",
    phone: "",
    notes: ""
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
        "name": "Do you provide bulk custom PCB prototyping and components for student teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in high-quality hardware supply, custom PCB development, sensor procurement, and frame CNC milling for student competition teams (Robo War, Soccer, UAV, RC Boats)."
        }
      },
      {
        "@type": "Question",
        "name": "How does Department Collaboration work for R&D Labs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer official institutional MOUs that cover R&D laboratory setups, customized research platforms (ROVs, robotic arms, quadcopters), guest lecture packages, and final-year student mentorship."
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
        title="College R&D, Projects & Competition Support"
        subtitle="Establish world-class engineering centers. We supply R&D laboratory hardware, specialized final year project mentorship, and robotic competition team coaching."
        breadcrumbActive="Colleges"
      />

      {/* Solutions Grid */}
      <section className="section py-16 bg-white text-left">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">College Partnerships</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">Academic Engineering Solutions</h2>
            <p className="text-text-secondary text-sm mt-3">We partner with Mechatronics, Mechanical, ECE, EEE, and CS departments to build specialized hands-on centers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border border-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase mb-2">Project Mentorship</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">One-on-one expert hardware guides for final-year engineering projects in Robotics, Embedded systems, and AI.</p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-text-muted mt-auto pt-4 border-t border-border">
                <li>• Sourcing custom parts</li>
                <li>• Controller programming help</li>
              </ul>
            </Card>

            <Card className="p-6 border border-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase mb-2">R&D Lab Setup</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">Turnkey hardware systems (advanced manipulators, micro-drones, jet engines, and motor drivers) to set up academic research facilities.</p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-text-muted mt-auto pt-4 border-t border-border">
                <li>• Industrial PLC units</li>
                <li>• Custom kinematic controllers</li>
              </ul>
            </Card>

            <Card className="p-6 border border-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase mb-2">Competition Teams</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">Custom telemetry setups and hardened steel materials to build national winning Robo War, Soccer, and UAV racing teams.</p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-text-muted mt-auto pt-4 border-t border-border">
                <li>• High-RPM brushless outrunners</li>
                <li>• Polycarbonate protective panels</li>
              </ul>
            </Card>

            <Card className="p-6 border border-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="p-3 bg-accent/5 rounded-xl text-accent w-fit mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase mb-2">Custom Fabrication</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">Provide student teams with custom PCB routing, laser-cut acrylic chassis plates, and CNC-tempered steel weapons.</p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-text-muted mt-auto pt-4 border-t border-border">
                <li>• Rapid local 3D print sweeps</li>
                <li>• Multi-layered circuit boards</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Request Form */}
      <section className="section py-16 bg-subtle border-t border-border text-left">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">B2B R&D RFP</span>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4">Request R&D Collaboration & Quote</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Are you an HOD, lab coordinator, or member of the purchasing board looking to collaborate with Tamizh Tech Robotics? We provide official quotations, submit custom research proposals, and ship wholesale competition parts. Complete the form and our R&D director will respond to your department within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold uppercase text-text-primary">GST Tax Invoices & Corporate Logistics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold uppercase text-text-primary">Institutional MOUs & Student Placements</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-xs">
              {submitted ? (
                <div className="text-center py-12">
                  <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold uppercase text-text-primary">Collaboration Request Sent</h4>
                  <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Our academic liaison officer will contact your department.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">College/University Name</label>
                    <input
                      type="text"
                      required
                      value={form.collegeName}
                      onChange={(e) => setForm({ ...form, collegeName: e.target.value })}
                      placeholder="e.g. Coimbatore Institute of Technology"
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Department</label>
                      <input
                        type="text"
                        required
                        value={form.dept}
                        onChange={(e) => setForm({ ...form, dept: e.target.value })}
                        className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Contact Name & Designation</label>
                      <input
                        type="text"
                        required
                        value={form.contactPerson}
                        onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                        placeholder="Dr. K. Arul / HOD"
                        className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
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
                        placeholder="hod.robotics@college.edu"
                        className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 94432 10987"
                        className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Outline Requirements & Target Timeline</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Detail your request (e.g. final year projects hardware supply, competition chassis routing, dynamic lab design)..."
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent h-24 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center py-3.5">
                    Request R&D Collaboration & Quote
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
