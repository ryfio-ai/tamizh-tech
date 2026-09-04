"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Phone, Mail, Building, GraduationCap, Calendar, Briefcase, Link2, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    institution: "",
    department: "",
    graduationYear: "",
    areaOfInterest: "Robotics Hardware Engineer",
    resume: "",
    linkedin: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [leadId, setLeadId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.mobile,
          email: formData.email,
          college: formData.institution,
          branch: formData.department,
          graduationYear: formData.graduationYear,
          role: formData.areaOfInterest,
          category: "General Application",
          resume: formData.resume,
          linkedin: formData.linkedin,
          experience: formData.graduationYear,
          notes: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setLeadId(data.leadId || "");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Submission failed. Please check fields or apply via WhatsApp.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or reach out on WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border-2 border-accent/40 rounded-3xl p-8 sm:p-12 text-center shadow-lg animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black uppercase text-[#002B66] tracking-tight mb-2">
          Application Successfully Received!
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <strong>{formData.name}</strong>. Your profile for <strong>{formData.areaOfInterest}</strong> has been logged into our talent database.
        </p>
        {leadId && (
          <div className="inline-block bg-subtle border border-border px-4 py-2 rounded-xl text-xs font-mono font-bold text-accent mb-6">
            Application Reference: {leadId}
          </div>
        )}
        <div>
          <Button
            variant="outline"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                mobile: "",
                email: "",
                institution: "",
                department: "",
                graduationYear: "",
                areaOfInterest: "Robotics Hardware Engineer",
                resume: "",
                linkedin: "",
                message: "",
                honeypot: "",
              });
            }}
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-xs transition-all";

  return (
    <form onSubmit={handleSubmit} className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 text-left shadow-xl space-y-6">
      <div className="border-b border-border pb-4">
        <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
          Career Opportunity Desk
        </span>
        <h3 className="text-2xl font-black font-heading text-[#002B66] uppercase tracking-tight">
          General Career & Internship Application
        </h3>
        <p className="text-xs text-text-muted mt-1">
          Submit your candidate profile directly to our engineering coordinators.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-xl">
          {errorMsg}
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Name */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <User className="w-3 h-3 text-accent" /> Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ramesh Kumar"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </div>

        {/* Mobile No */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-accent" /> Mobile Number *
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. 9876543210"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className={inputClass}
          />
        </div>

        {/* Mail ID */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3 h-3 text-accent" /> Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="e.g. ramesh@college.edu"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Institution */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Building className="w-3 h-3 text-accent" /> Institution / College *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. PSG College of Technology"
            value={formData.institution}
            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
            className={inputClass}
          />
        </div>

        {/* Department */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3 h-3 text-accent" /> Department / Branch *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Robotics & Automation / ECE"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className={inputClass}
          />
        </div>

        {/* Graduation Year */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-accent" /> Graduation Year *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 2024 / 2025 / 2026"
            value={formData.graduationYear}
            onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Area of Interest / Role */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-3 h-3 text-accent" /> Area of Interest / Target Role *
          </label>
          <select
            value={formData.areaOfInterest}
            onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
            className={`${inputClass} cursor-pointer`}
          >
            <option>Robotics Hardware & Mechanical Design</option>
            <option>IoT & Smart Connected Devices (Internet of Things)</option>
            <option>Full Stack Web & Cloud Development</option>
            <option>Embedded Systems & Firmware Engineer (STM32 / ESP32)</option>
            <option>Industrial Automation & PLC / SCADA</option>
            <option>Artificial Intelligence & Computer Vision (OpenCV / YOLO)</option>
            <option>Autonomous Mobile Robots & ROS (SLAM / AGV / AMR)</option>
            <option>Drone Technology & UAV Flight Systems</option>
            <option>PCB Design & Hardware Architecture</option>
            <option>STEM Educator / Technical Trainer</option>
            <option>Sales, Marketing & BD Executive</option>
            <option>Internship / Student Project Trainee</option>
            <option>Other / Open Application</option>
          </select>
        </div>

        {/* Resume / Portfolio Link */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1 flex items-center gap-1.5">
            <Link2 className="w-3 h-3 text-accent" /> Resume (Upload in Drive & paste link here) *
          </label>
          <span className="text-[9px] text-text-muted block mb-1.5 font-medium">
            Upload PDF to Google Drive or OneDrive &rarr; Set to &ldquo;Anyone with link can view&rdquo; &rarr; Paste link.
          </span>
          <input
            type="url"
            required
            placeholder="https://drive.google.com/file/d/... or LinkedIn Profile"
            value={formData.resume}
            onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      {/* Message / Brief */}
      <div>
        <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-accent" /> Key Projects / Technical Skills / Notes
        </label>
        <textarea
          rows={3}
          placeholder="Briefly highlight relevant robotics competitions, microcontrollers used (ESP32, STM32), or programming languages (C++, Python)..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-4 justify-center text-sm font-bold uppercase tracking-wider gap-2 shadow-lg shadow-orange-500/25 cursor-pointer bg-[#FF6A00] hover:bg-[#E05300] text-white rounded-xl inline-flex items-center transition-all disabled:opacity-50"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
            </>
          ) : (
            <>
              Submit Career Application <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
