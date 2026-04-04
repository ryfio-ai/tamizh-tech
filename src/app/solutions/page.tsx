import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Layout, Smartphone, Layers, Database, Globe, Rocket, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Solutions | Industrial Robotics & Enterprise Software | Tamizh Tech Pvt Ltd",
  description: "Tamizh Tech Pvt Ltd provides multi-disciplinary engineering solutions across industrial automation, robotics integration, and scalable enterprise software systems.",
};

const industrialSolutions = [
  {
    id: "automation",
    icon: <Factory />,
    title: "Industrial Automation",
    description: "Complete factory floor control systems designed for high-uptime manufacturing.",
    features: [
      "PLC & HMI System Design",
      "Control Logic Architecture",
      "Assembly Line Optimization",
      "Sensor Network Deployment"
    ],
    engagement: "Turnkey Project"
  },
  {
    id: "robotics",
    icon: <Bot />,
    title: "Robotics Integration",
    description: "Multi-axis robotic deployment with precision synchronization and safety.",
    features: [
      "Custom End-Effector Design",
      "Robot Simulation & Pathing",
      "Collaborative Robot Setup",
      "AMR/AGV Fleet Systems"
    ],
    engagement: "System Integration"
  },
  {
    id: "ai-vision",
    icon: <Cpu />,
    title: "AI Vision Systems",
    description: "Advanced neural networks for real-time defect detection and quality control.",
    features: [
      "Sub-mm Defect Detection",
      "Automated Sorting Logic",
      "Character Recognition (OCR)",
      "High-Speed Inspection Units"
    ],
    engagement: "Hardware + Software"
  },
  {
    id: "iot",
    icon: <BarChart3 />,
    title: "IoT & Monitoring",
    description: "Enterprise IoT ecosystems for predictive maintenance and OEE tracking.",
    features: [
      "Real-time Asset Monitoring",
      "Environmental Sensor Data",
      "Predictive Failure Alerts",
      "ERP/MES Bridge Systems"
    ],
    engagement: "Subscription Model"
  }
];

const softwareSolutions = [
  {
    id: "web",
    icon: <Layout />,
    title: "Enterprise Web Apps",
    description: "Scalable internal management portals and high-performance B2B platforms.",
    features: [
      "Logic-Heavy Admin Panels",
      "Real-time Dashboards",
      "Legacy System Migration",
      "Secure Cloud Architecture"
    ],
    engagement: "Development / SaaS"
  },
  {
    id: "mobile",
    icon: <Smartphone />,
    title: "Mobile Ecosystems",
    description: "Native and cross-platform apps for field operations and logistics tracking.",
    features: [
      "Field Force Management",
      "Logistics Tracking Apps",
      "Offline-first Architecture",
      "IoT Control Interfaces"
    ],
    engagement: "Product Development"
  },
  {
    id: "saas",
    icon: <Layers />,
    title: "SaaS Product Dev",
    description: "End-to-end development of industrial SaaS products from MVP to scale.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Billing Logic",
      "API First Development",
      "Scalable Microservices"
    ],
    engagement: "Full Lifecycle"
  },
  {
    id: "b2b",
    icon: <Database />,
    title: "B2B Software Tools",
    description: "Custom digital tools to automate cross-company workflows and supply chains.",
    features: [
      "Vendor Management Portals",
      "Procurement Automation",
      "Supply Chain Visibility",
      "Secure API Integrations"
    ],
    engagement: "Bespoke Solutions"
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-bg-page pt-32 pb-24 selection:bg-primary-main selection:text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-primary-main pl-10 py-4">
          <h1 className="text-[10px] font-black text-primary-main uppercase tracking-[0.6em] mb-8">Capabilities & Solutions</h1>
          <h2 className="text-6xl md:text-7xl font-black text-text-primary tracking-tighter leading-[0.95] mb-10 uppercase">
            Engineering Precision. <br /> Digital Scalability.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-medium mt-10">
            Tamizh Tech Pvt Ltd operates at the intersection of physical hardware and digital platforms. We build the systems that power modern industry.
          </p>
        </div>

        {/* Industrial Division */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-2xl font-black text-text-primary uppercase tracking-tighter">01. Industrial Systems</h3>
            <div className="h-[1px] flex-grow bg-border-light"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrialSolutions.map((item) => (
              <div key={item.id} className="industrial-card p-10 flex flex-col group h-full">
                <div className="text-primary-main mb-8">{cloneIcon(item.icon, "w-8 h-8 stroke-[1.5]")}</div>
                <h4 className="text-xl font-black text-text-primary uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-text-secondary text-xs font-semibold leading-relaxed mb-10 opacity-80">{item.description}</p>
                <div className="space-y-3 mb-12 flex-grow">
                  {item.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[10px] font-bold text-text-primary uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-primary-main"></span> {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="text-[10px] font-black text-text-muted hover:text-primary-main transition-colors uppercase tracking-widest flex items-center justify-between border-t border-border-light pt-6">
                  <span>Enquire Status</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Software Division */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-2xl font-black text-text-primary uppercase tracking-tighter">02. Software Engineering</h3>
            <div className="h-[1px] flex-grow bg-border-light"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareSolutions.map((item) => (
              <div key={item.id} className="industrial-card p-10 flex flex-col group h-full bg-secondary-main border-secondary-main">
                <div className="text-primary-main mb-8">{cloneIcon(item.icon, "w-8 h-8 stroke-[1.5]")}</div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-white/60 text-xs font-semibold leading-relaxed mb-10">{item.description}</p>
                <div className="space-y-3 mb-12 flex-grow">
                  {item.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-white/20"></span> {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="text-[10px] font-black text-white/40 hover:text-primary-main transition-colors uppercase tracking-widest flex items-center justify-between border-t border-white/5 pt-6">
                  <span>Request Stack</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Service Lifecycle */}
        <div className="py-24 border-y border-border-light bg-white/50">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xs font-black text-primary-main uppercase tracking-[0.5em] mb-10 font-sans">Deployment Lifecycle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
                  <div>
                    <h5 className="text-3xl font-black text-text-primary tracking-tighter uppercase mb-4">On-Site</h5>
                    <p className="text-text-secondary text-xs font-bold leading-relaxed">Technical audit and hardware-in-the-loop validation at your production center.</p>
                  </div>
                  <div className="pb-8 border-b-4 sm:border-b-0 sm:border-x-4 border-primary-main/10 px-8">
                    <h5 className="text-3xl font-black text-text-primary tracking-tighter uppercase mb-4">Remote</h5>
                    <p className="text-text-secondary text-xs font-bold leading-relaxed">Continuous software monitoring and API-level performance optimization.</p>
                  </div>
                  <div>
                    <h5 className="text-3xl font-black text-text-primary tracking-tighter uppercase mb-4">Adaptive</h5>
                    <p className="text-text-secondary text-xs font-bold leading-relaxed">Scale-out support as your manufacturing volume or user base increases.</p>
                  </div>
              </div>
           </div>
        </div>

        {/* Global CTA */}
        <div className="mt-40 p-20 border-4 border-secondary-main flex flex-col md:flex-row items-center justify-between gap-12 bg-white">
          <div className="flex-1">
            <h4 className="text-4xl font-black tracking-tighter mb-4 text-text-primary uppercase">Ready to scale?</h4>
            <p className="text-text-secondary max-w-xl font-bold leading-relaxed uppercase text-[10px] tracking-widest italic opacity-60">Consult our engineering team for technical specifications and lead times.</p>
          </div>
          <Link href="/contact" className="btn-primary px-16 py-6 shadow-xl">
            Connect with Engineers <ArrowRight className="w-5 h-5 ml-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

// Helper to clone icons with custom classes
function cloneIcon(icon: any, className: string) {
  return <icon.type {...icon.props} className={className} />;
}
