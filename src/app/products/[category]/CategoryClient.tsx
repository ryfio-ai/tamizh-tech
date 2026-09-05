"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Zap, MessageSquare, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteModal, ProductEnquiryContext } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

interface CategoryClientProps {
  category: Category;
  categoryProducts: Product[];
  otherCategories: Category[];
}

export default function CategoryClient({
  category,
  categoryProducts,
  otherCategories,
}: CategoryClientProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [productContext, setProductContext] = useState<ProductEnquiryContext | undefined>(undefined);

  const handleEnquire = (product: Product) => {
    setProductContext({
      sourceType: "product",
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: `/products/${product.categorySlug}/${product.slug}`,
    });
    setIsQuoteOpen(true);
  };

  const handleCategoryEnquiry = () => {
    setProductContext(undefined);
    setIsQuoteOpen(true);
    trackMarketingEvent("product_enquiry_open", {
      categorySlug: category.slug,
      sourcePage: `/products/${category.slug}`,
      type: "category_level_enquiry",
    });
  };

  const handleWhatsApp = () => {
    trackMarketingEvent("product_whatsapp_click", {
      categorySlug: category.slug,
      sourcePage: `/products/${category.slug}`,
    });
    const message = encodeURIComponent(
      `Hello Tamizh Tech! I am enquiring about ${category.name} hardware platforms and would like to know technical specifications and lead times.`
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
            <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">{category.name}</span>
          </nav>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#FF6B00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* 2. CATEGORY HERO HEADER */}
        <header className="mb-12 bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            Hardware Category
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-950 mb-4">
            {category.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mb-6">
            {category.description}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {categoryProducts.length} Verified Hardware Models
            </span>
            <span className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-blue-600" />
              Technical Binding & Customization Support
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              Coimbatore Facility Dispatch
            </span>
          </div>
        </header>

        {/* 3. PRODUCTS GRID */}
        <section aria-labelledby="products-heading" className="mb-16">
          <h2 id="products-heading" className="sr-only">Available {category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={handleEnquire}
                priority={idx < 3}
              />
            ))}
          </div>
        </section>

        {/* 4. REAL APPLICATIONS & USE CASES */}
        {category.applications && category.applications.length > 0 && (
          <section className="mb-16 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-6">
              Typical Applications & Engineering Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{app}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. EXPLORE OTHER CATEGORIES */}
        {otherCategories.length > 0 && (
          <section className="mb-16">
            <h2 className="text-lg font-bold font-heading text-slate-900 mb-4">
              Explore Other Hardware Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={`/products/${other.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#FF6B00] bg-white hover:bg-orange-50/20 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {other.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 6. CATEGORY BOTTOM CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Need Institutional Bulk Supply or Custom Specifications?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            We support schools, engineering colleges, research labs, and competition teams across India with tested hardware, custom mounting brackets, and dedicated engineering consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCategoryEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About {category.name}</span>
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

      {/* 7. TECHNICAL QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="products"
        productContext={productContext}
      />
    </div>
  );
}
