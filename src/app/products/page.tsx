"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  Cpu, 
  ShoppingBag, 
  Trash2, 
  X, 
  Plus, 
  Minus,
  ArrowRight,
  Bot,
  Check,
  Eye,
  AlertTriangle,
  MessageSquare
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { products, Product } from "@/data/products";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

interface CartItem {
  product: Product;
  quantity: number;
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ttrc_enquiry_list");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(decodeURIComponent(initialCategory));
    }
  }, [initialCategory]);

  const categories = [
    "All",
    "Robo Race Bots",
    "Robo Soccer Bots",
    "Robo War Bots",
    "Robo Sumo Bots",
    "Line Follower Robots",
    "Maze Solver Robots",
    "Drone Kits",
    "RC Boat Kits",
    "Embedded Development Kits",
    "Electronics Kits",
    "STEM Learning Kits",
    "School Robotics Lab Kits"
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("ttrc_enquiry_list", JSON.stringify(newCart));
  };

  const addToCart = (product: Product) => {
    const currentCount = getCartCount();
    if (currentCount >= 10) {
      alert("You have reached the maximum limit of 10 items in your enquiry list.");
      return;
    }
    
    const existing = cart.find((item) => item.product.slug === product.slug);
    let newCart: CartItem[];
    if (existing) {
      newCart = cart.map((item) => 
        item.product.slug === product.slug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { product, quantity: 1 }];
    }
    
    const newCount = newCart.reduce((count, item) => count + item.quantity, 0);
    if (newCount > 10) {
      alert("Adding this would exceed the maximum limit of 10 items in your enquiry list.");
      return;
    }
    
    saveCart(newCart);
    setIsCartOpen(true);
  };

  const updateQuantity = (slug: string, delta: number) => {
    if (delta > 0 && getCartCount() >= 10) {
      alert("You have reached the maximum limit of 10 items in your enquiry list.");
      return;
    }
    
    const newCart = cart.map((item) => {
      if (item.product.slug === slug) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[];
    
    saveCart(newCart);
  };

  const removeFromCart = (slug: string) => {
    const newCart = cart.filter((item) => item.product.slug !== slug);
    saveCart(newCart);
  };

  const handleCheckout = () => {
    const itemsText = cart.map(item => `- ${item.quantity} x ${item.product.name}`).join("\n");
    const checkoutMessage = `Hello Tamizh Tech! I would like to request a quote for the following robotics hardware:\n\n${itemsText}\n\nPlease share the pricing and delivery details.`;
    const encoded = encodeURIComponent(checkoutMessage);
    window.open(`https://wa.me/918148045030?text=${encoded}`, "_blank");
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Robotics Store & Custom Hardware"
        subtitle="High-grade competition bots, STEM kits, embedded development tools, and laboratory configurations designed, developed, and manufactured in India."
        breadcrumbActive="Products"
      />

      <section className="section bg-white py-16">
        <div className="container px-6">
          
          {/* Filter and Search Controls */}
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mb-12 pb-8 border-b border-border">
            {/* Categories Tab */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 xl:pb-0 w-full xl:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-full border shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-accent text-white border-accent shadow-sm"
                      : "bg-subtle text-text-secondary border-border hover:text-accent hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full xl:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-subtle border border-border rounded-full pl-12 pr-4 py-3 text-xs font-bold text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <Card 
                  key={idx} 
                  className="p-0 overflow-hidden flex flex-col justify-between group hover:border-accent/30 hover:shadow-lg transition-all duration-300 relative text-left bg-white border-border"
                >
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {product.badge}
                  </div>

                  {/* Product Image inside White Canvas Panel */}
                  <div className="w-full h-48 bg-white border-b border-border flex items-center justify-center p-8 relative overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-border group-hover:text-accent/25 transition-colors duration-500">
                        <Cpu className="w-16 h-16 stroke-[1]" />
                      </div>
                    )}
                    <span className="absolute bottom-3 left-4 text-[9px] font-bold text-text-muted uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-text-primary uppercase tracking-tight mb-1 leading-snug">
                        {product.name}
                      </h4>
                      <div className="text-accent font-bold text-xs uppercase tracking-wider mb-3">
                        Pricing: Upon Request
                      </div>
                      <p className="text-text-muted text-[11px] font-medium leading-relaxed mb-4">
                        {product.specs}
                      </p>
                      
                      {/* Specs Bullet Points */}
                      <ul className="space-y-1.5 mb-6">
                        {product.detailedSpecs.slice(0, 3).map((spec, specIdx) => (
                          <li key={specIdx} className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                            <Check className="w-3.5 h-3.5 text-accent shrink-0" /> <span className="truncate">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 pt-4 border-t border-border mt-auto">
                      <Link 
                        href={`/products/${product.slug}`}
                        className="w-full block"
                      >
                        <Button variant="secondary" size="sm" className="w-full justify-center gap-2">
                          <Eye className="w-3.5 h-3.5" /> View Details
                        </Button>
                      </Link>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          variant="secondary"
                          size="sm"
                          onClick={() => addToCart(product)}
                          className="w-full justify-center"
                        >
                          Add to List
                        </Button>
                        <a 
                          href={`https://wa.me/918148045030?text=Hello!%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(product.name)}.%20Please%20guide%20me%20on%20pricing%20and%20shipping.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button 
                            variant="primary"
                            size="sm"
                            className="w-full justify-center gap-1 bg-[#25D366] hover:bg-[#20ba56] border-[#25D366] hover:border-[#20ba56]"
                          >
                            <FaWhatsapp className="w-3.5 h-3.5" /> WhatsApp Us
                          </Button>
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link href={`/products/${product.slug}?action=buy`}>
                          <Button variant="primary" size="sm" className="w-full justify-center">
                            Buy Now
                          </Button>
                        </Link>
                        <Link href={`/products/${product.slug}?action=quote`}>
                          <Button variant="secondary" size="sm" className="w-full justify-center">
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-subtle border border-border rounded-2xl">
              <Bot className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <h4 className="text-lg font-bold uppercase text-text-primary">No products found</h4>
              <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Try resetting filters or adjusting search queries.</p>
            </div>
          )}

          {/* Floating Shopping Cart Button */}
          {cart.length > 0 && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="fixed bottom-6 left-24 bg-accent text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all z-45 flex items-center justify-center cursor-pointer"
              aria-label="Open Enquiry List"
            >
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-white" />
                <span className="absolute -top-2.5 -right-2.5 bg-text-primary text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-accent">
                  {getCartCount()}
                </span>
              </div>
            </button>
          )}

          {/* Cart Side Drawer Overlay */}
          {isCartOpen && (
            <div className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50">
              <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white border-l border-border shadow-2xl flex flex-col justify-between">
                
                {/* Drawer Header */}
                <div className="p-6 border-b border-border flex justify-between items-center bg-subtle">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">Your Enquiry List</h3>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 text-text-muted hover:text-accent transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  {cart.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-subtle border border-border p-4 rounded-xl flex justify-between gap-4 text-left"
                    >
                      <div className="flex-grow">
                        <h4 className="text-xs font-bold uppercase text-text-primary leading-tight">{item.product.name}</h4>
                        <p className="text-[9px] font-bold text-text-muted uppercase mt-1 leading-none">{item.product.category}</p>
                        <div className="flex items-center gap-3 mt-4">
                          <button 
                            onClick={() => updateQuantity(item.product.slug, -1)}
                            className="p-1 border border-border hover:border-accent rounded-lg cursor-pointer"
                          >
                            <Minus className="w-3 h-3 text-text-primary" />
                          </button>
                          <span className="text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.slug, 1)}
                            className="p-1 border border-border hover:border-accent rounded-lg cursor-pointer"
                          >
                            <Plus className="w-3 h-3 text-text-primary" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-between items-end shrink-0">
                        <button 
                          onClick={() => removeFromCart(item.product.slug)}
                          className="text-text-muted hover:text-accent transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warning banner when cart reaches capacity limit */}
                {getCartCount() >= 10 && (
                  <div className="mx-6 my-2 p-3.5 bg-accent/5 border border-accent/25 rounded-xl text-[10px] font-bold text-accent uppercase tracking-wider flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>List capacity reached (Max 10). Larger lists may exceed WhatsApp text message bounds and truncate during transmission.</span>
                  </div>
                )}

                {/* Drawer Footer Checkout */}
                <div className="p-6 bg-subtle border-t border-border">
                  <Button 
                    onClick={handleCheckout}
                    variant="primary"
                    className="w-full justify-center py-4"
                  >
                    Request Quote via WhatsApp <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <p className="text-center text-[10px] font-bold text-text-muted uppercase tracking-wider mt-4">
                    This triggers a pre-filled WhatsApp message summarizing your list to request pricing & delivery terms.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Sticky Floating WhatsApp Enquiry Button */}
          <a
            href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I%20have%20an%20enquiry%20regarding%20Robotics%20Kits."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-45 flex items-center justify-center group cursor-pointer"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp className="w-7 h-7" />
            <span className="absolute left-14 bg-white border border-border text-text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              WhatsApp Enquiry
            </span>
          </a>

        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen relative text-text-primary">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-text-muted">Loading Catalog...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
