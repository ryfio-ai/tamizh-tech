import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Competition & Combat Robot Kits India | TRC",
  description: "Join Tamizh Robotics Club for national robotics competitions, combat robot tournaments, and hands-on maker workshops. Apply for membership.",
  alternates: {
    canonical: "https://www.tamizhtech.in/robotics-club",
  },
  openGraph: {
    title: "Robotics Competition & Combat Robot Kits India | TRC",
    description: "Join Tamizh Robotics Club for national robotics competitions, combat robot tournaments, and hands-on maker workshops. Apply for membership.",
    url: "https://www.tamizhtech.in/robotics-club",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "Tamizh Robotics Club Community" }],
  }
};

export default function RoboticsClubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
