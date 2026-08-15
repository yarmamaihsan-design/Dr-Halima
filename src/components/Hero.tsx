import React from 'react';
import { ArrowRight, Heart, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FounderImage } from './FounderImage';

interface HeroProps {
  onOpenApply: () => void;
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onOpenDonate }) => {
  return (
    <section id="home" className="relative min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Mesh & Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-emerald-950/40 z-0" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#008751]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start pt-6 lg:pt-0">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-montserrat font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            NANA HALIMA EMPOWERMENT INITIATIVE
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-black tracking-tight text-white leading-[1.15] mb-6">
            EMPOWERING LIVES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008751] via-emerald-400 to-[#FFD700]">
              BUILDING JIGAWA.
            </span>
          </h1>

          {/* Supporting Text & Founder Title */}
          <div className="space-y-3 mb-8">
            <p className="text-lg sm:text-xl font-montserrat font-semibold text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFD700] shrink-0" />
              Foundation of Her Excellency Dr. Ambassador Halima Sulaiman Zakari
            </p>
            <p className="text-sm sm:text-base font-poppins text-slate-300 max-w-2xl leading-relaxed">
              Pioneering youth development, digital skills training, women economic empowerment, and humanitarian relief across Jigawa Central and Nigeria.
            </p>
          </div>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl">
            <div className="flex items-center gap-2 text-xs font-poppins text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
              <span>350+ Educators Digital Mentorship</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-poppins text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>Dr. Halima Olympic Competition 2026</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-poppins text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>Women Grants & Vocational Toolkits</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-poppins text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
              <span>14 LGAs Grassroots Outreach</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#programs"
              className="px-6 py-3.5 rounded-xl font-poppins font-bold text-sm bg-[#008751] hover:bg-[#00683e] text-white transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 border border-[#FFD700]/30 hover:translate-y-[-2px]"
            >
              Our Programs
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenApply}
              className="px-6 py-3.5 rounded-xl font-poppins font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center justify-center gap-2 hover:border-emerald-500/50"
            >
              Apply Now
            </button>
            <button
              onClick={onOpenDonate}
              className="px-6 py-3.5 rounded-xl font-poppins font-bold text-sm bg-gradient-to-r from-[#FFD700] to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-md flex items-center justify-center gap-2 hover:translate-y-[-2px]"
            >
              <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
              Donate
            </button>
          </div>
        </div>

        {/* Right Column Founder Hero Portrait */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 group">
            {/* Real Founder Photo 1 */}
            <FounderImage
              photoKey="hero"
              alt="Her Excellency Dr. Ambassador Halima Sulaiman Zakari"
              containerClassName="w-full h-full"
            />

            {/* Floating Tag */}
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/40 text-[11px] font-montserrat font-bold text-emerald-400 flex items-center gap-1.5 z-20">
              <Award className="w-3.5 h-3.5 text-[#FFD700]" />
              Jigawa Central Philanthropist
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-6 text-left z-20">
              <h3 className="font-montserrat font-bold text-lg text-white">
                Her Excellency Dr. Amb. Halima S. Zakari
              </h3>
              <p className="font-poppins text-xs text-emerald-300 mt-1">
                Founder & President, Nana Halima Empowerment Initiative
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" className="text-xs text-slate-400 font-poppins flex flex-col items-center gap-1">
          <span>Explore Foundation</span>
          <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#008751] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
