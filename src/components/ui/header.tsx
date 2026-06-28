"use client";

import { Menu, MoveRight, X, ChevronDown, Cpu, Bot, Factory, GraduationCap, Users, Award, Image as ImageIcon, Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
  const [isOpen, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productsDropdown = [
    { title: "Product Catalog", href: "/products", desc: "Browse our complete mechatronics selection.", icon: Cpu },
    { title: "Robo Race Bots", href: "/products?category=Robo%20Race%20Bots", desc: "High-RPM racing platforms.", icon: Bot },
    { title: "Robo Soccer Bots", href: "/products?category=Robo%20Soccer%20Bots", desc: "Autonomous & remote striker bots.", icon: Bot },
    { title: "Robo Sumo Bots", href: "/products?category=Robo%20Sumo%20Bots", desc: "Heavyweight eviction models.", icon: Bot },
    { title: "Line Follower Robots", href: "/products?category=Line%20Follower%20Robots", desc: "Optically-tracked precision crawlers.", icon: Bot },
    { title: "STEM Kits", href: "/products?category=STEM%20Learning%20Kits", desc: "Tinkering kits for students.", icon: Cpu },
    { title: "Lab Kits", href: "/products?category=School%20Robotics%20Lab%20Kits", desc: "Curriculum-linked school modules.", icon: Cpu },
  ];

  const solutionsDropdown = [
    { title: "Schools Setup", href: "/schools", desc: "Tinkering labs & teacher guidance.", icon: GraduationCap },
    { title: "Colleges Program", href: "/colleges", desc: "R&D incubators & project prototyping.", icon: GraduationCap },
    { title: "Industries Served", href: "/industries", desc: "Custom AGVs, vision, & PLC integrations.", icon: Factory },
  ];

  const companyDropdown = [
    { title: "About Us", href: "/about", desc: "Our team, story and technical creed.", icon: Users },
    { title: "Founder Profile", href: "/founder", desc: "Read the journey of Er. K. Tamizharasan.", icon: Users },
    { title: "Robotics in Coimbatore", href: "/robotics-company-in-coimbatore", desc: "Coimbatore's premier R&D hub.", icon: Factory },
    { title: "Achievements Hub", href: "/#achievements", desc: "180+ winning spots across India.", icon: Award },
    { title: "Visual Gallery", href: "/gallery", desc: "Photos of bots, labs, and workshop events.", icon: ImageIcon },
  ];

  const handleDropdownToggle = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 flex items-center ${
      isScrolled 
        ? "h-16 bg-[#031549]/85 backdrop-blur-md border-b border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
        : "h-20 bg-transparent border-b border-transparent"
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-6 flex justify-between items-center h-full relative">
        
        {/* Left: Logo Section */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-12 h-12 flex items-center justify-center group-hover:opacity-90 transition-opacity">
            <Image
              src="/logo/TTRC LOGO.png"
              alt="TTRC Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-lg sm:text-xl font-heading font-black tracking-tighter text-white uppercase">
              TAMIZH <span className="text-[#FB7115]">TECH</span>
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.25em] font-black text-[#8A99C0] mt-0.5">Robotics Company</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation with Dropdowns */}
        <nav className="hidden xl:flex items-center justify-center gap-8 flex-grow">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-[#C5CCE0] hover:text-[#FB7115] transition-colors">
            Home
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5CCE0] group-hover:text-[#FB7115] flex items-center gap-1 transition-colors">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </span>
            <div className="absolute top-[64px] left-1/2 -translate-x-1/2 bg-[#0A2060] border border-white/12 shadow-2xl rounded-xl py-6 px-4 w-[480px] grid grid-cols-2 gap-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left">
              {productsDropdown.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.title} 
                    href={item.href}
                    className="flex gap-3 p-3 rounded-lg hover:bg-[#102B75] transition-all group/item border border-transparent hover:border-white/5"
                  >
                    <div className="p-2 bg-[#102B75] border border-white/10 rounded-lg text-[#FB7115] group-hover/item:bg-[#FB7115] group-hover/item:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white group-hover/item:text-[#FB7115] transition-colors">{item.title}</span>
                      <span className="text-[9px] text-[#8A99C0] mt-0.5 lowercase leading-tight">{item.desc}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5CCE0] group-hover:text-[#FB7115] flex items-center gap-1 transition-colors">
              Solutions <ChevronDown className="w-3.5 h-3.5" />
            </span>
            <div className="absolute top-[64px] left-1/2 -translate-x-1/2 bg-[#0A2060] border border-white/12 shadow-2xl rounded-xl py-6 px-4 w-[280px] flex flex-col gap-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left">
              {solutionsDropdown.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.title} 
                    href={item.href}
                    className="flex gap-3 p-3 rounded-lg hover:bg-[#102B75] transition-all group/item border border-transparent hover:border-white/5"
                  >
                    <div className="p-2 bg-[#102B75] border border-white/10 rounded-lg text-[#FB7115] group-hover/item:bg-[#FB7115] group-hover/item:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white group-hover/item:text-[#FB7115] transition-colors">{item.title}</span>
                      <span className="text-[9px] text-[#8A99C0] mt-0.5 lowercase leading-tight">{item.desc}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <Link href="/internship" className="text-xs font-bold uppercase tracking-widest text-[#C5CCE0] hover:text-[#FB7115] transition-colors">
            Training
          </Link>

          {/* Company Dropdown */}
          <div 
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5CCE0] group-hover:text-[#FB7115] flex items-center gap-1 transition-colors">
              Company <ChevronDown className="w-3.5 h-3.5" />
            </span>
            <div className="absolute top-[64px] left-1/2 -translate-x-1/2 bg-[#0A2060] border border-white/12 shadow-2xl rounded-xl py-6 px-4 w-[280px] flex flex-col gap-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left">
              {companyDropdown.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.title} 
                    href={item.href}
                    className="flex gap-3 p-3 rounded-lg hover:bg-[#102B75] transition-all group/item border border-transparent hover:border-white/5"
                  >
                    <div className="p-2 bg-[#102B75] border border-white/10 rounded-lg text-[#FB7115] group-hover/item:bg-[#FB7115] group-hover/item:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white group-hover/item:text-[#FB7115] transition-colors">{item.title}</span>
                      <span className="text-[9px] text-[#8A99C0] mt-0.5 lowercase leading-tight">{item.desc}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-[#C5CCE0] hover:text-[#FB7115] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right: Desktop Actions */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <Link href="/contact" className="btn-primary py-2.5 px-6 text-xs font-bold shadow-[0_8px_24px_rgba(251,113,21,0.2)]">
            Get Quote <MoveRight className="w-4 h-4 ml-3" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setOpen(!isOpen)} className="text-white p-2 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#031549]/95 backdrop-blur-lg border-t border-white/12 h-[calc(100vh-64px)] overflow-y-auto p-8 xl:hidden flex flex-col justify-between text-left z-50">
          <div className="flex flex-col gap-6">
            
            {/* Home */}
            <div className="border-b border-white/12 pb-2">
              <Link href="/" className="text-lg font-heading font-black tracking-tighter text-white uppercase block" onClick={() => setOpen(false)}>
                Home
              </Link>
            </div>

            {/* Products Accordion */}
            <div className="border-b border-white/12 pb-2">
              <button 
                onClick={() => handleDropdownToggle("products")}
                className="w-full flex justify-between items-center text-lg font-heading font-black tracking-tighter text-white uppercase"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "products" && (
                <div className="pl-4 mt-3 space-y-3 border-l border-[#FB7115] py-1">
                  {productsDropdown.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="block text-[11px] font-black text-[#C5CCE0] hover:text-[#FB7115] uppercase tracking-widest"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-white/12 pb-2">
              <button 
                onClick={() => handleDropdownToggle("solutions")}
                className="w-full flex justify-between items-center text-lg font-heading font-black tracking-tighter text-white uppercase"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "solutions" && (
                <div className="pl-4 mt-3 space-y-3 border-l border-[#FB7115] py-1">
                  {solutionsDropdown.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="block text-[11px] font-black text-[#C5CCE0] hover:text-[#FB7115] uppercase tracking-widest"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training */}
            <div className="border-b border-white/12 pb-2">
              <Link href="/internship" className="text-lg font-heading font-black tracking-tighter text-white uppercase block" onClick={() => setOpen(false)}>
                Training
              </Link>
            </div>

            {/* Company Accordion */}
            <div className="border-b border-white/12 pb-2">
              <button 
                onClick={() => handleDropdownToggle("company")}
                className="w-full flex justify-between items-center text-lg font-heading font-black tracking-tighter text-white uppercase"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "company" && (
                <div className="pl-4 mt-3 space-y-3 border-l border-[#FB7115] py-1">
                  {companyDropdown.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="block text-[11px] font-black text-[#C5CCE0] hover:text-[#FB7115] uppercase tracking-widest"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="border-b border-white/12 pb-2">
              <Link href="/contact" className="text-lg font-heading font-black tracking-tighter text-white uppercase block" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-6 flex flex-col gap-4">
            <Link href="/contact" className="btn-primary w-full py-4 text-xs font-bold flex items-center justify-center" onClick={() => setOpen(false)}>
              Get Quote
            </Link>
            <a 
              href="https://wa.me/918148045030" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary w-full py-4 text-xs font-bold flex items-center justify-center border-white/12 text-white"
              onClick={() => setOpen(false)}
            >
              Talk To Expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header1 };
