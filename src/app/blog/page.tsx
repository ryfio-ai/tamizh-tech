"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

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
    <div className="bg-white pt-32 pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
            Research & Insights
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-secondary leading-tight">
            The Technical Logbook.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
            Read engineering briefs, project writeups, and technical tutorials from our systems architects in Coimbatore.
          </p>
        </div>

        {/* Featured Post */}
        {featuredArticle && activeCategory === "All" && search === "" && (
          <div className="mb-24 border border-border bg-bg-secondary rounded-2xl overflow-hidden grid lg:grid-cols-2 group hover:border-primary transition-colors duration-300">
            {/* Image Banner */}
            <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden bg-white">
              <img 
                src={featuredArticle.img} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/15 px-2.5 py-1 rounded">
                  Featured: {featuredArticle.category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary uppercase leading-none pt-2">
                  {featuredArticle.title}
                </h3>
                <p className="text-text-secondary text-sm font-medium leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border/80">
                <div className="flex gap-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {featuredArticle.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}</span>
                </div>
                
                <Link href={`/blog/${featuredArticle.slug}`} className="text-xs font-bold text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-border pb-8 mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "text-text-muted hover:text-secondary hover:bg-bg-secondary"
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
              className="w-full pl-9 pr-4 py-2 text-xs border border-border rounded-lg bg-bg-secondary focus:outline-none focus:border-primary font-medium"
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
                className="border border-border bg-white rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-primary transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full overflow-hidden bg-bg-secondary">
                  <img 
                    src={art.img} 
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-[9px] font-bold text-accent uppercase tracking-widest bg-accent/20 border border-accent/30 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold tracking-tight text-secondary group-hover:text-primary transition-colors uppercase leading-tight">
                      {art.title}
                    </h4>
                    <p className="text-text-secondary text-xs font-medium leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/80">
                    <div className="flex gap-3 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                      <span>{art.author}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <Link href={`/blog/${art.slug}`} className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter Signup Panel */}
        <div className="bg-bg-secondary border border-border p-12 lg:p-16 rounded-2xl flex flex-col lg:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-extrabold text-secondary tracking-tighter uppercase leading-none">
              Stay calibrated.
            </h3>
            <p className="text-text-secondary font-medium leading-relaxed text-sm">
              Get technical logs, new microcontroller syllabus guidelines, and prototype walkthroughs straight to your inbox monthly.
            </p>
          </div>
          <div className="relative z-10 w-full lg:w-fit shrink-0">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" required placeholder="name@domain.com"
                className="px-3.5 py-2.5 text-xs border border-border rounded-lg bg-white focus:outline-none focus:border-primary font-medium w-full lg:w-64"
              />
              <button type="submit" className="btn-primary py-2.5 px-6 text-xs font-semibold rounded-lg shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
