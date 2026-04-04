import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Lightbulb, Package, Warehouse, GraduationCap, Microscope, Globe, ShieldCheck, Database, Layers, Rocket } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | Engineering & Software Integration | Tamizh Tech Pvt Ltd",
  description: "Specialized engineering and software solutions for Manufacturing, Logistics, Aerospace, and Enterprise Operations across India.",
};

const industries = [
  {
    id: "manufacturing",
    icon: <Factory />,
    title: "General Manufacturing",
    problem: "Inefficient OEE and rising operational downtime.",
    solution: "Bespoke automation for high-volume assembly lines and neural-vision based QC.",
    benefits: ["35% Higher Throughput", "Zero-Defect Quality Control", "Real-time Machine Monitoring"]
  },
  {
    id: "logistics",
    icon: <Warehouse />,
    title: "Logistics & E-commerce",
    problem: "Manual sorting bottlenecks and low warehouse density.",
    solution: "Intelligent AMR fleets integrated with custom WMS/ERP software ecosystems.",
    benefits: ["2X Sorting Speed", "Optimized Path Planning", "Live Inventory Visibility"]
  },
  {
    id: "aerospace",
    icon: <Rocket className="w-12 h-12" />,
    title: "Aerospace & Defense",
    problem: "Need for ultra-precise prototyping and high-spec validation.",
    solution: "Modular robotic testing rigs and precision fabrication from Coimbatore R&D hub.",
    benefits: ["Rapid Tech Iteration", "Sub-mm Precision", "High-Spec Documentation"]
  },
  {
    id: "enterprise",
    icon: <Database />,
    title: "Enterprise Operations",
    problem: "Disconnected data silos and fragmented internal workflows.",
    solution: "Scalable B2B software tools and custom SaaS platforms for operational oversight.",
    benefits: ["Unified Data Lakes", "Automated Workflows", "Enterprise-grade Security"]
  },
  {
    id: "textiles",
    icon: <Layers />,
    title: "Textile & Apparel Tech",
    problem: "Traditional process reliance and high material wastage.",
    solution: "IoT-enabled loom monitoring and AI-vision for fabric defect detection.",
    benefits: ["15% Waste Reduction", "Predictive Maintenance", "Digital Loom Tracking"]
  },
  {
    id: "agriculture",
    icon: <Globe />,
    title: "Agri-Tech & Processing",
    problem: "Lack of automated grading and erratic processing speeds.",
    solution: "Robotic picking arms and specialized sorting logic for food processing.",
    benefits: ["Consistent Grading", "Reduced Human Contact", "Scalable Processing Lines"]
  }
];

export default function IndustriesPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-secondary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8 font-sans">Vertical Expertise</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] uppercase">
            Sector-Specific <br /> Engineering Excellence.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            We understand the regulatory, operational, and technical nuances of diverse sectors, delivering solutions that generate immediate ROI and long-term scalability.
          </p>
        </div>

        {/* Industries List Section */}
        <div className="space-y-12 mb-32">
          {industries.map((item) => (
            <div 
              key={item.id} 
              id={item.id}
              className="bg-white border border-border-light flex flex-col lg:flex-row items-stretch industrial-card group overflow-hidden"
            >
              <div className="w-full lg:w-1/4 bg-bg-page border-r border-border-light flex flex-col items-center justify-center p-12 text-secondary-main group-hover:bg-secondary-main group-hover:text-white transition-all duration-500">
                <div className="w-24 h-24 border border-border-light flex items-center justify-center rounded-3xl mb-6 bg-white shadow-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                   {cloneIcon(item.icon, "w-10 h-10 stroke-[1.5]")}
                </div>
                <h3 className="text-xl font-black tracking-tighter uppercase text-center mt-2 font-heading">{item.title}</h3>
              </div>
              
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-10">
                    <div>
                      <p className="text-[10px] font-black text-primary-main uppercase tracking-widest mb-3 font-sans opacity-70">The Challenge</p>
                      <h4 className="text-2xl font-black text-text-primary uppercase tracking-tight leading-tight">{item.problem}</h4>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary-main uppercase tracking-widest mb-3 font-sans opacity-70">Our Approach</p>
                      <p className="text-text-secondary leading-relaxed font-bold mb-12 uppercase text-xs tracking-widest max-w-2xl mx-auto">Join a network of global industrial leaders leveraging Tamizh Tech Pvt Ltd&apos;s dual hardware-software ecosystem for operational excellence.</p>
                      <Link href="/contact" className="btn-primary py-6 px-12 inline-flex shadow-xl">PARTNER WITH TAMIZH TECH PVT LTD</Link>
                    </div>
                  </div>
                  
                  <div className="bg-bg-page/50 p-8 border border-border-light/50">
                    <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-8 font-sans text-center border-b border-border-light pb-4">Business Outcomes</p>
                    <div className="space-y-5">
                      {item.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-4 text-xs font-black text-text-primary uppercase tracking-tight">
                          <ShieldCheck className="w-5 h-5 text-primary-main flex-shrink-0" /> {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 flex justify-end">
                   <Link href="/contact" className="text-[10px] font-black text-secondary-main flex items-center gap-4 group-hover:text-primary-main transition-all uppercase tracking-widest border-b-2 border-primary-main pb-1">
                     Technical Discussion <MoveRight className="w-4 h-4 group-hover:translate-x-1" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Strategy */}
        <div className="bg-secondary-main p-20 text-white grid lg:grid-cols-2 gap-24 items-center mb-32 relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03] hero-grid pointer-events-none"></div>
           <div className="relative z-10">
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-[0.95] uppercase">Coimbatore Core. <br />Pan-India Scale.</h2>
              <p className="text-white/60 leading-relaxed font-bold text-sm max-w-xl italic uppercase tracking-wider">
                Headquartered in India&apos;s engineering heartland, we leverage the region&apos;s manufacturing heritage to provide on-ground technical support for global brands and domestic leaders.
              </p>
              <div className="flex gap-6 mt-12">
                 <Link href="/about" className="btn-primary py-6 px-12">Firm Profile</Link>
              </div>
           </div>
           
           <div className="relative z-10 grid grid-cols-2 gap-4">
              {[
                { label: "Deployment Centers", val: "15+" },
                { label: "Active Deployments", val: "120+" },
                { label: "Engineering Staff", val: "50+" },
                { label: "Strategic Partners", val: "10+" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 p-8 text-center flex flex-col justify-center backdrop-blur-sm">
                  <span className="text-4xl font-black text-primary-main tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest mt-3 leading-tight">{stat.label}</span>
                </div>
              ))}
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

