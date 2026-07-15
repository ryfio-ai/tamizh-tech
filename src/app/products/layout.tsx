import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Kits & Products India | TamizhTech Catalog",
  description: "Browse TamizhTech's catalog of premium, indigenously-developed competition robotics kits: RC Robo Race, RC Robo Soccer, and RC Robo Sumo bots built in Coimbatore.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
