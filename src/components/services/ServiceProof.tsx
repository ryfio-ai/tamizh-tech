import React from "react";
import Image from "next/image";
import { ServiceVisualProof } from "@/data/commercialServices";

interface ServiceProofProps {
  items: ServiceVisualProof[];
}

export function ServiceProof({ items }: ServiceProofProps) {
  return (
    <section className="py-16 md:py-20 border-b border-border/30 bg-slate-50/40">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
            Workshop & Production Evidence
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-heading mb-3">
            Real Visual Proof
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Actual machinery, completed customer hardware, and real fabrication from our Coimbatore engineering setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((proof, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:shadow-sm transition-shadow flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                {proof.type === "video" && proof.videoSrc ? (
                  <video
                    src={proof.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={proof.image}
                    alt={proof.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-1.5">{proof.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{proof.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Workshop Media
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
