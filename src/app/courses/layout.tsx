import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics & Embedded Systems Course Coimbatore | ThiranOli",
  description: "Hands-on robotics course in Coimbatore by ThiranOli Academy. Learn IoT, embedded systems, and AI with practical hardware projects. Enroll today.",
  alternates: {
    canonical: "https://www.tamizhtech.in/courses",
  },
  openGraph: {
    title: "Robotics & Embedded Systems Course Coimbatore | ThiranOli",
    description: "Hands-on robotics course in Coimbatore by ThiranOli Academy. Learn IoT, embedded systems, and AI with practical hardware projects. Enroll today.",
    url: "https://www.tamizhtech.in/courses",
    type: "website",
    images: [{ url: "/logo/banner.png", width: 1200, height: 630, alt: "ThiranOli Academy Robotics Courses" }],
  }
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
