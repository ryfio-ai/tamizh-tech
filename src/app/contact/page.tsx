"use client";

import { MessageCircle, Mail, Phone, MapPin, Send, ArrowRight, MoveRight, Globe, Building2, UserCircle2, Briefcase, Calendar, Clock, Banknote, HelpCircle, Factory, Settings, Laptop, Smartphone, Database, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-8 font-sans">Contact & Consultation | Tamizh Tech Pvt Ltd</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Request a Technical <br /> Proposal.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            Connect with the engineering coordination team at Tamizh Tech Pvt Ltd to discuss your industrial automation goals or software requirements. We provide on-ground analysis for hardware and technical audits for digital platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-16">
            <div>
              <h3 className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] mb-12 border-b border-border-light pb-4">Corporate Channels</h3>
              <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-white border border-border-light flex items-center justify-center text-primary-main rounded-xs shadow-sm group hover:bg-primary-main hover:text-white transition-all">
                      <Phone className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-2 font-sans opacity-70">Direct Line</p>
                      <a href="tel:+918148045030" className="text-xl font-black text-text-primary hover:text-primary-main transition-colors uppercase tracking-tight">+91 81480 45030</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-white border border-border-light flex items-center justify-center text-primary-main rounded-xs shadow-sm group hover:bg-primary-main hover:text-white transition-all">
                      <Mail className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-2 font-sans opacity-70">Official Inquiry</p>
                      <a href="mailto:office@tamizhtech.in" className="text-xl font-black text-text-primary hover:text-primary-main transition-colors uppercase tracking-tight break-all">office@tamizhtech.in</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-white border border-border-light flex items-center justify-center text-primary-main rounded-xs shadow-sm group hover:bg-primary-main hover:text-white transition-all">
                      <MapPin className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-2 font-sans opacity-70">Engineering HQ</p>
                      <p className="text-xl font-black text-text-primary uppercase tracking-tight leading-[1.1]">Coimbatore,<br />Tamil Nadu, India</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-main p-12 text-white relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
               <div className="relative z-10">
                 <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter flex items-center gap-3">
                   <ShieldCheck className="w-6 h-6 text-primary-main" /> Regional Support
                 </h4>
                 <p className="text-xs font-bold text-white/50 leading-relaxed mb-10 uppercase tracking-wider">Tamizh Tech Pvt Ltd handles high-complexity industrial inquiries across 15+ Indian states with on-ground technical specialists and remote software monitoring.</p>
                 <Link href="/about" className="text-[10px] font-black text-primary-main uppercase tracking-widest flex items-center gap-4 border-b border-primary-main/20 pb-1 w-fit group">
                   VIEW SERVICE AREA <MoveRight className="w-4 h-4 group-hover:translate-x-1" />
                 </Link>
               </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-2">
             {isSuccess ? (
               <div className="bg-white border-4 border-primary-main p-20 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Send className="w-32 h-32 text-primary-main" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-5xl font-black text-text-primary tracking-tighter uppercase mb-6 leading-none">Inquiry Logged.</h2>
                    <p className="text-text-secondary text-lg mb-12 font-bold max-w-xl mx-auto uppercase text-[12px] tracking-widest">
                      Thank you, <span className="text-primary-main">{form.name}</span>. Technical coordination at Tamizh Tech Pvt Ltd has received your request for <span className="text-text-primary">{form.company}</span>. 
                      An engineer will contact you via <span className="text-text-primary underline underline-offset-8">{form.callbackMode}</span> within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="btn-secondary py-6 px-12"
                    >
                      LOG ANOTHER REQUEST
                    </button>
                  </div>
               </div>
             ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-border-light p-10 lg:p-16 shadow-2xl space-y-16">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 text-red-700 font-bold uppercase text-xs tracking-widest animate-pulse">
                      Critical Error: {error}
                    </div>
                  )}
                  
                  {/* Form Section: Identity */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] border-b-2 border-primary-main pb-2">01. Stakeholder Identity</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <FormField label="Full Name" icon={<UserCircle2 className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="John Doe" 
                            className="form-input" value={form.name} 
                            onChange={e => setForm({...form, name: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Enterprise Name" icon={<Building2 className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="Acme Systems" 
                            className="form-input" value={form.company}
                            onChange={e => setForm({...form, company: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Corporate Designation" icon={<Briefcase className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="Operations Head / CTO" 
                            className="form-input" value={form.designation}
                            onChange={e => setForm({...form, designation: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Official Email" icon={<Mail className="w-4 h-4" />}>
                          <input 
                            required type="email" placeholder="john@acme.com" 
                            className="form-input" value={form.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                          />
                       </FormField>
                    </div>
                  </div>

                  {/* Form Section: Project Scope */}
                  <div className="space-y-10 pt-10 border-t border-border-light">
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] border-b-2 border-primary-main pb-2">02. Engineering Scope</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <FormField label="Industry Vertical" icon={<Factory className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})}>
                              <option>Manufacturing</option>
                              <option>Logistics & Warehouse</option>
                              <option>Aerospace & Defense</option>
                              <option>Enterprise Tech</option>
                              <option>Textiles & Apparel</option>
                              <option>Agri-Processing</option>
                           </select>
                        </FormField>
                        <FormField label="Capability Required" icon={<Settings className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}>
                              <option>Industrial Automation (Hardware)</option>
                              <option>Robotics Integration</option>
                              <option>AI Vision Platforms</option>
                              <option>Enterprise Software (Web/SaaS)</option>
                              <option>Mobile Operational Ecosystems</option>
                              <option>Custom R&D Prototype</option>
                           </select>
                        </FormField>
                        <FormField label="Allocated Budget" icon={<Banknote className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                              <option>Below 5L</option>
                              <option>5L - 20L</option>
                              <option>20L - 50L</option>
                              <option>Above 50L</option>
                              <option>TBD / Multi-phase</option>
                           </select>
                        </FormField>
                        <FormField label="Implementation Timeline" icon={<Calendar className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.timeline} onChange={e => setForm({...form, timeline: e.target.value})}>
                              <option>Immediate / Q1</option>
                              <option>1 - 3 Months</option>
                              <option>3 - 6 Months</option>
                              <option>6+ Months / Planning</option>
                           </select>
                        </FormField>
                    </div>

                    <FormField label="Brief Project Specifications" icon={<HelpCircle className="w-4 h-4" />}>
                        <textarea 
                          required rows={4} placeholder="Briefly specify the technical challenge or business process to be automated..." 
                          className="form-input resize-none" value={form.requirement}
                          onChange={e => setForm({...form, requirement: e.target.value})}
                        />
                    </FormField>
                  </div>

                  {/* Form Footer */}
                  <div className="pt-10 border-t border-border-light flex flex-col md:flex-row md:items-center justify-between gap-12">
                     <div className="flex flex-col gap-4">
                        <p className="text-[9px] font-black text-text-muted uppercase tracking-[0.2em] font-sans">Preferred Communication</p>
                        <div className="flex gap-6">
                           {["Email", "Phone", "WhatsApp"].map(mode => (
                             <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" name="callback" value={mode} 
                                  checked={form.callbackMode === mode} 
                                  onChange={() => setForm({...form, callbackMode: mode})}
                                  className="accent-primary-main w-4 h-4"
                                />
                                <span className="text-xs font-black text-text-secondary group-hover:text-text-primary uppercase tracking-wider">{mode}</span>
                             </label>
                           ))}
                        </div>
                     </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary py-6 px-12 flex items-center justify-center gap-4 shadow-xl disabled:opacity-50 disabled:grayscale"
                      >
                         {isSubmitting ? "TRANSMITTING DATA..." : "REQUEST PROPOSAL"} <Send className={`w-5 h-5 ${isSubmitting ? "animate-ping" : ""}`} />
                      </button>
                  </div>
               </form>
             )}
          </div>
        </div>

      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background-color: #F7F7F5;
          border: 1px solid #E1E3E6;
          padding: 1rem 1.25rem;
          color: #1F2A44;
          font-weight: 800;
          font-size: 0.825rem;
          outline: none;
          transition: all 0.2s ease;
          border-radius: 0px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .form-input:focus {
          border-color: #F47A20;
          background-color: #FFFFFF;
          box-shadow: 0 0 0 1px #F47A20;
        }
        .form-input::placeholder {
          color: #AAB1BC;
          font-weight: 600;
          text-transform: none;
          letter-spacing: 0;
          opacity: 0.5;
        }
        select.form-input {
          appearance: none;
        }
      `}</style>
    </div>
  );
}

function FormField({ label, icon, children }: { label: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
       <div className="flex items-center gap-3 px-1">
          <span className="text-primary-main opacity-50">{icon}</span>
          <label className="text-[9px] font-black text-text-muted uppercase tracking-[0.25em] font-sans">{label}</label>
       </div>
       {children}
    </div>
  );
}
