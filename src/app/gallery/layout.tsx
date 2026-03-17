import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | TamizhTech Robotics Company",
  description: "Explore photos from TamizhTech's robotics competitions, workshops, training sessions, and innovation projects.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
