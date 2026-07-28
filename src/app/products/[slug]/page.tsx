import { products, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import { ProductSchema } from "@/components/JsonLd";
import { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Custom Robotics Kits Coimbatore`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  // Related products (same category or similar)
  const related = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <ProductSchema product={product} />
      <ProductDetailClient product={product} related={related} />
    </>
  );
}
