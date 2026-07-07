import type { Metadata } from "next";
import { Montserrat, Karla } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tamizhtech.in"),
  title: {
    default: "TamizhTech Robotics Company — AI, Robotics & Engineering Innovation",
    template: "%s | TamizhTech Robotics Company",
  },
  description:
    "TamizhTech Robotics Company is a premier technology company in Coimbatore specializing in AI, Robotics, Drone Technology, IoT, Industrial Automation, and STEM Education.",
  keywords: [
    "TamizhTech Robotics Company",
    "Robotics Company Coimbatore",
    "AI Machine Learning India",
    "Drone Technology",
    "IoT Solutions",
    "Industrial Automation",
    "STEM Education",
    "Embedded Systems",
    "Corporate Training",
  ],
  authors: [{ name: "TamizhTech Robotics Company" }],
  creator: "TamizhTech Robotics Company",
  publisher: "TamizhTech Robotics Company",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tamizhtech.in",
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
    url: "https://tamizhtech.in",
    logo: "https://tamizhtech.in/logo/TTRC LOGO.png",
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
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TamizhTech Robotics Company",
    telephone: "+918148045030",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Coimbatore",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641107",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 11.0168, longitude: 76.9558 },
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
      <body className={`${montserrat.variable} ${karla.variable} font-sans bg-page text-text-primary antialiased`}>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
