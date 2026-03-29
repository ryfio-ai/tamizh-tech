import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Brain, Trophy, Zap, Users, ShieldCheck, Target, Rocket, Award } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const metadata: Metadata = {
  title: "Robotics Club | TamizhTech Robotics Company",
  description: "Join TamizhTech's Robotics Club — hands-on training, national competitions, mentorship, and a vibrant builder community for students across India.",
};

const events = [
  { name: "Robo Soccer", desc: "Team-based autonomous or RC robot soccer competition.", icon: <Rocket className="w-6 h-6" /> },
  { name: "Robo Sumo", desc: "Push rivals out of the ring using strength and strategy.", icon: <Target className="w-6 h-6" /> },
  { name: "Robo Race", desc: "Time-trial speed racing on custom tracks.", icon: <Zap className="w-6 h-6" /> },
  { name: "Robo War", desc: "Battle bots competition with custom-built combat machines.", icon: <ShieldCheck className="w-6 h-6" /> },
  { name: "Line Follower", desc: "Automated bots that follow a marked path at high speed.", icon: <Brain className="w-6 h-6" /> },
  { name: "Maze Solver", desc: "Advanced autonomous navigation with maze-solving AI.", icon: <Zap className="w-6 h-6" /> },
  { name: "Water Rocket", desc: "Design and launch water-powered rockets for altitude.", icon: <Rocket className="w-6 h-6" /> },
  { name: "Drone Race", desc: "FPV drone piloting through timed obstacle courses.", icon: <Zap className="w-6 h-6" /> },
];

const benefits = [
  { icon: <Brain className="w-6 h-6 text-primary-main" />, title: "Expert Mentorship", desc: "Weekly structured training sessions for all club navigation events." },
  { icon: <Award className="w-6 h-6 text-primary-main" />, title: "Global Recognition", desc: "Support for 150+ national and international robotics competitions." },
  { icon: <Zap className="w-6 h-6 text-primary-main" />, title: "Advanced Labs", desc: "Unlimited hands-on access to top-tier robotics tools and arenas." },
  { icon: <Users className="w-6 h-6 text-primary-main" />, title: "Elite Network", desc: "Connect with builders, innovators, and industrial mentors across 15+ states." },
];

export default function RoboticsClubPage() {
  return (
    <div className="w-full bg-bg-page">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Tamizh Robotics Club</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-text-primary mb-6 leading-tight tracking-tight">
            Build. Compete. <span className="text-primary-main">Innovate.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-3xl mx-auto mb-10 leading-relaxed font-regular">
            India's most tech-forward robotics hub for school and college students. Experience hands-on engineering from Coimbatore to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/robotics-club/join"
              className="px-8 py-4 bg-primary-main text-text-on-primary font-bold rounded-lg hover:bg-primary-hover shadow-lg transition-all flex items-center justify-center gap-2 group">
              Join the Club <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20want%20to%20join%20the%20Robotics%20Club." target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-border-medium text-text-primary font-bold rounded-lg bg-bg-primary hover:bg-bg-elevated transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary-main" /> Speak with Mentorship Team
            </a>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4">Core <span className="text-primary-main">Events</span></h2>
          <p className="text-text-tertiary max-w-xl mx-auto text-lg leading-relaxed">Systematic training for precision competitions and innovative hardware building.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div key={event.name} className="mnc-card flex flex-col p-8 group h-full">
              <div className="w-12 h-12 bg-primary-light text-primary-main rounded-md flex items-center justify-center mb-4 group-hover:bg-primary-main group-hover:text-text-on-primary transition-all duration-300">
                {event.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-main transition-colors">{event.name}</h3>
              <p className="text-text-tertiary text-sm leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-bg-elevated border-y border-border-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4">Why Join <span className="text-primary-main">TTRC?</span></h2>
            <p className="text-text-tertiary max-w-xl mx-auto">Experience the professional MNC-standard of robotics innovation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-bg-primary p-10 rounded-xl border border-border-light shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary-light w-fit mb-6">{b.icon}</div>
                <h3 className="font-bold text-text-primary text-xl mb-3">{b.title}</h3>
                <p className="text-text-tertiary text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden border border-border-light p-12 md:p-20 text-center bg-bg-primary shadow-xl">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none hero-gradient" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary mb-6">
              Become a <span className="text-primary-main">Global Member</span>
            </h2>
            <p className="text-text-tertiary text-xl mb-12 font-regular leading-relaxed">
              Unlock priority mentorship, complete arena access, and exclusive sponsorship opportunities on our global platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/robotics-club/join"
                className="px-10 py-5 bg-primary-main text-text-on-primary font-bold text-lg rounded-lg hover:bg-primary-hover shadow-lg transition-all">
                Apply for Membership
              </Link>
              <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20want%20to%20join%20the%20Robotics%20Club." target="_blank" rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-border-medium text-text-primary bg-bg-primary hover:bg-bg-elevated font-bold text-lg rounded-lg transition-all">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
