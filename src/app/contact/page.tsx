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
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen text-[#F5F6F8]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12 md:mb-20 border-l-4 border-[#FF4D2D] pl-6 md:pl-10 py-4 text-left">
          <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.5em] mb-6 md:mb-8 font-sans">Contact & Consultation</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] uppercase">
            Request a Technical <br /> Proposal.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA1AC] leading-relaxed max-w-2xl font-medium mt-6 md:mt-10">
            Connect with the engineering coordination team at Tamizh Tech Robotics Company to discuss school lab setups, products ordering, or industrial integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-12 text-left">
            <div>
              <h3 className="text-[10px] font-black text-[#858E9B] uppercase tracking-[0.3em] mb-12 border-b border-[#232833] pb-4 font-mono">Corporate Channels</h3>
              <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-[#181C24] border border-[#232833] flex items-center justify-center text-[#FF4D2D] rounded-xl shadow-sm hover:border-[#FF4D2D] transition-colors shrink-0">
                      <Phone className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest mb-2 font-sans opacity-70">Direct Line</p>
                      <a href="tel:+918148045030" className="text-xl font-black text-[#F5F6F8] hover:text-[#FF4D2D] transition-colors uppercase tracking-tight">+91 81480 45030</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-[#181C24] border border-[#232833] flex items-center justify-center text-[#FF4D2D] rounded-xl shadow-sm hover:border-[#FF4D2D] transition-colors shrink-0">
                      <Mail className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest mb-2 font-sans opacity-70">Official Inquiry</p>
                      <a href="mailto:office@tamizhtech.in" className="text-xl font-black text-[#F5F6F8] hover:text-[#FF4D2D] transition-colors uppercase tracking-tight break-all">office@tamizhtech.in</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-[#181C24] border border-[#232833] flex items-center justify-center text-[#FF4D2D] rounded-xl shadow-sm hover:border-[#FF4D2D] transition-colors shrink-0">
                      <MapPin className="w-6 h-6 stroke-[1.5]" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest mb-2 font-sans opacity-70">Engineering HQ</p>
                      <p className="text-xl font-black text-[#F5F6F8] uppercase tracking-tight leading-[1.1]">Coimbatore,<br />Tamil Nadu, India</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-[#11141A] border border-[#232833] p-12 rounded-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-2xl font-heading font-black mb-6 uppercase tracking-tighter flex items-center gap-3">
                   <ShieldCheck className="w-6 h-6 text-[#FF4D2D]" /> Regional Support
                 </h4>
                 <p className="text-xs font-bold text-[#9AA1AC] leading-relaxed mb-10 uppercase tracking-wider">Tamizh Tech Robotics Company handles high-complexity academic and industrial inquiries across 15+ Indian states with on-ground technical specialists.</p>
                 <Link href="/about" className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-widest flex items-center gap-4 border-b border-[#FF4D2D]/25 pb-1 w-fit group font-mono">
                   VIEW SERVICE AREA <MoveRight className="w-4 h-4 group-hover:translate-x-1" />
                 </Link>
               </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-2 text-left">
             {isSuccess ? (
                <div className="bg-[#11141A] border-4 border-[#FF4D2D] p-20 text-center shadow-2xl rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Send className="w-32 h-32 text-[#FF4D2D]" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-5xl font-heading font-black text-[#F5F6F8] tracking-tighter uppercase mb-6 leading-none">Inquiry Logged.</h2>
                    <p className="text-[#9AA1AC] text-lg mb-12 font-bold max-w-xl mx-auto uppercase text-[12px] tracking-widest leading-relaxed">
                      Thank you, <span className="text-[#FF4D2D]">{form.name}</span>. Technical coordination at Tamizh Tech Robotics Company has received your request for <span className="text-[#F5F6F8]">{form.company}</span>. 
                      An engineer will contact you via <span className="text-[#FF4D2D] underline underline-offset-8">{form.callbackMode}</span> within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="btn-secondary py-6 px-12 border-[#232833] hover:border-[#FF4D2D] font-black text-xs"
                    >
                      LOG ANOTHER REQUEST
                    </button>
                  </div>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="bg-[#11141A] border border-[#232833] p-10 lg:p-16 rounded-2xl space-y-16">
                  {error && (
                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 text-red-500 font-bold uppercase text-xs tracking-widest animate-pulse">
                      Critical Error: {error}
                    </div>
                  )}
                  
                  {/* Form Section: Identity */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-[#858E9B] uppercase tracking-[0.4em] border-b-2 border-[#FF4D2D] pb-2 font-mono">01. Stakeholder Identity</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <FormField label="Full Name" icon={<UserCircle2 className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="John Doe" 
                            className="form-input-dark" value={form.name} 
                            onChange={e => setForm({...form, name: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Enterprise / Institute Name" icon={<Building2 className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="PSG College / Acme Corp" 
                            className="form-input-dark" value={form.company}
                            onChange={e => setForm({...form, company: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Corporate Designation" icon={<Briefcase className="w-4 h-4" />}>
                          <input 
                            required type="text" placeholder="Director / HOD / Student Representative" 
                            className="form-input-dark" value={form.designation}
                            onChange={e => setForm({...form, designation: e.target.value})}
                          />
                       </FormField>
                       <FormField label="Official Email" icon={<Mail className="w-4 h-4" />}>
                          <input 
                            required type="email" placeholder="john@company.com" 
                            className="form-input-dark" value={form.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                          />
                       </FormField>
                    </div>
                  </div>

                  {/* Form Section: Project Scope */}
                  <div className="space-y-10 pt-10 border-t border-[#232833]">
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-[#858E9B] uppercase tracking-[0.4em] border-b-2 border-[#FF4D2D] pb-2 font-mono">02. Engineering Scope</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <FormField label="Segment Vertical" icon={<Factory className="w-4 h-4" />}>
                           <div className="relative">
                             <select className="form-input-dark cursor-pointer" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})}>
                                <option className="bg-[#181C24]">School K-12 Labs</option>
                                <option className="bg-[#181C24]">College STEM Labs</option>
                                <option className="bg-[#181C24]">Robotics Competitions</option>
                                <option className="bg-[#181C24]">Industrial Automation</option>
                                <option className="bg-[#181C24]">Custom R&D prototyping</option>
                             </select>
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#858E9B] w-2 h-2 pointer-events-none"></span>
                           </div>
                        </FormField>
                        <FormField label="Capability Required" icon={<Settings className="w-4 h-4" />}>
                           <div className="relative">
                             <select className="form-input-dark cursor-pointer" value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}>
                                <option className="bg-[#181C24]">Tinkering Lab setups</option>
                                <option className="bg-[#181C24]">Hardware Kit Bulks</option>
                                <option className="bg-[#181C24]">ThiranOli Academy Training</option>
                                <option className="bg-[#181C24]">AI Machine Vision Platforms</option>
                                <option className="bg-[#181C24]">Industrial PLC Automation</option>
                                <option className="bg-[#181C24]">Custom Robot Assembly</option>
                             </select>
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#858E9B] w-2 h-2 pointer-events-none"></span>
                           </div>
                        </FormField>
                        <FormField label="Allocated Budget" icon={<Banknote className="w-4 h-4" />}>
                           <div className="relative">
                             <select className="form-input-dark cursor-pointer" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                                <option className="bg-[#181C24]">Below 1L</option>
                                <option className="bg-[#181C24]">1L - 5L</option>
                                <option className="bg-[#181C24]">5L - 20L</option>
                                <option className="bg-[#181C24]">Above 20L</option>
                                <option className="bg-[#181C24]">TBD / Multi-phase</option>
                             </select>
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#858E9B] w-2 h-2 pointer-events-none"></span>
                           </div>
                        </FormField>
                        <FormField label="Implementation Timeline" icon={<Calendar className="w-4 h-4" />}>
                           <div className="relative">
                             <select className="form-input-dark cursor-pointer" value={form.timeline} onChange={e => setForm({...form, timeline: e.target.value})}>
                                <option className="bg-[#181C24]">Immediate / Q1</option>
                                <option className="bg-[#181C24]">1 - 3 Months</option>
                                <option className="bg-[#181C24]">3 - 6 Months</option>
                                <option className="bg-[#181C24]">6+ Months / Planning</option>
                             </select>
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#858E9B] w-2 h-2 pointer-events-none"></span>
                           </div>
                        </FormField>
                    </div>

                    <FormField label="Brief Project / Kit Specifications" icon={<HelpCircle className="w-4 h-4" />}>
                        <textarea 
                          required rows={4} placeholder="Briefly specify the target quantities, competition tracks, or automation problems..." 
                          className="form-input-dark resize-none" value={form.requirement}
                          onChange={e => setForm({...form, requirement: e.target.value})}
                        />
                    </FormField>
                  </div>

                  {/* Form Footer */}
                  <div className="pt-10 border-t border-[#232833] flex flex-col md:flex-row md:items-center justify-between gap-12">
                     <div className="flex flex-col gap-4 text-left">
                        <p className="text-[9px] font-black text-[#858E9B] uppercase tracking-[0.2em] font-sans">Preferred Callback Mode</p>
                        <div className="flex flex-wrap gap-6">
                           {["Email", "Phone", "WhatsApp"].map(mode => (
                             <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="radio" name="callback" value={mode} 
                                  checked={form.callbackMode === mode} 
                                  onChange={() => setForm({...form, callbackMode: mode})}
                                  className="accent-[#FF4D2D] w-4 h-4"
                                />
                                <span className="text-xs font-black text-[#858E9B] group-hover:text-[#F5F6F8] uppercase tracking-wider font-mono">{mode}</span>
                             </label>
                           ))}
                        </div>
                     </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary py-6 px-12 flex items-center justify-center gap-4 shadow-xl disabled:opacity-50 disabled:grayscale font-black"
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
        .form-input-dark {
          width: 100%;
          background-color: #181C24;
          border: 1px solid #232833;
          padding: 1rem 1.25rem;
          color: #F5F6F8;
          font-weight: 700;
          font-size: 0.825rem;
          outline: none;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        .form-input-dark:focus {
          border-color: #FF4D2D;
          box-shadow: 0 0 0 1px #FF4D2D;
        }
        .form-input-dark::placeholder {
          color: #858E9B;
          font-weight: 600;
          opacity: 0.5;
        }
        select.form-input-dark {
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
          <span className="text-[#FF4D2D] opacity-60">{icon}</span>
          <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-[0.25em] font-sans">{label}</label>
       </div>
       {children}
     </div>
  );
}
