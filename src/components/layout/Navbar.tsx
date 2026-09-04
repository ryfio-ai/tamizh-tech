"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  ArrowRight,
  Printer,
  Scissors,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  solutionsMegaMenu, 
  productsDropdown, 
  servicesMegaMenu, 
  learnDropdown, 
  companyDropdown 
} from "@/data/navigation";
import { SearchModal } from "@/components/search/SearchModal";
import { QuoteModal } from "@/components/forms/QuoteModal";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll shadow/compact transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === "Escape") {
        setActiveMenu(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setActiveMenu(null);
    setIsOpen(false);
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body scroll lock on mobile drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Active link check
  const isNavActive = (key: string) => {
    if (key === "Home" && pathname === "/") return true;
    if (key === "Solutions" && (pathname.startsWith("/solutions") || pathname.startsWith("/schools") || pathname.startsWith("/colleges") || pathname.startsWith("/industries"))) return true;
    if (key === "Products" && pathname.startsWith("/products")) return true;
    if (key === "Services" && (pathname.startsWith("/services") || pathname.startsWith("/industrial-automation-coimbatore"))) return true;
    if (key === "Learn" && (pathname.startsWith("/courses") || pathname.startsWith("/blog") || pathname.startsWith("/events"))) return true;
    if (key === "Projects" && pathname.startsWith("/projects")) return true;
    if (key === "Company" && (pathname.startsWith("/about") || pathname.startsWith("/founder") || pathname.startsWith("/careers") || pathname.startsWith("/contact") || pathname.startsWith("/robotics-club"))) return true;
    return false;
  };

  const openQuote = (serviceId?: string) => {
    setQuoteService(serviceId);
    setIsQuoteOpen(true);
    setActiveMenu(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Oval Header Wrapper */}
      <header
        ref={navRef}
        className="fixed top-3 sm:top-4 left-0 right-0 z-40 w-full flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300"
      >
        <div 
          className={`w-full max-w-[1240px] flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-full border bg-white/95 backdrop-blur-md transition-all duration-300 pointer-events-auto relative ${
            scrolled ? "border-slate-300 shadow-lg" : "border-slate-200/90 shadow-md hover:shadow-lg"
          }`}
        >
          {/* 1. Left: Official Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-full"
            aria-label="Tamizh Tech Robotics Company Home"
          >
            <Image
              src="/logo/TTRC LOGO.png"
              alt="Tamizh Tech Robotics Company Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-tight text-[#111111]">
                TAMIZH<span className="text-[#FF6B00]">TECH</span>
              </span>
              <span className="text-[7.5px] font-bold uppercase tracking-[0.14em] text-slate-500 mt-0.5">
                Robotics Company
              </span>
            </div>
          </Link>

          {/* 2. Center: Desktop Top-Level Navigation */}
          <nav 
            className="hidden xl:flex items-center gap-1"
            aria-label="Primary Navigation"
          >
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                isNavActive("Home") 
                  ? "text-[#FF6B00] bg-orange-50" 
                  : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Solutions ▾ (Customer/Audience Mega Menu) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Solutions")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "Solutions" ? null : "Solutions")}
                aria-expanded={activeMenu === "Solutions"}
                aria-controls="solutions-mega-menu"
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isNavActive("Solutions") || activeMenu === "Solutions"
                    ? "text-[#FF6B00] bg-orange-50"
                    : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "Solutions" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "Solutions" && (
                  <motion.div
                    id="solutions-mega-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="fixed left-1/2 -translate-x-1/2 top-18 md:top-22 w-[min(1060px,calc(100vw-32px))] z-50 pointer-events-auto"
                  >
                    <div className="bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-6">
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Customer Solutions</span>
                          <p className="text-[11px] text-slate-500 mt-0.5">Tailored robotics, engineering, and automation programs across customer segments</p>
                        </div>
                        <Link
                          href="/solutions"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                        >
                          <span>Explore All Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-5 gap-4">
                        {solutionsMegaMenu.map((col) => (
                          <div key={col.audience} className="space-y-2.5">
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">{col.audience}</h3>
                              <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{col.tagline}</p>
                            </div>
                            <ul className="space-y-1">
                              {col.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className="block p-1.5 -mx-1 rounded-lg hover:bg-slate-50 transition-colors group"
                                  >
                                    <div className="text-xs font-semibold text-slate-800 group-hover:text-[#FF6B00] transition-colors">
                                      {item.label}
                                    </div>
                                    {item.desc && (
                                      <div className="text-[10px] text-slate-400 line-clamp-1">{item.desc}</div>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products ▾ (Database Categories) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "Products" ? null : "Products")}
                aria-expanded={activeMenu === "Products"}
                aria-controls="products-menu"
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isNavActive("Products") || activeMenu === "Products"
                    ? "text-[#FF6B00] bg-orange-50"
                    : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "Products" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "Products" && (
                  <motion.div
                    id="products-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(500px,calc(100vw-32px))] z-50 pointer-events-auto"
                  >
                    <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-5">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {productsDropdown.categories.map((cat) => (
                          <div key={cat.title} className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">{cat.title}</h4>
                            <div className="space-y-1">
                              {cat.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors block">
                                    {item.label}
                                  </span>
                                  <span className="text-[11px] text-slate-400 line-clamp-1 block mt-0.5">
                                    {item.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">Engineered in Coimbatore</span>
                        <Link
                          href={productsDropdown.viewAllHref}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                        >
                          <span>{productsDropdown.viewAllLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services ▾ (Strategic Highlight: 3D Printing, Laser Cutting, PCB) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "Services" ? null : "Services")}
                aria-expanded={activeMenu === "Services"}
                aria-controls="services-mega-menu"
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isNavActive("Services") || activeMenu === "Services"
                    ? "text-[#FF6B00] bg-orange-50"
                    : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "Services" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "Services" && (
                  <motion.div
                    id="services-mega-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="fixed left-1/2 -translate-x-1/2 top-18 md:top-22 w-[min(960px,calc(100vw-32px))] z-50 pointer-events-auto"
                  >
                    <div className="bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-6">
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Engineering & Prototyping Capabilities</span>
                          <p className="text-[11px] text-slate-500 mt-0.5">Comprehensive hardware design, additive manufacturing, fabrication, and automation</p>
                        </div>
                        <Link
                          href={servicesMegaMenu.viewAllHref}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                        >
                          <span>{servicesMegaMenu.viewAllLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-4 gap-5">
                        {servicesMegaMenu.groups.map((grp) => (
                          <div 
                            key={grp.title} 
                            className={`space-y-2.5 ${grp.isStrategic ? "p-3 -m-1 bg-orange-50/50 rounded-2xl border border-orange-200/80" : ""}`}
                          >
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">{grp.title}</h4>
                              {grp.isStrategic && (
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 bg-[#FF6B00] text-white rounded-full tracking-wider">
                                  Priority
                                </span>
                              )}
                            </div>
                            <div className="space-y-1.5">
                              {grp.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block p-1.5 rounded-lg hover:bg-white hover:shadow-2xs transition-all group"
                                >
                                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors block">
                                    {item.label}
                                  </span>
                                  <span className="text-[10.5px] text-slate-400 line-clamp-1 mt-0.5 block">
                                    {item.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Learn ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Learn")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "Learn" ? null : "Learn")}
                aria-expanded={activeMenu === "Learn"}
                aria-controls="learn-menu"
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isNavActive("Learn") || activeMenu === "Learn"
                    ? "text-[#FF6B00] bg-orange-50"
                    : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
                }`}
              >
                <span>Learn</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "Learn" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "Learn" && (
                  <motion.div
                    id="learn-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(340px,calc(100vw-32px))] z-50 pointer-events-auto"
                  >
                    <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-3 space-y-1">
                      {learnDropdown.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors block">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-slate-400 line-clamp-1 block mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Projects (Direct High-Trust Link) */}
            <Link
              href="/projects"
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                isNavActive("Projects") 
                  ? "text-[#FF6B00] bg-orange-50" 
                  : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
              }`}
            >
              Projects
            </Link>

            {/* Company ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Company")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "Company" ? null : "Company")}
                aria-expanded={activeMenu === "Company"}
                aria-controls="company-menu"
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isNavActive("Company") || activeMenu === "Company"
                    ? "text-[#FF6B00] bg-orange-50"
                    : "text-[#111111] hover:text-[#FF6B00] hover:bg-slate-50"
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "Company" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "Company" && (
                  <motion.div
                    id="company-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-3 w-[min(320px,calc(100vw-32px))] z-50 pointer-events-auto"
                  >
                    <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-3 space-y-1">
                      {companyDropdown.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors block">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-slate-400 line-clamp-1 block mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* 3. Right: Search Trigger & Primary "GET A QUOTE" CTA */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 bg-slate-100/90 hover:bg-slate-200/80 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              aria-label="Open global search"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search</span>
              <kbd className="text-[10px] font-mono text-slate-400 px-1 py-0.5 bg-white rounded-full">⌘K</kbd>
            </button>

            {/* Primary CTA: GET A QUOTE (Oval Pill) */}
            <button
              type="button"
              onClick={() => openQuote()}
              className="px-4 py-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xs hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Right Controls: Search icon + Hamburger */}
          <div className="flex xl:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-over Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-[340px] max-w-[85vw] bg-white border-l border-[#E5E5E5] shadow-2xl z-50 xl:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/logo/TTRC LOGO.png" alt="Tamizh Tech" width={32} height={32} />
                  <span className="font-extrabold text-[#111111] text-sm">
                    TAMIZH<span className="text-[#FF6B00]">TECH</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Search Entry */}
              <div className="p-4 border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-full"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search anything...</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">⌘K</span>
                </button>
              </div>

              {/* Drawer Links Accordion */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                >
                  Home
                </Link>

                {/* Solutions Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === "Solutions" ? null : "Solutions")}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === "Solutions" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "Solutions" && (
                    <div className="ml-3 pl-3 border-l border-slate-200 py-1 space-y-3">
                      {solutionsMegaMenu.map(col => (
                        <div key={col.audience} className="space-y-1">
                          <span className="text-[11px] font-bold uppercase text-slate-400 block px-2">{col.audience}</span>
                          {col.items.map(item => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-2 py-1 text-xs text-slate-600 hover:text-[#FF6B00]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Products Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === "Products" ? null : "Products")}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === "Products" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "Products" && (
                    <div className="ml-3 pl-3 border-l border-slate-200 py-1 space-y-1">
                      <Link
                        href="/products/competition"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                      >
                        Competition Robots
                      </Link>
                      <Link
                        href="/products/radio-controllers"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                      >
                        Radio Controllers
                      </Link>
                      <Link
                        href="/products"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs font-bold text-[#FF6B00]"
                      >
                        View All Products →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === "Services" ? null : "Services")}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === "Services" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "Services" && (
                    <div className="ml-3 pl-3 border-l border-slate-200 py-1 space-y-1">
                      <Link
                        href="/services#3d-printing"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs font-semibold text-[#FF6B00]"
                      >
                        3D Printing (Design + Print)
                      </Link>
                      <Link
                        href="/services#laser-cutting"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs font-semibold text-[#FF6B00]"
                      >
                        Laser Cutting (Design + Cut)
                      </Link>
                      <Link
                        href="/services#pcb-services"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs font-semibold text-[#FF6B00]"
                      >
                        PCB Services (Design + Assembly)
                      </Link>
                      <Link
                        href="/services#robotics"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                      >
                        Robotics & Automation
                      </Link>
                      <Link
                        href="/industrial-automation-coimbatore"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                      >
                        Industrial Automation
                      </Link>
                      <Link
                        href="/schools"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                      >
                        STEM Labs
                      </Link>
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs font-bold text-[#FF6B00]"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Learn Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === "Learn" ? null : "Learn")}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                  >
                    <span>Learn</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === "Learn" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "Learn" && (
                    <div className="ml-3 pl-3 border-l border-slate-200 py-1 space-y-1">
                      {learnDropdown.items.map(item => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Projects (Direct) */}
                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                >
                  Projects
                </Link>

                {/* Company Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === "Company" ? null : "Company")}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#FF6B00] rounded-xl hover:bg-slate-50"
                  >
                    <span>Company</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === "Company" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "Company" && (
                    <div className="ml-3 pl-3 border-l border-slate-200 py-1 space-y-1">
                      {companyDropdown.items.map(item => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#FF6B00]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="w-full py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm text-center"
                >
                  Get a Quote
                </button>
                <div className="text-center text-[10px] text-slate-400">
                  Tamizh Tech Robotics • Coimbatore
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultService={quoteService} />
    </>
  );
}
