import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Gallery & Lab Photos | TamizhTech Coimbatore",
  description: "Photos, video logs, and memories from our robotics tinkering labs, competition wins, and B2B industrial automation setups.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
