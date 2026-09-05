import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { getCategoryBySlug, getCategoriesByContentType } from "@/data/categories";
import { getProductsByCategorySlug, getProductBySlug, products, Product } from "@/data/products";
import { getProductUrl, getProductCategoryUrl } from "@/lib/routing";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const productCats = getCategoriesByContentType("products");
  const catParams = productCats.map((cat) => ({
    category: cat.slug,
  }));
  const legacyParams = products.map((p) => ({
    category: p.slug,
  }));
  return [...catParams, ...legacyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("products", categorySlug);
  if (!category) {
    const legacyProduct = getProductBySlug(categorySlug);
    if (legacyProduct) {
      return {
        title: `${legacyProduct.name} | Tamizh Tech`,
        alternates: {
          canonical: `https://www.tamizhtech.in/products/${legacyProduct.categorySlug}/${legacyProduct.slug}`,
        },
      };
    }
    return {};
  }

  const canonicalUrl = `https://www.tamizhtech.in/products/${category.slug}`;

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

import CategoryClient from "./CategoryClient";

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("products", categorySlug);

  if (!category) {
    // Check if this was a legacy product flat slug (e.g. /products/rc-robo-race)
    const legacyProduct = getProductBySlug(categorySlug);
    if (legacyProduct) {
      permanentRedirect(getProductUrl(legacyProduct.categorySlug, legacyProduct.slug));
    }
    notFound();
  }

  const categoryProducts = getProductsByCategorySlug(category.slug);
  const otherCategories = getCategoriesByContentType("products").filter(
    (c) => c.slug !== category.slug
  );

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Products", url: "https://www.tamizhtech.in/products" },
    { name: category.name, url: `https://www.tamizhtech.in/products/${category.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CategoryClient
        category={category}
        categoryProducts={categoryProducts}
        otherCategories={otherCategories}
      />
    </>
  );
}
