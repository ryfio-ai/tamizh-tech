"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Clock, User, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogCategorySlug } from "@/data/blogPosts";
import { getBlogUrl, getBlogCategoryUrl } from "@/lib/routing";
import NewsletterSubscribe from "@/components/forms/NewsletterSubscribe";

const categories = ["All", "Robotics", "Industrial Automation", "Education", "Artificial Intelligence"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = blogPosts.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) || 
      art.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = blogPosts[0];

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="The Technical Logbook"
        subtitle="Read engineering briefs, project writeups, and technical tutorials from our systems architects in Coimbatore."
        breadcrumbActive="Blog"
      />

      <section className="section bg-white py-24">
        <div className="container px-6 max-w-7xl mx-auto">
          
          {/* Featured Article Banner */}
          {featuredArticle && (
            <div className="mb-20 rounded-3xl overflow-hidden border border-border bg-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-7 h-72 lg:h-[420px] relative overflow-hidden">
                <Image
                  src={featuredArticle.img}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black font-heading text-text-primary uppercase tracking-tight mb-4 leading-snug">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border/80">
                  <div className="flex gap-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent" /> {featuredArticle.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" /> {featuredArticle.readTime}</span>
                  </div>
                  
                  <Link 
                    href={getBlogUrl(featuredArticle.categorySlug || getBlogCategorySlug(featuredArticle.category), featuredArticle.slug)} 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Filter and Search Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-border pb-8 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-accent text-white shadow-sm"
                      : "bg-subtle text-text-secondary hover:bg-border/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search technical articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-subtle border border-border rounded-full pl-10 pr-4 py-2 text-xs font-semibold text-text-primary focus:outline-none focus:border-accent"
              />
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-left">
            <AnimatePresence>
              {filteredArticles.map((art) => {
                const categorySlug = art.categorySlug || getBlogCategorySlug(art.category);
                const blogDetailHref = getBlogUrl(categorySlug, art.slug);

                return (
                  <motion.div
                    key={art.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="flex flex-col h-full overflow-hidden border-border hover:border-accent/40 transition-all group">
                      <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                        <Image
                          src={art.img}
                          alt={art.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-text-primary">
                          {art.category}
                        </span>
                      </div>

                      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                            {new Date(art.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </span>
                          <h3 className="text-lg font-bold font-heading uppercase text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2">
                            {art.title}
                          </h3>
                          <p className="text-xs text-text-secondary leading-relaxed mt-2 line-clamp-3">
                            {art.summary}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                          <div className="flex gap-2 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                            <span>{art.author}</span>
                            <span>•</span>
                            <span>{art.readTime}</span>
                          </div>

                          <Link href={blogDetailHref} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:translate-x-1 transition-transform">
                            Read <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Newsletter Box */}
          <div className="mt-16 bg-subtle border border-border/80 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="max-w-md">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                Engineering Intelligence
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-[#002B66] uppercase tracking-tight">
                Subscribe to TamizhTech Robotics Dispatch
              </h3>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                Receive practical insights on robot chassis design, PLC automation, and STEM curriculum once a month. No spam.
              </p>
            </div>
            <NewsletterSubscribe />
          </div>

        </div>
      </section>
    </div>
  );
}
