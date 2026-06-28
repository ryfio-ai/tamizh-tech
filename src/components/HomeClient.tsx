"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowRight, Cpu, Bot, Shield, Globe, Settings, Lightbulb, CheckCircle2, 
  Factory, Layers, MoveRight, GraduationCap, MessageCircle, Trophy, Flag, 
  Award, Sparkles, BookOpen, Users, Compass, Code, Star, Phone, Mail, 
  MapPin, Send, ChevronRight, ShieldCheck, Zap, Laptop, Database, Beaker,
  TrendingUp, Activity, Check, Landmark, ArrowUpRight, ShoppingBag, Trash2, X, Plus, Minus
} from "lucide-react";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";

import { products, Product } from "@/data/products";
import { PageLoader } from "@/components/ui/PageLoader";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { StatCounter } from "@/components/ui/StatCounter";

interface CartItem {
  product: Product;
  quantity: number;
}

export default function HomeClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "STEM Lab Setup",
    message: ""
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("ttrc_promo_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShowPromo(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePromo = () => {
    setShowPromo(false);
    localStorage.setItem("ttrc_promo_dismissed", "true");
  };

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Initialize and load Cart state from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("ttrc-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart data:", e);
      }
    }
  }, []);

  // Testimonial rotation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.slug === product.slug);
      let updatedCart: CartItem[];
      
      if (existing) {
        updatedCart = prev.map((item) => 
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        if (prev.length >= 10) {
          alert("To prevent WhatsApp message truncation, you can only request quotes for up to 10 product lines at once.");
          return prev;
        }
        updatedCart = [...prev, { product, quantity: 1 }];
      }
      
      localStorage.setItem("ttrc-cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (slug: string, delta: number) => {
    setCart((prev) => {
      const updated = prev.map((item) => {
        if (item.product.slug === slug) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
      localStorage.setItem("ttrc-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.product.slug !== slug);
      localStorage.setItem("ttrc-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handleCheckout = () => {
    const itemsText = cart.map(item => `- ${item.quantity} x ${item.product.name}`).join("\n");
    const checkoutMessage = `Hello Tamizh Tech! I would like to request a quote for the following robotics hardware:\n\n${itemsText}\n\nPlease share the pricing and technical specifications.`;
    const encoded = encodeURIComponent(checkoutMessage);
    window.open(`https://wa.me/918148045030?text=${encoded}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interest: "STEM Lab Setup", message: "" });
      alert("Enquiry logged successfully! Our team will contact you shortly.");
    }, 1000);
  };

  const getWhatsAppLink = (productName?: string) => {
    const baseText = "Hello Tamizh Tech! I am interested in ";
    const productText = productName ? `${productName}. ` : "your Robotics kits and solution platforms. ";
    const endingText = "Please share pricing and technical specifications.";
    return `https://wa.me/918148045030?text=${encodeURIComponent(baseText + productText + endingText)}`;
  };

  const TIMELINE_DATA = [
    { year: "2021", title: "Tamizh Robotics Club Established", desc: "Started as a passionate student robotics club in Coimbatore to explore hands-on engineering." },
    { year: "2022", title: "National Competitions", desc: "Began actively participating in robotics events across India, building initial competition bots." },
    { year: "2023", title: "International Recognition", desc: "Expanded footprint to international scale competitions, winning major engineering accolades." },
    { year: "2024", title: "Tamizh Tech Robotics Company Established", desc: "Transitioned from a student club to a registered engineering and technology solutions startup on 22 October 2024." },
    { year: "2025", title: "Industrial Supply Scale", desc: "Supplied indigenous competition bots, STEM kits, and automated solutions to schools and colleges across India." },
    { year: "2026", title: "ThiranOli Academy Launch", desc: "Launched our specialized education and career development division to train the next generation of engineers." },
  ];

  const COMPETITIONS_SHOWCASE = [
    { name: "Robo Race", desc: "Speed and track agility challenge.", image: "/events/robo-race.png" },
    { name: "Robo Soccer", desc: "Autonomous and remote strike bots.", image: "/product/soccer rc.jpg" },
    { name: "Robo War", desc: "Heavyweight battle bots and spinners.", image: "/events/robo-war.png" },
    { name: "Robo Sumo", desc: "Ring eviction and high traction bots.", image: "/product/sumo rc.jpg" },
    { name: "Line Follower", desc: "High-speed PID optical path tracking.", image: "/events/line-follower.png" },
    { name: "Drone", desc: "Quadcopter agility and obstacle flights.", image: "/pic/drone.png" },
    { name: "RC Boat", desc: "Aquatic speed and hydrodynamics.", image: "/events/water-rocket.png" },
    { name: "Hovercraft", desc: "Amphibious operations and flight controls.", image: "/events/water-rocket.png" },
  ];

  const THIRANOLI_COURSES = [
    { title: "Learn Robotics", desc: "Hands-on chassis engineering, gear calculations, and controller setups.", duration: "4 Weeks" },
    { title: "Learn AI", desc: "Python, OpenCV object tracking, and deep learning models for autonomous navigation.", duration: "6 Weeks" },
    { title: "Learn Programming", desc: "Embedded C, Arduino programming, and STM32 microcontroller firmware.", duration: "4 Weeks" },
    { title: "Mentorship", desc: "Direct guidance from international winners for competition preparation.", duration: "Ongoing" },
    { title: "Career Support", desc: "Portfolio reviews, industrial mock interviews, and placements in core firms.", duration: "Lifetime" },
  ];

  const GALLERY_IMAGES = [
    { src: "/gallery/1.JPEG", title: "National Level Prize Win" },
    { src: "/gallery/3.jpg", title: "Robo War Arena Preparation" },
    { src: "/gallery/6.jpg", title: "Drone Workshop Training" },
    { src: "/gallery/8.jpg", title: "Robo Soccer Striker Design" },
    { src: "/gallery/9.jpg", title: "Embedded Systems Lab Work" },
    { src: "/gallery/10.jpg", title: "Hands-on School Mentorship" }
  ];

  const TESTIMONIALS_DATA = [
    { name: "Suresh Kumar", role: "Robotics Lead, PSG Tech", text: "Tamizh Tech's competition kits helped our college team win consecutive national championships. The build quality and motor specs are outstanding." },
    { name: "Dr. Anjali Mehta", role: "Principal, Lotus School", text: "The K-12 STEM Lab set up by Tamizh Tech has completely transformed how our students learn engineering concepts. Highly recommended!" },
    { name: "Karthik R.", role: "Industrial Consultant, TATA Motors", text: "Their machine vision integration solved a major alignment checking issue on our line. Responsive support and prompt delivery." },
    { name: "Pranav M.", role: "Student Member, Tamizh Robotics Club", text: "ThiranOli Academy bridged the gap between theory and actual coding for me. I managed to build an autonomous maze solver from scratch!" }
  ];

  const PARTNER_LOGOS = [
    "PSG COLLEGE OF TECHNOLOGY",
    "TATA MOTORS INDUSTRIAL",
    "LOTUS INTERNATIONAL SCHOOL",
    "COVAI INDUSTRIAL SYSTEMS",
    "KUMARAGURU TECH HUB",
    "CIT ROBOTICS FORUM",
    "THIRANOLI ACADEMY PLACEMENTS"
  ];

  return (
    <div className="flex flex-col w-full bg-[#0A0C10] text-[#F5F6F8] overflow-x-hidden pt-20 selection:bg-[#FF4D2D] selection:text-white">
      
      {/* Page Loader */}
      <PageLoader />

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[#0A0C10] overflow-hidden py-16 border-b border-[#232833]">
        {/* Dark PCB layout grid */}
        <div className="absolute inset-0 opacity-[0.4] hero-grid pointer-events-none" />
        {/* Circuit Glow Overlay */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF4D2D]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#00D1B2]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4D2D]/10 border border-[#FF4D2D]/35 rounded-full text-xs font-black tracking-widest text-[#FF4D2D] uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Established 22 Oct 2024
            </div>
            
            <KineticHeading 
              baseTextPre="Building India's "
              strikeWord="Ordinary"
              revealWord="Future"
              baseTextPost=" Engineers Through Robotics"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.0] tracking-tighter uppercase text-[#F5F6F8]"
              as="h1"
            />
            
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#9AA1AC] border-l-2 border-[#FF4D2D] pl-4">
              Products, Training, Competitions and Industrial Automation.
            </p>
            
            <p className="text-[#858E9B] text-base leading-relaxed max-w-xl font-medium">
              Evolving from Coimbatore's premier robotics hub into a hybrid B2C & B2B ecosystem. We engineer high-performance platforms, empower schools & colleges, and deploy industrial-grade automated solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#store" className="btn-primary">
                Explore Products <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Book Demo
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 border-[#232833] hover:border-[#FF4D2D]">
                <FaWhatsapp className="w-4 h-4 text-[#FF4D2D]" /> Talk To Expert
              </a>
            </div>

            {/* Certifications strip */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#232833] w-fit">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D1B2]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[#9AA1AC]">Make In India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D1B2]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[#9AA1AC]">STEM Certified</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-[500px] h-[500px] border border-[#232833] rounded-full flex items-center justify-center p-8 relative animate-[spin_120s_linear_infinite]">
              <div className="w-full h-full border border-dashed border-[#FF4D2D]/20 rounded-full flex items-center justify-center p-8">
                <div className="w-full h-full border border-[#232833] rounded-full flex items-center justify-center">
                  <Bot className="w-24 h-24 text-[#232833] stroke-[0.5]" />
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF4D2D] rounded-full shadow-[0_0_15px_#FF4D2D]" />
              <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-3 h-3 bg-[#00D1B2] rounded-full shadow-[0_0_10px_#00D1B2]" />
            </div>

            {/* Float premium product illustration */}
            <div className="absolute bg-[#181C24] border border-[#232833] p-8 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.8)] max-w-sm flex flex-col space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FF4D2D]/10 rounded-lg border border-[#FF4D2D]/20">
                  <Cpu className="w-6 h-6 text-[#FF4D2D]" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-[#F5F6F8] tracking-wider">Premium Robotics</h3>
                  <span className="text-[9px] text-[#858E9B] uppercase tracking-widest">Designed In India</span>
                </div>
              </div>
              <p className="text-xs text-[#9AA1AC] leading-relaxed font-medium">
                Engineered for maximum reliability in national/international arenas and factory floors.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 rounded text-[8px] font-bold text-[#FF4D2D] uppercase">Make In India</span>
                <span className="px-2 py-0.5 bg-[#00D1B2]/10 border border-[#00D1B2]/20 rounded text-[8px] font-bold text-[#00D1B2] uppercase">STEM CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee Strip */}
      <div className="w-full bg-[#11141A] py-6 border-b border-[#232833] overflow-hidden select-none">
        <div className="marquee-container relative w-full flex overflow-x-hidden">
          <div className="marquee-content flex gap-12 text-[#858E9B] text-[10px] font-black uppercase tracking-[0.25em]">
            {/* Render list twice to ensure infinite scroll loop */}
            {PARTNER_LOGOS.map((logo, idx) => (
              <span key={idx} className="hover:text-[#FF4D2D] transition-colors">{logo}</span>
            ))}
            {PARTNER_LOGOS.map((logo, idx) => (
              <span key={`dup-${idx}`} className="hover:text-[#FF4D2D] transition-colors">{logo}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Trust Section */}
      <section className="py-24 bg-[#11141A] border-b border-[#232833]" id="achievements">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Proven Track Record</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Ecosystem Trust & Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <StatCounter target={200} label="Robotics Events" suffix="+" />
            <StatCounter target={180} label="Awards Won" suffix="+" />
            <StatCounter target={1000} label="Students Mentored" suffix="+" />
            <StatCounter target={20} label="Events Organized" suffix="+" />
            <StatCounter target={8} label="Prize Money Won" prefix="₹" suffix="L+" />
          </div>
        </div>
      </section>

      {/* 3. Product Store */}
      <section className="py-24 bg-[#0A0C10] border-b border-[#232833]" id="store">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Robotics Store</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">High-Performance Hardware</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4 mb-10" />
            
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all rounded-lg border ${
                    selectedCategory === cat 
                      ? "bg-[#FF4D2D] text-white border-[#FF4D2D] shadow-sm" 
                      : "bg-[#11141A] text-[#9AA1AC] border-[#232833] hover:border-[#858E9B] hover:text-[#F5F6F8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product, idx) => (
              <div 
                key={idx} 
                className="bg-[#11141A] border border-[#232833] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#FF4D2D] hover:shadow-[0_12px_32px_rgba(255,77,45,0.08)] transition-all duration-300 relative text-left"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 bg-[#FF4D2D] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {product.badge}
                </div>

                {/* Deliberate Product Image Framing: White/light inset card to showcase JPG layout */}
                <div className="p-4 bg-[#11141A]">
                  <div className="w-full h-48 bg-white/95 border border-[#232833] rounded-lg flex items-center justify-center p-6 relative overflow-hidden group-hover:opacity-95 transition-all">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Cpu className="w-16 h-16 text-[#0A0C10]/20" />
                    )}
                    <span className="absolute bottom-3 left-4 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-[#F5F6F8] uppercase tracking-tight mb-2">
                      {product.name}
                    </h4>
                    <p className="text-[#858E9B] text-xs font-medium leading-relaxed mb-4 line-clamp-2">
                      {product.specs}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-[#232833] mt-4">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-3 bg-[#FF4D2D] hover:bg-[#E04020] text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to List
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        href={`/products/${product.slug}`}
                        className="py-2.5 border border-[#232833] hover:border-[#F5F6F8] text-[#9AA1AC] hover:text-[#F5F6F8] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all block"
                      >
                        Details
                      </Link>
                      <a 
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 border border-[#232833] hover:border-[#FF4D2D] text-[#9AA1AC] hover:text-[#FF4D2D] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all flex items-center justify-center gap-1"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" /> Enquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions Section */}
      <section className="py-24 bg-[#11141A] border-b border-[#232833]" id="solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Targeted Programs</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Integrated Solutions</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: For Schools */}
            <div className="bg-[#181C24] border border-[#232833] rounded-2xl p-8 flex flex-col justify-between text-left hover:border-[#FF4D2D] transition-all group">
              <div>
                <span className="text-[10px] font-mono text-[#00D1B2] block mb-2">01 // BASIC MODULES</span>
                <div className="p-3 bg-[#FF4D2D]/10 text-[#FF4D2D] rounded-xl w-fit mb-6 border border-[#FF4D2D]/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#F5F6F8] mb-2">For Schools</h3>
                <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-widest block mb-6">STEM & LAB SOLUTIONS</span>
                <p className="text-xs text-[#858E9B] leading-relaxed font-medium mb-6">Empowering K-12 academic spaces with fully modular labs, syllabus training, and hardware kits.</p>
                <ul className="space-y-3">
                  {["STEM Labs", "Robotics Labs", "AI Labs"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#9AA1AC] font-bold uppercase tracking-wider">
                      <Check className="w-4 h-4 text-[#FF4D2D]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-[#FF4D2D] hover:text-[#F5F6F8] transition-colors inline-flex items-center gap-1">
                  Enquire Lab Setup <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: For Colleges */}
            <div className="bg-[#181C24] border border-[#232833] rounded-2xl p-8 flex flex-col justify-between text-left hover:border-[#FF4D2D] transition-all group">
              <div>
                <span className="text-[10px] font-mono text-[#00D1B2] block mb-2">02 // RESEARCH NODES</span>
                <div className="p-3 bg-[#FF4D2D]/10 text-[#FF4D2D] rounded-xl w-fit mb-6 border border-[#FF4D2D]/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#F5F6F8] mb-2">For Colleges</h3>
                <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-widest block mb-6">ACADEMIC & R&D LABS</span>
                <p className="text-xs text-[#858E9B] leading-relaxed font-medium mb-6">Incubating student competitive teams, lab setup, and prototyping custom final-year engineering projects.</p>
                <ul className="space-y-3">
                  {["Research Projects", "Competition Teams", "Lab Setup"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#9AA1AC] font-bold uppercase tracking-wider">
                      <Check className="w-4 h-4 text-[#FF4D2D]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-[#FF4D2D] hover:text-[#F5F6F8] transition-colors inline-flex items-center gap-1">
                  Connect With Experts <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: For Industries */}
            <div className="bg-[#181C24] border border-[#232833] rounded-2xl p-8 flex flex-col justify-between text-left hover:border-[#FF4D2D] transition-all group">
              <div>
                <span className="text-[10px] font-mono text-[#00D1B2] block mb-2">03 // INDUSTRIAL CELLS</span>
                <div className="p-3 bg-[#FF4D2D]/10 text-[#FF4D2D] rounded-xl w-fit mb-6 border border-[#FF4D2D]/20">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#F5F6F8] mb-2">For Industries</h3>
                <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-widest block mb-6">AUTOMATION & INTEGRATION</span>
                <p className="text-xs text-[#858E9B] leading-relaxed font-medium mb-6">Deploying custom automated systems, IoT remote monitors, and machine vision inspection platforms.</p>
                <ul className="space-y-3">
                  {["Automation", "AI Vision", "IoT Monitoring", "Custom Robotics"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#9AA1AC] font-bold uppercase tracking-wider">
                      <Check className="w-4 h-4 text-[#FF4D2D]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-[#FF4D2D] hover:text-[#F5F6F8] transition-colors inline-flex items-center gap-1">
                  Request Automation Audit <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Made in India Section */}
      <section className="relative w-full py-24 bg-[#0A0C10] text-[#F5F6F8] overflow-hidden border-b border-[#232833]">
        <div className="container mx-auto px-6 z-10 max-w-5xl text-center relative">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF4D2D] bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 px-3.5 py-1.5 rounded-full w-fit mx-auto mb-6 block">
            Indigenous Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-6 leading-tight">
            Designed, Developed and <br /> Manufactured in India
          </h2>
          <p className="text-base text-[#858E9B] leading-relaxed max-w-2xl mx-auto font-medium">
            At Tamizh Tech, we engineer robotics hardware locally to bypass expensive component imports. Our competition bots and modular setups are built, debugged, and shipped from our Coimbatore R&D hub.
          </p>

          {/* Connected SVG circuit graph - B2B architecture node layout */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] hidden md:flex items-center justify-center mt-16 bg-[#11141A]/50 border border-[#232833] rounded-3xl overflow-hidden p-8">
            <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#232833" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#FF4D2D" strokeWidth="2" strokeDasharray="8 8" className="animate-[dash_10s_linear_infinite]" />
              
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#232833" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#00D1B2" strokeWidth="2" strokeDasharray="8 8" className="animate-[dash_10s_linear_infinite]" />
              
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#232833" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#00D1B2" strokeWidth="2" strokeDasharray="8 8" className="animate-[dash_10s_linear_infinite]" />
              
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#232833" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#FF4D2D" strokeWidth="2" strokeDasharray="8 8" className="animate-[dash_10s_linear_infinite]" />
            </svg>
            
            {/* Center Node */}
            <div className="absolute z-10 flex flex-col items-center justify-center p-6 rounded-full bg-[#181C24] border-2 border-[#FF4D2D] w-44 h-44 shadow-[0_0_30px_rgba(255,77,45,0.25)] text-center">
              <Cpu className="w-10 h-10 text-[#FF4D2D] mb-2 animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-[#F5F6F8] uppercase">COIMBATORE</span>
              <span className="text-[9px] font-bold text-[#858E9B] uppercase">R&D HUB</span>
            </div>
            
            {/* Top Left Node */}
            <div className="absolute top-[15%] left-[12%] flex items-center gap-3 p-4 bg-[#181C24] border border-[#232833] rounded-xl hover:border-[#FF4D2D] transition-colors">
              <Bot className="w-6 h-6 text-[#FF4D2D]" />
              <div className="text-left">
                <h4 className="text-[10px] font-black uppercase text-[#F5F6F8]">Robo Race</h4>
                <span className="text-[8px] text-[#858E9B]">CARBON CHASSIS</span>
              </div>
            </div>
            
            {/* Top Right Node */}
            <div className="absolute top-[15%] right-[12%] flex items-center gap-3 p-4 bg-[#181C24] border border-[#232833] rounded-xl hover:border-[#00D1B2] transition-colors">
              <Bot className="w-6 h-6 text-[#00D1B2]" />
              <div className="text-left">
                <h4 className="text-[10px] font-black uppercase text-[#F5F6F8]">Robo Soccer</h4>
                <span className="text-[8px] text-[#858E9B]">PNEUMATIC STRIKER</span>
              </div>
            </div>
            
            {/* Bottom Left Node */}
            <div className="absolute bottom-[15%] left-[12%] flex items-center gap-3 p-4 bg-[#181C24] border border-[#232833] rounded-xl hover:border-[#00D1B2] transition-colors">
              <Bot className="w-6 h-6 text-[#00D1B2]" />
              <div className="text-left">
                <h4 className="text-[10px] font-black uppercase text-[#F5F6F8]">Robo War</h4>
                <span className="text-[8px] text-[#858E9B]">SPINNER WEAPONS</span>
              </div>
            </div>
            
            {/* Bottom Right Node */}
            <div className="absolute bottom-[15%] right-[12%] flex items-center gap-3 p-4 bg-[#181C24] border border-[#232833] rounded-xl hover:border-[#FF4D2D] transition-colors">
              <Bot className="w-6 h-6 text-[#FF4D2D]" />
              <div className="text-left">
                <h4 className="text-[10px] font-black uppercase text-[#F5F6F8]">Robo Sumo</h4>
                <span className="text-[8px] text-[#858E9B]">HIGH TORQUE DRIVE</span>
              </div>
            </div>
          </div>

          {/* Fallback Mobile grid */}
          <div className="grid grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto md:hidden">
            {COMPETITIONS_SHOWCASE.slice(0, 4).map((bot, idx) => (
              <div key={idx} className="border border-[#232833] rounded-xl p-4 bg-[#11141A] flex flex-col justify-between h-44 hover:border-[#FF4D2D] transition-colors">
                <div className="relative w-full h-24 bg-white/95 rounded-lg flex items-center justify-center p-2">
                  <Image
                    src={bot.image}
                    alt={bot.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-center pt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F5F6F8]">{bot.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Robotics Competition Excellence */}
      <section className="py-24 bg-[#11141A] border-b border-[#232833]" id="competitions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Arena Dominance</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Robotics Competition Excellence</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4 mb-6" />
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed">
              We design, build, and optimize hardware structures for specific arena rules, achieving a record 180+ winning positions in technical tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COMPETITIONS_SHOWCASE.map((comp, idx) => (
              <div 
                key={idx} 
                className="bg-[#181C24] border border-[#232833] p-6 rounded-2xl text-left flex flex-col justify-between hover:border-[#FF4D2D] hover:shadow-[0_12px_32px_rgba(255,77,45,0.06)] transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 flex items-center justify-center mb-5 text-[#FF4D2D] group-hover:bg-[#FF4D2D] group-hover:text-white transition-colors duration-300">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-black uppercase text-[#F5F6F8] tracking-wide mb-2">{comp.name}</h4>
                  <p className="text-xs text-[#858E9B] font-medium leading-relaxed">{comp.desc}</p>
                </div>
                <div className="pt-6 border-t border-[#232833] mt-4 flex items-center justify-between">
                  <a 
                    href={getWhatsAppLink(comp.name)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] font-black text-[#FF4D2D] uppercase tracking-widest inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Enquire Specs <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Achievements Wall (Timeline) */}
      <section className="py-24 bg-[#0A0C10] border-b border-[#232833]" id="journey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Ecosystem Evolution</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Achievements Wall</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4" />
          </div>
          
          <div className="relative max-w-5xl mx-auto pl-6 md:pl-0">
            {/* Timeline scroll path line */}
            <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#232833] transform -translate-x-1/2" />

            {TIMELINE_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <TimelineNode key={idx} milestone={milestone} isEven={isEven} />
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. ThiranOli Academy Section */}
      <section className="py-24 bg-[#11141A] border-b border-[#232833]" id="training">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-6 text-left border-l-4 border-[#FF4D2D] pl-6 py-2">
              <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em]">Bridging Academia & Industry</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">
                ThiranOli Academy
              </h2>
              <p className="text-[#858E9B] text-sm font-medium leading-relaxed">
                Our career and training arm designed to build future-ready engineering leaders. We offer deep hands-on courses, verified certifications, and placement support.
              </p>
              
              <div className="p-6 bg-[#181C24] border border-[#232833] rounded-xl flex items-center gap-4">
                <GraduationCap className="w-10 h-10 text-[#FF4D2D]" />
                <div>
                  <span className="text-2xl font-black text-[#F5F6F8] block tracking-tighter font-mono">1000+</span>
                  <span className="text-[9px] font-bold text-[#858E9B] uppercase tracking-widest">Students Trained & Guided</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="#contact" className="btn-primary">
                  Join ThiranOli <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {THIRANOLI_COURSES.map((course, idx) => (
                <div key={idx} className="p-8 bg-[#181C24] border border-[#232833] rounded-2xl flex flex-col justify-between hover:border-[#FF4D2D] transition-all">
                  <div>
                    <div className="text-[#FF4D2D] mb-5">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-black uppercase text-[#F5F6F8] tracking-wide mb-2">{course.title}</h4>
                    <p className="text-xs text-[#858E9B] font-medium leading-relaxed">{course.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-[#232833] mt-6 flex justify-between items-center text-[10px] font-bold text-[#FF4D2D] uppercase tracking-widest">
                    <span>Duration: {course.duration}</span>
                    <Link href="#contact" className="inline-flex items-center gap-1 text-[#858E9B] hover:text-[#FF4D2D] transition-colors">
                      Register <MoveRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 9. Tamil Nadu's Robotics Ecosystem */}
      <section className="py-24 bg-[#0A0C10] border-b border-[#232833]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Unified Pillars</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Tamil Nadu's Robotics Ecosystem</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Ecosystem Node 1 */}
            <div className="bg-[#11141A] border border-[#232833] p-10 rounded-2xl text-left hover:border-[#FF4D2D] transition-all">
              <div className="p-3 bg-[#FF4D2D]/10 text-[#FF4D2D] border border-[#FF4D2D]/20 rounded-xl w-fit mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#F5F6F8] tracking-tight mb-2">Tamizh Tech Robotics</h3>
              <span className="text-[9px] font-bold text-[#FF4D2D] uppercase tracking-widest block mb-4">Products & Innovation</span>
              <p className="text-xs text-[#858E9B] font-medium leading-relaxed">Indigenous manufacturing of competition bots, educational boards, and customized warehouse solutions (AGVs, AMRs).</p>
            </div>

            {/* Ecosystem Node 2 */}
            <div className="bg-[#11141A] border border-[#232833] p-10 rounded-2xl text-left hover:border-[#FF4D2D] transition-all">
              <div className="p-3 bg-[#00D1B2]/10 text-[#00D1B2] border border-[#00D1B2]/20 rounded-xl w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#F5F6F8] tracking-tight mb-2">Tamizh Robotics Club</h3>
              <span className="text-[9px] font-bold text-[#00D1B2] uppercase tracking-widest block mb-4">Competitions & Community</span>
              <p className="text-xs text-[#858E9B] font-medium leading-relaxed">Vibrant student network designing, building, and racing high-torque models in arenas nationwide.</p>
            </div>

            {/* Ecosystem Node 3 */}
            <div className="bg-[#11141A] border border-[#232833] p-10 rounded-2xl text-left hover:border-white/50 transition-all">
              <div className="p-3 bg-white/5 text-[#F5F6F8] border border-white/10 rounded-xl w-fit mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#F5F6F8] tracking-tight mb-2">ThiranOli Academy</h3>
              <span className="text-[9px] font-bold text-[#F5F6F8] uppercase tracking-widest block mb-4">Education & Careers</span>
              <p className="text-xs text-[#858E9B] font-medium leading-relaxed">Providing training bootcamps, structured industry internships, and career placements in core automation sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Industrial Automation */}
      <section className="py-24 bg-[#11141A] border-b border-[#232833]" id="industrial-automation">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Factory Digitalization</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Industrial Automation</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4 mb-6" />
            <p className="text-[#858E9B] text-sm font-medium leading-relaxed">
              We design, build, and deploy specialized warehouse and logistics robots configured for high uptime and intelligent navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { num: "01", title: "Automation Integration", desc: "PLC programming, SCADA installation, and full factory floor digitalization setups." },
              { num: "02", title: "PLC Frameworks", desc: "Configuration and commissioning of standard commercial PLC devices (Siemens, Delta, Allen-Bradley)." },
              { num: "03", title: "Robotics Integration", desc: "Deploying multi-axis robotic arms for automated pick-and-place and sorting cells." },
              { num: "04", title: "Machine Vision", desc: "High-speed camera checking systems powered by custom OpenCV checking software." },
              { num: "05", title: "AI Solutions", desc: "Predictive maintainence triggers and analytics integration for machinery fleet setups." },
              { num: "06", title: "Digital Manufacturing", desc: "Custom hardware tooling, 3D printing and CAD modeling for industrial prototyping." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-[#181C24] border border-[#232833] p-8 rounded-2xl text-left hover:border-[#FF4D2D] transition-colors relative">
                <span className="absolute top-6 right-8 text-xs font-mono text-[#858E9B]/30">{ind.num}</span>
                <div className="p-3 bg-[#FF4D2D]/10 text-[#FF4D2D] border border-[#FF4D2D]/20 rounded-xl w-fit mb-5">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black uppercase text-[#F5F6F8] mb-2">{ind.title}</h4>
                <p className="text-xs text-[#858E9B] leading-relaxed font-medium">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Customer Segments */}
      <section className="py-24 bg-[#0A0C10] border-b border-[#232833]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Customized Focus</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Customer Segments</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { segment: "Students", hook: "Competition bot kits and career training courses.", href: "/internship" },
              { segment: "Schools", hook: "K-12 STEM tinkering labs setups and curriculum plans.", href: "#contact" },
              { segment: "Colleges", hook: "Prototyping equipment supply and custom lab installations.", href: "#contact" },
              { segment: "Industries", hook: "Custom machine building, mechatronics vision setups and audits.", href: "#contact" }
            ].map((seg, idx) => (
              <div key={idx} className="border border-[#232833] rounded-2xl p-8 bg-[#11141A] text-left flex flex-col justify-between hover:border-[#FF4D2D] transition-all">
                <div>
                  <h3 className="text-xl font-black uppercase text-[#F5F6F8] mb-3">{seg.segment}</h3>
                  <p className="text-xs text-[#858E9B] font-medium leading-relaxed mb-6">{seg.hook}</p>
                </div>
                <Link href={seg.href} className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-wider flex items-center gap-1.5 hover:text-[#F5F6F8] transition-colors">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Gallery Section */}
      <section className="py-24 bg-[#11141A] border-b border-[#232833]" id="gallery">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">Ecosystem Gallery</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="relative h-64 bg-[#181C24] border border-[#232833] rounded-2xl overflow-hidden group hover:border-[#FF4D2D] transition-colors"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-xs font-black text-[#F5F6F8] uppercase tracking-wider">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Testimonials */}
      <section className="py-24 bg-[#0A0C10] border-b border-[#232833]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-4 block">Feedback</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-[#F5F6F8]">What Our Partners Say</h2>
            <div className="w-20 h-1 bg-[#FF4D2D] mx-auto mt-4" />
          </div>

          {/* Swipeable Testimonials Carousel - Goat Robotics Quotes style */}
          <div className="max-w-3xl mx-auto bg-[#11141A] border border-[#232833] p-10 md:p-16 rounded-2xl text-left relative overflow-hidden">
            <span className="text-8xl font-serif text-[#FF4D2D]/10 absolute -top-4 left-6 select-none pointer-events-none">“</span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex gap-1 text-[#FF4D2D] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-base md:text-lg text-[#F5F6F8] font-bold leading-relaxed italic mb-8">
                  "{TESTIMONIALS_DATA[activeTestimonial].text}"
                </p>
                <div className="border-t border-[#232833] pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#F5F6F8]">{TESTIMONIALS_DATA[activeTestimonial].name}</h4>
                    <span className="text-[10px] text-[#858E9B] uppercase tracking-widest mt-0.5 block">{TESTIMONIALS_DATA[activeTestimonial].role}</span>
                  </div>
                  <span className="text-xs font-mono text-[#FF4D2D]">{activeTestimonial + 1} / 4</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeTestimonial === i ? "bg-[#FF4D2D] w-6" : "bg-[#232833]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. Contact Section & WhatsApp */}
      <section className="py-24 bg-[#0A0C10]" id="contact">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left coordinate details */}
            <div className="lg:col-span-5 space-y-12 text-left">
              <div className="border-l-4 border-[#FF4D2D] pl-6 py-2">
                <span className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-2 block">Connect With Us</span>
                <h2 className="text-3xl md:text-4xl font-heading font-black uppercase text-[#F5F6F8] tracking-tighter">Get In Touch</h2>
              </div>
              <p className="text-xs font-bold text-[#858E9B] uppercase tracking-wider leading-relaxed">
                Connect with our coordination desk to order specific components, request academic lab quotes, or coordinate custom industrial integrations.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 text-[#FF4D2D] rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest block mb-1">Direct Call</span>
                    <a href="tel:+918148045030" className="text-lg font-black text-[#F5F6F8] hover:text-[#FF4D2D] transition-colors tracking-tight font-mono">+91 81480 45030</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 text-[#FF4D2D] rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest block mb-1">Email Coordinates</span>
                    <a href="mailto:office@tamizhtech.in" className="text-lg font-black text-[#F5F6F8] hover:text-[#FF4D2D] transition-colors tracking-tight break-all font-mono">office@tamizhtech.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 text-[#FF4D2D] rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest block mb-1">Engineering HQ</span>
                    <p className="text-lg font-black text-[#F5F6F8] tracking-tight leading-tight">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right lead capturing form */}
            <div className="lg:col-span-7 w-full">
              <form onSubmit={handleSubmit} className="border border-[#232833] p-8 md:p-12 rounded-2xl bg-[#11141A] space-y-6 text-left">
                <h3 className="text-xl font-black uppercase text-[#F5F6F8] mb-6 font-heading">Product / Solutions Enquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider">Your Name</label>
                    <input 
                      required type="text" name="name" placeholder="John Doe" 
                      className="form-input" value={formData.name} onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider">Official Email</label>
                    <input 
                      required type="email" name="email" placeholder="john@company.com" 
                      className="form-input" value={formData.email} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider">Phone Number</label>
                    <input 
                      required type="text" name="phone" placeholder="+91 XXXXX XXXXX" 
                      className="form-input" value={formData.phone} onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider">Interest Category</label>
                    <div className="relative">
                      <select 
                        name="interest" className="form-input cursor-pointer" 
                        value={formData.interest} onChange={handleInputChange}
                      >
                        <option value="STEM Lab Setup">STEM Lab Setup</option>
                        <option value="School Robotics Lab">School Robotics Lab</option>
                        <option value="College Research Setup">College Research Setup</option>
                        <option value="Industrial Automation">Industrial Automation</option>
                        <option value="Robotics Hardware Purchase">Robotics Hardware Purchase</option>
                      </select>
                      <ChevronRight className="w-4 h-4 text-[#858E9B] absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider">Requirement Brief</label>
                  <textarea 
                    required name="message" rows={4} placeholder="Tell us about your requirements or student target counts..." 
                    className="form-input resize-none" value={formData.message} onChange={handleInputChange}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary py-4 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2"
                >
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Widgets Section — Positioned on opposite corners to prevent collision */}
      
      {/* 1. WhatsApp Widget (Bottom Left) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_12px_32px_rgba(37,211,102,0.3)] hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Enquire on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute left-14 bg-[#11141A] border border-[#232833] text-[#F5F6F8] text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Enquiry
        </span>
      </a>

      {/* Cart Drawer Slide-in Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-end">
            {/* Backdrop close */}
            <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-full max-w-md bg-[#11141A] border-l border-[#232833] h-full flex flex-col justify-between shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#232833] flex justify-between items-center bg-[#181C24]">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-[#FF4D2D]" />
                  <h3 className="text-base font-black uppercase tracking-wider text-[#F5F6F8]">Your Quote Request List</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-[#9AA1AC] hover:text-[#FF4D2D] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length > 0 ? (
                  cart.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#181C24] border border-[#232833] p-4 rounded-xl flex justify-between gap-4 text-left"
                    >
                      <div className="flex-grow">
                        <h4 className="text-xs font-black uppercase text-[#F5F6F8] leading-tight">{item.product.name}</h4>
                        <p className="text-[9px] font-bold text-[#858E9B] uppercase mt-1">{item.product.category}</p>
                        <div className="flex items-center gap-3 mt-4">
                          <button 
                            onClick={() => updateQuantity(item.product.slug, -1)}
                            className="p-1 border border-[#232833] hover:border-[#F5F6F8] rounded-md text-[#9AA1AC]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-black font-mono text-[#F5F6F8]">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.slug, 1)}
                            className="p-1 border border-[#232833] hover:border-[#F5F6F8] rounded-md text-[#9AA1AC]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-between items-end">
                        <button 
                          onClick={() => removeFromCart(item.product.slug)}
                          className="text-[#858E9B] hover:text-[#FF4D2D] transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20">
                    <Bot className="w-12 h-12 text-[#232833] mx-auto mb-4" />
                    <span className="text-xs text-[#858E9B] uppercase font-black tracking-widest block">Your list is empty</span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-[#181C24] border-t border-[#232833]">
                {cart.length > 0 && (
                  <>
                    <button 
                      onClick={handleCheckout}
                      className="w-full btn-primary py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg"
                    >
                      REQUEST QUOTE VIA WHATSAPP <ArrowRight className="w-4 h-4" />
                    </button>
                    {cart.length >= 10 && (
                      <p className="text-[#FF4D2D] text-[9px] font-black uppercase tracking-wide mt-3 text-center">
                        * List length limit reached to avoid WhatsApp message truncation.
                      </p>
                    )}
                    <p className="text-center text-[9px] font-bold text-[#858E9B] uppercase tracking-wider mt-4">
                      This triggers a WhatsApp message summarizing your choice to compile pricing/delivery terms.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background-color: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          padding: 0.875rem 1rem;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 0.825rem;
          outline: none;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        .form-input:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 1px var(--accent-primary);
        }
        .form-input::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
        select.form-input {
          appearance: none;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </div>
  );
}

// TimelineNode component for clean modular highlight behavior on scroll
function TimelineNode({ milestone, isEven }: { milestone: any, isEven: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-150px" });
  
  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center mb-16 w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Circle Pin */}
      <div className={`absolute left-[8px] md:left-1/2 w-5 h-5 rounded-full border-4 transform -translate-x-1/2 z-20 transition-all duration-500 ${
        isInView ? "bg-[#FF4D2D] border-[#FF4D2D] scale-125 shadow-[0_0_15px_#FF4D2D]" : "bg-[#0A0C10] border-[#232833]"
      }`} />

      {/* Card Container */}
      <div className="w-full md:w-[45%] pl-8 md:pl-0">
        <div className={`bg-[#11141A] border p-8 rounded-2xl text-left transition-all duration-500 ${
          isInView ? "border-[#FF4D2D] shadow-[0_12px_32px_rgba(255,77,45,0.06)]" : "border-[#232833]"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <span className={`text-2xl font-black transition-colors duration-500 ${isInView ? "text-[#FF4D2D]" : "text-[#9AA1AC]"}`}>
              {milestone.year}
            </span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 bg-[#181C24] ${isInView ? "text-[#FF4D2D]" : "text-[#5C636F]"}`}>
              <Award className="w-4 h-4" />
            </div>
          </div>
          <h4 className="text-base font-black uppercase text-[#F5F6F8] tracking-wide mb-2 font-heading">
            {milestone.title}
          </h4>
          <p className="text-xs text-[#9AA1AC] font-medium leading-relaxed">
            {milestone.desc}
          </p>
        </div>
      </div>

      {/* Desktop alignment spacer */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}
