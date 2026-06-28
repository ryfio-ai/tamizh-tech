import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Trophy, Zap, Users, ShieldCheck, Target, Rocket, Award, MoveRight, CheckCircle2 } from "lucide-react";

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
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white text-[#F5F6F8]">
      <div className="container mx-auto px-6">
        
        {/* Branding & Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 border-b border-[#232833] pb-24 text-left">
          <div className="w-48 h-48 lg:w-64 lg:h-64 relative shrink-0 bg-[#11141A] border border-[#232833] rounded-2xl p-6 flex items-center justify-center shadow-inner">
             <Image 
               src="/logo/TTRC LOGO.png" 
               alt="Tamil Robotics Club Logo" 
               fill 
               className="object-contain p-4"
               priority
             />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-6 md:mb-8 font-sans">Student Engineering Hub</h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] mb-6 md:mb-10 uppercase">
              Tamil <span className="text-[#FF4D2D]">Robotics</span> <br /> Club.
            </h2>
            <p className="text-lg sm:text-xl text-[#9AA1AC] leading-relaxed font-medium mb-8 md:mb-12">
              Build. Compete. Innovate. Join India's most tech-forward robotics community for school and college students. Experience professional-grade engineering from Coimbatore to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/robotics-club/join" className="w-full sm:w-auto justify-center text-center btn-primary px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-lg shadow-xl font-black">
                JOIN THE CLUB <ArrowRight className="w-5 h-5 ml-4" />
              </Link>
              <a href="https://wa.me/918148045030" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center text-center btn-secondary px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-lg font-black border-[#232833] hover:border-[#FF4D2D]">
                SPEAK WITH MENTORS
              </a>
            </div>
          </div>
        </div>

        {/* Competition Grid Section */}
        <div className="mb-40 text-left">
          <div className="max-w-2xl mb-20">
             <h3 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.4em] mb-6">Core Events</h3>
             <h4 className="text-4xl font-heading font-black text-[#F5F6F8] uppercase tracking-tighter mb-6 leading-none">Competition Domain Expertise.</h4>
             <p className="text-[#858E9B] font-bold uppercase text-xs tracking-widest leading-relaxed">Systematic training for precision competitions and innovative hardware building.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <div key={event.name} className="bg-[#11141A] border border-[#232833] rounded-2xl overflow-hidden group h-full flex flex-col hover:border-[#FF4D2D] transition-colors">
                <div className="relative aspect-video overflow-hidden bg-[#181C24] border-b border-[#232833]">
                   {event.image ? (
                     <Image 
                       src={event.image} 
                       alt={event.name} 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-gray-500">
                        {cloneIcon(event.icon, "w-12 h-12")}
                     </div>
                   )}
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#181C24] text-[#FF4D2D] border border-[#232833] mb-6 rounded-lg group-hover:bg-[#FF4D2D] group-hover:text-white transition-colors duration-300">
                    {cloneIcon(event.icon, "w-5 h-5 stroke-[2]")}
                  </div>
                  <h5 className="text-xl font-heading font-black text-[#F5F6F8] mb-3 uppercase tracking-tighter">{event.name}</h5>
                  <p className="text-[#9AA1AC] text-xs font-semibold leading-relaxed group-hover:text-[#F5F6F8] transition-colors mb-6">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join TRC Section */}
        <div className="mb-40 py-24 bg-[#11141A] border-y border-[#232833] relative overflow-hidden text-left">
           <div className="container relative z-10 mx-auto px-10">
              <div className="text-center mb-24">
                  <h2 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.5em] mb-4">Why Join TRC?</h2>
                  <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase leading-none text-[#F5F6F8]">Experience World-Class <br /> Innovation.</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                {benefits.map((b) => (
                  <div key={b.title} className="border-l border-[#FF4D2D]/30 pl-8 space-y-4">
                    <h4 className="text-lg font-heading font-black uppercase tracking-tight text-[#FF4D2D]">{b.title}</h4>
                    <p className="text-[#9AA1AC] text-xs font-bold leading-relaxed uppercase tracking-tighter">{b.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Membership CTA Section */}
        <div className="max-w-4xl mx-auto p-8 sm:p-16 lg:p-24 border-2 border-[#FF4D2D] text-center bg-[#11141A] shadow-2xl rounded-2xl">
           <h2 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.5em] mb-6 md:mb-10">Become A Global Member</h2>
           <p className="text-[#F5F6F8] text-xl sm:text-2xl md:text-4xl font-heading font-black tracking-tighter uppercase mb-8 md:mb-12 leading-tight">
              Unlock priority mentorship, arena access, <br className="hidden sm:inline" /> and exclusive sponsorship.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
             <Link href="/robotics-club/join" className="w-full sm:w-auto justify-center text-center btn-primary px-8 py-5 sm:px-16 sm:py-6 text-base sm:text-lg font-black">APPLY FOR MEMBERSHIP</Link>
             <a href="https://wa.me/918148045030" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center text-center btn-secondary px-8 py-5 sm:px-16 sm:py-6 text-base sm:text-lg font-black border-[#232833] hover:border-[#FF4D2D]">MESSAGE ON WHATSAPP</a>
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
