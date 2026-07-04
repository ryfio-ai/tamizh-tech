"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Clock, User } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

interface Article {
  slug: string;
  title: string;
  category: string;
  img: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
}

const articlesData: Article[] = [
  {
    slug: "future-of-kinematics-ros2",
    title: "The Future of Kinematics in ROS2 Frameworks",
    category: "Robotics",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    date: "June 28, 2026",
    author: "Dr. K. Senthil",
    readTime: "8 min read",
    summary: "An in-depth analysis of high-torque trajectory planning, inverse kinematics simulation, and joint velocity profiling using modern ROS2 micro-controllers."
  },
  {
    slug: "tinyml-edge-vision-shopfloor",
    title: "Deploying TinyML Vision Models on Shop Floor Edge Nodes",
    category: "Artificial Intelligence",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    date: "June 15, 2026",
    author: "Arjun Prasad",
    readTime: "6 min read",
    summary: "How to compile deep learning vision architectures for low-power ESP32 and ARM edge nodes to perform real-time defect sorting under 10ms latency."
  },
  {
    slug: "uav-flight-path-autonomous-telemetry",
    title: "UAV Flight Path Optimization via Autonomous Telemetry",
    category: "Drones",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    date: "May 22, 2026",
    author: "Meera Nair",
    readTime: "5 min read",
    summary: "Leveraging PX4 autopilot waypoint scripting and multispectral sensors to automate precision agricultural mapping projects."
  },
  {
    slug: "iot-thermal-mapping-cnc-spindles",
    title: "Real-time Temperature Mapping of Legacy CNC Spindles",
    category: "IoT",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    date: "May 08, 2026",
    author: "R. Krishnan",
    readTime: "7 min read",
    summary: "Retrofitting ESP32 temperature arrays and MQTT data routers to log machinery heating footprints and prevent unexpected operational wear."
  }
];

const categories = ["All", "Robotics", "Artificial Intelligence", "Drones", "IoT"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = articlesData.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase()) || 
                          art.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articlesData[0];

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="The Technical Logbook"
        subtitle="Read engineering briefs, project writeups, and technical tutorials from our systems architects in Coimbatore."
        breadcrumbActive="Blog"
      />

      <section className="section bg-white py-24">
        <div className="container px-6">
          {/* Featured Post */}
          {featuredArticle && activeCategory === "All" && search === "" && (
            <div className="mb-24 border border-border bg-subtle rounded-3xl overflow-hidden grid lg:grid-cols-2 group hover:border-accent/20 transition-all duration-300">
              {/* Image Banner */}
              <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden bg-subtle">
                <img 
                  src={featuredArticle.img} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <span className="bg-accent/5 text-accent px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase">
                    Featured: {featuredArticle.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-text-primary uppercase leading-tight pt-2">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border/80">
                  <div className="flex gap-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent" /> {featuredArticle.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" /> {featuredArticle.readTime}</span>
                  </div>
                  
                  <Link href={`/blog/${featuredArticle.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
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
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-subtle text-text-secondary hover:text-accent border border-border hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <span className="absolute inset-y-0 left-3 flex items-center text-text-muted">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text" placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-border rounded-full bg-subtle focus:outline-none focus:border-accent font-medium transition-colors"
                value={search} onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((art) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={art.slug}
                >
                  <Card className="p-0 overflow-hidden h-full flex flex-col justify-between hover:border-accent/20 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]">
                    <div>
                      {/* Visual Header */}
                      <div className="relative h-48 w-full overflow-hidden bg-subtle">
                        <img 
                          src={art.img} 
                          alt={art.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold text-accent tracking-wide uppercase shadow-sm">
                          {art.category}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-text-primary uppercase leading-tight mb-2">
                          {art.title}
                        </h4>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                          {art.summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-border/60 flex items-center justify-between">
                      <div className="flex gap-3 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                        <span>{art.author}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>

                      <Link href={`/blog/${art.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Newsletter Signup Panel */}
          <div className="bg-subtle border border-border p-12 lg:p-16 rounded-3xl flex flex-col lg:flex-row items-center gap-8 justify-between relative overflow-hidden">
            <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
            <div className="relative z-10 space-y-4 max-w-xl text-center lg:text-left">
              <h3 className="text-3xl font-extrabold text-text-primary tracking-tight leading-none">
                Stay calibrated.
              </h3>
              <p className="text-text-muted leading-relaxed text-sm">
                Get technical logs, new microcontroller syllabus guidelines, and prototype walkthroughs straight to your inbox monthly.
              </p>
            </div>
            <div className="relative z-10 w-full lg:w-fit shrink-0">
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input 
                  type="email" required placeholder="name@domain.com"
                  className="px-4 py-2.5 text-xs border border-border rounded-full bg-white focus:outline-none focus:border-accent font-medium w-full lg:w-64 transition-colors"
                />
                <Button type="submit" variant="primary" size="sm" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
