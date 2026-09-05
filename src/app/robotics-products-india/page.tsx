"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";

export default function RoboticsProductsIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Where do you ship your robotics kits in India?",
      a: "We ship to all states across India through reliable local logistics partners. Transit times typically range from 2 to 5 business days."
    },
    {
      q: "Do you accept institutional purchase orders (PO) for school setups?",
      a: "Yes, we accept formal purchase orders from registered educational institutions, offering GST invoice mapping and customized wholesale price quotes."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tamizh Tech Robotics Company",
      "image": "https://www.tamizhtech.in/logo/TTRC LOGO.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      },
      "telephone": "+91 81480 45030",
      "url": "https://www.tamizhtech.in"
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
          "item": "https://www.tamizhtech.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Robotics Products India",
          "item": "https://www.tamizhtech.in/robotics-products-india"
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
        title="Robotics Products India"
        subtitle="100% Made in India hardware kits, STEM learning setups, competition-grade wheels, and DIY electronics platforms."
        breadcrumbActive="Products India"
      />

      <section className="section py-16">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Who are we? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Who are we?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tamizh Tech Robotics is a homegrown Indian hardware manufacturer specializing in competition bots (Robo War, Sumo, Soccer, Race), Arduino learning kits, and school lab setups.
              </p>
            </div>

            {/* What do we do? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What do we do?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                We manufacture and distribute pre-assembled track-tested bots, drone packages, RC boat systems, and sensor modules to campuses, labs, and hobbyists nationwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Robust carbon fiber race bots", "Pneumatic cylinder soccer models", "Outrunner vertical drum battle bots", "ESP32 Wi-Fi smart node controllers"].map((item, idx) => (
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
                We help college students building final-year projects, school directors upgrading tinkering labs, and hobbyists searching for high-traction custom rubber wheels and motor drivers.
              </p>
            </div>

            {/* Why are we trusted? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why are we trusted?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We deliver robust hardware, check every kit on test tracks before dispatching, and provide downloadable user manuals, circuit wiring maps, and clean Arduino C++ source code.
              </p>
            </div>

            {/* What makes us different? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What makes us different?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Unlike companies selling imported un-backed modules, we write the firmware, model the chassis shapes, and provide direct technical support through phone or WhatsApp chat lines.
              </p>
            </div>

            {/* Why choose Tamizh Tech Robotics? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why choose Tamizh Tech Robotics?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Choose us to secure local engineering support, direct factory pricing, robust hardware structures, and full compliance with GST invoicing rules.
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button variant="primary">Shop Products</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Request B2B Quote</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-text-primary text-center">Robotics Products India FAQ</h2>
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
