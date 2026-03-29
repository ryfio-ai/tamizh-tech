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
  metadataBase: new URL("https://tamizhtech.in"), // Replace with actual domain if different
  title: {
    default: "TamizhTech Robotics Company | Coimbatore, Tamil Nadu",
    template: "%s | TamizhTech Robotics"
  },
  description: "TamizhTech (TTRC) is Coimbatore's leading robotics company specializing in AI, Automation, IoT, and industrial solutions. Join our Robotics Club or explore our advanced kits.",
  keywords: ["Robotics Coimbatore", "Robotics Tamilnadu", "Robots Coimbatore", "Industrial Automation Coimbatore", "AI Robotics India", "Robotics Club Tamil Nadu", "3D Printing Coimbatore", "PCB Design Coimbatore"],
  authors: [{ name: "TamizhTech Team" }],
  creator: "TamizhTech",
  publisher: "TamizhTech Robotics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tamizhtech.in",
    siteName: "TamizhTech Robotics",
    title: "TamizhTech Robotics Company | Coimbatore's AI & Automation Hub",
    description: "Building the future with Robotics, AI & Automation in Coimbatore, Tamil Nadu. Join the revolution.",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "TamizhTech Robotics Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TamizhTech Robotics | Coimbatore, Tamil Nadu",
    description: "Leading the robotics and AI revolution in Coimbatore. Kits, Clubs, and Industrial Solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TamizhTech Robotics Company",
  "image": "https://tamizhtech.in/og-image.jpg",
  "@id": "https://tamizhtech.in",
  "url": "https://tamizhtech.in",
  "telephone": "+918148045030",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Coimbatore",
    "addressLocality": "Coimbatore",
    "addressRegion": "TN",
    "postalCode": "641001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0168,
    "longitude": 76.9558
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/tamizh-tech-robotics-company",
    "https://www.instagram.com/tamizh_tech_pvt_ltd",
    "https://youtube.com/@covaiscientist"
  ]
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
        {/* Google Analytics */}
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
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col bg-bg-page`}>
        <FlyingDrone />
        <Navbar />
        <main className="flex-1 pt-16 flex flex-col">
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

