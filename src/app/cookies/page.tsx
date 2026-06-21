import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Tamizh Tech Robotics Company",
  description: "Information about how we use cookies on our website.",
};

export default function CookiesPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-6 font-sans">Legal & Compliance</h1>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Cookie Policy
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-bold uppercase tracking-widest mt-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none text-text-secondary font-medium">
          <p className="mb-6">
            Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our audience comes from.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">1. What Are Cookies?</h3>
          <p className="mb-6">
            Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with its features.
          </p>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">2. Types of Cookies We Use</h3>
          <div className="mb-6">
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly. They cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site by collecting and reporting information anonymously (e.g., Google Analytics).</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your language preferences.</li>
            </ul>
          </div>

          <h3 className="text-xl font-black text-text-primary uppercase tracking-tighter mt-12 mb-4">3. Managing Your Preferences</h3>
          <p className="mb-6">
            You can control and/or delete cookies as you wish using your browser settings. However, please note that disabling certain cookies may affect the functionality of our website and SaaS platforms.
          </p>

          <div className="mt-20 p-8 border border-border-light bg-white text-center">
            <p className="text-xs font-black uppercase tracking-widest mb-4">Need more details?</p>
            <Link href="/contact" className="text-primary-main hover:text-primary-hover inline-flex items-center gap-2 text-sm font-bold transition-colors">
              Contact Us <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
