"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";

export default function RoboticsCompanyCoimbatorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Why is Coimbatore a hub for robotics manufacturing?",
      a: "Coimbatore, often called the Manchester of South India, is famous for its foundry clusters, motor manufacturing, high-precision machining workshops, and engineering colleges, making it the perfect ecosystem to build and assemble robust robotic systems."
    },
    {
      q: "Can I visit the Tamizh Tech fabrication facility in Coimbatore?",
      a: "Yes, we encourage school coordinators, university faculties, and industrial clients to visit our lab to see active demonstrations of line followers, race bots, AGVs, and modular kits."
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
          "name": "Robotics Company in Coimbatore",
          "item": "https://tamizhtech.com/robotics-company-in-coimbatore"
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
        title="Robotics Company in Coimbatore"
        subtitle="Turnkey robotics design, custom fabrication, and educational lab setup services from India's engineering heartland."
        breadcrumbActive="Coimbatore Hub"
      />

      <section className="section py-16">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Who are we? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Who are we?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tamizh Tech Robotics is a homegrown engineering firm in Coimbatore, specializing in custom robotics integration, school lab setup, and high-performance DIY STEM kit fabrication.
              </p>
            </div>

            {/* What do we do? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What do we do?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                We leverage Coimbatore&apos;s local manufacturing networks to construct high-strength carbon fiber chassis, CNC milled battlebot weapons, high-RPM motors, and custom PCBs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Local CNC & laser-cutting services", "Robo War and Robo Soccer hardware builds", "Turnkey school tinkering lab packages", "IoT sensor network cabinets"].map((item, idx) => (
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
                We support engineering colleges setting up robotics centers, school admins planning STEM labs, and local manufacturers in Coimbatore looking to implement PLC logic and machine vision QC checks.
              </p>
            </div>

            {/* Why are we trusted? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why are we trusted?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We are recognized for providing direct on-site calibration, certified teacher training programs, and customized spare parts lists, preventing long import delays.
              </p>
            </div>

            {/* What makes us different? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What makes us different?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We design and program all our hardware in-house. That means we don&apos;t just sell boxes — we share schematic drawings, C++ coding blocks, and provide free technical mentorship.
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
                  <Button variant="secondary">Book Campus Demo</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-text-primary text-center">Coimbatore Robotics FAQ</h2>
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
