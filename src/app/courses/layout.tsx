import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | TamizhTech Robotics Company",
  description: "Robotics, Embedded Systems, and IoT courses in Tamil, English & Hindi — for students, college enthusiasts, and working professionals.",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

