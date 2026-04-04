import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
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
    title: "Solutions",
    links: [
      { name: "Industrial Automation", href: "/solutions#automation" },
      { name: "Robotics Integration", href: "/solutions#robotics" },
      { name: "AI Vision Systems", href: "/solutions#ai-vision" },
      { name: "IoT & Monitoring", href: "/solutions#iot" },
      { name: "Software Development", href: "/solutions#software" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Manufacturing", href: "/industries#manufacturing" },
      { name: "OEM & Engineering", href: "/industries#oem" },
      { name: "Logistics", href: "/industries#logistics" },
      { name: "R&D Labs", href: "/industries#rd" },
      { name: "MSMEs", href: "/industries#msme" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Products", href: "/products" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Secondary",
    links: [
      { name: "Tamil Robotics Club (TRC)", href: "/robotics-club" },
      { name: "Courses", href: "/courses" },
      { name: "Gallery", href: "/gallery" },
      { name: "Careers", href: "/careers" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/tamizh-tech-robotics-company", label: "LinkedIn" },
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/tamizh_tech_pvt_ltd", label: "Instagram" },
  { icon: <FaYoutube className="size-5" />, href: "https://www.youtube.com/@covaiscientist", label: "YouTube" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/918148045030", label: "WhatsApp" },
];

const defaultLegalLinks = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo/TTRC LOGO.png",
    alt: "TamizhTech Logo",
    title: "TamizhTech Industrial",
  },
  sections = defaultSections,
  description = "Tamizh Tech is a multi-disciplinary engineering firm specialized in industrial robotics, AI vision integration, and enterprise software development. We build scalable hardware and software systems for global manufacturers.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Tamizh Tech Pvt Ltd. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <footer className="py-24 bg-white border-t border-border-light text-text-primary">
            <div className="container mx-auto px-6">
                <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-10 lg:items-start items-center text-center lg:text-left">
                        {/* Logo */}
                        <div className="flex items-center gap-4 lg:justify-start justify-center group cursor-pointer">
                            <Link href={logo.url} className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-main flex items-center justify-center rounded-xs group-hover:bg-primary-hover transition-colors">
                                    <span className="font-black text-white text-xl uppercase tracking-tighter">TT</span>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-2xl font-black tracking-tighter text-text-primary uppercase">
                                        TAMIZH <span className="text-primary-main">TECH</span>
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-text-muted mt-1">Pvt Ltd | Engineering & Software</span>
                                </div>
                            </Link>
                        </div>
                        <p className="max-w-[400px] text-xs text-text-secondary font-medium leading-relaxed mx-auto lg:mx-0">
                            {description}
                        </p>
                        <ul className="flex items-center space-x-6 text-text-muted justify-center lg:justify-start mt-6">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-primary-main transition-all">
                                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid w-full gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx} className="text-center sm:text-left">
                                <h3 className="mb-8 font-black text-text-primary text-[10px] uppercase tracking-[0.25em]">{section.title}</h3>
                                <ul className="space-y-4 text-[10px] text-text-secondary font-black uppercase tracking-widest">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary-main transition-colors w-fit md:mx-0 mx-auto"
                                        >
                                            <Link href={link.href}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-24 pt-12 border-t border-border-light flex flex-col justify-between gap-8 text-[10px] font-bold text-text-muted md:flex-row md:items-center items-center text-center uppercase tracking-widest">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-6 md:order-2 md:flex-row items-center">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary-main transition-colors">
                                <Link href={link.href}> {link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 flex justify-center lg:justify-start">
                   <p className="text-[9px] text-text-muted font-bold tracking-widest italic opacity-50 uppercase">Designed for Industrial Intelligence.</p>
                </div>
            </div>
        </footer>
    );
};
;
