"use client";

import React from "react";
import { 
  Globe, 
  Brain, 
  Layers, 
  Zap, 
  Mail, 
  School, 
  Settings,
  Users
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Careers at TamizhTech"
        subtitle="We create and build value for our customers with our innovative products and solutions. We offer you the chance to do work that adds up to something meaningful."
        breadcrumbActive="Careers"
      />

      <section className="section bg-white py-24">
        <div className="container px-6">
          
          {/* Core Values Section */}
          <div className="mb-32">
            <AnimatedSection className="mb-12">
              <SectionHeader
                tag="Our Culture"
                title="Our Core"
                highlight="Values"
                subtitle="The principles that guide our work and define our commitment to excellence in engineering and mentoring."
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Value 1 */}
              <AnimatedSection>
                <Card className="p-10 lg:p-12 hover:border-accent/20">
                  <Zap className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-text-primary uppercase mb-4">Excellence</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We pursue perfection in every aspect of our work, from precision engineering to cost optimization.
                  </p>
                </Card>
              </AnimatedSection>

              {/* Value 2 */}
              <AnimatedSection delay={0.1}>
                <Card className="p-10 lg:p-12 hover:border-accent/20">
                  <Brain className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-text-primary uppercase mb-4">Innovation</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We embrace cutting-edge technology and creative solutions to revolutionize K-12 STEM education.
                  </p>
                </Card>
              </AnimatedSection>

              {/* Value 3 */}
              <AnimatedSection delay={0.2}>
                <Card className="p-10 lg:p-12 hover:border-accent/20">
                  <Layers className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-text-primary uppercase mb-4">Collaboration</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We believe in the power of teamwork and cross-functional partnerships to build India's largest robotics ecosystem.
                  </p>
                </Card>
              </AnimatedSection>

              {/* Value 4 */}
              <AnimatedSection delay={0.3}>
                <Card className="p-10 lg:p-12 hover:border-accent/20">
                  <Globe className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-text-primary uppercase mb-4">Global Impact</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We build hardware and software solutions that make a meaningful difference globally, representing domestic heritage.
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="mb-32 text-center">
            <AnimatedSection className="mb-12">
              <SectionHeader
                tag="Why Us"
                title="Key"
                highlight="Differentiators"
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection>
                <Card className="p-10 hover:border-accent/15">
                  <School className="w-12 h-12 text-accent mx-auto mb-6" />
                  <h4 className="text-base font-bold text-text-primary uppercase tracking-wide">Learning Focused</h4>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Card className="p-10 hover:border-accent/15">
                  <Users className="w-12 h-12 text-accent mx-auto mb-6" />
                  <h4 className="text-base font-bold text-text-primary uppercase tracking-wide">Collaborative environment</h4>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Card className="p-10 hover:border-accent/15">
                  <Settings className="w-12 h-12 text-accent mx-auto mb-6" />
                  <h4 className="text-base font-bold text-text-primary uppercase tracking-wide">Active Problem-solvers</h4>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-subtle border border-border p-12 lg:p-20 rounded-3xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-6 leading-tight max-w-2xl mx-auto">
              If you're interested in joining our growing team, drop your resume to career@tamizhtech.in
            </h3>
            <div className="flex justify-center mt-8">
              <a href="mailto:career@tamizhtech.in">
                <Button variant="primary" size="lg" className="gap-2.5">
                  <Mail className="w-5 h-5" /> Email Resume
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
