import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Factory, 
  Settings, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Database, 
  MoveRight, 
  Send,
  Cpu,
  Monitor,
  HardDrive,
  Eye,
  LineChart
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Industrial Automation & Robotics Solutions | Coimbatore | Tamizh Tech",
  description: "Specialized B2B industrial engineering solutions including PLC programming, Machine Vision (OpenCV), AGVs/AMRs, and predictive IoT monitoring nodes for factory floors.",
  keywords: [
    "industrial automation company coimbatore",
    "robotics company in tamil nadu",
    "plc programming coimbatore",
    "machine vision systems tamil nadu"
  ],
  openGraph: {
    title: "Industrial Automation & Robotics Integration | Tamizh Tech",
    description: "Empowering factory floors with custom robotics, vision checks, and IoT dashboards. Coimbatore engineering core.",
    url: "https://tamizhtech.in/industries",
    type: "website"
  }
};

const solutions = [
  {
    id: "automation",
    icon: <Factory className="w-10 h-10 stroke-[1.5]" />,
    title: "Factory Automation",
    challenge: "Low OEE and high manual labor error rates on assembly lines.",
    approach: "Deploy custom mechanical pick-and-place nodes, conveyor lines, and pneumatic sorters.",
    metrics: ["35% Higher Throughput", "Reduced cycle time", "Turnkey line commissioning"]
  },
  {
    id: "plc-frameworks",
    icon: <HardDrive className="w-10 h-10 stroke-[1.5]" />,
    title: "PLC & SCADA Programming",
    challenge: "Complex multi-device synchronization and lack of control room visibility.",
    approach: "Custom logic programming for Siemens, Allen-Bradley, and Delta PLCs with SCADA panels.",
    metrics: ["Real-time process telemetry", "Fail-safe logic protocols", "Industrial grade cabinet wiring"]
  },
  {
    id: "machine-vision",
    icon: <Eye className="w-10 h-10 stroke-[1.5]" />,
    title: "Machine Vision Systems",
    challenge: "Manual quality inspection bottlenecks leading to defect escapes.",
    approach: "High-speed optical inspection rigs powered by custom OpenCV pattern checking software.",
    metrics: ["Zero-defect inspection escapes", "99.9% check consistency", "Automatic reject sorting triggers"]
  },
  {
    id: "iot-monitoring",
    icon: <Monitor className="w-10 h-10 stroke-[1.5]" />,
    title: "IoT Fleet Monitoring",
    challenge: "Unexpected machinery breakdowns and lack of historical operational logs.",
    approach: "Install ESP32 environmental sensors and telemetry nodes streaming to secure dashboards.",
    metrics: ["Predictive failure alerts", "Unified data visualization", "15% reduction in maintenance costs"]
  },
  {
    id: "ai-systems",
    icon: <Cpu className="w-10 h-10 stroke-[1.5]" />,
    title: "Custom Robotics (AGV/AMR)",
    challenge: "High cost of warehouse material material handling and path planning issues.",
    approach: "Indigenously manufactured TTRC AGV V1 and AMR V1 logistics platforms mapped to grids.",
    metrics: ["Optimized path routing", "Double sorting speeds", "Safety lidar obstacle detection"]
  },
  {
    id: "consultation",
    icon: <LineChart className="w-10 h-10 stroke-[1.5]" />,
    title: "Industrial Consultation",
    challenge: "Uncertain ROI for digital transformation and legacy machinery constraints.",
    approach: "Comprehensive physical audit of factory workflow, cycle times, and electrical load setup.",
    metrics: ["Detailed feasibility reports", "Clear ROI projections", "Strategic step-by-step roadmap"]
  }
];

const faqItems = [
  {
    q: "Do you supply customized AGVs or AMRs?",
    a: "Yes, we design and build indigenous material handling platforms (TTRC AGV V1, TTRC AMR V1) customized for payload capabilities and sensor integration (lidar, sonar, line array)."
  },
  {
    q: "Can you upgrade legacy manufacturing lines?",
    a: "Yes, we specialize in retrofitting legacy systems with modern PLC controls, sensors, and SCADA monitoring loops without replacing core mechanical setups."
  }
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tamizhtech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industrial Automation",
        "item": "https://tamizhtech.in/industries"
      }
    ]
  }
];

const formInputClass = "w-full bg-[#181C24] border border-[#232833] px-4 py-3.5 text-[#F5F6F8] font-bold text-xs rounded-lg outline-none transition-all focus:border-[#FF4D2D] focus:ring-1 focus:ring-[#FF4D2D] placeholder-gray-400 placeholder:opacity-60 appearance-none";

export default function IndustriesPage() {
  return (
    <div className="bg-[#0A0C10] pt-32 pb-24 selection:bg-[#FF4D2D] selection:text-white min-h-screen text-[#F5F6F8] text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 border-l-4 border-[#FF4D2D] pl-6 md:pl-10 py-4">
          <h1 className="text-[10px] font-black text-[#FF4D2D] uppercase tracking-[0.6em] mb-6 font-sans">B2B Industrial Vertical</h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-[#F5F6F8] tracking-tighter leading-[0.95] uppercase">
            Sector-Specific <br /> Automation Engineering.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA1AC] leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-6 md:mt-8">
            Deploying high-uptime hardware, custom SCADA boards, vision QA check benches, and AMR logistics fleets designed and configured in Coimbatore, Tamil Nadu.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-12 mb-24">
          {solutions.map((item) => (
            <div 
              key={item.id} 
              id={item.id}
              className="bg-[#11141A] border border-[#232833] flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden group hover:border-[#FF4D2D] transition-colors duration-300"
            >
              {/* Left Column */}
              <div className="w-full lg:w-1/4 bg-[#181C24] border-r border-[#232833] flex flex-col items-center justify-center p-12 text-[#FF4D2D] group-hover:bg-[#FF4D2D] group-hover:text-white transition-all duration-500">
                <div className="w-20 h-20 border border-[#232833] flex items-center justify-center rounded-2xl mb-6 bg-[#11141A] shadow-sm transition-all duration-500">
                   {item.icon}
                </div>
                <h3 className="text-lg font-heading font-black tracking-tighter uppercase text-center mt-2 group-hover:text-white text-[#F5F6F8] transition-colors">{item.title}</h3>
              </div>
              
              {/* Right Column */}
              <div className="flex-grow p-8 md:p-12 flex flex-col justify-between bg-[#11141A]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[9px] font-black text-[#FF4D2D] uppercase tracking-widest mb-1.5 block">Operational Bottleneck</span>
                      <h4 className="text-lg font-black text-[#F5F6F8] uppercase tracking-tight leading-tight">{item.challenge}</h4>
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-[#FF4D2D] uppercase tracking-widest mb-1.5 block">Custom Deployment</span>
                      <p className="text-[#9AA1AC] text-xs font-medium leading-relaxed">{item.approach}</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#181C24] p-6 border border-[#232833] rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest mb-4 block text-center border-b border-[#232833] pb-2 font-mono">Technical Deliverables</span>
                    <div className="space-y-3">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-[#F5F6F8] uppercase tracking-tight">
                          <ShieldCheck className="w-4 h-4 text-[#FF4D2D] shrink-0" /> {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-[#232833] flex justify-end">
                   <Link href="#consultation-form" className="text-[10px] font-black text-[#FF4D2D] flex items-center gap-2 hover:text-[#F5F6F8] transition-colors uppercase tracking-widest pb-1 border-b border-[#FF4D2D]">
                     Schedule Technical Feasibility Discussion <MoveRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Strategy / Summary */}
        <div className="bg-[#11141A] border border-[#232833] p-12 md:p-20 grid lg:grid-cols-2 gap-16 items-center rounded-2xl mb-24">
           <div>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter mb-6 leading-tight uppercase text-[#F5F6F8]">Coimbatore Core.<br />Pan-India Scale.</h2>
              <p className="text-[#9AA1AC] leading-relaxed font-bold text-xs uppercase tracking-wider">
                Headquartered in India&apos;s engineering heartland, we leverage the region&apos;s manufacturing heritage to provide on-ground technical support for global brands and domestic leaders.
              </p>
              <div className="flex gap-4 mt-8">
                 <Link href="/about" className="btn-primary py-4 px-8 text-xs">Firm Profile</Link>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Deployment Centers", val: "15+" },
                { label: "Active Deployments", val: "120+" },
                { label: "Engineering Staff", val: "50+" },
                { label: "Strategic Partners", val: "10+" }
              ].map((stat) => (
                <div key={stat.label} className="bg-[#181C24] border border-[#232833] p-6 text-center flex flex-col justify-center rounded-xl shadow-xs hover:border-[#FF4D2D] transition-colors">
                  <span className="text-3xl font-black text-[#FF4D2D] tracking-tighter font-mono">{stat.val}</span>
                  <span className="text-[9px] font-black text-[#858E9B] uppercase tracking-widest mt-2 leading-tight">{stat.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Industrial Consultation Form */}
        <section className="max-w-4xl mx-auto mb-24" id="consultation-form">
          <div className="border border-[#232833] rounded-2xl bg-[#11141A] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FF4D2D]" />
            <span className="text-[9px] font-black text-[#FF4D2D] uppercase tracking-[0.3em] mb-3 block">B2B Coordination Desk</span>
            <h3 className="text-2xl md:text-3xl font-heading font-black uppercase text-[#F5F6F8] tracking-tighter mb-4">Request Automation Consultation</h3>
            <p className="text-xs text-[#858E9B] font-bold uppercase tracking-wider mb-8">Discuss cycle times, PLC specs, SCADA layouts, or OpenCV checks with our senior R&D engineers. Fill out this audit request loop.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Corporate Representative Name</label>
                  <input required type="text" placeholder="John Doe" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Official Company Email</label>
                  <input required type="email" placeholder="john@corporatemail.com" className={formInputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Contact Phone</label>
                  <input required type="text" placeholder="+91 XXXXX XXXXX" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Company Name & Site Location</label>
                  <input required type="text" placeholder="Auto Corp, Coimbatore" className={formInputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Target Automation Interest</label>
                  <div className="relative">
                    <select className={formInputClass + " cursor-pointer"}>
                      <option>PLC & SCADA logic setup</option>
                      <option>Machine Vision (OpenCV inspection)</option>
                      <option>Warehouse AMR/AGV Deployment</option>
                      <option>IoT Fleet Telemetry Node audit</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 border-l border-t border-[#858E9B] w-2 h-2 pointer-events-none"></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black text-[#858E9B] uppercase tracking-wider font-sans">Technical Requirement Details</label>
                <textarea rows={4} placeholder="Describe the current manual process, machinery brand names (Siemens, Mitsubishi, Delta), and target cycle time improvements..." className={formInputClass + " resize-none"} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="btn-primary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1">
                  Schedule Audit & Consult <Send className="w-4 h-4" />
                </button>
                <a 
                  href="https://wa.me/918148045030?text=Hello%20Tamizh%20Tech!%20I'm%20inquiring%20about%20your%20B2B%20Industrial%20Automation%20and%20PLC%2FSCADA%2FMachine%20Vision%20solutions." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-4 px-8 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 flex-1 text-center border-[#232833] hover:border-[#FF4D2D]"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#FF4D2D]" /> Talk to Automation Expert
                </a>
              </div>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
