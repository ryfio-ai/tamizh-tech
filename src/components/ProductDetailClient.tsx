"use client";

import ProductDetailClient from "@/app/products/[category]/[slug]/ProductDetailClient";
import { Product } from "@/data/products";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts?: Product[];
}

export default function LegacyProductDetailWrapper({ product, relatedProducts = [] }: ProductDetailClientProps) {
  return <ProductDetailClient product={product} related={relatedProducts} />;
}
