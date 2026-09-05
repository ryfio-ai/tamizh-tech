"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/JsonLd";

export default function AboutTamizhTechPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Where is Tamizh Tech Robotics headquartered?",
      a: "Our headquarters and manufacturing facilities are based in Coimbatore, Tamil Nadu, India."
    },
    {
      q: "What products and services do you offer?",
      a: "We offer competition-grade robotics kits, school STEM Tinkering labs, college R&D labs, and B2B industrial automation services including PLC wiring, SCADA setups, and machine vision inspection benches."
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
          "name": "About Tamizh Tech",
          "item": "https://www.tamizhtech.in/about-tamizh-tech"
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
      <FAQSchema faqs={faqItems} />

      <PageHero
        title="About Tamizh Tech Robotics"
        subtitle="Learn about our journey, engineering philosophy, and dedication to building high-grade B2B industrial automation and K-12 STEM education platforms."
        breadcrumbActive="About Tamizh Tech"
      />

      <section className="section py-16">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Who are we? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Who are we?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tamizh Tech Robotics Company is a premier indigenously-focused robotics design, fabrication, and automation firm headquartered in Coimbatore, Tamil Nadu. Established with the vision to foster Indian self-reliance in engineering, we design high-RPM competition bots, modular STEM tinkering setups, and custom factory line control devices.
              </p>
            </div>

            {/* What do we do? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What do we do?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                We develop and manufacture custom robotics hardware, distribute academic laboratory setups, supply components to university research teams, and deploy B2B automation configurations including PLC controllers and SCADA dashboard interfaces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["K-12 STEM & AI lab designs", "Specialized college team mentorship", "AGV & AMR material handling fleets", "High-speed machine vision setups"].map((item, idx) => (
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
                Our hybrid model helps CBSE/ICSE schools introduce structural engineering to children, assists engineering colleges in running research centers, coaching competition teams, and helps manufacturing companies optimize their legacy conveyor assembly lines.
              </p>
            </div>

            {/* Why are we trusted? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why are we trusted?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                With a track record of supporting over 50+ podium-winning national competition teams and configuring laboratories in major schools, Tamizh Tech represents reliability, prompt technical support, and strict compliance with local GST invoicing guidelines.
              </p>
            </div>

            {/* What makes us different? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What makes us different?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Unlike companies relying entirely on imported ready-made components, we mill, laser-cut, and 3D print our parts locally in Coimbatore. This allows us to offer custom CAD step file downloads, modify chassis weights, and provide direct C++ firmware files for student projects.
              </p>
            </div>

            {/* Why choose Tamizh Tech Robotics? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why choose Tamizh Tech Robotics?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Choose us for 100% Made in India robotics kits, complete syllabus integrations, professional-grade PLC cabinet configurations, and on-ground engineering mentorship from our Founder and technical staff.
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button variant="primary">Explore Catalog</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Contact Consultant</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-text-primary text-center">Frequently Asked Questions</h2>
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
