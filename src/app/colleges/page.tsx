import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  BookOpen, 
  Send, 
  Trophy, 
  Microscope, 
  Truck, 
  Users, 
  Share2
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "College Robotics Lab Setup & Engineering R&D | Tamizh Tech Robotics Company",
  description: "Turnkey R&D setups, competition team training, final year engineering project guidance, and department collaborations. Coimbatore core, pan-India scale.",
  keywords: [
    "robotics lab setup india", 
    "college final year projects coimbatore", 
    "engineering research robots", 
    "robotics competition training"
  ],
  openGraph: {
    title: "Engineering & College Collaborations | Tamizh Tech",
    description: "Support for engineering and technology departments. Setup research labs, source high-performance robotics hardware, and sponsor technical competition teams.",
    url: "https://tamizhtech.in/colleges",
    type: "website"
  }
};

const collegeFaqs = [
  {
    q: "How does Tamizh Tech support final year student projects?",
    a: "We supply core hardware (sensors, motor controllers, STM32 nodes), guide mechanical designs in CAD, and assist in debugging embedded firmware (C/C++ or ROS) at our Coimbatore R&D hub."
  },
  {
    q: "Can you train our college team for national robotics events?",
    a: "Yes, our team has over 180+ winning positions in arenas like IIT Madras Shaastra, Technoxian, Quantum-X, and PSG Kriya. We offer intense training bootcamps and supply competition-grade bot structures."
  },
  {
    q: "What R&D setups do you provide for departments?",
    a: "We design and install advanced setups such as autonomous mobile robot (AMR) test grids, drone flight test cells, and multi-axis pick-and-place robotic workcells."
  }
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": collegeFaqs.map(faq => ({
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
        "name": "Colleges Program",
        "item": "https://tamizhtech.in/colleges"
      }
    ]
  }
];

const formInputClass = "w-full bg-[#181C24] border border-[#232833] px-4 py-3.5 text-[#F5F6F8] font-bold text-xs rounded-lg outline-none transition-all focus:border-[#FF4D2D] focus:ring-1 focus:ring-[#FF4D2D] placeholder-gray-400 placeholder:opacity-60 appearance-none";

export default function CollegesPage() {
  return (
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen text-[#F5F6F8] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 border-l-4 border-[#FF4D2D] pl-6 md:pl-10 py-4">
          <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-6 font-sans">Engineering Solutions</h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] uppercase">
            Incubating R&D & <br /> Technical Excellence.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA1AC] leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-6 md:mt-8">
            Support engineering institutions with customized research robot development, competition training bootcamps, final-year project guidance, and structural hardware supply.
          </p>
        </div>

        {/* Pillars of Collaboration */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Microscope className="w-8 h-8" />,
              title: "R&D Lab Setup",
              desc: "Deploying advanced test rigs, AMR fleets, CNC training machinery, and computer-vision sandboxes."
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "Competition Teams",
              desc: "Technical mentoring, arena simulation setups, and structural components supply for national/international challenges."
            },
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Final Year Projects",
              desc: "Embedded C coding support, mechanical CAD designs, and hardware validation for engineering departments."
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: "Hardware Supply",
              desc: "High-spec DC gear motors, lithium cells, STM32 MCU boards, and custom CNC cut parts."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Student Mentorship",
              desc: "Direct access to international engineering winners, providing workshops, certifications, and portfolio coordinates."
            },
            {
              icon: <Share2 className="w-8 h-8" />,
              title: "Department Ties",
              desc: "Conducting university symposium workshops, faculty training, and joint research paper structures."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#11141A] border border-[#232833] p-8 rounded-2xl hover:border-[#FF4D2D] transition-colors flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#FF4D2D]/10 text-[#FF4D2D] border border-[#FF4D2D]/20 rounded-xl w-fit mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-black uppercase text-[#F5F6F8] tracking-tight mb-2">{item.title}</h3>
                <p className="text-xs text-[#9AA1AC] font-bold uppercase leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Lead Capture Form */}
        <section className="max-w-4xl mx-auto mb-24" id="colleges-form">
          <div className="border border-[#232833] rounded-2xl bg-[#11141A] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FF4D2D]" />
            <span className="text-[9px] font-black text-[#FF4D2D] uppercase tracking-[0.3em] mb-3 block">Research Tie-up</span>
            <h3 className="text-2xl md:text-3xl font-heading font-black uppercase text-[#F5F6F8] tracking-tighter mb-4">Request R&D Collaboration & Quote</h3>
            <p className="text-xs text-[#858E9B] font-bold uppercase tracking-wider mb-8">Elevate your institution's technical rating. Fill in the details to register your requirement for research setup quotes or workshop sponsorships.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Representative Name & Title</label>
                  <input required type="text" placeholder="Dr. Rajkumar (HOD, Mechatronics)" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Department Email Coordinate</label>
                  <input required type="email" placeholder="mechatronics@college.edu" className={formInputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Mobile / Direct Phone</label>
                  <input required type="text" placeholder="+91 XXXXX XXXXX" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Institution Name & Address</label>
                  <input required type="text" placeholder="PSG College of Technology, Coimbatore" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Interest Category</label>
                  <div className="relative">
                    <select className={formInputClass + " cursor-pointer"}>
                      <option>Research Lab Setup</option>
                      <option>Competition Bot Supply</option>
                      <option>Syllabus & Workshop Sponsorship</option>
                      <option>Final Year Project Kits</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#858E9B] w-2 h-2 pointer-events-none"></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Project Details / Component List</label>
                <textarea rows={4} placeholder="Briefly detail what you are looking for (e.g. pneumatic components, CNC cut chassis, brushless motor speed controllers, specialized sensor arrays)..." className={formInputClass + " resize-none"} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="btn-primary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1">
                  Request Collaboration & Quote <Send className="w-4 h-4" />
                </button>
                <a 
                  href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I'm%20a%20faculty%2Fstudent%20representative%20from%20an%20engineering%20college%20inquiring%20about%20R%26D%20solutions." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1 text-center border-[#232833] hover:border-[#FF4D2D]"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#FF4D2D]" /> Fast College WhatsApp Desk
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-2 block">Institutional Support</span>
            <h3 className="text-2xl font-heading font-black uppercase text-[#F5F6F8] tracking-tighter">Academic Program FAQs</h3>
          </div>
          <div className="space-y-4 border-t border-[#232833] pt-6">
            {collegeFaqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#232833] pb-4">
                <h4 className="py-4 text-xs sm:text-sm font-black uppercase tracking-wide text-[#F5F6F8]">{faq.q}</h4>
                <p className="text-xs text-[#9AA1AC] font-medium leading-relaxed pb-4 uppercase tracking-tight">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
