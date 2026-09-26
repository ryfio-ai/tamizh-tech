"use client";

import { Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck, User, Building, MessageSquare, Compass } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { COMMON_COUNTRY_CODES } from "@/lib/phoneNormalization";
import { submitPublicForm, generateIdempotencyKey } from "@/lib/erpApi";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    mobile: "",
    phone: "",
    email: "",
    city: "",
    company: "",
    purpose: "General Inquiry",
    message: "",
    callbackMode: "WhatsApp"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const cleanMobile = form.mobile.replace(/\D/g, "");
      if (!cleanMobile || cleanMobile.length !== 10) {
        setError("Please enter a valid 10-digit mobile number.");
        setIsSubmitting(false);
        return;
      }

      const activeKey = idempotencyKey || generateIdempotencyKey();
      if (!idempotencyKey) {
        setIdempotencyKey(activeKey);
      }

      const result = await submitPublicForm({
        type: "CONTACT",
        idempotencyKey: activeKey,
        payload: {
          name: form.name.trim(),
          mobile: `${form.countryCode} ${cleanMobile}`,
          email: form.email.trim() || undefined,
          company: form.company.trim() || undefined,
          city: form.city.trim() || undefined,
          state: "Tamil Nadu",
          subject: `Inquiry: ${form.purpose} — ${form.name.trim()}`,
          message: form.message.trim() || `Inquiry regarding ${form.purpose}. Preferred callback: ${form.callbackMode}`,
        },
      });

      setLeadId(result.submissionNo);
      setIsSuccess(true);
      setIdempotencyKey(""); // Clear key on success
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      if (err.code === "IDEMPOTENCY_KEY_REUSE") {
        setIdempotencyKey(""); // Reset token on key reuse error
      }
      setError(err.message || "We couldn't reach our submission service right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Contact Our Engineering Team"
        subtitle="Connect with Tamizh Tech Robotics Company for school lab setups, robotic products, training courses, or industrial automation consultations."
        breadcrumbActive="Contact"
      />

      <section className="section bg-white py-16 md:py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Get in Touch</span>
                <h2 className="text-2xl md:text-3xl font-black text-[#002B66] font-heading uppercase tracking-tight">
                  We are here to help your team build
                </h2>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  Have a question about our robots, courses, or industrial automation services? Reach out directly or send us a message through the form.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-accent rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line / WhatsApp</p>
                    <a href="tel:+918148045030" className="text-base font-bold text-slate-900 hover:text-accent transition-colors">+91 81480 45030</a>
                    <p className="text-xs text-slate-500 mt-0.5">Mon - Sat, 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-accent rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Official Inquiry Email</p>
                    <a href="mailto:contact@tamizhtech.in" className="text-base font-bold text-slate-900 hover:text-accent transition-colors break-all">contact@tamizhtech.in</a>
                    <p className="text-xs text-slate-500 mt-0.5">Responses within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-accent rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Engineering HQ</p>
                    <p className="text-sm font-bold text-slate-900 leading-snug">Thiruchendur Gdn Rd, Kurumbapalayam SSKulam,<br />Coimbatore, Tamil Nadu 641107</p>
                  </div>
                </div>
              </div>

              <Card className="bg-orange-50/40 border border-orange-200/80 p-6 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Regional Engineering Support
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Tamizh Tech provides technical training and industrial implementations across Tamil Nadu, Karnataka, Kerala, and across India with on-ground engineering support.
                  </p>
                  <Link href="/about" className="text-xs font-bold text-accent hover:text-accent-hover inline-flex items-center gap-1.5">
                    Learn about TamizhTech <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </div>

            {/* Right Column: High-Visibility Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              {isSuccess ? (
                <Card className="border-2 border-accent p-10 md:p-14 text-center shadow-xl rounded-3xl space-y-5 bg-white">
                  <div className="w-16 h-16 rounded-full bg-orange-100 border-2 border-accent flex items-center justify-center text-accent mx-auto">
                    <Send className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Message Received!</h2>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
                    Thank you, <span className="text-accent font-bold">{form.name}</span>. We have received your inquiry regarding <span className="text-slate-900 font-bold">{form.purpose}</span>. An engineer will contact you via <span className="text-accent font-bold underline underline-offset-4">{form.callbackMode}</span> within 24 business hours.
                  </p>
                  {leadId && (
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 inline-block">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Reference ID</span>
                      <span className="text-base font-black font-mono text-accent">{leadId}</span>
                    </div>
                  )}
                  <div className="pt-4">
                    <button 
                      type="button" 
                      onClick={() => {
                        setIsSuccess(false);
                        setLeadId("");
                        setIdempotencyKey("");
                        setForm({
                          name: "",
                          countryCode: "+91",
                          mobile: "",
                          phone: "",
                          email: "",
                          city: "",
                          company: "",
                          purpose: "General Inquiry",
                          message: "",
                          callbackMode: "WhatsApp",
                        });
                      }}
                      className="px-6 py-3 rounded-xl border border-slate-300 font-bold text-xs uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </Card>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="bg-white border-2 border-slate-200 shadow-xl rounded-3xl p-8 lg:p-10 space-y-6"
                >
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-[11px] font-black text-accent uppercase tracking-widest block mb-1">Quick Contact Form</span>
                    <h3 className="text-2xl font-black font-heading text-[#002B66] uppercase tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out this quick form and our team will get back to you immediately.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 font-semibold text-xs rounded-r-lg">
                      {error}
                    </div>
                  )}

                  {/* Primary Contact Details (2 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Ramesh Kumar"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Mobile Number (10 digits) <span className="text-accent">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={form.countryCode}
                          onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                          className="w-[100px] bg-white border border-slate-300 rounded-xl px-2.5 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all"
                          aria-label="Country Code"
                        >
                          {COMMON_COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                        <div className="relative flex-1">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            required
                            type="tel"
                            maxLength={10}
                            placeholder="9876543210"
                            value={form.mobile}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                              setForm({ ...form, mobile: val, phone: `${form.countryCode} ${val}`.trim() });
                            }}
                            className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all font-mono tracking-wide"
                          />
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Enter 10-digit national mobile number (country code is set separately)
                      </span>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          required
                          type="email"
                          placeholder="e.g. ramesh@gmail.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* City / Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        City / Location <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Coimbatore / Chennai / Bengaluru"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Purpose of Contact & Organization */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Purpose */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Purpose for Contact <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <Compass className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <select
                          value={form.purpose}
                          onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-8 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all cursor-pointer appearance-none"
                        >
                          <option value="General Inquiry">General Inquiry / Question</option>
                          <option value="Industrial Automation">Industrial Automation / PLC / Vision</option>
                          <option value="School STEM Lab">School STEM / Tinkering Lab Setup</option>
                          <option value="College Training">College Workshop / Training Program</option>
                          <option value="Robotics Products">Product Purchase / Competition Bots</option>
                          <option value="3D Printing">3D Printing / Prototyping Services</option>
                          <option value="Other">Other Requirement</option>
                        </select>
                      </div>
                    </div>

                    {/* Organization / College / Company Name (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Organization / College <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="e.g. PSG Tech / Acme Corp / School"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Requirement Details / Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={3}
                        placeholder="Briefly describe what you're looking for (specifications, student count, timeline, etc.)..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-sm transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Callback Mode & Submit Button */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Preferred Callback Mode
                      </span>
                      <div className="flex gap-4">
                        {["WhatsApp", "Phone", "Email"].map((mode) => (
                          <label key={mode} className="inline-flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="callbackMode"
                              value={mode}
                              checked={form.callbackMode === mode}
                              onChange={() => setForm({ ...form, callbackMode: mode })}
                              className="accent-[#FF6A00] w-4 h-4 cursor-pointer"
                            />
                            <span className="text-xs font-bold text-slate-700">{mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Big Bold High-Visibility Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FF6A00] hover:bg-[#E05300] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Transmitting..." : "Send Message"}
                      <Send className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container px-6">
          <div className="mb-6">
            <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1">Find Us</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#002B66] uppercase tracking-tight font-heading">
              Our Engineering HQ in Coimbatore
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Thiruchendur Gdn Rd, Kurumbapalayam SSKulam, Coimbatore, Tamil Nadu 641107
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-md w-full" style={{ height: '380px' }}>
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
