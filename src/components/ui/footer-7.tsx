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
      { name: "Gallery", href: "/gallery" },
      { name: "Join Club", href: "/robotics-club/join" },
      { name: "WhatsApp Us", href: "https://wa.me/918148045030" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/tamizh_tech_pvt_ltd", label: "Instagram" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/tamizh-tech-robotics-company", label: "LinkedIn" },
  { icon: <FaYoutube className="size-5" />, href: "https://www.youtube.com/@covaiscientist", label: "YouTube" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/918148045030", label: "WhatsApp" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo/TTRC LOGO.png",
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
        <footer className="py-24 bg-bg-primary border-t border-border-light text-text-primary">
            <div className="container mx-auto px-4">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-8 lg:items-start items-center text-center lg:text-left">
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
                                    <span className="text-xl font-heading font-extrabold tracking-wider text-text-primary group-hover:text-primary-main transition-colors">
                                        TAMIZH<span className="text-primary-main">TECH</span>
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">Robotics Club</span>
                                </div>
                            </Link>
                        </div>
                        <p className="max-w-[340px] text-sm text-text-tertiary leading-relaxed mx-auto lg:mx-0">
                            {description}
                        </p>
                        <ul className="flex items-center space-x-6 text-text-muted justify-center lg:justify-start mt-4">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-primary-main transition-all transform hover:-translate-y-1">
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
                                <h3 className="mb-6 font-bold text-text-primary text-xs uppercase tracking-widest">{section.title}</h3>
                                <ul className="space-y-4 text-sm text-text-secondary font-medium">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary-main hover:translate-x-1 transition-all duration-300 w-fit md:mx-0 mx-auto"
                                        >
                                            <Link href={link.href}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20 flex flex-col justify-between gap-6 border-t border-border-light pt-10 text-[11px] font-bold text-text-muted md:flex-row md:items-center items-center text-center uppercase tracking-widest">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-6 md:order-2 md:flex-row items-center">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary-main transition-colors">
                                <Link href={link.href}> {link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
