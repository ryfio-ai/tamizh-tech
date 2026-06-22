"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Cpu, Bot, Shield, Globe, Settings, Lightbulb, CheckCircle2, 
  Factory, Layers, MoveRight, GraduationCap, MessageCircle, Trophy, Flag, 
  Award, Sparkles, BookOpen, Users, Compass, Code, Star, Phone, Mail, 
  MapPin, Send, ChevronRight, ShieldCheck, Zap, Laptop, Database, Beaker,
  TrendingUp, Activity, Check, Landmark, ArrowUpRight
} from "lucide-react";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";

import { products } from "@/data/products";

// Trust Section Metric Counter Component
function AnimatedCounter({ value, label, target }: { value: string, label: string, target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // ms
    const increment = Math.ceil(target / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 text-center transition-all duration-300 hover:border-[#FF6B00] hover:shadow-lg">
      <span className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight block mb-2">
        {value.includes("₹") ? `₹${count}L+` : value.includes("+") ? `${count}+` : count}
      </span>
      <span className="text-xs font-semibold text-[#555555] uppercase tracking-wider leading-snug">{label}</span>
    </div>
  );
}

// Data Definitions
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

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF] text-[#111111] overflow-x-hidden pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-white overflow-hidden py-16 border-b border-[#E5E5E5]">
        {/* Apple x DJI minimalistic geometric backing */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{
               backgroundImage: "linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)",
               backgroundSize: "60px 60px"
             }}
        />
        {/* Soft Orange Glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF2E6] border border-[#FF6B00]/20 rounded-full text-xs font-black tracking-widest text-[#FF6B00] uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" /> Established 22 Oct 2024
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tighter uppercase text-[#111111]">
              Building India's <br />
              Future Engineers <br />
              <span className="text-[#FF6B00]">Through Robotics</span>
            </h1>
            
            <p className="text-lg md:text-xl font-bold uppercase tracking-wider text-[#555555]">
              Products, Training, Competitions and Industrial Automation.
            </p>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Evolving from Coimbatore's premier robotics hub into a hybrid B2C & B2B ecosystem. We engineer high-performance platforms, empower schools & colleges, and deploy industrial-grade automated solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#store" className="btn-primary">
                Explore Products <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Book Demo
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-[#FF6B00]" /> Talk To Expert
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-[500px] h-[500px] border border-[#E5E5E5] rounded-full flex items-center justify-center p-8 relative animate-[spin_120s_linear_infinite]">
              <div className="w-full h-full border border-dashed border-[#FF6B00]/20 rounded-full flex items-center justify-center p-8">
                <div className="w-full h-full border border-[#E5E5E5] rounded-full flex items-center justify-center">
                  <Bot className="w-24 h-24 text-[#E5E5E5] stroke-[0.5]" />
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF6B00] rounded-full shadow-[0_0_15px_#FF6B00]" />
              <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full" />
            </div>

            {/* Float premium product illustration */}
            <div className="absolute bg-white border border-[#E5E5E5] p-8 rounded-2xl shadow-2xl max-w-sm flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FFF2E6] rounded-lg">
                  <Cpu className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-[#111111] tracking-wider">Premium Robotics</h3>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Designed In India</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Engineered for maximum reliability in national/international arenas and factory floors.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-[#FFF2E6] rounded text-[8px] font-bold text-[#FF6B00] uppercase">Make In India</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded text-[8px] font-bold text-gray-600 uppercase">STEM CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Section */}
      <section className="py-20 bg-[#FAFAFA] border-b border-[#E5E5E5]" id="achievements">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Proven Track Record</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111]">Ecosystem Trust & Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <AnimatedCounter value="200+" label="Robotics Events" target={200} />
            <AnimatedCounter value="180+" label="Awards Won" target={180} />
            <AnimatedCounter value="1000+" label="Students Mentored" target={1000} />
            <AnimatedCounter value="20+" label="Events Organized" target={20} />
            <AnimatedCounter value="₹8L+" label="Prize Money Won" target={8} />
          </div>
        </div>
      </section>

      {/* 3. Product Store */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]" id="store">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Robotics Store</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">High-Performance Hardware</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4 mb-10" />
            
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-lg border ${
                    selectedCategory === cat 
                    ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-sm" 
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
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
                className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#FF6B00] hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {product.badge}
                </div>

                {/* Product Image placeholder or real asset */}
                <div className="w-full h-48 bg-[#FAFAFA] border-b border-[#E5E5E5] flex items-center justify-center p-6 relative overflow-hidden group-hover:bg-white transition-colors">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Cpu className="w-16 h-16 text-[#E5E5E5] group-hover:text-[#FF6B00]/20 transition-colors" />
                  )}
                  <span className="absolute bottom-3 left-4 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-md font-black text-[#111111] uppercase tracking-tight mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed mb-4">
                      {product.specs}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-[#F0F0F0] mt-4">
                    <a 
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="w-4 h-4" /> Buy Now
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        href={`/products/${product.slug}`}
                        className="py-2.5 border border-[#E5E5E5] hover:border-[#111111] text-[#111111] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all block"
                      >
                        Details
                      </Link>
                      <Link 
                        href={`/products/${product.slug}#quote`}
                        className="py-2.5 border border-[#E5E5E5] hover:border-[#111111] text-[#111111] text-[9px] font-black uppercase tracking-widest rounded-lg text-center transition-all block"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions Section */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#E5E5E5]" id="solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Targeted Programs</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Integrated Solutions</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: For Schools */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 flex flex-col justify-between text-left hover:border-[#FF6B00] hover:shadow-lg transition-all">
              <div>
                <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">For Schools</h3>
                <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-6">STEM & LAB SOLUTIONS</span>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">Empowering K-12 academic spaces with fully modular labs, syllabus training, and hardware kits.</p>
                <ul className="space-y-3">
                  {["STEM Labs", "Robotics Labs", "AI Labs"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                      <Check className="w-4 h-4 text-[#FF6B00]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00] hover:text-[#111111] transition-colors inline-flex items-center gap-1">
                  Enquire Lab Setup <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: For Colleges */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 flex flex-col justify-between text-left hover:border-[#FF6B00] hover:shadow-lg transition-all">
              <div>
                <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">For Colleges</h3>
                <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-6">ACADEMIC & R&D LABS</span>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">Incubating student competitive teams, lab setup, and prototyping custom final-year engineering projects.</p>
                <ul className="space-y-3">
                  {["Research Projects", "Competition Teams", "Lab Setup"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                      <Check className="w-4 h-4 text-[#FF6B00]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00] hover:text-[#111111] transition-colors inline-flex items-center gap-1">
                  Connect With Experts <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: For Industries */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 flex flex-col justify-between text-left hover:border-[#FF6B00] hover:shadow-lg transition-all">
              <div>
                <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">For Industries</h3>
                <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-6">AUTOMATION & INTEGRATION</span>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">Deploying custom automated systems, IoT remote monitors, and machine vision inspection platforms.</p>
                <ul className="space-y-3">
                  {["Automation", "AI Vision", "IoT Monitoring", "Custom Robotics"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-bold uppercase tracking-wider">
                      <Check className="w-4 h-4 text-[#FF6B00]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="#contact" className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00] hover:text-[#111111] transition-colors inline-flex items-center gap-1">
                  Request Automation Audit <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Made in India Section */}
      <section className="relative w-full py-24 bg-white text-[#111111] overflow-hidden border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6 z-10 max-w-5xl text-center relative">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6B00] bg-[#FFF2E6] px-3.5 py-1.5 rounded-full w-fit mx-auto mb-6 block">
            Indigenous Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
            Designed, Developed and <br /> Manufactured in India
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
            At Tamizh Tech, we engineer robotics hardware locally to bypass expensive component imports. Our competition bots and modular setups are built, debugged, and shipped from our Coimbatore R&D hub.
          </p>

          {/* Robot images grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {COMPETITIONS_SHOWCASE.slice(0, 4).map((bot, idx) => (
              <div key={idx} className="border border-[#E5E5E5] rounded-xl p-4 bg-[#FAFAFA] flex flex-col justify-between h-48 hover:border-[#FF6B00] transition-colors">
                <div className="relative w-full h-24 flex items-center justify-center">
                  <Image
                    src={bot.image}
                    alt={bot.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center pt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#111111]">{bot.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Robotics Competition Excellence */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#E5E5E5]" id="competitions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Arena Dominance</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Robotics Competition Excellence</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4 mb-6" />
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              We design, build, and optimize hardware structures for specific arena rules, achieving a record 180+ winning positions in technical tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COMPETITIONS_SHOWCASE.map((comp, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#E5E5E5] p-6 rounded-2xl text-left flex flex-col justify-between hover:border-[#FF6B00] transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FFF2E6] flex items-center justify-center mb-5 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-black uppercase text-[#111111] tracking-wide mb-2">{comp.name}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{comp.desc}</p>
                </div>
                <div className="pt-6 border-t border-[#F0F0F0] mt-4 flex items-center justify-between">
                  <a 
                    href={getWhatsAppLink(comp.name)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] font-black text-[#FF6B00] uppercase tracking-widest inline-flex items-center gap-1 hover:gap-2 transition-all"
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
      <section className="py-24 bg-white border-b border-[#E5E5E5]" id="journey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Ecosystem Evolution</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Achievements Wall</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4" />
          </div>
          
          <div className="relative max-w-5xl mx-auto pl-6 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#E5E5E5] transform -translate-x-1/2" />

            {TIMELINE_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center mb-16 w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Pin */}
                  <div className="absolute left-[8px] md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#FF6B00] transform -translate-x-1/2 z-20" />

                  {/* Card Container */}
                  <div className="w-full md:w-[45%] pl-8 md:pl-0">
                    <div className="bg-white border border-[#E5E5E5] p-8 rounded-2xl text-left transition-all duration-300 hover:border-[#FF6B00] hover:shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-[#FF6B00] tracking-tighter">
                          {milestone.year}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#FFF2E6] flex items-center justify-center text-[#FF6B00]">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-base font-black uppercase text-[#111111] tracking-wide mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop alignment spacer */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. ThiranOli Academy Section */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#E5E5E5]" id="training">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-6 text-left robotics-accent border-[#FF6B00] border-l-4 pl-6">
              <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em]">Bridging Academia & Industry</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">
                ThiranOli Academy
              </h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                Our career and training arm designed to build future-ready engineering leaders. We offer deep hands-on courses, verified certifications, and placement support.
              </p>
              
              <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl flex items-center gap-4">
                <GraduationCap className="w-10 h-10 text-[#FF6B00]" />
                <div>
                  <span className="text-2xl font-black text-[#111111] block tracking-tighter">1000+</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Students Trained & Guided</span>
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
                <div key={idx} className="p-8 bg-white border border-[#E5E5E5] rounded-2xl flex flex-col justify-between hover:border-[#FF6B00] transition-colors">
                  <div>
                    <div className="text-[#FF6B00] mb-5">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h4 className="text-md font-black uppercase text-[#111111] tracking-wide mb-2">{course.title}</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{course.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-[#F0F0F0] mt-6 flex justify-between items-center text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest">
                    <span>Duration: {course.duration}</span>
                    <Link href="#contact" className="inline-flex items-center gap-1 text-gray-400 hover:text-[#FF6B00] transition-colors">
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
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Unified Pillars</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Tamil Nadu's Robotics Ecosystem</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Ecosystem Node 1 */}
            <div className="bg-white border border-[#E5E5E5] p-10 rounded-2xl text-left hover:border-[#FF6B00] transition-all">
              <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight mb-2">Tamizh Tech Robotics</h3>
              <span className="text-[9px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-4">Products & Innovation</span>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">Indigenous manufacturing of competition bots, educational boards, and customized warehouse solutions (AGVs, AMRs).</p>
            </div>

            {/* Ecosystem Node 2 */}
            <div className="bg-white border border-[#E5E5E5] p-10 rounded-2xl text-left hover:border-[#FF6B00] transition-all">
              <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight mb-2">Tamizh Robotics Club</h3>
              <span className="text-[9px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-4">Competitions & Community</span>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">Vibrant student network designing, building, and racing high-torque models in arenas nationwide.</p>
            </div>

            {/* Ecosystem Node 3 */}
            <div className="bg-white border border-[#E5E5E5] p-10 rounded-2xl text-left hover:border-[#FF6B00] transition-all">
              <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#111111] tracking-tight mb-2">ThiranOli Academy</h3>
              <span className="text-[9px] font-bold text-[#FF6B00] uppercase tracking-widest block mb-4">Education & Careers</span>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">Providing training bootcamps, structured industry internships, and career placements in core automation sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Industrial Automation */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#E5E5E5]" id="industrial-automation">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Factory Digitalization</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Industrial Automation</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4 mb-6" />
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              We design, build, and deploy specialized warehouse and logistics robots configured for high uptime and intelligent navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Automation Integration", desc: "PLC programming, SCADA installation, and full factory floor digitalization setups." },
              { title: "PLC Frameworks", desc: "Configuration and commissioning of standard commercial PLC devices (Siemens, Delta, Allen-Bradley)." },
              { title: "Robotics Integration", desc: "Deploying multi-axis robotic arms for automated pick-and-place and sorting cells." },
              { title: "Machine Vision", desc: "High-speed camera checking systems powered by custom OpenCV checking software." },
              { title: "AI Solutions", desc: "Predictive maintainence triggers and analytics integration for machinery fleet setups." },
              { title: "Digital Manufacturing", desc: "Custom hardware tooling, 3D printing and CAD modeling for industrial prototyping." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white border border-[#E5E5E5] p-8 rounded-2xl text-left hover:border-[#FF6B00] transition-colors">
                <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl w-fit mb-5">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black uppercase text-[#111111] mb-2">{ind.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Customer Segments */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Customized Focus</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Customer Segments</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { segment: "Students", hook: "Competition bot kits and career training courses.", href: "/internship" },
              { segment: "Schools", hook: "K-12 STEM tinkering labs setups and curriculum plans.", href: "#contact" },
              { segment: "Colleges", hook: "Prototyping equipment supply and custom lab installations.", href: "#contact" },
              { segment: "Industries", hook: "Custom machine building, machine vision setups and audits.", href: "#contact" }
            ].map((seg, idx) => (
              <div key={idx} className="border border-[#E5E5E5] rounded-2xl p-8 bg-[#FAFAFA] text-left flex flex-col justify-between hover:border-[#FF6B00] transition-all">
                <div>
                  <h3 className="text-xl font-black uppercase text-[#111111] mb-3">{seg.segment}</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{seg.hook}</p>
                </div>
                <Link href={seg.href} className="text-[10px] font-black text-[#FF6B00] uppercase tracking-wider flex items-center gap-1.5 hover:text-[#111111] transition-colors">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Gallery Section */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#E5E5E5]" id="gallery">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">Ecosystem Gallery</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4" />
          </div>

          {/* Gallery masonry style layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="relative h-64 bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden group hover:border-[#FF6B00] transition-colors"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-xs font-black text-white uppercase tracking-wider">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Testimonials */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-4 block">Feedback</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111111]">What Our Partners Say</h2>
            <div className="w-20 h-1 bg-[#FF6B00] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS_DATA.map((test, idx) => (
              <div key={idx} className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 rounded-2xl text-left relative">
                <div className="flex gap-1 text-[#FF6B00] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-[#111111] font-medium leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
                <div className="border-t border-[#E5E5E5] pt-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#111111]">{test.name}</h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Contact Section & WhatsApp */}
      <section className="py-24 bg-white" id="contact">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left coordinate details */}
            <div className="lg:col-span-5 space-y-12 text-left">
              <div className="border-l-4 border-[#FF6B00] pl-6 py-2">
                <span className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.4em] mb-2 block">Connect With Us</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-[#111111] tracking-tighter">Get In Touch</h2>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider leading-relaxed">
                Connect with our coordination desk to order specific components, request academic lab quotes, or coordinate custom industrial integrations.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Direct Call</span>
                    <a href="tel:+918148045030" className="text-lg font-black text-[#111111] hover:text-[#FF6B00] transition-colors tracking-tight">+91 81480 45030</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Email Coordinates</span>
                    <a href="mailto:office@tamizhtech.in" className="text-lg font-black text-[#111111] hover:text-[#FF6B00] transition-colors tracking-tight break-all">office@tamizhtech.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFF2E6] text-[#FF6B00] rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Engineering HQ</span>
                    <p className="text-lg font-black text-[#111111] tracking-tight leading-tight">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right lead capturing form */}
            <div className="lg:col-span-7 w-full">
              <form onSubmit={handleSubmit} className="border border-[#E5E5E5] p-8 md:p-12 rounded-2xl bg-[#FAFAFA] space-y-6 text-left">
                <h3 className="text-xl font-black uppercase text-[#111111] mb-6">Product / Solutions Enquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input 
                      required type="text" name="name" placeholder="John Doe" 
                      className="form-input" value={formData.name} onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Official Email</label>
                    <input 
                      required type="email" name="email" placeholder="john@company.com" 
                      className="form-input" value={formData.email} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Phone Number</label>
                    <input 
                      required type="text" name="phone" placeholder="+91 XXXXX XXXXX" 
                      className="form-input" value={formData.phone} onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Interest Category</label>
                    <select 
                      name="interest" className="form-input cursor-pointer" 
                      value={formData.interest} onChange={handleInputChange}
                    >
                      <option>STEM Lab Setup</option>
                      <option>School Robotics Lab</option>
                      <option>College Research Setup</option>
                      <option>Industrial Automation</option>
                      <option>Robotics Hardware Purchase</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Requirement Brief</label>
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

      {/* Sticky Floating WhatsApp Enquiry Button */}
      <a
        href={getWhatsAppLink()}
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
