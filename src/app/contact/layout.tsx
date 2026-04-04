import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tamizh Tech Pvt Ltd",
  description: "Get in touch with Tamizh Tech Pvt Ltd for robotics training, automation solutions, club membership, or partnership inquiries. Based in Coimbatore, Tamil Nadu.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
