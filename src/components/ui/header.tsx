"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Cpu, Globe, Rocket, ShieldCheck, Layers, Layout, Kanban, Smartphone, Database, GraduationCap, Flame, PhoneCall, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Services",
            description: "Advanced technological implementations for future-ready industries.",
            sections: [
                {
                    label: "Core Engineering",
                    items: [
                        { title: "Robotics Development", href: "/services#robotics", icon: <Rocket className="w-4 h-4 text-primary" /> },
                        { title: "Artificial Intelligence", href: "/services#ai", icon: <Cpu className="w-4 h-4 text-accent" /> },
                        { title: "Drone Technology", href: "/services#drone", icon: <Flame className="w-4 h-4 text-primary" /> },
                        { title: "IoT & Embedded Systems", href: "/services#iot", icon: <Globe className="w-4 h-4 text-accent" /> },
                    ]
                },
                {
                    label: "Automation & Training",
                    items: [
                        { title: "Industrial Automation", href: "/services#automation", icon: <ShieldCheck className="w-4 h-4 text-primary" /> },
                        { title: "STEM Labs Setup", href: "/services#stem", icon: <GraduationCap className="w-4 h-4 text-accent" /> },
                        { title: "Corporate Training", href: "/services#corporate", icon: <Layers className="w-4 h-4 text-primary" /> },
                        { title: "Consulting Services", href: "/services#consulting", icon: <Database className="w-4 h-4 text-accent" /> },
                    ]
                }
            ]
        },
        {
            title: "Courses",
            description: "Specialized technical paths to accelerate your career.",
            items: [
                { title: "School Students Track", href: "/courses#school" },
                { title: "College Students Track", href: "/courses#college" },
                { title: "Professional Certifications", href: "/courses#professionals" },
                { title: "Faculty Development Programs", href: "/courses#faculty" },
                { title: "Summer Camp Programs", href: "/courses#camp" },
            ],
        },
        {
            title: "Projects",
            description: "A showcase of our research, industrial installations, and student projects.",
            items: [
                { title: "Student Projects Portfolio", href: "/projects#student" },
                { title: "Industrial Implementations", href: "/projects#industrial" },
                { title: "R&D and AI Prototypes", href: "/projects#research" },
            ],
        },
        {
            title: "Gallery",
            href: "/gallery",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Careers",
            href: "/careers",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ];

    return (
        <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
            scrolled 
                ? "bg-white/80 backdrop-blur-md border-b border-border/80 shadow-sm h-16" 
                : "bg-white border-b border-border-light/40 h-20"
        } flex items-center`}>
            <div className="w-full max-w-[1440px] mx-auto px-6 xl:px-12 flex justify-between items-center h-full">
                
                {/* Left: Logo Section */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                        <Image
                            src="/logo/TTRC LOGO.png"
                            alt="TTRC Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold tracking-tighter text-secondary">
                            TamizhTech<span className="text-primary font-black">.</span>
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-text-secondary">Robotics Company</span>
                    </div>
                </Link>

                {/* Center: Desktop Navigation */}
                <nav className="hidden lg:flex items-center justify-center flex-grow mx-6">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <NavigationMenuLink href={item.href} className="px-3 py-2 text-xs font-semibold tracking-wide text-text-secondary hover:text-primary transition-colors">
                                            {item.title}
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="px-3 py-2 text-xs font-semibold tracking-wide text-text-secondary hover:text-primary bg-transparent transition-colors">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="p-0 border border-border bg-white rounded-md shadow-lg">
                                                <div className="w-[580px] grid grid-cols-[1fr_2fr] overflow-hidden">
                                                    <div className="bg-bg-secondary p-6 flex flex-col justify-between border-r border-border">
                                                        <div>
                                                            <h4 className="text-lg font-bold tracking-tight text-secondary uppercase mb-2">{item.title}</h4>
                                                            <p className="text-xs text-text-secondary leading-relaxed font-medium">{item.description}</p>
                                                        </div>
                                                        <div className="flex flex-col gap-2 mt-6">
                                                            <Button className="btn-primary w-full py-2.5 text-xs font-semibold rounded-sm h-auto" asChild>
                                                                <Link href="/contact">Get in Touch</Link>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="p-5">
                                                        {item.sections ? (
                                                            <div className="grid grid-cols-2 gap-6">
                                                                 {item.sections.map((section) => (
                                                                    <div key={section.label} className="space-y-3">
                                                                        <h5 className="text-[10px] font-black text-primary uppercase tracking-widest">{section.label}</h5>
                                                                        <div className="space-y-1">
                                                                            {section.items.map((subItem) => (
                                                                                <Link key={subItem.title} href={subItem.href} className="flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors py-1 group">
                                                                                    <span className="opacity-70 group-hover:opacity-100">{subItem.icon}</span>
                                                                                    <span>{subItem.title}</span>
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="grid grid-cols-1 gap-1">
                                                                {item.items?.map((subItem) => (
                                                                    <Link key={subItem.title} href={subItem.href} className="flex justify-between items-center px-3 py-2.5 hover:bg-bg-secondary rounded-sm group transition-all">
                                                                        <span className="text-xs font-medium text-text-secondary group-hover:text-primary">{subItem.title}</span>
                                                                        <MoveRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Right: Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4 shrink-0">
                    <Link href="/contact" className="btn-primary flex gap-2">
                        Get Started <MoveRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setOpen(!isOpen)} className="text-secondary hover:bg-bg-secondary">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-border shadow-lg h-[calc(100vh-64px)] overflow-y-auto p-6 lg:hidden animate-in fade-in duration-200">
                    <div className="flex flex-col gap-6">
                        {navigationItems.map((item) => (
                            <div key={item.title} className="border-b border-border/40 pb-4">
                                {item.href ? (
                                    <Link href={item.href} className="text-xl font-bold text-secondary hover:text-primary" onClick={() => setOpen(false)}>
                                        {item.title}
                                    </Link>
                                ) : (
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">{item.title}</p>
                                        <div className="grid grid-cols-1 gap-2 pl-3 border-l border-border/80">
                                            {item.sections ? (
                                                item.sections.flatMap(s => s.items).map((subItem) => (
                                                    <Link key={subItem.title} href={subItem.href} className="text-sm font-medium text-text-secondary hover:text-primary" onClick={() => setOpen(false)}>
                                                        {subItem.title}
                                                    </Link>
                                                ))
                                            ) : (
                                                item.items?.map((subItem) => (
                                                    <Link key={subItem.title} href={subItem.href} className="text-sm font-medium text-text-secondary hover:text-primary" onClick={() => setOpen(false)}>
                                                        {subItem.title}
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 flex flex-col gap-3">
                            <Link href="/contact" className="btn-primary w-full py-3 text-sm flex items-center justify-center" onClick={() => setOpen(false)}>Get Started</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };

