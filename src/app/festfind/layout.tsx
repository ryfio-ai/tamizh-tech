import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FestFind Live Event Map | Technical Symposiums & Hackathons",
  description: "Discover, track, and compete in robotics championships, hackathons, and science fests across top institutions in Tamil Nadu.",
};

export default function FestFindLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
