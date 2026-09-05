import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2, Factory, Bot, Cpu, BarChart3, Settings, Shield, Layout, Smartphone, Layers, Database, Globe, Rocket, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Solutions | Industrial Robotics & Enterprise Software | Tamizh Tech Robotics Company",
  description: "Tamizh Tech Robotics Company provides multi-disciplinary engineering solutions across industrial automation, robotics integration, and scalable enterprise software systems.",
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
    <div className="bg-white pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white min-h-screen text-[#111111]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-32 border-l-4 border-[#FF6B00] pl-6 md:pl-10 py-4 text-left">
          <h1 className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.6em] mb-8">Capabilities & Solutions</h1>
          <h2 className="text-5xl md:text-7xl font-black text-[#111111] tracking-tighter leading-[0.95] uppercase">
            Engineering Precision. <br /> Digital Scalability.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl font-bold uppercase tracking-tight mt-10">
            Tamizh Tech Robotics Company operates at the intersection of physical hardware and digital platforms. We build the systems that power modern industry.
          </p>
        </div>

        {/* Tailored B2B Solutions by Sector */}
        <div className="mb-32 text-left">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tighter">B2B Solutions by Sector</h3>
            <div className="h-[1px] flex-grow bg-[#E5E5E5]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/solutions/schools" className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl hover:border-[#FF6B00] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">K-12 Education</span>
                <h4 className="text-xl font-black text-neutral-900 mt-2 mb-3 group-hover:text-[#FF6B00] transition-colors">Schools & STEM Labs</h4>
                <p className="text-neutral-600 text-xs leading-relaxed">Turnkey STEM and ATL lab setup, curriculum-aligned robotics courses, school workshops, and tournament coaching.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-[#FF6B00]">
                <span>Explore School Solutions</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/solutions/colleges" className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl hover:border-[#FF6B00] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">Higher Education</span>
                <h4 className="text-xl font-black text-neutral-900 mt-2 mb-3 group-hover:text-[#FF6B00] transition-colors">Colleges & CoE Labs</h4>
                <p className="text-neutral-600 text-xs leading-relaxed">Robotics Centre of Excellence setup, engineering capstone guidance, embedded systems training, and rapid prototyping.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-[#FF6B00]">
                <span>Explore College Solutions</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/solutions/industries" className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl hover:border-[#FF6B00] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">Manufacturing</span>
                <h4 className="text-xl font-black text-neutral-900 mt-2 mb-3 group-hover:text-[#FF6B00] transition-colors">Industrial Automation</h4>
                <p className="text-neutral-600 text-xs leading-relaxed">Turnkey PLC/SCADA control, control cabinet wiring, machine vision quality inspection, and custom machine retrofits.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-[#FF6B00]">
                <span>Explore Industrial Solutions</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/solutions/students-makers" className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl hover:border-[#FF6B00] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">Makers & Competitors</span>
                <h4 className="text-xl font-black text-neutral-900 mt-2 mb-3 group-hover:text-[#FF6B00] transition-colors">Students & Makers</h4>
                <p className="text-neutral-600 text-xs leading-relaxed">National competition robot platforms (Robo Race, Robo Soccer), custom 3D printing, SS laser cutting, and circuit boards.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-[#FF6B00]">
                <span>Explore Maker Solutions</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/solutions/startups" className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl hover:border-[#FF6B00] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">Hardware Startups</span>
                <h4 className="text-xl font-black text-neutral-900 mt-2 mb-3 group-hover:text-[#FF6B00] transition-colors">Startups & Product Teams</h4>
                <p className="text-neutral-600 text-xs leading-relaxed">Rapid mechanical prototyping, multi-layer PCB design and assembly, stainless steel chassis cutting, and pilot batch runs.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-[#FF6B00]">
                <span>Explore Startup Solutions</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Industrial Division */}
        <div className="mb-40 text-left">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tighter">01. Industrial Systems</h3>
            <div className="h-[1px] flex-grow bg-[#E5E5E5]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrialSolutions.map((item) => (
              <div key={item.id} className="bg-white border border-[#E5E5E5] p-10 flex flex-col group h-full rounded-2xl hover:border-[#FF6B00] transition-colors">
                <div className="text-[#FF6B00] mb-8">{cloneIcon(item.icon, "w-8 h-8 stroke-[1.5]")}</div>
                <h4 className="text-xl font-black text-[#111111] uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-10 opacity-80">{item.description}</p>
                <div className="space-y-3 mb-12 flex-grow">
                  {item.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[10px] font-bold text-[#111111] uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-[#FF6B00]"></span> {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="text-[10px] font-black text-[#FF6B00] hover:text-[#111111] transition-colors uppercase tracking-widest flex items-center justify-between border-t border-[#F0F0F0] pt-6">
                  <span>Enquire Status</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Software Division */}
        <div className="mb-40 text-left">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tighter">02. Software Engineering</h3>
            <div className="h-[1px] flex-grow bg-[#E5E5E5]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareSolutions.map((item) => (
              <div key={item.id} className="bg-[#FAFAFA] border border-[#E5E5E5] p-10 flex flex-col group h-full rounded-2xl hover:border-[#FF6B00] transition-colors">
                <div className="text-[#FF6B00] mb-8">{cloneIcon(item.icon, "w-8 h-8 stroke-[1.5]")}</div>
                <h4 className="text-xl font-black text-[#111111] uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-10">{item.description}</p>
                <div className="space-y-3 mb-12 flex-grow">
                  {item.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[10px] font-bold text-[#111111] uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-[#FF6B00]/40"></span> {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="text-[10px] font-black text-[#FF6B00] hover:text-[#111111] transition-colors uppercase tracking-widest flex items-center justify-between border-t border-[#E5E5E5] pt-6">
                  <span>Request Stack</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Service Lifecycle */}
        <div className="py-24 border-y border-[#E5E5E5] bg-[#FAFAFA] rounded-2xl">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xs font-black text-[#FF6B00] uppercase tracking-[0.5em] mb-10 font-sans">Deployment Lifecycle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
                  <div>
                    <h5 className="text-3xl font-black text-[#111111] tracking-tighter uppercase mb-4">On-Site</h5>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed">Technical audit and hardware-in-the-loop validation at your production center.</p>
                  </div>
                  <div className="pb-8 border-b-2 sm:border-b-0 sm:border-x border-[#E5E5E5] px-8">
                    <h5 className="text-3xl font-black text-[#111111] tracking-tighter uppercase mb-4">Remote</h5>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed">Continuous software monitoring and API-level performance optimization.</p>
                  </div>
                  <div>
                    <h5 className="text-3xl font-black text-[#111111] tracking-tighter uppercase mb-4">Adaptive</h5>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed">Scale-out support as your manufacturing volume or user base increases.</p>
                  </div>
              </div>
           </div>
        </div>

        {/* Global CTA */}
        <div className="mt-40 p-12 md:p-20 border-2 border-[#FF6B00] flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-2xl">
          <div className="flex-grow text-left">
            <h4 className="text-4xl font-black tracking-tighter mb-4 text-[#111111] uppercase">Ready to scale?</h4>
            <p className="text-gray-500 max-w-xl font-bold leading-relaxed uppercase text-[10px] tracking-widest italic opacity-60">Consult our engineering team for technical specifications and lead times.</p>
          </div>
          <Link href="/contact" className="btn-primary px-16 py-6 shadow-xl shrink-0">
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
