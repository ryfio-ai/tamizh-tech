"use client";

import { Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck, UserCircle2, Building2, Briefcase, Calendar, Clock, Banknote, HelpCircle, Factory, Settings } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    institution: "",
    department: "",
    graduationYear: "",
    areaOfInterest: "",
    designation: "",
    email: "",
    phone: "",
    industry: "Manufacturing",
    projectType: "Industrial Automation (Hardware)",
    budget: "5L - 20L",
    timeline: "3 - 6 Months",
    requirement: "",
    callbackMode: "Email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "Contact",
          source: "Contact Page",
          pageUrl: "https://www.tamizhtech.in/contact",
          customerName: form.name,
          organization: form.company || form.institution,
          institution: form.institution || form.company,
          department: form.department,
          graduationYear: form.graduationYear,
          areaOfInterest: form.areaOfInterest || form.projectType,
          customerType: form.designation,
          email: form.email,
          phone: form.phone,
          subject: `${form.projectType} — ${form.industry}`,
          requirement: `${form.areaOfInterest || form.projectType} (${form.timeline})`,
          budget: form.budget,
          message: form.requirement,
          preferredContactMethod: form.callbackMode,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to log technical inquiry.");
      }

      setLeadId(result.leadId || "");
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || "Network Error: Technical coordination is offline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Request a Technical Proposal"
        subtitle="Connect with the engineering coordination team at Tamizh Tech Robotics Company to discuss school lab setups, products ordering, or industrial integrations."
        breadcrumbActive="Contact"
      />

      <section className="section bg-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/5 border border-border flex items-center justify-center text-accent rounded-xl shrink-0">
                    <Phone className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-1.5">Direct Line</p>
                    <a href="tel:+918148045030" className="text-lg font-bold text-text-primary hover:text-accent transition-colors">+91 81480 45030</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/5 border border-border flex items-center justify-center text-accent rounded-xl shrink-0">
                    <Mail className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-1.5">Official Inquiry</p>
                    <a href="mailto:contact@tamizhtech.in" className="text-lg font-bold text-text-primary hover:text-accent transition-colors break-all">contact@tamizhtech.in</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/5 border border-border flex items-center justify-center text-accent rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-1.5">Engineering HQ</p>
                    <p className="text-lg font-bold text-text-primary leading-tight">Thiruchendur Gdn Rd, Kurumbapalayam SSKulam,<br />Coimbatore, Tamil Nadu 641107</p>
                  </div>
                </div>
              </div>

              <Card className="bg-subtle border-border/80 p-8 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Regional Support
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    Tamizh Tech Robotics Company handles high-complexity academic and industrial inquiries across 15+ Indian states with on-ground technical specialists.
                  </p>
                  <Link href="/about" className="text-xs font-bold text-accent hover:text-accent-hover inline-flex items-center gap-2">
                    View Service Area <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <Card className="border-2 border-accent p-12 text-center shadow-md rounded-2xl space-y-4">
                  <h2 className="text-3xl font-extrabold text-text-primary">Inquiry Logged successfully</h2>
                  <p className="text-text-muted text-sm leading-relaxed max-w-xl mx-auto">
                    Thank you, <span className="text-accent font-bold">{form.name}</span>. Technical coordination at Tamizh Tech Robotics Company has received your request for <span className="text-text-primary font-bold">{form.company}</span>. An engineer will contact you via <span className="text-accent underline underline-offset-4">{form.callbackMode}</span> within 24 business hours.
                  </p>
                  {leadId && (
                    <div className="bg-white p-3 rounded-xl border border-border inline-block">
                      <span className="text-[10px] font-bold text-text-muted uppercase block">Reference ID</span>
                      <span className="text-sm font-black font-mono text-accent">{leadId}</span>
                    </div>
                  )}
                  <div>
                    <Button variant="secondary" onClick={() => setIsSuccess(false)}>
                      Log Another Request
                    </Button>
                  </div>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="bg-subtle border border-border/70 p-8 lg:p-12 rounded-3xl space-y-10">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 font-semibold text-xs tracking-wider">
                      Error: {error}
                    </div>
                  )}
                  
                  {/* Identity */}
                  <div className="space-y-6">
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider border-b border-border pb-2">01. Stakeholder Identity</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Full Name" icon={<UserCircle2 className="w-4 h-4" />}>
                        <input 
                          required type="text" placeholder="John Doe" 
                          className="form-input-custom" value={form.name} 
                          onChange={e => setForm({...form, name: e.target.value})}
                        />
                      </FormField>
                      <FormField label="Enterprise / Institution Name" icon={<Building2 className="w-4 h-4" />}>
                        <input 
                          required type="text" placeholder="PSG College / Acme Corp / School" 
                          className="form-input-custom" value={form.company}
                          onChange={e => setForm({...form, company: e.target.value, institution: e.target.value})}
                        />
                      </FormField>
                      <FormField label="Department / Branch" icon={<Briefcase className="w-4 h-4" />}>
                        <input 
                          type="text" placeholder="ECE / Robotics / Mechanical / R&D" 
                          className="form-input-custom" value={form.department}
                          onChange={e => setForm({...form, department: e.target.value})}
                        />
                      </FormField>
                      <FormField label="Graduation Year / Designation" icon={<UserCircle2 className="w-4 h-4" />}>
                        <input 
                          type="text" placeholder="2026 / Student / Professor / Manager" 
                          className="form-input-custom" value={form.graduationYear}
                          onChange={e => setForm({...form, graduationYear: e.target.value, designation: e.target.value})}
                        />
                      </FormField>
                      <FormField label="Area of Interest / Role" icon={<Settings className="w-4 h-4" />}>
                        <input 
                          type="text" placeholder="Robotics / PLC / STEM Lab / Competition" 
                          className="form-input-custom" value={form.areaOfInterest}
                          onChange={e => setForm({...form, areaOfInterest: e.target.value})}
                        />
                      </FormField>
                      <FormField label="Official Email" icon={<Mail className="w-4 h-4" />}>
                        <input 
                          required type="email" placeholder="john@company.com" 
                          className="form-input-custom" value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                        />
                      </FormField>
                    </div>
                  </div>

                  {/* Project Scope */}
                  <div className="space-y-6 pt-6 border-t border-border/80">
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider border-b border-border pb-2">02. Engineering Scope</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Segment Vertical" icon={<Factory className="w-4 h-4" />}>
                        <select className="form-input-custom cursor-pointer" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})}>
                          <option>School K-12 Labs</option>
                          <option>College STEM Labs</option>
                          <option>Robotics Competitions</option>
                          <option>Industrial Automation</option>
                          <option>Custom R&D prototyping</option>
                        </select>
                      </FormField>
                      <FormField label="Capability Required" icon={<Settings className="w-4 h-4" />}>
                        <select className="form-input-custom cursor-pointer" value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}>
                          <option>Tinkering Lab setups</option>
                          <option>Hardware Kit Bulks</option>
                          <option>ThiranOli Academy Training</option>
                          <option>AI Machine Vision Platforms</option>
                          <option>Industrial PLC Automation</option>
                          <option>Custom Robot Assembly</option>
                        </select>
                      </FormField>
                      <FormField label="Allocated Budget" icon={<Banknote className="w-4 h-4" />}>
                        <select className="form-input-custom cursor-pointer" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                          <option>Below 1L</option>
                          <option>1L - 5L</option>
                          <option>5L - 20L</option>
                          <option>Above 20L</option>
                          <option>TBD / Multi-phase</option>
                        </select>
                      </FormField>
                      <FormField label="Implementation Timeline" icon={<Calendar className="w-4 h-4" />}>
                        <select className="form-input-custom cursor-pointer" value={form.timeline} onChange={e => setForm({...form, timeline: e.target.value})}>
                          <option>Immediate / Q1</option>
                          <option>1 - 3 Months</option>
                          <option>3 - 6 Months</option>
                          <option>6+ Months / Planning</option>
                        </select>
                      </FormField>
                    </div>

                    <FormField label="Brief Project Specs" icon={<HelpCircle className="w-4 h-4" />}>
                      <textarea 
                        required rows={4} placeholder="Briefly specify requirements..." 
                        className="form-input-custom resize-none" value={form.requirement}
                        onChange={e => setForm({...form, requirement: e.target.value})}
                      />
                    </FormField>
                  </div>

                  {/* Preferred Contact Mode & Submit */}
                  <div className="pt-6 border-t border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Preferred Callback Mode</p>
                      <div className="flex gap-4">
                        {["Email", "Phone", "WhatsApp"].map(mode => (
                          <label key={mode} className="flex items-center gap-2 cursor-pointer group">
                            <input 
                              type="radio" name="callback" value={mode} 
                              checked={form.callbackMode === mode} 
                              onChange={() => setForm({...form, callbackMode: mode})}
                              className="accent-accent w-4 h-4"
                            />
                            <span className="text-xs text-text-secondary group-hover:text-text-primary font-bold uppercase tracking-wider">{mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? "Transmitting..." : "Request Proposal"} <Send className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-subtle border-t border-border py-16">
        <div className="container px-6">
          <div className="mb-8">
            <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-2">Find Us</span>
            <h2 className="text-2xl md:text-3xl font-black text-text-primary uppercase tracking-tight font-heading">
              Our Engineering HQ
            </h2>
            <p className="text-sm text-text-secondary mt-2">
              Thiruchendur Gdn Rd, Kurumbapalayam SSKulam, Coimbatore, Tamil Nadu 641107
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-md w-full" style={{ height: '420px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7829.994713601236!2d77.02676977955934!3d11.11357428711481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1784045884865!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="TamizhTech Robotics Company — Coimbatore Location"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

function FormField({ label, icon, children }: { label: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 px-1">
        <span className="text-accent">{icon}</span>
        <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{label}</label>
      </div>
      {children}
    </div>
  );
}
