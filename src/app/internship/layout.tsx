import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Programs | Tamizh Tech Robotics Company",
  description: "Industry-focused offline & online internship programs across Robotics, Embedded Systems, Full Stack Web Development, Java, and Python.",
};

export default function InternshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
