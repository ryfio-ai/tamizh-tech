"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { 
  Search, 
  Cpu, 
  X, 
  Check, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { products, Product } from "@/data/products";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const ProductImageSlider = ({ images, name }: { images: string[]; name: string }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-80 bg-white border-b border-border/80 overflow-hidden group/slider">
      {images && images.length > 0 ? (
        <>
          <div className="relative w-full h-full bg-white flex items-center justify-center p-3">
            <Image
              src={images[currentIdx]}
              alt={`${name} slide ${currentIdx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 transition-transform duration-500 group-hover/slider:scale-[1.03]"
              priority={currentIdx === 0}
            />
          </div>
          {images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-border/60 flex items-center justify-center text-text-primary hover:bg-accent hover:text-white transition-all opacity-0 group-hover/slider:opacity-100 z-10 cursor-pointer shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-border/60 flex items-center justify-center text-text-primary hover:bg-accent hover:text-white transition-all opacity-0 group-hover/slider:opacity-100 z-10 cursor-pointer shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Slide Counter Indicator */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full tracking-wider z-10">
                {currentIdx + 1} / {images.length}
              </div>
              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIdx(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIdx ? "bg-accent w-4" : "bg-text-muted/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-border">
          <Cpu className="w-16 h-16 stroke-[1]" />
        </div>
      )}
    </div>
  );
};

function ProductsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Quote Modal State
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    org: "",
    qty: 1,
    notes: ""
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const openQuoteModal = (product: Product) => {
    setQuoteProduct(product);
    setQuoteForm({
      name: "",
      email: "",
      org: "",
      qty: 1,
      notes: `Requesting a quote for ${product.name}.`
    });
    setQuoteSubmitted(false);
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteProduct) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "product_rfq",
          productName: quoteProduct.name,
          ...quoteForm,
        }),
      });
      if (res.ok) {
        setQuoteSubmitted(true);
      } else {
        alert("Failed to submit inquiry. Please try again or message us directly via WhatsApp.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit inquiry. Please try again or message us directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Robotics Store & Custom Hardware"
        subtitle="High-grade competition bots designed, engineered, and manufactured in India."
        breadcrumbActive="Products"
      />

      {/* Intro section */}
      <section className="bg-subtle py-12 border-b border-border text-left">
        <div className="container px-6 max-w-4xl mx-auto">
          <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">Robotics Competition Excellence</span>
          <h2 className="text-2xl md:text-3xl font-black font-heading tracking-tight text-text-primary mb-3">Event-Ready Robotics Systems</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            We design, develop, and manufacture custom robotics hardware. Below are our three battle-tested, competition-ready platforms available directly for teams, institutions, and events.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["RC Robo Race", "RC Robo Soccer", "RC Robo Sumo"].map((cat) => (
              <span 
                key={cat} 
                className="bg-white border border-border px-4 py-2 rounded-lg text-xs font-bold text-text-secondary shadow-xs hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main listing section */}
      <section className="section bg-white py-16">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="space-y-12">
            
            {/* Search Bar */}
            <div className="relative w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search store catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-subtle border border-border rounded-lg pl-12 pr-4 py-3.5 text-xs font-bold text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <Card 
                    key={idx} 
                    className="p-0 overflow-hidden flex flex-col justify-between group hover:border-accent/30 hover:shadow-xl transition-all duration-300 relative text-left bg-white border-border"
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-accent text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      Available Now
                    </div>

                    {/* Slideshow image container (height set to h-80 for maximum visibility) */}
                    <ProductImageSlider images={product.images} name={product.name} />

                    {/* Content details */}
                    <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                      <div>
                        <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1.5">
                          {product.category}
                        </div>
                        <h4 className="text-lg font-bold font-heading text-text-primary uppercase tracking-tight mb-1.5 leading-snug">
                          {product.name}
                        </h4>
                        <div className="text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
                          Pricing: Upon Request
                        </div>
                        <p className="text-text-secondary text-xs leading-relaxed mb-4">
                          {product.specs}
                        </p>
                        <p className="text-text-muted text-[11px] leading-relaxed italic mb-4">
                          {product.description}
                        </p>
                      </div>

                      {/* Direct contact actions */}
                      <div className="space-y-2.5 pt-5 border-t border-border mt-auto">
                        <Button 
                          variant="primary" 
                          size="sm" 
                          onClick={() => openQuoteModal(product)}
                          className="w-full justify-center font-bold text-white bg-accent hover:bg-accent-hover text-xs py-2.5"
                        >
                          Contact for Pricing
                        </Button>
                        <a 
                          href={`https://wa.me/918148045030?text=Hello!%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(product.name)}.%20Please%20guide%20me%20on%20pricing%20and%20shipping.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button 
                            variant="primary"
                            size="sm"
                            className="w-full justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba56] border-[#25D366] hover:border-[#20ba56] text-white font-bold text-xs py-2.5"
                          >
                            <FaWhatsapp className="w-4 h-4" /> Inquiry via WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>

                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-subtle border border-border rounded-lg">
                <Cpu className="w-12 h-12 text-text-muted mx-auto mb-4 animate-pulse" />
                <h4 className="text-lg font-bold uppercase text-text-primary">No products found</h4>
                <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Try resetting filters or adjusting search queries.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {quoteProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-border rounded-lg shadow-2xl max-w-lg w-full overflow-hidden text-left relative flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-border flex justify-between items-center bg-subtle">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">Commercial RFP</span>
                <h3 className="text-lg font-bold font-heading uppercase text-text-primary">Request Custom Quote</h3>
              </div>
              <button 
                onClick={() => setQuoteProduct(null)}
                className="p-2 text-text-muted hover:text-accent transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {quoteSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-text-primary mb-2">Quote Request Logged</h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    Our technical coordinator will review your requirements for <strong>{quoteProduct.name}</strong> and reach out shortly.
                  </p>
                  <Button variant="primary" onClick={() => setQuoteProduct(null)} className="font-bold text-white">
                    Close Window
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="p-4 bg-subtle rounded-lg border border-border/60">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-1">Target Product</span>
                    <span className="text-sm font-extrabold text-text-primary uppercase">{quoteProduct.name}</span>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
                      placeholder="Er. Ramesh Kumar"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-1">Your Email *</label>
                    <input 
                      type="email" 
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
                      placeholder="ramesh@college.edu"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-1">Institution / Company *</label>
                    <input 
                      type="text" 
                      required
                      value={quoteForm.org}
                      onChange={(e) => setQuoteForm({...quoteForm, org: e.target.value})}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
                      placeholder="PSG College of Technology"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-1">Required Quantity</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quoteForm.qty}
                      onChange={(e) => setQuoteForm({...quoteForm, qty: parseInt(e.target.value) || 1})}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-1">Customization Requirements</label>
                    <textarea 
                      rows={3}
                      value={quoteForm.notes}
                      onChange={(e) => setQuoteForm({...quoteForm, notes: e.target.value})}
                      className="w-full bg-subtle border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
                      placeholder="Need custom logo engraving / extra batteries."
                    />
                  </div>

                  <div className="pt-4 border-t border-border flex justify-end gap-3">
                    <Button type="button" variant="outline" onClick={() => setQuoteProduct(null)} className="font-bold">
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" disabled={isSubmitting} className="font-bold text-white bg-accent hover:bg-accent-hover">
                      {isSubmitting ? "Submitting..." : "Send RFQ Request"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-text-muted font-bold text-xs uppercase tracking-widest">Loading Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
