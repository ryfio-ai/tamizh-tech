"use client";
import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Youtube, MessageCircle, Zap, CheckCircle2 } from "lucide-react";

const enquiryTypes = [
  "General Inquiry",
  "Robotics Club Membership",
  "Enterprise Solutions",
  "Strategic Partnership",
  "Executive Consultation",
  "Professional Training",
  "Technical Support",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", enquiry: "General Inquiry", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
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
        throw new Error(result.error || "Failed to send message");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-orange uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Let&apos;s Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-magenta">Next Robot</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Whether you need training, automation solutions, or want to join the club — we&apos;re just a message away.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 min-h-[500px] flex flex-col justify-center">
              {isSuccess ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-neon-orange/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-orange/50 shadow-neon-orange/20">
                    <Zap className="w-10 h-10 text-neon-orange animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-heading font-black text-white mb-4">Inquiry Received!</h2>
                  <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-neon-orange font-bold">{form.name}</span>. We have received your inquiry and will email you back shortly at <span className="text-white/80">{form.email}</span>.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-bold text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-white mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400 text-sm">
                        <Zap className="w-4 h-4 rotate-180" /> {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Email *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                          placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Phone</label>
                        <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                          placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Type of Enquiry</label>
                        <select value={form.enquiry} onChange={e => setForm({ ...form, enquiry: e.target.value })}
                          className="w-full bg-[#0d1524] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors">
                          {enquiryTypes.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Subject</label>
                      <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                        placeholder="Brief subject" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Message</label>
                      <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors resize-none"
                        placeholder="Tell us about your requirement..." />
                    </div>
                    <button type="submit" disabled={isSubmitting}
                      className="w-full py-4 bg-neon-orange text-black font-bold text-lg rounded-lg hover:bg-white hover:shadow-neon-orange disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Zap className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5" /> Submit Inquiry
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass-card p-7 flex flex-col gap-5">
              <h3 className="font-heading font-bold text-white text-lg">Contact Info</h3>
              <a href="tel:+918148045030" className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-neon-orange/10 border border-neon-orange/30 shrink-0"><Phone className="w-5 h-5 text-neon-orange" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Phone</p>
                  <p className="text-white font-bold group-hover:text-neon-orange transition-colors">+91 8148045030</p>
                </div>
              </a>
              <a href="mailto:tamizhtechpvtltd@gmail.com" className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30 shrink-0"><Mail className="w-5 h-5 text-neon-magenta" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-bold group-hover:text-neon-magenta transition-colors">tamizhtechpvtltd@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-green/10 border border-neon-green/30 shrink-0"><MapPin className="w-5 h-5 text-neon-green" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-violet/10 border border-neon-violet/30 shrink-0"><Clock className="w-5 h-5 text-neon-violet" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Business Hours</p>
                  <p className="text-white font-bold">Mon–Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-7 flex flex-col gap-4">
              <h3 className="font-heading font-bold text-white text-lg">Quick Actions</h3>
              <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20have%20an%20executive%20inquiry." target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-neon-green/10 border border-neon-green/30 text-neon-green font-bold hover:bg-neon-green/20 transition-all text-sm">
                <MessageCircle className="w-4 h-4" /> Executive WhatsApp
              </a>
              <a href="mailto:tamizhtechpvtltd@gmail.com"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-neon-orange/10 border border-neon-orange/30 text-neon-orange font-bold hover:bg-neon-orange/20 transition-all text-sm">
                <Mail className="w-4 h-4" /> Executive Email
              </a>
              <a href="tel:+918148045030"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta font-bold hover:bg-neon-magenta/20 transition-all text-sm">
                <Phone className="w-4 h-4" /> Executive Hotline
              </a>
            </div>

            {/* Socials */}
            <div className="glass-card p-7 flex flex-col gap-4">
              <h3 className="font-heading font-bold text-white text-lg">Connect With Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.linkedin.com/company/tamizh-tech-robotics-company" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:text-neon-orange hover:border-neon-orange/30 transition-all text-sm font-bold">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://www.instagram.com/tamizh_tech_pvt_ltd" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:text-neon-magenta hover:border-neon-magenta/30 transition-all text-sm font-bold">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="https://youtube.com/@covaiscientist" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:text-red-400 hover:border-red-500/30 transition-all text-sm font-bold">
                  <Youtube className="w-4 h-4" /> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
