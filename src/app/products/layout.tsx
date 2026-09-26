import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combat Robot & Line Follower Kits India | TamizhTech",
  description: "Buy RC Robo Race, RC Robo Soccer, combat robot kits & Flysky FS-i6X transmitters in India. Precision robotics hardware for competitions. Enquire now.",
  alternates: {
    canonical: "https://www.tamizhtech.in/products",
  },
  openGraph: {
    title: "Combat Robot & Line Follower Kits India | TamizhTech",
    description: "Buy RC Robo Race, RC Robo Soccer, combat robot kits & Flysky FS-i6X transmitters in India. Precision robotics hardware for competitions. Enquire now.",
    url: "https://www.tamizhtech.in/products",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "TamizhTech Competition Robotics Kits" }]
  }
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
