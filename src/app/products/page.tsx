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
  Eye,
  AlertTriangle
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
    <div className="container mx-auto px-6">
      
      {/* Header Section */}
      <div className="max-w-4xl mb-12 md:mb-20 border-l-4 border-[#FF4D2D] pl-6 md:pl-10 py-4 text-left">
        <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-6 font-sans">Robotics Platform Store</h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] uppercase">
          Robotics Store & <br /> Custom Hardware.
        </h2>
        <p className="text-base sm:text-lg text-[#9AA1AC] leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-6 md:mt-8">
          High-grade competition bots, STEM kits, embedded development tools, and laboratory configurations designed, developed, and manufactured in India.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mb-16 pb-8 border-b border-[#232833]">
        
        {/* Categories Tab */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 xl:pb-0 w-full xl:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 text-[9px] font-black uppercase tracking-wider transition-all rounded-lg border shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#FF4D2D] text-white border-[#FF4D2D] shadow-sm font-mono"
                  : "bg-[#11141A] text-[#858E9B] border-[#232833] hover:text-[#F5F6F8] hover:border-[#FF4D2D] font-mono"
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
            className="w-full bg-[#181C24] border border-[#232833] rounded-lg pl-12 pr-4 py-3 text-xs font-bold text-[#F5F6F8] placeholder-gray-400 focus:outline-none focus:border-[#FF4D2D] transition-colors"
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
              className="bg-[#11141A] border border-[#232833] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#FF4D2D] hover:shadow-xl transition-all duration-300 relative text-left"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 bg-[#FF4D2D] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs font-mono">
                {product.badge}
              </div>

              {/* Product Image inside White Canvas Panel */}
              <div className="w-full h-48 bg-white border-b border-[#232833] flex items-center justify-center p-8 relative overflow-hidden transition-colors">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-gray-200 group-hover:text-[#FF4D2D]/20 transition-colors duration-500">
                    <Cpu className="w-16 h-16 stroke-[1]" />
                  </div>
                )}
                <span className="absolute bottom-3 left-4 text-[9px] font-black text-gray-400 uppercase tracking-widest font-mono">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-[#11141A]">
                <div>
                  <h4 className="text-base font-heading font-black text-[#F5F6F8] uppercase tracking-tight mb-2 leading-snug">
                    {product.name}
                  </h4>
                  <p className="text-[#858E9B] text-[11px] font-medium leading-relaxed mb-4">
                    {product.specs}
                  </p>
                  
                  {/* Specs Bullet Points */}
                  <ul className="space-y-1.5 mb-6">
                    {product.detailedSpecs.slice(0, 3).map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-center gap-2 text-[10px] font-bold text-[#9AA1AC] uppercase tracking-wider">
                        <Check className="w-3.5 h-3.5 text-[#FF4D2D] shrink-0" /> <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-[#232833] mt-auto">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="w-full bg-[#181C24] hover:bg-[#FF4D2D] border border-[#232833] hover:border-[#FF4D2D] text-[#F5F6F8] text-[9px] font-black uppercase tracking-wider py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Details
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="py-2.5 bg-[#11141A] border border-[#232833] hover:border-[#FF4D2D] text-[#F5F6F8] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all"
                    >
                      Add to List
                    </button>
                    <a 
                      href={`https://wa.me/918148045030?text=Hello!%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(product.name)}.%20Please%20guide%20me%20on%20pricing%20and%20shipping.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 bg-[#FF4D2D] hover:bg-[#E03A1E] text-white text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all flex items-center justify-center gap-1"
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
        <div className="text-center py-20 bg-[#11141A] border border-[#232833] rounded-2xl">
          <Bot className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h4 className="text-lg font-black uppercase text-[#F5F6F8]">No components found</h4>
          <p className="text-xs text-[#858E9B] uppercase tracking-widest mt-1 font-mono">Try resetting filters or adjusting search queries.</p>
        </div>
      )}

      {/* Floating Shopping Cart Button (styled to bottom-left to prevent overlap with bot) */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 left-24 bg-[#11141A] border border-[#232833] text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all z-40 flex items-center justify-center group"
          aria-label="Open Enquiry List"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-[#FF4D2D]" />
            <span className="absolute -top-2.5 -right-2.5 bg-[#FF4D2D] text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-[#11141A]">
              {getCartCount()}
            </span>
          </div>
        </button>
      )}

      {/* Cart Side Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50 animate-in fade-in duration-300">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#11141A] border-l border-[#232833] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#232833] flex justify-between items-center bg-[#181C24]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#FF4D2D]" />
                <h3 className="text-lg font-heading font-black uppercase tracking-tighter text-[#F5F6F8]">Your Enquiry List</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#858E9B] hover:text-[#FF4D2D] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#181C24] border border-[#232833] p-4 rounded-xl flex justify-between gap-4 text-left"
                >
                  <div className="flex-grow">
                    <h4 className="text-xs font-black uppercase text-[#F5F6F8] leading-tight">{item.product.name}</h4>
                    <p className="text-[9px] font-bold text-[#858E9B] uppercase mt-1 leading-none font-mono">{item.product.category}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <button 
                        onClick={() => updateQuantity(item.product.slug, -1)}
                        className="p-1 border border-[#232833] hover:border-[#FF4D2D] rounded-lg"
                      >
                        <Minus className="w-3 h-3 text-[#F5F6F8]" />
                      </button>
                      <span className="text-xs font-black font-mono">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.slug, 1)}
                        className="p-1 border border-[#232833] hover:border-[#FF4D2D] rounded-lg"
                      >
                        <Plus className="w-3 h-3 text-[#F5F6F8]" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between items-end shrink-0">
                    <button 
                      onClick={() => removeFromCart(item.product.slug)}
                      className="text-gray-500 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning banner when cart reaches capacity limit */}
            {getCartCount() >= 10 && (
              <div className="mx-6 my-2 p-3.5 bg-[#FF4D2D]/10 border border-[#FF4D2D]/25 rounded-xl text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>List capacity reached (Max 10). Larger lists may exceed WhatsApp text message bounds and truncate during transmission.</span>
              </div>
            )}

            {/* Drawer Footer Checkout */}
            <div className="p-6 bg-[#181C24] border-t border-[#232833]">
              <button 
                onClick={handleCheckout}
                className="w-full btn-primary py-5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg"
              >
                REQUEST QUOTE VIA WHATSAPP <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] font-bold text-[#858E9B] uppercase tracking-wider mt-4 font-mono">
                This triggers a pre-filled WhatsApp message summarizing your list to request pricing & delivery terms.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Sticky Floating WhatsApp Enquiry Button (styled to bottom-left to prevent overlap) */}
      <a
        href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I%20have%20an%20enquiry%20regarding%20Robotics%20Kits."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="WhatsApp Contact"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute left-14 bg-[#11141A] border border-[#232833] text-[#F5F6F8] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Enquiry
        </span>
      </a>

    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen relative text-[#F5F6F8]">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-gray-500">Loading Catalog...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
