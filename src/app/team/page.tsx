/* eslint-disable @typescript-eslint/no-require-imports */
import type { Metadata } from "next";
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";
import type { iTestimonial } from "@/components/ui/retro-testimonial";
import { Globe, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Leadership | TamizhTech Robotics Company",
  description: "Meet the passionate engineers, designers, and educators behind TamizhTech — building a robotics revolution from Coimbatore.",
};

const teamMembers: iTestimonial[] = [
  {
    name: "Tamizharasan K",
    designation: "Founder & CEO",
    description: "Visionary behind TamizhTech — driving robotics education and automation innovation across Tamil Nadu and beyond.",
    profileImage: "/team/Tamizharasan K.jpg",
  },
  {
    name: "Suraj A",
    designation: "Co-founder & COO",
    description: "Operations strategist ensuring seamless delivery of robotics programs, events, and enterprise solutions.",
    profileImage: "/team/suraj.jpg",
  },
  {
    name: "Dhanush S",
    designation: "Co-founder & CTO",
    description: "Lead technologist architecting robotics platforms, embedded systems, and AI solutions at TamizhTech.",
    profileImage: "/team/dhanus.jpg",
  },
  {
    name: "Sathish P",
    designation: "CIO",
    description: "Information systems leader managing TamizhTech's tech infrastructure, data, and digital operations.",
    profileImage: "/team/sathish.jpeg",
  },
  {
    name: "Chenjitha",
    designation: "CFO",
    description: "Financial architect designing sustainable growth and investment strategies for TamizhTech's expansion.",
    profileImage: "/team/Chenjitha.jpeg",
  },
  {
    name: "Poongothai Subiksha M",
    designation: "CMO",
    description: "Brand builder and marketing strategist behind TamizhTech's growing national and digital presence.",
    profileImage: "/team/Poongothai Subiksha M.jpg",
  },
  {
    name: "Kumara Dharshini T",
    designation: "HR & Operations",
    description: "Human resources and operations lead ensuring a vibrant, inclusive, and effective team culture at TamizhTech.",
    profileImage: "/team/dharshini.jpeg",
  },
  {
    name: "Aananth S",
    designation: "Product & Dev Officer",
    description: "Product thinker and developer driving TamizhTech's digital platforms and customer experience.",
    profileImage: "/team/anandth.jpg",
  },
  {
    name: "Sukeshan",
    designation: "R&D Head",
    description: "Research pioneer leading cutting-edge robotics and AI development at TamizhTech's innovation lab.",
    profileImage: "/team/sukesh.jpeg",
  },
  {
    name: "Dharanish K B",
    designation: "PR Team Head",
    description: "Public relations leader building TamizhTech's media presence and stakeholder relationships.",
    profileImage: "/team/Dharaneesh.jpeg",
  },
  {
    name: "Yuvaraj K",
    designation: "Robotics Engineer",
    description: "Hands-on robotics engineer contributing to the design, build, and testing of TamizhTech's competition bots.",
    profileImage: "/team/yuvaraj.png",
  },
  {
    name: "Kowsik K",
    designation: "Embedded Systems Engineer",
    description: "Expert in microcontrollers, PCB design, and real-time systems powering TamizhTech's robot platforms.",
    profileImage: "/team/kowsik.jpeg",
  },
];

export default function TeamPage() {
  const cards = teamMembers.map((member, index) => (
    <TestimonialCard
      key={member.name}
      testimonial={member}
      index={index}
    />
  ));

  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Company Leadership</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Our <span className="text-primary-main">Experts.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto mb-4 leading-relaxed font-regular">
            Meet the persistent visionaries and specialized engineers driving the robotics revolution from Coimbatore.
          </p>
        </div>
      </section>

      {/* Leadership Gallery */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-2">Executive Team</h2>
            <p className="text-text-tertiary text-lg font-regular">Passionate leaders building the infrastructure for Indian automation.</p>
          </div>
        </div>
        <Carousel items={cards} />
      </section>

      {/* Mission Values (Subtle) */}
      <section className="py-24 bg-bg-elevated border-y border-border-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="p-3 bg-primary-light rounded-lg h-fit"><Globe className="w-6 h-6 text-primary-main" /></div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Global Vision</h3>
                <p className="text-text-tertiary text-sm leading-relaxed">Scaling technical excellence from local labs to 15+ states and global markets.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="p-3 bg-primary-light rounded-lg h-fit"><ShieldCheck className="w-6 h-6 text-primary-main" /></div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Quality Standards</h3>
                <p className="text-text-tertiary text-sm leading-relaxed">Adhering to MNC-grade precision in every robot built and every student trained.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="p-3 bg-primary-light rounded-lg h-fit"><Zap className="w-6 h-6 text-primary-main" /></div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Rapid Innovation</h3>
                <p className="text-text-tertiary text-sm leading-relaxed">Persistent research and development cycles to keep TamizhTech at the bleeding edge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
