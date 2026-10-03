"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { Product } from "@/data/products";
import { trackMarketingEvent } from "@/lib/analytics";
import { getProductPriceDisplay } from "@/lib/pricing";

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
  priority?: boolean;
}

export function ProductCard({ product, onEnquire, priority = false }: ProductCardProps) {
  const detailHref = `/products/${product.categorySlug}/${product.slug}`;
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const [activeImgIndex, setActiveImgIndex] = React.useState(0);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateY((x / (rect.width / 2)) * 5);
    setRotateX(-(y / (rect.height / 2)) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s",
      }}
      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-orange-400/80 shadow-xs hover:shadow-2xl flex flex-col h-full overflow-hidden"
    >
      {/* 1. DOMINANT PRODUCT IMAGE AREA WITH MULTI-ANGLE PREVIEW */}
      <div className="relative aspect-[4/3] w-full bg-slate-100/80 border-b border-slate-100 overflow-hidden group/img">
        <Link
          href={detailHref}
          onClick={handleCardClick}
          className="relative block w-full h-full"
          aria-label={`View technical specifications for ${product.name}`}
        >
          <Image
            src={allImages[activeImgIndex] || product.image}
            alt={`${product.name} angle ${activeImgIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            priority={priority}
            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top Tag Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          {product.badge ? (
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-lg bg-white/95 text-slate-900 border border-slate-200/80 shadow-xs backdrop-blur-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>{product.badge}</span>
            </span>
          ) : <span />}

          {product.sku && (
            <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-slate-900/85 text-white/95 backdrop-blur-xs shadow-xs">
              #{product.sku}
            </span>
          )}
        </div>

        {/* Multi-Angle Hover Indicator Pills */}
        {allImages.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 z-20 flex items-center justify-center gap-1.5 px-3 pointer-events-auto">
            {allImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImgIndex(idx);
                }}
                onMouseEnter={() => setActiveImgIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeImgIndex
                    ? "w-6 bg-[#FF6B00] shadow-xs"
                    : "w-1.5 bg-white/70 hover:bg-white backdrop-blur-xs"
                }`}
                aria-label={`Preview angle ${idx + 1} for ${product.name}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. CARD CONTENT */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* CATEGORY & STATUS */}
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">
              {product.category}
            </span>
            {product.availability === "in_stock" || product.availability === "InStock" ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Available Soon
              </span>
            )}
          </div>

          {/* PRODUCT NAME - High clarity, 2-line clean wrap */}
          <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#FF6B00] transition-colors line-clamp-2 min-h-[44px]">
            <Link href={detailHref} onClick={handleCardClick} title={product.name}>
              {product.name}
            </Link>
          </h3>

          {/* VALUE PROPOSITION / SHORT SUMMARY */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3.5 min-h-[34px]">
            {product.shortDescription || product.specs}
          </p>

          {/* KEY SPECS / VERIFIED HIGHLIGHTS */}
          {highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4 pt-3 border-t border-slate-100">
              {highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* PRICING DISPLAY (Verified Product Price or Price on Request) */}
          {(() => {
            const priceInfo = getProductPriceDisplay(product);
            if (!priceInfo.hasPrice || !priceInfo.displayPrice) {
              return (
                <div className="mb-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-slate-500 text-xs font-medium">Pricing</span>
                  <div className="text-right flex flex-col items-end">
                    <span className="font-extrabold text-slate-900 text-sm tracking-tight">
                      Price on Request
                    </span>
                    <span className="text-[10px] text-amber-600 font-medium mt-0.5">
                      Enquire for quote
                    </span>
                  </div>
                </div>
              );
            }
            return (
              <div className="mb-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <span className="text-slate-500 text-xs font-medium">{priceInfo.label}</span>
                <div className="text-right flex flex-col items-end">
                  <div className="flex items-baseline gap-1.5 flex-wrap justify-end">
                    {priceInfo.discountPercentage && priceInfo.displayRegularPrice && (
                      <span className="text-xs font-medium text-slate-400 line-through">
                        {priceInfo.displayRegularPrice}
                      </span>
                    )}
                    <span className="font-extrabold text-slate-900 text-base tracking-tight">
                      {priceInfo.displayPrice}
                    </span>
                    {priceInfo.discountPercentage && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
                        {priceInfo.discountPercentage}% OFF
                      </span>
                    )}
                  </div>
                  {product.pricingNote && (
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                      Enquire for volume
                    </p>
                  )}
                </div>
              </div>
            );
          })()}
        </div>

        {/* 3. ACTIONS: [ View Specs ] [ Enquire ] */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={detailHref}
            onClick={handleCardClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all duration-200 text-center hover:scale-[1.02]"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={handleEnquireClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-[1.02] cursor-pointer relative overflow-hidden group/btn"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}
