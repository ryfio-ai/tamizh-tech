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
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Robotics Club",
            href: "/robotics-club",
            description: "Join TamizhTech's community of builders.",
        },
        {
            title: "Solutions",
            description: "From education to industrial automation.",
            items: [
                {
                    title: "Products",
                    href: "/products",
                },
                {
                    title: "Services",
                    href: "/services",
                },
                {
                    title: "Clients",
                    href: "/clients",
                },
                {
                    title: "Courses",
                    href: "/courses",
                },
                {
                    title: "Gallery",
                    href: "/gallery",
                },
            ],
        },
        {
            title: "Company",
            description: "Learn more about our mission and team.",
            items: [
                {
                    title: "About us",
                    href: "/about",
                },
                {
                    title: "Team",
                    href: "/team",
                },
                {
                    title: "Careers",
                    href: "/careers",
                },
                {
                    title: "Contact us",
                    href: "/contact",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-white border-b border-border-light shadow-md text-text-primary">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-2 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost" className="text-text-secondary hover:text-primary-main hover:bg-bg-elevated font-medium">
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm text-text-secondary hover:text-primary-main bg-transparent hover:bg-bg-elevated data-[state=open]:bg-bg-elevated transition-all">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-bg-primary border border-border-light shadow-xl">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-bold text-text-primary">{item.title}</p>
                                                            <p className="text-text-tertiary text-sm mt-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10 bg-primary-main hover:bg-primary-hover text-text-on-primary rounded-md shadow-sm" asChild>
                                                            <Link href="/contact">Book a call</Link>
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center text-text-secondary hover:text-primary-main hover:bg-bg-elevated py-2.5 px-4 rounded transition-colors"
                                                            >
                                                                <span className="font-medium">{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-text-muted" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
                        <Image
                            src="/logo/TTRC LOGO.png"
                            alt="TamizhTech Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <span className="font-heading font-bold text-lg tracking-wider text-text-primary group-hover:text-primary-main transition-colors hidden sm:block">
                            TAMIZH<span className="text-primary-main">TECH</span>
                        </span>
                    </Link>
                </div>
                <div className="flex justify-end w-full gap-4 items-center">
                    <Button variant="ghost" className="hidden md:inline-flex text-primary-main border border-primary-light hover:bg-primary-light hover:text-primary-dark font-semibold" asChild>
                        <Link href="https://wa.me/918148045030" target="_blank">WhatsApp</Link>
                    </Button>
                    <div className="border-r h-8 border-border-light hidden md:inline"></div>
                    <Button variant="ghost" className="hidden sm:inline-flex border border-border-light text-text-secondary hover:bg-bg-elevated hover:text-text-primary font-semibold" asChild>
                        <Link href="/team">Team</Link>
                    </Button>
                    <Button className="bg-primary-main hover:bg-primary-hover text-text-on-primary font-bold shadow-sm rounded-md" asChild>
                        <Link href="/robotics-club/join">Join Club</Link>
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-center justify-end">
                    <Button variant="ghost" size="icon" className="text-text-secondary hover:text-primary-main hover:bg-bg-elevated" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t border-border-light flex flex-col w-full left-0 bg-white shadow-xl py-6 px-4 container gap-6 z-50">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-3">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center py-2 group"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-lg font-medium group-hover:text-primary-main transition-colors">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-text-muted group-hover:text-primary-main transition-all" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg font-semibold text-text-primary border-b border-border-light pb-1">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center pl-4 py-2 hover:bg-bg-elevated rounded group transition-colors"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-text-secondary group-hover:text-primary-main">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1 group-hover:text-primary-main transition-all" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border-light">
                                <Button className="w-full bg-primary-main text-text-on-primary font-bold py-6 rounded-md shadow-md" asChild onClick={() => setOpen(false)}>
                                    <Link href="/robotics-club/join">Join Tamizh Robotics Club</Link>
                                </Button>
                                <Button variant="outline" className="w-full border-border-medium text-text-secondary py-6 rounded-md" asChild onClick={() => setOpen(false)}>
                                    <Link href="https://wa.me/918148045030" target="_blank">WhatsApp Us</Link>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
