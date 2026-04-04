import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Laptop, Rocket, Globe, Database, Camera, LayoutGrid, Microscope, Smartphone, Layers, Server } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue | High-Spec Engineering & Software | Tamizh Tech Pvt Ltd",
  description: "Explore our industrial robotic hardware and enterprise software platforms. Engineered for precision, scalability, and measurable ROI.",
};

const roboticsProducts = [
  {
    title: "T-Series Industrial Arms",
    category: "Hardware / Automation",
    desc: "MNC-standard 6-axis and 4-axis robotic arms for high-precision assembly, welding, and material handling.",
    specs: ["Sub-millimeter Repeatability", "ISO-9001 Safety Integrated", "Universal PLC Sync"],
    icon: <Bot />
  },
  {
    title: "Autonomous Fleet AMRs",
    category: "Hardware / Logistics",
    desc: "Heavy-duty autonomous mobile robots with dynamic path planning for warehouse and shop floor transport.",
    specs: ["500kg - 1.5T Payload", "LiDAR-Based SLAM", "10-Hour Continuous Op"],
    icon: <TruckIcon />
  },
  {
    title: "Edge IoT Gateways v4",
    category: "Hardware / IoT",
    desc: "Robust edge computing gateways for large-scale industrial sensor networks and real-time data ingestion.",
    specs: ["IP67 Rugged Enclosure", "LTE/LoRaWAN/WiFi 6", "Edge-Level ML Processing"],
    icon: <Database />
  },
  {
    title: "Aerial Inspection UAVs",
    category: "Hardware / Aerospace",
    desc: "High-spec specialized drones equipped with thermal and 4K optical sensors for structural and utility audits.",
    specs: ["45-min Flight Endurance", "Autonomous Waypoint Grid", "Omnidirectional Collision Guard"],
    icon: <Rocket />
  }
];

const softwareProducts = [
  {
    title: "OpsCore Dashboard",
    category: "Software / Enterprise",
    desc: "Centralized operational OS for real-time monitoring of robotic fleets and production line KPIs.",
    features: ["Real-time Telemetry", "Predictive Maintenance AI", "ERP/MES Integration"],
    icon: <LayoutGrid />
  },
  {
    title: "VisionCloud AI",
    category: "Software / AI",
    desc: "Scalable inspection platform using deep learning models for sub-millimeter defect detection in high-speed lines.",
    features: ["Model Training Sandbox", "Cloud-Edge Sync", "Zero-Latency Inference"],
    icon: <Camera />
  },
  {
    title: "ProcureSync SaaS",
    category: "Software / Supply Chain",
    desc: "Multi-tenant B2B marketplace for industrial vendor management and procurement workflow tracking.",
    features: ["Vendor Performance Benchmarking", "Automatic Ledger Generation", "Secure API Vault"],
    icon: <Server />
  },
  {
    title: "Nexus Mobile App",
    category: "Software / Mobile",
    desc: "Enterprise-grade mobile application for floor managers to control and monitor systems remotely.",
    features: ["Cross-platform (iOS/Android)", "Secure Biometric Auth", "Push Diagnostic Alerts"],
    icon: <Smartphone />
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Engineering Inventory</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Precision <br /> Hardware. <br /> Scalable <br /> Software.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            Discover our high-specification robotic hardware and enterprise-grade software platforms, engineered to meet the technical demands of modern manufacturing.
          </p>
        </div>

        {/* Robotics Hardware Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Industrial Robotics</h3>
              <div className="flex-1 h-[2px] bg-primary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {roboticsProducts.map((p) => (
                <div key={p.title} className="bg-white border border-border-light p-10 lg:p-14 flex flex-col industrial-card group shadow-sm hover:shadow-2xl transition-all">
                   <div className="flex items-start justify-between mb-10">
                      <div className="w-16 h-16 bg-bg-page border border-border-light rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500">
                         {cloneIcon(p.icon, "w-8 h-8 stroke-[1.5]")}
                      </div>
                      <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.2em] border border-border-light px-4 py-2 bg-bg-page">{p.category}</span>
                   </div>
                   
                   <h4 className="text-3xl font-black text-text-primary mb-4 tracking-tighter uppercase leading-none">{p.title}</h4>
                   <p className="text-sm text-text-secondary leading-relaxed mb-10 font-bold uppercase tracking-tight opacity-70">{p.desc}</p>
                   
                   <div className="space-y-4 mb-12">
                      {p.specs.map(spec => (
                        <div key={spec} className="flex items-center gap-4 text-[10px] font-black text-text-primary uppercase tracking-widest border-l-2 border-primary-main/20 pl-4">
                           <CheckCircle2 className="w-4 h-4 text-primary-main" /> {spec}
                        </div>
                      ))}
                   </div>
                   
                   <Link href="/contact" className="mt-auto pt-8 border-t border-border-light text-[10px] font-black text-secondary-main flex items-center justify-between group-hover:text-primary-main transition-colors uppercase tracking-[0.2em]">
                      <span>TECHNICAL SPECIFICATIONS</span>
                      <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                   </Link>
                </div>
              ))}
           </div>
        </div>

        {/* Software Platforms Section */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16 border-b border-border-light pb-6">
              <h3 className="text-3xl font-black text-text-primary tracking-tighter uppercase shrink-0">Software Ecosystems</h3>
              <div className="flex-1 h-[2px] bg-secondary-main/10"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {softwareProducts.map((p) => (
                <div key={p.title} className="bg-secondary-main p-10 lg:p-14 flex flex-col text-white industrial-card group shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 opacity-[0.05] hero-grid pointer-events-none"></div>
                   <div className="relative z-10">
                     <div className="flex items-start justify-between mb-10">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-500">
                           {cloneIcon(p.icon, "w-8 h-8 stroke-[1.5]")}
                        </div>
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] border border-white/10 px-4 py-2">{p.category}</span>
                     </div>
                     
                     <h4 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-none">{p.title}</h4>
                     <p className="text-sm text-white/60 leading-relaxed mb-10 font-bold uppercase tracking-tight">{p.desc}</p>
                     
                     <div className="space-y-4 mb-12">
                        {p.features.map(feature => (
                          <div key={feature} className="flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-widest border-l-2 border-primary-main/50 pl-4">
                             <Layers className="w-4 h-4 text-primary-main" /> {feature}
                          </div>
                        ))}
                     </div>
                     
                     <Link href="/contact" className="mt-auto pt-8 border-t border-white/10 text-[10px] font-black text-primary-main flex items-center justify-between transition-colors uppercase tracking-[0.2em]">
                        <span>REQUEST DEMO ACCESS</span>
                        <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                     </Link>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white border-4 border-primary-main p-20 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Settings className="w-32 h-32 text-secondary-main" />
           </div>
           <div className="relative z-10">
             <h4 className="text-4xl font-black text-text-primary tracking-tighter mb-8 uppercase leading-none">Custom Engineering <br /> Deployment.</h4>
             <p className="text-text-secondary leading-relaxed font-bold mb-12 uppercase text-xs tracking-widest">We specialize in designing and manufacturing specialized robotic hardware and software frameworks tailored to your unique industrial requirements.</p>
             <Link href="/contact" className="btn-primary py-6 px-12 inline-flex shadow-xl">REQUEST SYSTEM AUDIT</Link>
           </div>
        </div>

      </div>
    </div>
  );
}

// Custom Truck/Logistics Icon
function TruckIcon(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

// Helper to clone icons with custom classes
function cloneIcon(icon: any, className: string) {
  return <icon.type {...icon.props} className={className} />;
}
