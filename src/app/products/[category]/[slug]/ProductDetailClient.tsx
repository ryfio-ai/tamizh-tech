"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  Cpu, 
  FileText, 
  Download, 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  Copy,
  CheckCheck,
  Calendar,
  Info
} from "lucide-react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";
import { getProductUrl, getProductCategoryUrl } from "@/lib/routing";
import ProductEnquiryModal from "@/components/forms/ProductEnquiryModal";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "applications" | "downloads" | "code">("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [copiedCode, setCopiedCode] = useState(false);

  // Frequently Bought Together Bundle Setup (Uses ONLY real available products)
  const getBundleConfig = () => {
    const slug = product.slug;
    if (slug.includes("race")) {
      return {
        items: [
          { name: "RC Robo Race", price: 12499, image: "/product/race/race1.png" },
          { name: "Flysky FS-i6X 10CH Transmitter", price: 6398, image: "/product/flysky/flysky-fs-i6x-10ch.jpg" },
          { name: "FlySky FS-CT6B 6CH Radio Set", price: 3548, image: "/product/flysky/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver2-550x550.jpg" }
        ],
        bundlePrice: 21299,
        originalTotal: 22445
      };
    } else if (slug.includes("soccer")) {
      return {
        items: [
          { name: "RC Robo Soccer", price: 14999, image: "/product/soccer/soccer 1.0.png" },
          { name: "Flysky FS-i6X 10CH Transmitter", price: 6398, image: "/product/flysky/flysky-fs-i6x-10ch.jpg" },
          { name: "FlySky FS-i6 6CH Transmitter", price: 5459, image: "/product/flysky/flysky-fs-i6-2.4g-6ch.jpg" }
        ],
        bundlePrice: 25499,
        originalTotal: 26856
      };
    } else {
      // Flysky Transmitter Bundle
      return {
        items: [
          { name: product.name, price: product.price || 6398, image: product.image },
          { name: "RC Robo Race", price: 12499, image: "/product/race/race1.png" },
          { name: "RC Robo Soccer", price: 14999, image: "/product/soccer/soccer 1.0.png" }
        ],
        bundlePrice: (product.price || 6398) + 25000,
        originalTotal: (product.price || 6398) + 27498
      };
    }
  };

  const bundle = getBundleConfig();

  // Mock Reviews Setup
  const getMockReviews = () => {
    const defaultReviews = [
      {
        name: "Dr. Anand Kumar",
        title: "Exceptional build quality for engineering labs!",
        rating: 5,
        date: "July 12, 2026",
        verified: true,
        text: "Ordered 12 units of these platforms for our university robotics lab. The tolerances on the chassis are spot-on, and the electronics are fully protected. Our students had them configured and racing within hours. Highly recommended for institutions!"
      },
      {
        name: "Sanjay R.",
        title: "Highly reliable under competition pressure",
        rating: 5,
        date: "June 28, 2026",
        verified: true,
        text: "Used this platform in the national robo combat tournament. It survived heavy impacts without any structural deformation. The response time and high traction wheels give you great control."
      },
      {
        name: "Keerthana M.",
        title: "Perfect controller, very easy calibration",
        rating: 4,
        date: "May 19, 2026",
        verified: true,
        text: "The telemetry functions are very useful. Set it up with our custom combat bot and was able to monitor battery voltage in real time. The binding is secure and doesn't get interrupted in busy arenas."
      }
    ];

    if (product.slug.includes("flysky")) {
      return [
        {
          name: "Rajeshwaran S.",
          title: "The standard for RC robotics in India",
          rating: 5,
          date: "July 24, 2026",
          verified: true,
          text: "If you are building custom vehicles, airplanes, or combat robots, this is the absolute best budget-friendly controller. Upgrading to 10 channels was seamless. Signal range reaches up to 1km easily without lag."
        },
        defaultReviews[0],
        defaultReviews[2]
      ];
    }
    return defaultReviews;
  };

  const reviews = getMockReviews();

  const [rfqForm, setRfqForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    qty: 1,
    notes: ""
  });
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqLeadId, setRfqLeadId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRfqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "Product Quote",
          source: "Product Page RFQ Form",
          pageUrl: `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}`,
          customerName: rfqForm.name,
          email: rfqForm.email,
          phone: rfqForm.phone,
          organization: rfqForm.org,
          quantity: rfqForm.qty,
          message: rfqForm.notes,
          productId: product.id,
          productName: product.name,
          productCategory: product.category,
          productCategorySlug: product.categorySlug,
          productSlug: product.slug,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRfqSubmitted(true);
        setRfqLeadId(data.leadId || "");
      } else {
        alert(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadRequest = (label: string) => {
    const message = `Hello Tamizh Tech! I am requesting the ${label} for the product: ${product.name}. Please share the files.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918148045030?text=${encoded}`, "_blank");
  };

  const copyToClipboard = (codeStr: string) => {
    navigator.clipboard.writeText(codeStr);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getWhatsAppMessage = (isBundle = false) => {
    let msg = "";
    if (isBundle) {
      msg = `Hello Tamizh Tech! I want to order the e-commerce bundle deal for "${product.name}" which includes: ${bundle.items.map(i => i.name).join(", ")}. Bundle Offer Price: Γé╣${bundle.bundlePrice.toLocaleString("en-IN")}. Please confirm order details.`;
    } else {
      msg = `Hello! I would like to buy the "${product.name}" (Qty: ${qty}) at the deal price of Γé╣${((product.price || 0) * qty).toLocaleString("en-IN")}. Please share shipping and payment options.`;
    }
    return `https://wa.me/918148045030?text=${encodeURIComponent(msg)}`;
  };

  // Structured schemas
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.tamizhtech.in${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.slug.includes("flysky") ? "Flysky" : "Tamizh Tech"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "url": `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}`
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
        "item": "https://www.tamizhtech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.tamizhtech.in/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.category,
        "item": `https://www.tamizhtech.in/products/${product.categorySlug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}`
      }
    ]
  };

  const sampleArduinoCode = `// Tamizh Tech Robotics Company
// Sample Driver Code for ${product.name}
// Hardwired PWM Feedback Loop / Control Pins

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

  // Get delivery date estimate (e.g. 3 days from now)
  const getDeliveryDate = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const target = new Date();
    target.setDate(target.getDate() + 3);
    return `${days[target.getDay()]}, ${months[target.getMonth()]} ${target.getDate()}`;
  };

  const brand = product.slug.includes("flysky") ? "Flysky" : "Tamizh Tech";

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

      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center flex-wrap gap-2 mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href="/products" className="hover:text-accent transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href={getProductCategoryUrl(product.categorySlug)} className="hover:text-accent transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-accent truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link 
            href={getProductCategoryUrl(product.categorySlug)} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {product.category}
          </Link>
        </div>

        {/* Product E-Commerce Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          
          {/* LEFT COLUMN: Gallery & Image Display (5 cols) */}
          <div className="lg:col-span-5 flex flex-col md:flex-row gap-4">
            
            {/* Image Thumbnails Sidebar */}
            {product.images && product.images.length > 0 && (
              <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto no-scrollbar md:h-[360px] pb-2 md:pb-0 shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-16 h-16 bg-white border rounded-lg overflow-hidden flex items-center justify-center p-1 cursor-pointer transition-all shrink-0 ${
                      selectedImageIdx === idx 
                        ? "border-accent ring-1 ring-accent" 
                        : "border-border hover:border-accent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumb ${idx}`}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Large Active Image Viewport */}
            <div className="bg-white border border-border rounded-xl p-6 flex items-center justify-center min-h-[360px] md:h-[400px] relative shadow-sm order-1 md:order-2 flex-grow overflow-hidden group">
              {product.badge && (
                <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider z-10 shadow-sm">
                  {product.badge}
                </div>
              )}
              {product.images && product.images[selectedImageIdx] ? (
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.images[selectedImageIdx]}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              ) : (
                <Cpu className="w-24 h-24 stroke-[0.5] text-border" />
              )}
            </div>

          </div>

          {/* MIDDLE COLUMN: Product Info & Pricing Box (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
            
            {/* Main Info Box */}
            <div className="md:col-span-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1">
                  Brand: {product.brand || brand}
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-accent/20 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Built to Order / RFQ
                  </span>
                  {product.sku && (
                    <span className="text-[10px] font-bold text-text-muted uppercase font-mono bg-subtle px-2 py-0.5 rounded border border-border">
                      SKU: {product.sku}
                    </span>
                  )}
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-black font-heading tracking-tight text-text-primary leading-tight uppercase">
                {product.name}
              </h1>

              {/* Engineering Heritage Badge */}
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Engineered in Coimbatore, India
                </span>
                <span className="text-text-muted text-xs">|</span>
                <span className="text-text-secondary text-xs font-semibold">
                  Official Hardware &amp; Custom Assembly
                </span>
              </div>

              {/* E-Commerce Price details */}
              <div className="bg-subtle/50 rounded-xl p-4 border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest block font-mono">
                    Deal Price
                  </span>
                  {product.cashback && (
                    <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase font-mono">
                      ≡ƒÄü {product.cashback}
                    </span>
                  )}
                </div>
                {product.price ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-text-primary tracking-tight font-sans">
                        Γé╣{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-bold text-text-muted uppercase font-mono">
                        (inc GST)
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-text-muted line-through font-bold">
                          M.R.P: Γé╣{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        You Save: Γé╣{(product.originalPrice - product.price).toLocaleString("en-IN")} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                      </div>
                    )}
                    <span className="text-[10px] text-text-muted font-bold block uppercase tracking-wider mt-1.5 leading-snug">
                      Inclusive of all taxes. 18% GST invoice provided for college lab setups.
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-black text-accent uppercase font-heading">Price upon request</span>
                )}

                {/* Tiered Quantity Pricing */}
                {product.tierPricing && product.tierPricing.length > 0 && (
                  <div className="mt-3 border border-border rounded-lg overflow-hidden bg-white text-xs shadow-xs">
                    <div className="bg-subtle px-3 py-1.5 font-bold uppercase text-[10px] text-text-muted border-b border-border flex justify-between tracking-wider font-mono">
                      <span>Select Quantity</span>
                      <span>Price</span>
                    </div>
                    <div className="divide-y divide-border/60">
                      {product.tierPricing.map((tier, tidx) => (
                        <div key={tidx} className="px-3 py-2 flex justify-between font-mono font-bold text-text-secondary hover:bg-subtle/40 transition-colors">
                          <span>{tier.qty} units</span>
                          <span className="text-accent font-black">Γé╣{tier.price.toLocaleString("en-IN")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-2">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-wider block font-mono">
                  Product Features
                </span>
                <ul className="space-y-1.5 text-xs text-text-secondary font-bold">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>100% Genuine Branded Equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Thoroughly Tested by Tamizh Tech Engineers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Direct Technical Support & Curriculum Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Compliant with standard B2B institutional specs</span>
                  </li>
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
                <div className="p-2.5 bg-subtle rounded-lg flex flex-col items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent mb-1" />
                  <span className="text-[9px] font-black text-text-primary uppercase tracking-tight block">1 Yr Warranty</span>
                </div>
                <div className="p-2.5 bg-subtle rounded-lg flex flex-col items-center justify-center">
                  <Truck className="w-5 h-5 text-accent mb-1" />
                  <span className="text-[9px] font-black text-text-primary uppercase tracking-tight block">Express Shipping</span>
                </div>
                <div className="p-2.5 bg-subtle rounded-lg flex flex-col items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-accent mb-1" />
                  <span className="text-[9px] font-black text-text-primary uppercase tracking-tight block">Lab Ready</span>
                </div>
              </div>
            </div>

            {/* Buy Sidebar Checkout Box (4 cols) */}
            <div className="md:col-span-4 bg-white border border-border shadow-md rounded-xl p-5 space-y-4">
              <div>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-0.5">
                  • Custom Engineered to Order
                </span>
                <span className="text-[10px] font-bold text-text-secondary block font-mono">
                  Direct from Tamizh Tech Labs, Coimbatore
                </span>
              </div>

              {/* Delivery ETA */}
              <div className="text-xs text-text-secondary font-bold space-y-1">
                <span className="block">Delivery / Lead Timeline:</span>
                <span className="text-text-primary font-black flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent" /> 3–7 Business Days Across India
                </span>
              </div>

              {/* Qty Selector */}
              <div className="flex items-center justify-between border-t border-b border-border py-3">
                <span className="text-xs font-black uppercase text-text-muted">Quantity:</span>
                <select
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value) || 1)}
                  className="bg-subtle border border-border rounded px-2.5 py-1 text-xs font-bold text-text-primary focus:outline-none focus:border-accent cursor-pointer"
                >
                  {[1, 2, 3, 5, 10, 15, 20].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Price Calculation */}
              <div className="flex justify-between items-baseline py-1">
                <span className="text-xs font-bold text-text-secondary">Subtotal:</span>
                <span className="text-lg font-black text-text-primary font-sans">
                  Γé╣{((product.price || 0) * qty).toLocaleString("en-IN")}
                </span>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <Button 
                  variant="primary" 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full justify-center gap-2 bg-[#002B66] hover:bg-[#001D47] text-white font-black text-xs py-3.5 uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
                >
                  Request Official Quote
                </Button>

                <a
                  href={getWhatsAppMessage(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-700 font-black text-xs py-3 uppercase tracking-wider rounded-xl"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-600 shrink-0" /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed Detailed Specifications & Specs Sheets */}
        <div className="border-b border-border mb-8 flex gap-6 overflow-x-auto no-scrollbar">
          {[
            { id: "specs", label: "Specifications" },
            { id: "applications", label: "Use Cases" },
            { id: "downloads", label: "Datasheets & Manuals" },
            { id: "code", label: "Sample Code" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-accent text-accent"
                  : "border-transparent text-text-muted hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        <div className="mb-16 text-left">
          {activeTab === "specs" && (
            <div className="max-w-3xl">
              <h3 className="text-lg font-black font-heading uppercase mb-4 text-text-primary">
                Technical Specifications Table
              </h3>
              <div className="border border-border rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-xs font-bold text-text-secondary">
                  <tbody>
                    {product.detailedSpecs && product.detailedSpecs.length > 0 ? (
                      product.detailedSpecs.map((spec, idx) => {
                        const parts = spec.split(":");
                        const hasColon = parts.length > 1;
                        return (
                          <tr 
                            key={idx} 
                            className={`border-b border-border/60 last:border-b-0 ${idx % 2 === 0 ? "bg-white" : "bg-subtle/50"}`}
                          >
                            <td className="p-3.5 font-black text-text-primary w-1/3 uppercase tracking-wider border-r border-border/40 font-mono">
                              {hasColon ? parts[0].trim() : "Attribute"}
                            </td>
                            <td className="p-3.5 font-semibold text-text-secondary uppercase">
                              {hasColon ? parts.slice(1).join(":").trim() : spec}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td className="p-4 text-center text-text-muted">No specifications found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="max-w-3xl space-y-4">
              <h3 className="text-lg font-black font-heading uppercase text-text-primary">
                Classroom & Industrial Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.applications && product.applications.length > 0 ? (
                  product.applications.map((app, idx) => (
                    <div key={idx} className="p-4 border border-border rounded-lg bg-subtle/30 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 font-mono text-[10px] font-black mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-bold text-text-secondary uppercase leading-relaxed">{app}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-text-muted">No applications listed.</span>
                )}
              </div>
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="max-w-3xl space-y-4">
              <h3 className="text-lg font-black font-heading uppercase text-text-primary">
                Technical Files & Datasheet Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.downloads && product.downloads.map((dl, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleDownloadRequest(dl.label)}
                    className="p-4 bg-subtle border border-border rounded-xl hover:border-accent transition-all flex items-center justify-between text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg border border-border text-accent">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-text-primary block uppercase">{dl.label}</span>
                        <span className="text-[9px] font-black text-text-muted uppercase tracking-wider font-mono">
                          {dl.type.toUpperCase()} File (Upon request)
                        </span>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  </button>
                ))}

                {/* Direct mock CAD stepper block */}
                <button 
                  onClick={() => handleDownloadRequest("3D Solid CAD Model STEP File")}
                  className="p-4 bg-subtle border border-border rounded-xl hover:border-accent transition-all flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-border text-accent">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-text-primary block uppercase">3D STEP Chassis Solid Model</span>
                      <span className="text-[9px] font-black text-text-muted uppercase tracking-wider font-mono">STEP FILE FOR CAD LAYOUTS</span>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="max-w-3xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black font-heading uppercase text-text-primary">
                  Arduino Reference Driver Code
                </h3>
                <button 
                  onClick={() => copyToClipboard(sampleArduinoCode)}
                  className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-accent bg-accent/5 hover:bg-accent hover:text-white px-2.5 py-1.5 rounded transition-all font-mono"
                >
                  {copiedCode ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCode ? "Copied" : "Copy Code"}
                </button>
              </div>

              <div className="relative border border-border rounded-xl overflow-hidden shadow-xs">
                <pre className="bg-subtle text-text-primary p-6 text-[11px] font-mono overflow-x-auto max-h-72 leading-relaxed text-left">
                  <code>{sampleArduinoCode}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* 3. Frequently Bought Together Bundle Builder */}
        {bundle && (
          <div className="text-left border border-border rounded-xl p-6 md:p-8 bg-subtle/30 mb-16 shadow-xs">
            <h3 className="text-lg font-black font-heading uppercase text-text-primary mb-2">
              Frequently Bought Together
            </h3>
            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-6">
              Complete your control systems in one go and save on package pricing.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-6 justify-between">
              {/* Bundle items visuals */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
                {bundle.items.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span className="text-xl font-bold text-text-muted">+</span>}
                    <div className="flex items-center gap-3 p-3 bg-white border border-border rounded-lg max-w-[240px] shrink-0">
                      <div className="relative w-12 h-12 bg-white flex items-center justify-center shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-text-primary uppercase leading-tight block truncate max-w-[140px]">
                          {item.name}
                        </span>
                        <span className="text-xs font-black text-accent font-sans">
                          Γé╣{item.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Bundle Action */}
              <div className="bg-white border border-border p-5 rounded-lg shrink-0 w-full xl:w-72 text-center xl:text-left space-y-4">
                <div>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-wider block">Bundle Price:</span>
                  <div className="flex items-baseline justify-center xl:justify-start gap-2">
                    <span className="text-2xl font-black text-text-primary font-sans">
                      Γé╣{bundle.bundlePrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-text-muted line-through font-bold">
                      Γé╣{bundle.originalTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 block uppercase tracking-wider mt-1">
                    Save Γé╣{(bundle.originalTotal - bundle.bundlePrice).toLocaleString("en-IN")} on this bundle deal!
                  </span>
                </div>
                <a
                  href={getWhatsAppMessage(true)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="primary" 
                    className="w-full justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] border-[#25D366] text-white font-black text-xs py-3 uppercase tracking-wider"
                  >
                    <FaWhatsapp className="w-4 h-4 shrink-0" /> Order Bundle
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 4. Customer reviews & rating breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 text-left border-t border-border pt-12">
          {/* Rating breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-black font-heading uppercase text-text-primary">
              Customer Reviews
            </h3>
            
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black font-sans">{product.rating}</span>
              <div>
                <div className="flex text-amber-400 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 4.5) ? "text-amber-400" : "text-gray-200"}`} />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-text-muted uppercase">out of 5 stars</span>
              </div>
            </div>

            {/* Distribution bars */}
            <div className="space-y-2 border-t border-border pt-4 text-xs font-bold text-text-secondary uppercase font-mono">
              <div className="flex items-center gap-3">
                <span className="w-10">5 Star</span>
                <div className="flex-grow bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[85%]" />
                </div>
                <span className="w-8 text-right font-mono">85%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10">4 Star</span>
                <div className="flex-grow bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[10%]" />
                </div>
                <span className="w-8 text-right font-mono">10%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10">3 Star</span>
                <div className="flex-grow bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[5%]" />
                </div>
                <span className="w-8 text-right font-mono">5%</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-10">2 Star</span>
                <div className="flex-grow bg-gray-100 h-3 rounded-full" />
                <span className="w-8 text-right font-mono">0%</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-10">1 Star</span>
                <div className="flex-grow bg-gray-100 h-3 rounded-full" />
                <span className="w-8 text-right font-mono">0%</span>
              </div>
            </div>
          </div>

          {/* Testimonial List */}
          <div className="lg:col-span-8 space-y-6">
            <h4 className="text-sm font-black uppercase text-text-muted tracking-wider font-mono">
              Top Customer Testimonials
            </h4>

            <div className="space-y-6 divide-y divide-border/60">
              {reviews.map((rev, idx) => (
                <div key={idx} className={`pt-6 ${idx === 0 ? "pt-0" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-[10px] font-black font-mono">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-black text-text-primary block">{rev.name}</span>
                      <span className="text-[9px] text-text-muted font-bold block uppercase tracking-wider">
                        {rev.date} {rev.verified && "ΓÇó Verified Purchase"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-400 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className={`w-3 h-3 ${i < rev.rating ? "text-amber-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                    <span className="text-xs font-extrabold text-text-primary uppercase tracking-tight">
                      {rev.title}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed font-semibold uppercase tracking-tight">
                    {rev.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Institutional RFQ form */}
        <div id="rfq-section" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 bg-subtle border border-border rounded-lg p-8 lg:p-12 text-left">
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">B2B Integration</span>
            <h2 className="text-2xl font-black font-heading tracking-tight mb-4 text-text-primary uppercase">Request B2B Quote & Custom Pricing</h2>
            <p className="text-text-secondary text-xs leading-relaxed mb-6 font-semibold uppercase tracking-tight">
              Setting up a robotics laboratory in your school, college, or university? Or do you need bulk supply for competition teams? Complete the request form and our logistics team will share customized pricing lists and tax invoices within 12 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase text-text-primary">Bulk Procurement Discounts Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase text-text-primary">GST-Compliant Invoices for Institutions</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase text-text-primary">Integrated Lab Curriculum Options</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-6 lg:p-8 shadow-xs">
            {rfqSubmitted ? (
              <div className="text-center py-12">
                <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold font-heading uppercase text-text-primary">RFQ Submitted Successfully</h4>
                <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Our sales consultants will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={rfqForm.name}
                      onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="e.g. Anand Kumar"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Email Address *</label>
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
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={rfqForm.phone}
                      onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="+91 98765 43210"
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
                      className="w-full bg-gray-100 border border-border rounded-lg px-4 py-2.5 text-xs text-text-muted"
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
                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center py-3.5 font-bold text-white uppercase tracking-wider">
                  {isSubmitting ? "Submitting..." : "Submit RFQ Request"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* 6. Accordion FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mb-16 text-left">
            <h2 className="text-xl font-black font-heading tracking-tight mb-6 text-text-primary uppercase">
              Product Q&A / FAQs
            </h2>
            <div className="space-y-4 max-w-3xl">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="border border-border rounded-lg bg-subtle overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-5 py-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-text-primary cursor-pointer hover:bg-border/20 transition-all focus:outline-none"
                  >
                    <span className={openFaq === idx ? "text-accent font-black" : "text-text-primary"}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-accent" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-2 text-xs text-text-secondary font-semibold border-t border-border/50 uppercase leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Related products list */}
        {related.length > 0 && (
          <div className="text-left border-t border-border pt-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-xl font-black font-heading tracking-tight text-text-primary uppercase">
                Related Products
              </h2>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono mr-2">Filter:</span>
                <span className="px-3 py-1 bg-accent text-white text-[10px] font-black rounded uppercase tracking-wider">
                  From Same Category ({product.category})
                </span>
                {product.brand && (
                  <span className="px-3 py-1 bg-subtle text-text-secondary text-[10px] font-bold rounded border border-border uppercase tracking-wider">
                    From Same Brand ({product.brand})
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, idx) => (
                <Card key={idx} className="p-0 overflow-hidden bg-white border border-border flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                  <div className="h-44 bg-subtle border-b border-border flex items-center justify-center p-6 relative">
                    {p.image ? (
                      <div className="relative w-full h-[120px] transition-transform duration-500 group-hover:scale-105">
                        <Image src={p.image} alt={p.name} fill className="object-contain" />
                      </div>
                    ) : (
                      <Cpu className="w-12 h-12 text-border" />
                    )}
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-black text-accent uppercase font-mono">{p.brand || "Tamizh Tech"}</span>
                        {p.price && (
                          <span className="text-xs font-black text-text-primary font-sans">₹{p.price.toLocaleString("en-IN")}</span>
                        )}
                      </div>
                      <h4 className="text-xs font-black font-heading uppercase text-text-primary tracking-tight group-hover:text-accent transition-colors leading-tight line-clamp-2">
                        {p.name}
                      </h4>
                    </div>
                    <Link href={getProductUrl(p.categorySlug, p.slug)}>
                      <Button variant="outline" size="sm" className="w-full justify-center font-bold text-xs uppercase tracking-wider">
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
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-border p-4 flex md:hidden items-center justify-between z-40 shadow-lg">
        <div>
          <span className="text-[9px] font-black text-text-muted uppercase tracking-wider block">Price</span>
          <span className="text-sm font-extrabold text-accent font-sans">
            ₹{(product.price || 0).toLocaleString("en-IN")}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => setIsModalOpen(true)}
            className="bg-[#002B66] text-white font-bold text-xs uppercase px-4 py-2"
          >
            Quote
          </Button>
          <a
            href={getWhatsAppMessage(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg flex items-center gap-1.5"
          >
            <FaWhatsapp className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Centralized Product Enquiry Modal */}
      <ProductEnquiryModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialQuantity={qty}
        mode="quote"
      />
    </div>
  );
}
