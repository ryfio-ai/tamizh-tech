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
import { Menu, MoveRight, X, Cpu, Globe, Rocket, ShieldCheck, Layers, Layout, Kanban, Smartphone, Database } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Solutions",
            description: "End-to-end engineering for hardware and software systems.",
            sections: [
                {
                    label: "Industrial & Robotics",
                    items: [
                        { title: "Industrial Automation", href: "/solutions#automation", icon: <ShieldCheck className="w-4 h-4" /> },
                        { title: "Robotics Integration", href: "/solutions#robotics", icon: <Rocket className="w-4 h-4" /> },
                        { title: "AI Vision Systems", href: "/solutions#ai-vision", icon: <Cpu className="w-4 h-4" /> },
                        { title: "IoT & Monitoring", href: "/solutions#iot", icon: <Globe className="w-4 h-4" /> },
                    ]
                },
                {
                    label: "Software & Digital",
                    items: [
                        { title: "Web Applications", href: "/solutions#web", icon: <Layout className="w-4 h-4" /> },
                        { title: "Mobile Platforms", href: "/solutions#mobile", icon: <Smartphone className="w-4 h-4" /> },
                        { title: "SaaS Product Dev", href: "/solutions#saas", icon: <Layers className="w-4 h-4" /> },
                        { title: "B2B Software", href: "/solutions#b2b", icon: <Database className="w-4 h-4" /> },
                    ]
                }
            ]
        },
        {
            title: "Industries",
            description: "Sector-specific implementation and operational tools.",
            items: [
                { title: "Manufacturing", href: "/industries#manufacturing" },
                { title: "OEM & Engineering", href: "/industries#oem" },
                { title: "Logistics & Warehouse", href: "/industries#logistics" },
                { title: "R&D Labs", href: "/industries#rd" },
                { title: "Educational Institutions", href: "/industries#education" },
            ],
        },
        {
            title: "Products",
            href: "/products",
        },
        {
            title: "Company",
            description: "Engineering excellence since inception.",
            items: [
                { title: "About Us", href: "/about" },
                { title: "Our Team", href: "/team" },
                { title: "Case Studies", href: "/case-studies" },
                { title: "Careers", href: "/careers" },
                { title: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Join Club",
            href: "/robotics-club",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-white border-b border-border-light shadow-sm text-text-primary h-20 flex items-center">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-10 h-10 bg-primary-main flex items-center justify-center rounded-xs group-hover:bg-primary-hover transition-colors">
                            <span className="font-black text-white text-xl uppercase tracking-tighter">TT</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-heading font-black text-xl tracking-tighter text-text-primary uppercase">
                                Tamizh <span className="text-primary-main">Tech</span>
                            </span>
                            <span className="text-[9px] font-black tracking-[0.3em] text-text-muted uppercase mt-0.5">Pvt Ltd | Engineering & Software</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        {item.href ? (
                                            <NavigationMenuLink href={item.href} className="px-4 py-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-primary-main transition-colors">
                                                {item.title}
                                            </NavigationMenuLink>
                                        ) : (
                                            <>
                                                <NavigationMenuTrigger className="px-4 py-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-primary-main bg-transparent transition-colors">
                                                    {item.title}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className="p-0 border border-border-light shadow-2xl bg-white rounded-xs">
                                                    <div className="w-[600px] grid grid-cols-[1fr_2fr] overflow-hidden">
                                                        <div className="bg-bg-page p-8 flex flex-col justify-between border-r border-border-light">
                                                            <div>
                                                                <h4 className="text-xl font-black tracking-tighter text-text-primary uppercase mb-3">{item.title}</h4>
                                                                <p className="text-xs text-text-secondary font-medium leading-relaxed italic">{item.description}</p>
                                                            </div>
                                                            <div className="flex flex-col gap-3 mt-auto">
                                                                <Button className="btn-primary w-full py-4 text-[10px] font-black uppercase tracking-widest h-auto" asChild>
                                                                    <Link href="/contact">Request Proposal</Link>
                                                                </Button>
                                                                <Link href="/robotics-club" className="text-[9px] font-black uppercase tracking-widest text-text-muted hover:text-primary-main transition-colors text-center py-2 border border-border-light rounded-xs">
                                                                    Join Our Club
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="p-6">
                                                            {item.sections ? (
                                                                <div className="grid grid-cols-2 gap-8">
                                                                    {item.sections.map((section) => (
                                                                        <div key={section.label} className="space-y-4">
                                                                            <h5 className="text-[10px] font-black text-primary-main uppercase tracking-[0.2em] mb-4">{section.label}</h5>
                                                                            <div className="space-y-2">
                                                                                {section.items.map((subItem) => (
                                                                                    <Link key={subItem.title} href={subItem.href} className="flex items-center gap-3 text-xs font-bold text-text-secondary hover:text-primary-main transition-colors py-1 group">
                                                                                        <span className="text-text-muted group-hover:text-primary-main transition-colors">{subItem.icon}</span>
                                                                                        {subItem.title === "Robotics Integration" ? "Tamil Robotics Club (TRC)" : subItem.title}
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <div className="grid grid-cols-1 gap-2">
                                                                    {item.items?.map((subItem) => (
                                                                        <Link key={subItem.title} href={subItem.href} className="flex justify-between items-center px-4 py-3 hover:bg-bg-page rounded-xs group transition-all">
                                                                            <span className="text-xs font-bold text-text-secondary group-hover:text-primary-main">{subItem.title}</span>
                                                                            <MoveRight className="w-4 h-4 text-border-medium group-hover:text-primary-main group-hover:translate-x-1 transition-all" />
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
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/contact" className="btn-primary shadow-lg scale-90 xl:scale-100">
                        Request Proposal <MoveRight className="w-4 h-4 ml-3" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setOpen(!isOpen)} className="text-text-primary">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-t border-border-light shadow-2xl h-[calc(100vh-80px)] overflow-y-auto p-8 lg:hidden animate-in slide-in-from-top-4">
                    <div className="flex flex-col gap-10">
                        {navigationItems.map((item) => (
                            <div key={item.title}>
                                {item.href ? (
                                    <Link href={item.href} className="text-3xl font-black tracking-tighter text-text-primary uppercase" onClick={() => setOpen(false)}>
                                        {item.title}.
                                    </Link>
                                ) : (
                                    <div className="space-y-6">
                                        <p className="text-[10px] font-black text-primary-main uppercase tracking-[0.4em]">{item.title}</p>
                                        <div className="grid grid-cols-1 gap-4 pl-4 border-l border-border-light">
                                            {item.sections ? (
                                                item.sections.flatMap(s => s.items).map((subItem) => (
                                                    <Link key={subItem.title} href={subItem.href} className="text-lg font-bold text-text-secondary uppercase tracking-tight" onClick={() => setOpen(false)}>
                                                        {subItem.title}
                                                    </Link>
                                                ))
                                            ) : (
                                                item.items?.map((subItem) => (
                                                    <Link key={subItem.title} href={subItem.href} className="text-lg font-bold text-text-secondary uppercase tracking-tight" onClick={() => setOpen(false)}>
                                                        {subItem.title}
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-8 border-t border-border-light flex flex-col gap-4">
                            <Link href="/contact" className="btn-primary w-full py-6 text-sm flex items-center justify-center" onClick={() => setOpen(false)}>Request Proposal</Link>
                            <Link href="/robotics-club" className="btn-secondary w-full py-6 text-sm flex items-center justify-center border-border-medium text-text-primary" onClick={() => setOpen(false)}>Join Our Club</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };

