"use client";

import React from "react";
import { Layers, Zap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "/gallery/1.JPEG",
  "/gallery/3.jpg",
  "/gallery/6.jpg",
  "/gallery/7.JPG",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/16.jpeg",
  "/gallery/17.jpeg",
  "/gallery/18.jpeg",
  "/gallery/19.jpeg",
  "/gallery/20.jpeg",
  "/gallery/21.jpeg",
  "/gallery/22.jpeg",
  "/gallery/23.jpeg",
  "/gallery/24.jpeg",
  "/gallery/25.jpeg",
  "/gallery/26.jpeg",
  "/gallery/27.jpeg",
  "/gallery/29.jpeg",
  "/gallery/30.jpeg",
  "/gallery/32.jpeg",
  "/gallery/33.jpeg",
  "/gallery/34.jpeg",
  "/gallery/35.jpeg",
  "/gallery/36.jpeg",
  "/gallery/37.jpeg",
  "/gallery/39.jpeg",
  "/gallery/40.jpeg",
  "/gallery/41.jpeg",
  "/gallery/42.jpeg",
  "/gallery/43.jpeg",
  "/gallery/44.jpeg",
  "/gallery/46.jpeg",
  "/gallery/47.jpeg",
  "/gallery/49.jpeg",
  "/gallery/50.jpeg",
  "/gallery/51.jpeg",
  "/gallery/53.jpeg",
  "/gallery/54.jpeg",
  "/gallery/55.jpeg",
  "/gallery/56.jpeg",
  "/gallery/58.jpeg",
  "/gallery/59.jpeg",
  "/gallery/60.jpeg",
  "/gallery/62.jpeg",
  "/gallery/63.jpeg",
  "/gallery/64.jpeg",
  "/gallery/65.jpeg",
  "/gallery/66.jpeg",
  "/gallery/67.jpeg",
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Ecosystem Gallery"
        subtitle="A visual documentation of specialized robotics deployments, technical R&D milestones, workshops, and student competitive tracks across India."
        breadcrumbActive="Gallery"
      />

      <section className="section bg-white py-24">
        <div className="container px-6">
          {/* Gallery Grid */}
          <div className="mb-24">
            <GalleryGrid images={galleryImages} />
          </div>

          {/* Cards section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-20">
            <Card className="flex flex-col gap-5 h-full hover:border-accent/15">
              <div className="p-3 bg-accent/5 w-fit rounded-xl text-accent">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-text-primary uppercase tracking-tight">Hardware Evolution</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Visual mapping of robotic chassis development, iterative structural testing, and localized prototyping cycles.
              </p>
            </Card>

            <Card className="flex flex-col gap-5 h-full hover:border-accent/15">
              <div className="p-3 bg-accent/5 w-fit rounded-xl text-accent">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-text-primary uppercase tracking-tight">On-Ground Impact</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Documenting live industrial installations and large-scale technical training programs across 15+ Indian states.
              </p>
            </Card>

            <Card className="flex flex-col gap-5 h-full hover:border-accent/15">
              <div className="p-3 bg-accent/5 w-fit rounded-xl text-accent">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-text-primary uppercase tracking-tight">Research Strategy</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                A repository of high-spec laboratory setups and strategic R&D collaborations with premier technical institutions.
              </p>
            </Card>
          </div>

          {/* Request Specs CTA */}
          <div className="mt-24 bg-subtle border border-border p-12 lg:p-20 text-center rounded-3xl max-w-4xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight mb-4">
              Access Technical Specifications
            </h4>
            <p className="text-text-muted text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
              For higher-resolution project documentation or specific technical guides related to these deployments, contact our coordination desk.
            </p>
            <Link href="/contact">
              <Button variant="primary">
                Request Docs <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
