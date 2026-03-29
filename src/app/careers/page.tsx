"use client";

import React, { useState, useMemo } from "react";
import { 
  Briefcase, Search, Filter, Globe, 
  Clock, CheckCircle, ChevronRight, X, 
  Cpu, Brain, School, LayoutGrid, 
  Palette, MousePointer2, Settings, 
  BarChart, Megaphone, CheckCircle2,
  Zap,
  Mail,
  User,
  Phone,
  Linkedin,
  Paperclip,
  ArrowRight
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// --- Types ---
interface InternshipRole {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  location: string;
  path: string;
  isHot?: boolean;
  type: string; // Virtual Internship etc.
}

interface FilterState {
  search: string;
  category: string;
}

// --- Roles Data ---
const INTERNSHIP_ROLES: InternshipRole[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern.",
    category: "Software Engineering",
    description: "Build scalable web apps, APIs, and dashboards for robotics automation platforms.",
    duration: "3-6 Months",
    location: "Remote",
    path: "Path to Full-Time",
    isHot: true,
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 2,
    title: "Frontend Developer Intern.",
    category: "Software Engineering",
    description: "Design modern UI for dashboards & apps with focus on user experience and precision.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 3,
    title: "Backend Developer Intern.",
    category: "Software Engineering",
    description: "Build APIs, databases & backend systems for high-performance automation platforms.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 4,
    title: "Robotics Intern.",
    category: "Robotics Engineering",
    description: "Work on automation systems & robot logic for tactical and industrial bots.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 5,
    title: "AI / ML Intern.",
    category: "Artificial Intelligence",
    description: "Build ML models & intelligent systems for object recognition and decision making.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 6,
    title: "Mechanical Design Intern.",
    category: "Mechanical Engineering",
    description: "Design CAD models & mechanical systems for robotics and localized hardware.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 7,
    title: "Embedded Systems Intern.",
    category: "Electronics & IoT",
    description: "Work with microcontrollers, localized sensors, and real-time firmware.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 8,
    title: "Data Analyst Intern.",
    category: "Data Science",
    description: "Analyze technical data & build dashboards for operational intelligence.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 9,
    title: "Digital Marketing Intern.",
    category: "Marketing",
    description: "SEO, campaigns & social media growth for TamizhTech's national presence.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  },
  {
    id: 10,
    title: "Operations Intern.",
    category: "Business Operations",
    description: "Manage technical workflows & localized coordination across 15+ states.",
    duration: "3-6 Months",
    location: "Remote",
    path: "PPO Path",
    type: "VIRTUAL INTERNSHIP"
  }
];

const CATEGORIES = [
  "All Categories",
  "Software Engineering",
  "Robotics Engineering",
  "Artificial Intelligence",
  "Mechanical Engineering",
  "Electronics & IoT",
  "Data Science",
  "Marketing",
  "Business Operations"
];

// --- Components ---

const ApplyModal = ({ selectedRole, onClose }: { selectedRole: InternshipRole; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    college: "",
    branch: "",
    experience: "",
    resume: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: selectedRole.title,
          category: selectedRole.category,
          type: "Internship"
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-text-primary/10 backdrop-blur-md"
    >
      <div className="bg-bg-primary border border-border-light w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden relative">
        <button className="absolute top-6 right-6 h-10 w-10 rounded-full flex items-center justify-center bg-bg-elevated hover:bg-border-light transition-colors z-[110]" onClick={onClose}>
          <X className="h-6 w-6 text-text-primary" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center py-24">
            <div className="w-20 h-20 bg-primary-light text-primary-main rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-4 tracking-tight">Application Logged.</h2>
            <p className="text-text-tertiary text-lg mb-10 leading-relaxed font-regular">
              Your credentials for the <span className="text-primary-main font-bold">{selectedRole.title}</span> position have been securely archived in our database. We'll contact you.
            </p>
            <button onClick={onClose} className="px-10 py-3 bg-primary-main text-text-on-primary font-bold rounded-lg hover:bg-primary-hover shadow-lg transition-all">
              Return to Careers
            </button>
          </div>
        ) : (
          <div className="p-12 max-h-[90vh] overflow-y-auto">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary-main text-[10px] font-extrabold uppercase tracking-widest mb-4">
                Applying For: {selectedRole.category}
              </div>
              <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-2 tracking-tight">{selectedRole.title}</h2>
              <p className="text-text-tertiary font-regular">Official Application Form (Internship Intake)</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-bg-page/50 border border-border-light rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-bg-page/50 border border-border-light rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Contact Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 81480 45030" className="w-full bg-bg-page/50 border border-border-light rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">LinkedIn (Optional)</label>
                <div className="relative">
                  <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="linkedin.com/in/..." className="w-full bg-bg-page/50 border border-border-light rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Academic Institution</label>
                <input required type="text" name="college" value={formData.college} onChange={handleChange} placeholder="College/University Name" className="w-full bg-bg-page/50 border border-border-light rounded-xl px-5 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-medium" />
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1">Past Experience / Technical Stack</label>
                <textarea rows={3} name="experience" value={formData.experience} onChange={handleChange} placeholder="Tell us about your technical projects and stack." className="w-full bg-bg-page/50 border border-border-light rounded-xl px-5 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-medium resize-none" />
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted ml-1 text-primary-main">Resume / Portfolio Link (Google Drive/Public Link) *</label>
                <div className="relative">
                  <Paperclip className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-main" />
                  <input required type="url" name="resume" value={formData.resume} onChange={handleChange} placeholder="https://drive.google.com/..." className="w-full bg-bg-page/50 border-2 border-primary-light rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-primary-main focus:ring-4 focus:ring-primary-main/5 transition-all text-sm font-bold" />
                </div>
              </div>

              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary-main text-text-on-primary font-extrabold rounded-xl hover:bg-primary-hover shadow-lg transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? <Zap className="w-6 h-6 animate-spin" /> : "Complete Application"} <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function CareersPage() {
  const [filters, setFilters] = useState<FilterState>({ search: "", category: "All Categories" });
  const [selectedRole, setSelectedRole] = useState<InternshipRole | null>(null);

  const filteredRoles = useMemo(() => {
    return INTERNSHIP_ROLES.filter(role => {
      const matchesSearch = role.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                           role.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === "All Categories" || role.category === filters.category;
      return matchesSearch && matchesCategory;
    });
  }, [filters]);

  return (
    <div className="w-full bg-bg-page min-h-screen">
      <AnimatePresence>
        {selectedRole && <ApplyModal selectedRole={selectedRole} onClose={() => setSelectedRole(null)} />}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center hero-gradient border-b border-border-light">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-medium bg-bg-primary shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-text-tertiary uppercase">Human Capital</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text-primary mb-8 leading-[1.1] tracking-tight">
            Level Up with <span className="text-primary-main">TamizhTech.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-tertiary max-w-3xl mx-auto font-regular leading-relaxed">
            Accelerate your specialized technical track. Build world-class robotics, AI, and automation systems 
            from the comfort of your focused environment.
          </p>
        </div>
      </section>

      {/* Career Portal Controls */}
      <section className="sticky top-16 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border-light py-6">
        <div className="container mx-auto px-4 box-border">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative w-full lg:flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search localized roles (e.g. Frontend, Robotics...)"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full bg-bg-elevated/50 border border-border-light rounded-2xl px-14 py-4 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary-main transition-all font-medium"
              />
            </div>
            
            <div className="flex gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 [scrollbar-width:none]">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilters({ ...filters, category: cat })}
                  className={`px-6 py-3.5 rounded-2xl border text-sm font-bold whitespace-nowrap transition-all ${
                    filters.category === cat 
                      ? "bg-primary-main text-text-on-primary border-primary-main shadow-lg" 
                      : "bg-bg-primary text-text-tertiary border-border-light hover:border-primary-main hover:text-primary-main"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
           <div>
              <h2 className="text-4xl font-heading font-extrabold text-text-primary mb-2 tracking-tight">Open Opportunities</h2>
              <p className="text-text-tertiary font-regular leading-relaxed lowercase">Found {filteredRoles.length} specialized internship positions matching your trajectory.</p>
           </div>
           <div className="hidden md:flex items-center gap-2 text-primary-main font-bold text-sm bg-primary-light px-4 py-2 rounded-full border border-primary-light/50">
              <Globe className="w-4 h-4" /> Global Intake Active
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => (
              <motion.div
                layout
                key={role.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mnc-card flex flex-col p-10 group relative h-full transition-all duration-500 hover:border-primary-main/30"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-extrabold px-3 py-1 bg-primary-light text-primary-main border border-primary-light rounded-full uppercase tracking-widest">{role.type}</span>
                  {role.isHot && <span className="text-[10px] font-black px-3 py-1 bg-[#FEE2E2] text-[#DC2626] rounded-md animate-pulse">HOT</span>}
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-text-primary mb-2 leading-tight group-hover:text-primary-main transition-colors">{role.title}</h3>
                  <p className="text-primary-main/80 text-[11px] font-bold uppercase tracking-widest">{role.category}</p>
                </div>

                <p className="text-text-tertiary text-sm leading-relaxed mb-10 font-regular">
                  {role.description}
                </p>

                <div className="space-y-4 mb-10 pt-6 border-t border-border-light">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-text-muted uppercase tracking-widest flex items-center gap-2 italic"><Clock className="w-3 h-3" /> Duration</span>
                    <span className="text-text-primary">{role.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-text-muted uppercase tracking-widest flex items-center gap-2 italic"><Globe className="w-3 h-3" /> Location</span>
                    <span className="text-text-primary">{role.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-text-muted uppercase tracking-widest flex items-center gap-2 italic"><Zap className="w-3 h-3" /> Benefit</span>
                    <span className="text-primary-main uppercase tracking-tighter">{role.path}</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-4 pt-4">
                  <button className="flex-1 py-4 bg-bg-elevated border border-border-light text-text-primary text-[11px] font-extrabold rounded-xl hover:bg-border-light transition-all uppercase tracking-widest">
                    View Specs
                  </button>
                  <button 
                    onClick={() => setSelectedRole(role)}
                    className="flex-1 py-4 bg-primary-main text-text-on-primary text-[11px] font-extrabold rounded-xl shadow-md hover:bg-primary-hover transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                  >
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredRoles.length === 0 && (
          <div className="py-40 text-center">
             <div className="w-20 h-20 bg-bg-elevated rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-text-muted" />
             </div>
             <h3 className="text-3xl font-heading font-extrabold text-text-primary mb-2">No specialized roles found.</h3>
             <p className="text-text-tertiary">Adjust your filters or join our Talent Pool below.</p>
          </div>
        )}
      </section>

      {/* Talent Pool Persistence Banner */}
      <section className="py-24 bg-bg-primary border-y border-border-light text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary mb-8 tracking-tighter shadow-sm leading-tight">Persistent Intake <span className="text-primary-main">Talent Pool.</span></h2>
           <p className="text-text-tertiary text-xl mb-12 font-regular">Don't see your specialized track? Log your credentials for our automated recruitment system to analyze.</p>
           <div className="flex flex-wrap justify-center gap-5">
              <a href="mailto:office@tamizhtech.in?subject=Talent%20Pool%20Log" className="px-12 py-5 bg-text-primary text-bg-primary font-extrabold rounded-2xl hover:bg-primary-main transition-all lowercase text-lg shadow-2xl">
                log_credentials@tamizhtech.in
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
