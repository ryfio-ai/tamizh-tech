import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidgets } from "@/components/layout/FloatingWidgets";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tamizhtech.in"),
  title: {
    default: "Robotics Company Coimbatore — TamizhTech | AI & Automation",
    template: "%s | TamizhTech Robotics Company",
  },
  description:
    "TamizhTech Robotics Company builds AI, robotics & automation systems in Coimbatore. Competition robots, industrial AGVs, STEM labs & robotics courses across India.",
  keywords: [
    "robotics company Coimbatore",
    "AI robotics solutions India",
    "competition robot kits India",
    "robotics course Coimbatore",
    "embedded systems course Tamil",
    "industrial automation Coimbatore",
    "STEM tinkering lab setup",
    "robotics internship Coimbatore",
    "TamizhTech Robotics Company",
    "ThiranOli Academy",
  ],
  authors: [{ name: "TamizhTech Robotics Company" }],
  creator: "TamizhTech Robotics Company",
  publisher: "TamizhTech Robotics Company",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.tamizhtech.in",
    siteName: "TamizhTech Robotics Company",
    title: "TamizhTech Robotics Company — AI, Robotics & Engineering Innovation",
    description:
      "Premier robotics and AI technology company based in Coimbatore. We build the future through engineering innovation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TamizhTech Robotics Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TamizhTech Robotics Company",
    description: "AI · Robotics · Drone · IoT · Industrial Automation · STEM",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TamizhTech Robotics Company",
    url: "https://www.tamizhtech.in",
    logo: "https://www.tamizhtech.in/logo/TTRC LOGO.png",
    foundingYear: "2024",
    description: "TamizhTech Robotics Company is a Coimbatore-based engineering company founded in 2024, specializing in robotics, AI, drone technology, IoT, industrial automation, and STEM education through ThiranOli Academy. Evolved from Tamizh Robotics Club (established 2021).",
    areaServed: "IN",
    sameAs: [
      "https://www.linkedin.com/company/tamizh-tech-robotics-company",
      "https://www.instagram.com/tamizh_tech_robotics_company",
      "https://youtube.com/@covaiscientist",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918148045030",
      contactType: "customer service",
      email: "office@tamizhtech.in",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thiruchendur Gdn Rd, Kurumbapalayam SSKulam",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641107",
      addressCountry: "IN",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.tamizhtech.in/#localbusiness",
    name: "TamizhTech Robotics Company",
    telephone: "+918148045030",
    email: "office@tamizhtech.in",
    url: "https://www.tamizhtech.in",
    priceRange: "₹₹",
    openingHours: "Mo-Sa 09:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thiruchendur Gdn Rd, Kurumbapalayam SSKulam",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641107",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 11.0168, longitude: 76.9558 },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TamizhTech Robotics Company",
    url: "https://www.tamizhtech.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.tamizhtech.in/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LZEZV8HPGR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-LZEZV8HPGR');
        `}</Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-page text-text-primary antialiased`}>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWidgets />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
