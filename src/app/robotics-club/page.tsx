import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Brain, Trophy, Zap, Users, ShieldCheck, Target, Rocket, Award, MoveRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tamil Robotics Club | TRC | Premier Robotics Hub",
  description: "Join the Tamil Robotics Club (TRC) — India's most tech-forward robotics hub for school and college students. Experience hands-on engineering from Coimbatore to the world.",
};

const events = [
  { name: "Robo Soccer", desc: "Team-based autonomous or RC robot soccer competition.", image: "/product/soccer rc.jpg", icon: <Rocket /> },
  { name: "Robo Sumo", desc: "Push rivals out of the ring using strength and strategy.", image: "/product/sumo rc.jpg", icon: <Target /> },
  { name: "Robo Race", desc: "Time-trial speed racing on custom tracks.", image: "/events/robo-race.png", icon: <Zap /> },
  { name: "Robo War", desc: "Battle bots competition with custom-built combat machines.", image: "/events/robo-war.png", icon: <ShieldCheck /> },
  { name: "Line Follower", desc: "Automated bots that follow a marked path at high speed.", image: "/events/line-follower.png", icon: <Brain /> },
  { name: "Maze Solver", desc: "Advanced autonomous navigation with maze-solving AI.", image: "/events/maze-solver.png", icon: <Zap /> },
  { name: "Water Rocket", desc: "Design and launch water-powered rockets for altitude.", image: "/events/water-rocket.png", icon: <Rocket /> },
  { name: "Drone Race", desc: "FPV drone piloting through timed obstacle courses.", image: "/events/drone-race.png", icon: <Zap /> },
];

const benefits = [
  { title: "Expert Mentorship", desc: "Weekly structured training sessions for all club navigation events led by industry mentors." },
  { title: "Global Recognition", desc: "Comprehensive support for 150+ national and international robotics competitions." },
  { title: "Advanced Labs", desc: "Unlimited hands-on access to top-tier robotics tools, arenas, and precision hardware." },
  { title: "Elite Network", desc: "Connect with builders, innovators, and technical mentors across 15+ Indian states." },
];

export default function RoboticsClubPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white">
      <div className="container mx-auto px-6">
        
        {/* Branding & Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 border-b border-border-light pb-24">
          <div className="w-48 h-48 lg:w-64 lg:h-64 relative shrink-0">
             <Image 
               src="/logo/TRC.PNG" 
               alt="Tamil Robotics Club Logo" 
               fill 
               className="object-contain"
               priority
             />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Student Engineering Hub</h1>
            <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] mb-10 uppercase">
              Tamil <span className="text-primary-main">Robotics</span> <br /> Club.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-medium mb-12">
              Build. Compete. Innovate. Join India&apos;s most tech-forward robotics community for school and college students. Experience professional-grade engineering from Coimbatore to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/robotics-club/join" className="btn-primary px-12 py-6 text-lg shadow-xl">
                JOIN THE CLUB <ArrowRight className="w-5 h-5 ml-4" />
              </Link>
              <Link href="https://wa.me/918148045030" className="btn-secondary px-12 py-6 text-lg border-border-medium">
                SPEAK WITH MENTORSHIP TEAM
              </Link>
            </div>
          </div>
        </div>

        {/* Competition Grid Section */}
        <div className="mb-40">
          <div className="max-w-2xl mb-20">
             <h3 className="text-[10px] font-black text-primary-main uppercase tracking-[0.4em] mb-6">Core Events</h3>
             <h4 className="text-4xl font-black text-text-primary uppercase tracking-tighter mb-6 leading-none">Competition Domain Expertise.</h4>
             <p className="text-text-secondary font-bold uppercase text-xs tracking-widest leading-relaxed">Systematic training for precision competitions and innovative hardware building.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <div key={event.name} className="industrial-card group h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-bg-page border-b border-border-light">
                   {event.image ? (
                     <Image 
                       src={event.image} 
                       alt={event.name} 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-text-muted/20">
                        {cloneIcon(event.icon, "w-12 h-12")}
                     </div>
                   )}
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary-main text-white mb-6 group-hover:bg-primary-main transition-colors rotate-3 group-hover:rotate-0">
                    {cloneIcon(event.icon, "w-5 h-5 stroke-[2]")}
                  </div>
                  <h5 className="text-xl font-black text-text-primary mb-3 uppercase tracking-tighter">{event.name}</h5>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed group-hover:text-text-primary transition-colors mb-6">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join TRC Section */}
        <div className="mb-40 py-24 bg-secondary-main text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-5 hero-grid"></div>
           <div className="container relative z-10 mx-auto px-10">
              <div className="text-center mb-24">
                 <h2 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-10">Why Join TRC?</h2>
                 <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">Experience MNC-Standard <br /> Innovation.</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {benefits.map((b) => (
                  <div key={b.title} className="border-l border-white/10 pl-8 space-y-4">
                    <h4 className="text-lg font-black uppercase tracking-tight text-primary-main">{b.title}</h4>
                    <p className="text-white/60 text-xs font-bold leading-relaxed uppercase tracking-tighter">{b.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Membership CTA Section */}
        <div className="max-w-5xl mx-auto p-16 lg:p-24 border-4 border-text-primary text-center bg-white shadow-[20px_20px_0px_0px_#1F2A44]">
           <h2 className="text-[10px] font-black text-primary-main uppercase tracking-[0.5em] mb-10">Become A Global Member</h2>
           <p className="text-text-primary text-3xl md:text-4xl font-black tracking-tighter uppercase mb-12 leading-tight">
              Unlock priority mentorship, arena access, <br /> and exclusive sponsorship.
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <Link href="/robotics-club/join" className="btn-primary px-16 py-6 text-lg">APPLY FOR MEMBERSHIP</Link>
             <Link href="https://wa.me/918148045030" className="btn-secondary px-16 py-6 text-lg border-text-primary/20">MESSAGE ON WHATSAPP</Link>
           </div>
        </div>

      </div>
    </div>
  );
}

// Helper to clone icons with custom classes
function cloneIcon(icon: any, className: string) {
  return <icon.type {...icon.props} className={className} />;
}
