import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  GraduationCap, 
  Check, 
  Send, 
  Cpu, 
  Lightbulb, 
  UserCheck
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "School STEM & Robotics Labs Setup | India | Tamizh Tech Robotics Company",
  description: "Set up world-class Robotics Labs, STEM Labs, and AI Labs in your school. Comprehensive curriculum for Grades 1-12, teacher training, and hardware supply in Tamil Nadu & India.",
  keywords: [
    "robotics lab setup india", 
    "stem education tamil nadu", 
    "school robotics lab coimbatore", 
    "tinkering lab setup pack",
    "teacher training robotics"
  ],
  openGraph: {
    title: "STEM & Robotics Lab Installations for Schools | Tamizh Tech",
    description: "Design, deliver, and commission modular AI, STEM, and Robotics Labs for K-12 academic institutions. Includes certified teacher training and mapped syllabus.",
    url: "https://tamizhtech.in/schools",
    type: "website"
  }
};

const schoolFaqs = [
  {
    q: "What is required to set up a robotics lab in our school?",
    a: "We need a standard ventilated room (minimum 300 sq.ft.) with power sockets and tables. Tamizh Tech provides all the hardware kits, storage bins, chargers, syllabus manuals, and teacher training to make the lab fully operational."
  },
  {
    q: "Is the curriculum mapped to educational boards like CBSE or ICSE?",
    a: "Yes, our STEM and Robotics syllabus is mapped to CBSE, ICSE, and State Board guidelines, focusing on experiential physics, computational thinking, and hands-on coding."
  },
  {
    q: "Do you provide on-ground teacher support?",
    a: "We conduct a comprehensive 3-day teacher training program (on-site or online) and provide ready-to-teach presentation slides, worksheets, and continuous coordinates throughout the academic year."
  }
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": schoolFaqs.map(faq => ({
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
        "name": "Schools Program",
        "item": "https://tamizhtech.in/schools"
      }
    ]
  }
];

const formInputClass = "w-full bg-white border border-[#E5E5E5] px-4 py-3.5 text-[#111111] font-bold text-xs rounded-lg outline-none transition-all focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] placeholder-gray-400 placeholder:opacity-60 appearance-none";

export default function SchoolsPage() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mb-20 border-l-4 border-[#FF6B00] pl-6 md:pl-10 py-4">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-6 font-sans">K-12 Education Solutions</h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#111111] tracking-tighter leading-[0.95] uppercase">
            Empower Schools <br /> With Next-Gen Labs.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-6 md:mt-8">
            Complete turnkey solutions to establish STEM, Robotics, and AI Laboratories. Mapped curriculum, certified teacher training, and domestic hardware supplies.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "STEM Labs",
              desc: "Practical application setups teaching physics, mechanics, and math using structural blocks and gear assemblies."
            },
            {
              icon: <Cpu className="w-8 h-8" />,
              title: "Robotics Labs",
              desc: "Hands-on engineering labs covering motor controls, sensors, chassis fabrication, and remote controls."
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: "AI Labs",
              desc: "Advanced modules exploring machine vision, python programming, obstacle guidance, and autonomous logic."
            },
            {
              icon: <UserCheck className="w-8 h-8" />,
              title: "Teacher Training",
              desc: "Empowering school faculty with certified training, presentation files, and ready-to-teach templates."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-2xl hover:border-[#FF6B00] transition-colors flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight mb-2">{pillar.title}</h3>
                <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Grade-Level Mapped Modules */}
        <section className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 md:p-16 rounded-2xl mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-3 block">Structured Syllabus</span>
            <h3 className="text-3xl font-black uppercase text-[#111111] tracking-tighter">Academic Grade Divisions</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">Meticulously mapped steps to guide children from basic linkages to microchip programming.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                range: "Grades 1 - 5",
                focus: "Foundational Mechanics",
                skills: ["Mechanical Linkages", "Gear Assemblies", "Pulley Ratios", "Basic Electrical Loops"],
                kit: "Tinkering STEM Kit"
              },
              {
                range: "Grades 6 - 8",
                focus: "Embedded Systems & Logic",
                skills: ["Sensors & Transistors", "Arduino Programming Basics", "Autonomous Path Tracking", "Line Follower Assembly"],
                kit: "Starter Robotics Kit"
              },
              {
                range: "Grades 9 - 12",
                focus: "Advanced Robotics & AI",
                skills: ["MicroMouse Maze Solving", "STM32 Control & PID Loops", "FPV Drone Assembly", "IoT Cloud Telemetry Nodes"],
                kit: "Enterprise Developer Pack"
              }
            ].map((module, idx) => (
              <div key={idx} className="bg-white border border-[#E5E5E5] p-8 rounded-xl flex flex-col justify-between text-left hover:border-[#FF6B00] hover:shadow-lg transition-all">
                <div>
                  <span className="text-2xl font-black text-[#FF6B00] tracking-tighter block mb-1">{module.range}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-6">{module.focus}</span>
                  
                  <ul className="space-y-3 mb-8">
                    {module.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                        <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" /> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#F0F0F0] text-[9px] font-black uppercase tracking-widest text-[#111111]">
                  Primary Hardware: <span className="text-[#FF6B00]">{module.kit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="max-w-4xl mx-auto mb-24" id="demo-form">
          <div className="border border-[#E5E5E5] rounded-2xl bg-[#FAFAFA] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B00]" />
            <span className="text-[9px] font-black text-[#FF6B00] uppercase tracking-[0.3em] mb-3 block">Lab Consultation</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#111111] tracking-tighter mb-4">Request School Lab Demo</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-8">Establish a benchmark innovation facility in your school. Fill out your details below to schedule an on-site presentation and kit demo.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-sans">Principal / Representative Name</label>
                  <input required type="text" placeholder="John Doe" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-sans">Official Institution Email</label>
                  <input required type="email" placeholder="principal@school.edu.in" className={formInputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-sans">Phone Number</label>
                  <input required type="text" placeholder="+91 XXXXX XXXXX" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-sans">School Name & Location</label>
                  <input required type="text" placeholder="XYZ Public School, Coimbatore" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-sans">Target Student Count</label>
                  <select className={formInputClass}>
                    <option>Under 200 Students</option>
                    <option>200 - 500 Students</option>
                    <option>501 - 1000 Students</option>
                    <option>1000+ Students</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-sans">Specific Goals / Requirements</label>
                <textarea rows={4} placeholder="Describe your expectations (e.g. CBSE lab registration, competition coaching, robotic kits purchase)..." className={formInputClass + " resize-none"} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="btn-primary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1">
                  Request Lab Demo <Send className="w-4 h-4" />
                </button>
                <a 
                  href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I'm%20the%20representative%20of%20a%20school%20and%20interested%20in%20setting%20up%20a%20STEM%2FRobotics%20Lab." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1 text-center"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#FF6B00]" /> Talk via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-2 block">Common Inquiries</span>
            <h3 className="text-2xl font-black uppercase text-[#111111] tracking-tighter">School Program FAQs</h3>
          </div>
          <div className="space-y-4 border-t border-[#E5E5E5] pt-6">
            {schoolFaqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E5E5E5] pb-4">
                <h4 className="py-4 text-xs sm:text-sm font-black uppercase tracking-wide text-[#111111]">{faq.q}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed pb-4 uppercase tracking-tight">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
