"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Robotics Club', path: '/robotics-club' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Clients', path: '/clients' },
  { name: 'Courses', path: '/courses' },
  { name: 'Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b bg-white',
        isScrolled
          ? 'border-gray-200 shadow-md'
          : 'border-gray-100 shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src={require("@/public/logo/TTRC LOGO.png")}
            alt="TamizhTech Logo"
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="font-heading font-bold text-lg tracking-wider text-gray-900 group-hover:text-cyan-600 transition-colors hidden sm:block">
            TAMIZH<span className="text-cyan-600">TECH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-all hover:text-cyan-600',
                pathname === item.path
                  ? 'text-cyan-600 font-bold border-b-2 border-cyan-500 pb-0.5'
                  : 'text-gray-700'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="https://wa.me/918148045030"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-emerald-600 border border-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-50 transition-all"
          >
            WhatsApp Us
          </Link>
          <Link
            href="/robotics-club"
            className="text-sm font-bold text-white bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-700 transition-all shadow-sm"
          >
            Join Club
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 p-2 hover:text-cyan-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-5 flex flex-col gap-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'block text-base font-medium py-2.5 border-b border-gray-100 last:border-0',
                pathname === item.path ? 'text-cyan-600 font-bold' : 'text-gray-700'
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-gray-100">
            <Link
              href="https://wa.me/918148045030"
              target="_blank"
              className="text-center font-semibold text-emerald-600 border border-emerald-500 py-3 rounded-md hover:bg-emerald-50 transition-all"
            >
              WhatsApp Us
            </Link>
            <Link
              href="/robotics-club"
              className="text-center font-bold text-white bg-cyan-600 py-3 rounded-md hover:bg-cyan-700 transition-all"
            >
              Join Robotics Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
