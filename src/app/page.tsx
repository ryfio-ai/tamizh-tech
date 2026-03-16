import Link from "next/link";
import { ArrowRight, MessageCircle, Cpu, Zap, Bot, Users, BookOpen, Wrench } from "lucide-react";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cyber-gradient z-0" />
        <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0" />

        {/* Gravity Floating Elements */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none md:pointer-events-auto">
          <Gravity gravity={{ x: 0, y: 0.5 }} className="w-full h-full">
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="20%" y="10%">
              <div className="w-24 h-24 rounded-2xl border border-neon-cyan/50 shadow-neon-cyan flex items-center justify-center bg-neon-dark/80 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-neon-cyan font-bold">AI</span>
              </div>
            </MatterBody>
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="80%" y="20%" angle={15}>
              <div className="w-32 h-32 rounded-full border border-neon-magenta/50 shadow-neon-magenta flex items-center justify-center bg-neon-dark/80 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-neon-magenta font-bold">Robotics</span>
              </div>
            </MatterBody>
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="30%" y="60%" angle={-10}>
              <div className="w-28 h-28 rounded-lg border border-neon-green/50 shadow-neon-green flex items-center justify-center bg-neon-dark/80 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-neon-green font-bold text-center leading-tight">IoT<br/>Systems</span>
              </div>
            </MatterBody>
            <MatterBody matterBodyOptions={{ friction: 0.1, restitution: 0.6 }} x="70%" y="60%" angle={5}>
              <div className="w-20 h-20 rounded-full border border-neon-cyan/50 shadow-neon-cyan flex items-center justify-center bg-neon-dark/80 backdrop-blur-sm cursor-grab active:cursor-grabbing">
                <span className="text-neon-cyan font-bold">Auto</span>
              </div>
            </MatterBody>
          </Gravity>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-md">
            <span className="text-xs font-bold tracking-widest text-neon-cyan uppercase">Based in Coimbatore, Tamil Nadu</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight mb-6 max-w-4xl tracking-tight">
            Building the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">Robotics, AI &amp; Automation.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 font-medium leading-relaxed">
            For students, colleges, and enterprises in Coimbatore and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
            <Link href="/robotics-club" className="w-full sm:w-auto px-8 py-4 bg-neon-cyan text-black font-bold text-lg rounded-md hover:bg-white hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2 group">
              Explore Robotics Club <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/courses" className="w-full sm:w-auto px-8 py-4 border-2 border-neon-magenta text-white font-bold text-lg rounded-md bg-neon-magenta/10 hover:bg-neon-magenta/20 hover:shadow-neon-magenta transition-all flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 text-neon-magenta" /> View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="glass-panel rounded-2xl p-6 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-4xl md:text-5xl font-black text-neon-cyan mb-2">150+</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">Events in last 3 years</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-4xl md:text-5xl font-black text-neon-magenta mb-2">50+</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">Enterprise Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-4xl md:text-5xl font-black text-neon-green mb-2">100+</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">Solutions Deployed</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-4xl md:text-5xl font-black text-neon-violet mb-2">15+</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">States Served</p>
          </div>
        </div>
      </section>

      {/* Quick Links Section with GlowingEffect */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">TamizhTech</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A world-class robotics ecosystem — from hands-on student clubs to enterprise automation solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Users className="w-7 h-7 text-neon-cyan" />, title: "Robotics Club", desc: "Join TamizhTech's community of builders, compete in national events, and access mentorship.", href: "/robotics-club" },
            { icon: <Bot className="w-7 h-7 text-neon-magenta" />, title: "Products", desc: "Industrial robots, drones, and educational kits for every level and application.", href: "/products" },
            { icon: <Wrench className="w-7 h-7 text-neon-green" />, title: "Services", desc: "From 3D printing to custom automation systems — we prototype and manufacture.", href: "/services" },
            { icon: <Cpu className="w-7 h-7 text-neon-violet" />, title: "Clients", desc: "Trusted by 50+ enterprises and colleges across 15+ Indian states.", href: "/clients" },
            { icon: <BookOpen className="w-7 h-7 text-neon-cyan" />, title: "Courses", desc: "Robotics, Embedded Systems, and IoT courses in Tamil, English & Hindi.", href: "/courses" },
            { icon: <Zap className="w-7 h-7 text-neon-magenta" />, title: "Team", desc: "Meet the passionate engineers and educators behind TamizhTech.", href: "/team" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="relative rounded-xl border border-white/10 p-2 group hover:scale-[1.02] transition-transform">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-7 h-full">
                <div className="p-3 rounded-xl bg-white/5 w-fit">{item.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-neon-cyan">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
