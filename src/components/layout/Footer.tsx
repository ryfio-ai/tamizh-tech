"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const productLinks = [
  { label: "Robo Race Bots", href: "/products?category=Robo%20Race%20Bots" },
  { label: "Robo Soccer Bots", href: "/products?category=Robo%20Soccer%20Bots" },
  { label: "Robo Sumo Bots", href: "/products?category=Robo%20Sumo%20Bots" },
  { label: "Line Follower Robots", href: "/products?category=Line%20Follower%20Robots" },
  { label: "STEM Kits", href: "/products?category=STEM%20Learning%20Kits" },
  { label: "School Lab Kits", href: "/products?category=School%20Robotics%20Lab%20Kits" },
];

const solutionLinks = [
  { label: "Schools Solutions", href: "/schools" },
  { label: "Colleges solutions", href: "/colleges" },
  { label: "Industries Solutions", href: "/industries" },
  { label: "STEM Labs Package", href: "/schools#stem-labs" },
  { label: "Industrial Automation", href: "/industries#automation" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Founder Profile", href: "/founder" },
  { label: "Achievements", href: "/about#achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const seoLinks = [
  { label: "About Tamizh Tech", href: "/about-tamizh-tech" },
  { label: "Robotics Company in Coimbatore", href: "/robotics-company-in-coimbatore" },
  { label: "Robotics Products India", href: "/robotics-products-india" },
  { label: "STEM Education India", href: "/stem-education-india" },
  { label: "Industrial Automation Coimbatore", href: "/industrial-automation-coimbatore" },
];

const social = [
  { icon: FaLinkedin,  href: "https://www.linkedin.com/company/tamizh-tech-robotics-company", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/tamizh_tech_robotics_company", label: "Instagram" },
  { icon: FaYoutube,   href: "https://www.youtube.com/@covaiscientist", label: "YouTube" },
  { icon: FaWhatsapp,  href: "https://wa.me/918148045030", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-white text-text-secondary border-t border-border">
      {/* Upper Footer */}
      <div className="container py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo/TTRC LOGO.png" alt="TamizhTech" width={40} height={40} className="object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-text-primary tracking-tight">
                  TAMIZH<span className="text-accent">TECH</span>
                </span>
                <span className="text-[9px] tracking-[0.18em] text-text-muted uppercase font-bold">
                  Robotics
                </span>
              </div>
            </Link>

            <p className="text-xs text-text-muted leading-relaxed">
              Coimbatore&apos;s premier AI, Robotics & Engineering company. Building intelligent hardware ecosystems under the Made in India vision.
            </p>

            <div className="space-y-3 text-xs">
              <a href="tel:+918148045030" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 81480 45030</span>
              </a>
              <a href="https://wa.me/918148045030" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <FaWhatsapp className="w-4 h-4 text-accent shrink-0" />
                <span>+91 81480 45030</span>
              </a>
              <a href="mailto:info@tamizhtech.com" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@tamizhtech.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-tight text-text-muted">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Links Column 2: Products */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Products</h3>
            <ul className="space-y-3 text-xs">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Solutions */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3 text-xs">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 4: Company */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-xs">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 5: SEO Pages */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Regional Focus</h3>
            <ul className="space-y-3 text-xs">
              {seoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Social / Newsletter Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-border bg-subtle text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Proudly Engineered in India 🇮🇳
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-subtle">
        <div className="container py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Tamizh Tech Robotics Company. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
