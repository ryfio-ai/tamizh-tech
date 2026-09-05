import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, ShieldCheck } from "lucide-react";
import { Product } from "@/data/products";

interface SolutionRelevantProductsProps {
  products: Product[];
  onOpenQuote: (serviceSlug?: string) => void;
  onProductClick: (productSlug: string, productName: string) => void;
}

export function SolutionRelevantProducts({
  products,
  onOpenQuote,
  onProductClick,
}: SolutionRelevantProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section id="solutions-products" className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
              <Bot className="w-3.5 h-3.5" />
              <span>Hardware & Arena Ready Kits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Relevant Robotics Products
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Standardized, competition-grade platforms engineered at Tamizh Tech and available for purchase or program integration.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const productHref = `/products/${product.categorySlug}/${product.slug}`;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Media Thumbnail */}
                <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-[#FF6B00] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      {product.category}
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#FF6B00] transition-colors mb-2 leading-snug line-clamp-2">
                      <Link
                        href={productHref}
                        onClick={() => onProductClick(product.slug, product.name)}
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      {product.price ? (
                        <div className="text-sm font-bold text-neutral-950">
                          ₹{product.price.toLocaleString("en-IN")}
                        </div>
                      ) : (
                        <div className="text-xs font-semibold text-neutral-600">
                          Custom Order
                        </div>
                      )}
                    </div>
                    <Link
                      href={productHref}
                      onClick={() => onProductClick(product.slug, product.name)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
