"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  Layers, 
  Bot, 
  Radio, 
  Wrench, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { products, Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteModal, ProductEnquiryContext } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

export default function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Quote Modal & Structured Context
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [productContext, setProductContext] = useState<ProductEnquiryContext | undefined>(undefined);

  useEffect(() => {
    trackMarketingEvent("product_list_view", {
      category: selectedCategory,
      totalCount: products.length,
      sourcePage: "/products"
    });
  }, [selectedCategory]);

  const categories = useMemo(() => [
    { id: "All", label: "All Products", count: products.length, icon: Layers },
    { id: "competition", label: "Competition Robots", count: products.filter(p => p.categorySlug === "competition").length, icon: Bot },
    { id: "radio-controllers", label: "Radio Controllers", count: products.filter(p => p.categorySlug === "radio-controllers").length, icon: Radio }
  ], []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.categorySlug === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch = 
        p.name.toLowerCase().includes(query) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(query)) ||
        (p.sku && p.sku.toLowerCase().includes(query)) ||
        (p.specs && p.specs.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleEnquire = (product: Product) => {
    setProductContext({
      sourceType: "product",
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: `/products/${product.categorySlug}/${product.slug}`
    });
    setIsQuoteOpen(true);
  };

  const handleGeneralEnquiry = () => {
    setProductContext(undefined);
    setIsQuoteOpen(true);
    trackMarketingEvent("product_enquiry_open", {
      sourcePage: "/products",
      type: "general_catalogue_enquiry"
    });
  };

  const handleWhatsApp = () => {
    trackMarketingEvent("product_whatsapp_click", {
      sourcePage: "/products",
      action: "general_catalogue_whatsapp"
    });
    const message = encodeURIComponent(
      "Hello Tamizh Tech! I am browsing your online Robotics Products Catalogue and would like to enquire about pricing, specifications, and availability."
    );
    window.open(`https://wa.me/918148045030?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 text-slate-900">
      {/* 1. BREADCRUMBS */}
      <div className="border-b border-slate-100 bg-slate-50/60 py-3">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">Products Catalogue</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="py-10 sm:py-14 border-b border-slate-100 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            Hardware Catalogue & Enquiry System
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-950 mb-4">
            Robotics Hardware, Kits & Controllers
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            Engineered combat bots, precision holonomic drive platforms, and certified FlySky radio transmitters. Built for tournament teams, engineering research, and educational robotics labs.
          </p>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Verified Specifications</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FF6B00]" />
              <span>Direct Coimbatore Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-blue-600" />
              <span>Custom Prototyping Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATALOGUE CONTROLS (SEARCH & CATEGORY TABS) */}
      <section className="py-8 bg-slate-50/50 border-b border-slate-200/80 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-slate-950 text-white shadow-xs"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#FF6B00]" : "text-slate-400"}`} />
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isSelected ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-500"}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, models, or SKUs..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT GRID */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={handleEnquire}
                  priority={idx < 3}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <Bot className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">No matching hardware found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any products matching &ldquo;{searchQuery}&rdquo;. Try clearing your search query or contact our engineering team for custom requirements.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. CUSTOM FABRICATION LINK (PHASE 1 SERVICES RE-ENGAGEMENT) */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xs">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                Custom Engineering Services
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2">
                Need Custom Brackets, PCBs, or Chassis Fabrication?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Beyond off-the-shelf platforms, Tamizh Tech provides rapid stainless steel laser cutting, precision FDM/Resin 3D printing, and custom PCB assembly for your robotics hardware.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/3d-printing"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold rounded-xl transition-colors"
              >
                <span>3D Printing</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
              <Link
                href="/services/laser-cutting"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold rounded-xl transition-colors"
              >
                <span>Laser Cutting</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
              <Link
                href="/services/pcb-design-fabrication-assembly"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold rounded-xl transition-colors"
              >
                <span>PCB Assembly</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED PRODUCT CATALOGUE FAQS */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                How do I order or enquire about these products?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                Click &ldquo;Enquire&rdquo; on any product card or submit our technical quote form. Our engineering team in Coimbatore will review your quantity, application requirements, and dispatch schedule, providing an official quotation with a reference tracking ID.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                Do you provide receiver binding and setup assistance?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                Yes. Every FlySky transmitter system comes with step-by-step documentation, and our engineering team provides remote setup guidance for binding, channel configuration, and fail-safe calibration.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                Can competition bots be customized for specific college rules?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                Absolutely. If your tournament has specific weight limits (e.g. 5kg Robo Soccer or lightweight Robo Race), we customize dimensions, motor configurations, and battery brackets to comply with event rulebooks.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                Where do you ship from and what are delivery timelines?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                All products ship directly from our facility in Kurumbapalayam, Coimbatore. Standard domestic courier dispatches take 24–48 hours across Tamil Nadu and 3–5 working days nationwide across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA ENQUIRY STRIP */}
      <section className="py-14 bg-slate-950 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Looking for a Specific Hardware Specification?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
            Talk to our Coimbatore mechatronics engineers about custom builds, institutional bulk requirements, or spare component availability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleGeneralEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Products</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Engineering Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. MOBILE STICKY ENQUIRY BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg flex items-center gap-2">
        <button
          onClick={handleGeneralEnquiry}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire Now</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4" />
        </button>
      </div>

      {/* 9. TECHNICAL QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="products"
        productContext={productContext}
      />
    </div>
  );
}
