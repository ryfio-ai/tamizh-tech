import type { Metadata } from "next";
import { Bot, Zap, Globe, Users, Trophy, Lightbulb, GraduationCap, Briefcase, Microscope, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TamizhTech Robotics Company",
  description: "Learn about TamizhTech's journey from Coimbatore to becoming a national leader in robotics education and industrial automation.",
};

const values = [
  { icon: <Globe className="w-6 h-6" />, title: "National Deployment", desc: "Serving 15+ states across India with accessible, localized robotics technology." },
  { icon: <Users className="w-6 h-6" />, title: "Elite Community", desc: "Building a supportive, multi-disciplinary ecosystem for students and professionals." },
  { icon: <Trophy className="w-6 h-6" />, title: "Technical Excellence", desc: "Setting the standard for competition-grade robotics and industrial solutions." },
  { icon: <Zap className="w-6 h-6" />, title: "Persistent Innovation", desc: "Constantly evolving our hardware and software to match global AI standards." },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Talent Empowerment", desc: "Giving students the high-end technical tools to engineer their own future." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Industrial Precision", desc: "Delivering MNC-grade quality in every specialized product and service." },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Corporate Profile</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Pioneering Precision <span className="text-primary-main">in Coimbatore.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-4xl mx-auto font-regular leading-relaxed">
            From a localized technical lab to a nationally-recognized robotics innovation ecosystem. 
            TamizhTech defines the future of Indian automation.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-8 tracking-tight">Born in Coimbatore. <span className="text-primary-main">Built for India.</span></h2>
            <div className="space-y-6 text-text-tertiary text-lg leading-relaxed font-regular">
              <p>
                TamizhTech was initiated with a persistent vision: to democratize world-class robotics and AI education 
                across the Indian subcontinent. Starting from a specialized innovation lab in Coimbatore, 
                we have scaled into a comprehensive hub serving elite institutions and enterprises across 15+ states.
              </p>
              <p>
                Today, TamizhTech drives industrial automation through precise engineering, hands-on technical training, 
                and a thriving robotics club community. Our mission is to establish a global benchmark for robotics 
                innovation by 2030, localized for unique technical challenges.
              </p>
            </div>
            <div className="mt-12 group cursor-pointer">
                <div className="flex items-center gap-3 text-primary-main font-bold">
                    Learn about our leadership <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-video rounded-[2.5rem] overflow-hidden border border-border-light shadow-2xl bg-bg-primary p-12 flex flex-col items-center justify-center text-center">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-main/10 to-transparent" />
            <div className="text-[120px] font-black text-primary-main leading-none mb-4 tracking-tighter shadow-sm">2030</div>
            <div className="text-text-primary text-2xl font-extrabold tracking-[0.3em] uppercase mb-4">Vision</div>
            <p className="text-text-tertiary text-lg max-w-xs font-medium">To become the global benchmark for technical innovation — from Tamil Nadu to the world.</p>
          </div>
        </div>
      </section>

      {/* Strategic Mission & Vision */}
      <section className="py-24 bg-bg-elevated border-y border-border-light">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-bg-primary p-12 md:p-16 rounded-[2rem] border border-border-light shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Target className="w-32 h-32 text-primary-main" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary-light text-primary-main rounded-2xl flex items-center justify-center mb-10 shadow-inner">
                <Microscope className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-6 tracking-tight">Technical <span className="text-primary-main">Mission</span></h2>
              <p className="text-text-tertiary leading-relaxed text-xl font-regular">
                To empower global institutions with transformative robotics and automation ecosystems that deliver 
                measurable technical results and inspire the next generation of engineers.
              </p>
            </div>
          </div>
          
          <div className="bg-bg-primary p-12 md:p-16 rounded-[2rem] border border-border-light shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Globe className="w-32 h-32 text-primary-main" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary-light text-primary-main rounded-2xl flex items-center justify-center mb-10 shadow-inner">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-6 tracking-tight">Global <span className="text-primary-main">Vision</span></h2>
              <p className="text-text-tertiary leading-relaxed text-xl font-regular">
                To be the core partner for educational technology transformation in 50+ countries, 
                setting the universal benchmark for localized innovation and specialized technical success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Corporate Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-6 tracking-tight">Corporate <span className="text-primary-main">Values</span></h2>
          <p className="text-text-tertiary text-xl max-w-2xl mx-auto">The engineering principles that guide our localized technical operations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="mnc-card flex flex-col p-10 group">
              <div className="w-14 h-14 bg-primary-light text-primary-main rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-main group-hover:text-text-on-primary transition-all duration-300 shadow-sm border border-primary-light/50">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-main transition-colors">{v.title}</h3>
              <p className="text-text-tertiary text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
