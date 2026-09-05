import type { Metadata } from "next";
import { commercialServices } from "@/data/commercialServices";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

const service = commercialServices["pcb-design-fabrication-assembly"];

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
  alternates: {
    canonical: `https://www.tamizhtech.in${service.canonicalPath}`,
  },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: `https://www.tamizhtech.in${service.canonicalPath}`,
    type: "website",
    images: [{ url: service.primaryImage, width: 1200, height: 630, alt: service.h1 }],
  },
};

export default function PcbServicesPage() {
  return <ServicePageTemplate service={service} />;
}
