"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ChevronRight, 
  ShieldCheck, 
  Wrench, 
  HelpCircle,
  FileText,
  Layers,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Bot,
  Scissors,
  Printer,
  Cpu,
  Factory
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteModal, ProductEnquiryContext } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

const SERVICE_META: Record<string, { title: string; desc: string; href: string; icon: any }> = {
  "3d-printing": {
    title: "Precision 3D Printing",
    desc: "Custom lightweight brackets, sensor mounts, and prototype casings in PLA, PETG, and TPU.",
    href: "/services/3d-printing",
    icon: Printer,
  },
  "laser-cutting": {
    title: "Stainless Steel Laser Cutting",
    desc: "Precision CNC cut chassis plates, armor guards, and structural brackets (Not Wood).",
    href: "/services/laser-cutting",
    icon: Scissors,
  },
  "pcb-design-fabrication-assembly": {
    title: "Custom PCB Design & Assembly",
    desc: "Custom motor driver shields, power distribution boards, and microcontroller carrier circuits.",
    href: "/services/pcb-design-fabrication-assembly",
    icon: Cpu,
  },
  "robotics-automation": {
    title: "Robotics & Autonomous Systems",
    desc: "Bespoke kinematics design, sensor fusion integration, and tournament tuning.",
    href: "/services/robotics-automation",
    icon: Bot,
  },
  "industrial-automation": {
    title: "Industrial Automation & Controls",
    desc: "PLC, SCADA, and factory line integration for high-reliability systems.",
    href: "/services/industrial-automation",
    icon: Factory,
  },
};

export default function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "included" | "applications" | "docs">("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quote Modal & Structured Context
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteRequirement, setQuoteRequirement] = useState<string | undefined>(undefined);

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const productContext: ProductEnquiryContext = {
    sourceType: "product",
    productSlug: product.slug,
    productName: product.name,
    categorySlug: product.categorySlug,
    sourcePage: `/products/${product.categorySlug}/${product.slug}`,
  };

  useEffect(() => {
    trackMarketingEvent("product_view", {
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: productContext.sourcePage,
    });
  }, [product.slug, product.name, product.categorySlug, productContext.sourcePage]);

  const handleOpenEnquiry = (customReq?: string) => {
    setQuoteRequirement(customReq);
    setIsQuoteOpen(true);
    trackMarketingEvent("product_enquiry_open", {
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: productContext.sourcePage,
    });
  };

  const handleWhatsApp = () => {
    trackMarketingEvent("product_whatsapp_click", {
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: productContext.sourcePage,
    });
    const message = encodeURIComponent(
      `Hello Tamizh Tech! I am viewing "${product.name}" (${product.category}) on your website and would like to know more about requirements, lead times, and availability.`
    );
    window.open(`https://wa.me/918148045030?text=${message}`, "_blank");
  };

  const handleTalkEngineer = () => {
    trackMarketingEvent("product_talk_engineer_click", {
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: productContext.sourcePage,
    });
    handleOpenEnquiry(
      `Requesting technical discussion with a mechatronics engineer regarding integration, payload, or tournament rules for ${product.name}.`
    );
  };

  // Highlights
  const highlights = product.highlights && product.highlights.length > 0
    ? product.highlights
    : (product.specifications ? product.specifications.slice(0, 3) : []);

  // Specs list
  const specsList = product.detailedSpecs && product.detailedSpecs.length > 0
    ? product.detailedSpecs
    : product.specifications || [];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 text-slate-900">
      {/* 1. BREADCRUMB */}
      <div className="border-b border-slate-100 bg-slate-50/60 py-3">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto scrollbar-none" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900 transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/products" className="hover:text-slate-900 transition-colors shrink-0">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href={`/products/${product.categorySlug}`} className="hover:text-slate-900 transition-colors shrink-0">
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href={`/products/${product.categorySlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#FF6B00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {product.category}</span>
          </Link>
        </div>

        {/* 2. PRODUCT HERO SECTION (2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* LEFT: DOMINANT IMAGE GALLERY (5 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 flex items-center justify-center shadow-xs">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[selectedImageIdx] || product.image}
                  alt={`${product.name} - View ${selectedImageIdx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-contain p-2"
                />
              </div>

              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-wide rounded-md bg-white/95 text-slate-900 border border-slate-200 shadow-2xs">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails if multiple */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-20 h-20 rounded-xl bg-slate-50 border overflow-hidden shrink-0 transition-all p-2 ${
                      selectedImageIdx === idx
                        ? "border-[#FF6B00] ring-2 ring-[#FF6B00]/20 shadow-2xs"
                        : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: PRODUCT INFO & ENQUIRY (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & SKU */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <Link
                  href={`/products/${product.categorySlug}`}
                  className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] hover:underline"
                >
                  {product.category}
                </Link>
                {product.sku && (
                  <span className="text-xs font-mono text-slate-400">
                    SKU #{product.sku}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-slate-950 leading-tight mb-3">
                {product.name}
              </h1>

              {/* One-line Value Proposition / Short Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {product.shortDescription || product.description}
              </p>

              {/* Verified Highlights */}
              {highlights.length > 0 && (
                <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Verified Hardware Highlights
                  </span>
                  <ul className="space-y-2">
                    {highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing (Factual dataset price only) */}
              {product.price && product.price > 0 && (
                <div className="mb-6 p-4 bg-slate-50/70 border border-slate-200 rounded-xl">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Unit Estimate:</span>
                    <span className="text-2xl font-black text-slate-950">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Includes verified hardware assembly. Custom specifications and institutional volume pricing provided on enquiry.
                  </p>
                </div>
              )}

              {/* 3. ENQUIRY CTAs */}
              <div className="space-y-3 pt-2">
                {/* PRIMARY CTA: ENQUIRE ABOUT THIS PRODUCT */}
                <button
                  type="button"
                  onClick={() => handleOpenEnquiry()}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                </button>

                {/* SECONDARY & TERTIARY CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-2xs"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WHATSAPP US</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleTalkEngineer}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-slate-600" />
                    <span>TALK TO AN ENGINEER</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Direct engineering enquiry. Official quotation dispatched with reference tracking ID.
                </p>
              </div>
            </div>

            {/* Engineering Trust Strip */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Spec Sheet</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Custom Tuning Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. "WHY THIS PRODUCT?" SECTION */}
        {product.whyThisProduct && (
          <section className="mb-16 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-[11px] font-bold uppercase tracking-wider mb-3">
                <span>Engineering Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-4">
                Why this product? — {product.whyThisProduct.heading}
              </h2>

              <ul className="space-y-3 mb-6">
                {product.whyThisProduct.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {product.whyThisProduct.targetAudience && product.whyThisProduct.targetAudience.length > 0 && (
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-700 mr-1">Designed For:</span>
                  {product.whyThisProduct.targetAudience.map((audience, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 5. SPECIFICATIONS & DOCUMENTATION TABS */}
        <section className="mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto scrollbar-none mb-8">
            <button
              onClick={() => { setActiveTab("specs"); trackMarketingEvent("product_spec_tab_click", { tab: "specs", productSlug: product.slug }); }}
              className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === "specs"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Technical Specifications
            </button>

            {product.includedItems && product.includedItems.length > 0 && (
              <button
                onClick={() => { setActiveTab("included"); trackMarketingEvent("product_spec_tab_click", { tab: "included", productSlug: product.slug }); }}
                className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === "included"
                    ? "border-[#FF6B00] text-[#FF6B00]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                What&apos;s Included ({product.includedItems.length})
              </button>
            )}

            {product.applications && product.applications.length > 0 && (
              <button
                onClick={() => { setActiveTab("applications"); trackMarketingEvent("product_spec_tab_click", { tab: "applications", productSlug: product.slug }); }}
                className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === "applications"
                    ? "border-[#FF6B00] text-[#FF6B00]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Applications
              </button>
            )}

            {product.downloads && product.downloads.length > 0 && (
              <button
                onClick={() => { setActiveTab("docs"); trackMarketingEvent("product_spec_tab_click", { tab: "docs", productSlug: product.slug }); }}
                className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === "docs"
                    ? "border-[#FF6B00] text-[#FF6B00]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Downloads & Schematics
              </button>
            )}
          </div>

          {/* TAB 1: TECHNICAL SPECS TABLE */}
          {activeTab === "specs" && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 font-heading">
                  Verified Engineering Specifications
                </h3>
                <span className="text-xs text-slate-500">
                  {specsList.length} parameters logged
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {specsList.map((spec, idx) => {
                  const parts = spec.split(":");
                  const label = parts[0]?.trim();
                  const value = parts.slice(1).join(":")?.trim();

                  return (
                    <div
                      key={idx}
                      className={`grid grid-cols-1 sm:grid-cols-3 p-4 text-xs sm:text-sm ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                      }`}
                    >
                      <span className="font-semibold text-slate-700 sm:col-span-1">{label}</span>
                      <span className="text-slate-600 sm:col-span-2 mt-0.5 sm:mt-0 font-mono text-xs">
                        {value || label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: WHAT'S INCLUDED */}
          {activeTab === "included" && product.includedItems && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 font-heading">
                Package Contents & Included Hardware
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: APPLICATIONS */}
          {activeTab === "applications" && product.applications && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 font-heading">
                Typical Engineering Scenarios & Competitions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 text-xs sm:text-sm text-slate-800">
                    <span className="font-semibold">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DOWNLOADS & SCHEMATICS */}
          {activeTab === "docs" && product.downloads && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 font-heading">
                Datasheets, Schematics & CAD Reference
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.downloads.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#FF6B00]" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">{doc.label}</span>
                        <span className="text-[10px] text-slate-500 uppercase">{doc.type || "PDF"} Document</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleOpenEnquiry(`Requesting datasheet / schematic download for: ${doc.label} (${product.name})`)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Request File
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 6. GENUINELY RELEVANT COMMERCIAL SERVICES (PHASE 1 LINKS) */}
        {product.relatedServices && product.relatedServices.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                  Customization & Fabrication
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                  Relevant Engineering Services
                </h2>
              </div>
              <p className="text-xs text-slate-500 max-w-sm">
                Need customized mounts, replacement brackets, or bespoke motor drivers for this platform?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {product.relatedServices.map((serviceKey) => {
                const service = SERVICE_META[serviceKey];
                if (!service) return null;
                const Icon = service.icon;

                return (
                  <Link
                    key={serviceKey}
                    href={service.href}
                    onClick={() => trackMarketingEvent("product_related_service_click", {
                      service: serviceKey,
                      productSlug: product.slug,
                    })}
                    className="group p-5 rounded-2xl border border-slate-200 hover:border-[#FF6B00] bg-white hover:bg-orange-50/20 transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#FF6B00]">
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 7. RELATED PRODUCTS */}
        {related && related.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                More Hardware
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                Related {product.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onEnquire={(p) => {
                    handleOpenEnquiry(`Enquiring about ${p.name} (${p.categorySlug})`);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* 8. VERIFIED PRODUCT FAQS */}
        {product.faqs && product.faqs.length > 0 && (
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                Answers & Clarifications
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setOpenFaq(isOpen ? null : idx);
                        if (!isOpen) {
                          trackMarketingEvent("product_faq_open", {
                            question: faq.question,
                            productSlug: product.slug,
                          });
                        }
                      }}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-90 text-[#FF6B00]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 9. BOTTOM SHOWROOM CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Ready to Order or Integrate {product.name}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our mechatronics engineering team at Coimbatore provides quick lead time confirmations, binding support, and custom mechanical mounting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About This Product</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Engineering Team</span>
            </button>
          </div>
        </section>
      </div>

      {/* 10. MOBILE STICKY ENQUIRY BAR (320px, 375px, 390px, 430px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg flex items-center gap-2">
        <button
          onClick={() => handleOpenEnquiry()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire About Product</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4" />
        </button>
      </div>

      {/* 11. TECHNICAL QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="products"
        defaultRequirement={quoteRequirement}
        productContext={productContext}
      />
    </div>
  );
}
