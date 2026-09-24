"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  User,
  Phone,
  Mail,
  Building,
  GraduationCap,
  Calendar,
  Briefcase,
  FileText,
  Upload,
  Loader2,
  AlertCircle,
  FileCheck,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitPublicForm, uploadCareerResume, generateIdempotencyKey, validateResumeFileLocally } from "@/lib/erpApi";
import { AttachmentMetadata } from "@/types/erp";

type CareerFormState =
  | "IDLE"
  | "FILE_SELECTED"
  | "UPLOADING"
  | "FILE_READY"
  | "SUBMITTING"
  | "SUCCESS"
  | "ERROR";

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    institution: "",
    department: "",
    graduationYear: "",
    areaOfInterest: "Robotics Hardware & Mechanical Design",
    linkedin: "",
    message: "",
    honeypot: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [attachmentMetadata, setAttachmentMetadata] = useState<AttachmentMetadata | null>(null);
  const [idempotencyKey, setIdempotencyKey] = useState<string>("");

  const [status, setStatus] = useState<CareerFormState>("IDLE");
  const [leadId, setLeadId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError("");
    setErrorMsg("");

    const localCheck = validateResumeFileLocally(file);
    if (!localCheck.isValid) {
      setUploadError(localCheck.error || "Please select a valid PDF, DOC, or DOCX resume.");
      setSelectedFile(null);
      setAttachmentMetadata(null);
      setStatus("ERROR");
      return;
    }

    setSelectedFile(file);
    setStatus("FILE_SELECTED");

    // Preserve active idempotencyKey or generate a stable one for this submission attempt
    const activeKey = idempotencyKey || generateIdempotencyKey();
    if (!idempotencyKey) {
      setIdempotencyKey(activeKey);
    }

    // Automatically perform private upload to ERP
    setStatus("UPLOADING");
    try {
      const metadata = await uploadCareerResume({
        file,
        idempotencyKey: activeKey,
      });
      setAttachmentMetadata(metadata);
      setStatus("FILE_READY");
    } catch (err: any) {
      setUploadError(err.message || "We couldn't upload your resume. Please try again.");
      setAttachmentMetadata(null);
      setStatus("ERROR");
    }
  };

  const handleRetryUpload = async () => {
    if (!selectedFile) return;
    setUploadError("");
    setStatus("UPLOADING");

    const activeKey = idempotencyKey || generateIdempotencyKey();
    if (!idempotencyKey) {
      setIdempotencyKey(activeKey);
    }

    try {
      const metadata = await uploadCareerResume({
        file: selectedFile,
        idempotencyKey: activeKey,
      });
      setAttachmentMetadata(metadata);
      setStatus("FILE_READY");
    } catch (err: any) {
      setUploadError(err.message || "We couldn't upload your resume. Please try again.");
      setStatus("ERROR");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "SUBMITTING" || status === "UPLOADING") return;

    // Must have a valid uploaded resume before submitting
    if (!attachmentMetadata) {
      setErrorMsg("Please select and upload your resume (PDF/DOC/DOCX, max 5MB) before submitting.");
      return;
    }

    setStatus("SUBMITTING");
    setErrorMsg("");

    try {
      const activeKey = idempotencyKey || generateIdempotencyKey();
      if (!idempotencyKey) {
        setIdempotencyKey(activeKey);
      }

      const cleanMobile = formData.mobile.replace(/\D/g, "");

      const notesArr = [];
      if (formData.message) notesArr.push(formData.message);
      if (formData.linkedin) notesArr.push(`LinkedIn: ${formData.linkedin}`);

      const result = await submitPublicForm({
        type: "CAREER",
        idempotencyKey: activeKey,
        payload: {
          name: formData.name.trim(),
          mobile: cleanMobile || undefined,
          email: formData.email.trim() || undefined,
          position: formData.areaOfInterest,
          qualification: formData.department || undefined,
          experience: formData.graduationYear ? `Class of ${formData.graduationYear}` : undefined,
          location: formData.institution || undefined,
          coverMessage: notesArr.length > 0 ? notesArr.join(" | ") : undefined,
          attachmentMetadata,
        },
      });

      setStatus("SUCCESS");
      setLeadId(result.submissionNo);
      setIdempotencyKey(""); // Reset for any subsequent fresh application
    } catch (err: any) {
      if (err.code === "IDEMPOTENCY_KEY_REUSE") {
        setIdempotencyKey("");
      }
      setStatus("ERROR");
      setErrorMsg(err.message || "We couldn't submit your application right now. Please try again.");
    }
  };

  if (status === "SUCCESS") {
    return (
      <div className="bg-white border-2 border-accent/40 rounded-3xl p-8 sm:p-12 text-center shadow-lg animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black uppercase text-[#002B66] tracking-tight mb-2">
          Application Successfully Received!
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <strong>{formData.name}</strong>. Your application for{" "}
          <strong>{formData.areaOfInterest}</strong> has been logged into our talent system.
        </p>
        {leadId && (
          <div className="inline-block bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-center mb-6">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
              Application Reference
            </span>
            <span className="text-base font-black font-mono text-accent">{leadId}</span>
          </div>
        )}
        <div>
          <Button
            variant="outline"
            onClick={() => {
              setStatus("IDLE");
              setLeadId("");
              setSelectedFile(null);
              setAttachmentMetadata(null);
              setIdempotencyKey("");
              setFormData({
                name: "",
                mobile: "",
                email: "",
                institution: "",
                department: "",
                graduationYear: "",
                areaOfInterest: "Robotics Hardware & Mechanical Design",
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

  const inputClass =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20 shadow-xs transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 text-left shadow-xl space-y-6"
    >
      <div className="border-b border-border pb-4">
        <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
          Career Opportunity Desk
        </span>
        <h3 className="text-2xl font-black font-heading text-[#002B66] uppercase tracking-tight">
          General Career &amp; Internship Application
        </h3>
        <p className="text-xs text-text-muted mt-1">
          Submit your candidate profile directly to our engineering coordinators.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-semibold rounded-r-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
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

      {/* Row 1: Name & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <User className="w-3 h-3 text-accent" /> Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Anand Kumar"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-accent" /> Mobile / WhatsApp *
          </label>
          <input
            type="tel"
            required
            maxLength={10}
            placeholder="9876543210 (10 digits)"
            value={formData.mobile}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
              setFormData({ ...formData, mobile: val });
            }}
            className={`${inputClass} font-mono tracking-wide`}
          />
        </div>
      </div>

      {/* Row 2: Email & LinkedIn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3 h-3 text-accent" /> Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="anand@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            LinkedIn Profile / GitHub (Optional)
          </label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/..."
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3: College, Dept & Grad Year */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Building className="w-3 h-3 text-accent" /> College / Institution *
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

        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3 h-3 text-accent" /> Department / Branch *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Robotics &amp; Automation / ECE"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className={inputClass}
          />
        </div>

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

      {/* Row 4: Role & Resume Upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-3 h-3 text-accent" /> Target Role / Domain *
          </label>
          <select
            value={formData.areaOfInterest}
            onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
            className={`${inputClass} cursor-pointer`}
          >
            <option>Robotics Hardware &amp; Mechanical Design</option>
            <option>IoT &amp; Smart Connected Devices</option>
            <option>Full Stack Web &amp; Cloud Development</option>
            <option>Embedded Systems &amp; Firmware Engineer (STM32 / ESP32)</option>
            <option>Industrial Automation &amp; PLC / SCADA</option>
            <option>Artificial Intelligence &amp; Computer Vision</option>
            <option>Autonomous Mobile Robots &amp; ROS (AMR / AGV)</option>
            <option>Drone Technology &amp; UAV Flight Systems</option>
            <option>PCB Design &amp; Hardware Architecture</option>
            <option>STEM Educator / Technical Trainer</option>
            <option>Sales, Marketing &amp; BD Executive</option>
            <option>Internship / Student Project Trainee</option>
            <option>Other / Open Application</option>
          </select>
        </div>

        {/* Dedicated Secure Resume Upload */}
        <div>
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1 flex items-center gap-1.5">
            <Upload className="w-3 h-3 text-accent" /> Resume Upload (PDF / DOC / DOCX, max 5MB) *
          </label>
          <span className="text-[9px] text-text-muted block mb-1.5 font-medium">
            Directly uploaded to our secure private candidate repository.
          </span>

          <div className="relative">
            <input
              type="file"
              id="resume-file-input"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              disabled={status === "UPLOADING" || status === "SUBMITTING"}
              className="hidden"
            />

            {!attachmentMetadata && status !== "UPLOADING" && (
              <label
                htmlFor="resume-file-input"
                className="flex items-center justify-between border-2 border-dashed border-slate-300 hover:border-[#FF6A00] rounded-xl px-4 py-3 cursor-pointer transition-colors bg-slate-50 hover:bg-orange-50/40"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Upload className="w-4 h-4 text-accent" />
                  <span>Choose Resume File...</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">PDF, DOC, DOCX</span>
              </label>
            )}

            {status === "UPLOADING" && (
              <div className="flex items-center gap-3 border border-orange-200 bg-orange-50 rounded-xl px-4 py-3">
                <Loader2 className="w-4 h-4 text-accent animate-spin shrink-0" />
                <div className="text-xs font-semibold text-slate-700">
                  <span>Uploading resume securely...</span>
                </div>
              </div>
            )}

            {attachmentMetadata && status !== "UPLOADING" && (
              <div className="flex items-center justify-between border border-emerald-300 bg-emerald-50 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800 truncate">
                    {attachmentMetadata.fileName}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono shrink-0">
                    ({Math.round(attachmentMetadata.size / 1024)} KB)
                  </span>
                </div>
                <label
                  htmlFor="resume-file-input"
                  className="text-[11px] font-bold text-accent hover:underline cursor-pointer ml-2 shrink-0 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Change
                </label>
              </div>
            )}

            {uploadError && (
              <div className="mt-2 text-[11px] font-bold text-red-600 flex items-center justify-between">
                <span>{uploadError}</span>
                {selectedFile && (
                  <button
                    type="button"
                    onClick={handleRetryUpload}
                    className="underline text-accent hover:text-accent-hover text-[10px] cursor-pointer"
                  >
                    Retry Upload
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Row 5: Key Projects / Skills */}
      <div>
        <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-accent" /> Key Projects / Technical Skills / Notes
        </label>
        <textarea
          rows={3}
          placeholder="Highlight robotics competitions, microcontrollers (ESP32, STM32, Arduino), software libraries (OpenCV, ROS, Python), or notable projects..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "SUBMITTING" || status === "UPLOADING"}
          className="w-full py-4 justify-center text-sm font-bold uppercase tracking-wider gap-2 shadow-lg shadow-orange-500/25 cursor-pointer bg-[#FF6A00] hover:bg-[#E05300] text-white rounded-xl inline-flex items-center transition-all disabled:opacity-50"
        >
          {status === "SUBMITTING" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
            </>
          ) : status === "UPLOADING" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Uploading Resume...
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
