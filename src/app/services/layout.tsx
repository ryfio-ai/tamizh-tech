import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics & AI Engineering Services | TamizhTech Coimbatore",
  description: "Custom robotic systems, B2B industrial automation, PLCs, computer vision, and school STEM Tinkering Lab setups across India.",
  openGraph: {
    title: "Robotics & AI Engineering Services | TamizhTech Coimbatore",
    description: "Custom robotic systems, B2B industrial automation, PLCs, computer vision, and school STEM Tinkering Lab setups across India.",
    url: "https://www.tamizhtech.in/services",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630 }]
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
