import Link from "next/link";
import { ArrowRight, MessageCircle, Cpu, Zap, Bot, Users, BookOpen, Wrench, Globe } from "lucide-react";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TamizhTech - Best Robotics Company in Coimbatore & Tamil Nadu",
  description: "Premier robotics, AI and automation platform in Coimbatore. Learn, build and innovate with Tamizh Robotics Club and our advanced industrial solutions.",
  keywords: ["Robotics Coimbatore", "Robotics Tamilnadu", "Best Robots Coimbatore", "Robotics Projects Tamilnadu"],
};

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-bg-page">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden hero-gradient border-b border-border-light">
        {/* Gravity Floating Elements */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none md:pointer-events-auto">
          <Gravity gravity={{ x: 0, y: 0.5 }} className="w-full h-full">
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="20%" y="10%">
              <div className="w-24 h-24 rounded-2xl border border-primary-light shadow-md flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-primary-main font-bold">AI</span>
              </div>
            </MatterBody>
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="80%" y="20%" angle={15}>
              <div className="w-32 h-32 rounded-full border border-primary-light shadow-md flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-primary-main font-bold">Robotics</span>
              </div>
            </MatterBody>
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="30%" y="60%" angle={-10}>
              <div className="w-28 h-28 rounded-xl border border-primary-light shadow-md flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-primary-main font-bold text-center leading-tight">IoT<br/>Systems</span>
              </div>
            </MatterBody>
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="70%" y="60%" angle={5}>
              <div className="w-20 h-20 rounded-full border border-primary-light shadow-md flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-primary-main font-bold">Auto</span>
              </div>
            </MatterBody>
          </Gravity>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-border-medium bg-bg-primary shadow-sm">
            <span className="text-xs font-bold tracking-widest text-text-muted uppercase">BASED IN COIMBATORE, TAMIL NADU</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary leading-[1.1] mb-6 max-w-5xl tracking-tight">
            Building the Future with <span className="text-primary-main">Robotics, AI &amp; Automation.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-tertiary max-w-3xl mb-12 font-regular leading-relaxed">
            The leading platform for robotics innovation in **Tamil Nadu**. 
            Empowering students, colleges, and enterprises worldwide with world-class automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full z-20 relative">
            <Link href="/robotics-club" className="w-full sm:w-auto px-8 py-4 bg-primary-main text-text-on-primary font-bold text-lg rounded-lg hover:bg-primary-hover shadow-lg transition-all flex items-center justify-center gap-2 group">
              Explore Robotics Club <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/courses" className="w-full sm:w-auto px-8 py-4 border-2 border-border-medium text-text-primary font-bold text-lg rounded-lg bg-bg-primary hover:bg-bg-elevated transition-all flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-main" /> View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-20 container mx-auto px-4 -mt-10">
        <div className="bg-bg-primary border border-border-light shadow-xl rounded-xl p-6 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-border-light">
          <div className="flex flex-col items-center justify-center text-center p-4 stat-card rounded-lg">
            <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2">150+</h3>
            <p className="text-xs md:text-sm text-text-tertiary font-bold tracking-widest uppercase">Events Conducted</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4 stat-card rounded-lg">
            <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2">50+</h3>
            <p className="text-xs md:text-sm text-text-tertiary font-bold tracking-widest uppercase">Global Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4 stat-card rounded-lg">
            <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2">100+</h3>
            <p className="text-xs md:text-sm text-text-tertiary font-bold tracking-widest uppercase">Solutions Deployed</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4 stat-card rounded-lg">
            <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2">15+</h3>
            <p className="text-xs md:text-sm text-text-tertiary font-bold tracking-widest uppercase">States Served</p>
          </div>
        </div>
      </section>

      {/* Marquee Navigation Tags */}
      <section className="py-12 border-y border-border-light bg-bg-primary overflow-hidden mt-16">
        <MarqueeAnimation direction="left" baseVelocity={-1} className="text-text-tertiary/70 text-2xl md:text-3xl font-semibold py-2">
          <span>Industrial Automation</span> <span className="text-primary-main mx-6">•</span>
          <span>Education Kits</span> <span className="text-primary-main mx-6">•</span>
          <span>Combat Robotics</span> <span className="text-primary-main mx-6">•</span>
          <span>Custom Prototyping</span> <span className="text-primary-main mx-6">•</span>
          <span>3D Printing Services</span> <span className="text-primary-main mx-6">•</span>
          <span>IoT Ecosystems</span> <span className="text-primary-main mx-6">•</span>
        </MarqueeAnimation>
      </section>

      {/* MNC 4-Card Grid Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-6">
            World-Class <span className="text-primary-main">Robotics Ecosystem.</span>
          </h2>
          <p className="text-text-tertiary max-w-2xl mx-auto text-xl font-regular leading-relaxed">
            TamizhTech delivers high-end automation across educational and industrial sectors with a focus on precision and global standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Users className="w-6 h-6" />, title: "Robotics Club", desc: "India's premier student community building future-ready robotics engineers through hands-on competitions.", href: "/robotics-club" },
            { icon: <Bot className="w-6 h-6" />, title: "Products", desc: "Cutting-edge robotic kits, industrial drones, and custom hardware modules for complex automation.", href: "/products" },
            { icon: <Wrench className="w-6 h-6" />, title: "Services", desc: "End-to-end prototyping, industrial automation consulting, and high-precision manufacturing.", href: "/services" },
            { icon: <Cpu className="w-6 h-6" />, title: "Courses", desc: "Expert-led training in Embedded Systems, AI, and IoT available in Tamil, English, and Hindi.", href: "/courses" },
            { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Serving 50+ clients and 15+ states with technical excellence and local language support.", href: "/clients" },
            { icon: <Zap className="w-6 h-6" />, title: "Careers", desc: "Join an elite team of innovators and engineers redefining the future of Indian automation.", href: "/team" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="mnc-card flex flex-col p-8 group h-full">
              <div className="w-12 h-12 bg-primary-light text-primary-main rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-main group-hover:text-text-on-primary transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-main transition-colors">{item.title}</h3>
              <p className="text-text-tertiary text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary-main group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-bg-elevated border-y border-border-light text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm font-bold text-text-muted uppercase tracking-[0.2em] mb-8">Trusted by Global Enterprises & Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for Client Logos */}
            <span className="text-3xl font-black text-text-tertiary">BONIFON</span>
            <span className="text-3xl font-black text-text-tertiary">NURA ROBOTICS</span>
            <span className="text-3xl font-black text-text-tertiary">RYFIO</span>
            <span className="text-3xl font-black text-text-tertiary">ROBOAIQ</span>
            <span className="text-3xl font-black text-text-tertiary">ADITHYA TECH</span>
          </div>
        </div>
      </section>
    </div>
  );
}
