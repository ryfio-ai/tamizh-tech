import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Industrial Automation Company in Coimbatore | PLC & SCADA | Tamizh Tech",
  description: "Specialized industrial mechatronics company in Coimbatore, Tamil Nadu, supplying custom pick-and-place nodes, SCADA cabinets, and AMR logistics fleets.",
  keywords: [
    "industrial automation company coimbatore",
    "plc programming coimbatore",
    "machine vision systems tamil nadu",
    "agv amr manufacturers india"
  ],
  openGraph: {
    title: "Tamizh Tech Industrial Automation | Coimbatore",
    description: "Developing robust automation hardware and custom mechatronics setups for manufacturing floors. Based in Coimbatore, deployed Pan-India.",
    url: "https://tamizhtech.in/industrial-automation-coimbatore",
    type: "website"
  }
};

const faqs = [
  {
    q: "Which PLC controllers do you work with?",
    a: "We write logic circuits for leading PLC platforms including Siemens (TIA Portal), Rockwell Automation/Allen-Bradley (Studio 5000), Mitsubishi Electric, and Delta PLCs."
  },
  {
    q: "How do your AMRs navigate in the factory?",
    a: "Our TTRC AMR V1 logistics platforms navigate utilizing direct lidar grid mapping, active ultrasonic proximity arrays, and line optical arrays for fail-safe safety compliance."
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
        "name": "Industrial Automation Coimbatore",
        "item": "https://tamizhtech.in/industrial-automation-coimbatore"
      }
    ]
  }
];

export default function IndustrialAutomationCoimbatore() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-[#FF6B00] pl-6 py-2">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-4 font-sans">B2B Local SEO</h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#111111] tracking-tighter leading-none">Industrial Automation Company in Coimbatore</h2>
          <p className="text-gray-500 font-bold uppercase mt-3 text-xs tracking-wider">Target: Industrial Automation Company Coimbatore</p>
        </div>

        {/* Structured Answers */}
        <div className="space-y-12 mb-20">
          
          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">Who are we?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We are mechatronics mechatronics engineers and developers at Tamizh Tech Robotics Company. Operating from our mechatronics prototyping hub in Coimbatore, Tamil Nadu, we configure turnkey automated setups that optimize OEE for factories across India.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">What do we do?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We design, write, and commission industrial controls:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> <strong>PLC Logic Development:</strong> Programming automation cycles for Siemens, Delta, and Allen-Bradley lines.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> <strong>OpenCV Machine Vision:</strong> Building high-speed cameras to inspect defects and trigger rejection gates.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> <strong>Indigenous AMRs:</strong> Supplying automated mobile robots mapped to grid floors for warehouse sorting.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">Who do we help?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We help plant managers, logistics operations officers, and engineering mechatronics developers wanting to cut cycle times, reduce assembly error rates, or install real-time dashboard tracking on their production floors.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">Why are we trusted?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Our mechatronics mechatronics engineering pedigree is built from our deep mechatronics testing setups. We configure hardware logic that operates continuously in high-vibration factory environments, backed by on-ground technical support.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-heading">What makes us different?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We combine physical mechatronics design with software intelligence. Instead of buying individual segments from different resellers, we provide direct integration—designing mechanical structures, wiring electrical lines, and programming the cloud nodes in a single flow.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-sans text-[#FF6B00]">Why Choose Tamizh Tech Robotics?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Choosing us connects you with the engineering mechatronics heritage of Coimbatore. We offer customized product adaptations, SCADA layout setups, and transparent ROI modeling to justify your capital automation investments.
            </p>
          </section>

        </div>

        {/* Industries B2B CTA */}
        <div className="p-8 bg-[#FFF2E6] border border-[#FF6B00]/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-black uppercase text-[#111111] tracking-tight">Request an Automation Site Audit</h4>
            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Acquire technical mechatronics mechatronics recommendations for your floor lines.</p>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto">
            <Link href="/industries" className="btn-primary py-3 px-6 text-xs flex-1 md:flex-none text-center">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
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
