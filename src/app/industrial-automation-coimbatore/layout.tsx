import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Company Coimbatore | TamizhTech",
  description: "Industrial automation solutions in Coimbatore including PLC systems, custom machinery, and IoT monitoring for factories. Request a quote.",
  alternates: {
    canonical: "https://www.tamizhtech.in/industrial-automation-coimbatore",
  },
  openGraph: {
    title: "Industrial Automation Company Coimbatore | TamizhTech",
    description: "Industrial automation solutions in Coimbatore including PLC systems, custom machinery, and IoT monitoring for factories. Request a quote.",
    url: "https://www.tamizhtech.in/industrial-automation-coimbatore",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "TamizhTech Industrial Automation Coimbatore" }],
  }
};

export default function IndustrialAutomationCoimbatoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
