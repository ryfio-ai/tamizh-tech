"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound, useSearchParams } from "next/navigation";
import { 
  Check, 
  Cpu, 
  FileText, 
  Download, 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getProductBySlug, products, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [activeTab, setActiveTab] = useState<"specs" | "applications">("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [rfqForm, setRfqForm] = useState({
    name: "",
    email: "",
    org: "",
    qty: 1,
    notes: ""
  });
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  if (!product) {
    notFound();
  }

  // Related products (same category or similar)
  const related = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  const handleDownloadRequest = (label: string) => {
    const message = `Hello Tamizh Tech! I am requesting the ${label} for the product: ${product.name}. Please share the files.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918148045030?text=${encoded}`, "_blank");
  };

  // Structured schemas
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://tamizhtech.com${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Tamizh Tech Robotics"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "url": `https://tamizhtech.com/products/${product.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tamizhtech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://tamizhtech.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://tamizhtech.com/products/${product.slug}`
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container px-6">
        {/* Breadcrumb & Navigation back link */}
        <div className="flex items-center gap-2 mb-8 text-xs font-bold text-text-muted uppercase tracking-wider">
          <Link href="/products" className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">{product.category}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">{product.name}</span>
        </div>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Display */}
          <div className="bg-white border border-border rounded-2xl p-8 flex items-center justify-center min-h-[400px] relative shadow-sm">
            <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              {product.badge}
            </div>
            {product.image ? (
              <div className="relative w-full h-[320px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <Cpu className="w-32 h-32 stroke-[0.5] text-border" />
            )}
          </div>

          {/* Info Details */}
          <div className="flex flex-col justify-center text-left">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest mb-2 block">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary mb-2 leading-none">
              {product.name}
            </h1>
            <div className="text-lg font-extrabold text-accent mb-6 uppercase tracking-wider">
              Pricing: Upon Request
            </div>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`https://wa.me/918148045030?text=Hi!%20I'm%20interested%20in%20purchasing%20the%20${encodeURIComponent(product.name)}.%20Please%20send%20commercial%20pricing%20info.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="gap-2">
                  <FaWhatsapp className="w-5 h-5" /> Get Quote via WhatsApp
                </Button>
              </a>
              <a href="#rfq-section">
                <Button variant="secondary" size="lg">
                  Submit B2B RFQ
                </Button>
              </a>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-8">
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Origin</span>
                <span className="text-sm font-bold text-text-primary">100% Made in India</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Support</span>
                <span className="text-sm font-bold text-text-primary">Direct Technical Mentorship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed In-Depth Information */}
        <div className="border-b border-border mb-10 flex gap-6 overflow-x-auto no-scrollbar">
          {(["specs", "applications"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-text-muted hover:text-text-primary"
              }`}
            >
              {tab === "specs" && "Technical Specifications"}
              {tab === "applications" && "Applications & Use Cases"}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="mb-20 text-left">
          {activeTab === "specs" && (
            <div className="max-w-3xl">
              <h3 className="text-xl font-bold uppercase mb-4 text-text-primary">Factual Product Specifications</h3>
              <ul className="space-y-3">
                {product.detailedSpecs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-normal">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="max-w-3xl">
              <h3 className="text-xl font-bold uppercase mb-4 text-text-primary">Industrial & Classroom Integration</h3>
              <ul className="space-y-3">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-normal">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Download Resources Form Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <button 
            onClick={() => handleDownloadRequest("Assembly & User Manual")}
            className="p-5 bg-subtle border border-border rounded-xl hover:border-accent transition-all duration-300 flex items-center justify-between text-left group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg border border-border text-accent">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-text-primary block uppercase">Request User Manual</span>
                <span className="text-[10px] font-bold text-text-muted uppercase">PDF Document (Upon Request)</span>
              </div>
            </div>
            <Download className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
          </button>

          <button 
            onClick={() => handleDownloadRequest("3D CAD STEP Chassis File")}
            className="p-5 bg-subtle border border-border rounded-xl hover:border-accent transition-all duration-300 flex items-center justify-between text-left group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg border border-border text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-text-primary block uppercase">Request 3D CAD STEP File</span>
                <span className="text-[10px] font-bold text-text-muted uppercase">STEP CAD File (Upon Request)</span>
              </div>
            </div>
            <Download className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
          </button>
        </div>

        {/* RFQ Section / Request Quote Form */}
        <div id="rfq-section" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 bg-subtle border border-border rounded-3xl p-8 lg:p-12 text-left">
          <div>
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-2">B2B Integration</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-4 text-text-primary">Request B2B Quote & Custom Pricing</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Setting up a robotics laboratory in your school, college, or university? Or do you need bulk supply for competition teams? Complete the request form and our logistics team will share customized pricing lists and tax invoices within 12 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-xs font-bold uppercase text-text-primary">Bulk Procurement Discounts Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-xs font-bold uppercase text-text-primary">GST-Compliant Invoices for Institutions</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-xs font-bold uppercase text-text-primary">Integrated Lab Curriculum Options</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-xs">
            {rfqSubmitted ? (
              <div className="text-center py-12">
                <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold uppercase text-text-primary">RFQ Submitted Successfully</h4>
                <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Our sales consultants will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Contact Name</label>
                  <input
                    type="text"
                    required
                    value={rfqForm.name}
                    onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                    className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                    placeholder="Enter name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={rfqForm.email}
                      onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="email@institution.edu"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Institution/Company</label>
                    <input
                      type="text"
                      required
                      value={rfqForm.org}
                      onChange={(e) => setRfqForm({ ...rfqForm, org: e.target.value })}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="School / College / Co."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Required Quantity</label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={rfqForm.qty}
                      onChange={(e) => setRfqForm({ ...rfqForm, qty: parseInt(e.target.value) || 1 })}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Platform Category</label>
                    <input
                      type="text"
                      disabled
                      value={product.category}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-xs text-text-muted"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Requirements & Notes</label>
                  <textarea
                    value={rfqForm.notes}
                    onChange={(e) => setRfqForm({ ...rfqForm, notes: e.target.value })}
                    className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent h-24 resize-none"
                    placeholder="Enter any customization requests..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center py-3.5">
                  Submit RFQ Request
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-20 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-8 text-text-primary">Product FAQ</h2>
          <div className="space-y-4 max-w-3xl">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-xl bg-subtle overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-text-primary cursor-pointer hover:bg-border/20 transition-all"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-2 text-sm text-text-secondary border-t border-border/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-8 text-text-primary">Related Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, idx) => (
                <Card key={idx} className="p-0 overflow-hidden bg-white border border-border flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                  <div className="h-44 bg-white border-b border-border flex items-center justify-center p-6 relative">
                    {p.image ? (
                      <div className="relative w-full h-[120px]">
                        <Image src={p.image} alt={p.name} fill className="object-contain" />
                      </div>
                    ) : (
                      <Cpu className="w-12 h-12 text-border" />
                    )}
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold uppercase text-text-primary tracking-tight mb-1">{p.name}</h4>
                      <p className="text-text-muted text-[10px] leading-relaxed mb-4">{p.specs}</p>
                    </div>
                    <Link href={`/products/${p.slug}`}>
                      <Button variant="secondary" size="sm" className="w-full justify-center">
                        View Product
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom WhatsApp CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-border p-4 flex md:hidden items-center justify-between z-40">
        <div>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Pricing</span>
          <span className="text-sm font-extrabold text-accent">Upon Request</span>
        </div>
        <a
          href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="sm" className="gap-1.5 bg-[#25D366] hover:bg-[#20ba56] border-[#25D366] hover:border-[#20ba56]">
            <FaWhatsapp className="w-4 h-4" /> Message Us
          </Button>
        </a>
      </div>
    </div>
  );
}
