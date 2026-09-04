"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronUp, ChevronDown, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { QuoteModal } from "@/components/forms/QuoteModal";

// ── Verified Social Links ───────────────────────────────────────────────────────
const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/tamizh-tech-robotics-company", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/tamizh_tech_robotics_company", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@covaiscientist", label: "YouTube" },
  { icon: FaFacebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: FaWhatsapp, href: "https://wa.me/918148045030", label: "WhatsApp" },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  
  // Mobile accordion states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    solutions: false,
    services: false,
    products: false,
    companyLearn: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openQuote = (serviceId?: string) => {
    setQuoteService(serviceId);
    setIsQuoteOpen(true);
  };

  return (
    <>
      {/* Back to Top Floating Trigger */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#FF6B00] hover:bg-[#e05e00] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      <footer className="bg-white border-t border-[#E5E5E5] text-[#111111]">
        {/* ── 1. Main 5-Column Navigation Section ── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Desktop 5 Columns */}
          <div className="hidden lg:grid grid-cols-5 gap-8 items-start">
            {/* Column 1: Brand */}
            <div className="space-y-4 pr-2">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/logo/TTRC LOGO.png"
                  alt="Tamizh Tech Robotics Company"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-extrabold tracking-tight text-[#111111]">
                    TAMIZH<span className="text-[#FF6B00]">TECH</span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 mt-0.5">
                    Robotics Company
                  </span>
                </div>
              </Link>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building practical robotics, automation, and engineering solutions for students, institutions, and businesses across India.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  <span>Robotics & Industrial Automation</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  <span>3D Printing, Laser Cutting & PCB</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  <span>STEM Labs & Institutional R&D</span>
                </div>
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                Solutions
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/products/competition" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Students & Makers
                  </Link>
                </li>
                <li>
                  <Link href="/schools" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Schools (STEM & ATL Labs)
                  </Link>
                </li>
                <li>
                  <Link href="/colleges" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Colleges (R&D & CoE)
                  </Link>
                </li>
                <li>
                  <Link href="/industrial-automation-coimbatore" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Industries & Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Startups & Product Teams
                  </Link>
                </li>
                <li className="pt-1">
                  <Link href="/solutions" className="text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] inline-flex items-center gap-1">
                    Explore Solutions <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                Services
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/services#robotics" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Robotics & Automation
                  </Link>
                </li>
                <li>
                  <Link href="/industrial-automation-coimbatore" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Industrial Automation (PLC/SCADA)
                  </Link>
                </li>
                <li className="pt-1 pb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Rapid Prototyping</span>
                  <div className="space-y-1.5 pl-2 border-l border-orange-200">
                    <Link href="/services#3d-printing" className="text-[#FF6B00] font-semibold hover:underline block">
                      3D Printing (Design + Print)
                    </Link>
                    <Link href="/services#laser-cutting" className="text-[#FF6B00] font-semibold hover:underline block">
                      Laser Cutting (Design + Cut)
                    </Link>
                    <Link href="/services#pcb-services" className="text-[#FF6B00] font-semibold hover:underline block">
                      PCB Services (Design + Assembly)
                    </Link>
                  </div>
                </li>
                <li>
                  <Link href="/services#embedded" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Embedded Systems & Firmware
                  </Link>
                </li>
                <li>
                  <Link href="/services#iot" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    IoT Telemetry & Dashboards
                  </Link>
                </li>
                <li>
                  <Link href="/services#ai" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    AI & Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="/schools" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    STEM Tinkering Labs
                  </Link>
                </li>
                <li className="pt-1">
                  <Link href="/services" className="text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] inline-flex items-center gap-1">
                    View All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Products */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                Products
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/products/competition" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Competition Robots
                  </Link>
                </li>
                <li>
                  <Link href="/products/competition/rc-robo-race" className="text-slate-600 hover:text-[#FF6B00] transition-colors block pl-2 border-l border-slate-200">
                    RC Robo Race Platform
                  </Link>
                </li>
                <li>
                  <Link href="/products/competition/rc-robo-soccer" className="text-slate-600 hover:text-[#FF6B00] transition-colors block pl-2 border-l border-slate-200">
                    RC Robo Soccer Platform
                  </Link>
                </li>
                <li>
                  <Link href="/products/radio-controllers" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Radio Controllers
                  </Link>
                </li>
                <li>
                  <Link href="/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" className="text-slate-600 hover:text-[#FF6B00] transition-colors block pl-2 border-l border-slate-200">
                    FlySky FS-i6X 10CH
                  </Link>
                </li>
                <li className="pt-1">
                  <Link href="/products" className="text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] inline-flex items-center gap-1">
                    View All Products <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Company & Learn */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                Company & Learn
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    About Tamizh Tech
                  </Link>
                </li>
                <li>
                  <Link href="/founder" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Founder Profile (Er. K. Tamizharasan)
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Careers & Internships
                  </Link>
                </li>
                <li>
                  <Link href="/robotics-club/join" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Tamizh Robotics Club (TRC)
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Contact Us
                  </Link>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Knowledge & Training</span>
                </li>
                <li>
                  <Link href="/courses" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Robotics & Embedded Courses
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Technical Engineering Blog
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Verified Projects
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-slate-600 hover:text-[#FF6B00] transition-colors block">
                    Championships & Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion View (< 1024px) */}
          <div className="lg:hidden space-y-4">
            {/* Brand on Mobile */}
            <div className="space-y-3 pb-4 border-b border-slate-100">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo/TTRC LOGO.png" alt="Tamizh Tech" width={38} height={38} />
                <div className="flex flex-col leading-none">
                  <span className="text-base font-extrabold tracking-tight text-[#111111]">
                    TAMIZH<span className="text-[#FF6B00]">TECH</span>
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-500 mt-0.5">
                    Robotics Company
                  </span>
                </div>
              </Link>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building practical robotics, automation, and engineering solutions in Coimbatore, Tamil Nadu.
              </p>
            </div>

            {/* Accordion 1: Solutions */}
            <div className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => toggleAccordion("solutions")}
                className="flex items-center justify-between w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-900"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openAccordions.solutions ? "rotate-180" : ""}`} />
              </button>
              {openAccordions.solutions && (
                <ul className="pt-2 pl-2 space-y-2 text-xs text-slate-600">
                  <li><Link href="/products/competition" className="hover:text-[#FF6B00]">Students & Makers</Link></li>
                  <li><Link href="/schools" className="hover:text-[#FF6B00]">Schools (STEM Labs)</Link></li>
                  <li><Link href="/colleges" className="hover:text-[#FF6B00]">Colleges (R&D)</Link></li>
                  <li><Link href="/industrial-automation-coimbatore" className="hover:text-[#FF6B00]">Industries</Link></li>
                  <li><Link href="/solutions" className="hover:text-[#FF6B00]">Startups & Teams</Link></li>
                </ul>
              )}
            </div>

            {/* Accordion 2: Services */}
            <div className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => toggleAccordion("services")}
                className="flex items-center justify-between w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-900"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openAccordions.services ? "rotate-180" : ""}`} />
              </button>
              {openAccordions.services && (
                <ul className="pt-2 pl-2 space-y-2 text-xs text-slate-600">
                  <li><Link href="/services#3d-printing" className="text-[#FF6B00] font-semibold">3D Printing (Design + Print)</Link></li>
                  <li><Link href="/services#laser-cutting" className="text-[#FF6B00] font-semibold">Laser Cutting (Design + Cut)</Link></li>
                  <li><Link href="/services#pcb-services" className="text-[#FF6B00] font-semibold">PCB Services (Design + Assembly)</Link></li>
                  <li><Link href="/services#robotics" className="hover:text-[#FF6B00]">Robotics & Automation</Link></li>
                  <li><Link href="/industrial-automation-coimbatore" className="hover:text-[#FF6B00]">Industrial Automation</Link></li>
                  <li><Link href="/schools" className="hover:text-[#FF6B00]">STEM Tinkering Labs</Link></li>
                  <li><Link href="/services" className="font-bold text-[#FF6B00]">View All Services →</Link></li>
                </ul>
              )}
            </div>

            {/* Accordion 3: Products */}
            <div className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => toggleAccordion("products")}
                className="flex items-center justify-between w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-900"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openAccordions.products ? "rotate-180" : ""}`} />
              </button>
              {openAccordions.products && (
                <ul className="pt-2 pl-2 space-y-2 text-xs text-slate-600">
                  <li><Link href="/products/competition" className="hover:text-[#FF6B00]">Competition Robots</Link></li>
                  <li><Link href="/products/competition/rc-robo-race" className="hover:text-[#FF6B00]">RC Robo Race</Link></li>
                  <li><Link href="/products/competition/rc-robo-soccer" className="hover:text-[#FF6B00]">RC Robo Soccer</Link></li>
                  <li><Link href="/products/radio-controllers" className="hover:text-[#FF6B00]">Radio Controllers (FlySky)</Link></li>
                  <li><Link href="/products" className="font-bold text-[#FF6B00]">View All Products →</Link></li>
                </ul>
              )}
            </div>

            {/* Accordion 4: Company & Learn */}
            <div className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => toggleAccordion("companyLearn")}
                className="flex items-center justify-between w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-900"
              >
                <span>Company & Learn</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openAccordions.companyLearn ? "rotate-180" : ""}`} />
              </button>
              {openAccordions.companyLearn && (
                <ul className="pt-2 pl-2 space-y-2 text-xs text-slate-600">
                  <li><Link href="/about" className="hover:text-[#FF6B00]">About Us</Link></li>
                  <li><Link href="/founder" className="hover:text-[#FF6B00]">Founder Profile</Link></li>
                  <li><Link href="/careers" className="hover:text-[#FF6B00]">Careers</Link></li>
                  <li><Link href="/robotics-club/join" className="hover:text-[#FF6B00]">Robotics Club</Link></li>
                  <li><Link href="/contact" className="hover:text-[#FF6B00]">Contact</Link></li>
                  <li><Link href="/courses" className="hover:text-[#FF6B00]">Courses</Link></li>
                  <li><Link href="/blog" className="hover:text-[#FF6B00]">Technical Blog</Link></li>
                  <li><Link href="/projects" className="hover:text-[#FF6B00]">Projects</Link></li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* ── 2. Conversion Strip ("Have a project or requirement? Let's build it.") ── */}
        <div className="bg-slate-50 border-t border-b border-[#E5E5E5] py-8">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                  Engineering Consultation & Sourcing
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 font-heading">
                Have a project or requirement? <span className="text-[#FF6B00]">Let&apos;s build it.</span>
              </h4>
              <p className="text-xs text-slate-500">
                Custom prototypes, 3D printing batches, PCB assemblies, competition platforms, or institutional lab setups.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openQuote()}
                className="px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              >
                Get a Quote
              </button>
              <a
                href="https://wa.me/918148045030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs rounded-xl shadow-2xs transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 3. Verified Contact Details & Social Profiles ── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600">
            {/* NAP Info */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-center md:text-left">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Thiruchendur Gdn Rd, Kurumbapalayam, Coimbatore, Tamil Nadu 641107</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href="tel:+918148045030" className="hover:text-[#FF6B00]">+91 8148045030</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href="mailto:info@tamizhtech.in" className="hover:text-[#FF6B00]">info@tamizhtech.in</a>
              </div>
            </div>

            {/* Official Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] transition-colors"
                    aria-label={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 4. Legal & Trust Bar ── */}
        <div className="border-t border-[#E5E5E5] bg-slate-50 py-4 text-[11px] text-slate-500">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} Tamizh Tech Robotics Company. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="hover:text-[#FF6B00] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/terms" className="hover:text-[#FF6B00] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/cookies" className="hover:text-[#FF6B00] transition-colors">
                Cookie Policy
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/sitemap.xml" className="hover:text-[#FF6B00] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Modal bound to footer CTA */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultService={quoteService} />
    </>
  );
}
