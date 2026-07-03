import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found | Tamizh Tech"
    };
  }

  return {
    title: `${product.name} | ${product.category} | Tamizh Tech Robotics`,
    description: product.description,
    keywords: [product.name, product.category, "robotics products india", "Coimbatore robotics"],
    openGraph: {
      title: `${product.name} | Tamizh Tech Robotics Company`,
      description: product.specs,
      url: `https://tamizhtech.in/products/${product.slug}`,
      type: "website"
    }
  };
}

export default function Page({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Find related products (same category or others, max 3)
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);
  
  const fallbackRelated = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3 - relatedProducts.length);
  
  const finalRelated = [...relatedProducts, ...fallbackRelated];

  return <ProductDetailClient product={product} relatedProducts={finalRelated} />;
}
