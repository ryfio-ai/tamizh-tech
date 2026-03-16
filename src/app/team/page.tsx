/* eslint-disable @typescript-eslint/no-require-imports */
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";
import type { iTestimonial } from "@/components/ui/retro-testimonial";

// Members with real local photos (loaded via webpack static import)
// Members without photos get Unsplash placeholders
const teamMembers: iTestimonial[] = [
  {
    name: "Tamizharasan K",
    designation: "Founder & CEO",
    description: "Visionary behind TamizhTech — driving robotics education and automation innovation across Tamil Nadu and beyond.",
    profileImage: require("@/public/team/Tamizharasan K.jpg"),
  },
  {
    name: "Suraj A",
    designation: "COO",
    description: "Operations strategist ensuring seamless delivery of robotics programs, events, and enterprise solutions.",
    profileImage: require("@/public/team/suraj.jpg"),
  },
  {
    name: "Dhanush S",
    designation: "Co-founder & CTO",
    description: "Lead technologist architecting robotics platforms, embedded systems, and AI solutions at TamizhTech.",
    profileImage: require("@/public/team/dhanus.jpg"),
  },
  {
    name: "Chenjitha",
    designation: "CFO",
    description: "Financial architect designing sustainable growth and investment strategies for TamizhTech's expansion.",
    profileImage: require("@/public/team/Chenjitha.jpeg"),
  },
  {
    name: "Poongothai Subiksha M",
    designation: "CMO",
    description: "Brand builder and marketing strategist behind TamizhTech's growing national and digital presence.",
    profileImage: require("@/public/team/Poongothai Subiksha M.jpg"),
  },
  {
    name: "Aananth S",
    designation: "Product & Dev Officer",
    description: "Product thinker and developer driving TamizhTech's digital platforms and customer experience.",
    profileImage: require("@/public/team/anandth.jpg"),
  },
  {
    name: "Sathish P",
    designation: "CIO",
    description: "Information systems leader managing TamizhTech's tech infrastructure, data, and digital operations.",
    profileImage: require("@/public/team/sathish.jpg"),
  },
  {
    name: "Sukeshan",
    designation: "R&D Head",
    description: "Research pioneer leading cutting-edge robotics and AI development at TamizhTech's innovation lab.",
    profileImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dharanish K B",
    designation: "PR Team Head",
    description: "Public relations leader building TamizhTech's media presence and stakeholder relationships.",
    profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Kumara Dharshini T",
    designation: "HR & Operations",
    description: "Human resources and operations lead ensuring a vibrant, inclusive, and effective team culture at TamizhTech.",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Kowsik K",
    designation: "Embedded Systems Engineer",
    description: "Expert in microcontrollers, PCB design, and real-time systems powering TamizhTech's robot platforms.",
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Yuvaraj K",
    designation: "Robotics Engineer",
    description: "Hands-on robotics engineer contributing to the design, build, and testing of TamizhTech's competition bots.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
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
            The Minds <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">Behind TamizhTech</span>
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
