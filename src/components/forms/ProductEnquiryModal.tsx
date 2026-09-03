"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertCircle, Loader2, Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "@/data/products";
import { CustomerType, PreferredContactMethod } from "@/types/lead";
import { getProductUrl } from "@/lib/routing";

interface ProductEnquiryModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  initialQuantity?: number;
  mode?: "quote" | "enquiry";
}

const CUSTOMER_TYPES: CustomerType[] = [
  "Individual",
  "Student",
  "School",
  "College",
  "University",
  "Startup",
  "Business",
  "Industry",
  "Other",
];

export default function ProductEnquiryModal({
  product,
  isOpen,
  onClose,
  initialQuantity = 1,
  mode = "quote",
}: ProductEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    organization: "",
    customerType: "College" as CustomerType,
    quantity: Math.max(1, initialQuantity),
    city: "",
    state: "",
    message: "",
    preferredContactMethod: "Phone" as PreferredContactMethod,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  if (!isOpen) return null;

  const productUrl = `https://www.tamizhtech.in${getProductUrl(product.categorySlug, product.slug)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = {
        leadType: mode === "quote" ? "Product Quote" : "Product Enquiry",
        source: "Product Page",
        pageUrl: productUrl,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        whatsapp: formData.whatsapp || formData.phone,
        organization: formData.organization,
        customerType: formData.customerType,
        quantity: Math.max(1, Number(formData.quantity) || 1),
        city: formData.city,
        state: formData.state,
        message: formData.message,
        preferredContactMethod: formData.preferredContactMethod,
        // Product Metadata
        productId: product.id,
        productName: product.name,
        productCategory: product.category,
        productCategorySlug: product.categorySlug,
        productSlug: product.slug,
        productUrl: productUrl,
        // Anti-spam
        honeypot: formData.honeypot,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setLeadId(data.leadId || data.referenceId || "TT-REF");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong while submitting your enquiry. Please try again.");
      }
    } catch (err: any) {
      console.error("[Enquiry Submit Error]", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Tamizh Tech Robotics!\n\nI am interested in:\nProduct: ${product.name}\nCategory: ${product.category}\nQuantity: ${formData.quantity}\n${leadId ? `Reference ID: ${leadId}\n` : ""}Please share availability and quotation details.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden my-8 text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-subtle via-white to-subtle px-6 sm:px-8 py-5 border-b border-border flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black text-accent uppercase tracking-widest block">
              {product.category}
            </span>
            <h2 id="modal-title" className="text-lg sm:text-xl font-black font-heading text-[#002B66] uppercase tracking-tight">
              {mode === "quote" ? "Request Commercial Quotation" : "Product Technical Enquiry"}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-subtle hover:bg-border/60 text-text-muted hover:text-text-primary flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">

          {/* SUCCESS STATE */}
          {status === "success" ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-black font-heading text-[#002B66] uppercase tracking-tight mb-2">
                  Enquiry Received Successfully
                </h3>
                <p className="text-sm text-text-secondary max-w-md mx-auto">
                  Thank you! Our robotics engineering team in Coimbatore has received your requirement and will respond within 24 hours.
                </p>
              </div>

              {/* Lead Reference Card */}
              <div className="bg-subtle p-4 rounded-2xl border border-border inline-block min-w-[280px]">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                  Official Lead Reference ID
                </span>
                <span className="text-xl font-black font-mono text-accent">
                  {leadId}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/918148045030?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" /> Follow Up on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-subtle hover:bg-border/60 text-text-primary font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Automatic Product Summary Bar */}
              <div className="bg-subtle/80 p-4 rounded-2xl border border-border/80 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                    Configured Item
                  </span>
                  <span className="text-sm font-extrabold text-[#002B66]">
                    {product.name}
                  </span>
                </div>
                {product.price && product.price > 0 ? (
                  <div className="text-right">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                      Unit Price
                    </span>
                    <span className="text-sm font-black text-accent">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-text-muted bg-white px-2.5 py-1 rounded-md border border-border/60">
                    Price on Request
                  </span>
                )}
              </div>

              {/* Honeypot Spam Trap (Invisible) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Leave this empty</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {/* Error Alert */}
              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. anand@college.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Customer Type */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Customer / Organization Type <span className="text-accent">*</span>
                  </label>
                  <select
                    value={formData.customerType}
                    onChange={(e) => setFormData({ ...formData, customerType: e.target.value as CustomerType })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  >
                    {CUSTOMER_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Institution / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PSG College of Tech / RoboClub"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Required Quantity <span className="text-accent">*</span>
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                      className="px-3 py-2.5 bg-subtle border border-border rounded-l-xl text-text-primary font-black hover:bg-border/60 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Math.max(1, parseInt(e.target.value, 10) || 1) })}
                      className="w-full bg-white border-y border-border px-3 py-2.5 text-xs font-bold text-center text-text-primary focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                      className="px-3 py-2.5 bg-subtle border border-border rounded-r-xl text-text-primary font-black hover:bg-border/60 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    City / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Coimbatore"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                    Preferred Contact Method
                  </label>
                  <select
                    value={formData.preferredContactMethod}
                    onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value as PreferredContactMethod })}
                    className="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                  >
                    <option value="Phone">Phone Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Email">Email</option>
                  </select>
                </div>

              </div>

              {/* Requirement / Message */}
              <div>
                <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
                  Specific Requirements or Competition Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention battery specs, custom gearing, bulk order timelines, or specific event rules..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-border rounded-xl p-3 text-xs text-text-primary focus:outline-none focus:border-accent resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={status === "submitting"}
                  className="px-5 py-2.5 text-xs font-bold text-text-muted hover:text-text-primary uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#002B66] hover:bg-[#001D47] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Submit Enquiry
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
