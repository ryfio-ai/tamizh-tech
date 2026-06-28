import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight, Bot, Shield, Cpu, Users, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Premier Robotics Company in Tamil Nadu | Tamizh Tech",
  description: "Tamizh Tech is Tamil Nadu's leading robotics and automation company, designing indigenously manufactured competition bots, STEM packages, and industrial automation nodes.",
  keywords: [
    "robotics company in tamil nadu",
    "tamizh tech robotics",
    "robotics training coimbatore",
    "stem lab setup tamil nadu"
  ],
  openGraph: {
    title: "About Tamizh Tech Robotics Company | Tamil Nadu",
    description: "From a student mechatronics club to a registered engineering ecosystem. Read our journey, pillars, and impact.",
    url: "https://tamizhtech.in/about-tamizh-tech",
    type: "website"
  }
};

const faqs = [
  {
    q: "What makes Tamizh Tech Robotics different from other providers in Tamil Nadu?",
    a: "Unlike providers that import cheap components, we design, prototype, and manufacture our robotic structures (chassis, boards, wheels) indigenously in Coimbatore. This allows us to offer low-cost, high-reliability products."
  },
  {
    q: "Does Tamizh Tech offer certified courses?",
    a: "Yes, our training arm, ThiranOli Academy, offers certified courses in embedded systems, python programming, microcontrollers, and CAD mechatronics configurations, validated by our industrial network."
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
        "name": "About Tamizh Tech",
        "item": "https://tamizhtech.in/about-tamizh-tech"
      }
    ]
  }
];

export default function AboutGEO() {
  return (
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen text-[#F5F6F8] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#FF4D2D] pl-6 py-2">
          <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-4 font-sans">Entity Profile Page</h1>
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-[#F5F6F8] tracking-tighter leading-none">About Tamizh Tech Robotics</h2>
          <p className="text-[#858E9B] font-bold uppercase mt-3 text-xs tracking-wider">Target: Robotics Company in Tamil Nadu</p>
        </div>

        {/* Structured Answers Sections */}
        <div className="space-y-12">
          
          <section className="space-y-4">
            <h3 className="text-lg font-heading font-black uppercase text-[#F5F6F8] tracking-tight">1. Who are we?</h3>
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed uppercase tracking-tight">
              Tamizh Tech Robotics Company is a registered engineering mechatronics startup based in Coimbatore, Tamil Nadu, India. Established on 22 October 2024, we evolved from the Tamizh Robotics Club—a premier network of mechatronics enthusiasts who achieved 180+ winning positions in arenas across India.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-heading font-black uppercase text-[#F5F6F8] tracking-tight">2. What do we do?</h3>
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed uppercase tracking-tight">
              We operate a unified mechatronics ecosystem divided into three core pillars:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-2.5 text-xs text-[#858E9B] font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF4D2D] shrink-0 mt-0.5" /> <strong>Robotics Hardware:</strong> Manufacturing competition bots (Robo Race, Soccer, War, Sumo), RC boats, and sensor kits.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#858E9B] font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF4D2D] shrink-0 mt-0.5" /> <strong>Academic Lab Setup:</strong> Setting up STEM labs, robotics labs, and AI labs in school and college campuses.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#858E9B] font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF4D2D] shrink-0 mt-0.5" /> <strong>B2B Factory Automation:</strong> Programming PLCs/SCADA systems, deploying AMRs, and installing OpenCV machine vision inspection cells.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-heading font-black uppercase text-[#F5F6F8] tracking-tight">3. Who do we help?</h3>
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed uppercase tracking-tight">
              We serve K-12 students who want to build their mechatronics skills, engineering colleges wanting R&D setups and final year project support, and manufacturing units in Coimbatore seeking factory floor automation and cycle time optimization.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-heading font-black uppercase text-[#F5F6F8] tracking-tight">4. Why are we trusted?</h3>
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed uppercase tracking-tight">
              Our trust is established on direct on-ground track achievements. With over 200+ technical events participated, 15+ international event won, and ₹8 Lakhs+ in prize money won, our engineering guidelines are proven in the most rigorous testing cages in India. We maintain a strategic support network spanning 15+ Indian states.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-heading font-black uppercase text-[#F5F6F8] tracking-tight">5. What makes us different?</h3>
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed uppercase tracking-tight">
              Unlike traditional B2C suppliers that only trade imported components, we are developers and mechatronic design architects. We design, machine, and calibrate our chassis blocks, motor gear ratios, and PCB lines in-house. This cuts dependency on component imports, passing down the cost-benefit to our institutional partners.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-heading font-black uppercase text-[#FF4D2D] tracking-tight font-sans">Why Choose Tamizh Tech Robotics?</h3>
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed uppercase tracking-tight">
              We offer a complete lifecycle mechatronics setup. From simple tinkering blocks for primary schools, up to ROS mechatronic systems for engineering departments and high-uptime AGV platforms for automation clients, we are a single window robotics partner.
            </p>
          </section>

        </div>

        {/* Lead Capture Box */}
        <div className="p-8 bg-[#11141A] border border-[#232833] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-16">
          <div>
            <h4 className="text-base font-black uppercase text-[#F5F6F8] tracking-tight">Connect with Tamil Nadu's Robotics Leader</h4>
            <p className="text-xs text-[#858E9B] font-bold uppercase mt-1">Book an on-site lab demonstration or request a pricing sheet.</p>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="btn-primary py-3 px-6 text-xs flex-1 md:flex-none text-center">
              Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* FAQ Hub */}
        <section className="mt-20 border-t border-[#232833] pt-12">
          <h3 className="text-xl font-heading font-black uppercase text-[#F5F6F8] mb-8 tracking-tight">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#232833] pb-4">
                <h4 className="text-xs font-black uppercase text-[#F5F6F8] mb-2">{faq.q}</h4>
                <p className="text-xs text-[#858E9B] font-bold uppercase leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
