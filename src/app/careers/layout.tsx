import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Engineer Jobs in Coimbatore | TamizhTech Careers",
  description: "Explore robotics engineer jobs and embedded systems developer roles in Coimbatore at TamizhTech Robotics Company. Apply for open positions.",
  alternates: {
    canonical: "https://www.tamizhtech.in/careers",
  },
  openGraph: {
    title: "Robotics Engineer Jobs in Coimbatore | TamizhTech Careers",
    description: "Explore robotics engineer jobs and embedded systems developer roles in Coimbatore at TamizhTech Robotics Company. Apply for open positions.",
    url: "https://www.tamizhtech.in/careers",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "TamizhTech Careers and Engineering Roles" }],
  }
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
