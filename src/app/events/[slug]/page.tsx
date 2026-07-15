import { events } from "@/data/events";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";

export async function generateStaticParams() {
  return events.map((e) => ({
    slug: e.id,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const event = events.find((e) => e.id === params.slug);

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
