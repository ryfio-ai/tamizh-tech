/* eslint-disable @typescript-eslint/no-require-imports */
import type { Metadata } from "next";
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";
import type { iTestimonial } from "@/components/ui/retro-testimonial";

export const metadata: Metadata = {
  title: "Our Team | TamizhTech Robotics Company",
  description: "Meet the passionate engineers, designers, and educators behind TamizhTech — building a robotics revolution from Coimbatore.",
};

// Members with real local photos (loaded via webpack static import)
// Members without photos get Unsplash placeholders
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
    profileImage: "/team/sathish.jpg",
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

const BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";

export default function TeamPage() {
  const cards = teamMembers.map((member, index) => (
    <TestimonialCard
      key={member.name}
      testimonial={member}
      index={index}
      backgroundImage={BG}
    />
  ));

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase">Our Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            The Minds <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-orange">Behind TamizhTech</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Passionate engineers, designers, and educators building a robotics revolution from Coimbatore. Click a card to read more.
          </p>
        </div>
      </section>

      {/* Retro Team Carousel */}
      <section className="pb-24 container mx-auto px-4">
        <Carousel items={cards} />
      </section>
    </div>
  );
}
