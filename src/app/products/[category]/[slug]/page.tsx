import { products, getProductByCategoryAndSlug } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import { ProductSchema } from "@/components/JsonLd";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);
  if (!product) return {};

  const canonicalUrl = `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}`;

  return {
    title: `${product.name} | ${product.category} Coimbatore | Tamizh Tech`,
    description: product.shortDescription || product.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} | Tamizh Tech Robotics`,
      description: product.shortDescription || product.description,
      url: canonicalUrl,
      type: "website",
      images: product.images && product.images.length > 0 ? [{ url: product.images[0] }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Tamizh Tech Robotics`,
      description: product.shortDescription || product.description,
    }
  };
}

export default async function HierarchicalProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category
  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <ProductSchema product={product} />
      <ProductDetailClient product={product} related={related} />
    </>
  );
}
