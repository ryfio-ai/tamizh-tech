"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Trophy, 
  HelpCircle, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  Cpu, 
  BatteryCharging, 
  Radio, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare,
  Printer,
  Scissors,
  Bot,
  Factory,
  GraduationCap
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CompetitionGuide } from "@/data/competitionGuides";
import { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteModal, ProductEnquiryContext } from "@/components/forms/QuoteModal";
import { trackMarketingEvent } from "@/lib/analytics";

interface CompetitionGuideClientProps {
  guide: CompetitionGuide;
  products: Product[];
}

const SERVICE_LOOKUP: Record<string, { title: string; desc: string; href: string; icon: any }> = {
  "3d-printing": {
    title: "Precision 3D Printing",
    desc: "Custom lightweight brackets, sensor mounts, and prototype casings in PLA, PETG, and TPU.",
    href: "/services/3d-printing",
    icon: Printer,
  },
  "laser-cutting": {
    title: "Stainless Steel Laser Cutting",
    desc: "Precision CNC cut chassis plates, armor guards, and structural brackets.",
    href: "/services/laser-cutting",
    icon: Scissors,
  },
  "pcb-design-fabrication-assembly": {
    title: "Custom PCB Design & Assembly",
    desc: "Custom motor driver shields, power distribution boards, and microcontroller carrier circuits.",
    href: "/services/pcb-design-fabrication-assembly",
    icon: Cpu,
  },
  "robotics-automation": {
    title: "Robotics & Autonomous Systems",
    desc: "Bespoke kinematics design, sensor fusion integration, and tournament tuning.",
    href: "/services/robotics-automation",
    icon: Bot,
  },
  "industrial-automation": {
    title: "Industrial Automation & Controls",
    desc: "PLC, SCADA, and factory line integration for high-reliability systems.",
    href: "/services/industrial-automation",
    icon: Factory,
  },
};

const COURSE_LOOKUP: Record<string, { title: string; desc: string; href: string }> = {
  "robotics-for-schools": {
    title: "Robotics for Schools & Beginners",
    desc: "Hands-on robotics foundations: electronics, motor drivers, and basic line tracking.",
    href: "/courses/school/robotics-for-schools"
  },
  "embedded-systems": {
    title: "Embedded Systems & IoT",
    desc: "Microcontroller architecture, PID loop firmware, PWM motor control, and RTOS.",
    href: "/courses/college/embedded-systems"
  },
  "drone-engineering": {
    title: "Drone Engineering & Avionics",
    desc: "UAV frame aerodynamics, flight controller tuning, and RF transmitter calibration.",
    href: "/courses/college/drone-engineering"
  },
  "industrial-automation-plc": {
    title: "Industrial Automation (PLC)",
    desc: "High-torque industrial motors, sensor networks, and robust system wiring.",
    href: "/courses/professionals/industrial-automation-plc"
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    desc: "Edge computing, vision algorithms, and autonomous navigation.",
    href: "/courses/college/ai-machine-learning"
  }
};

export default function CompetitionGuideClient({ guide, products }: CompetitionGuideClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteRequirement, setQuoteRequirement] = useState<string | undefined>(undefined);

  const eventEnquiryContext: ProductEnquiryContext = {
    sourceType: "event",
    productName: guide.title,
    categorySlug: guide.categorySlug,
    sourcePage: `/events/${guide.categorySlug}/${guide.slug}`,
  };

  const handleOpenEnquiry = (customReq?: string) => {
    setQuoteRequirement(customReq || `Competition preparation enquiry: ${guide.title}`);
    setIsQuoteOpen(true);
    trackMarketingEvent("product_enquiry_open", {
      productName: guide.title,
      categorySlug: guide.categorySlug,
      sourcePage: `/events/${guide.categorySlug}/${guide.slug}`,
    });
  };

  const handleWhatsApp = () => {
    trackMarketingEvent("whatsapp_click", {
      category: guide.categorySlug,
      source: guide.slug,
    });
    const message = encodeURIComponent(
      `Hello Tamizh Tech! I am preparing for a ${guide.title} event and would like advice on competition kits, motors, and hardware components.`
    );
    window.open(`https://wa.me/918148045030?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* 1. BREADCRUMBS & HERO */}
      <div className="bg-slate-950 text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/events/competition" className="hover:text-white transition-colors">Competitions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#FF6B00] font-medium">{guide.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>{guide.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-4">
              {guide.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8">
              {guide.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleOpenEnquiry()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About Competition Kits</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Technical Team</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* 2. ANSWER-FIRST QUICK ANSWER */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-2">
            <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
            <span>Quick Answer</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold font-heading text-slate-950 mb-3">
            What is {guide.title.replace(" Guide", "")}?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {guide.quickAnswer}
          </p>
        </section>

        {/* 3. TYPICAL COMPETITION FORMAT */}
        <section className="mb-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
          <div className="max-w-3xl mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
              Event Dynamics
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
              {guide.typicalFormat.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Arena & Track Layout
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {guide.typicalFormat.arenaOverview}
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Match & Round Structure
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {guide.typicalFormat.roundStructure}
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Scoring & Penalties
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {guide.typicalFormat.scoringSummary}
              </p>
            </div>
          </div>

          {/* Organizer-Dependent Disclaimer */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Organizer-Dependent Rule Notice: </span>
              {guide.typicalFormat.organizerNote}
            </div>
          </div>
        </section>

        {/* 4. ROBOT ARCHITECTURE & COMPONENT SELECTION */}
        <section className="mb-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
          <div className="max-w-3xl mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
              Engineering Specs
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
              {guide.robotArchitecture.heading}
            </h2>
          </div>

          {/* Technical Specs Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                <Wrench className="w-4 h-4 text-[#FF6B00]" />
                <span>Chassis System</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {guide.robotArchitecture.chassis}
              </p>
            </div>

            <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Drivetrain & Motors</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {guide.robotArchitecture.drivetrain}
              </p>
            </div>

            <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                <BatteryCharging className="w-4 h-4 text-emerald-600" />
                <span>Power System</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {guide.robotArchitecture.power}
              </p>
            </div>

            <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                <Radio className="w-4 h-4 text-purple-600" />
                <span>Radio & Control</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {guide.robotArchitecture.control}
              </p>
            </div>
          </div>

          {/* Sizing & Tolerances Matrix */}
          <div className="p-5 bg-slate-900 text-white rounded-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-4">
              Typical Rulebook Engineering Bounds (Example Tolerances)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">Dimensions</span>
                <span className="font-semibold text-slate-200">{guide.robotArchitecture.specRanges.dimensionRange}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Weight Bounds</span>
                <span className="font-semibold text-slate-200">{guide.robotArchitecture.specRanges.weightRange}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Voltage Ceiling</span>
                <span className="font-semibold text-slate-200">{guide.robotArchitecture.specRanges.voltageRange}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Radio Channel Spec</span>
                <span className="font-semibold text-slate-200">{guide.robotArchitecture.specRanges.channelCount}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PREPARATION STRATEGY & PIT CHECKLIST */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preparation Steps */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
              Field Strategy
            </span>
            <h2 className="text-xl font-bold font-heading text-slate-950 mb-4">
              {guide.preparationStrategy.heading}
            </h2>
            <ul className="space-y-3">
              {guide.preparationStrategy.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pit Spares Checklist */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              Readiness Protocol
            </span>
            <h2 className="text-xl font-bold font-heading text-slate-950 mb-4">
              Pit Spares & Tools Checklist
            </h2>
            <ul className="space-y-3">
              {guide.preparationStrategy.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. COMMON ROOKIE MISTAKES */}
        <section className="mb-14 bg-rose-50/40 rounded-2xl p-6 sm:p-8 border border-rose-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Pitfall Prevention</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950 mb-4">
            Common Tournament Pitfalls & How to Avoid Them
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guide.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-rose-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-rose-700 block mb-1">Mistake #{idx + 1}:</span>
                {mistake}
              </div>
            ))}
          </div>
        </section>

        {/* 7. RELEVANT COMPETITION ROBOTS & HARDWARE KITS (COMMERCIAL PRODUCTS) */}
        {products && products.length > 0 && (
          <section className="mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                  Tournament-Tested Hardware
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
                  Relevant Competition Kits & Components
                </h2>
              </div>
              <Link
                href="/products/competition"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B00] hover:underline"
              >
                <span>View Full Competition Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onEnquire={(p) => handleOpenEnquiry(`Enquiring about ${p.name} for ${guide.title}`)}
                />
              ))}
            </div>
          </section>
        )}

        {/* 8. RECOMMENDED TRAINING & SKILL DEVELOPMENT */}
        {guide.courseSlugs && guide.courseSlugs.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Hands-On Skill Building
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
                Recommended Training & Courses
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {guide.courseSlugs.map((cSlug) => {
                const course = COURSE_LOOKUP[cSlug];
                if (!course) return null;

                return (
                  <Link
                    key={cSlug}
                    href={course.href}
                    className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-all shadow-2xs flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {course.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600">
                      <span>View Course Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 9. CUSTOM ENGINEERING & FABRICATION SERVICES */}
        {guide.serviceSlugs && guide.serviceSlugs.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                Bespoke Prototyping
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
                Custom Engineering & Chassis Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guide.serviceSlugs.map((sSlug) => {
                const service = SERVICE_LOOKUP[sSlug];
                if (!service) return null;
                const Icon = service.icon;

                return (
                  <Link
                    key={sSlug}
                    href={service.href}
                    className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#FF6B00] transition-all shadow-2xs flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-1">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#FF6B00]">
                      <span>Explore Service</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 10. TECHNICAL FAQS ACCORDION (VISIBLE ANSWER-FIRST CONTENT) */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                Engineering Answers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {guide.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-90 text-[#FF6B00]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 11. BOTTOM CONVERSION CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center mb-12 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Preparing for an Upcoming {guide.title.replace(" Guide", "")}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our mechatronics engineering team at Coimbatore provides verified hardware kits, chassis fabrication, motor selection advice, and pit spare packages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Competition Hardware</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Engineering Team</span>
            </button>
          </div>
        </section>
      </div>

      {/* 12. TECHNICAL QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="products"
        defaultRequirement={quoteRequirement}
        productContext={eventEnquiryContext}
      />
    </div>
  );
}
