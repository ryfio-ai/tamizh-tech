import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Robotics Products India | Competition Bots & Kits | Tamizh Tech",
  description: "Tamizh Tech is India's leading robotics hardware manufacturer, supplying high-performance line follower bots, robo race chassis, soccer robots, and drone kits.",
  keywords: [
    "line follower robot india",
    "robo race robot india",
    "robo soccer robot india",
    "robotics products india"
  ],
  openGraph: {
    title: "Indigenous Robotics Products India | Tamizh Tech",
    description: "High-spec competition robots and mechatronic learning kits designed and built in Coimbatore, Tamil Nadu.",
    url: "https://tamizhtech.in/robotics-products-india",
    type: "website"
  }
};

const faqs = [
  {
    q: "Do you supply customized line follower robots in India?",
    a: "Yes, our Aero PID Line Follower features an STM32 ARM Cortex core, a high-precision 8-sensor optical array, and preloaded PID loop software ready for track runs."
  },
  {
    q: "Can we purchase mechatronics kits in bulk for a school robotics club?",
    a: "Yes, we offer our Tinkering Lab Setup Pack (20 kits) and sensor starter bundles with direct shipping across India."
  }
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
        "item": "https://tamizhtech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Robotics Products India",
        "item": "https://tamizhtech.in/robotics-products-india"
      }
    ]
  }
];

export default function RoboticsProductsIndia() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-[#FF6B00] pl-6 py-2">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-4 font-sans">Product Technology</h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#111111] tracking-tighter leading-none">Robotics Products India</h2>
          <p className="text-gray-500 font-bold uppercase mt-3 text-xs tracking-wider">Targets: Line Follower Robot India, Robo Race Robot India, Robo Soccer Robot India</p>
        </div>

        {/* Structured Answers */}
        <div className="space-y-12 mb-20">
          
          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">Who are we?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We are mechatronics mechatronics engineers and developers at Tamizh Tech Robotics Company, based in Coimbatore, Tamil Nadu. We specialize in designing, machining, and debugging mechatronics hardware for student and industrial mechatronics markets.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">What do we do?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We manufacture high-grade mechatronics kits and mechatronic components. Our catalog contains 12 mechatronics categories, from line tracking sensors to multi-rotor drone sets, and high-impact Robo War battle bots.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">Who do we help?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We supply mechatronics hardware to school lab systems setting up tinkering labs, engineering students preparing final year project mechatronics codes, and competitive robotics teams preparing for events.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">Why are we trusted?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Our mechatronics designs are tested on actual arenas. We hold a track record of 180+ winning positions in mechatronics events across India, including IIT Madras Shaastra, Yugam, PSG Kriya, and Quantum-X.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">What makes us different?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We manufacture our mechatronics structures locally. We cut carbon fiber chassis blocks, build pneumatic SOL cylinders, and program STM32 chips in-house. This gives mechatronics teams high-performance gear without high import costs.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-sans text-[#FF6B00]">Why Choose Tamizh Tech Robotics?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Choosing our mechatronics products connects you with high-precision mechatronics mechatronics engineering. Every kit is supplied with direct mechatronics code access, mechatronics assembly sheets, and mechatronics expert advice.
            </p>
          </section>

        </div>

        {/* Store CTA */}
        <div className="p-8 bg-[#FFF2E6] border border-[#FF6B00]/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-black uppercase text-[#111111] tracking-tight">Explore our mechatronics catalog</h4>
            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Get special pricing on line followers, drone parts, and battle bots.</p>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto">
            <Link href="/products" className="btn-primary py-3 px-6 text-xs flex-1 md:flex-none text-center">
              Go To Store <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-20 border-t border-[#E5E5E5] pt-12">
          <h3 className="text-xl font-black uppercase text-[#111111] mb-8 tracking-tight">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E5E5E5] pb-4">
                <h4 className="text-xs font-black uppercase text-[#111111] mb-2">{faq.q}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
