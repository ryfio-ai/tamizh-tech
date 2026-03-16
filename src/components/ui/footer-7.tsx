import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Footer7Props {
  logo?: {
    url: string;
    src: any; // Using any for require() compatibility
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
    title: "Product",
    links: [
      { name: "Robotics Club", href: "/robotics-club" },
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
      { name: "Clients", href: "/clients" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Courses", href: "/courses" },
      { name: "Join Club", href: "/robotics-club" },
      { name: "WhatsApp Us", href: "https://wa.me/918148045030" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/918148045030", label: "WhatsApp" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: require("@/public/logo/TTRC LOGO.png"),
    alt: "TamizhTech Logo",
    title: "TamizhTech Robotics",
  },
  sections = defaultSections,
  description = "Transforming ideas into innovation through accessible robotics, AI, IoT, and automation solutions. Based in Coimbatore, serving India.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} TamizhTech Robotics Company. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="py-24 bg-white border-t border-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start items-center text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start justify-center group cursor-pointer">
              <Link href={logo.url} className="flex items-center gap-3">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-bold tracking-wider text-gray-900 group-hover:text-cyan-600 transition-colors">
                    TAMIZH<span className="text-cyan-600">TECH</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Robotics Company</span>
                </div>
              </Link>
            </div>
            <p className="max-w-[320px] text-sm text-gray-500 leading-relaxed mx-auto lg:mx-0">
              {description}
            </p>
            <ul className="flex items-center space-x-5 text-gray-400 justify-center lg:justify-start">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-cyan-600 transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center sm:text-left">
                <h3 className="mb-5 font-bold text-gray-900 text-sm uppercase tracking-wider">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-cyan-600 transition-colors"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-gray-100 pt-10 text-xs font-semibold text-gray-400 md:flex-row md:items-center items-center text-center">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row items-center">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-cyan-600 transition-colors">
                <Link href={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
