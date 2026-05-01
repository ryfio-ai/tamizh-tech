import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Tamizh Tech Pvt Ltd",
  description: "How Tamizh Tech handles and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-6 font-sans">Legal & Compliance</h1>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Privacy Policy
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-bold uppercase tracking-widest mt-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none text-text-secondary font-medium">
          <p className="mb-6">
            Tamizh Tech Pvt Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of our enterprise clients and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">1. Information We Collect</h3>
          <p className="mb-6">
            We collect information that you provide directly to us, including:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Contact information (name, email, phone number, company name).</li>
              <li>Technical specifications or RFPs submitted through our proposal forms.</li>
              <li>Operational data uploaded to our SaaS platforms (processed securely under strict NDA).</li>
            </ul>
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">2. How We Use Your Information</h3>
          <p className="mb-6">
            Your data is used to provide engineering consultations, deliver software services, process club memberships, and communicate critical technical updates. We do not sell your personal or corporate data to third parties.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">3. Data Security</h3>
          <p className="mb-6">
            We implement enterprise-grade security measures to protect your data. All communication with our servers is encrypted via SSL, and access to client operational data is strictly role-based.
          </p>

          <div className="mt-20 p-8 border border-border-light bg-white text-center">
            <p className="text-xs font-black uppercase tracking-widest mb-4">Need clarification?</p>
            <Link href="/contact" className="text-primary-main hover:text-primary-hover inline-flex items-center gap-2 text-sm font-bold transition-colors">
              Contact our Privacy Officer <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
