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
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <Link href="/products" className="hover:text-accent transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <span className="text-accent truncate">{category.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all products
          </Link>
        </div>

        {/* Category Hero Header */}
        <header className="mb-12 text-left bg-gradient-to-r from-subtle via-white to-subtle p-8 md:p-12 rounded-3xl border border-border/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Product Category
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] uppercase tracking-tight font-heading mb-4 leading-tight">
            {category.name}
          </h1>
          <p className="text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed font-sans">
            {category.description}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border/60 text-xs font-bold text-text-muted uppercase">
            <span>📦 {categoryProducts.length} Verified Products</span>
            <span>⚡ Ready to Ship Across India</span>
            <span>🛡️ Official Warranty & GST Support</span>
          </div>
        </header>

        {/* Products Grid */}
        <section aria-labelledby="products-heading" className="mb-16">
          <h2 id="products-heading" className="sr-only">Available {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {categoryProducts.map((product) => {
              const price = product.price || 0;
              const originalPrice = product.originalPrice || 0;
              const discount = originalPrice > price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
              const productDetailHref = getProductUrl(category.slug, product.slug);

              return (
                <article
                  key={product.id}
                  className="rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative w-full h-64 bg-subtle/50 flex items-center justify-center p-4 overflow-hidden border-b border-border/60">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${category.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {product.badge && (
                      <span className="absolute top-3.5 left-3.5 bg-accent text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1">
                        {category.name}
                      </span>
                      <h3 className="text-base font-extrabold font-heading text-[#002B66] uppercase tracking-tight mb-2 leading-snug group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {product.shortDescription || product.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60 space-y-3">
                      {price > 0 && (
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-[#002B66]">
                            ₹{price.toLocaleString("en-IN")}
                          </span>
                          {originalPrice > price && (
                            <span className="text-xs text-text-muted line-through">
                              ₹{originalPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                          {discount > 0 && (
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                              {discount}% OFF
                            </span>
                          )}
                        </div>
                      )}

                      <Link href={productDetailHref} className="block w-full">
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="w-full justify-center gap-1.5 bg-[#002B66] hover:bg-[#001D47] text-white font-black text-[11px] py-2.5 uppercase tracking-wider rounded-xl shadow-xs"
                        >
                          View Specifications <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Real Applications & Use Cases */}
        {category.applications && category.applications.length > 0 && (
          <section className="mb-16 text-left bg-subtle/50 rounded-3xl p-8 md:p-10 border border-border">
            <h2 className="text-xl md:text-2xl font-black text-[#002B66] uppercase font-heading mb-6 tracking-tight">
              Industrial & Competition Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border/60">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">{app}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Categories Navigation */}
        {otherCategories.length > 0 && (
          <nav aria-label="Related Categories" className="mb-16 text-left">
            <h2 className="text-lg font-bold text-text-primary uppercase font-heading mb-4 tracking-tight">
              Explore Other Product Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={getProductCategoryUrl(other.slug)}
                  className="p-5 rounded-2xl border border-border hover:border-accent/40 bg-white hover:bg-subtle/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#002B66] group-hover:text-accent uppercase transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-1 mt-0.5">
                      {other.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* Contact CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#002B66] to-[#001D47] text-white text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-heading mb-4">
            Need Bulk Institutional Pricing or Custom Tuning?
          </h2>
          <p className="text-sm text-white/80 max-w-2xl mx-auto mb-6">
            We partner with schools, engineering colleges, and competition teams across India to supply calibrated hardware and technical guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="font-bold bg-accent hover:bg-accent-hover text-white">
                Request Commercial Quote
              </Button>
            </Link>
            <a 
              href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I%20am%20inquiring%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="font-bold bg-white/10 hover:bg-white/20 border-white/30 text-white">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
