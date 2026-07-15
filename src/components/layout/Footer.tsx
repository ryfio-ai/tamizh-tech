"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const robotLinks = [
  { label: "RC Robo Race",   href: "/products?category=Robo%20Race%20Bots" },
  { label: "RC Robo Soccer", href: "/products?category=Robo%20Soccer%20Bots" },
  { label: "RC Robo War",    href: "/products?category=Robo%20War%20Bots" },
  { label: "RC Robo Sumo",   href: "/products?category=Robo%20Sumo%20Bots" },
  { label: "RC Boat",        href: "/products?category=RC%20Boat%20Kits" },
  { label: "Hovercraft",     href: "/products" },
  { label: "Line Follower",  href: "/products?category=Line%20Follower%20Robots" },
  { label: "Maze Solver",    href: "/products?category=Maze%20Solver%20Robots" },
  { label: "Drone",          href: "/products?category=Drone%20Kits" },
  { label: "Water Rocketry", href: "/products" },
];

const companyLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Founder Profile", href: "/founder" },
  { label: "Gallery",         href: "/gallery" },
  { label: "Courses",         href: "/courses" },
  { label: "Internship",      href: "/internship" },
  { label: "Careers",         href: "/careers" },
];

const socialLinks = [
  { icon: FaFacebook,  href: "https://www.facebook.com",                                        label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/tamizh_tech_robotics_company",          label: "Instagram" },
  { icon: FaLinkedin,  href: "https://www.linkedin.com/company/tamizh-tech-robotics-company",   label: "LinkedIn" },
  { icon: FaYoutube,   href: "https://www.youtube.com/@covaiscientist",                         label: "YouTube" },
  { icon: FaWhatsapp,  href: "https://wa.me/918148045030",                                      label: "WhatsApp" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p style={{ color: "#1e293b", fontWeight: 800, fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "10px" }}>
        {children}
      </p>
      <div style={{ width: "28px", height: "2px", background: "#FB7115", borderRadius: "99px" }} />
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        style={{ color: "#64748b", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", transition: "color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#FB7115")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
      >
        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FB7115", opacity: 0.4, flexShrink: 0 }} />
        {children}
      </Link>
    </li>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [loadMap, setLoadMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Back to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed", bottom: "28px", right: "24px", zIndex: 50,
            width: "44px", height: "44px", borderRadius: "50%",
            background: "#FB7115", color: "#fff", border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 4px 16px rgba(251,113,21,0.35)",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      )}

      <footer style={{ background: "#fff", borderTop: "1px solid #f1f5f9", fontFamily: "inherit" }}>

        {/* ── Main Content ── */}
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start">

            {/* Col 1 — Brand */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Logo + Name */}
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                <Image src="/logo/TTRC LOGO.png" alt="TamizhTech" width={42} height={42} style={{ objectFit: "contain" }} />
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                  <span style={{ fontSize: "17px", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.3px" }}>
                    TAMIZH<span style={{ color: "#FB7115" }}>TECH</span>
                  </span>
                  <span style={{ fontSize: "8.5px", fontWeight: 700, color: "#FB7115", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "3px" }}>
                    Robotics
                  </span>
                </div>
              </Link>

              {/* Tagline */}
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>
                Coimbatore&apos;s premier AI, Robotics &amp; Engineering company — delivering competition bots, automation &amp; STEM education since 2020.
              </p>

              {/* Social */}
              <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: "34px", height: "34px", borderRadius: "50%",
                      border: "1.5px solid #e2e8f0", background: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#94a3b8", textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FB7115";
                      e.currentTarget.style.borderColor = "#FB7115";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.color = "#94a3b8";
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Our Robots */}
            <div>
              <ColHeading>Our Robots</ColHeading>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {robotLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
              </ul>
            </div>

            {/* Col 3 — Company + Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              <div>
                <ColHeading>Company</ColHeading>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {companyLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
                </ul>
              </div>

              <div>
                <ColHeading>Contact Us</ColHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { icon: <Phone size={13} />, content: "+91 81480 45030", href: "tel:+918148045030" },
                    { icon: <FaWhatsapp size={13} />, content: "+91 81480 45030", href: "https://wa.me/918148045030" },
                    { icon: <Mail size={13} />, content: "info@tamizhtech.in", href: "mailto:info@tamizhtech.in" },
                  ].map(({ icon, content, href }) => (
                    <a
                      key={href}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ display: "flex", alignItems: "center", gap: "10px", color: "#64748b", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FB7115")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                    >
                      <span style={{ color: "#FB7115", flexShrink: 0 }}>{icon}</span>
                      {content}
                    </a>
                  ))}
                  {/* Address */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#64748b", fontSize: "13px" }}>
                    <span style={{ color: "#FB7115", marginTop: "2px", flexShrink: 0 }}><MapPin size={13} /></span>
                    <span style={{ lineHeight: "1.6" }}>
                      Thiruchendur Gdn Rd, Kurumbapalayam,<br />
                      Coimbatore, Tamil Nadu – 641 107
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 4 — Find Us (Map) */}
            <div>
              <ColHeading>Find Us</ColHeading>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "14px", color: "#64748b", fontSize: "13px" }}>
                <span style={{ color: "#FB7115", marginTop: "2px", flexShrink: 0 }}><MapPin size={13} /></span>
                <span style={{ lineHeight: "1.6" }}>
                  Tamizh Tech Pvt Ltd, Thiruchendur Gdn Rd,<br />
                  Kurumbapalayam SSKulam, Coimbatore – 641107
                </span>
              </div>

              {/* Map Container */}
              <div 
                ref={mapRef}
                style={{ position: "relative", borderRadius: "14px", overflow: "hidden", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", height: "210px" }}
              >
                {loadMap ? (
                  <>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15660.000209940392!2d77.02221234726562!3d11.113373452742518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba8f9b076667f27%3A0x3d053c8d4eb3cd29!2sTamizh%20Tech%20Pvt%20Ltd%2C%20Thiruchendur%20Gdn%20Rd%2C%20Kurumbapalayam%20SSKulam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641107!3m2!1d11.112564299999999!2d77.0236498!5e0!3m2!1sen!2sin!4v1783424997274!5m2!1sen!2sin"
                      width="100%"
                      height="210"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="TamizhTech Pvt Ltd – Coimbatore"
                    />
                    <a
                      href="https://maps.google.com/?q=Tamizh+Tech+Pvt+Ltd,+Kurumbapalayam,+Coimbatore"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: "absolute", top: "10px", left: "10px",
                        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)",
                        border: "1px solid #e2e8f0", borderRadius: "8px",
                        padding: "5px 10px", fontSize: "11px", fontWeight: 700,
                        color: "#1e293b", display: "flex", alignItems: "center", gap: "5px",
                        textDecoration: "none", boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#FB7115"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#FB7115"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.92)"; e.currentTarget.style.color = "#1e293b"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
                    >
                      <MapPin size={11} /> Open in Maps ↗
                    </a>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center text-xs font-bold text-slate-400 animate-pulse uppercase tracking-wider">
                    Loading Map...
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div style={{ borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}>
          <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              © {new Date().getFullYear()} Tamizh Tech Robotics Company. All rights reserved. | Coimbatore, Tamil Nadu, India
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-6">
                <Link href="/privacy" style={{ fontSize: "12px", color: "#94a3b8", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FB7115")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                  Privacy Policy
                </Link>
                <Link href="/terms" style={{ fontSize: "12px", color: "#94a3b8", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FB7115")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                  Terms of Service
                </Link>
              </div>
              {/* Made in India Badge */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                border: "1.5px solid #e2e8f0", background: "#fff",
                borderRadius: "99px", padding: "5px 12px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FB7115", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#475569", letterSpacing: "0.05em" }}>Made in India</span>
                <Image src="/logo/make.png" alt="Make in India" width={42} height={16} style={{ objectFit: "contain", opacity: 0.85 }} />
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
