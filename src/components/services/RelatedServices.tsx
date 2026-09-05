import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RelatedServiceItem, RelatedProductItem } from "@/data/commercialServices";

interface RelatedServicesProps {
  relatedServices: RelatedServiceItem[];
  relatedProducts?: RelatedProductItem[];
}

export function RelatedServices({ relatedServices, relatedProducts }: RelatedServicesProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-white">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Integrated Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-3">
            Related Capabilities & Products
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Combine services for complete product engineering — from metal cutting and 3D printing to circuit design and robotics integration.
          </p>
        </div>

        {/* Related Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {relatedServices.map((svc) => (
            <Link
              key={svc.slug}
              href={svc.href}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:border-accent/40 hover:shadow-sm transition-all text-left flex flex-col"
            >
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{svc.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-slate-100 text-left">
            <h3 className="text-base font-bold text-text-primary font-heading mb-4">
              Related Hardware & Kits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedProducts.map((prod, idx) => (
                <Link
                  key={idx}
                  href={prod.href}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center gap-4 group"
                >
                  <div className="relative w-16 h-16 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                    <Image src={prod.image} alt={prod.title} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors">
                      {prod.title}
                    </h4>
                    <p className="text-[11px] text-text-muted leading-snug line-clamp-2">{prod.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
