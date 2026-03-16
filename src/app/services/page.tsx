import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  { icon: "🖨️", title: "3D Printing", desc: "Rapid prototyping for robotics parts, enclosures, and custom mechanisms.", detail: "Ideal for student projects, robot chassis, and PoC builds." },
  { icon: "📻", title: "PCB Design & Fabrication", desc: "Custom PCB design, layout, and manufacturing for embedded systems and IoT.", detail: "From schematic to finished board — fast turnaround, quality guaranteed." },
  { icon: "✂️", title: "Laser Cutting", desc: "Precision cutting of acrylic, wood, cardboard, and sheet metal for robot parts.", detail: "Clean, accurate cuts for robot frames, enclosures, and display models." },
  { icon: "⚙️", title: "Machining Works", desc: "CNC and manual machining for precision components, mounts, and brackets.", detail: "For mechanisms that demand tight tolerances and durable materials." },
  { icon: "🔩", title: "Lathing", desc: "Turning operations for shafts, couplings, pulleys, and custom cylindrical parts.", detail: "Essential for drive systems, axles, and precision motion components." },
  { icon: "🔧", title: "Welding Works", desc: "Custom welding for robotic structures, frames, and heavy-duty automation fixtures.", detail: "Structural integrity for large-scale robots and industrial rigs." },
  { icon: "🤖", title: "Custom Robotics & Automation", desc: "End-to-end design and integration of custom robotic systems for industry and education.", detail: "From concept to deployment — tailored to your exact specification." },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-neon-cyan uppercase">Prototyping & Manufacturing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Build It. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">Fabricate It.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From rapid prototyping to custom automation systems — TamizhTech brings your robotics ideas to life.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="relative rounded-xl border border-white/10 p-2 group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white/[0.03] p-8 h-full">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon-cyan transition-colors">{s.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                <p className="text-slate-500 text-xs leading-relaxed italic">{s.detail}</p>
                <a href={`https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20need%20${encodeURIComponent(s.title)}%20services.`} target="_blank" rel="noopener noreferrer"
                  className="mt-auto text-sm font-bold text-neon-cyan hover:underline flex items-center gap-1">
                  Discuss Your Requirement <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="relative rounded-2xl p-10 text-center border border-neon-cyan/20"
          style={{ background: "radial-gradient(circle at center, rgba(0,243,255,0.07) 0%, rgba(10,10,26,0.9) 100%)" }}>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">Have a custom project in mind?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Talk to our engineering team and get a quote for your automation, prototyping, or robotics requirement.</p>
          <a href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20have%20a%20custom%20manufacturing%20or%20automation%20requirement." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan text-black font-bold rounded-md hover:bg-white hover:shadow-neon-cyan transition-all">
            <MessageCircle className="w-5 h-5" /> Schedule Consultation on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
