"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, CornerDownLeft, Box, Wrench, GraduationCap, FolderGit2, BookOpen, Calendar } from "lucide-react";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";
import { blogPosts, getBlogCategorySlug } from "@/data/blogPosts";
import { events } from "@/data/events";
import { getProductUrl, getCourseUrl, getProjectUrl, getBlogUrl, getEventUrl } from "@/lib/routing";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  type: "product" | "service" | "course" | "project" | "blog" | "event";
  category: string;
  title: string;
  subtitle: string;
  url: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Index and search items
  const results = useMemo<SearchResult[]>(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const matches: SearchResult[] = [];

    // 1. Services
    for (const s of services) {
      if (
        s.title.toLowerCase().includes(trimmed) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(trimmed)) ||
        s.desc.toLowerCase().includes(trimmed) ||
        s.features.some(f => f.toLowerCase().includes(trimmed))
      ) {
        matches.push({
          id: `svc-${s.id}`,
          type: "service",
          category: "Services",
          title: s.title,
          subtitle: s.subtitle || s.desc,
          url: s.href
        });
      }
    }

    // 2. Products
    for (const p of products) {
      if (!p.published) continue;
      if (
        p.name.toLowerCase().includes(trimmed) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(trimmed)) ||
        p.category.toLowerCase().includes(trimmed) ||
        (p.specs && p.specs.toLowerCase().includes(trimmed))
      ) {
        matches.push({
          id: `prod-${p.id}`,
          type: "product",
          category: "Products",
          title: p.name,
          subtitle: p.shortDescription || p.category,
          url: getProductUrl(p.categorySlug, p.slug)
        });
      }
    }

    // 3. Projects
    for (const pr of projects) {
      if (!pr.published) continue;
      if (
        pr.title.toLowerCase().includes(trimmed) ||
        pr.description.toLowerCase().includes(trimmed) ||
        (pr.techStack && pr.techStack.some((t: string) => t.toLowerCase().includes(trimmed))) ||
        (pr.technology && pr.technology.some((t: string) => t.toLowerCase().includes(trimmed)))
      ) {
        matches.push({
          id: `proj-${pr.id}`,
          type: "project",
          category: "Projects",
          title: pr.title,
          subtitle: pr.description || pr.category,
          url: getProjectUrl(pr.categorySlug, pr.slug)
        });
      }
    }

    // 4. Courses
    for (const c of courses) {
      if (!c.published) continue;
      const desc = c.description || c.desc || "";
      if (
        c.title.toLowerCase().includes(trimmed) ||
        desc.toLowerCase().includes(trimmed) ||
        c.cat.toLowerCase().includes(trimmed)
      ) {
        matches.push({
          id: `crs-${c.id}`,
          type: "course",
          category: "Courses",
          title: c.title,
          subtitle: desc || c.cat,
          url: getCourseUrl(c.categorySlug, c.slug)
        });
      }
    }

    // 5. Blog
    for (const b of blogPosts) {
      if (b.published === false) continue;
      const snippet = b.excerpt || b.summary || "";
      if (
        b.title.toLowerCase().includes(trimmed) ||
        snippet.toLowerCase().includes(trimmed) ||
        b.category.toLowerCase().includes(trimmed)
      ) {
        const catSlug = b.categorySlug || getBlogCategorySlug(b.category);
        matches.push({
          id: `blog-${b.slug}`,
          type: "blog",
          category: "Blog",
          title: b.title,
          subtitle: snippet,
          url: getBlogUrl(catSlug, b.slug)
        });
      }
    }

    // 6. Events
    for (const ev of events) {
      if (!ev.published) continue;
      if (
        ev.title.toLowerCase().includes(trimmed) ||
        ev.description.toLowerCase().includes(trimmed)
      ) {
        matches.push({
          id: `event-${ev.id}`,
          type: "event",
          category: "Events",
          title: ev.title,
          subtitle: ev.description,
          url: getEventUrl(ev.categorySlug, ev.slug)
        });
      }
    }

    return matches.slice(0, 15);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      const target = results[selectedIndex];
      if (target) {
        router.push(target.url);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "product":
        return <Box className="w-4 h-4 text-orange-500" />;
      case "service":
        return <Wrench className="w-4 h-4 text-blue-500" />;
      case "course":
        return <GraduationCap className="w-4 h-4 text-emerald-500" />;
      case "project":
        return <FolderGit2 className="w-4 h-4 text-purple-500" />;
      case "blog":
        return <BookOpen className="w-4 h-4 text-indigo-500" />;
      case "event":
        return <Calendar className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3 bg-white">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search products, services, 3D printing, courses, projects..."
            className="flex-1 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-400 border border-slate-200 rounded-md hover:text-slate-700 hover:bg-slate-50 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="py-10 px-6 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Popular Searches</p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {["3D Printing", "Laser Cutting", "PCB Services", "RC Robo Race", "FlySky", "Industrial Automation", "STEM Labs", "Robotics Club"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setQuery(tag);
                      setSelectedIndex(0);
                    }}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 border border-slate-200 hover:border-orange-200 rounded-lg transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 px-6 text-center text-slate-500">
              <p className="text-sm font-semibold">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for broader engineering terms like &ldquo;Robotics&rdquo;, &ldquo;3D Printing&rdquo;, or &ldquo;Courses&rdquo;.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                      isSelected ? "bg-orange-50/80 border border-orange-200/80 text-orange-950" : "hover:bg-slate-50 border border-transparent text-slate-700"
                    }`}
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-white border border-slate-200/70 shadow-2xs shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold truncate text-slate-900">{item.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                    {isSelected && (
                      <div className="hidden sm:flex items-center text-xs font-medium text-orange-600 shrink-0 self-center gap-1">
                        <span>Select</span>
                        <CornerDownLeft className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>ESC to close</span>
          </div>
          <span className="text-slate-400">Tamizh Tech Verified Search</span>
        </div>
      </div>
    </div>
  );
}
