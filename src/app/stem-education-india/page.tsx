"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";

export default function StemEducationIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Does your STEM curriculum align with national education boards in India?",
      a: "Yes, our textbooks, practical syllabus guides, and lesson plans are mapped to match standard CBSE, ICSE, and state board science curriculum requirements."
    },
    {
      q: "What age groups does your STEM lab cover?",
      a: "We offer progressive levels for students aged 6 to 18, ranging from basic mechanics and tinkering to microcontrollers, coding, and AI modeling."
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
          "name": "STEM Education India",
          "item": "https://tamizhtech.com/stem-education-india"
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
        title="STEM Education India"
        subtitle="Bridging the gap in practical science. Complete K-12 school laboratory packages, mapped curriculum, and trainer certification schemes."
        breadcrumbActive="STEM India"
      />

      <section className="section py-16">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Who are we? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Who are we?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tamizh Tech Robotics is a major provider of K-12 STEM education, practical robotics coaching, and school lab setups in India, aiming to nurture logical thinking and manual design capability.
              </p>
            </div>

            {/* What do we do? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What do we do?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                We design and distribute age-appropriate robotics learning kits, print structured teacher guides, and deliver interactive onboarding training to school faculty boards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Solderless electronics kits", "Block coding & programming platforms", "Practical syllabus manuals", "Teacher training workshops"].map((item, idx) => (
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
                We assist schools looking to implement modern coding labs, physics teachers looking to demonstrate analog circuits, and student groups preparing for robotics competitions.
              </p>
            </div>

            {/* Why are we trusted? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why are we trusted?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our curriculum has been deployed across multiple CBSE/ICSE schools, giving teachers a complete set of worksheets and structured slides to guide their classrooms.
              </p>
            </div>

            {/* What makes us different? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">What makes us different?</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We combine software coding with physical hardware. Instead of just learning logic on screens, students construct mechanical models and load custom firmware blocks into their microcontrollers.
              </p>
            </div>

            {/* Why choose Tamizh Tech Robotics? */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-text-primary">Why choose Tamizh Tech Robotics?</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Choose us to bring certified STEM training packages, robust local hardware supplies, and fully mapped curriculum modules directly to your educational institution.
              </p>
              <div className="flex gap-4">
                <Link href="/schools">
                  <Button variant="primary">School Solutions</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Request Demo Box</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section py-16 bg-subtle border-t border-border">
        <div className="container px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-text-primary text-center">STEM Education FAQ</h2>
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
