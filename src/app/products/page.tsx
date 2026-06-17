"use client";

import React, { useState } from "react";
import { 
  Search, 
  Cpu, 
  Settings, 
  ShoppingBag, 
  Trash2, 
  X, 
  Plus, 
  Minus,
  MessageCircle,
  Zap,
  ArrowRight,
  Bot
} from "lucide-react";

interface Product {
  category: string;
  name: string;
  price: number;
  specs: string;
  image: string;
}

const products: Product[] = [
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade Johnson Motor",
    "price": 650,
    "specs": "12V, 200 RPM, DC motor",
    "image": "/products/johnson-200rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade Johnson Motor",
    "price": 860,
    "specs": "12V, 300 RPM, DC motor",
    "image": "/products/johnson-300rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade Johnson Motor",
    "price": 860,
    "specs": "12V, 400 RPM, DC motor",
    "image": "/products/johnson-400rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade Johnson Motor",
    "price": 600,
    "specs": "12V, 500 RPM, DC motor",
    "image": "/products/johnson-500rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade JGB 555 Motor",
    "price": 900,
    "specs": "12V, 600 RPM motor",
    "image": "/products/jgb555-600rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade JGB 555 Motor",
    "price": 900,
    "specs": "12V, 800 RPM motor",
    "image": "/products/jgb555-800rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade JGB 555 Motor",
    "price": 900,
    "specs": "12V, 1000 RPM motor",
    "image": "/products/jgb555-1000rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade JGB 555 Motor",
    "price": 1100,
    "specs": "12V, 1500 RPM motor",
    "image": "/products/jgb555-1500rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade N30 Motor",
    "price": 860,
    "specs": "12V, 300 RPM, DC motor",
    "image": "/products/n30-300rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade N20 Motor",
    "price": 860,
    "specs": "12V, 300 RPM, DC motor",
    "image": "/products/n20-300rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade N20 Motor",
    "price": 860,
    "specs": "12V, 400 RPM, DC motor",
    "image": "/products/n20-400rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Diamond Grade N20 Motor",
    "price": 860,
    "specs": "12V, 500 RPM, DC motor",
    "image": "/products/n20-500rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Encoder Gear Motor",
    "price": 3900,
    "specs": "300 RPM, encoder DC motor",
    "image": "/products/encoder-300rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Encoder Gear Motor",
    "price": 3900,
    "specs": "400 RPM, encoder DC motor",
    "image": "/products/encoder-400rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Encoder Gear Motor",
    "price": 4000,
    "specs": "500 RPM, encoder DC motor",
    "image": "/products/encoder-500rpm.jpg"
  },
  {
    "category": "Motors",
    "name": "TTDC Encoder Gear Motor",
    "price": 4000,
    "specs": "600 RPM, encoder DC motor",
    "image": "/products/encoder-600rpm.jpg"
  },
  {
    "category": "Wheels",
    "name": "112mm Buggy Wheel 4PCS Set",
    "price": 2600,
    "specs": "Rubber tyre with hub",
    "image": "/products/112mm-buggy-wheel-yellow.jpg"
  },
  {
    "category": "Wheels",
    "name": "112mm Buggy Wheel 4PCS Set",
    "price": 1600,
    "specs": "Rubber tyre with hub",
    "image": "/products/112mm-buggy-wheel-green.jpg"
  },
  {
    "category": "Wheels",
    "name": "88mm Buggy Wheel 4PCS Set",
    "price": 1800,
    "specs": "Rubber tyre with hub",
    "image": "/products/88mm-buggy-wheel.jpg"
  },
  {
    "category": "Wheels",
    "name": "82mm Buggy Wheel 4PCS Set",
    "price": 2000,
    "specs": "Rubber tyre with hub",
    "image": "/products/82mm-buggy-wheel.jpg"
  },
  {
    "category": "Wheels",
    "name": "100mm Buggy Wheels",
    "price": 2800,
    "specs": "Heavy duty buggy wheels",
    "image": "/products/100mm-buggy-wheels.jpg"
  },
  {
    "category": "Wheels",
    "name": "125mm Buggy Wheels",
    "price": 3500,
    "specs": "Heavy duty buggy wheels",
    "image": "/products/125mm-buggy-wheels.jpg"
  },
  {
    "category": "Hubs & Accessories",
    "name": "12mm Hex Hub for 12mm Motor Wheel",
    "price": 1100,
    "specs": "Set for 12mm motor shaft",
    "image": "/products/12mm-hex-hub-set.jpg"
  },
  {
    "category": "Hubs & Accessories",
    "name": "12mm Hex Hub",
    "price": 800,
    "specs": "Metal hex hub",
    "image": "/products/12mm-hex-hub.jpg"
  },
  {
    "category": "Wheels",
    "name": "80mm TTDC HD Nylon Wheel",
    "price": 2000,
    "specs": "Nylon wheel",
    "image": "/products/80mm-hd-nylon-wheel.jpg"
  },
  {
    "category": "Wheels",
    "name": "80mm TTDC HD Nylon Wheel",
    "price": 2000,
    "specs": "4 in 1 set",
    "image": "/products/80mm-hd-nylon-wheel-set.jpg"
  },
  {
    "category": "Wheels",
    "name": "75mm TTDC HD Nylon Wheel",
    "price": 2000,
    "specs": "Nylon wheel",
    "image": "/products/75mm-hd-nylon-wheel.jpg"
  },
  {
    "category": "Wheels",
    "name": "84mm TTDC HD Nylon Wheel",
    "price": 500,
    "specs": "Single nylon wheel",
    "image": "/products/84mm-hd-nylon-wheel.jpg"
  },
  {
    "category": "Wheels",
    "name": "40mm N30 Wheel for LFR",
    "price": 160,
    "specs": "Line follower robot wheel",
    "image": "/products/40mm-n30-lfr-wheel.jpg"
  },
  {
    "category": "Wheels",
    "name": "Castor Wheel",
    "price": 50,
    "specs": "Small support wheel",
    "image": "/products/castor-wheel.jpg"
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ["All", "Motors", "Wheels", "Hubs & Accessories"];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.name === product.name && item.product.specs === product.specs);
      if (existing) {
        return prev.map((item) => 
          (item.product.name === product.name && item.product.specs === product.specs)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, specs: string, delta: number) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.product.name === name && item.product.specs === specs) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (name: string, specs: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.name === name && item.product.specs === specs)));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handleCheckout = () => {
    const itemsText = cart.map(item => `- ${item.quantity} x ${item.product.name} (${item.product.specs}) [Rs. ${item.product.price}]`).join("\n");
    const checkoutMessage = `Hello Tamizh Tech! I would like to place an order for the following robotics components:\n\n${itemsText}\n\n*Total Amount: Rs. ${getCartTotal()}*`;
    const encoded = encodeURIComponent(checkoutMessage);
    window.open(`https://wa.me/918148045030?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-[#FAF6EE] pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen relative">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 border-l-4 border-[#111111] pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-6 font-sans">Engineering Components</h1>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Robotics <br /> Hardware Catalog.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-8">
            High-grade motors, durable wheel sets, and custom accessories tested and certified by Tamizh Tech Robotics division for optimal operational resilience.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16 pb-8 border-b border-[#e6dfd3]">
          
          {/* Categories Tab */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 text-xs font-black uppercase tracking-wider transition-all rounded-xs border ${
                  selectedCategory === cat
                    ? "bg-[#111111] text-white border-[#111111] shadow-md"
                    : "bg-white text-[#555] border-[#e6dfd3] hover:text-[#111111] hover:border-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#e6dfd3] rounded-xs pl-12 pr-4 py-3 text-xs font-bold text-text-primary placeholder-[#999] focus:outline-none focus:border-[#111111] transition-colors"
            />
            <Search className="w-4 h-4 text-[#999] absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e6dfd3] rounded-lg overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Black Price Badge */}
                <div className="absolute top-4 right-4 z-10 bg-[#111111] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm">
                  Rs. {product.price}
                </div>

                {/* Product Image Fallback Illustration */}
                <div className="w-full h-48 bg-[#FCFBF8] border-b border-[#f2ece0] flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-white transition-colors">
                  <div className="text-[#e2dbcd] group-hover:text-primary-main/20 transition-colors duration-500">
                    {product.category === "Motors" && <Cpu className="w-16 h-16 stroke-[1]" />}
                    {product.category === "Wheels" && <Zap className="w-16 h-16 stroke-[1]" />}
                    {product.category === "Hubs & Accessories" && <Settings className="w-16 h-16 stroke-[1]" />}
                  </div>
                  <span className="absolute bottom-3 left-4 text-[9px] font-black text-text-muted/40 uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-black text-text-primary uppercase tracking-tight mb-2 leading-snug">
                      {product.name}
                    </h4>
                    <p className="text-text-secondary text-[11px] font-black uppercase tracking-wider leading-relaxed opacity-70 mb-6">
                      {product.specs}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2.5 pt-4 border-t border-[#f2ece0]">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full btn-secondary text-[10px] font-black uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
                    >
                      ADD TO CART
                    </button>
                    <a 
                      href={`https://wa.me/918148045030?text=Hello!%20I'm%20interested%20in%20inquiring%20about%20${encodeURIComponent(product.name)}%20(${product.specs})%20priced%20at%20Rs%20${product.price}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary text-[10px] font-black uppercase tracking-wider py-3.5 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/10" /> ENQUIRE ON WHATSAPP
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-[#e6dfd3] rounded-lg">
            <Bot className="w-12 h-12 text-[#999] mx-auto mb-4" />
            <h4 className="text-lg font-black uppercase text-text-primary">No components found</h4>
            <p className="text-xs text-text-secondary uppercase tracking-widest mt-1">Try resetting filters or adjusting search queries.</p>
          </div>
        )}

      </div>

      {/* Floating Shopping Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 bg-[#111111] text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all z-40 flex items-center justify-center group"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2.5 -right-2.5 bg-primary-main text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-[#111111]">
              {getCartCount()}
            </span>
          </div>
        </button>
      )}

      {/* Cart Side Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50 animate-in fade-in duration-300">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FAF6EE] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#e6dfd3] flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary-main" />
                <h3 className="text-lg font-black uppercase tracking-tighter text-text-primary">Your Components Cart</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-text-primary hover:text-primary-main transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#e6dfd3] p-4 rounded-sm flex justify-between gap-4"
                >
                  <div className="flex-grow">
                    <h4 className="text-xs font-black uppercase text-text-primary leading-tight">{item.product.name}</h4>
                    <p className="text-[10px] font-bold text-text-secondary uppercase mt-1 leading-none">{item.product.specs}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <button 
                        onClick={() => updateQuantity(item.product.name, item.product.specs, -1)}
                        className="p-1 border border-[#e6dfd3] hover:border-[#111111] rounded-xs"
                      >
                        <Minus className="w-3 h-3 text-[#111111]" />
                      </button>
                      <span className="text-xs font-black">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.name, item.product.specs, 1)}
                        className="p-1 border border-[#e6dfd3] hover:border-[#111111] rounded-xs"
                      >
                        <Plus className="w-3 h-3 text-[#111111]" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between items-end shrink-0">
                    <button 
                      onClick={() => removeFromCart(item.product.name, item.product.specs)}
                      className="text-text-muted hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-black text-text-primary">Rs. {item.product.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Footer Checkout */}
            <div className="p-6 bg-white border-t border-[#e6dfd3]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black uppercase text-text-secondary">Subtotal Amount</span>
                <span className="text-xl font-black text-text-primary">Rs. {getCartTotal()}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full btn-primary py-5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg"
              >
                CHECKOUT VIA WHATSAPP <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] font-bold text-text-muted uppercase tracking-wider mt-4">
                This triggers a pre-filled WhatsApp message summarizing your list for pricing & delivery terms.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
