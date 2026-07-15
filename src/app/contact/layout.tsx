import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TamizhTech | Request a Technical Proposal",
  description: "Get in touch with the technical coordination team at TamizhTech to request school STEM tinkering lab setups, custom automation quotes, or product builds.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
