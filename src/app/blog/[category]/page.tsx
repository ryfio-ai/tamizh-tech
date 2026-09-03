import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft, ArrowRight, Clock, User, Sparkles, BookOpen } from "lucide-react";
import { getCategoryBySlug, getCategoriesByContentType } from "@/data/categories";
import { getBlogPostsByCategorySlug, getBlogPostBySlug, getBlogCategorySlug, blogPosts, BlogPost } from "@/data/blogPosts";
import { getBlogUrl, getBlogCategoryUrl } from "@/lib/routing";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const blogCats = getCategoriesByContentType("blog");
  const catParams = blogCats.map((cat) => ({
    category: cat.slug,
  }));
  const legacyParams = blogPosts.map((p) => ({
    category: p.slug,
  }));
  return [...catParams, ...legacyParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("blog", categorySlug);
  if (!category) {
    const legacyPost = getBlogPostBySlug(categorySlug);
    if (legacyPost) {
      const catSlug = legacyPost.categorySlug || getBlogCategorySlug(legacyPost.category);
      return {
        title: legacyPost.metaTitle,
        description: legacyPost.metaDescription,
        alternates: {
          canonical: `https://www.tamizhtech.in/blog/${catSlug}/${legacyPost.slug}`,
        },
      };
    }
    return {};
  }

  const canonicalUrl = `https://www.tamizhtech.in/blog/${category.slug}`;

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

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug("blog", categorySlug);

  if (!category) {
    // Check if this was a legacy blog flat slug
    const legacyPost = getBlogPostBySlug(categorySlug);
    if (legacyPost) {
      const catSlug = legacyPost.categorySlug || getBlogCategorySlug(legacyPost.category);
      permanentRedirect(getBlogUrl(catSlug, legacyPost.slug));
    }
    notFound();
  }

  const categoryPosts = getBlogPostsByCategorySlug(category.slug);
  const otherCategories = getCategoriesByContentType("blog").filter(
    (c) => c.slug !== category.slug
  );

  const breadcrumbs = [
    { name: "Home", url: "https://www.tamizhtech.in" },
    { name: "Blog", url: "https://www.tamizhtech.in/blog" },
    { name: category.name, url: `https://www.tamizhtech.in/blog/${category.slug}` },
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
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <span className="text-accent truncate">{category.name}</span>
        </nav>

        {/* Back Link */}
        <div className="text-left mb-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>

        {/* Category Hero Header */}
        <header className="mb-12 text-left bg-gradient-to-r from-subtle via-white to-subtle p-8 md:p-12 rounded-3xl border border-border/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Blog Topic
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] uppercase tracking-tight font-heading mb-4 leading-tight">
            {category.name}
          </h1>
          <p className="text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed font-sans">
            {category.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border/60 text-xs font-bold text-text-muted uppercase">
            <span>📝 {categoryPosts.length} Technical Guides</span>
            <span>✍️ Written by Robotics Engineers</span>
            <span>💡 Real Project Insights</span>
          </div>
        </header>

        {/* Posts Grid */}
        <section aria-labelledby="posts-heading" className="mb-16">
          <h2 id="posts-heading" className="sr-only">Articles in {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {categoryPosts.map((post) => {
              const postDetailHref = getBlogUrl(category.slug, post.slug);

              return (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative w-full h-52 bg-subtle/50 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-accent text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1 font-semibold">
                          <Clock className="w-3.5 h-3.5 text-accent" /> {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>

                      <h3 className="text-base font-extrabold font-heading text-[#002B66] uppercase tracking-tight group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60">
                      <Link href={postDetailHref} className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:translate-x-1 transition-transform">
                        Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Related Categories Navigation */}
        {otherCategories.length > 0 && (
          <nav aria-label="Other Blog Topics" className="mb-16 text-left">
            <h2 className="text-lg font-bold text-text-primary uppercase font-heading mb-4 tracking-tight">
              Other Topics to Explore
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={getBlogCategoryUrl(other.slug)}
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

      </div>
    </div>
  );
}
