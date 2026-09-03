import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, User, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { blogPosts, BlogSection, getBlogPostByCategoryAndSlug, getBlogCategorySlug } from '@/data/blogPosts';
import { getBlogUrl, getBlogCategoryUrl } from '@/lib/routing';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    category: post.categorySlug || getBlogCategorySlug(post.category),
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getBlogPostByCategoryAndSlug(category, slug);
  if (!post) return {};

  const canonicalUrl = `https://www.tamizhtech.in/blog/${category}/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: canonicalUrl,
      images: [{ url: post.img, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case 'h2':
      return <h2 key={idx} className="text-2xl font-black text-text-primary mt-10 mb-4 uppercase tracking-tight font-heading">{section.heading}</h2>;
    case 'h3':
      return <h3 key={idx} className="text-lg font-bold text-text-primary mt-6 mb-3 font-heading">{section.heading}</h3>;
    case 'p':
      return <p key={idx} className="text-text-secondary leading-relaxed mb-4 text-base">{section.text}</p>;
    case 'ul':
      return (
        <ul key={idx} className="space-y-2 mb-6 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="space-y-3 mb-6 counter-reset-item">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-accent text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div key={idx} className="overflow-x-auto mb-6 rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-subtle">
              <tr>
                {section.headers?.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 text-[11px] font-black uppercase tracking-wider text-text-primary border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-subtle/50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-text-secondary border-b border-border/50 leading-relaxed">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'cta':
      return (
        <div key={idx} className="my-8 p-6 bg-accent/5 border border-accent/20 rounded-2xl flex items-center justify-between gap-4 flex-wrap">
          <p className="text-text-primary font-bold text-base">{section.ctaText}</p>
          <Link href={section.ctaHref || '/'} className="btn-primary py-3 px-6 text-sm font-bold whitespace-nowrap flex items-center gap-2">
            Go Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

export default async function HierarchicalBlogPostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getBlogPostByCategoryAndSlug(category, slug);
  if (!post) notFound();

  const canonicalUrl = `https://www.tamizhtech.in/blog/${category}/${post.slug}`;
  const categoryUrl = `https://www.tamizhtech.in/blog/${category}`;

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    image: post.img,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorTitle,
      url: 'https://www.tamizhtech.in/founder',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TamizhTech Robotics Company',
      logo: { '@type': 'ImageObject', url: 'https://www.tamizhtech.in/logo/TTRC LOGO.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  const faqSchema = post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tamizhtech.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.tamizhtech.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.category, item: categoryUrl },
      { '@type': 'ListItem', position: 4, name: post.title, item: canonicalUrl },
    ],
  };

  const schemas = faqSchema ? [articleSchema, faqSchema, breadcrumbSchema] : [articleSchema, breadcrumbSchema];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <div className="bg-white min-h-screen pt-28 pb-24">
        {/* Hero Banner */}
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image src={post.img} alt={post.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container px-6 pb-10 max-w-4xl mx-auto">
            <Link 
              href={getBlogCategoryUrl(category)} 
              className="inline-block px-3 py-1 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-widest mb-4 hover:bg-accent-hover transition-colors"
            >
              {post.category}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl font-heading uppercase tracking-tight">{post.title}</h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="container px-6 max-w-4xl mx-auto mt-8">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-6 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
            <Link href={getBlogCategoryUrl(category)} className="hover:text-accent transition-colors">{post.category}</Link>
            <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
            <span className="text-accent truncate max-w-[240px]">{post.title}</span>
          </nav>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-border mb-8">
            <div className="flex items-center gap-6 text-xs font-bold text-text-muted uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" />{post.readTime}</span>
              <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <Link href={getBlogCategoryUrl(category)} className="flex items-center gap-1.5 text-xs font-bold text-accent hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to {post.category}
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose-custom mb-12">
            {post.content.map((section, idx) => renderSection(section, idx))}
          </article>

          {/* Author Box */}
          <div className="border border-border rounded-2xl p-6 mb-12 flex gap-4 items-start bg-subtle">
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="font-black text-text-primary text-sm uppercase tracking-wide">{post.author}</p>
              <p className="text-xs text-text-muted mb-2">{post.authorTitle}</p>
              <p className="text-sm text-text-secondary leading-relaxed">Er. K. Tamizharasan is the founder of TamizhTech Robotics Company and Tamizh Robotics Club (TRC). He has 10+ years of experience in competitive robotics, industrial automation, and STEM education across Tamil Nadu.</p>
              <Link href="/founder" className="text-xs font-bold text-accent hover:underline mt-1 inline-block">Read full profile →</Link>
            </div>
          </div>

          {/* FAQ Section */}
          {post.faq.length > 0 && (
            <div className="mb-12 border-t border-border pt-10">
              <h2 className="text-xl font-black text-text-primary uppercase tracking-tight font-heading mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
                  <div key={i} className="border border-border rounded-xl p-5 bg-white shadow-xs">
                    <h3 className="font-bold text-sm text-text-primary mb-2 flex items-start gap-2">
                      <span className="text-accent font-black">Q.</span>
                      {item.q}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed pl-5">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internal Links Block */}
          {post.internalLinks.length > 0 && (
            <div className="mb-12 p-6 rounded-2xl bg-subtle border border-border">
              <p className="text-xs font-black uppercase tracking-wider text-text-primary mb-3">Related Solutions & Programs</p>
              <div className="flex flex-wrap gap-3">
                {post.internalLinks.map((link, i) => (
                  <Link key={i} href={link.href} className="text-xs font-bold text-accent hover:underline bg-white px-3 py-1.5 rounded-full border border-border">
                    {link.text} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-border pt-10">
              <h2 className="text-xl font-black text-text-primary uppercase tracking-tight font-heading mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((p) => {
                  const relCatSlug = p.categorySlug || getBlogCategorySlug(p.category);
                  return (
                    <Link 
                      key={p.slug} 
                      href={getBlogUrl(relCatSlug, p.slug)} 
                      className="group border border-border rounded-2xl overflow-hidden bg-white hover:border-accent/40 hover:shadow-md transition-all"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-black text-accent uppercase tracking-wider block mb-1">{p.category}</span>
                        <h3 className="font-bold text-sm text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2">{p.title}</h3>
                        <p className="text-xs text-text-muted mt-2 flex items-center gap-1 font-semibold">Read guide →</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
