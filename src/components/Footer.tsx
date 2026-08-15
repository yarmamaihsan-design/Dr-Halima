import React from 'react';
import { FOUNDER_INFO } from '../data/foundationData';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 font-poppins relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#008751] via-[#FFD700] to-[#008751]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Founder Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#008751] text-white flex items-center justify-center font-montserrat font-black text-xl border border-[#FFD700]/30 shadow-md">
                N
              </div>
              <div>
                <h3 className="font-montserrat font-extrabold text-white text-base leading-tight">
                  NANA HALIMA
                </h3>
                <span className="font-montserrat text-[10px] font-bold text-[#008751] tracking-wider uppercase block">
                  EMPOWERMENT INITIATIVE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-poppins leading-relaxed max-w-sm">
              Foundation of <strong className="text-white">{FOUNDER_INFO.name}</strong> — {FOUNDER_INFO.title}. Dedicated to youth development, digital education, women skills, and humanitarian relief in Jigawa State.
            </p>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                title="Facebook [Insert Handle]"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#008751] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                title="Instagram [Insert Handle]"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#008751] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                title="X (Twitter) [Insert Handle]"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#008751] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                title="YouTube [Insert Handle]"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#008751] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-montserrat font-bold text-xs uppercase text-[#FFD700] tracking-wider mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Foundation</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Media Gallery</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Col 4: Action Portals */}
          <div>
            <h4 className="font-montserrat font-bold text-xs uppercase text-[#FFD700] tracking-wider mb-4">
              PARTICIPATE & GIVE
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#apply" className="hover:text-white transition-colors">Apply for Programs</a></li>
              <li><a href="#donate" className="hover:text-white transition-colors">Make a Donation</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Volunteer Opportunities</a></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-xs uppercase text-[#FFD700] tracking-wider mb-4">
              HEADQUARTERS
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#008751] shrink-0 mt-0.5" />
                <span>{FOUNDER_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#008751] shrink-0" />
                <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:text-white">
                  {FOUNDER_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#008751] shrink-0" />
                <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:text-white break-all">
                  {FOUNDER_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 Nana Halima Empowerment Initiative. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 font-montserrat font-bold text-slate-300">
            <span>Website by</span>
            <span className="text-[#008751]">Kowaguru Technology Limited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
