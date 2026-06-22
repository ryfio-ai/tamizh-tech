import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Robotics Company in Coimbatore | Training & Labs | Tamizh Tech",
  description: "Tamizh Tech is the premier robotics company in Coimbatore, Tamil Nadu, supplying mechatronic parts, custom competition kits, and student internship training.",
  keywords: [
    "robotics company in coimbatore",
    "robotics training coimbatore",
    "mechatronics engineering coimbatore",
    "coimbatore robotics club"
  ],
  openGraph: {
    title: "Tamizh Tech Robotics Company | Coimbatore",
    description: "Coimbatore's premium mechatronics startup. Training bootcamps, school lab installations, and industrial PLC solutions.",
    url: "https://tamizhtech.in/robotics-company-in-coimbatore",
    type: "website"
  }
};

const faqs = [
  {
    q: "Where is Tamizh Tech Robotics located in Coimbatore?",
    a: "Our R&D engineering hub is located in Coimbatore, Tamil Nadu - 641107. We welcome school and college representatives to schedule on-site lab previews and hardware audits."
  },
  {
    q: "Do you offer mechatronics internship training in Coimbatore?",
    a: "Yes, our training division, ThiranOli Academy, offers structured mechatronics and AI training, python programming, and mechatronic design internships at our Coimbatore facility."
  }
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tamizh Tech Robotics Company",
    "image": "https://tamizhtech.in/logo/TTRC LOGO.png",
    "@id": "https://tamizhtech.in/#localbusiness",
    "url": "https://tamizhtech.in",
    "telephone": "+918148045030",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Coimbatore",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641107",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0168,
      "longitude": 76.9558
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },
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
        "name": "Robotics Company Coimbatore",
        "item": "https://tamizhtech.in/robotics-company-in-coimbatore"
      }
    ]
  }
];

export default function RoboticsCompanyCoimbatore() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-[#FF6B00] pl-6 py-2">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-4 font-sans">Local SEO Hub</h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#111111] tracking-tighter leading-none">Robotics Company in Coimbatore</h2>
          <p className="text-gray-500 font-bold uppercase mt-3 text-xs tracking-wider">Targets: Robotics Company Coimbatore, Robotics Training Coimbatore</p>
        </div>

        {/* NAP details block */}
        <div className="grid md:grid-cols-2 gap-8 bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-2xl mb-16">
          <div className="space-y-6">
            <h3 className="text-md font-black uppercase text-[#111111] tracking-tight">Location Coordinates</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                <MapPin className="w-5 h-5 text-[#FF6B00]" /> Coimbatore, Tamil Nadu, India - 641107
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                <Phone className="w-5 h-5 text-[#FF6B00]" /> +91 81480 45030 / +91 84386 86030
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                <Mail className="w-5 h-5 text-[#FF6B00]" /> contact@tamizhtech.in
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                <Clock className="w-5 h-5 text-[#FF6B00]" /> 09:00 AM - 06:00 PM (Mon - Sat)
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 flex flex-col justify-between items-center text-center">
            <FaMapMarkedAlt className="w-12 h-12 text-[#FF6B00] mb-4" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Google Maps Placement</span>
            <p className="text-[11px] text-gray-500 font-bold uppercase mt-2">Map pin verified and indexed for local mechatronics engineering searches.</p>
            <a 
              href="https://maps.google.com/?q=Coimbatore+Tamil+Nadu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#FF6B00] hover:text-[#111111] transition-colors flex items-center gap-1"
            >
              Open Live Route Map <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Structured Answers */}
        <div className="space-y-12 mb-20">
          
          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight">Who are we?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We are Er. K. Tamizharasan and the core engineering coordinators of Tamizh Tech Robotics Company. Born from the successful mechatronics student circle "Tamizh Robotics Club" (established in 2021), we operate Coimbatore's leading mechatronics design, prototyping, and assembly house.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight">What do we do?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We serve three engineering areas from our Coimbatore base:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> <strong>Robotics Hardware Prototyping:</strong> Sourcing high-performance motors, ESCs, carbon chassis, and assembling line array sensors and custom competitive bots.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> <strong>STEM Lab Configurations:</strong> Setting up turnkey tinkering labs and school STEM boxes.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> <strong>Robotics Training:</strong> Mentoring students, sponsoring college teams, and conducting workshops on microcontroller programming (STM32, Arduino) and computer vision.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight">Who do we help?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We help local school students looking for hands-on mechatronics classes, college student teams preparing for technical tracks (Robo Soccer, Robo Race, Sumo, War), and local manufacturers requesting mechatronic integration.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight">Why are we trusted?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Our mechatronics models have competed in over 200 events, winning 180+ positions and ₹8 Lakhs+ in cash prizes. When school and college teams buy from us, they acquire mechatronic advice proven to win trophies.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight">What makes us different?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              We are mechatronics engineers, not general resellers. We cut our own chassis templates, calibrate PID loops for speed, and build custom solenoid cylinders locally, allowing us to supply hardware at competitive rates.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight font-sans text-[#FF6B00]">Why Choose Tamizh Tech Robotics?</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Choosing us connects you with Coimbatore's mechatronics heritage. We provide direct on-site support, specialized mechatronics training, and modular lab kits with verified safety standards.
            </p>
          </section>

        </div>

        {/* Lead Form CTA */}
        <div className="p-8 bg-[#FFF2E6] border border-[#FF6B00]/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-black uppercase text-[#111111] tracking-tight">Consult Coimbatore's Robotics Team</h4>
            <p className="text-xs text-gray-500 font-bold uppercase mt-1">Book a lab setup demo or mechatronics training audit.</p>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="btn-primary py-3 px-6 text-xs flex-1 md:flex-none text-center">
              Connect With Us <ArrowRight className="w-4 h-4 ml-2" />
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
