import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Check, 
  ExternalLink, 
  MapPin, 
  Send, 
  Trophy,
  User,
  Zap
} from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Founder & CEO | Er. K. Tamizharasan | Tamizh Tech Robotics Company",
  description: "Learn about the journey, technical wins, projects, and vision of Er. K. Tamizharasan, Founder & CEO of Tamizh Tech Robotics Company in Coimbatore.",
  keywords: [
    "founder tamizh tech",
    "Er K Tamizharasan",
    "robotics expert coimbatore",
    "tamizh robotics club leader"
  ],
  openGraph: {
    title: "Er. K. Tamizharasan | Founder & CEO, Tamizh Tech",
    description: "Bridging the gap between theory and industry. Read the journey and vision of Coimbatore's robotics pioneer.",
    url: "https://tamizhtech.in/founder",
    type: "website"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Er. K. Tamizharasan",
  "jobTitle": "Founder & CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Tamizh Tech Robotics Company"
  },
  "url": "https://tamizhtech.in/founder",
  "sameAs": [
    "https://www.linkedin.com/in/tamizharasan-k-robotics",
    "https://www.instagram.com/tamizh_tech_robotics_company",
    "https://youtube.com/@covaiscientist"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  }
};

const breadcrumbSchema = {
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
      "name": "Founder",
      "item": "https://tamizhtech.in/founder"
    }
  ]
};

export default function FounderPage() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Layout: Main Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Avatar & Basic Details (4 cols) */}
          <div className="lg:col-span-4 space-y-8 bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF6B00] mb-6 border border-[#FF6B00]/20 shadow-inner">
                <User className="w-20 h-20 stroke-[1]" />
              </div>
              <h1 className="text-2xl font-black uppercase text-[#111111] tracking-tight">Er. K. Tamizharasan</h1>
              <span className="text-xs font-black text-[#FF6B00] uppercase tracking-wider block mt-1">Founder & CEO</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-2">Tamizh Tech Robotics Company</span>
            </div>

            <div className="border-t border-[#E5E5E5] pt-6 space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                <MapPin className="w-4 h-4 text-[#FF6B00]" /> Coimbatore, Tamil Nadu
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                <Briefcase className="w-4 h-4 text-[#FF6B00]" /> Robotics Product Architect
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-4 text-center">Digital Coordinates</span>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/company/tamizh-tech-robotics-company" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#E5E5E5] rounded-xl text-gray-400 hover:text-[#FF6B00] transition-colors shadow-sm">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/tamizh_tech_robotics_company" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#E5E5E5] rounded-xl text-gray-400 hover:text-[#FF6B00] transition-colors shadow-sm">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@covaiscientist" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-[#E5E5E5] rounded-xl text-gray-400 hover:text-[#FF6B00] transition-colors shadow-sm">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Message section */}
            <div className="border-l-4 border-[#FF6B00] pl-6 py-2">
              <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-2 block">Leadership Message</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-[#111111] tracking-tighter">"Transforming Ideas Into Physical Reality"</h2>
              <p className="text-gray-500 font-bold uppercase mt-4 text-xs tracking-wider leading-relaxed">
                We believe engineering isn't just about formulas on paper; it's about the friction between motors and tracks, the latency of sensors, and the uptime of industrial processors.
              </p>
            </div>

            {/* Biography & Journey */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-[#E5E5E5] pb-2">The Journey</h3>
              <div className="space-y-4 text-gray-600 text-sm font-medium leading-relaxed">
                <p>
                  Er. K. Tamizharasan founded the <strong>Tamizh Robotics Club</strong> in 2021 as a student-led mechatronics lab in Coimbatore. Over three years, he guided the club to participate in over 200 state, national, and international robotics contests, winning 180+ positions and over ₹8 Lakhs in prize money.
                </p>
                <p>
                  In October 2024, he officially registered and transitioned the club into <strong>Tamizh Tech Robotics Company</strong>, focusing on indigenous engineering platforms, K-12 STEM tinkering packages, and custom factory controls.
                </p>
              </div>
            </div>

            {/* Technical Milestones */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-[#E5E5E5] pb-2">Robotics Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "180+ Winning Positions in technical tracks",
                  "Winner at IIT Madras Shaastra 2025/2026 (Robo Soccer)",
                  "Winner at Technoxian World Cup (Robo Race / Robo Soccer)",
                  "Mentored 1000+ engineering students in Tamil Nadu",
                  "Delivered custom weight-lifting AMR platform to logistics partners",
                  "Established turnkey STEM robotics labs in schools"
                ].map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl">
                    <Trophy className="w-5 h-5 text-[#FF6B00] shrink-0" />
                    <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision for Indian Robotics */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-[#E5E5E5] pb-2">Vision for India's Engineering Core</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                "Our primary mission at Tamizh Tech is to eliminate the imports of high-performance robotics hardware in India. We design, source, and machine our components locally in Coimbatore, showing our students that they can build world-class products right here in Tamil Nadu."
              </p>
            </div>

            {/* Contact CTA */}
            <div className="p-8 bg-[#FFF2E6] border border-[#FF6B00]/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-black uppercase text-[#111111] tracking-tight">Direct Consultation Desk</h4>
                <p className="text-xs text-gray-500 font-bold uppercase mt-1">Schedule an academic partnership or custom AMR project audit.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <a href="https://wa.me/918148045030?text=Hello%20Er.%20Tamizharasan!%20I%20would%20like%20to%20discuss%20a%20robotics%20partnership%20with%20Tamizh%20Tech." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" /> Message CEO
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
