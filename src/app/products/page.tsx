import React from "react";
import { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Robotics Hardware, Kits & Radio Controllers | Tamizh Tech Coimbatore",
  description: "Explore verified robotics competition kits, holonomic chassis platforms, pneumatic strikers, and certified FlySky radio transmitters. Direct Coimbatore engineering support.",
  alternates: {
    canonical: "https://www.tamizhtech.in/products",
  },
  openGraph: {
    title: "Robotics Hardware, Kits & Radio Controllers | Tamizh Tech Coimbatore",
    description: "Explore verified robotics competition kits, holonomic chassis platforms, pneumatic strikers, and certified FlySky radio transmitters.",
    url: "https://www.tamizhtech.in/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotics Hardware, Kits & Radio Controllers | Tamizh Tech Coimbatore",
    description: "Explore verified robotics competition kits, holonomic chassis platforms, pneumatic strikers, and certified FlySky radio transmitters.",
  }
};

export default function ProductsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Products", url: "https://www.tamizhtech.in/products" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductsClient />
    </>
  );
}
