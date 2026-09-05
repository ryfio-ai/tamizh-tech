"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { Product } from "@/data/products";
import { trackMarketingEvent } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
  priority?: boolean;
}

export function ProductCard({ product, onEnquire, priority = false }: ProductCardProps) {
  const detailHref = `/products/${product.categorySlug}/${product.slug}`;

  const handleCardClick = () => {
    trackMarketingEvent("product_view", {
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/products",
    });
  };

  const handleEnquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    trackMarketingEvent("product_enquiry_open", {
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/products",
    });
    onEnquire(product);
  };

  // Highlights fallback: up to 3 verified highlights
  const highlights = product.highlights && product.highlights.length > 0
    ? product.highlights.slice(0, 3)
    : product.specifications ? product.specifications.slice(0, 3) : [];

  return (
    <div
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col transition-all duration-200 hover:border-slate-300 hover:shadow-md"
    >
      {/* 1. DOMINANT PRODUCT IMAGE */}
      <Link
        href={detailHref}
        onClick={handleCardClick}
        className="relative block aspect-[4/3] w-full bg-slate-50 border-b border-slate-100 overflow-hidden p-6"
        aria-label={`View technical specifications for ${product.name}`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* Minimal Engineering Badge if available */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-md bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
            {product.badge}
          </span>
        )}
      </Link>

      {/* 2. CARD CONTENT */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* CATEGORY */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">
              {product.category}
            </span>
            {product.sku && (
              <span className="text-[10px] font-mono text-slate-400">
                SKU #{product.sku}
              </span>
            )}
          </div>

          {/* PRODUCT NAME */}
          <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#FF6B00] transition-colors">
            <Link href={detailHref} onClick={handleCardClick}>
              {product.name}
            </Link>
          </h3>

          {/* 1-LINE VALUE PROPOSITION */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription || product.specs}
          </p>

          {/* 2–3 VERIFIED HIGHLIGHTS */}
          {highlights.length > 0 && (
            <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 3. ACTIONS: [ View Product ] [ Enquire ] */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={detailHref}
            onClick={handleCardClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors text-center"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleEnquireClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold rounded-xl transition-colors shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}
