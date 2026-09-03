import { events, getEventByCategoryAndSlug } from "@/data/events";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";
import { EventSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({
    category: e.categorySlug,
    slug: e.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
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
