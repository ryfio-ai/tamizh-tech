import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Kits & Products India | TamizhTech Catalog",
  description: "Browse TamizhTech's catalog of premium, indigenously-developed competition robotics kits: RC Robo Race, RC Robo Soccer, and RC Robo Sumo bots built in Coimbatore.",
  openGraph: {
    title: "Robotics Kits & Products India | TamizhTech Catalog",
    description: "Browse TamizhTech's catalog of premium, indigenously-developed competition robotics kits: RC Robo Race, RC Robo Soccer, and RC Robo Sumo bots built in Coimbatore.",
    url: "https://www.tamizhtech.in/products",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630 }]
  }
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
