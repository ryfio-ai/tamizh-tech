import { events, getEventByCategoryAndSlug } from "@/data/events";
import { competitionGuides, getCompetitionGuideBySlug } from "@/data/competitionGuides";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";
import CompetitionGuideClient from "./CompetitionGuideClient";
import { EventSchema, CompetitionGuideSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const eventParams = events.map((e) => ({
    category: e.categorySlug,
    slug: e.slug,
  }));
  const guideParams = competitionGuides.map((g) => ({
    category: g.categorySlug,
    slug: g.slug,
  }));
  return [...eventParams, ...guideParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  
  // 1. Check for Competition Guide
  if (category === "competition") {
    const guide = getCompetitionGuideBySlug(slug);
    if (guide) {
      const canonicalUrl = `https://www.tamizhtech.in/events/${guide.categorySlug}/${guide.slug}`;
      return {
        title: guide.metaTitle,
        description: guide.metaDescription,
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title: guide.metaTitle,
          description: guide.metaDescription,
          url: canonicalUrl,
          type: "article",
        },
        twitter: {
          card: "summary_large_image",
          title: guide.metaTitle,
          description: guide.metaDescription,
        }
      };
    }
  }

  // 2. Check for Scheduled Event
  const event = getEventByCategoryAndSlug(category, slug);
  if (!event) return {};

  const canonicalUrl = `https://www.tamizhtech.in/events/${event.categorySlug}/${event.slug}`;

  return {
    title: `${event.title} | ${event.type} in Coimbatore | Tamizh Tech`,
    description: event.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${event.title} | Tamizh Tech Robotics`,
      description: event.description,
      url: canonicalUrl,
      type: "website",
      images: [{ url: event.banner }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Tamizh Tech Robotics`,
      description: event.description,
    }
  };
}

export default async function HierarchicalEventDetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  // 1. Competition Guide Route
  if (category === "competition") {
    const guide = getCompetitionGuideBySlug(slug);
    if (guide) {
      const breadcrumbs = [
        { name: "Home", url: "https://www.tamizhtech.in" },
        { name: "Events", url: "https://www.tamizhtech.in/events" },
        { name: "Competitions", url: "https://www.tamizhtech.in/events/competition" },
        { name: guide.title, url: `https://www.tamizhtech.in/events/${guide.categorySlug}/${guide.slug}` },
      ];

      const guideProducts = products.filter((p) => 
        guide.productSlugs.includes(p.slug) && p.published
      );

      return (
        <>
          <BreadcrumbSchema items={breadcrumbs} />
          <CompetitionGuideSchema guide={guide} />
          <CompetitionGuideClient guide={guide} products={guideProducts} />
        </>
      );
    }
  }

  // 2. Scheduled Event Route
  const event = getEventByCategoryAndSlug(category, slug);
  if (!event) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Events", url: "https://www.tamizhtech.in/events" },
    { name: event.type, url: `https://www.tamizhtech.in/events/${event.categorySlug}` },
    { name: event.title, url: `https://www.tamizhtech.in/events/${event.categorySlug}/${event.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <EventSchema event={event} />
      <EventDetailClient event={event} />
    </>
  );
}

