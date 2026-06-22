import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Products",
    links: [
      { name: "Robo Race Bots", href: "/products?category=Robo%20Race%20Bots" },
      { name: "Robo Soccer Bots", href: "/products?category=Robo%20Soccer%20Bots" },
      { name: "Robo Sumo Bots", href: "/products?category=Robo%20Sumo%20Bots" },
      { name: "Line Follower Robots", href: "/products?category=Line%20Follower%20Robots" },
      { name: "STEM Kits", href: "/products?category=STEM%20Learning%20Kits" },
      { name: "School Lab Kits", href: "/products?category=School%20Robotics%20Lab%20Kits" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Schools", href: "/schools" },
      { name: "Colleges", href: "/colleges" },
      { name: "Industries", href: "/industries" },
      { name: "STEM Labs", href: "/schools" },
      { name: "Industrial Automation", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Founder", href: "/founder" },
      { name: "Achievements", href: "/#achievements" },
      { name: "Gallery", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "SEO Pages",
    links: [
      { name: "About Tamizh Tech", href: "/about-tamizh-tech" },
      { name: "Robotics Company in Coimbatore", href: "/robotics-company-in-coimbatore" },
      { name: "Robotics Products India", href: "/robotics-products-india" },
      { name: "STEM Education India", href: "/stem-education-india" },
      { name: "Industrial Automation Coimbatore", href: "/industrial-automation-coimbatore" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/tamizh-tech-robotics-company", label: "LinkedIn" },
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/tamizh_tech_robotics_company", label: "Instagram" },
  { icon: <FaYoutube className="size-5" />, href: "https://www.youtube.com/@covaiscientist", label: "YouTube" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/918148045030", label: "WhatsApp" },
];

const defaultLegalLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookies" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo/TTRC LOGO.png",
    alt: "TamizhTech Logo",
    title: "TamizhTech Industrial",
  },
  sections = defaultSections,
  description = "Tamizh Tech Robotics Company is a world-class B2C + B2B mechatronics platform in Coimbatore. We build high-performance products, design modular tinkering labs, and deploy custom industrial mechatronics nodes.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Tamizh Tech Robotics Company. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="py-24 bg-white border-t border-[#E5E5E5] text-[#111111] text-left">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start lg:text-left">
          
          {/* Column 1: Company Profile & Contacts */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start items-center text-center lg:text-left max-w-sm">
            
            {/* Logo */}
            <div className="flex items-center gap-4 lg:justify-start justify-center group cursor-pointer">
              <Link href={logo.url} className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black tracking-tighter text-[#111111] uppercase">
                    TAMIZH <span className="text-[#FF6B00]">TECH</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.25em] font-black text-gray-400 mt-0.5">Robotics Company</span>
                </div>
              </Link>
            </div>
            
            <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed mt-2">
              {description}
            </p>

            {/* Direct Contact Details Block */}
            <div className="space-y-2 mt-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider w-full text-center lg:text-left">
              <div className="flex items-center gap-2 lg:justify-start justify-center">
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>+91 81480 45030 / 84386 86030</span>
              </div>
              <div className="flex items-center gap-2 lg:justify-start justify-center">
                <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span className="lowercase">contact@tamizhtech.in</span>
              </div>
              <div className="flex items-center gap-2 lg:justify-start justify-center">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            <ul className="flex items-center space-x-6 text-gray-400 justify-center lg:justify-start mt-4">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-[#FF6B00] transition-all">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2-5: Menu Groups */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-8 w-full flex-grow">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center sm:text-left">
                <h3 className="mb-6 font-black text-[#111111] text-[10px] uppercase tracking-[0.25em]">{section.title}</h3>
                <ul className="space-y-3.5 text-[9px] text-gray-500 font-black uppercase tracking-widest">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-[#FF6B00] transition-colors w-fit sm:mx-0 mx-auto"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Footer bottom */}
        <div className="mt-20 pt-10 border-t border-[#E5E5E5] flex flex-col justify-between gap-6 text-[9px] font-black text-gray-400 md:flex-row md:items-center items-center text-center uppercase tracking-widest">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-6 md:order-2 md:flex-row items-center">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#FF6B00] transition-colors">
                <Link href={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
