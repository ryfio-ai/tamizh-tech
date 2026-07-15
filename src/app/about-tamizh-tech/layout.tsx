import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tamizh Tech Robotics | Coimbatore Engineering Team",
  description: "Learn about the engineering philosophy, indigenously-milled robotics hardware, and mission of Tamizh Tech Robotics Company in Coimbatore.",
};

export default function AboutTamizhTechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
