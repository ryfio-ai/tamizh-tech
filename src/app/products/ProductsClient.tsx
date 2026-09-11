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
  MessageSquare, 
  ArrowRight,
  GraduationCap,
  X,
  SlidersHorizontal,
  ArrowUpDown,
  RotateCcw
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { products, Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteModal, ProductEnquiryContext } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";
type PriceFilter = "all" | "under-1000" | "1000-5000" | "above-5000";

export default function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc"); // Default Alphabetical A to Z
  
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
    { id: "robotics-components", label: "Robotics Components", count: products.filter(p => p.categorySlug === "robotics-components").length, icon: Wrench },
    { id: "radio-controllers", label: "Radio Controllers", count: products.filter(p => p.categorySlug === "radio-controllers").length, icon: Radio },
    { id: "educational-robotics", label: "Educational Robotics", count: products.filter(p => p.categorySlug === "educational-robotics").length, icon: GraduationCap }
  ], []);

  // Filter and Sort Products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((p) => {
      // 1. Category Filter
      const matchesCategory = selectedCategory === "All" || p.categorySlug === selectedCategory;
      if (!matchesCategory) return false;

      // 2. Price Filter
      const effectivePrice = p.price || (p.configurations && p.configurations[0]?.price) || 0;
      if (priceFilter === "under-1000" && effectivePrice >= 1000) return false;
      if (priceFilter === "1000-5000" && (effectivePrice < 1000 || effectivePrice > 5000)) return false;
      if (priceFilter === "above-5000" && effectivePrice <= 5000) return false;

      // 3. Search Query Filter
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;

      return (
        p.name.toLowerCase().includes(query) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(query)) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.sku && p.sku.toLowerCase().includes(query)) ||
        (p.specs && p.specs.toLowerCase().includes(query)) ||
        (p.highlights && p.highlights.some(h => h.toLowerCase().includes(query))) ||
        (p.applications && p.applications.some(a => a.toLowerCase().includes(query))) ||
        p.slug.toLowerCase().includes(query)
      );
    });

    // Sort products (Default: Alphabetical A to Z)
    return filtered.sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "price-asc") {
        const priceA = a.price || (a.configurations && a.configurations[0]?.price) || 0;
        const priceB = b.price || (b.configurations && b.configurations[0]?.price) || 0;
        return priceA - priceB;
      }
      if (sortBy === "price-desc") {
        const priceA = a.price || (a.configurations && a.configurations[0]?.price) || 0;
        const priceB = b.price || (b.configurations && b.configurations[0]?.price) || 0;
        return priceB - priceA;
      }
      return 0;
    });
  }, [selectedCategory, priceFilter, searchQuery, sortBy]);

  const hasActiveFilters = selectedCategory !== "All" || priceFilter !== "all" || searchQuery.trim() !== "" || sortBy !== "name-asc";

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setPriceFilter("all");
    setSearchQuery("");
    setSortBy("name-asc");
  };

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
    <div className="bg-slate-50/40 min-h-screen pt-24 pb-20 text-slate-900">
      {/* 1. BREADCRUMBS */}
      <div className="border-b border-slate-200/70 bg-white py-3">
        <div className="container max-w-[1680px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">Products Catalogue</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="py-8 sm:py-12 border-b border-slate-200/80 bg-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold tracking-wide uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            Hardware Catalogue & Enquiry System
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950 mb-3">
            Robotics Hardware, Kits & Controllers
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Engineered combat bots, DC geared motors, high-traction wheels, and certified FlySky radio transmitters. Built for tournament teams, engineering research, and robotics labs.
          </p>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Verified Specifications</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FF6B00]" />
              <span>Direct Coimbatore Engineering Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-blue-600" />
              <span>Custom Prototyping Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODERN ECOMMERCE CONTROLS (SEARCH, FILTERS, SORTING) */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[72px] z-20 shadow-2xs backdrop-blur-md">
        <div className="container max-w-[1680px] mx-auto px-4 sm:px-6 space-y-4">
          
          {/* TOP ROW: PROMINENT ECOMMERCE SEARCH BAR */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, SKU, RPM, or specification (e.g. 300RPM, 600RPM, TT000016, Buggy Wheel)..."
                className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-xs transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* SORT BY DROPDOWN */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="relative inline-flex items-center">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 absolute left-3 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none pl-9 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:border-slate-300 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors cursor-pointer shadow-2xs"
                >
                  <option value="name-asc">Sort: Alphabetical (A to Z)</option>
                  <option value="name-desc">Sort: Alphabetical (Z to A)</option>
                  <option value="price-asc">Sort: Price (Low to High)</option>
                  <option value="price-desc">Sort: Price (High to Low)</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>

              {/* Reset Button if active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 px-3 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors shrink-0"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* BOTTOM ROW: CATEGORY PILLS & PRICE FILTER CHIPS */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-2 border-t border-slate-100">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-slate-950 text-white shadow-xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#FF6B00]" : "text-slate-400"}`} />
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? "bg-slate-800 text-slate-300" : "bg-white text-slate-500 border border-slate-200"}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Price Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 shrink-0">
                Budget:
              </span>
              {[
                { id: "all", label: "All Prices" },
                { id: "under-1000", label: "Under ₹1,000" },
                { id: "1000-5000", label: "₹1,000 – ₹5,000" },
                { id: "above-5000", label: "Above ₹5,000" },
              ].map((p) => {
                const isSelected = priceFilter === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPriceFilter(p.id as PriceFilter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-[#FF6B00] text-white shadow-2xs"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE FILTER STATUS BAR */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-900">
                Showing {filteredAndSortedProducts.length} of {products.length} Products
              </span>
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-50 text-[#FF6B00] border border-orange-200 text-[11px] font-medium">
                  Category: {categories.find(c => c.id === selectedCategory)?.label}
                  <button onClick={() => setSelectedCategory("All")} className="hover:text-slate-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {priceFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-50 text-[#FF6B00] border border-orange-200 text-[11px] font-medium">
                  Budget: {priceFilter === "under-1000" ? "Under ₹1,000" : priceFilter === "1000-5000" ? "₹1,000–₹5,000" : "Above ₹5,000"}
                  <button onClick={() => setPriceFilter("all")} className="hover:text-slate-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-50 text-[#FF6B00] border border-orange-200 text-[11px] font-medium">
                  Search: &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery("")} className="hover:text-slate-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <span className="text-[11px] text-slate-400">
                (Sorted: {sortBy === "name-asc" ? "A to Z" : sortBy === "name-desc" ? "Z to A" : sortBy === "price-asc" ? "Price Low to High" : "Price High to Low"})
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT GRID (4 IN EACH ROW FOR OPTIMAL VISIBILITY) */}
      <section className="py-10">
        <div className="container max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={handleEnquire}
                  priority={idx < 4}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 p-8 max-w-2xl mx-auto shadow-2xs">
              <Bot className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">No matching hardware found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any products matching your current filters and search query. Try clearing your filters or contact our engineering team for custom configurations.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. CUSTOM FABRICATION LINK (SERVICES RE-ENGAGEMENT) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container max-w-[1680px] mx-auto px-4 sm:px-6">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xs">
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

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <span>Explore Fabrication Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Engineering Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="products"
        productContext={productContext}
      />
    </div>
  );
}
