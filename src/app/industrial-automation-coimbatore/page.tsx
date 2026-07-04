"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";

export default function IndustrialAutomationCoimbatorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Do you integrate PLC systems for legacy manufacturing lines?",
      a: "Yes, we specialize in retrofitting old manufacturing lines with modern PLC controls (Siemens, Delta, Mitsubishi) and SCADA dashboards without changing core mechanical frames."
    },
    {
      q: "What is your primary service area for B2B industrial projects?",
      a: "Our primary hub is Coimbatore, Tamil Nadu, but we support industrial automation and sensor installations for clients throughout South India."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tamizh Tech Robotics Company",
      "image": "https://tamizhtech.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      },
      "telephone": "+91 81480 45030",
      "url": "https://tamizhtech.com"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tamizhtech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industrial Automation Coimbatore",
          "item": "https://tamizhtech.com/industrial-automation-coimbatore"
        }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-text-primary text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <PageHero
        title="Industrial Automation in Coimbatore"
        subtitle="Scale your production lines. We design and install PLC programming configurations, SCADA boards, computer vision quality checks, and AMR warehousing fleets."
        breadcrumbActive="Automation Coimbatore"
      />

      <section className="section py-16">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Who are we? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Who are we?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tamizh Tech Robotics is a B2B industrial engineering firm based in Coimbatore, providing custom sensor boards, PLC cabinets, SCADA control loops, and autonomous warehouse vehicles.
              </p>
            </div>

            {/* What do we do? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What do we do?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                We perform cycle time audits on manufacturing floors, write robust PLC logic, wire controls panels, build OpenCV vision inspection rigs, and deploy custom AMRs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["PLC cabinet wiring and programming", "SCADA dashboard setups", "OpenCV optical quality checks", "AGV & AMR material handling rovers"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Who do we help? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Who do we help?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We support factories experiencing high defect rates, textile or engineering mills in Coimbatore planning process upgrades, and warehouse operators automating cargo sorting.
              </p>
            </div>

            {/* Why are we trusted? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why are we trusted?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We guarantee high-uptime components, provide detailed technical audits prior to implementation, and offer local on-site maintenance sweeps to keep production running.
              </p>
            </div>

            {/* What makes us different? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What makes us different?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We develop both the hardware structures and the software. We construct custom mechanical components and integrate them directly with control room monitors and cloud telemetry.
              </p>
            </div>

            {/* Why choose Tamizh Tech Robotics? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why choose Tamizh Tech Robotics?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Choose us to secure local engineering support, direct factory pricing, robust hardware structures, and full compliance with GST invoicing rules.
              </p>
              <div className="flex gap-4">
                <Link href="/industries">
                  <Button variant="primary">Industrial Solutions</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Request Feasibility Audit</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-text-primary text-center">Coimbatore Automation FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-xl bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-text-primary cursor-pointer hover:bg-subtle transition-all"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-2 text-sm text-text-secondary border-t border-border/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
