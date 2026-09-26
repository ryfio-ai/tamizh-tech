import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation & PCB Design Coimbatore | TamizhTech",
  description: "Expert industrial automation, PCB design, 3D printing, and laser cutting services in Coimbatore. Engineered for reliability. Request a quote.",
  alternates: {
    canonical: "https://www.tamizhtech.in/services",
  },
  openGraph: {
    title: "Industrial Automation & PCB Design Coimbatore | TamizhTech",
    description: "Expert industrial automation, PCB design, 3D printing, and laser cutting services in Coimbatore. Engineered for reliability. Request a quote.",
    url: "https://www.tamizhtech.in/services",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "TamizhTech Engineering Services" }]
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
