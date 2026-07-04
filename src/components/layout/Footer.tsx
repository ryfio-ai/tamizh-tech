"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us",    href: "/about" },
      { label: "Services",    href: "/services" },
      { label: "Projects",    href: "/projects" },
      { label: "Gallery",     href: "/gallery" },
      { label: "Careers",     href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Robotics",             href: "/services#robotics" },
      { label: "Artificial Intelligence", href: "/services#ai" },
      { label: "Drone Technology",     href: "/services#drone" },
      { label: "IoT Solutions",        href: "/services#iot" },
      { label: "Industrial Automation",href: "/services#automation" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Courses",           href: "/courses" },
      { label: "School Programs",   href: "/courses#school" },
      { label: "College Programs",  href: "/courses#college" },
      { label: "Corporate Training",href: "/courses#corporate" },
      { label: "Summer Camps",      href: "/courses#summer" },
    ],
  },
];

const social = [
  { icon: FaLinkedin,  href: "https://www.linkedin.com/company/tamizh-tech-robotics-company", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/tamizh_tech_robotics_company", label: "Instagram" },
  { icon: FaYoutube,   href: "https://www.youtube.com/@covaiscientist", label: "YouTube" },
  { icon: FaWhatsapp,  href: "https://wa.me/918148045030", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900">
      {/* Upper Footer: Branding, Info, Newsletter */}
      <div className="container py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo/TTRC LOGO.png" alt="TamizhTech" width={40} height={40} className="object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white tracking-tight">
                  TAMIZH<span className="text-accent">TECH</span>
                </span>
                <span className="text-[9px] tracking-[0.18em] text-gray-500 uppercase font-bold">
                  Robotics
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed">
              Coimbatore's premier AI, Robotics & Engineering company. Building intelligent hardware ecosystems and elite talent.
            </p>

            <div className="space-y-3 text-sm">
              <a href="tel:+918148045030" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 81480 45030</span>
              </a>
              <a href="mailto:office@tamizhtech.in" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>office@tamizhtech.in</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-tight">Coimbatore, Tamil Nadu, 641107</span>
              </div>
            </div>
          </div>

          {/* Col 2 & 3: Link arrays */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Newsletter */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Subscribe to stay updated with our latest engineering breakthroughs, courses, and labs.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gray-900 border border-gray-800 rounded-full py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
            <div className="flex items-center gap-3 pt-2">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-900 bg-gray-900/40 text-gray-500 hover:text-white hover:border-gray-800 hover:bg-gray-900 transition-all"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900">
        <div className="container py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} TamizhTech Robotics Company. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <span className="inline-flex items-center gap-1.5 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent.teal animate-pulse" style={{ backgroundColor: "#0D9488", boxShadow: "0 0 8px #0D9488" }} />
              Made in India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
