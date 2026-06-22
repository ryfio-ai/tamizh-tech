"use client";

import { Menu, MoveRight, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
  const [isOpen, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productsDropdown = [
    { title: "Product Catalog", href: "/products" },
    { title: "Robo Race Bots", href: "/products?category=Robo%20Race%20Bots" },
    { title: "Robo Soccer Bots", href: "/products?category=Robo%20Soccer%20Bots" },
    { title: "Robo Sumo Bots", href: "/products?category=Robo%20Sumo%20Bots" },
    { title: "Line Follower Robots", href: "/products?category=Line%20Follower%20Robots" },
    { title: "STEM Kits", href: "/products?category=STEM%20Learning%20Kits" },
    { title: "Lab Kits", href: "/products?category=School%20Robotics%20Lab%20Kits" },
  ];

  const solutionsDropdown = [
    { title: "Schools Setup", href: "/schools" },
    { title: "Colleges Program", href: "/colleges" },
    { title: "Industries Served", href: "/industries" },
  ];

  const companyDropdown = [
    { title: "About Us", href: "/about" },
    { title: "Founder Profile", href: "/founder" },
    { title: "Robotics in Coimbatore", href: "/robotics-company-in-coimbatore" },
    { title: "Achievements Hub", href: "/#achievements" },
    { title: "Visual Gallery", href: "/gallery" },
  ];

  const handleDropdownToggle = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-white border-b border-[#E5E5E5] shadow-xs text-[#111111] h-20 flex items-center">
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
            <span className="text-lg sm:text-xl font-black tracking-tighter text-[#111111] uppercase">
              TAMIZH <span className="text-[#FF6B00]">TECH</span>
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.25em] font-black text-gray-400 mt-0.5">Robotics Company</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation with Hover Dropdowns */}
        <nav className="hidden xl:flex items-center justify-center gap-8 flex-grow">
          <Link href="/" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors">
            Home
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-[#FF6B00] flex items-center gap-1 transition-colors">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </span>
            <div className="absolute top-[72px] left-1/2 -translate-x-1/2 bg-white border border-[#E5E5E5] shadow-xl rounded-xl py-4 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left">
              {productsDropdown.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="block px-6 py-2.5 text-[10px] font-black uppercase tracking-wider text-gray-500 hover:text-[#FF6B00] hover:bg-[#FAFAFA] transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-[#FF6B00] flex items-center gap-1 transition-colors">
              Solutions <ChevronDown className="w-3.5 h-3.5" />
            </span>
            <div className="absolute top-[72px] left-1/2 -translate-x-1/2 bg-white border border-[#E5E5E5] shadow-xl rounded-xl py-4 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left">
              {solutionsDropdown.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="block px-6 py-2.5 text-[10px] font-black uppercase tracking-wider text-gray-500 hover:text-[#FF6B00] hover:bg-[#FAFAFA] transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/internship" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors">
            Training
          </Link>

          {/* Company Dropdown */}
          <div 
            className="relative py-6 cursor-pointer group"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-[#FF6B00] flex items-center gap-1 transition-colors">
              Company <ChevronDown className="w-3.5 h-3.5" />
            </span>
            <div className="absolute top-[72px] left-1/2 -translate-x-1/2 bg-white border border-[#E5E5E5] shadow-xl rounded-xl py-4 w-60 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left">
              {companyDropdown.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="block px-6 py-2.5 text-[10px] font-black uppercase tracking-wider text-gray-500 hover:text-[#FF6B00] hover:bg-[#FAFAFA] transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right: Desktop Actions */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <Link href="/contact" className="btn-primary shadow-lg py-3 px-6 text-xs font-bold">
            Get Quote <MoveRight className="w-4 h-4 ml-3" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setOpen(!isOpen)} className="text-[#111111] p-2 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-[#E5E5E5] shadow-2xl h-[calc(100vh-80px)] overflow-y-auto p-8 xl:hidden animate-in slide-in-from-top-4 text-left">
          <div className="flex flex-col gap-6">
            
            {/* Home */}
            <div className="border-b border-[#F0F0F0] pb-2">
              <Link href="/" className="text-lg font-black tracking-tighter text-[#111111] uppercase block" onClick={() => setOpen(false)}>
                Home
              </Link>
            </div>

            {/* Products Accordion */}
            <div className="border-b border-[#F0F0F0] pb-2">
              <button 
                onClick={() => handleDropdownToggle("products")}
                className="w-full flex justify-between items-center text-lg font-black tracking-tighter text-[#111111] uppercase"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "products" && (
                <div className="pl-4 mt-3 space-y-2 border-l border-[#FF6B00]">
                  {productsDropdown.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="block text-[11px] font-black text-gray-400 uppercase tracking-widest py-1.5"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-[#F0F0F0] pb-2">
              <button 
                onClick={() => handleDropdownToggle("solutions")}
                className="w-full flex justify-between items-center text-lg font-black tracking-tighter text-[#111111] uppercase"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "solutions" && (
                <div className="pl-4 mt-3 space-y-2 border-l border-[#FF6B00]">
                  {solutionsDropdown.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="block text-[11px] font-black text-gray-400 uppercase tracking-widest py-1.5"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training */}
            <div className="border-b border-[#F0F0F0] pb-2">
              <Link href="/internship" className="text-lg font-black tracking-tighter text-[#111111] uppercase block" onClick={() => setOpen(false)}>
                Training
              </Link>
            </div>

            {/* Company Accordion */}
            <div className="border-b border-[#F0F0F0] pb-2">
              <button 
                onClick={() => handleDropdownToggle("company")}
                className="w-full flex justify-between items-center text-lg font-black tracking-tighter text-[#111111] uppercase"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "company" && (
                <div className="pl-4 mt-3 space-y-2 border-l border-[#FF6B00]">
                  {companyDropdown.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="block text-[11px] font-black text-gray-400 uppercase tracking-widest py-1.5"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="border-b border-[#F0F0F0] pb-2">
              <Link href="/contact" className="text-lg font-black tracking-tighter text-[#111111] uppercase block" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="pt-6 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary w-full py-4 text-xs font-bold flex items-center justify-center" onClick={() => setOpen(false)}>Get Quote</Link>
              <a 
                href="https://wa.me/918148045030" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary w-full py-4 text-xs font-bold flex items-center justify-center border-[#D1D1D1] text-[#111111]"
                onClick={() => setOpen(false)}
              >
                Talk To Expert
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header1 };
