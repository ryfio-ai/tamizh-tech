import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft, ArrowRight, Calendar, MapPin, Sparkles, Trophy } from "lucide-react";
import { getCategoryBySlug, getCategoriesByContentType } from "@/data/categories";
import { getEventsByCategorySlug, getEventBySlug, events, EventItem } from "@/data/events";
import { getEventUrl, getEventCategoryUrl } from "@/lib/routing";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const eventCats = getCategoriesByContentType("events");
  const catParams = eventCats.map((cat) => ({
    category: cat.slug,
  }));
  const legacyParams = events.map((e) => ({
    category: e.id,
  }));
  return [...catParams, ...legacyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("events", categorySlug);
  if (!category) {
    const legacyEvent = getEventBySlug(categorySlug);
    if (legacyEvent) {
      return {
        title: `${legacyEvent.title} | Tamizh Tech`,
        alternates: {
          canonical: `https://www.tamizhtech.in/events/${legacyEvent.categorySlug}/${legacyEvent.slug}`,
        },
      };
    }
    return {};
  }

  const canonicalUrl = `https://www.tamizhtech.in/events/${category.slug}`;

  return {
    title: `${category.seoTitle}`,
    description: category.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.seoTitle,
      description: category.seoDescription,
    }
  };
}

export default async function EventCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("events", categorySlug);

  if (!category) {
    // Check if this was a legacy event flat slug
    const legacyEvent = getEventBySlug(categorySlug);
    if (legacyEvent) {
      permanentRedirect(getEventUrl(legacyEvent.categorySlug, legacyEvent.slug));
    }
    notFound();
  }

  const categoryEvents = getEventsByCategorySlug(category.slug);
  const otherCategories = getCategoriesByContentType("events").filter(
    (c) => c.slug !== category.slug
  );

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Events", url: "https://www.tamizhtech.in/events" },
    { name: category.name, url: `https://www.tamizhtech.in/events/${category.slug}` },
  ];

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <Link href="/events" className="hover:text-accent transition-colors">
            Events
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <span className="text-accent truncate">{category.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all events
          </Link>
        </div>

        {/* Category Hero Header */}
        <header className="mb-12 text-left bg-gradient-to-r from-subtle via-white to-subtle p-8 md:p-12 rounded-3xl border border-border/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" /> Event Category
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] uppercase tracking-tight font-heading mb-4 leading-tight">
            {category.name}
          </h1>
          <p className="text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed font-sans">
            {category.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border/60 text-xs font-bold text-text-muted uppercase">
            <span>🎯 {categoryEvents.length} Upcoming Programs</span>
            <span>📍 Regional & National Tracks</span>
            <span>🏅 Official Certificates & Mentorship</span>
          </div>
        </header>

        {/* Events Grid */}
        <section aria-labelledby="events-heading" className="mb-16">
          <h2 id="events-heading" className="sr-only">Available {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {categoryEvents.map((event) => {
              const eventDetailHref = getEventUrl(category.slug, event.slug);

              return (
                <article
                  key={event.id}
                  className="rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative w-full h-52 bg-subtle/50 overflow-hidden border-b border-border/60">
                    <Image
                      src={event.banner}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-accent text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {event.type}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span>{new Date(event.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>

                      <h3 className="text-base font-extrabold font-heading text-[#002B66] uppercase tracking-tight group-hover:text-accent transition-colors leading-snug">
                        {event.title}
                      </h3>

                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-text-muted pt-1">
                        <MapPin className="w-3.5 h-3.5 text-text-muted shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border/60 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[9px] font-bold text-text-muted uppercase block">Registration</span>
                          <span className="text-sm font-black text-accent">{event.price}</span>
                        </div>
                        <span className="text-[10px] font-bold text-text-muted">
                          Capacity: {event.capacity}
                        </span>
                      </div>

                      <Link href={eventDetailHref} className="block w-full">
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="w-full justify-center gap-1.5 bg-[#002B66] hover:bg-[#001D47] text-white font-black text-[11px] py-2.5 uppercase tracking-wider rounded-xl shadow-xs"
                        >
                          View Schedule & Register <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Related Categories Navigation */}
        {otherCategories.length > 0 && (
          <nav aria-label="Other Event Formats" className="mb-16 text-left">
            <h2 className="text-lg font-bold text-text-primary uppercase font-heading mb-4 tracking-tight">
              Other Event Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={getEventCategoryUrl(other.slug)}
                  className="p-5 rounded-2xl border border-border hover:border-accent/40 bg-white hover:bg-subtle/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#002B66] group-hover:text-accent uppercase transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-1 mt-0.5">
                      {other.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </nav>
        )}

      </div>
    </div>
  );
}
