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
    // School Details
    standard: "",
    schoolName: "",
    schoolLocation: "",
    // College Details
    department: "",
    yearOfStudy: "",
    collegeName: "",
    collegeLocation: "",
    // Professional Details
    organizationName: "",
    role: "",
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
    <div className="w-full min-h-[calc(100vh-80px)] hero-gradient">
      {/* Hero Header */}
      <section className="relative py-12 md:py-20 text-center z-10">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Member Application</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-text-main mb-4 leading-tight">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Robotics Club</span>
          </h1>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Fill out the form below to apply for Tamil Robotics Club (TRC) membership. Our team will review your application and get back to you shortly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-24 z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-border-subtle p-1 md:p-2 group">
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-xl bg-bg-elevated p-6 md:p-10 shadow-elevated">
              
              {isSuccess ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
                    <CheckCircle2 className="w-10 h-10 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-text-main mb-2">Application Submitted!</h3>
                  <p className="text-text-body text-lg mb-4 max-w-md mx-auto">
                    Thank you for applying to the Tamil Robotics Club (TRC), <span className="text-primary font-bold">{formData.name}</span>! We&apos;ve received your application and will contact you at <span className="text-text-muted">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                    setFormData({ 
                      name: "", mobile: "", email: "", status: "", 
                      standard: "", schoolName: "", schoolLocation: "",
                      department: "", yearOfStudy: "", collegeName: "", collegeLocation: "",
                      organizationName: "", role: "",
                      address: "", purpose: "" 
                    });
                    }}
                    className="mt-6 text-sm font-bold text-text-muted hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-2xl font-heading font-bold text-text-main">TRC Membership Application</h2>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-500 text-sm">
                      <Zap className="w-4 h-4 rotate-180" /> {error}
                    </div>
                  )}

                  {/* Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. Tamizharasan K"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mobile" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Mobile Number *</label>
                      <input 
                        type="tel" 
                        id="mobile" 
                        name="mobile" 
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 81480 45030"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Current Status *</label>
                    <select 
                      id="status" 
                      name="status" 
                      required
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="" disabled className="text-text-muted">Select your status</option>
                      <option value="school">School Student</option>
                      <option value="college">College Student</option>
                      <option value="professional">Working Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Conditional Fields: School */}
                  {formData.status === "school" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="standard" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Current Standard *</label>
                        <input type="text" id="standard" name="standard" required value={formData.standard} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 10th Standard" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="schoolName" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">School Name *</label>
                        <input type="text" id="schoolName" name="schoolName" required value={formData.schoolName} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. KV School" />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label htmlFor="schoolLocation" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">School Location *</label>
                        <input type="text" id="schoolLocation" name="schoolLocation" required value={formData.schoolLocation} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. RS Puram, Coimbatore" />
                      </div>
                    </div>
                  )}

                  {/* Conditional Fields: College */}
                  {formData.status === "college" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="department" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Department *</label>
                        <input type="text" id="department" name="department" required value={formData.department} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. B.E. Robotics / ECE" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="yearOfStudy" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Year of Study *</label>
                        <input type="text" id="yearOfStudy" name="yearOfStudy" required value={formData.yearOfStudy} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 2nd Year" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="collegeName" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">College Name *</label>
                        <input type="text" id="collegeName" name="collegeName" required value={formData.collegeName} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. PSG Tech" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="collegeLocation" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">College Location *</label>
                        <input type="text" id="collegeLocation" name="collegeLocation" required value={formData.collegeLocation} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Coimbatore" />
                      </div>
                    </div>
                  )}

                  {/* Conditional Fields: Professional */}
                  {formData.status === "professional" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-300">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="organizationName" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Organization Name *</label>
                        <input type="text" id="organizationName" name="organizationName" required value={formData.organizationName} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. TCS / LMW" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="role" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Current Role *</label>
                        <input type="text" id="role" name="role" required value={formData.role} onChange={handleChange} className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Design Engineer" />
                      </div>
                    </div>
                  )}

                  {/* Address */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Full Address *</label>
                    <textarea 
                      id="address" 
                      name="address" 
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Enter your complete address with city and pincode"
                    />
                  </div>

                  {/* Purpose */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="purpose" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Purpose of Joining the Club *</label>
                    <textarea 
                      id="purpose" 
                      name="purpose" 
                      required
                      rows={4}
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full bg-bg-subtle/30 border border-border-subtle rounded-lg px-4 py-3 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Why do you want to join? (e.g. To build combat bots, learn IoT, compete in college fests...)"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-border-subtle mt-2">
                    <p className="text-xs text-text-muted">
                      By submitting this form, you agree to Tamil Robotics Club (TRC) terms and conditions.
                    </p>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-primary text-text-onPrimary font-bold text-lg rounded-md hover:bg-primary-dark shadow-soft disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
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
          <div className="mt-12 text-center text-text-muted">
            <p className="mb-4">Need help filling out the form or have questions?</p>
            <a href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I%20have%20a%20question%20about%20joining%20the%20club." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-bold pb-1 border-b border-primary/30 hover:border-primary">
              <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

