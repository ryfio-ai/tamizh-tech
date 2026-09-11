import { products, getProductByCategoryAndSlug } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
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

  const metaTitle = product.metaTitle || `${product.name} | ${product.category} | Tamizh Tech`;
  const metaDesc = product.metaDescription || product.shortDescription || product.description;

  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: "website",
      images: product.images && product.images.length > 0 ? [{ url: product.images[0] }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
    }
  };
}

export default async function HierarchicalProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category (prioritize counterpart motor for DGJ motors)
  let related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug);
  if (product.slug === "ttrc-dgj-300rpm") {
    const dgj600 = related.find((p) => p.slug === "ttrc-dgj-600rpm");
    const others = related.filter((p) => p.slug !== "ttrc-dgj-600rpm");
    related = dgj600 ? [dgj600, ...others].slice(0, 3) : related.slice(0, 3);
  } else if (product.slug === "ttrc-dgj-600rpm") {
    const dgj300 = related.find((p) => p.slug === "ttrc-dgj-300rpm");
    const others = related.filter((p) => p.slug !== "ttrc-dgj-300rpm");
    related = dgj300 ? [dgj300, ...others].slice(0, 3) : related.slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  // Breadcrumbs Schema items
  const breadcrumbItems = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Products", url: "https://www.tamizhtech.in/products" },
    { name: product.category, url: `https://www.tamizhtech.in/products/${product.categorySlug}` },
    { name: product.name, url: `https://www.tamizhtech.in/products/${product.categorySlug}/${product.slug}` }
  ];

  // FAQ Schema items from verified product FAQs
  const faqItems = product.faqs && product.faqs.length > 0
    ? product.faqs.map(f => ({ q: f.question, a: f.answer }))
    : [];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ProductSchema product={product} />
      {faqItems.length > 0 && <FAQSchema faqs={faqItems} />}
      <ProductDetailClient product={product} related={related} />
    </>
  );
}

