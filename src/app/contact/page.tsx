"use client";

import { MessageCircle, Mail, Phone, MapPin, Send, ArrowRight, MoveRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "Where is TamizhTech based?", a: "Our engineering headquarters, R&D labs, and training sandboxes are located in Coimbatore, Tamil Nadu, India." },
  { q: "Do you offer online academic tracks?", a: "Yes, many of our STEM foundations and microcontroller tracks offer online and hybrid training formats." },
  { q: "How do we coordinate an industrial audit?", a: "Fill out the contact coordination form below with your project dimensions. Our systems engineers will reply within 24 business hours." }
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to log technical inquiry.");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || "Network Error: Technical coordination is offline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Contact Coordination
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-secondary leading-tight">
            Initiate a Technical <br /> Consultation.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
            Connect with our systems coordination division to discuss your automation parameters, course registrations, or custom prototyping requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start mb-32">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-1 space-y-12">
            
            <div className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-border pb-3">Corporate Channels</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-primary rounded-lg bg-bg-secondary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Call</span>
                    <a href="tel:+918148045030" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
                      +91 81480 45030
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-primary rounded-lg bg-bg-secondary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Email</span>
                    <a href="mailto:office@tamizhtech.in" className="text-sm font-semibold text-secondary hover:text-primary transition-colors break-all">
                      office@tamizhtech.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-primary rounded-lg bg-bg-secondary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Office HQ</span>
                    <p className="text-sm font-semibold text-secondary leading-relaxed">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Support Card */}
            <div className="border border-border p-6 rounded-2xl bg-bg-secondary space-y-4">
              <h4 className="text-sm font-bold text-secondary uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> Active Calibration
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                TamizhTech provides remote software updates and localized troubleshooting coordinators across 15+ Indian states to guarantee high uptime.
              </p>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="border border-primary bg-primary/5 p-12 text-center rounded-2xl space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-secondary uppercase tracking-tight">Request Logged</h3>
                <p className="text-text-secondary text-xs leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="text-primary font-bold">{form.name}</span>. Technical coordinators have cataloged your inquiry for <span className="text-secondary font-bold">{form.company}</span>. We will follow up via {form.callbackMode} within 24 hours.
                </p>
                <button onClick={() => setIsSuccess(false)} className="btn-secondary py-2.5 text-xs font-semibold rounded-md">
                  Log Another consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border p-8 rounded-2xl bg-white shadow-lg space-y-8">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 font-bold uppercase text-xs tracking-wider">
                    Error: {error}
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-secondary uppercase tracking-tight border-b border-border pb-3">Consultation Form</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                      <input 
                        type="text" required placeholder="John Doe"
                        className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
                        value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Enterprise Name</label>
                      <input 
                        type="text" required placeholder="Acme Corp"
                        className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
                        value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Designation</label>
                      <input 
                        type="text" required placeholder="CTO / Director"
                        className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
                        value={form.designation} onChange={e => setForm({...form, designation: e.target.value})}
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Capability Needed</label>
                      <select 
                        className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium cursor-pointer"
                        value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}
                      >
                        <option>Industrial Automation (Hardware)</option>
                        <option>Robotics Integration</option>
                        <option>AI Vision Platforms</option>
                        <option>STEM Educational Setup</option>
                        <option>Custom R&D Prototype</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Callback Mode</label>
                      <select 
                        className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium cursor-pointer"
                        value={form.callbackMode} onChange={e => setForm({...form, callbackMode: e.target.value})}
                      >
                        <option>Email</option>
                        <option>Phone call</option>
                        <option>WhatsApp chat</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Project Description</label>
                    <textarea 
                      rows={4} required placeholder="Specify the operational parameters or educational framework required..."
                      className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-bg-secondary resize-none focus:outline-none focus:border-primary font-medium"
                      value={form.requirement} onChange={e => setForm({...form, requirement: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit" disabled={isSubmitting}
                  className="w-full btn-primary py-3.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Transmitting..." : "Send Technical Proposal"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Map & FAQs Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-secondary uppercase tracking-tight">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-border rounded-xl overflow-hidden bg-white">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center text-xs font-bold uppercase text-secondary hover:text-primary transition-colors bg-bg-secondary/40"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 border-t border-border text-xs leading-relaxed text-text-secondary font-medium bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Google Map Container */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-secondary uppercase tracking-tight">Location HQ</h3>
            <div className="border border-border rounded-2xl overflow-hidden shadow-sm h-64 bg-bg-secondary relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5134688647!2d76.88483281072979!3d11.011677490616335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f976687%3A0x3523150d4d008615!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
