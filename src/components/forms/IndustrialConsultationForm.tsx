"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const PROJECT_TYPES = [
  "Industrial Automation",
  "Robotics Integration",
  "PLC",
  "SCADA",
  "Machine Vision",
  "Computer Vision",
  "AI",
  "IoT",
  "Custom Automation",
  "Other",
];

const INDUSTRIES = [
  "Automotive & Components",
  "Textile & Garments",
  "Foundry & Casting",
  "Pumps & Motors",
  "Electronics & PCB",
  "FMCG & Packaging",
  "General Engineering",
  "Other",
];

const TIMELINES = [
  "Immediate (< 1 Month)",
  "1 — 3 Months",
  "3 — 6 Months",
  "Exploratory / Planning",
];

export default function IndustrialConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "Automotive & Components",
    projectType: "Industrial Automation",
    city: "",
    state: "Tamil Nadu",
    timeline: "1 — 3 Months",
    requirement: "",
    preferredContactMethod: "Phone",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [leadId, setLeadId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "Industry Enquiry",
          source: "Industries Page",
          pageUrl: "https://www.tamizhtech.in/industries",
          customerName: form.name,
          organization: form.company,
          customerType: "Industry",
          email: form.email,
          phone: form.phone,
          city: form.city,
          state: form.state,
          subject: `${form.projectType} — ${form.industry}`,
          requirement: `${form.projectType} (${form.timeline})`,
          message: `Industry: ${form.industry}, Timeline: ${form.timeline}. Requirements: ${form.requirement}`,
          preferredContactMethod: form.preferredContactMethod,
          honeypot: form.honeypot,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setLeadId(data.leadId || "");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit consultation request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please verify connection and try again.");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Tamizh Tech! I am interested in Industrial Automation solutions for: ${form.company || "my company"}.\nProject: ${form.projectType}\nTimeline: ${form.timeline}\n${leadId ? `Reference ID: ${leadId}\n` : ""}Please connect me with an automation engineer.`
  );

  const formInputClass =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-xs transition-all";

  if (status === "success") {
    return (
      <div className="text-center py-12 space-y-5">
        <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
        <div>
          <h4 className="text-2xl font-black font-heading uppercase text-text-primary">
            Audit & Consultation Request Received
          </h4>
          <p className="text-sm text-text-secondary max-w-lg mx-auto mt-2 leading-relaxed">
            Thank you, <span className="font-bold text-text-primary">{form.name}</span>. Our Coimbatore industrial robotics and automation team will review your specifications and get in touch within 24 business hours.
          </p>
        </div>

        {leadId && (
          <div className="bg-subtle p-4 rounded-2xl border border-border inline-block min-w-[280px]">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">
              Official Lead Reference ID
            </span>
            <span className="text-xl font-black font-mono text-accent">
              {leadId}
            </span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={`https://wa.me/918148045030?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" /> Priority WhatsApp Chat
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-subtle hover:bg-border/60 text-text-primary font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot Spam Trap */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="ind_hp">Leave empty</label>
        <input
          type="text"
          id="ind_hp"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        />
      </div>

      {status === "error" && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Contact Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Contact Name <span className="text-accent">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Er. Karthik R."
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={formInputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Company / Plant Name <span className="text-accent">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Precision Castings Ltd"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={formInputClass}
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Business Email <span className="text-accent">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="karthik@precisioncast.in"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={formInputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Direct Phone Number <span className="text-accent">*</span>
          </label>
          <input
            required
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={formInputClass}
          />
        </div>
      </div>

      {/* Row 3: Industry & Project Type & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Industry Vertical
          </label>
          <select
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            className={formInputClass + " cursor-pointer"}
          >
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Project Type <span className="text-accent">*</span>
          </label>
          <select
            value={form.projectType}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            className={formInputClass + " cursor-pointer"}
          >
            {PROJECT_TYPES.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Expected Timeline
          </label>
          <select
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className={formInputClass + " cursor-pointer"}
          >
            {TIMELINES.map((tl) => (
              <option key={tl} value={tl}>
                {tl}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: City, State, Contact Method */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            City / Plant Location
          </label>
          <input
            type="text"
            placeholder="e.g. Coimbatore"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={formInputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            State
          </label>
          <input
            type="text"
            placeholder="e.g. Tamil Nadu"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className={formInputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Preferred Callback
          </label>
          <select
            value={form.preferredContactMethod}
            onChange={(e) => setForm({ ...form, preferredContactMethod: e.target.value })}
            className={formInputClass + " cursor-pointer"}
          >
            <option value="Phone">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      {/* Row 5: Technical Requirements */}
      <div className="flex flex-col gap-2 text-left">
        <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
          Technical Requirement Details <span className="text-accent">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe your current manual process, machinery brand names (Siemens, Mitsubishi, Delta), target cycle time improvements, or vision inspection tolerances..."
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          className={formInputClass + " resize-none"}
        />
      </div>

      {/* Row 6: Submit Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-1 justify-center py-4 px-6 bg-[#FF6A00] hover:bg-[#E05300] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 transition-all inline-flex items-center disabled:opacity-50 cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              Schedule Audit & Consult <Send className="w-4 h-4 ml-1.5" />
            </>
          )}
        </button>
        <a
          href={`https://wa.me/918148045030?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 block"
        >
          <Button
            type="button"
            variant="secondary"
            className="w-full justify-center py-4 gap-2 border-border hover:border-accent text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-600" /> Talk to Automation Expert
          </Button>
        </a>
      </div>
    </form>
  );
}
