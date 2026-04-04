import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Tamizh Tech Pvt Ltd",
  description: "Explore photos from Tamizh Tech Pvt Ltd's robotics competitions, workshops, training sessions, and innovation projects.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
