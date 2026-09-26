import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Internship for Students Coimbatore | TamizhTech",
  description: "Hands-on robotics internship in Coimbatore for engineering and diploma students. Gain practical experience with real hardware. Apply today.",
  alternates: {
    canonical: "https://www.tamizhtech.in/internship",
  },
  openGraph: {
    title: "Robotics Internship for Students Coimbatore | TamizhTech",
    description: "Hands-on robotics internship in Coimbatore for engineering and diploma students. Gain practical experience with real hardware. Apply today.",
    url: "https://www.tamizhtech.in/internship",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "TamizhTech Student Internship Program" }],
  }
};

export default function InternshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
