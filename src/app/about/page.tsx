import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap, Cpu } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { TargetIcon, HeartIcon, AwardIcon, UsersIcon } from "@/components/ui/CustomIcons";

export const metadata: Metadata = {
  title: "About TamizhTech | Story, Vision & Team Coimbatore",
  description: "Learn about the journey, values, and engineering team of TamizhTech Robotics Company in Coimbatore.",
};

const timeline = [
  { year: "2021", title: "Club Founded", desc: "Tamizh Robotics Club was established as a student tinkering hub in Coimbatore." },
  { year: "2022", title: "Competition Era", desc: "Began dominant participation in state-level robotics engineering tournaments." },
  { year: "2023", title: "National Expansion", desc: "Expanded components supply and technical project mentorship to national level." },
  { year: "2024", title: "Company Inception", desc: "Tamizh Tech Robotics Company was officially incorporated as an LLC on 22 October 2024." },
  { year: "2025", title: "STEM Setup Dominance", desc: "Began deploying complete robotics tinkering laboratories to schools and colleges across India." },
  { year: "2026", title: "Academy & Advanced R&D", desc: "Launched ThiranOli Academy to scale technical training, and expanded B2B automation." },
];

const values = [
  { icon: TargetIcon,      title: "Vision",    desc: "To be India's most trusted robotics and AI engineering company." },
  { icon: HeartIcon,       title: "Mission",   desc: "Building technology that empowers industries and educates the next generation." },
  { icon: AwardIcon,       title: "Excellence",desc: "Every project is built to the highest standards of engineering quality." },
  { icon: UsersIcon,       title: "Community", desc: "Creating a thriving ecosystem of engineers, innovators, and educators." },
];

const team = [
  { name: "Er. K. Tamizharasan", role: "Founder & CEO", image: "/team/Tamizharasan K.PNG" },
  { name: "Priya Krishnan",       role: "Head of R&D",   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Arun Selvaraj",        role: "Lead Engineer",  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Meera Nair",           role: "AI Specialist",  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const competitions = [
  { name: "RC Robo Race", desc: "Drift-tuned chassis and high-torque motors engineered for race track agility." },
  { name: "RC Robo Soccer", desc: "Dual solenoid active kicker bots designed for precision and power on the soccer field." },
  { name: "RC Robo War", desc: "High-impact combat robots with active spinners, lifters, and steel armor plating." },
  { name: "RC Robo Sumo", desc: "Heavy steel frame and magnetic drive bases designed to push opponents out of the ring." },
  { name: "RC Boat", desc: "Brushless water-cooled aquatic speedboats designed for stability and speed." },
  { name: "Hovercraft", desc: "Dual-propeller air cushion vehicles for friction-free terrain navigation." },
  { name: "Line Follower", desc: "PID-tuned microcontroller speedsters utilizing multi-sensor arrays." },
  { name: "Maze Solver", desc: "Micromouse platforms featuring real-time autonomous flood-fill algorithms." },
  { name: "Drone", desc: "Custom-configured multi-rotor systems, FPV racing quadcopters, and drone kits." },
  { name: "Water Rocketry", desc: "Pressurized launch setups with aerodynamic recovery and fins." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="A technology company with purpose"
        subtitle="From a student robotics club to a premier AI & engineering company — the TamizhTech story is built on passion, innovation, and impact."
        breadcrumbActive="About"
      />

      {/* Who We Are */}
      <section className="section bg-white py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeader tag="Who We Are" title="A technology company" highlight="with purpose" align="left" />
              <p className="mt-6 text-text-muted text-base md:text-lg leading-relaxed">
                TamizhTech Robotics Company is a Coimbatore-based technology company specializing in Robotics, AI, Drone Technology, IoT, and Embedded Systems. We serve industries ranging from manufacturing to healthcare while empowering thousands of students with hands-on STEM education.
              </p>
              <div className="mt-8 space-y-3">
                {["Founded in Coimbatore, Tamil Nadu", "8+ years of engineering excellence", "Serving 15+ industry partners nationally", "1000+ students trained across India"].map(pt => (
                  <div key={pt} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-semibold">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                <h4 className="font-bold text-text-primary text-sm tracking-wide uppercase mb-1">TamizhTech Robotics Company</h4>
                <p className="text-xs text-accent font-bold mb-4">The Future of Engineering Starts Here</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-secondary">
                  <div>
                    <span className="text-text-muted text-xs block">Established</span>
                    22 October 2024
                  </div>
                  <div>
                    <span className="text-text-muted text-xs block">Location</span>
                    Coimbatore, Tamil Nadu
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-text-muted text-xs block">Evolution</span>
                    From a student robotics club to a leading robotics, engineering, and technology solutions company.
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-border">
                <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" alt="TamizhTech lab" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-subtle py-24 border-y border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader tag="Our Values" title="What drives" highlight="us" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="h-full p-8 flex flex-col items-start hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-text-primary text-base mb-2 font-heading uppercase tracking-tight">{title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">{desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white text-text-primary py-24 border-t border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader tag="Our Journey" title="The" highlight="TamizhTech story" />
          </AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            {/* Center line with gradient glow (pushed to left on mobile) */}
            <div className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-zinc-200" />
            
            {timeline.map((item, i) => (
              <AnimatedSection 
                key={item.year} 
                delay={i * 0.15} 
                direction={i % 2 === 0 ? "left" : "right"} 
                className={`relative pl-10 md:pl-0 flex flex-col md:flex-row md:gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="w-full md:flex-1">
                  <div className={`bg-white border border-border p-6 rounded-2xl shadow-sm hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i % 2 === 0 ? "md:text-right" : "text-left"}`}>
                    <span className="text-accent text-sm font-extrabold font-mono px-3 py-1 rounded-full bg-accent/5 border border-accent/10">{item.year}</span>
                    <h3 className="text-text-primary font-bold mt-3 mb-2 uppercase text-base tracking-tight">{item.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* Pulsing indicator (pushed to left on mobile) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white border-4 border-accent shadow-md z-10 flex items-center justify-center">
                  <span className="absolute w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <div className="hidden md:block md:flex-1" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-subtle py-24 border-y border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Achievements"
              title="Numbers That Define"
              highlight="Our Journey"
              subtitle="A summary of our impact, wins, and community engagement over the years."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { val: "200+", label: "Robotics Events Participated" },
              { val: "40+", label: "State-Level Events" },
              { val: "100+", label: "National-Level Events" },
              { val: "15+", label: "International Events" },
              { val: "180+", label: "Winning Positions" },
              { val: "₹8 Lakhs+", label: "Prize Money Won" },
              { val: "20+", label: "Robotics Events Organized" },
              { val: "200+", label: "Active Club Members" },
              { val: "1000+", label: "Students Mentored" },
            ].map((ach, idx) => (
              <StaggerItem key={idx}>
                <Card className="flex flex-col items-center text-center p-8 bg-white border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-3xl font-extrabold text-accent mb-2 font-mono">{ach.val}</span>
                  <span className="text-sm font-bold text-text-secondary tracking-wide">{ach.label}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Robotics Competition Excellence */}
      <section className="section bg-white py-24 border-b border-border/30">
        <div className="container px-6">
          <AnimatedSection className="mb-16">
            <SectionHeader
              tag="Competition Excellence"
              title="Robotics Competition"
              highlight="Excellence"
              subtitle="Our team designs, builds, and competes with world-class robotics systems. All 10 categories of competition platforms are engineered in-house and are commercially available in our company for colleges, schools, and teams."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {competitions.map((comp, idx) => (
              <StaggerItem key={idx}>
                <Card className="flex flex-col justify-between h-full p-6 bg-white border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-4">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-text-primary text-base mb-2">{comp.name}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{comp.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[10px] font-bold text-accent tracking-wider uppercase">
                    In-House Available
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>



      {/* CTA */}
      <section className="bg-dark-contrast py-24 text-text-contrast relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4 text-white uppercase">
              Join the TamizhTech movement
            </h2>
            <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed font-sans text-sm">
              Collaborate with us on cutting-edge projects or start your engineering journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full justify-center text-sm font-bold text-white bg-accent hover:bg-accent-hover px-8 py-3 rounded-lg border-none">
                  Contact Us <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/courses" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-sm font-bold text-white border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
