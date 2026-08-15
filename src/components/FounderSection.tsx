import React from 'react';
import { FOUNDER_INFO } from '../data/foundationData';
import { FounderImage } from './FounderImage';
import { Quote, Heart, Award, ShieldCheck } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-emerald-50/40 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008751]/10 text-[#008751] font-montserrat font-bold text-xs uppercase tracking-wider w-fit border border-[#008751]/20">
              <Award className="w-3.5 h-3.5 text-[#008751]" />
              LEADERSHIP & VISIONARY
            </div>

            <div>
              <h2 className="text-xs font-montserrat font-bold text-[#008751] uppercase tracking-widest mb-1">
                MEET OUR FOUNDER
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-slate-900 leading-tight">
                {FOUNDER_INFO.name}
              </h3>
              <p className="font-montserrat font-semibold text-[#008751] text-base mt-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                {FOUNDER_INFO.title}
              </p>
            </div>

            <p className="font-poppins text-slate-700 text-base leading-relaxed">
              {FOUNDER_INFO.bio}
            </p>

            {/* Prominent Quote Card */}
            <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-emerald-100 overflow-hidden my-4 group">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-[#008751]">
                <Quote className="w-24 h-24" />
              </div>

              <div className="relative z-10">
                <Quote className="w-8 h-8 text-[#008751] mb-3 opacity-90" />
                <blockquote className="font-montserrat font-semibold text-lg sm:text-xl text-slate-900 italic leading-relaxed mb-4">
                  "{FOUNDER_INFO.quote}"
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <cite className="font-poppins font-bold text-sm text-[#008751] not-italic">
                    — {FOUNDER_INFO.shortName}
                  </cite>
                  <span className="text-xs font-poppins text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    Jigawa Central
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center">
                <p className="font-montserrat font-bold text-lg text-slate-900">Humanitarian</p>
                <p className="font-poppins text-xs text-slate-600 mt-0.5">Grassroots Relief</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center">
                <p className="font-montserrat font-bold text-lg text-slate-900">Education Advocate</p>
                <p className="font-poppins text-xs text-slate-600 mt-0.5">Teacher Upskilling</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center col-span-2 sm:col-span-1">
                <p className="font-montserrat font-bold text-lg text-slate-900">Youth Mentor</p>
                <p className="font-poppins text-xs text-slate-600 mt-0.5">Sports & Digital</p>
              </div>
            </div>
          </div>

          {/* Right Column Photo 4 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group aspect-[4/5]">
              <FounderImage
                photoKey="closing"
                alt="Her Excellency Dr. Amb. Halima Sulaiman Zakari - Pure White Attire"
                containerClassName="w-full h-full"
              />
              <div className="absolute bottom-4 inset-x-4 bg-slate-950/80 backdrop-blur-md text-white p-4 rounded-2xl border border-emerald-500/30">
                <p className="font-montserrat font-bold text-sm text-emerald-400">
                  Her Excellency Dr. Ambassador Halima S. Zakari
                </p>
                <p className="font-poppins text-xs text-slate-300 mt-0.5">
                  Championing Dignity & Self-Reliance across Jigawa Central
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
