import { products, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  // Related products (same category or similar)
  const related = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return <ProductDetailClient product={product} related={related} />;
}
