"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  Cpu, 
  X, 
  Check, 
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  RotateCcw,
  ShoppingBag
} from "lucide-react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { products, Product } from "@/data/products";
import { getProductUrl } from "@/lib/routing";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import ProductEnquiryModal from "@/components/forms/ProductEnquiryModal";

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
    <div className="relative w-full h-72 bg-white border-b border-border/80 overflow-hidden group/slider">
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
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full tracking-wider z-10 font-mono">
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
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

  // Categories list with counts
  const categories = ["All", "Competition Robots", "Radio Controllers"];
  const getCategoryCount = (cat: string) => {
    if (cat === "All") return products.length;
    return products.filter(p => p.category === cat).length;
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setPriceRange("All");
    setMinRating(0);
    setInStockOnly(false);
    setSearchQuery("");
  };

  const isFiltersActive = selectedCategory !== "All" || priceRange !== "All" || minRating !== 0 || inStockOnly || searchQuery !== "";

  // Filtering Logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    
    let matchesPrice = true;
    const price = p.price || 0;
    if (priceRange === "under5k") {
      matchesPrice = price < 5000;
    } else if (priceRange === "5kto10k") {
      matchesPrice = price >= 5000 && price <= 10000;
    } else if (priceRange === "above10k") {
      matchesPrice = price > 10000;
    }
    
    const matchesRating = (p.rating || 0) >= minRating;
    const matchesStock = !inStockOnly || p.inStock === true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesStock;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price_asc") {
      return (a.price || 0) - (b.price || 0);
    }
    if (sortBy === "price_desc") {
      return (b.price || 0) - (a.price || 0);
    }
    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    // Featured (default): Keep current array order
    return 0;
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

  // Render Stars
  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<FaStar key={i} className="text-amber-400 w-3.5 h-3.5" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-200 w-3.5 h-3.5" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 text-text-primary">
      {/* Main Catalog Content */}
      <section className="bg-white py-4">
        <div className="container px-6 max-w-7xl mx-auto">

          {/* Prominent Top Catalog Search Bar */}
          <div className="mb-8 bg-subtle/50 border border-border/80 rounded-2xl p-5 md:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 text-left">
            <div>
              <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-0.5 font-mono">
                Store Search & Filtering
              </span>
              <h1 className="text-xl md:text-2xl font-black font-heading text-[#002B66] uppercase tracking-tight">
                Robotics & Hardware Catalog
              </h1>
            </div>

            {/* Live Search Input Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search products by name, specs, SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border rounded-xl pl-10 pr-10 py-3 text-xs font-bold text-text-primary focus:outline-none focus:border-accent shadow-xs"
              />
              <Search className="w-4 h-4 text-accent absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-accent cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* 1. Sticky Sidebar Filters Component */}
            <aside className="w-full lg:w-64 shrink-0 lg:block hidden sticky top-28 self-start">
              <div className="space-y-6 text-left border border-border/80 rounded-xl p-5 bg-subtle/40 backdrop-blur-xs shadow-xs">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-accent" /> Filters
                  </h3>
                  {isFiltersActive && (
                    <button 
                      onClick={resetFilters}
                      className="text-[10px] font-black uppercase text-accent hover:text-accent-hover transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> Clear
                    </button>
                  )}
                </div>

                {/* Search query in sidebar */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black text-text-muted uppercase tracking-wider">Search Catalog</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-border rounded-lg pl-9 pr-3 py-2 text-xs font-semibold text-text-primary focus:outline-none focus:border-accent"
                    />
                    <Search className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black text-text-muted uppercase tracking-wider">Categories</h4>
                  <div className="space-y-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full flex items-center justify-between text-left text-xs py-1 transition-colors ${
                          selectedCategory === cat 
                            ? "text-accent font-bold" 
                            : "text-text-secondary hover:text-accent font-semibold"
                        }`}
                      >
                        <span className="truncate">{cat === "All" ? "All Products" : cat}</span>
                        <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-border text-text-muted">
                          {getCategoryCount(cat)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price range */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black text-text-muted uppercase tracking-wider">Price Range</h4>
                  <div className="space-y-1.5 text-xs text-text-secondary font-semibold">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
                      <input 
                        type="radio" 
                        name="priceRange" 
                        checked={priceRange === "All"}
                        onChange={() => setPriceRange("All")}
                        className="accent-accent"
                      />
                      <span>All Prices</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
                      <input 
                        type="radio" 
                        name="priceRange" 
                        checked={priceRange === "under5k"}
                        onChange={() => setPriceRange("under5k")}
                        className="accent-accent"
                      />
                      <span>Under ₹5,000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
                      <input 
                        type="radio" 
                        name="priceRange" 
                        checked={priceRange === "5kto10k"}
                        onChange={() => setPriceRange("5kto10k")}
                        className="accent-accent"
                      />
                      <span>₹5,000 - ₹10,000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
                      <input 
                        type="radio" 
                        name="priceRange" 
                        checked={priceRange === "above10k"}
                        onChange={() => setPriceRange("above10k")}
                        className="accent-accent"
                      />
                      <span>Above ₹10,000</span>
                    </label>
                  </div>
                </div>

                {/* Ratings */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black text-text-muted uppercase tracking-wider">Customer Rating</h4>
                  <div className="space-y-1.5 text-xs text-text-secondary font-semibold">
                    <button
                      onClick={() => setMinRating(0)}
                      className={`w-full flex items-center gap-2 transition-colors ${minRating === 0 ? "text-accent font-bold" : "hover:text-accent"}`}
                    >
                      <span>Show All</span>
                    </button>
                    <button
                      onClick={() => setMinRating(4.8)}
                      className={`w-full flex items-center gap-2 transition-colors ${minRating === 4.8 ? "text-accent font-bold" : "hover:text-accent"}`}
                    >
                      <span className="flex text-amber-400 gap-0.5">★ ★ ★ ★ ★</span>
                      <span className="text-[10px] text-text-muted">4.8 & Up</span>
                    </button>
                    <button
                      onClick={() => setMinRating(4.7)}
                      className={`w-full flex items-center gap-2 transition-colors ${minRating === 4.7 ? "text-accent font-bold" : "hover:text-accent"}`}
                    >
                      <span className="flex text-amber-400 gap-0.5">★ ★ ★ ★ ☆</span>
                      <span className="text-[10px] text-text-muted">4.7 & Up</span>
                    </button>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-2 border-t border-border pt-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-text-secondary font-bold hover:text-accent transition-colors">
                    <input 
                      type="checkbox" 
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="accent-accent w-4 h-4 rounded border-border"
                    />
                    <span>Exclude Out of Stock</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Mobile Filters Toggle Button & Drawer */}
            <div className="lg:hidden w-full flex gap-3 text-left mb-6">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center gap-2 font-bold flex-1 justify-center py-5"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters {isFiltersActive && "•"}
              </Button>
              {isFiltersActive && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="font-bold border border-border hover:bg-subtle"
                >
                  Reset
                </Button>
              )}
            </div>

            {/* Mobile Expandable Filters Panel */}
            {showMobileFilters && (
              <div className="lg:hidden w-full bg-subtle border border-border rounded-xl p-5 text-left mb-6 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h4 className="text-xs font-bold uppercase text-text-primary">Search & Filter</h4>
                  <button onClick={() => setShowMobileFilters(false)} className="p-1">
                    <X className="w-4 h-4 text-text-muted" />
                  </button>
                </div>
                
                {/* Search */}
                <div>
                  <input
                    type="text"
                    placeholder="Search catalog..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-border rounded-lg pl-4 pr-3 py-2 text-xs font-semibold"
                  />
                </div>

                {/* Categories */}
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-text-muted uppercase">Categories</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${
                          selectedCategory === cat 
                            ? "bg-accent text-white border-accent" 
                            : "bg-white text-text-secondary border-border hover:border-accent"
                        }`}
                      >
                        {cat === "All" ? "All Products" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary font-bold">
                  <label className="flex items-center gap-1.5">
                    <input type="radio" checked={priceRange === "All"} onChange={() => setPriceRange("All")} className="accent-accent" /> All Prices
                  </label>
                  <label className="flex items-center gap-1.5">
                    <input type="radio" checked={priceRange === "under5k"} onChange={() => setPriceRange("under5k")} className="accent-accent" /> Under 5k
                  </label>
                  <label className="flex items-center gap-1.5">
                    <input type="radio" checked={priceRange === "5kto10k"} onChange={() => setPriceRange("5kto10k")} className="accent-accent" /> 5k - 10k
                  </label>
                  <label className="flex items-center gap-1.5">
                    <input type="radio" checked={priceRange === "above10k"} onChange={() => setPriceRange("above10k")} className="accent-accent" /> Above 10k
                  </label>
                </div>

                {/* Stock Toggle */}
                <label className="flex items-center gap-2 text-xs text-text-secondary font-bold">
                  <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="accent-accent w-4 h-4" /> Exclude Out of Stock
                </label>
              </div>
            )}

            {/* 2. Main catalog list */}
            <div className="flex-grow text-left">
              {/* Sorting Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border border-border/80 bg-subtle/20 rounded-xl p-4 mb-8 gap-4">
                <div className="text-xs text-text-secondary font-bold font-mono">
                  Showing <span className="text-accent font-extrabold">{sortedProducts.length}</span> of {products.length} Products
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text-muted whitespace-nowrap uppercase tracking-wider font-mono">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-border rounded-lg text-xs font-bold text-text-primary px-3 py-1.5 focus:outline-none focus:border-accent cursor-pointer"
                  >
                    <option value="Featured">Featured</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {sortedProducts.map((product, idx) => {
                    const price = product.price || 0;
                    const originalPrice = product.originalPrice || 0;
                    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

                    return (
                      <div 
                        key={idx} 
                        className="rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 relative text-left flex flex-col justify-between group"
                      >
                        {/* Top Badges Header */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                          {product.badge ? (
                            <span className="bg-accent text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md font-mono">
                              {product.badge}
                            </span>
                          ) : <span />}

                          {product.brand && (
                            <span className="bg-white/95 backdrop-blur-md border border-border/80 text-[#002B66] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs font-mono">
                              {product.brand}
                            </span>
                          )}
                        </div>

                        {/* Image Viewport */}
                        <div className="relative w-full bg-gradient-to-b from-subtle/50 to-white">
                          <ProductImageSlider images={product.images} name={product.name} />
                        </div>

                        {/* Content Details */}
                        <div className="p-6 flex-grow flex flex-col justify-between bg-white space-y-4">
                          <div>
                            {/* Category Eyebrow */}
                            <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1 font-mono">
                              {product.category}
                            </span>

                            {/* Product Title */}
                            <h3 className="text-base font-black font-heading text-[#002B66] uppercase tracking-tight line-clamp-2 min-h-[44px] mb-2 leading-snug group-hover:text-accent transition-colors">
                              {product.name}
                            </h3>

                            {/* Ratings Pill */}
                            <div className="flex items-center gap-2 mb-3 bg-amber-50/90 border border-amber-200/70 rounded-lg px-2.5 py-1 w-fit">
                              <div className="flex text-amber-400 gap-0.5">
                                {renderStars(product.rating || 4.5)}
                              </div>
                              <span className="text-[10px] font-black text-amber-900 font-mono">
                                {product.rating} ({product.reviewCount} reviews)
                              </span>
                            </div>

                            {/* E-Commerce Price Block */}
                            <div className="bg-subtle/40 rounded-xl p-3.5 border border-border/60 space-y-1.5 mb-3">
                              {product.price ? (
                                <div>
                                  <div className="flex items-baseline flex-wrap gap-2">
                                    <span className="text-2xl font-black text-[#002B66] tracking-tight font-sans">
                                      ₹{product.price.toLocaleString("en-IN")}
                                    </span>
                                    <span className="text-[10px] font-extrabold text-text-muted uppercase font-mono">
                                      (inc GST)
                                    </span>
                                    {originalPrice > 0 && (
                                      <span className="text-xs text-text-muted line-through font-bold">
                                        M.R.P: ₹{originalPrice.toLocaleString("en-IN")}
                                      </span>
                                    )}
                                  </div>
                                  {discount > 0 && (
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                                        SAVE {discount}%
                                      </span>
                                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
                                        Save ₹{(originalPrice - price).toLocaleString("en-IN")}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="text-accent font-black text-sm uppercase tracking-wider font-heading">
                                  Pricing: Upon Request
                                </div>
                              )}
                              <span className="text-[9px] text-text-muted font-bold block uppercase tracking-wider pt-1 border-t border-border/40 font-mono">
                                🚚 Express Shipping & 18% GST Invoice
                              </span>
                            </div>

                            {/* Specs Highlights */}
                            <p className="text-text-secondary text-[11px] font-semibold leading-relaxed border-t border-dashed border-border/80 pt-3">
                              {product.specs}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-2 pt-3 border-t border-border/60 mt-auto">
                            <Link href={getProductUrl(product.categorySlug, product.slug)} className="block w-full">
                              <Button 
                                variant="primary" 
                                size="sm" 
                                className="w-full justify-center gap-1.5 bg-[#002B66] hover:bg-[#001D47] text-white font-black text-[11px] py-3 uppercase tracking-wider rounded-xl shadow-xs transition-all"
                              >
                                View Specifications <ChevronRight className="w-4 h-4" />
                              </Button>
                            </Link>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => openQuoteModal(product)}
                                className="w-full justify-center font-black text-text-primary border-border hover:bg-subtle text-[10px] py-2.5 uppercase tracking-wider rounded-xl"
                              >
                                B2B Quote
                              </Button>
                              
                              <a 
                                href={`https://wa.me/918148045030?text=Hello!%20I%20want%20to%20buy%20the%20${encodeURIComponent(product.name)}.%20Please%20guide%20me%20on%20pricing%20and%20shipping.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                              >
                                <Button 
                                  variant="primary"
                                  size="sm"
                                  className="w-full justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba56] border-[#25D366] text-white font-black text-[10px] py-2.5 uppercase tracking-wider rounded-xl shadow-xs"
                                >
                                  <FaWhatsapp className="w-3.5 h-3.5 shrink-0" /> WhatsApp
                                </Button>
                              </a>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-subtle border border-border rounded-lg">
                  <Cpu className="w-12 h-12 text-text-muted mx-auto mb-4 animate-pulse" />
                  <h4 className="text-lg font-bold uppercase text-text-primary">No products found</h4>
                  <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Try resetting filters or adjusting search queries.</p>
                  <Button variant="outline" size="sm" onClick={resetFilters} className="mt-4 font-bold">
                    Reset Catalog
                  </Button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Centralized Product Enquiry Modal */}
      {quoteProduct && (
        <ProductEnquiryModal
          product={quoteProduct}
          isOpen={!!quoteProduct}
          onClose={() => setQuoteProduct(null)}
          mode="quote"
        />
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
