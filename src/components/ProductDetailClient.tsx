"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  FileText, 
  Send, 
  Settings, 
  Info,
  Copy,
  CheckCheck
} from "lucide-react";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { Product } from "@/data/products";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  // State management
  const [activeTab, setActiveTab] = useState<"specs" | "applications" | "downloads">("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    volume: "1 Unit",
    message: ""
  });

  // Code copy helper
  const arduinoSampleCode = `// Tamizh Tech Robotics Company
// Sample Driver Code for ${product.name}
// Hardwired PID Feedback Loop / Control Pins

#define MOTOR_LEFT_PWM  5
#define MOTOR_LEFT_DIR  4
#define MOTOR_RIGHT_PWM 6
#define MOTOR_RIGHT_DIR 7

void setup() {
  pinMode(MOTOR_LEFT_PWM, OUTPUT);
  pinMode(MOTOR_LEFT_DIR, OUTPUT);
  pinMode(MOTOR_RIGHT_PWM, OUTPUT);
  pinMode(MOTOR_RIGHT_DIR, OUTPUT);
  Serial.begin(9600);
  Serial.println("${product.name} Initialized.");
}

void loop() {
  // Move Forward
  digitalWrite(MOTOR_LEFT_DIR, HIGH);
  analogWrite(MOTOR_LEFT_PWM, 180);
  digitalWrite(MOTOR_RIGHT_DIR, HIGH);
  analogWrite(MOTOR_RIGHT_PWM, 180);
  delay(1000);
  
  // Stop
  analogWrite(MOTOR_LEFT_PWM, 0);
  analogWrite(MOTOR_RIGHT_PWM, 0);
  delay(500);
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(arduinoSampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
        volume: "1 Unit",
        message: ""
      });
      alert(`Quote request submitted successfully for ${product.name}! Our representative will contact you shortly.`);
    }, 1000);
  };

  const getWhatsAppLink = (type: "buy" | "quote" | "general") => {
    let text = "";
    if (type === "buy") {
      text = `Hello Tamizh Tech! I want to purchase the "${product.name}". Please provide specifications, quote, and payment methods.`;
    } else if (type === "quote") {
      text = `Hello! I would like a wholesale quote for the "${product.name}". Required volume: ${quoteForm.volume || "1 unit"}. Please coordinate.`;
    } else {
      text = `Hello! I have an inquiry about the "${product.name}". Please share datasheet and pricing.`;
    }
    return `https://wa.me/918148045030?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111] text-left">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <FaChevronRight className="w-2.5 h-2.5 text-gray-300" />
          <Link href="/products" className="hover:text-[#FF6B00] transition-colors">Products</Link>
          <FaChevronRight className="w-2.5 h-2.5 text-gray-300" />
          <span className="text-[#111111] truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Back Link */}
        <Link 
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#111111] mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF6B00]" /> Back to Catalog
        </Link>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left: Product Media Gallery (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-10 flex items-center justify-center relative aspect-square group overflow-hidden">
              <span className="absolute top-4 left-4 bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md z-10">
                {product.badge}
              </span>
              
              {product.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              ) : (
                <Settings className="w-32 h-32 text-gray-200" />
              )}
            </div>

            {/* Thumbnail Placeholders */}
            <div className="grid grid-cols-3 gap-4">
              <div className="border-2 border-[#FF6B00] rounded-xl p-3 bg-white flex items-center justify-center aspect-video cursor-pointer">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FF6B00]">Primary View</span>
              </div>
              <div className="border border-[#E5E5E5] hover:border-[#111111] rounded-xl p-3 bg-[#FAFAFA] flex items-center justify-center aspect-video cursor-pointer transition-colors">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Spec Detail</span>
              </div>
              <div className="border border-[#E5E5E5] hover:border-[#111111] rounded-xl p-3 bg-[#FAFAFA] flex items-center justify-center aspect-video cursor-pointer transition-colors">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">R&D Scale</span>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Pricing/CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-[#E5E5E5] pb-6">
              <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-3 block">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-[#111111] uppercase tracking-tighter leading-none mb-4">
                {product.name}
              </h1>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mt-2">
                Designed & Manufactured in Coimbatore, Tamil Nadu
              </p>
            </div>

            {/* Price Card */}
            <div className="p-6 bg-[#FFF2E6] border border-[#FF6B00]/20 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-wider block mb-1">Pricing & Availability</span>
                <span className="text-2xl font-black text-[#111111] tracking-tight">Contact For Quote</span>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white border border-[#FF6B00]/20 rounded text-[9px] font-bold text-[#FF6B00] uppercase">In Stock</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-[9px] font-bold text-gray-600 uppercase">STEM Mapped</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Product Overview</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Quick Specs Highlight */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.detailedSpecs.slice(0, 4).map((spec, specIdx) => (
                  <div key={specIdx} className="flex items-center gap-3 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-tight truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href={getWhatsAppLink("buy")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex-1 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" /> Buy on WhatsApp
              </a>
              <Link 
                href="#quote" 
                className="btn-secondary flex-1 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Request Quotation
              </Link>
            </div>

          </div>

        </div>

        {/* Tabbed Specs, Applications, and Downloads */}
        <section className="border border-[#E5E5E5] rounded-2xl overflow-hidden mb-24">
          {/* Tabs header */}
          <div className="bg-[#FAFAFA] border-b border-[#E5E5E5] flex">
            {[
              { id: "specs", label: "Technical Specifications" },
              { id: "applications", label: "Real-world Applications" },
              { id: "downloads", label: "Developer Resources" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-5 text-[10px] sm:text-xs font-black uppercase tracking-widest border-r border-[#E5E5E5] transition-all last:border-r-0 ${
                  activeTab === tab.id
                    ? "bg-white text-[#FF6B00] border-b-2 border-b-[#FF6B00]"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-8 md:p-12 text-left bg-white">
            
            {/* Specs Tab */}
            {activeTab === "specs" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wide text-[#111111] mb-6">Specification Sheets</h4>
                  <div className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                    {product.detailedSpecs.map((spec, idx) => {
                      const parts = spec.split(":");
                      return (
                        <div key={idx} className="grid grid-cols-2 p-4 border-b border-[#E5E5E5] last:border-b-0 text-xs font-bold uppercase tracking-wider">
                          <span className="text-gray-400">{parts[0] || "Spec Detail"}</span>
                          <span className="text-[#111111]">{parts[1] || spec}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-6 flex flex-col justify-center">
                  <div className="flex gap-4 items-start mb-4">
                    <Info className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wide text-[#111111]">Compliance Certifications</h4>
                      <p className="text-[11px] text-gray-500 font-bold uppercase mt-1 leading-relaxed">This kit adheres to international robotics STEM guidelines and contains genuine components selected for long life and heat dissipation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-wide text-[#111111] mb-4">Approved Use Cases & Projects</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:border-[#FF6B00] transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF2E6] text-[#FF6B00] flex items-center justify-center font-bold mb-4">
                        {idx + 1}
                      </div>
                      <h5 className="text-xs font-black uppercase tracking-wide text-[#111111] mb-2">Use Case</h5>
                      <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">{app}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Downloads Tab */}
            {activeTab === "downloads" && (
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-wide text-[#111111] mb-4">Technical Files</h4>
                  <div className="space-y-4">
                    {product.downloads.map((dl, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl flex items-center justify-between hover:border-[#FF6B00] transition-colors cursor-pointer"
                        onClick={() => alert(`Initiating mock download: ${dl.label}`)}
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div>
                            <span className="text-xs font-black uppercase tracking-wide text-[#111111] block">{dl.label}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{dl.type.toUpperCase()} DOCUMENT</span>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-[#FF6B00]" />
                      </div>
                    ))}
                    
                    {/* Mock CAD step block */}
                    <div 
                      className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl flex items-center justify-between hover:border-[#FF6B00] transition-colors cursor-pointer"
                      onClick={() => alert("Initiating mock CAD STEP file download.")}
                    >
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-gray-400" />
                        <div>
                          <span className="text-xs font-black uppercase tracking-wide text-[#111111] block">3D CAD Model (STEP)</span>
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">SOLID MODEL FOR HOUSING SETUP</span>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                  </div>
                </div>

                {/* Arduino Code Segment */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-black uppercase tracking-wide text-gray-400">Sample Driver Code</h4>
                    <button 
                      onClick={copyToClipboard}
                      className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-[#FF6B00] bg-[#FFF2E6] hover:bg-[#FF6B00] hover:text-white px-2.5 py-1 rounded transition-colors"
                    >
                      {copiedCode ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedCode ? "Copied" : "Copy Code"}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <pre className="bg-[#111111] text-white p-6 rounded-xl text-xs font-mono overflow-x-auto max-h-60 leading-relaxed text-left border border-gray-800">
                      <code>{arduinoSampleCode}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Accordion FAQ Hub */}
        <section className="max-w-4xl mx-auto mb-24 text-left">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-2 block">Support desk</span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tighter">Product FAQs</h3>
          </div>
          
          <div className="space-y-4 border-t border-[#E5E5E5] pt-6">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E5E5E5] pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 flex justify-between items-center text-left text-xs sm:text-sm font-black uppercase tracking-wide text-[#111111] hover:text-[#FF6B00] transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#FF6B00]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {openFaq === idx && (
                  <p className="text-xs text-gray-500 font-medium leading-relaxed pb-4 uppercase tracking-tight">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Lead capture Quote Form */}
        <section className="max-w-4xl mx-auto mb-24" id="quote">
          <div className="border border-[#E5E5E5] rounded-2xl bg-[#FAFAFA] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B00]" />
            
            <span className="text-[9px] font-black text-[#FF6B00] uppercase tracking-[0.3em] mb-3 block">Institutional Purchase</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#111111] tracking-tighter mb-4">Request wholesale quote</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-8">For schools, colleges, labs, or custom volumes, fill out this brief layout to acquire special partner rates.</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    required type="text" name="name" value={quoteForm.name} onChange={handleInputChange}
                    placeholder="Enter name" className="form-input" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Official Email</label>
                  <input 
                    required type="email" name="email" value={quoteForm.email} onChange={handleInputChange}
                    placeholder="Enter email" className="form-input" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Phone Number</label>
                  <input 
                    required type="text" name="phone" value={quoteForm.phone} onChange={handleInputChange}
                    placeholder="Phone number" className="form-input" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">School / College / Organization</label>
                  <input 
                    required type="text" name="organization" value={quoteForm.organization} onChange={handleInputChange}
                    placeholder="Institution name" className="form-input" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Volume Requested</label>
                  <select 
                    name="volume" value={quoteForm.volume} onChange={handleInputChange}
                    className="form-input cursor-pointer"
                  >
                    <option>1 Unit (Evaluation)</option>
                    <option>2 - 5 Units</option>
                    <option>6 - 15 Units</option>
                    <option>16+ Units (Bulk Setup)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Brief Requirements / Customized Tweaks</label>
                <textarea 
                  required name="message" value={quoteForm.message} onChange={handleInputChange}
                  rows={4} placeholder="Describe any customization (e.g. sensor layout, specific motors, extra chassis parts)..." 
                  className="form-input resize-none" 
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  type="submit" 
                  className="btn-primary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1"
                >
                  Submit Quote Request <Send className="w-4 h-4" />
                </button>
                <a 
                  href={getWhatsAppLink("quote")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1 text-center"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#FF6B00]" /> Fast WhatsApp Quote
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="text-left border-t border-[#E5E5E5] pt-16">
          <h3 className="text-xl font-black uppercase text-[#111111] mb-10 tracking-tighter">Related Robotics Hardware</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#FF6B00] hover:shadow-lg transition-all text-left"
              >
                <div className="h-40 bg-[#FAFAFA] flex items-center justify-center p-6 relative">
                  {rel.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>
                  ) : (
                    <Settings className="w-12 h-12 text-gray-200" />
                  )}
                  <span className="absolute bottom-2 left-4 text-[8px] font-black text-gray-400 uppercase tracking-widest">{rel.category}</span>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-black uppercase text-[#111111] tracking-tight leading-tight">{rel.name}</h4>
                    <span className="text-[10px] font-black text-[#FF6B00] block mt-1">Contact for Quote</span>
                  </div>
                  <Link 
                    href={`/products/${rel.slug}`}
                    className="w-full py-2.5 bg-white border border-gray-200 hover:border-[#FF6B00] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all block"
                  >
                    View Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Sticky Floating WhatsApp CTA */}
      <a
        href={getWhatsAppLink("general")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Enquire on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute right-14 bg-white border border-[#E5E5E5] text-[#111111] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Enquiry
        </span>
      </a>

      {/* Local style helper */}
      <style jsx global>{`
        .form-input {
          width: 100%;
          background-color: #FFFFFF;
          border: 1px solid #E5E5E5;
          padding: 0.875rem 1rem;
          color: #111111;
          font-weight: 700;
          font-size: 0.825rem;
          outline: none;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        .form-input:focus {
          border-color: #FF6B00;
          box-shadow: 0 0 0 1px #FF6B00;
        }
        .form-input::placeholder {
          color: #999999;
          opacity: 0.6;
        }
        select.form-input {
          appearance: none;
        }
      `}</style>
    </div>
  );
}
