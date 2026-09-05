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
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { RoboticsIcon, AIIcon, IoTIcon, EmbeddedIcon, AutomationIcon, MfgIcon } from "@/components/ui/CustomIcons";
import IndustrialConsultationForm from "@/components/forms/IndustrialConsultationForm";

export const metadata: Metadata = {
  title: "Industrial Automation & Robotics Solutions | Coimbatore | Tamizh Tech",
  description: "Specialized B2B industrial engineering solutions including PLC programming, Machine Vision (OpenCV), AGVs/AMRs, and predictive IoT monitoring nodes for factory floors.",
  keywords: [
    "industrial automation company coimbatore",
    "robotics company in tamil nadu",
    "plc programming coimbatore",
    "machine vision systems tamil nadu"
  ],
  alternates: {
    canonical: "https://www.tamizhtech.in/industries",
  },
  openGraph: {
    title: "Industrial Automation & Robotics Integration | Tamizh Tech",
    description: "Empowering factory floors with custom robotics, vision checks, and IoT dashboards. Coimbatore engineering core.",
    url: "https://www.tamizhtech.in/industries",
    type: "website"
  }
};

const solutions = [
  {
    id: "automation",
    icon: <AutomationIcon size={40} />,
    title: "Factory Automation",
    challenge: "Low OEE and high manual labor error rates on assembly lines.",
    approach: "Deploy custom mechanical pick-and-place nodes, conveyor lines, and pneumatic sorters.",
    metrics: ["35% Higher Throughput", "Reduced cycle time", "Turnkey line commissioning"]
  },
  {
    id: "plc-frameworks",
    icon: <EmbeddedIcon size={40} />,
    title: "PLC & SCADA Programming",
    challenge: "Complex multi-device synchronization and lack of control room visibility.",
    approach: "Custom logic programming for Siemens, Allen-Bradley, and Delta PLCs with SCADA panels.",
    metrics: ["Real-time process telemetry", "Fail-safe logic protocols", "Industrial grade cabinet wiring"]
  },
  {
    id: "machine-vision",
    icon: <AIIcon size={40} />,
    title: "Machine Vision Systems",
    challenge: "Manual quality inspection bottlenecks leading to defect escapes.",
    approach: "High-speed optical inspection rigs powered by custom OpenCV pattern checking software.",
    metrics: ["Zero-defect inspection escapes", "99.9% check consistency", "Automatic reject sorting triggers"]
  },
  {
    id: "iot-monitoring",
    icon: <IoTIcon size={40} />,
    title: "IoT Fleet Monitoring",
    challenge: "Unexpected machinery breakdowns and lack of historical operational logs.",
    approach: "Install ESP32 environmental sensors and telemetry nodes streaming to secure dashboards.",
    metrics: ["Predictive failure alerts", "Unified data visualization", "15% reduction in maintenance costs"]
  },
  {
    id: "ai-systems",
    icon: <RoboticsIcon size={40} />,
    title: "Custom Robotics (AGV/AMR)",
    challenge: "High cost of warehouse material material handling and path planning issues.",
    approach: "Indigenously manufactured TTRC AGV V1 and AMR V1 logistics platforms mapped to grids.",
    metrics: ["Optimized path routing", "Double sorting speeds", "Safety lidar obstacle detection"]
  },
  {
    id: "consultation",
    icon: <MfgIcon size={40} />,
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
        "item": "https://www.tamizhtech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industrial Automation",
        "item": "https://www.tamizhtech.in/industries"
      }
    ]
  }
];

const formInputClass = "w-full bg-subtle border border-border px-4 py-3.5 text-text-primary font-bold text-xs rounded-lg outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent placeholder-text-muted";

export default function IndustriesPage() {
  return (
    <div className="bg-white min-h-screen text-text-primary text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <PageHero
        title="Industrial Automation & Robotics"
        subtitle="Custom B2B engineering integrations. Scale your manufacturing floor with indigenously designed AGVs, PLC/SCADA logic wiring, and computer vision QC benches."
        breadcrumbActive="Industries"
      />

      <div className="container mx-auto px-6 py-16">
        
        {/* Solutions Grid */}
        <div className="space-y-8 mb-24">
          {solutions.map((item) => (
            <div 
              key={item.id} 
              id={item.id}
              className="bg-white border border-border flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden group hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              {/* Left Column */}
              <div className="w-full lg:w-1/4 bg-subtle border-r border-border flex flex-col items-center justify-center p-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <div className="w-16 h-16 border border-border flex items-center justify-center rounded-2xl mb-4 bg-white shadow-sm transition-all duration-300">
                   {item.icon}
                </div>
                <h3 className="text-base font-bold tracking-tight uppercase text-center mt-2 group-hover:text-white text-text-primary transition-colors">{item.title}</h3>
              </div>
              
              {/* Right Column */}
              <div className="flex-grow p-8 md:p-10 flex flex-col justify-between bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-bold text-accent uppercase tracking-widest mb-1.5 block">Operational Bottleneck</span>
                      <h4 className="text-base font-bold text-text-primary uppercase tracking-tight leading-tight">{item.challenge}</h4>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-accent uppercase tracking-widest mb-1.5 block">Custom Deployment</span>
                      <p className="text-text-secondary text-xs font-medium leading-relaxed">{item.approach}</p>
                    </div>
                  </div>
                  
                  <div className="bg-subtle p-6 border border-border rounded-xl flex flex-col justify-center">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-4 block text-center border-b border-border pb-2">Technical Deliverables</span>
                    <div className="space-y-2">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-text-primary uppercase tracking-tight">
                          <ShieldCheck className="w-4 h-4 text-accent shrink-0" /> {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border flex justify-end">
                   <Link href="#consultation-form" className="text-[10px] font-bold text-accent flex items-center gap-2 hover:text-text-primary transition-colors uppercase tracking-widest pb-1 border-b border-accent">
                     Schedule Technical Feasibility Discussion <MoveRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Strategy / Summary */}
        <div className="bg-subtle border border-border p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center rounded-3xl mb-24">
           <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight uppercase text-text-primary">Coimbatore Core.<br />Pan-India Scale.</h2>
              <p className="text-text-secondary leading-relaxed font-bold text-xs uppercase tracking-wider">
                Headquartered in India&apos;s engineering heartland, we leverage the region&apos;s manufacturing heritage to provide on-ground technical support for global brands and domestic leaders.
              </p>
              <div className="flex gap-4 mt-8">
                 <Link href="/about">
                   <Button variant="primary">Firm Profile</Button>
                 </Link>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Deployment Centers", val: "15+" },
                { label: "Active Deployments", val: "120+" },
                { label: "Engineering Staff", val: "50+" },
                { label: "Strategic Partners", val: "10+" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-border p-6 text-center flex flex-col justify-center rounded-xl shadow-sm hover:border-accent transition-colors">
                  <span className="text-3xl font-extrabold text-accent tracking-tighter">{stat.val}</span>
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest mt-2 leading-tight">{stat.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Industrial Consultation Form */}
        <section className="max-w-4xl mx-auto mb-24" id="consultation-form">
          <div className="border border-border rounded-2xl bg-white p-8 md:p-12 text-left relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest mb-3 block">B2B Coordination Desk</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-text-primary tracking-tight mb-4">Request Automation Consultation</h3>
            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-8">Discuss cycle times, PLC specs, SCADA layouts, or OpenCV checks with our senior R&D engineers. Fill out this audit request loop.</p>
            
            <IndustrialConsultationForm />
          </div>
        </section>

      </div>
    </div>
  );
}
