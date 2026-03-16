import Link from 'next/link';
import { TerminalSquare, Mail, MapPin, Phone, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neon-panel border-t border-neon-cyan/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-cyan/50 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <TerminalSquare className="w-8 h-8 text-neon-cyan" />
              <span className="font-heading font-bold text-xl text-white">
                TAMIZH<span className="text-neon-cyan">TECH</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming ideas into innovation through accessible robotics, AI, IoT, and automation solutions for students and enterprises.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/tamizh-tech-robotics-company" target="_blank" className="text-slate-400 hover:text-neon-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/tamizh_tech_pvt_ltd" target="_blank" className="text-slate-400 hover:text-neon-magenta transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com/@covaiscientist" target="_blank" className="text-slate-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-magenta" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Robotics Club', path: '/robotics-club' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
                { name: 'Clients', path: '/clients' },
                { name: 'Courses', path: '/courses' },
                { name: 'Team', path: '/team' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-slate-400 hover:text-neon-cyan text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green" />
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-neon-cyan text-sm transition-colors">Technical Support</Link>
              </li>
              <li>
                <Link href="https://wa.me/918148045030" target="_blank" className="text-slate-400 hover:text-neon-cyan text-sm transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-neon-green" /> WhatsApp Help
                </Link>
              </li>
              <li>
                <a href="mailto:tamizhtechpvtltd@gmail.com" className="text-slate-400 hover:text-neon-cyan text-sm transition-colors">Email Support</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Coimbatore, Tamil Nadu,<br />India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neon-cyan shrink-0" />
                <a href="tel:+918148045030" className="text-slate-400 text-sm hover:text-neon-cyan transition-colors">
                  +91 8148045030
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                <a href="mailto:tamizhtechpvtltd@gmail.com" className="text-slate-400 text-sm hover:text-neon-cyan transition-colors">
                  tamizhtechpvtltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 TamizhTech Robotics. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <span className="text-neon-green">💚</span> in Coimbatore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
