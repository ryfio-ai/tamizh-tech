"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, Send, Wrench, ShieldCheck, ArrowRight, Layers, Cpu, Scissors, Printer, Bot, Factory, FlaskConical, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  { id: "3d-printing", label: "3D Printing", subtitle: "Prototypes, Custom Parts, Miniatures (PLA/PETG/TPU)", icon: Printer },
  { id: "laser-cutting", label: "Laser Cutting", subtitle: "Stainless Steel Cutting (Not Wood)", icon: Scissors },
  { id: "pcb-services", label: "PCB Services", subtitle: "Design + Fabrication + Assembly", icon: Cpu },
  { id: "robotics", label: "Robotics & Automation", subtitle: "Custom Autonomous & Manipulator Systems", icon: Bot },
  { id: "industrial-automation", label: "Industrial Automation", subtitle: "PLC, SCADA & Factory Lines", icon: Factory },
  { id: "stem-labs", label: "STEM Lab Setup", subtitle: "School & College ATL / Innovation Labs", icon: FlaskConical },
  { id: "products", label: "Robotics Kits & Products", subtitle: "Competition Bots & FlySky Controllers", icon: Layers },
  { id: "training", label: "Training & Workshops", subtitle: "Hands-on Technical Upskilling", icon: GraduationCap },
  { id: "custom-engineering", label: "Custom Engineering / R&D", subtitle: "Bespoke Hardware & Prototyping", icon: Wrench },
];

export function QuoteModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [selectedService, setSelectedService] = useState<string>("3d-printing");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    city: "Coimbatore",
    requirement: "",
    // Service-specific optional details
    quantity: "1",
    hasDesign: "Yes, 3D model/CAD ready",
    partCategory: "Prototypes",
    material: "PLA (High Precision & Smooth Finish)",
    laserMaterial: "Stainless Steel SS 304",
    pcbLayers: "2-Layer",
    preferredCallback: "WhatsApp" as "WhatsApp" | "Phone" | "Email",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    if (defaultService) {
      const match = SERVICE_OPTIONS.find(s => s.id === defaultService || s.label.toLowerCase() === defaultService.toLowerCase());
      if (match) setSelectedService(match.id);
    }
  }, [defaultService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset status on close if success
      if (status === "success") {
        setStatus("idle");
        setLeadId("");
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, status]);

  if (!isOpen) return null;

  const currentServiceObj = SERVICE_OPTIONS.find(s => s.id === selectedService) || SERVICE_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Build structured requirement message
      let specificNotes = `Selected Category: ${currentServiceObj.label} (${currentServiceObj.subtitle})`;
      if (selectedService === "3d-printing") {
        specificNotes += ` | Quantity: ${formData.quantity} | Part Type: ${formData.partCategory} | Material: ${formData.material} | CAD Status: ${formData.hasDesign}`;
      } else if (selectedService === "laser-cutting") {
        specificNotes += ` | Quantity: ${formData.quantity} | Material: ${formData.laserMaterial} (SS Metal Only) | CAD/DXF Status: ${formData.hasDesign}`;
      } else if (selectedService === "pcb-services") {
        specificNotes += ` | Quantity: ${formData.quantity} | Schematic Status: ${formData.hasDesign} | Board Spec: ${formData.pcbLayers}`;
      }

      const fullMessage = formData.requirement
        ? `${specificNotes}\n\nCustomer Requirements:\n${formData.requirement}`
        : specificNotes;

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "Quote",
          source: "Navbar / Footer Get a Quote",
          pageUrl: typeof window !== "undefined" ? window.location.href : "https://www.tamizhtech.in/",
          customerName: formData.name,
          email: formData.email,
          phone: formData.phone,
          mobile: formData.phone,
          city: formData.city || "Coimbatore",
          organization: formData.organization || "Individual / Student",
          institution: formData.organization || "Individual / Student",
          areaOfInterest: currentServiceObj.label,
          subject: `Quote Request: ${currentServiceObj.label} — ${formData.name}`,
          requirement: currentServiceObj.label,
          message: fullMessage,
          preferredContactMethod: formData.preferredCallback,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to log quote inquiry. Please try again.");
      }

      setLeadId(result.leadId || `TT-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(1000 + Math.random() * 9000)}`);
      setStatus("success");
    } catch (err: any) {
      setErrorMessage(err.message || "Network Error: Unable to transmit quote request.");
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Get a Quote"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]" />
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Request a Technical Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Your Quote Request Has Been Received!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our engineering team at Coimbatore has received your requirement for <strong className="text-[#FF6B00]">{currentServiceObj.label}</strong>.
              </p>
              <div className="inline-block p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1">
                <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Reference Tracking ID</div>
                <div className="font-mono font-bold text-base text-slate-900">{leadId}</div>
                <div className="text-slate-500">Official confirmation dispatched to {formData.email}</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-sm rounded-xl shadow-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Question 1: What do you need? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  1. What do you need? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICE_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedService === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedService(opt.id)}
                        className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "border-[#FF6B00] bg-orange-50/70 text-slate-900 shadow-2xs"
                            : "border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${isSelected ? "text-[#FF6B00]" : "text-slate-400"}`} />
                          <span className="text-xs font-bold truncate">{opt.label}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 line-clamp-1">{opt.subtitle}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Service specific contextual parameters */}
              {(selectedService === "3d-printing" || selectedService === "laser-cutting" || selectedService === "pcb-services") && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
                  <div className="font-bold text-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{currentServiceObj.label} Specifications</span>
                    </div>
                    {selectedService === "laser-cutting" && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Metal Only (Not Wood)
                      </span>
                    )}
                    {selectedService === "3d-printing" && (
                      <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                        PLA &bull; PETG &bull; TPU
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 1 unit, 5 prototypes, 100 pcs"
                        className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">CAD / Design Readiness</label>
                      <select
                        value={formData.hasDesign}
                        onChange={(e) => setFormData({ ...formData, hasDesign: e.target.value })}
                        className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                      >
                        <option value="Yes, 3D model/CAD ready">Yes, CAD / 3D Model / DXF is ready</option>
                        <option value="Need CAD / 3D Design Support">Need Design / CAD Assistance</option>
                        <option value="Have Rough Dimensions Only">Have Rough Sketch / Dimensions</option>
                      </select>
                    </div>

                    {/* 3D Printing specific fields */}
                    {selectedService === "3d-printing" && (
                      <>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Print Material *</label>
                          <select
                            value={formData.material}
                            onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                          >
                            <option value="PLA (High Precision & Smooth Finish)">PLA (High Precision & Smooth Finish)</option>
                            <option value="PETG (High Strength & Durability)">PETG (High Strength & Durability)</option>
                            <option value="TPU (Flexible & Impact Resistant)">TPU (Flexible & Impact Resistant)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Part Type *</label>
                          <select
                            value={formData.partCategory}
                            onChange={(e) => setFormData({ ...formData, partCategory: e.target.value })}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                          >
                            <option value="Prototypes">Prototypes</option>
                            <option value="Custom Parts">Custom Parts</option>
                            <option value="Robotic Components">Robotic Components</option>
                            <option value="Miniatures">Miniatures</option>
                            <option value="Enclosures / Housings">Enclosures / Housings</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Laser Cutting specific fields */}
                    {selectedService === "laser-cutting" && (
                      <>
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Laser Cutting Material (Stainless Steel Only) *</label>
                          <select
                            value={formData.laserMaterial}
                            onChange={(e) => setFormData({ ...formData, laserMaterial: e.target.value })}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                          >
                            <option value="Stainless Steel SS 304">Stainless Steel (SS 304 - Standard Engineering Grade)</option>
                            <option value="Stainless Steel SS 316">Stainless Steel (SS 316 - High Corrosion Resistant)</option>
                            <option value="Custom Stainless Steel Sheet Metal">Custom Stainless Steel Sheet Metal / Brackets</option>
                          </select>
                          <p className="text-[10px] text-slate-500 mt-1">
                            * We specialize exclusively in stainless steel and sheet metal cutting. We do not provide wood, MDF, or acrylic laser cutting.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Details */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  2. Contact & Project Details <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand R"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / College / Company</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. PSG Tech / Private Ltd / Student"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Project Requirements / Notes</label>
                  <textarea
                    rows={3}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Describe your dimensions, material, deadline, or engineering specifications..."
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              {/* Error prompt */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Coimbatore Engineering Response</span>
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-sm rounded-xl shadow-sm transition-colors disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Quote...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
