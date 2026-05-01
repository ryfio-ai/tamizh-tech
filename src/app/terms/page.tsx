import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Tamizh Tech Pvt Ltd",
  description: "Terms and conditions for using Tamizh Tech's platforms and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-6 font-sans">Legal & Compliance</h1>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Terms of Service
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-bold uppercase tracking-widest mt-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none text-text-secondary font-medium">
          <p className="mb-6">
            Welcome to Tamizh Tech Pvt Ltd. These Terms of Service govern your use of our website, software platforms, and industrial automation services. By accessing our services, you agree to comply with these terms.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">1. Engineering Services & Liability</h3>
          <p className="mb-6">
            Our robotics integration and industrial automation services are subject to specific project contracts. While we adhere to strict quality control and ISO 9001:2015 standards, Tamizh Tech is not liable for indirect operational losses arising from improper hardware usage or unauthorized modifications by the client.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">2. Intellectual Property</h3>
          <p className="mb-6">
            All proprietary software code, AI vision algorithms, mechanical blueprints, and UI/UX designs provided during a project remain the intellectual property of Tamizh Tech Pvt Ltd unless explicitly transferred in writing.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">3. Data Usage & Platform Access</h3>
          <p className="mb-6">
            Access to our enterprise SaaS products (like Modliq) is granted on a subscription basis. Misuse of the platform, including unauthorized data scraping or reverse engineering of ML models, will result in immediate termination of access.
          </p>

          <div className="mt-20 p-8 border border-border-light bg-white text-center">
            <p className="text-xs font-black uppercase tracking-widest mb-4">Questions about these terms?</p>
            <Link href="/contact" className="text-primary-main hover:text-primary-hover inline-flex items-center gap-2 text-sm font-bold transition-colors">
              Contact our Legal Team <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
