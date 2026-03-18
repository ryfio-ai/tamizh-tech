import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FlyingDrone } from "@/components/ui/flying-drone";
import { ChatBot } from "@/components/ChatBot";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "TamizhTech Robotics Company",
  description: "Transforming ideas into innovation through accessible robotics, AI, IoT, and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col`}>
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
