"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, MessageCircle, Zap, CheckCircle2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function JoinClubPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    status: "",
    address: "",
    purpose: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/join-club", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)]">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-cyber-gradient z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-cyber-grid opacity-20 z-0 pointer-events-none" />

      {/* Hero Header */}
      <section className="relative py-12 md:py-20 text-center z-10">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-neon-orange uppercase">Member Application</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4 leading-tight">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-magenta">Robotics Club</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Fill out the form below to apply for TamizhTech Robotics Club membership. Our team will review your application and get back to you shortly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-24 z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 p-1 md:p-2 group">
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-xl bg-neon-dark/80 backdrop-blur-md p-6 md:p-10">
              
              {isSuccess ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-neon-orange/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-orange/50 shadow-neon-orange/20">
                    <Zap className="w-10 h-10 text-neon-orange animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">Application Submitted!</h3>
                  <p className="text-slate-300 text-lg mb-4 max-w-md mx-auto">
                    Thank you for applying, <span className="text-neon-orange font-bold">{formData.name}</span>! We&apos;ve received your application and will contact you at <span className="text-white/80">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", mobile: "", email: "", status: "", address: "", purpose: "" });
                    }}
                    className="mt-6 text-sm font-bold text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-2xl font-heading font-bold text-white">Membership Application</h2>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400 text-sm">
                      <Zap className="w-4 h-4 rotate-180" /> {error}
                    </div>
                  )}

                  {/* Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                        placeholder="e.g. Tamizharasan K"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mobile" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mobile Number *</label>
                      <input 
                        type="tel" 
                        id="mobile" 
                        name="mobile" 
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                        placeholder="+91 81480 45030"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Status *</label>
                    <select 
                      id="status" 
                      name="status" 
                      required
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full bg-[#0d1524] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                    >
                      <option value="" disabled className="text-slate-500">Select your status</option>
                      <option value="school">School Student</option>
                      <option value="college">College Student</option>
                      <option value="professional">Working Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Address *</label>
                    <textarea 
                      id="address" 
                      name="address" 
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors resize-none"
                      placeholder="Enter your complete address with city and pincode"
                    />
                  </div>

                  {/* Purpose */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="purpose" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Purpose of Joining the Club *</label>
                    <textarea 
                      id="purpose" 
                      name="purpose" 
                      required
                      rows={4}
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-neon-orange transition-colors resize-none"
                      placeholder="Why do you want to join? (e.g. To build combat bots, learn IoT, compete in college fests...)"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/10 mt-2">
                    <p className="text-xs text-slate-400">
                      By submitting this form, you agree to TamizhTech&apos;s terms and conditions.
                    </p>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-neon-orange text-black font-bold text-lg rounded-md hover:bg-white hover:shadow-neon-orange disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <Zap className="w-5 h-5 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5" /> Submit Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  
                </form>
              )}
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center text-slate-400">
            <p className="mb-4">Need help filling out the form or have questions?</p>
            <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20have%20a%20question%20about%20joining%20the%20club." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon-magenta hover:text-white transition-colors font-bold pb-1 border-b border-neon-magenta hover:border-white">
              <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
