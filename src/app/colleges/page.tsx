"use client";

import React, { useState } from "react";
import { Check, Mail, Phone, BookOpen, Settings, Zap, GraduationCap, Award } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function CollegesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    collegeName: "",
    dept: "Robotics / Mechatronics",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    state: "Tamil Nadu",
    numStudents: "",
    requirement: "Robotics Lab",
    preferredContactMethod: "Phone",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "College Enquiry",
          source: "Colleges Page",
          pageUrl: "https://www.tamizhtech.in/colleges",
          customerName: form.contactPerson,
          organization: form.collegeName,
          customerType: "College",
          email: form.email,
          phone: form.phone,
          city: form.city,
          state: form.state,
          subject: `${form.requirement} — ${form.dept}`,
          requirement: `${form.requirement} (${form.dept})`,
          message: `Department: ${form.dept}, Approx Students: ${form.numStudents || "N/A"}. Notes: ${form.notes}`,
          preferredContactMethod: form.preferredContactMethod,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setLeadId(data.leadId || "");
      } else {
        alert(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="text-center py-12 space-y-4">
                  <Check className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div>
                    <h4 className="text-lg font-bold uppercase text-text-primary">Collaboration Request Sent</h4>
                    <p className="text-xs text-text-muted mt-1">Our academic liaison officer will contact your department.</p>
                  </div>
                  {leadId && (
                    <div className="bg-subtle p-3 rounded-xl border border-border inline-block">
                      <span className="text-[10px] font-bold text-text-muted uppercase block">Reference ID</span>
                      <span className="text-sm font-black font-mono text-accent">{leadId}</span>
                    </div>
                  )}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="e.g. Coimbatore"
                        className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        placeholder="e.g. Tamil Nadu"
                        className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Requirement</label>
                      <select
                        value={form.requirement}
                        onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                        className="w-full bg-subtle border border-border rounded-lg px-3 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      >
                        <option>Robotics Lab</option>
                        <option>Final Year Project</option>
                        <option>R&D Collaboration</option>
                        <option>Competition Training</option>
                        <option>Workshop</option>
                        <option>Embedded Systems</option>
                        <option>AI / ML</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Approx. Students</label>
                      <input
                        type="text"
                        value={form.numStudents}
                        onChange={(e) => setForm({ ...form, numStudents: e.target.value })}
                        placeholder="e.g. 120"
                        className="w-full bg-subtle border border-border rounded-lg px-3 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Contact Mode</label>
                      <select
                        value={form.preferredContactMethod}
                        onChange={(e) => setForm({ ...form, preferredContactMethod: e.target.value })}
                        className="w-full bg-subtle border border-border rounded-lg px-3 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      >
                        <option>Phone</option>
                        <option>WhatsApp</option>
                        <option>Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Requirements & Objectives</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Share details on equipment needs, student batch strength, or intended project focus..."
                      className="w-full bg-subtle border border-border rounded-lg p-3 text-xs text-text-primary focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center py-3.5 mt-2">
                    {isSubmitting ? "Submitting..." : "Submit Department Collaboration Request"}
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
