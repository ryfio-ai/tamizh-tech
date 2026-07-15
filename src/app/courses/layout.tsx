import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics & Embedded Systems Courses | TamizhTech Coimbatore",
  description: "Hands-on robotics courses, microcontrollers coding, IoT, and AI workshops in Tamil and English for schools and colleges.",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
