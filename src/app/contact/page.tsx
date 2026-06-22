"use client";

import { MessageCircle, Mail, Phone, MapPin, Send, ArrowRight, MoveRight, Globe, Building2, UserCircle2, Briefcase, Calendar, Clock, Banknote, HelpCircle, Factory, Settings, Laptop, Database, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

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
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12 md:mb-20 border-l-4 border-[#FF6B00] pl-6 md:pl-10 py-4 text-left">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.5em] mb-6 md:mb-8 font-sans">Contact & Consultation</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] tracking-tighter leading-[0.95] uppercase">
            Request a Technical <br /> Proposal.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl font-medium mt-6 md:mt-10">
            Connect with the engineering coordination team at Tamizh Tech Robotics Company to discuss school lab setups, products ordering, or industrial integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-12 text-left">
            <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-12 border-b border-[#E5E5E5] pb-4">Corporate Channels</h3>
              <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-white border border-[#E5E5E5] flex items-center justify-center text-[#FF6B00] rounded-xl shadow-sm hover:border-[#FF6B00] transition-colors shrink-0">
                      <Phone className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans opacity-70">Direct Line</p>
                      <a href="tel:+918148045030" className="text-xl font-black text-[#111111] hover:text-[#FF6B00] transition-colors uppercase tracking-tight">+91 81480 45030</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-white border border-[#E5E5E5] flex items-center justify-center text-[#FF6B00] rounded-xl shadow-sm hover:border-[#FF6B00] transition-colors shrink-0">
                      <Mail className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans opacity-70">Official Inquiry</p>
                      <a href="mailto:office@tamizhtech.in" className="text-xl font-black text-[#111111] hover:text-[#FF6B00] transition-colors uppercase tracking-tight break-all">office@tamizhtech.in</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-white border border-[#E5E5E5] flex items-center justify-center text-[#FF6B00] rounded-xl shadow-sm hover:border-[#FF6B00] transition-colors shrink-0">
                      <MapPin className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans opacity-70">Engineering HQ</p>
                      <p className="text-xl font-black text-[#111111] uppercase tracking-tight leading-[1.1]">Coimbatore,<br />Tamil Nadu, India</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-12 rounded-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter flex items-center gap-3">
                   <ShieldCheck className="w-6 h-6 text-[#FF6B00]" /> Regional Support
                 </h4>
                 <p className="text-xs font-bold text-gray-500 leading-relaxed mb-10 uppercase tracking-wider">Tamizh Tech Robotics Company handles high-complexity academic and industrial inquiries across 15+ Indian states with on-ground technical specialists.</p>
                 <Link href="/about" className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest flex items-center gap-4 border-b border-[#FF6B00]/25 pb-1 w-fit group">
                   VIEW SERVICE AREA <MoveRight className="w-4 h-4 group-hover:translate-x-1" />
                 </Link>
               </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-2">
             {isSuccess ? (
                <div className="bg-white border-4 border-[#FF6B00] p-20 text-center shadow-2xl rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Send className="w-32 h-32 text-[#FF6B00]" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-5xl font-black text-[#111111] tracking-tighter uppercase mb-6 leading-none">Inquiry Logged.</h2>
                    <p className="text-gray-500 text-lg mb-12 font-bold max-w-xl mx-auto uppercase text-[12px] tracking-widest">
                      Thank you, <span className="text-[#FF6B00]">{form.name}</span>. Technical coordination at Tamizh Tech Robotics Company has received your request for <span className="text-[#111111]">{form.company}</span>. 
                      An engineer will contact you via <span className="text-[#111111] underline underline-offset-8">{form.callbackMode}</span> within 24 business hours.
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
                <form onSubmit={handleSubmit} className="bg-[#FAFAFA] border border-[#E5E5E5] p-10 lg:p-16 rounded-2xl space-y-16">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 text-red-700 font-bold uppercase text-xs tracking-widest animate-pulse">
                      Critical Error: {error}
                    </div>
                  )}
                  
                  {/* Form Section: Identity */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] border-b-2 border-[#FF6B00] pb-2">01. Stakeholder Identity</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <FormField label="Full Name" icon={<UserCircle2 className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="John Doe" 
                            className="form-input" value={form.name} 
                            onChange={e => setForm({...form, name: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Enterprise / Institute Name" icon={<Building2 className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="PSG College / Acme Corp" 
                            className="form-input" value={form.company}
                            onChange={e => setForm({...form, company: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Corporate Designation" icon={<Briefcase className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="Director / HOD / Student Representative" 
                            className="form-input" value={form.designation}
                            onChange={e => setForm({...form, designation: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Official Email" icon={<Mail className="w-4 h-4" />}>
                          <input 
                            required type="email" placeholder="john@company.com" 
                            className="form-input" value={form.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                          />
                       </FormField>
                    </div>
                  </div>

                  {/* Form Section: Project Scope */}
                  <div className="space-y-10 pt-10 border-t border-[#E5E5E5]">
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] border-b-2 border-[#FF6B00] pb-2">02. Engineering Scope</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <FormField label="Segment Vertical" icon={<Factory className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})}>
                              <option>School K-12 Labs</option>
                              <option>College STEM Labs</option>
                              <option>Robotics Competitions</option>
                              <option>Industrial Automation</option>
                              <option>Custom R&D prototyping</option>
                           </select>
                        </FormField>
                        <FormField label="Capability Required" icon={<Settings className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}>
                              <option>Tinkering Lab setups</option>
                              <option>Hardware Kit Bulks</option>
                              <option>ThiranOli Academy Training</option>
                              <option>AI Machine Vision Platforms</option>
                              <option>Industrial PLC Automation</option>
                              <option>Custom Robot Assembly</option>
                           </select>
                        </FormField>
                        <FormField label="Allocated Budget" icon={<Banknote className="w-4 h-4" />}>
                           <select className="form-input cursor-pointer" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                              <option>Below 1L</option>
                              <option>1L - 5L</option>
                              <option>5L - 20L</option>
                              <option>Above 20L</option>
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

                    <FormField label="Brief Project / Kit Specifications" icon={<HelpCircle className="w-4 h-4" />}>
                        <textarea 
                          required rows={4} placeholder="Briefly specify the target quantities, competition tracks, or automation problems..." 
                          className="form-input resize-none" value={form.requirement}
                          onChange={e => setForm({...form, requirement: e.target.value})}
                        />
                    </FormField>
                  </div>

                  {/* Form Footer */}
                  <div className="pt-10 border-t border-[#E5E5E5] flex flex-col md:flex-row md:items-center justify-between gap-12">
                     <div className="flex flex-col gap-4 text-left">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">Preferred Callback Mode</p>
                        <div className="flex flex-wrap gap-6">
                           {["Email", "Phone", "WhatsApp"].map(mode => (
                             <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" name="callback" value={mode} 
                                  checked={form.callbackMode === mode} 
                                  onChange={() => setForm({...form, callbackMode: mode})}
                                  className="accent-[#FF6B00] w-4 h-4"
                                />
                                <span className="text-xs font-black text-gray-500 group-hover:text-[#111111] uppercase tracking-wider">{mode}</span>
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

function FormField({ label, icon, children }: { label: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
       <div className="flex items-center gap-3 px-1">
          <span className="text-[#FF6B00] opacity-50">{icon}</span>
          <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em] font-sans">{label}</label>
       </div>
       {children}
    </div>
  );
}
