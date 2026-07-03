"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Bot, Layers, GraduationCap, ArrowUpRight, Zap, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-white overflow-hidden">
      
      {/* Grid background layer */}
      <div className="absolute inset-0 h-[1000px] hero-grid z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center pt-32 pb-20 z-10">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col space-y-8 max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide">Next-Gen Robotics & AI Solutions</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-secondary leading-[1.05]"
            >
              Engineering the <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Robotic Future.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp} 
              className="text-lg text-text-secondary leading-relaxed max-w-lg font-medium"
            >
              TamizhTech designs and deploys high-performance robotic platforms, drone systems, and custom AI layers to solve critical industrial automation challenges.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <Link href="/services" className="btn-primary flex gap-3 group">
                Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request Proposal
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center h-[550px] w-full"
          >
            {/* Soft background glow */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl -z-10" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl -z-10 translate-x-20" />

            {/* Premium glassomorphic visual container */}
            <div className="w-full h-full max-w-[480px] bg-white/60 backdrop-blur-md border border-border p-6 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group">
              
              {/* Decorative top dot matrix */}
              <div className="flex justify-between items-center border-b border-border/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
                  <span className="text-xs font-semibold text-text-secondary tracking-widest uppercase">TT-Robotics Node-01</span>
                </div>
                <div className="text-[10px] font-mono text-text-muted">SYSTEM: ACTIVE</div>
              </div>

              {/* Animated Floating Robot SVG Mock */}
              <div className="flex-1 flex items-center justify-center py-6">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative w-48 h-48 flex items-center justify-center"
                >
                  <Bot className="w-36 h-36 text-primary stroke-[1.2]" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-accent/40 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute w-4 h-4 bg-accent rounded-full -top-1 left-24"
                  />
                </motion.div>
              </div>

              {/* Real-time telemetry items */}
              <div className="grid grid-cols-2 gap-4 border-t border-border/80 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">LATENCY</span>
                  <span className="text-sm font-bold text-secondary">0.4ms</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">ACCURACY</span>
                  <span className="text-sm font-bold text-secondary">99.98%</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-border bg-bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between opacity-60">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary shrink-0 text-center md:text-left">
              Trusted by Innovative Teams at
            </span>
            <div className="flex flex-wrap gap-10 md:gap-16 items-center justify-center grayscale">
              <span className="text-sm font-extrabold uppercase tracking-widest text-text-secondary">TIER-1 AUTOMOTIVE</span>
              <span className="text-sm font-extrabold uppercase tracking-widest text-text-secondary">DEFENCE RESEARCH</span>
              <span className="text-sm font-extrabold uppercase tracking-widest text-text-secondary">AEROSPACE CO.</span>
              <span className="text-sm font-extrabold uppercase tracking-widest text-text-secondary">STEM FOUNDATIONS</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="w-12 h-1.5 bg-primary" />
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tighter uppercase leading-[1.1]">
                Bridging physical logic with digital intelligence.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed text-base font-medium">
                TamizhTech Robotics was founded to address the critical gaps between advanced hardware, smart drone telemetry, and cloud control systems. We design bespoke systems that scale seamlessly.
              </motion.p>
              <motion.div variants={fadeInUp} className="pt-2">
                <Link href="/about" className="btn-secondary group flex items-center gap-2 w-fit">
                  Learn About Our Journey <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Premium visual block */}
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl -z-10" />
              <div className="p-8 border border-border bg-white rounded-xl flex flex-col justify-between h-56 shadow-sm">
                <Cpu className="w-10 h-10 text-primary" />
                <div>
                  <h4 className="text-4xl font-extrabold text-secondary tracking-tighter">15+</h4>
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mt-1">States Covered</p>
                </div>
              </div>
              <div className="p-8 border border-border bg-secondary text-white rounded-xl flex flex-col justify-between h-56 shadow-lg">
                <Layers className="w-10 h-10 text-accent" />
                <div>
                  <h4 className="text-4xl font-extrabold tracking-tighter text-white">120+</h4>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mt-1">Robots Deployed</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-bg-secondary border-y border-border">
        <div className="container mx-auto px-6 lg:px-16">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Core Competencies</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary uppercase">
              Transformative Industrial Capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Bot className="w-8 h-8 text-primary" />, 
                title: "Robotics & Hardware", 
                desc: "Turnkey industrial robots, delta manipulators, and custom end-effectors built for precise manufacturing pipelines." 
              },
              { 
                icon: <Cpu className="w-8 h-8 text-accent" />, 
                title: "Artificial Intelligence", 
                desc: "Integrated computer vision, defect detection networks, and real-time operational decision algorithms." 
              },
              { 
                icon: <Layers className="w-8 h-8 text-primary" />, 
                title: "Drone & IoT Systems", 
                desc: "Autonomous aerial mapping UAVs, telemetry modules, and factory floor sensor networks built on ESP32." 
              }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 border border-border bg-white rounded-xl shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[300px]"
              >
                <div className="space-y-6">
                  <div className="p-3 bg-bg-secondary w-fit rounded-lg">{srv.icon}</div>
                  <h3 className="text-xl font-bold tracking-tight text-secondary uppercase">{srv.title}</h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">{srv.desc}</p>
                </div>
                <Link href="/services" className="text-xs font-bold text-primary flex items-center gap-2 pt-6 hover:underline">
                  Discover Capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Academy & Training</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary uppercase">
                Featured Certification Tracks.
              </h2>
            </div>
            <Link href="/courses" className="btn-secondary group flex items-center gap-2 shrink-0">
              View All Courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "College Students",
                title: "Advanced Autonomous Robotics Integration",
                desc: "A hands-on engineering track focusing on custom kinematics, hardware integration, and embedded control modules.",
                duration: "8 Weeks",
                mode: "Offline/Hybrid"
              },
              {
                category: "School Students",
                title: "STEM Foundation: Robotics & Sensor Systems",
                desc: "Basic mechanics, logic structures, and electronic sensor connectivity using Arduino microcontrollers.",
                duration: "4 Weeks",
                mode: "Offline"
              }
            ].map((course, idx) => (
              <div key={idx} className="p-8 border border-border bg-white rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div className="space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent px-2 py-0.5 border border-accent/20 rounded bg-accent/5 w-fit block">
                    {course.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-secondary uppercase leading-tight">{course.title}</h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">{course.desc}</p>
                </div>

                <div className="flex items-center justify-between border-t border-border mt-8 pt-6">
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Duration</span>
                      <span className="text-xs font-semibold text-secondary">{course.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Mode</span>
                      <span className="text-xs font-semibold text-secondary">{course.mode}</span>
                    </div>
                  </div>
                  <Link href="/courses" className="text-xs font-bold text-primary flex items-center gap-2 hover:underline">
                    Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 bg-bg-secondary border-t border-border">
        <div className="container mx-auto px-6 lg:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">R&D Showcases</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary uppercase">
                Featured Implementations.
              </h2>
            </div>
            <Link href="/projects" className="btn-secondary group flex items-center gap-2 shrink-0">
              View Portfolios <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Inspection UAV",
                desc: "An advanced quadcopter integrating dual companion computing layers and LIDAR nodes for high-altitude thermal structural testing.",
                tech: ["Drone Tech", "IoT", "C++"],
                image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI Quality Inspection Rig",
                desc: "A custom vision module identifying surface microscopic fractures in manufacturing sheets at 40 frames-per-second.",
                tech: ["AI", "Python", "OpenCV"],
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "6-Axis Welding Cell Simulator",
                desc: "A virtual testing workspace recreating robotic kinematics algorithms to ensure trajectory correctness.",
                tech: ["Robotics", "MATLAB", "Kinematics"],
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              }
            ].map((proj, idx) => (
              <div key={idx} className="border border-border bg-white rounded-xl shadow-sm overflow-hidden flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden bg-bg-secondary">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold tracking-tight text-secondary uppercase">{proj.title}</h3>
                    <p className="text-text-secondary text-xs font-medium leading-relaxed">{proj.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/80">
                    {proj.tech.map((t, tid) => (
                      <span key={tid} className="text-[9px] font-bold uppercase tracking-wider text-text-secondary bg-bg-secondary px-2 py-0.5 rounded border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          
          <div className="max-w-3xl mb-20 space-y-4 text-center mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary uppercase">
              Endorsed by Partners.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "The customized drone building program and STEM lab setup provided by TamizhTech transformed our engineering department's R&D capability. Highly practical and expert execution.",
                author: "Dr. K. Raghavan",
                role: "Director of Research, Technical University"
              },
              {
                text: "TamizhTech's industrial automation middleware and edge vision systems significantly streamlined our factory floor quality inspection processes. The implementation was seamless.",
                author: "Anand Krishnan",
                role: "Operations Head, Precision Components Group"
              }
            ].map((test, idx) => (
              <div key={idx} className="p-8 border border-border bg-white rounded-xl shadow-sm relative flex flex-col justify-between min-h-[220px]">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <p className="text-text-secondary text-sm italic font-medium leading-relaxed relative z-10">
                  &quot;{test.text}&quot;
                </p>
                <div className="pt-6 border-t border-border mt-6 flex flex-col">
                  <span className="text-sm font-bold text-secondary">{test.author}</span>
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-0.5">{test.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-5xl mx-auto border border-border p-12 lg:p-20 rounded-2xl bg-bg-secondary flex flex-col lg:flex-row items-center gap-12 justify-between relative overflow-hidden">
            <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
            <div className="relative z-10 space-y-4 max-w-xl text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-secondary tracking-tighter uppercase leading-none">
                Ready to accelerate <br />
                your operations?
              </h2>
              <p className="text-text-secondary font-medium leading-relaxed text-sm">
                Discuss your engineering challenges with our multi-disciplinary team. We provide full technical audits and design blueprints.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary py-4 px-8 text-sm rounded-lg shadow-lg">
                Schedule Engineering Call
              </Link>
              <Link href="/services" className="btn-secondary py-4 px-8 text-sm rounded-lg">
                Review Service Specs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


