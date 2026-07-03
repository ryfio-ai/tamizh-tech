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
    title: "Platform",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services & Capabilities", href: "/services" },
      { name: "Specialized Courses", href: "/courses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Projects & Research", href: "/projects" },
      { name: "Gallery Archives", href: "/gallery" },
      { name: "Insights & Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Careers & Openings", href: "/careers" },
      { name: "Contact Coordination", href: "/contact" },
      { name: "Tamil Robotics Club", href: "/robotics-club" },
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
  description = "TamizhTech is a premium robotics and AI startup delivering high-performance educational tracks and smart industrial systems. Engineered for future-ready institutions and developers.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} TamizhTech Robotics. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <footer className="py-20 bg-bg-secondary border-t border-border text-text-secondary">
            <div className="container mx-auto px-6 max-w-[1440px]">
                <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-8 lg:items-start items-center text-center lg:text-left">
                        {/* Logo */}
                        <div className="flex items-center gap-3 lg:justify-start justify-center group cursor-pointer">
                            <Link href={logo.url} className="flex items-center gap-2">
                                <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                                    <Image
                                        src="/logo/TTRC LOGO.png"
                                        alt="TTRC Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-xl font-bold tracking-tighter text-secondary">
                                        TamizhTech<span className="text-primary font-black">.</span>
                                    </span>
                                    <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-text-secondary">Robotics Company</span>
                                </div>
                            </Link>
                        </div>
                        <p className="max-w-[320px] text-xs text-text-secondary font-medium leading-relaxed mx-auto lg:mx-0">
                            {description}
                        </p>
                        <ul className="flex items-center space-x-5 text-text-secondary/70 justify-center lg:justify-start mt-4">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-primary transition-all">
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
                                <h3 className="mb-6 font-bold text-secondary text-xs uppercase tracking-wider">{section.title}</h3>
                                <ul className="space-y-3 text-xs font-medium text-text-secondary">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary transition-colors w-fit md:mx-0 mx-auto"
                                        >
                                            <Link href={link.href}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {/* Newsletter Column */}
                        <div className="flex flex-col text-center sm:text-left gap-4">
                            <h3 className="font-bold text-secondary text-xs uppercase tracking-wider">Newsletter</h3>
                            <p className="text-xs text-text-secondary leading-relaxed">Stay updated with the latest in robotics, AI, and STEM education.</p>
                            <form className="flex flex-col gap-2 mt-1" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="px-3 py-2 text-xs border border-border rounded-sm bg-white focus:outline-none focus:border-primary font-medium"
                                />
                                <button type="submit" className="btn-primary py-2 text-xs font-semibold rounded-sm">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border flex flex-col justify-between gap-6 text-[11px] font-medium text-text-secondary/70 md:flex-row md:items-center items-center text-center tracking-wide">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row items-center">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary transition-colors">
                                <Link href={link.href}> {link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
