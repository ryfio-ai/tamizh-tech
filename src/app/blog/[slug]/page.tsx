import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, User, ArrowRight, CheckCircle } from 'lucide-react';
import { blogPosts, BlogSection } from '@/data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.img, width: 1200, height: 630, alt: post.title }],
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

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
    dateModified: post.date,
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
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.tamizhtech.in/blog/${post.slug}` },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tamizhtech.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.tamizhtech.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.tamizhtech.in/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]) }} />

      <div className="bg-white min-h-screen pt-28 pb-24">
        {/* Hero Banner */}
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image src={post.img} alt={post.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container px-6 pb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-widest mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl font-heading uppercase tracking-tight">{post.title}</h1>
          </div>
        </div>

        <div className="container px-6 max-w-4xl mx-auto">
          {/* Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-border mb-8">
            <div className="flex items-center gap-6 text-xs font-bold text-text-muted uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" />{post.readTime}</span>
              <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <Link href="/blog" className="flex items-center gap-1.5 text-xs font-bold text-accent hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
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
            <section className="mb-12">
              <h2 className="text-2xl font-black text-text-primary mb-6 uppercase tracking-tight font-heading">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
                  <div key={i} className="border border-border rounded-xl p-5 bg-subtle">
                    <h3 className="font-bold text-text-primary text-sm mb-2">{item.q}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Internal Links */}
          {post.internalLinks.length > 0 && (
            <section className="mb-12 p-6 border border-accent/20 rounded-2xl bg-accent/3">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-4">Related Pages</h3>
              <div className="flex flex-wrap gap-3">
                {post.internalLinks.map((link, i) => (
                  <Link key={i} href={link.href} className="flex items-center gap-1.5 text-xs font-bold text-text-primary hover:text-accent transition-colors border border-border rounded-full px-4 py-2 bg-white hover:border-accent">
                    {link.text} <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-xl font-black text-text-primary mb-6 uppercase tracking-tight font-heading border-t border-border pt-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group border border-border rounded-2xl overflow-hidden bg-white hover:border-accent/40 hover:shadow-md transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-black text-accent uppercase tracking-widest">{p.category}</span>
                      <h4 className="font-bold text-text-primary text-sm mt-1 leading-tight group-hover:text-accent transition-colors">{p.title}</h4>
                      <p className="text-xs text-text-muted mt-1">{p.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
