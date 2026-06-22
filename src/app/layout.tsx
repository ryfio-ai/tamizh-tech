import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClubBanner } from "@/components/ClubBanner";
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
  publisher: "Tamizh Tech Robotics Company",
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
        alt: "Tamizh Tech Robotics Company Industrial Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamizh Tech | Industrial Robotics Specialist",
    description: "Every technical track includes specialized training, localized language support, and a verifiable Tamizh Tech Robotics Company certification recognized by our 50+ industrial partners across India.",
    images: ["/og-image-b2b.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tamizh Tech Robotics Company",
    "alternateName": "Tamizh Tech Robotics",
    "url": "https://tamizhtech.in",
    "logo": "https://tamizhtech.in/logo/TTRC LOGO.png",
    "sameAs": [
      "https://www.linkedin.com/company/tamizh-tech-robotics-company",
      "https://www.instagram.com/tamizh_tech_robotics_company",
      "https://youtube.com/@covaiscientist"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918148045030",
      "contactType": "customer service",
      "email": "office@tamizhtech.in",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tamizh Tech Robotics Company",
    "image": "https://tamizhtech.in/logo/TTRC LOGO.png",
    "@id": "https://tamizhtech.in/#localbusiness",
    "url": "https://tamizhtech.in",
    "telephone": "+918148045030",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Coimbatore",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
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
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What products does Tamizh Tech sell?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tamizh Tech Robotics Company sells professional competition bots (Robo Race, Robo Soccer, Robo Sumo, Line Follower, Maze Solver), Drone Kits, Electronics Kits, Embedded Systems Kits, and STEM learning kits."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tamizh Tech set up STEM and Robotics labs for schools and colleges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design, deliver, and install custom STEM, Robotics, and AI Labs for K-12 schools and colleges, complete with physical kits, syllabus structures, and training guides."
        }
      },
      {
        "@type": "Question",
        "name": "What is ThiranOli Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ThiranOli Academy is the education and career development division of Tamizh Tech, offering structured courses, placement assistance, and mentorship in Robotics, AI, and Embedded C programming."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tamizhtech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://tamizhtech.in/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Internships & Training",
        "item": "https://tamizhtech.in/internship"
      }
    ]
  }
];

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
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
        <ClubBanner />
        <Footer />
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

