import React from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { ServiceTechnicalArticle } from "@/data/commercialServices";
import { getBlogUrl, getBlogCategoryUrl } from "@/lib/routing";

interface ServiceTechnicalArticlesProps {
  articles: ServiceTechnicalArticle[];
  categorySlug?: string;
}

export function ServiceTechnicalArticles({
  articles,
  categorySlug = "pcb-engineering",
}: ServiceTechnicalArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section
      id="technical-guides"
      className="py-20 bg-slate-50/70 border-t border-border/80 scroll-mt-20"
      aria-labelledby="technical-guides-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PCB Engineering Knowledge Hub</span>
          </div>
          <h2
            id="technical-guides-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight font-heading uppercase"
          >
            In-Depth Guides on PCB Design, Fabrication & Assembly
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
            Practical hardware engineering documentation, DFM rules, Gerber export checklists, and PCBA assembly insights from Tamizh Tech engineers in Coimbatore.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => {
            const articleUrl = getBlogUrl(art.categorySlug || categorySlug, art.slug);

            return (
              <article
                key={art.slug}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-text-muted mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 font-semibold text-slate-700 text-[10px] uppercase tracking-wider">
                      Technical Guide
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-500">
                      <Clock className="w-3 h-3 text-accent" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2 font-heading">
                    <Link href={articleUrl} className="focus:outline-hidden">
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary mt-2.5 line-clamp-3 leading-relaxed">
                    {art.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={articleUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:translate-x-1 transition-transform"
                    aria-label={`Read full guide: ${art.title}`}
                  >
                    <span>Read Engineering Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Hub Callout */}
        <div className="mt-12 text-center">
          <Link
            href={getBlogCategoryUrl(categorySlug)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-accent text-xs sm:text-sm font-bold text-text-primary hover:text-accent shadow-xs hover:shadow-md transition-all"
          >
            <span>Explore All 15 PCB Engineering Articles in Topic Hub</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
