"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, Cpu, Bot, Shield, Globe, Settings, Lightbulb, CheckCircle2, 
  Factory, Layers, MoveRight, GraduationCap, MessageCircle, Trophy, Flag, 
  Award, Sparkles, BookOpen, Users, Compass, Code, Star, Phone, Mail, 
  MapPin, Send, ChevronRight, ShieldCheck, Zap, Laptop, Database, Beaker,
  TrendingUp, Activity, Check, Landmark, ArrowUpRight, ShoppingBag, Trash2, X, Plus, Minus, Calendar, AlertTriangle
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { products, Product } from "@/data/products";
import { PageLoader } from "@/components/ui/PageLoader";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { StatCounter } from "@/components/ui/StatCounter";

interface CartItem {
  product: Product;
  quantity: number;
}

const WINS_DATA = [
  { event: "PSG Kriya", year: 2023, category: "Robo Race", placement: "1st Prize", city: "Coimbatore" },
  { event: "PSG Kriya", year: 2023, category: "Sumo", placement: "1st Prize", city: "Coimbatore" },
  { event: "Technoxian World Cup 7.0", year: 2023, category: "Robo Race", placement: "3rd Runner", city: "New Delhi" },
  { event: "KPR Feasta", year: 2023, category: "LFR & Robo Race", placement: "1st Prize", city: "Coimbatore" },
  { event: "Asimov", year: 2024, category: "Robo Race", placement: "1st Runner", city: "Coimbatore" },
  { event: "Technoxian World Cup 8.0", year: 2024, category: "Robo Soccer", placement: "1st Runner", city: "New Delhi" },
  { event: "Yugam", year: 2024, category: "Robo Soccer", placement: "1st Prize", city: "Coimbatore" },
  { event: "IITM Shaastra", year: 2025, category: "Robo Soccer", placement: "1st Runner", city: "Chennai" },
  { event: "Quantom-X", year: 2025, category: "Robo Race", placement: "1st Prize", city: "Karnataka" },
  { event: "Quantom-X", year: 2025, category: "Robo Soccer", placement: "2nd Prize", city: "Karnataka" },
  { event: "KPR Feasta", year: 2025, category: "Robo Race", placement: "1st Prize", city: "Coimbatore" },
  { event: "SRM Robo Fest", year: 2025, category: "Robo War", placement: "1st Prize", city: "Chennai" },
  { event: "IITM Shaastra", year: 2026, category: "Robo Soccer", placement: "3rd Prize", city: "Chennai" },
  { event: "Utsava@SREC", year: 2026, category: "Robo Race", placement: "1st Prize", city: "Coimbatore" },
  { event: "Utsava@SREC", year: 2026, category: "Line Follower", placement: "1st Prize", city: "Coimbatore" },
  { event: "Yugam", year: 2026, category: "Robo Sumo", placement: "2nd Prize", city: "Coimbatore" },
  { event: "KPR Feasta", year: 2026, category: "Line Follower", placement: "Participation", city: "Coimbatore" },
  { event: "Quantom-X", year: 2026, category: "Robo Soccer", placement: "2nd Prize", city: "Karnataka" },
  { event: "Quantom-X", year: 2026, category: "Robo Race", placement: "2nd Prize", city: "Karnataka" },
];

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
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState("All");
  const [showPromo, setShowPromo] = useState(false);

  const shouldReduceMotion = useReducedMotion();

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
    { year: "2021", title: "Tamizh Robotics Club Established", desc: "Tamizh Robotics Club was established as a student-led robotics innovation hub in Coimbatore." },
    { year: "2022", title: "Regional Competitions", desc: "Started actively participating in competitive robotics challenges across Tamil Nadu." },
    { year: "2023", title: "National & International Scale", desc: "Expanded participation to national and international robotics championships, winning prestigious engineering awards." },
    { year: "2024", title: "Company Registration", desc: "Tamizh Tech Robotics Company was officially registered as an engineering and tech startup on 22 October 2024." },
    { year: "2025", title: "STEM Products Supply", desc: "Supplied indigenous competition bots and STEM kits to schools and colleges all over India." },
    { year: "2026", title: "ThiranOli Academy Launch", desc: "Launched ThiranOli Academy to bridge the academic engineering gap and train job-ready technical talent." },
  ];

  const ROADMAP_DATA = [
    { year: "2027", title: "State-Wide Expansion", desc: "Aiming to build tinkering labs in 100+ schools and train 5,000+ students across Tamil Nadu." },
    { year: "2028", title: "South India Presence", desc: "Expanding operational footprint across South India, targeting 10,000+ mentored students and advanced R&D hubs." }
  ];

  const COMPETITIONS_SHOWCASE = [
    { name: "RC Robo Race", desc: "High-RPM speed & racetrack obstacle navigation.", icon: Trophy },
    { name: "RC Robo Soccer", desc: "Kick weapons, high torque drift drives, and ball possession controls.", icon: Bot },
    { name: "RC Robo War", desc: "Heavy combat battle bots, hard armor, and active spinning weapons.", icon: Shield },
    { name: "RC Robo Sumo", desc: "Sumo ring push out, magnetic adhesion, and high-traction tires.", icon: Zap },
    { name: "RC Boat", desc: "Hydrodynamic hull designs and high-speed water propellers.", icon: Activity },
    { name: "Hovercraft", desc: "Amphibious flight controls and thrust fan systems.", icon: WindIcon },
    { name: "Line Follower", desc: "High-speed PID algorithms and optical sensor arrays.", icon: MapPin },
    { name: "Maze Solver", desc: "Micro-mouse maze routing algorithms and ultrasonic sensors.", icon: Compass },
    { name: "Drone", desc: "Aerial telemetry, quadcopter dynamics, and obstacle course flights.", icon: Send },
    { name: "Water Rocketry", desc: "Pneumatic pressure launchers and aerodynamic fins.", icon: LaunchIcon },
  ];

  const THIRANOLI_PRICING = [
    { title: "ThiranOli Skill Academy", price: "₹1,000", period: "student/month", desc: "Ongoing core technical skills guide in electronics, coding, and hands-on mechanical designs.", badge: "Popular" },
    { title: "Weekend Workshops", price: "₹500", period: "participant", desc: "Focused weekend mechatronics bootcamps covering single topics like Arduino, sensors, or soldering.", badge: "Bootcamp" },
    { title: "Summer & Holiday STEM Camps", price: "₹2,000", period: "student", desc: "Intense school-holiday courses designed to build functional robotic systems from scratch.", badge: "Interactive" },
    { title: "Advanced Competition Training", price: "₹2,000 - ₹3,000", period: "student/month", desc: "Specialized training for Robo War, Soccer, and Race bots, guided by international winners.", badge: "Elite Class" },
    { title: "Project-Based Courses", price: "₹4,000", period: "student", desc: "Build functional mechatronics applications in IoT, Smart Home automation, and EV Battery Monitoring.", badge: "Industry Prep" },
    { title: "Full Stack Development", price: "₹4,000 - ₹8,000", period: "course", desc: "From basic HTML/CSS to advanced backend development, databases, and responsive architectures.", badge: "Complete Career" },
    { title: "Electronics & Embedded Systems", price: "₹3,000 - ₹6,000", period: "course", desc: "In-depth hardware course covers PCB design, Embedded C programming, and microcontroller setups.", badge: "Hardware Core" }
  ];

  const FAQS = [
    { q: "What specification standards do your competitive soccer and war bots follow?", a: "All our competition bots are built strictly according to national and international rulebooks, including Technoxian, IIT Shaastra, and regional college criteria. We optimize for weight limits, dimensional parameters, motor RPM constraints, and weapon safety layouts." },
    { q: "Do you provide custom lab setup and syllabus-mapped packages for schools?", a: "Yes. We configure complete robotics tinkering labs for schools (mapped to STEM standards) complete with curriculum, teacher guidelines, mechatronics chassis kits, and on-site guidance sessions." },
    { q: "How does the ThiranOli Academy certification and placement support work?", a: "Our programs feature verified technical certifications upon project review. We map students to internships and core hiring firms, offering lifetime career mock sessions and portfolio reviews." },
    { q: "Can you design and build custom AGVs or AMRs for industrial facilities?", a: "Yes, we build and supply indigenous automated vehicles (TTRC AGV V1, AMR V1, SPC Drone) and mechatronic custom systems. We configure custom path guidance sensors, safety scanners, and payload capacities for warehouses and production lines." },
    { q: "What warranty and technical support terms come with your mechatronics kits?", a: "All our core products carry standard hardware warranties. We offer direct technical support, custom mechatronics parts replacement, and software updates for all our development kits." },
    { q: "Can students outside Coimbatore join the Tamizh Robotics Club?", a: "Yes, the Tamizh Robotics Club India community is open to passionate students nationwide. We support remote members with design files, online workshops, and competition alignment." },
    { q: "How do I request a bulk quote or place a custom mechatronics order?", a: "You can use our enquiry list drawer to compile products and send it via WhatsApp, or submit a callback request using our contact form. Our technical team responds within 24 hours." }
  ];

  const filteredWins = selectedYear === "All"
    ? WINS_DATA
    : WINS_DATA.filter(w => w.year.toString() === selectedYear);

  return (
    <div className="flex flex-col w-full bg-[#031549] text-white overflow-x-hidden pt-20 selection:bg-[#FB7115] selection:text-white">
      
      {/* Page Loader */}
      <PageLoader />

      {/* 2. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[#031549] overflow-hidden py-16 border-b border-white/12">
        <div className="absolute inset-0 opacity-[0.25] hero-grid pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FB7115]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FB7115]/10 border border-[#FB7115]/35 rounded-full text-xs font-black tracking-widest text-[#FB7115] uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Coimbatore's Leading Robotics & Automation Company
            </div>
            
            <KineticHeading 
              baseTextPre="Building India's "
              strikeWord="Ordinary"
              revealWord="Future"
              baseTextPost=" Engineers Through Robotics"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.0] tracking-tighter uppercase text-white"
              as="h1"
            />
            
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#C5CCE0] border-l-2 border-[#FB7115] pl-4">
              From a student robotics club to a leading robotics, engineering, and technology solutions company.
            </p>
            
            {/* 3 Inline Stat Chips using custom SVGs */}
            <div className="flex flex-col sm:flex-row gap-4 text-xs font-black uppercase tracking-wider text-[#C5CCE0] border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#FB7115]" />
                <span>180+ Winning Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#FB7115]" />
                <span>1000+ Students Mentored</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FB7115]" />
                <span>200+ Robotics Events</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#store" className="btn-primary">
                Explore Products <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 border-white/12 hover:border-[#FB7115] text-white">
                <FaWhatsapp className="w-4 h-4 text-[#FB7115]" /> Talk To Expert
              </a>
            </div>
          </div>
          
          {/* Asymmetric 3-image Collage (Left Large, Right Stacked A & B) */}
          <div className="relative w-full h-[480px] hidden md:flex items-center justify-center">
            {/* Main Image (Large background, slightly tilted) */}
            <div className="absolute left-6 w-[280px] h-[360px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/gallery/3.jpg" 
                alt="TTRC Combat Bot workbench" 
                fill 
                className="object-cover"
                sizes="300px"
              />
            </div>
            
            {/* Stacked Image A (Top right, overlapping) */}
            <div className="absolute right-12 top-6 w-[200px] h-[220px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-20 rotate-[4deg] hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/gallery/8.jpg" 
                alt="Robo Soccer Striker Chassis design" 
                fill 
                className="object-cover"
                sizes="200px"
              />
            </div>

            {/* Stacked Image B (Bottom right, overlapping) */}
            <div className="absolute right-6 bottom-6 w-[210px] h-[200px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-30 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/gallery/6.jpg" 
                alt="Drone Workshop training check" 
                fill 
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>

          {/* Mobile Fallback: Single centered hero image */}
          <div className="md:hidden block w-full h-[280px] relative border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/gallery/3.jpg" 
              alt="TTRC Combat Bot workbench" 
              fill 
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* 3. STATS BAND */}
      <section className="bg-[#0A2060] py-10 border-b border-white/12">
        <div className="container mx-auto px-6">
          {/* First Row of 5 Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={200} label="Events Participated" suffix="+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={40} label="State-Level Events" suffix="+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={100} label="National-Level Events" suffix="+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={15} label="International Events" suffix="+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4">
              <StatCounter target={180} label="Winning Positions" suffix="+" />
            </div>
          </div>
          
          {/* Hairline Divider */}
          <div className="w-full h-px bg-white/5 my-8" />

          {/* Second Row of 4 Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={8} label="Prize Money Won" prefix="₹" suffix="L+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={20} label="Events Organized" suffix="+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4 border-r border-white/5 last:border-0">
              <StatCounter target={200} label="Active Club Members" suffix="+" />
            </div>
            <div className="flex flex-col justify-center items-center py-4">
              <StatCounter target={1000} label="Students Mentored" suffix="+" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / FOUNDER'S MESSAGE BLOCK */}
      <section className="py-24 bg-[#031549] border-b border-white/12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content (narrative) */}
            <div className="lg:col-span-8 text-left space-y-6">
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] block">Message from the Founders</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white leading-none">
                Bridging Robotics Education & Industrial Engineering
              </h2>
              
              {/* Bold Founder Quote */}
              <div className="border-l-4 border-[#FB7115] pl-6 py-2 my-8">
                <blockquote className="text-lg md:text-xl font-heading font-black uppercase text-white tracking-tight leading-snug">
                  “Engineering is not just about learning theories; it is about transforming ideas into reality.”
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-[#C5CCE0] leading-relaxed font-bold uppercase tracking-tight opacity-90">
                Founded as the <strong className="text-white">Tamizh Robotics Club</strong> in 2021 to compete in collegiate robotics, we officially registered as <strong className="text-white">Tamizh Tech Robotics Company</strong> on 22 October 2024 in <strong className="text-white">Coimbatore</strong>. Guided by the principles of <strong className="text-white">Make in India</strong>, we design mechatronics chassis and supply competition bots, educational kits, and custom AMR nodes.
              </p>
              <p className="text-xs sm:text-sm text-[#C5CCE0] leading-relaxed font-bold uppercase tracking-tight opacity-90">
                In 2026, we launched <strong className="text-white">ThiranOli Academy</strong>, our training wing, to equip engineers with core placement skills in mechatronics, embedded programming, and industrial applications.
              </p>

              {/* 3 Inline Stat Blocks */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 mt-10">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">180+</span>
                  <span className="text-[8px] uppercase tracking-widest font-black text-[#8A99C0]">Wins</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">1000+</span>
                  <span className="text-[8px] uppercase tracking-widest font-black text-[#8A99C0]">Students</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">5+ Yrs</span>
                  <span className="text-[8px] uppercase tracking-widest font-black text-[#8A99C0]">Combined R&D</span>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/about" className="btn-primary">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </div>
            </div>

            {/* Right Profile Block */}
            <div className="lg:col-span-4 bg-[#0A2060] border border-white/12 p-8 rounded-2xl text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB7115]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-20 h-20 rounded-full border-2 border-[#FB7115]/40 overflow-hidden relative mb-6">
                <Image 
                  src="/founder.jpg" 
                  alt="Er. K. Tamizharasan" 
                  fill 
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>

              <h4 className="text-lg font-heading font-black text-white uppercase tracking-tight">Er. K. Tamizharasan</h4>
              <span className="text-[9px] font-black uppercase text-[#FB7115] tracking-widest block mb-4">Founder & Lead Engineer</span>
              
              <p className="text-[11px] text-[#C5CCE0] leading-relaxed font-semibold uppercase tracking-tight mb-6">
                Represented India in international robotics events. Awarded for developing custom industrial-grade automated guides and mechatronic systems.
              </p>

              <Link href="/founder" className="text-[10px] font-black uppercase tracking-widest text-[#FB7115] hover:text-white transition-colors flex items-center gap-1.5 group/link">
                Founder Bio <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. JOURNEY TIMELINE */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12" id="journey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Milestone Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Our Journey — From Club to Company</h2>
          </div>

          <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-8 sm:pl-12 space-y-12 text-left">
            {TIMELINE_DATA.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Node marker */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#031549] border-4 border-white/10 group-hover:border-[#FB7115] group-hover:scale-110 transition-all shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FB7115] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl hover:border-[#FB7115] hover:shadow-[0_12px_32px_rgba(251,113,21,0.06)] transition-all">
                  <span className="text-2xl font-black text-[#FB7115] font-mono block mb-2">{milestone.year}</span>
                  <h4 className="text-base font-heading font-black uppercase text-white tracking-wide mb-2">{milestone.title}</h4>
                  <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-80">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NAMED COMPETITION WINS */}
      <section className="py-24 bg-[#031549] border-b border-white/12" id="wins">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-left max-w-7xl mx-auto">
            <div>
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Proven Arenas</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">International & National Wins</h2>
            </div>
            
            {/* Year Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "2023", "2024", "2025", "2026"].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest border transition-all rounded-lg ${
                    selectedYear === yr 
                      ? "bg-[#FB7115] text-white border-[#FB7115]"
                      : "bg-[#0A2060] text-[#C5CCE0] border-white/10 hover:border-white/20"
                  }`}
                >
                  {yr === "All" ? "All Years" : yr}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredWins.map((win, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={`${win.event}-${win.category}-${idx}`}
                  className="bg-[#0A2060] border border-white/12 p-6 rounded-xl text-left hover:border-[#FB7115] hover:shadow-[0_8px_24px_rgba(251,113,21,0.06)] transition-all flex flex-col justify-between h-[160px]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2.5">
                      <span className="px-2 py-0.5 bg-[#FB7115]/10 border border-[#FB7115]/20 text-[#FB7115] text-[8px] font-bold uppercase tracking-wider rounded">
                        {win.year}
                      </span>
                      <span className="text-[8px] font-black text-[#8A99C0] uppercase tracking-wider font-mono">
                        {win.city}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wide leading-tight line-clamp-2">
                      {win.event}
                    </h4>
                    <p className="text-[10px] text-[#C5CCE0] uppercase font-bold tracking-wider mt-1.5">
                      {win.category}
                    </p>
                  </div>
                  <div className="text-[10px] font-black text-[#FB7115] uppercase tracking-widest border-t border-white/5 pt-3 flex items-center gap-1.5 mt-2">
                    <Award className="w-3.5 h-3.5" /> {win.placement}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7. ROBOTICS COMPETITION EXCELLENCE */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Competed Categories</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Robotics Competition Excellence</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {COMPETITIONS_SHOWCASE.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#031549] border border-white/12 p-8 rounded-xl text-center group hover:border-[#FB7115] hover:shadow-[0_12px_32px_rgba(251,113,21,0.06)] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0A2060] border border-white/10 text-[#FB7115] group-hover:bg-[#FB7115] group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-white mb-2 leading-tight">{cat.name}</h4>
                  <p className="text-[9px] text-[#8A99C0] leading-tight lowercase font-semibold">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. MADE IN INDIA SECTION */}
      <section className="py-24 bg-[#031549] border-b border-white/12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FB7115]/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl z-10 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-2 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white leading-none">
              At a time when most competition robots used in India were imported, we chose a different path.
            </h2>
            <p className="text-xs sm:text-sm text-[#C5CCE0] font-bold uppercase tracking-wider leading-relaxed max-w-2xl mx-auto opacity-80 pt-4">
              We focus on localized engineering, raw parts design, and local fabrication to keep robotics accessible, cost-effective, and robust.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-16 text-left">
              <div className="bg-[#0A2060] border border-white/12 p-8 rounded-2xl">
                <span className="text-[9px] font-black text-[#FB7115] uppercase tracking-widest block mb-2 font-mono">Pillar 01</span>
                <h4 className="text-base font-heading font-black uppercase text-white mb-3">Build in India</h4>
                <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-70">Indigenous mechatronics design, custom structural laser cuts, and high-RPM gearboxes configured locally in Coimbatore.</p>
              </div>
              <div className="bg-[#0A2060] border border-white/12 p-8 rounded-2xl">
                <span className="text-[9px] font-black text-[#FB7115] uppercase tracking-widest block mb-2 font-mono">Pillar 02</span>
                <h4 className="text-base font-heading font-black uppercase text-white mb-3">Innovate in India</h4>
                <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-70">Developing hardware configurations, wireless motor drives, and sensor modules mapped to domestic rules.</p>
              </div>
              <div className="bg-[#0A2060] border border-white/12 p-8 rounded-2xl">
                <span className="text-[9px] font-black text-[#FB7115] uppercase tracking-widest block mb-2 font-mono">Pillar 03</span>
                <h4 className="text-base font-heading font-black uppercase text-white mb-3">Empower India</h4>
                <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-70">Training student teams, setting up high school makerspaces, and providing R&D guides for engineering candidates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRODUCTS & ROBOTICS SOLUTIONS GRID */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12" id="store">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Product Lines</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Products & Robotics Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {/* Box 1 */}
            <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] w-fit mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-black uppercase text-white mb-4">Competition Bots</h4>
                <p className="text-xs text-[#C5CCE0] font-bold uppercase tracking-tight mb-6">High-performance platforms custom-designed for national and international robotics events.</p>
                
                <ul className="space-y-2 text-[10px] font-black uppercase tracking-wider text-[#8A99C0]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Robo Race Bots</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Robo Soccer Bots</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Robo War Bots</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Robo Sumo Bots</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Line Followers & Drones</li>
                </ul>
              </div>
              <Link href="/products?category=Robo%20Race%20Bots" className="btn-secondary w-full py-3.5 text-xs font-bold mt-8 border-white/10 hover:border-[#FB7115]">
                View Catalog
              </Link>
            </div>

            {/* Box 2 */}
            <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] w-fit mb-6">
                  <Settings className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-black uppercase text-white mb-4">Custom Robotics</h4>
                <p className="text-xs text-[#C5CCE0] font-bold uppercase tracking-tight mb-6">Bespoke mechatronics design, prototyping, and layout deployment services for companies.</p>
                
                <ul className="space-y-2 text-[10px] font-black uppercase tracking-wider text-[#8A99C0]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Research Robots</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Project Development</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Prototype Fabrication</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Sensor Integrations</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Custom Chassis Layout</li>
                </ul>
              </div>
              <Link href="/industries" className="btn-secondary w-full py-3.5 text-xs font-bold mt-8 border-white/10 hover:border-[#FB7115]">
                Custom Query
              </Link>
            </div>

            {/* Box 3 */}
            <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] w-fit mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-black uppercase text-white mb-4">Educational Kits</h4>
                <p className="text-xs text-[#C5CCE0] font-bold uppercase tracking-tight mb-6">STEM and embedded trainer kits mapped to syllabus objectives for colleges and schools.</p>
                
                <ul className="space-y-2 text-[10px] font-black uppercase tracking-wider text-[#8A99C0]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Beginner Robotics Kits</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Sensor Learning Kits</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Embedded Development Kits</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Tinkering Lab Supplies</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FB7115]" /> Arduino Trainer Kits</li>
                </ul>
              </div>
              <Link href="/products?category=STEM%20Learning%20Kits" className="btn-secondary w-full py-3.5 text-xs font-bold mt-8 border-white/10 hover:border-[#FB7115]">
                View STEM Kits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. INDUSTRIAL SOLUTIONS / R&D */}
      <section className="py-24 bg-[#031549] border-b border-white/12" id="solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Indigenous Engineering</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Industrial Solutions & R&D Focus</h2>
            <p className="text-xs text-[#C5CCE0] font-bold uppercase mt-4 max-w-2xl mx-auto tracking-wide">
              Innovation is the foundation of Tamizh Tech Robotics. We focus on Robotics, Embedded Systems, Automation, AI Integration, and Industrial Applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {/* Product Card 1 */}
            <div className="bg-[#0A2060] border border-white/12 p-6 rounded-2xl group hover:border-[#FB7115] transition-all">
              <div className="bg-white rounded-xl h-44 w-full flex items-center justify-center p-4 mb-6 relative overflow-hidden">
                <Image src="/product/agv.png" alt="TTRC AGV V1 BOT" fill className="object-contain p-4" onError={(e) => {}} />
                <span className="absolute bottom-2 left-3 bg-[#FB7115] text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase">R&D Output</span>
              </div>
              <h4 className="text-base font-heading font-black uppercase text-white mb-2">TTRC AGV V1 BOT</h4>
              <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-75 mb-6">
                Automated Guided Vehicle designed for line-following material transits, magnetic sensor guidance, and high payload capacities.
              </p>
              <Link href="/industries" className="text-[10px] font-black uppercase tracking-widest text-[#FB7115] hover:text-white transition-colors flex items-center gap-1">
                Enquire Scope <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Product Card 2 */}
            <div className="bg-[#0A2060] border border-white/12 p-6 rounded-2xl group hover:border-[#FB7115] transition-all">
              <div className="bg-white rounded-xl h-44 w-full flex items-center justify-center p-4 mb-6 relative overflow-hidden">
                <Image src="/product/amr.png" alt="TTRC AMR V1 BOT" fill className="object-contain p-4" />
                <span className="absolute bottom-2 left-3 bg-[#FB7115] text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase">R&D Output</span>
              </div>
              <h4 className="text-base font-heading font-black uppercase text-white mb-2">TTRC AMR V1 BOT</h4>
              <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-75 mb-6">
                Autonomous Mobile Robot with integrated LIDAR guidance, mapping algorithms, and intelligent obstacle bypass controls.
              </p>
              <Link href="/industries" className="text-[10px] font-black uppercase tracking-widest text-[#FB7115] hover:text-white transition-colors flex items-center gap-1">
                Enquire Scope <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Product Card 3 */}
            <div className="bg-[#0A2060] border border-white/12 p-6 rounded-2xl group hover:border-[#FB7115] transition-all">
              <div className="bg-white rounded-xl h-44 w-full flex items-center justify-center p-4 mb-6 relative overflow-hidden">
                <Image src="/pic/drone.png" alt="TTRC SPC DRONE" fill className="object-contain p-4" />
                <span className="absolute bottom-2 left-3 bg-[#FB7115] text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase">R&D Output</span>
              </div>
              <h4 className="text-base font-heading font-black uppercase text-white mb-2">TTRC SPC DRONE</h4>
              <p className="text-xs text-[#C5CCE0] font-semibold leading-relaxed uppercase tracking-tight opacity-75 mb-6">
                Specialized Quadcopter for surveillance and payload drops, featuring altitude lock and real-time telemetry links.
              </p>
              <Link href="/industries" className="text-[10px] font-black uppercase tracking-widest text-[#FB7115] hover:text-white transition-colors flex items-center gap-1">
                Enquire Scope <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. EDUCATION & MENTORSHIP */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12" id="training">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-left space-y-6">
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] block">Syllabus Guidance</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white leading-none">
                Direct Mentorship from Competition Winners
              </h2>
              <p className="text-xs sm:text-sm text-[#C5CCE0] leading-relaxed font-bold uppercase tracking-tight opacity-90">
                “Students who purchased our robots wanted to understand how they worked. This inspired us to start mentorship programs.” We guide candidates step-by-step through embedded systems, chassis layouts, and algorithms.
              </p>
              
              <ul className="space-y-4 text-xs font-black uppercase tracking-wider text-white pt-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FB7115]" /> Robotics Foundation Training</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FB7115]" /> Competition Chassis & Gear Design</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FB7115]" /> Microcontroller Project Mentorship</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FB7115]" /> Technical Workshops & Lab Guides</li>
              </ul>
            </div>

            {/* Right Stat Callout */}
            <div className="bg-[#031549] border border-white/12 p-8 sm:p-12 rounded-2xl text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FB7115]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="p-4 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-2xl w-fit mb-6 text-[#FB7115]">
                <GraduationCap className="w-10 h-10" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">
                1000+ Students Mentored
              </h3>
              <p className="text-xs text-[#C5CCE0] leading-relaxed font-semibold uppercase tracking-wider mb-6">
                One of our guided student team candidates went on to win a major international robotics championship, using TTRC platforms and custom firmware guides.
              </p>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#0A2060] border border-white/5 rounded text-[8px] font-bold text-white uppercase tracking-widest font-mono">STEM Certified</span>
                <span className="px-3 py-1 bg-[#0A2060] border border-white/5 rounded text-[8px] font-bold text-[#FB7115] uppercase tracking-widest font-mono">Expert Led</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. SCHOOL & COLLEGE COLLABORATIONS */}
      <section className="py-24 bg-[#031549] border-b border-white/12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 text-left">
            {/* Left Column: Services */}
            <div className="space-y-6">
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] block">Academic Services</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">Schools & Colleges Collaborations</h3>
              
              <div className="space-y-4 pt-4">
                <div className="border border-white/10 p-5 rounded-xl bg-[#0A2060] hover:border-[#FB7115] transition-colors">
                  <h4 className="text-xs font-black uppercase text-white mb-1.5">Robotics Labs Setup</h4>
                  <p className="text-[11px] text-[#C5CCE0] lowercase font-semibold">Configuring tinkering spaces, chassis packages, and software environments mapped to educational goals.</p>
                </div>
                <div className="border border-white/10 p-5 rounded-xl bg-[#0A2060] hover:border-[#FB7115] transition-colors">
                  <h4 className="text-xs font-black uppercase text-white mb-1.5">Faculty Development Programs</h4>
                  <p className="text-[11px] text-[#C5CCE0] lowercase font-semibold">Training academic staff on coding, sensors integration, and mechatronics workshop curation.</p>
                </div>
                <div className="border border-white/10 p-5 rounded-xl bg-[#0A2060] hover:border-[#FB7115] transition-colors">
                  <h4 className="text-xs font-black uppercase text-white mb-1.5">Competition Preparation</h4>
                  <p className="text-[11px] text-[#C5CCE0] lowercase font-semibold">Intense bootcamps to guide student teams for Robo Race, Soccer, and combat arenas.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Success Stories */}
            <div className="space-y-6">
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] block">Academic Impact</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">Academic Success Stories</h3>

              <div className="space-y-4 pt-4">
                <div className="border border-white/10 p-5 rounded-xl bg-[#0A2060] hover:border-[#FB7115] transition-colors">
                  <h4 className="text-xs font-black uppercase text-white mb-1.5">10+ Robotics Labs Established</h4>
                  <p className="text-[11px] text-[#C5CCE0] lowercase font-semibold">Successfully set up complete mechatronic lab environments across institutions in South India.</p>
                </div>
                <div className="border border-white/10 p-5 rounded-xl bg-[#0A2060] hover:border-[#FB7115] transition-colors">
                  <h4 className="text-xs font-black uppercase text-white mb-1.5">Weight-Lifting Robot Delivered</h4>
                  <p className="text-[11px] text-[#C5CCE0] lowercase font-semibold">Designed, assembled, and successfully supplied a heavy payload mechatronic robot for custom academic projects.</p>
                </div>
                <div className="border border-white/10 p-5 rounded-xl bg-[#0A2060] hover:border-[#FB7115] transition-colors">
                  <h4 className="text-xs font-black uppercase text-white mb-1.5">Long-Term Guidance Partnerships</h4>
                  <p className="text-[11px] text-[#C5CCE0] lowercase font-semibold">Ongoing support and curriculum updates for institutions, incubating dozens of prize-winning students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. THIRANOLI ACADEMY & PRICING CARDS */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12" id="training">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">ThiranOli Academy</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Empowering the Next Generation of Engineers</h2>
            <p className="text-xs text-[#C5CCE0] uppercase font-bold tracking-wider mt-4 leading-relaxed">
              Domains: Robotics, Embedded Systems, Full Stack Web Development. Programming in C, C++, Java, and Python. We provide industry-oriented internships and career development placement programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
            {THIRANOLI_PRICING.map((tier, idx) => (
              <div 
                key={idx}
                className="bg-[#031549] border border-white/12 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FB7115] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-[#FB7115]/10 border-b border-l border-white/10 text-[#FB7115] text-[7px] font-black uppercase tracking-widest px-2.5 py-1 rounded-bl-lg">
                  {tier.badge}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white mb-3 tracking-wide">{tier.title}</h4>
                  <p className="text-[10px] text-[#C5CCE0] font-semibold uppercase leading-relaxed tracking-tight mb-6 line-clamp-3">
                    {tier.desc}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <Link href="/internship" className="btn-primary w-full py-2.5 text-[9px] font-black uppercase tracking-widest flex items-center justify-center">
                    Enrol Program
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. WHY CHOOSE US */}
      <section className="py-24 bg-[#031549] border-b border-white/12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 text-left space-y-6">
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] block">Our Advantages</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white leading-none">
                Real Competition Experience — Built from 200+ events.
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6 text-left">
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-white flex items-center gap-2"><Check className="w-4 h-4 text-[#FB7115]" /> 180+ Competition Wins</h4>
                  <p className="text-[10px] text-[#C5CCE0] uppercase font-bold tracking-tight opacity-75">Unrivaled track record guiding students and builders to victory across major robotics events.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-white flex items-center gap-2"><Check className="w-4 h-4 text-[#FB7115]" /> Industry Exposure</h4>
                  <p className="text-[10px] text-[#C5CCE0] uppercase font-bold tracking-tight opacity-75">Work on real industrial mechatronics automation scopes, machine vision, and custom AMR codebases.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-white flex items-center gap-2"><Check className="w-4 h-4 text-[#FB7115]" /> End-to-End Solutions</h4>
                  <p className="text-[10px] text-[#C5CCE0] uppercase font-bold tracking-tight opacity-75">We provide hardware products, direct syllabus training, and deployment callback support.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-white flex items-center gap-2"><Check className="w-4 h-4 text-[#FB7115]" /> Indigenous Innovation</h4>
                  <p className="text-[10px] text-[#C5CCE0] uppercase font-bold tracking-tight opacity-75">Indigenously-designed mechatronics cards, chassis components, and firmware (100% Made in India).</p>
                </div>
              </div>
            </div>

            {/* Right Shield Logo Illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center p-8 bg-[#0A2060] relative shadow-2xl">
                <div className="absolute inset-0 opacity-[0.2] hero-grid rounded-full" />
                <div className="w-full h-full border border-dashed border-[#FB7115]/30 rounded-full flex items-center justify-center relative">
                  <Shield className="w-20 h-20 text-[#FB7115] stroke-[1]" />
                  <span className="absolute bottom-10 text-[7px] font-black text-white uppercase tracking-[0.25em] font-mono">TRC INDIA SHIELD</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 15. OUR ECOSYSTEM — THREE PILLARS */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Ecosystem Overview</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Our Complete Robotics Ecosystem</h2>
            <p className="text-xs text-[#C5CCE0] font-bold uppercase mt-4 tracking-wide max-w-2xl mx-auto">
              These three initiatives create a complete engineering ecosystem, bridging academic robotics learning and industrial-grade development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Panel 1 */}
            <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl relative overflow-hidden group hover:border-[#FB7115] transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FB7115]/5 rounded-full blur-xl pointer-events-none" />
              <div className="p-3 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] w-fit mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="text-base font-heading font-black uppercase text-white mb-3">Tamizh Tech Robotics Company</h4>
              <p className="text-xs text-[#C5CCE0] font-bold uppercase leading-relaxed tracking-tight opacity-75">
                Designs high-performance B2C competition bots, educational STEM chassis, and deploys B2B custom mechatronic solutions for industrial facilities.
              </p>
            </div>

            {/* Panel 2 */}
            <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl relative overflow-hidden group hover:border-[#FB7115] transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FB7115]/5 rounded-full blur-xl pointer-events-none" />
              <div className="p-3 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] w-fit mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-base font-heading font-black uppercase text-white mb-3">ThiranOli Academy</h4>
              <p className="text-xs text-[#C5CCE0] font-bold uppercase leading-relaxed tracking-tight opacity-75">
                Provides specialized technical mentorship, industrial development training, and career support guides to bridge classroom theory and corporate work.
              </p>
            </div>

            {/* Panel 3 */}
            <div className="bg-[#031549] border border-white/12 p-8 rounded-2xl relative overflow-hidden group hover:border-[#FB7115] transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FB7115]/5 rounded-full blur-xl pointer-events-none" />
              <div className="p-3 bg-[#FB7115]/10 border border-[#FB7115]/20 rounded-xl text-[#FB7115] w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-heading font-black uppercase text-white mb-3">Tamizh Robotics Club India</h4>
              <p className="text-xs text-[#C5CCE0] font-bold uppercase leading-relaxed tracking-tight opacity-75">
                The national community wing and collaborative forum for robotics enthusiasts. Access core hardware components and prepare for events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 16. FUTURE VISION */}
      <section className="py-24 bg-[#031549] border-b border-white/12">
        <div className="container mx-auto px-6 max-w-4xl text-left">
          <div className="mb-16">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block font-mono">Future Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Where We're Headed</h2>
            <p className="text-xs text-[#C5CCE0] font-bold uppercase tracking-wider mt-2 opacity-80">
              Clear forward-looking objectives and targets to expand the engineering footprint across India:
            </p>
          </div>

          <div className="space-y-6 font-heading font-black uppercase tracking-wider text-white">
            <div className="flex gap-6 items-start border border-white/10 p-6 rounded-2xl bg-[#0A2060]">
              <span className="text-[#FB7115] font-mono text-lg block">01</span>
              <div>
                <h4 className="text-sm font-black mb-1">Create industry-ready engineers</h4>
                <p className="text-[10px] text-[#C5CCE0] font-semibold tracking-wide uppercase leading-relaxed">Bridging academic theory with practical hardware, electronics designs, and programming certifications.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start border border-white/10 p-6 rounded-2xl bg-[#0A2060]">
              <span className="text-[#FB7115] font-mono text-lg block">02</span>
              <div>
                <h4 className="text-sm font-black mb-1">Train 10,000+ students</h4>
                <p className="text-[10px] text-[#C5CCE0] font-semibold tracking-wide uppercase leading-relaxed">Expanding hands-on mechatronics mentorships, STEM modules, and competition classes to 10,000+ engineers.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start border border-white/10 p-6 rounded-2xl bg-[#0A2060]">
              <span className="text-[#FB7115] font-mono text-lg block">03</span>
              <div>
                <h4 className="text-sm font-black mb-1">Expand robotics innovation across India</h4>
                <p className="text-[10px] text-[#C5CCE0] font-semibold tracking-wide uppercase leading-relaxed">Supplying high-performance competition hardware and educational tinkering modules to all academic hubs.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start border border-white/10 p-6 rounded-2xl bg-[#0A2060]">
              <span className="text-[#FB7115] font-mono text-lg block">04</span>
              <div>
                <h4 className="text-sm font-black mb-1">Establish advanced robotics research centers</h4>
                <p className="text-[10px] text-[#C5CCE0] font-semibold tracking-wide uppercase leading-relaxed">Collaborating with colleges to create dedicated R&D makerspaces and mechatronics incubators.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start border border-white/10 p-6 rounded-2xl bg-[#0A2060]">
              <span className="text-[#FB7115] font-mono text-lg block">05</span>
              <div>
                <h4 className="text-sm font-black mb-1">Develop indigenous robotics technologies</h4>
                <p className="text-[10px] text-[#C5CCE0] font-semibold tracking-wide uppercase leading-relaxed">Scaling up Made-in-India automated guided vehicles, mobile robot chassis, and optical tracking system designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. FAQ ACCORDION */}
      <section className="py-24 bg-[#0A2060] border-b border-white/12" id="faq">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] mb-4 block">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">Ecosystem Queries & Answers</h2>
          </div>

          <div className="space-y-4 text-left">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#031549] border border-white/12 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center text-xs sm:text-sm font-heading font-black text-white uppercase tracking-wider text-left hover:text-[#FB7115] transition-colors"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeFAQ === idx ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FB7115] shrink-0 ml-4 bg-[#0A2060] border border-white/5 p-1.5 rounded-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs text-[#C5CCE0] leading-relaxed uppercase font-semibold tracking-tight border-t border-white/5 opacity-90">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. CONTACT / FORM SECTION */}
      <section className="py-24 bg-[#031549] border-b border-white/12" id="contact">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] block">Let's Build the Future Together</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white leading-none">
                Start Your Robotics Consultation
              </h2>
              <p className="text-xs text-[#C5CCE0] leading-relaxed font-bold uppercase tracking-tight opacity-75">
                Whether setting up school maker-spaces, requesting bulk competition chassis rates, or commissioning automated AGV transits, fill out this callback consultation form.
              </p>

              <div className="space-y-4 pt-4 text-xs font-black uppercase tracking-wider text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2060] border border-white/5 rounded-lg text-[#FB7115]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 81480 45030 / +91 84386 86030</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2060] border border-white/5 rounded-lg text-[#FB7115]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="lowercase">contact@tamizhtech.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2060] border border-white/5 rounded-lg text-[#FB7115]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Coimbatore, Tamil Nadu - 641107</span>
                </div>
              </div>
            </div>

            {/* Right Callback Form Column */}
            <div className="lg:col-span-7 bg-[#0A2060] border border-white/12 p-8 sm:p-12 rounded-2xl text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB7115]/5 rounded-full blur-2xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#8A99C0] uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input w-full bg-[#031549] border border-white/10 rounded-lg p-3 text-xs text-white uppercase font-bold focus:border-[#FB7115] focus:outline-none transition-colors"
                      placeholder="ENTER NAME"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#8A99C0] uppercase tracking-wider">Official Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input w-full bg-[#031549] border border-white/10 rounded-lg p-3 text-xs text-white lowercase font-bold focus:border-[#FB7115] focus:outline-none transition-colors"
                      placeholder="name@organization.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#8A99C0] uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input w-full bg-[#031549] border border-white/10 rounded-lg p-3 text-xs text-white uppercase font-bold focus:border-[#FB7115] focus:outline-none transition-colors"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-[#8A99C0] uppercase tracking-wider">Primary Interest</label>
                    <div className="relative">
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="form-input w-full bg-[#031549] border border-white/10 rounded-lg p-3 text-xs text-white uppercase font-bold focus:border-[#FB7115] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="STEM Lab Setup">STEM Lab Setup</option>
                        <option value="Competition Bot Purchase">Competition Bot Purchase</option>
                        <option value="ThiranOli Academy Internship">ThiranOli Academy Internship</option>
                        <option value="Industrial Automation / AGVs">Industrial Automation / AGVs</option>
                        <option value="Custom Project Consultation">Custom Project Consultation</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#8A99C0] w-2 h-2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#8A99C0] uppercase tracking-wider">Callback Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input w-full bg-[#031549] border border-white/10 rounded-lg p-3 text-xs text-white uppercase font-bold focus:border-[#FB7115] focus:outline-none transition-colors resize-none"
                    placeholder="Briefly describe your requirements..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Request Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end">
            <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-full max-w-md bg-[#0A2060] border-l border-white/12 h-full flex flex-col justify-between shadow-2xl z-50 text-left"
            >
              <div>
                {/* Header */}
                <div className="p-6 border-b border-white/12 flex justify-between items-center bg-[#031549]">
                  <h3 className="text-lg font-heading font-black uppercase text-white tracking-tight flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#FB7115]" /> Enquiry List
                  </h3>
                  <button onClick={() => setIsCartOpen(false)} className="text-[#8A99C0] hover:text-[#FB7115] transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Items */}
                <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <Bot className="w-12 h-12 text-[#8A99C0] mx-auto mb-4 opacity-50" />
                      <p className="text-xs text-[#8A99C0] uppercase tracking-wider font-bold">List is empty</p>
                    </div>
                  ) : (
                    cart.map((item, idx) => (
                      <div key={idx} className="bg-[#031549] border border-white/10 p-4 rounded-xl flex justify-between gap-4">
                        <div>
                          <h4 className="text-xs font-black uppercase text-white leading-tight">{item.product.name}</h4>
                          <span className="text-[9px] text-[#8A99C0] uppercase font-bold tracking-wider block mt-1">{item.product.category}</span>
                          <div className="flex items-center gap-3 mt-4">
                            <button 
                              onClick={() => updateQuantity(item.product.slug, -1)}
                              className="p-1 border border-white/10 hover:border-[#FB7115] rounded-lg text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-black font-mono">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.slug, 1)}
                              className="p-1 border border-white/10 hover:border-[#FB7115] rounded-lg text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.product.slug)} className="text-[#8A99C0] hover:text-red-500 transition-colors self-start p-1">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Footer */}
              <div>
                {/* Warning banner when cart reaches capacity limit */}
                {getCartCount() >= 10 && (
                  <div className="mx-6 my-2 p-3.5 bg-[#FB7115]/10 border border-[#FB7115]/25 rounded-xl text-[10px] font-bold text-[#FB7115] uppercase tracking-wider flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>List capacity reached (Max 10). Larger lists may exceed WhatsApp text message bounds and truncate during transmission.</span>
                  </div>
                )}
                
                <div className="p-6 bg-[#031549] border-t border-white/12 space-y-4">
                  <button 
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                    className="w-full btn-primary py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    Request Quote Via WhatsApp <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[8px] text-[#8A99C0] font-black uppercase tracking-wider leading-relaxed">
                    This triggers a pre-filled WhatsApp message summarizing your list to request pricing & delivery terms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 1. WhatsApp Widget (Bottom Left) */}
      <a
        href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I%20have%20an%20enquiry%20regarding%20Robotics%20Kits."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="WhatsApp Contact"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute left-14 bg-[#0A2060] border border-white/12 text-[#F5F6F8] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Enquiry
        </span>
      </a>

      {/* Floating Cart Button (bottom left, offset) */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 left-24 bg-[#0A2060] border border-white/12 text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all z-40 flex items-center justify-center"
          aria-label="Open Enquiry List"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-[#FB7115]" />
            <span className="absolute -top-2.5 -right-2.5 bg-[#FB7115] text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-[#031549]">
              {getCartCount()}
            </span>
          </div>
        </button>
      )}

      {/* TRC Hub Promotional Popup Modal */}
      <AnimatePresence>
        {showPromo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6 selection:bg-[#FB7115] selection:text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#0A2060] border-2 border-[#FB7115] p-8 sm:p-12 rounded-2xl max-w-lg w-full relative shadow-[0_24px_48px_rgba(251,113,21,0.15)] text-left"
            >
              <button
                onClick={handleClosePromo}
                className="absolute top-4 right-4 p-2 text-[#8A99C0] hover:text-[#FB7115] transition-colors rounded-lg bg-[#031549] border border-white/12"
                aria-label="Close Promotion"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-[#FB7115]/10 rounded-xl border border-[#FB7115]/20 text-[#FB7115]">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-black text-[#FB7115] uppercase tracking-[0.4em] font-mono">Special Promotion</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tighter uppercase leading-[0.95] mb-4">
                Apply to <br />
                <span className="text-[#FB7115]">TRC Hub.</span>
              </h3>
              
              <p className="text-[#C5CCE0] text-sm leading-relaxed mb-8 font-bold uppercase tracking-tight">
                Gain access to professional-grade hardware, specialized training tracks, and industrial certification.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/robotics-club/join"
                  onClick={handleClosePromo}
                  className="btn-primary py-4 px-8 text-xs font-black tracking-widest text-center flex-1"
                >
                  JOIN THE CLUB
                </Link>
                <button
                  onClick={handleClosePromo}
                  className="btn-secondary py-4 px-8 text-xs font-black tracking-widest border-white/12 hover:border-[#FB7115] text-center flex-1"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hero-grid {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          background-color: var(--bg-primary);
        }
        
        .form-input::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
        
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #031549 inset !important;
          -webkit-text-fill-color: #FFFFFF !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}

// Dummy wind icon for compilation
function WindIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.8 18a2.2 2.2 0 1 1-2.2 2.2" />
      <path d="M10.1 12H2" />
      <path d="M19.4 12a3.2 3.2 0 1 0-3.2-3.2" />
      <path d="M16.2 8H2" />
      <path d="M22 16a3 3 0 1 0-3-3" />
      <path d="M19 13H2" />
    </svg>
  );
}

// Dummy launch/rocket icon for compilation
function LaunchIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 2 1.5 3 3.5 3 .75 0 1.5-.25 2-.5l9-9c.25-.5.5-1.25.5-2 0-2-1-3.5-3-3.5z" />
      <path d="M9 15l6-6" />
      <path d="M11.5 19.5c1.5-1.25 2.5-3.5 2.5-3.5s-2.25 1-3.5 2.5" />
    </svg>
  );
}
