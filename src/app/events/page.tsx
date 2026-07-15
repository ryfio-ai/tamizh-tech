"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import { events } from "@/data/events";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const categories = ["All", "Workshop", "Competition", "Webinar", "Bootcamp"];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? events 
    : events.filter((e) => e.type === activeCategory);

  return (
    <div>
      <PageHero
        title="Events & Technical Workshops"
        subtitle="Join our interactive robotics bootcamps, national championships, and webinars to gain hands-on technical skills."
        breadcrumbActive="Events"
      />

      <section className="section bg-white py-24 text-left">
        <div className="container px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-accent text-white border border-accent shadow-sm"
                    : "bg-subtle border border-border text-text-secondary hover:text-accent hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((event) => (
                <Card 
                  key={event.id}
                  className="p-0 overflow-hidden bg-white border border-border rounded-lg flex flex-col md:flex-row hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                >
                  {/* Banner Image Container */}
                  <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto min-h-[220px] bg-subtle overflow-hidden">
                    <Image
                      src={event.banner}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {event.type}
                    </div>
                  </div>

                  {/* Info Details */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between text-left">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                          <Calendar className="w-4 h-4 text-accent shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                          <MapPin className="w-4 h-4 text-accent shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                          <Tag className="w-4 h-4 text-accent shrink-0" />
                          <span>{event.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/events/${event.id}`} className="block w-full">
                        <Button variant="primary" className="w-full justify-center font-bold text-white">
                          Register Now <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-subtle border border-border rounded-lg max-w-xl mx-auto">
              <Calendar className="w-12 h-12 text-text-muted mx-auto mb-4 animate-pulse" />
              <h4 className="text-lg font-bold uppercase text-text-primary">No events found</h4>
              <p className="text-xs text-text-muted uppercase tracking-widest mt-1">Check back later for new scheduled programs.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
