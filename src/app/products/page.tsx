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
  MessageCircle,
  ArrowRight,
  Bot,
  Check,
  Eye
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { products, Product } from "@/data/products";

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

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.slug === product.slug);
      if (existing) {
        return prev.map((item) => 
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (slug: string, delta: number) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.product.slug === slug) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter((item) => item.product.slug !== slug));
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handleCheckout = () => {
    const itemsText = cart.map(item => `- ${item.quantity} x ${item.product.name}`).join("\n");
    const checkoutMessage = `Hello Tamizh Tech! I would like to request a quote for the following robotics hardware:\n\n${itemsText}\n\nPlease share the pricing and delivery details.`;
    const encoded = encodeURIComponent(checkoutMessage);
    window.open(`https://wa.me/918148045030?text=${encoded}`, "_blank");
  };

  return (
    <div className="container mx-auto px-6">
      
      {/* Header Section */}
      <div className="max-w-4xl mb-12 md:mb-20 border-l-4 border-[#FF6B00] pl-6 md:pl-10 py-4 text-left">
        <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-6 font-sans">Robotics Platform Store</h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#111111] tracking-tighter leading-[0.95] uppercase">
          Robotics Store & <br /> Custom Hardware.
        </h2>
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-6 md:mt-8">
          High-grade competition bots, STEM kits, embedded development tools, and laboratory configurations designed, developed, and manufactured in India.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mb-16 pb-8 border-b border-[#E5E5E5]">
        
        {/* Categories Tab */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 xl:pb-0 w-full xl:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 text-[9px] font-black uppercase tracking-wider transition-all rounded-lg border shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:text-[#111111] hover:border-[#111111]"
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
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E5E5E5] rounded-lg pl-12 pr-4 py-3 text-xs font-bold text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#FF6B00] transition-colors"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#FF6B00] hover:shadow-xl transition-all duration-300 relative text-left"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                {product.badge}
              </div>

              {/* Product Image */}
              <div className="w-full h-48 bg-[#FAFAFA] border-b border-[#E5E5E5] flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-white transition-colors">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-gray-200 group-hover:text-[#FF6B00]/20 transition-colors duration-500">
                    <Cpu className="w-16 h-16 stroke-[1]" />
                  </div>
                )}
                <span className="absolute bottom-3 left-4 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-[#111111] uppercase tracking-tight mb-2 leading-snug">
                    {product.name}
                  </h4>
                  <p className="text-gray-500 text-[11px] font-medium leading-relaxed mb-4">
                    {product.specs}
                  </p>
                  
                  {/* Specs Bullet Points */}
                  <ul className="space-y-1.5 mb-6">
                    {product.detailedSpecs.slice(0, 3).map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                        <Check className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" /> <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-[#F0F0F0] mt-auto">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="w-full bg-[#111111] hover:bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-wider py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Details
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="py-2.5 border border-[#E5E5E5] hover:border-[#111111] text-[#111111] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all"
                    >
                      Add to List
                    </button>
                    <a 
                      href={`https://wa.me/918148045030?text=Hello!%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(product.name)}.%20Please%20guide%20me%20on%20pricing%20and%20shipping.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all flex items-center justify-center gap-1"
                    >
                      <FaWhatsapp className="w-3 h-3" /> Enquire
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-[#E5E5E5] rounded-2xl">
          <Bot className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h4 className="text-lg font-black uppercase text-[#111111]">No components found</h4>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Try resetting filters or adjusting search queries.</p>
        </div>
      )}

      {/* Floating Shopping Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-24 bg-[#111111] text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all z-40 flex items-center justify-center group"
          aria-label="Open Enquiry List"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2.5 -right-2.5 bg-[#FF6B00] text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-[#111111]">
              {getCartCount()}
            </span>
          </div>
        </button>
      )}

      {/* Cart Side Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50 animate-in fade-in duration-300">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#E5E5E5] flex justify-between items-center bg-[#FAFAFA]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#FF6B00]" />
                <h3 className="text-lg font-black uppercase tracking-tighter text-[#111111]">Your Enquiry List</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#111111] hover:text-[#FF6B00] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#E5E5E5] p-4 rounded-xl flex justify-between gap-4 text-left"
                >
                  <div className="flex-grow">
                    <h4 className="text-xs font-black uppercase text-[#111111] leading-tight">{item.product.name}</h4>
                    <p className="text-[9px] font-bold text-gray-400 uppercase mt-1 leading-none">{item.product.category}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <button 
                        onClick={() => updateQuantity(item.product.slug, -1)}
                        className="p-1 border border-[#E5E5E5] hover:border-[#111111] rounded-lg"
                      >
                        <Minus className="w-3 h-3 text-[#111111]" />
                      </button>
                      <span className="text-xs font-black">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.slug, 1)}
                        className="p-1 border border-[#E5E5E5] hover:border-[#111111] rounded-lg"
                      >
                        <Plus className="w-3 h-3 text-[#111111]" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between items-end shrink-0">
                    <button 
                      onClick={() => removeFromCart(item.product.slug)}
                      className="text-gray-400 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Footer Checkout */}
            <div className="p-6 bg-[#FAFAFA] border-t border-[#E5E5E5]">
              <button 
                onClick={handleCheckout}
                className="w-full btn-primary py-5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg"
              >
                REQUEST QUOTE VIA WHATSAPP <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-4">
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
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group animate-bounce"
        aria-label="WhatsApp Contact"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute right-14 bg-white border border-[#E5E5E5] text-[#111111] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Enquiry
        </span>
      </a>

    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen relative text-[#111111]">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-gray-500">Loading Catalog...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
