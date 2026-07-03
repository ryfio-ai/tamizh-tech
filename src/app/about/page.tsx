import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Globe, Users, Target, Zap, Microscope, Laptop, Database, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firm Profile | Tamizh Tech Robotics Company",
  description: "Tamizh Tech is a world-class hybrid B2C + B2B robotics platform based in Coimbatore, Tamil Nadu, delivering high-performance products, academy training, and industrial automation solutions.",
};

const values = [
  { icon: <ShieldCheck />, title: "Technical Rigor", desc: "We adhere to international industrial standards across hardware assembly and software architecture." },
  { icon: <Target />, title: "Precision Outcomes", desc: "Our engineering success is measured by the ROI and operational uptime of our global client base." },
  { icon: <Zap />, title: "Digital Agility", desc: "Constant evolution of our tech stack ensures we remain at the frontier of industrial digital transformation." },
  { icon: <Globe />, title: "Pan-India Scale", desc: "Based in Coimbatore with a strategic technical support network spanning 15+ Indian states." },
  { icon: <Users />, title: "Multidisciplinary", desc: "Robotics, AI, Mechanical, and Full-stack Software specialists working in a unified ecosystem." },
  { icon: <BarChart3 />, title: "Logic Driven", desc: "Leveraging data-driven insights to optimize both physical floor performance and digital workflows." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen text-[#F5F6F8]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24 border-l-4 border-[#FF4D2D] pl-6 md:pl-10 py-4 text-left">
          <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-6 md:mb-8 font-sans">Firm Profile</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] uppercase">
            Engineering <br /> The Robotics <br /> Ecosystem.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA1AC] leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-6 md:mt-10">
            Tamizh Tech Robotics Company is a Coimbatore-based engineering firm delivering high-performance robotic products, STEM lab configurations, and custom automation nodes.
          </p>
        </div>

        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24 md:mb-40">
           <div className="space-y-8 md:space-y-12 text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#F5F6F8] tracking-tighter uppercase leading-[0.95] mb-6 md:mb-8">Integrated Engineering. <br /> Domestic Heritage.</h3>
              <div className="space-y-6 md:space-y-8 text-[#9AA1AC] font-bold text-sm uppercase tracking-tight leading-relaxed">
                 <p className="border-l-2 border-[#FF4D2D] pl-4 md:pl-6 italic">
                    Founded in the heart of Coimbatore—India's industrial core—Tamizh Tech Robotics Company was built to solve the fragmentation between physical hardware and digital control systems.
                 </p>
                 <p>
                    What began as a specialized prototyping lab has evolved into a comprehensive robotics ecosystem, supplying 120+ active deployments and maintaining a strategic presence across 15+ Indian states.
                 </p>
                 <p>
                    Our approach is defined by "Hardware-Software Synergy." We don't just build robots; we build the digital and educational infrastructure that makes them intelligent, accessible, and certified.
                 </p>
              </div>
              <div className="pt-10">
                 <Link href="/contact" className="btn-primary py-6 px-12">Consult Leadership</Link>
              </div>
           </div>
           
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
              <div className="bg-[#11141A] border border-[#232833] p-6 md:p-12 flex flex-col justify-center text-center rounded-2xl hover:border-[#FF4D2D] transition-colors">
                 <span className="text-4xl md:text-6xl font-black text-[#FF4D2D] tracking-tighter mb-2 font-mono">120+</span>
                 <span className="text-[9px] md:text-[10px] font-black text-[#858E9B] uppercase tracking-[0.3em]">Deployments</span>
              </div>
              <div className="bg-[#11141A] border border-[#232833] p-6 md:p-12 flex flex-col justify-center text-center rounded-2xl hover:border-[#FF4D2D] transition-colors">
                 <Globe className="w-8 h-8 md:w-12 md:h-12 text-[#FF4D2D] mb-4 md:mb-8 mx-auto" />
                 <p className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-relaxed text-[#9AA1AC]">Strategic Support <br /> in 15+ States.</p>
              </div>
              <div className="col-span-2 bg-[#11141A] border border-[#232833] p-8 md:p-16 rounded-2xl hover:border-[#FF4D2D] transition-colors text-left">
                 <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF4D2D]/10 border border-[#FF4D2D]/20 rounded-xl md:rounded-2xl flex items-center justify-center text-[#FF4D2D] shrink-0">
                       <Microscope className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-heading font-black text-[#F5F6F8] uppercase tracking-tighter">The R&D Hub</h4>
                 </div>
                 <p className="text-xs md:text-sm text-[#9AA1AC] font-bold leading-relaxed uppercase tracking-tight">Our multi-disciplinary facility in Coimbatore houses our hardware fabrication lab, AI vision testing rigs, and enterprise software sandbox.</p>
              </div>
            </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24 md:mb-40 text-left">
           <div className="bg-[#11141A] border-2 border-[#232833] hover:border-[#FF4D2D] transition-colors p-8 md:p-16 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-heading font-black text-[#F5F6F8] tracking-tighter uppercase mb-6 md:mb-8 border-b border-[#232833] pb-6 md:pb-8">The Mission</h2>
              <p className="text-lg md:text-xl text-[#9AA1AC] leading-relaxed font-black uppercase tracking-tight">To deliver transformative engineering outcomes that prioritize technical reliability and operational scale for the global manufacturing and academic sectors.</p>
           </div>
           
           <div className="bg-[#11141A] border-2 border-[#FF4D2D] p-8 md:p-16 rounded-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-heading font-black text-[#F5F6F8] tracking-tighter uppercase mb-6 md:mb-8 border-b border-[#FF4D2D]/30 pb-6 md:pb-8">The Vision</h2>
              <p className="text-lg md:text-xl text-[#9AA1AC] leading-relaxed font-black uppercase tracking-tight">To become India's premier multi-disciplinary engineering firm and robotics ecosystem, setting global benchmarks for hardware-software integration.</p>
           </div>
        </section>

        {/* Values Grid */}
        <section className="bg-[#11141A] border border-[#232833] p-6 sm:p-12 lg:p-24 rounded-2xl shadow-xl">
          <div className="text-center mb-16 md:mb-24">
             <h2 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.5em] mb-4 md:mb-6 font-sans">Engineering Principles</h2>
             <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#F5F6F8] tracking-tighter uppercase">The Technical Creed.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-left">
            {values.map((v, idx) => (
              <div key={idx} className="flex flex-col group text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#FF4D2D] group-hover:bg-[#FF4D2D] group-hover:text-white transition-all duration-500 mb-6 md:mb-8 border border-[#232833] bg-[#181C24] rounded-2xl shadow-sm shrink-0">
                  {cloneIcon(v.icon, "w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]")}
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-black text-[#F5F6F8] mb-3 md:mb-4 uppercase tracking-tighter">{v.title}</h4>
                <p className="text-xs text-[#9AA1AC] leading-relaxed font-bold uppercase tracking-tight opacity-70">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// Helper to clone icons with custom classes
function cloneIcon(icon: any, className: string) {
  return <icon.type {...icon.props} className={className} />;
}
