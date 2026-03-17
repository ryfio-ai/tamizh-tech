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
        <header className="w-full z-50 fixed top-0 left-0 bg-white border-b border-gray-200 shadow-sm text-gray-900">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-2 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost" className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 font-medium">
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm text-gray-700 hover:text-orange-500 bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-white border border-gray-200 shadow-xl">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-bold text-gray-900">{item.title}</p>
                                                            <p className="text-gray-500 text-sm mt-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10 bg-orange-500 hover:bg-orange-600 text-white" asChild>
                                                            <Link href="/contact">Book a call</Link>
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center text-gray-700 hover:text-orange-500 hover:bg-gray-50 py-2.5 px-4 rounded transition-colors"
                                                            >
                                                                <span className="font-medium">{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-gray-400" />
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
                        <span className="font-heading font-bold text-lg tracking-wider text-orange-500 group-hover:text-orange-400 transition-colors hidden sm:block">
                            TAMIZH<span className="text-orange-500">TECH</span>
                        </span>
                    </Link>
                </div>
                <div className="flex justify-end w-full gap-4 items-center">
                    <Button variant="ghost" className="hidden md:inline-flex text-orange-600 border border-orange-200 hover:bg-orange-50 hover:text-orange-700 font-semibold" asChild>
                        <Link href="https://wa.me/918148045030" target="_blank">WhatsApp</Link>
                    </Button>
                    <div className="border-r h-8 border-gray-200 hidden md:inline"></div>
                    <Button variant="ghost" className="hidden sm:inline-flex border border-gray-100 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold" asChild>
                        <Link href="/team">Team</Link>
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-sm" asChild>
                        <Link href="/robotics-club/join">Join Club</Link>
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-center justify-end">
                    <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-500 hover:bg-gray-50" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t border-gray-100 flex flex-col w-full left-0 bg-white shadow-xl py-6 px-4 container gap-6 z-50">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-3">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center py-2 group"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-lg font-medium group-hover:text-orange-500">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground group-hover:text-orange-500" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg font-semibold text-gray-900 border-b border-gray-50 pb-1">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center pl-4 py-2 hover:bg-gray-50 rounded group"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-gray-600 group-hover:text-orange-500">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1 group-hover:text-orange-500" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                                <Button className="w-full bg-orange-500 text-white" asChild onClick={() => setOpen(false)}>
                                    <Link href="/robotics-club/join">Join Tamizh Robotics Club</Link>
                                </Button>
                                <Button variant="outline" className="w-full" asChild onClick={() => setOpen(false)}>
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
