import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Robotics Company in Coimbatore | TamizhTech Robotics",
  description: "Top robotics company in Coimbatore providing STEM labs for schools, AI vision, custom robots, and prototype fabrication. Contact us today.",
  alternates: {
    canonical: "https://www.tamizhtech.in/robotics-company-in-coimbatore",
  },
  openGraph: {
    title: "Best Robotics Company in Coimbatore | TamizhTech Robotics",
    description: "Top robotics company in Coimbatore providing STEM labs for schools, AI vision, custom robots, and prototype fabrication. Contact us today.",
    url: "https://www.tamizhtech.in/robotics-company-in-coimbatore",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "TamizhTech Robotics Coimbatore Headquarters" }],
  }
};

export default function RoboticsCompanyCoimbatoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
