import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners | TamizhTech Robotics Company",
  description: "50+ enterprise clients and partners across 15+ Indian states. See case studies and explore partnership opportunities with TamizhTech.",
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

