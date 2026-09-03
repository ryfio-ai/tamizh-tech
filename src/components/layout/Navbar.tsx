"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products", desc: "Our unified robotics catalog" },
      { label: "Competition Bots", href: "/products/competition", desc: "National event combat & race bots" },
      { label: "Radio Controllers", href: "/products/radio-controllers", desc: "FlySky & precision transmitters" },
      { label: "RC Robo Race", href: "/products/competition/rc-robo-race", desc: "High-RPM drift & racing bot" }
    ]
  },
  {
    label: "Solutions",
    href: "/schools",
    children: [
      { label: "Schools", href: "/schools", desc: "STEM, AI, and Robotics Labs" },
      { label: "Colleges", href: "/colleges", desc: "R&D lab setup & project mentoring" },
      { label: "Industries", href: "/industries", desc: "PLC/SCADA & OpenCV vision" },
      { label: "Robotics Club", href: "/robotics-club/join", desc: "Join our exclusive student club" }
    ]
  },
  { label: "Training", href: "/courses" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", desc: "Company journey & vision" },
      { label: "Founder Profile", href: "/founder", desc: "Er. K. Tamizharasan" },
      { label: "Robotics in Coimbatore", href: "/robotics-company-in-coimbatore", desc: "Regional engineering core" },
      { label: "Achievements", href: "/about#achievements", desc: "National awards & records" },
      { label: "Gallery", href: "/gallery", desc: "Photos and videos from labs" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center px-4 pointer-events-none"
      >
        <div 
          className="w-full max-w-6xl flex items-center justify-between h-14 md:h-16 px-6 rounded-full border border-border/80 bg-white/95 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 pointer-events-auto"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo/TTRC LOGO.png"
              alt="TamizhTech Robotics Company"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight text-text-primary">
                TAMIZH<span className="text-accent">TECH</span>
              </span>
              <span className="text-[7px] tracking-[0.06em] text-text-muted font-bold uppercase mt-0.5">
                Robotics Company
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-text-primary hover:text-accent transition-colors rounded-full hover:bg-subtle">
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white/90 backdrop-blur-lg border border-border/80 rounded-2xl shadow-xl p-3 grid grid-cols-2 gap-1 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-subtle transition-colors group"
                          >
                            <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-text-muted">{child.desc}</span>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 mt-1 border-t border-border">
                          <Link
                            href={link.href}
                            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                          >
                            View all services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-text-primary hover:text-accent transition-colors rounded-full hover:bg-subtle"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="outline" size="sm" className="rounded-full">
                Get Quote
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="primary" size="sm" className="rounded-full">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 rounded-full text-text-primary hover:bg-subtle transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[320px] bg-white/80 backdrop-blur-lg border-l border-border/80 shadow-2xl z-50 xl:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/logo/TTRC LOGO.png" alt="TamizhTech" width={32} height={32} className="object-contain" />
                  <span className="font-extrabold text-text-primary text-sm">TAMIZH<span className="text-accent">TECH</span></span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-subtle transition-colors">
                  <X className="w-5 h-5 text-text-primary" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-colors"
                    >
                      {link.label}
                      {link.children && <ChevronDown className="w-4 h-4 text-text-muted" />}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-border pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-xs text-text-muted hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-5 border-t border-border space-y-2">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/courses" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button variant="primary" size="sm" className="w-full justify-center">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
