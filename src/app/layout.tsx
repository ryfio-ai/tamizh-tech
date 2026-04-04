import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FlyingDrone } from "@/components/ui/flying-drone";
import { ChatBot } from "@/components/ChatBot";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tamizhtech.in"),
  title: {
    default: "Tamizh Tech | Industrial Automation & Robotics Integration Specialist",
    template: "%s | Tamizh Tech"
  },
  description: "Tamizh Tech is a leading industrial engineering firm in Coimbatore specializing in robotics integration, AI vision systems, and automated manufacturing solutions for global OEMs.",
  keywords: ["Industrial Automation Coimbatore", "Robotics Integration India", "AI Vision Systems", "Custom Prototyping Services", "Factory Automation Tamil Nadu"],
  authors: [{ name: "Tamizh Tech Engineering" }],
  creator: "Tamizh Tech",
  publisher: "Tamizh Tech Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tamizhtech.in",
    siteName: "Tamizh Tech Industrial",
    title: "Tamizh Tech | Advanced Industrial Robotics & Automation",
    description: "Engineering high-performance robotic systems and AI-driven automation for global manufacturers. Based in Coimbatore, deployed Pan-India.",
    images: [
      {
        url: "/og-image-b2b.jpg",
        width: 1200,
        height: 630,
        alt: "Tamizh Tech Pvt Ltd Industrial Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamizh Tech | Industrial Robotics Specialist",
    description: "Every technical track includes specialized training, localized language support, and a verifiable Tamizh Tech Pvt Ltd certification recognized by our 50+ industrial partners across India.",
    images: ["/og-image-b2b.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tamizh Tech Pvt Ltd",
  "alternateName": "Tamizh Tech Robotics",
  "url": "https://tamizhtech.in",
  "logo": "https://tamizhtech.in/logo/TTRC LOGO.png",
  "sameAs": [
    "https://www.linkedin.com/company/tamizh-tech-robotics-company",
    "https://www.instagram.com/tamizh_tech_pvt_ltd",
    "https://youtube.com/@covaiscientist"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Coimbatore",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641001",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LZEZV8HPGR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LZEZV8HPGR');
          `}
        </Script>
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-bg-page selection:bg-primary-main selection:text-white antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

