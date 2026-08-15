import React from 'react';
import { FOUNDER_INFO } from '../data/foundationData';
import { FounderImage } from './FounderImage';
import { Eye, Target, Compass, Sparkles } from 'lucide-react';

export const AboutFoundation: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#008751] font-montserrat font-bold text-xs uppercase tracking-wider mb-3 border border-emerald-200">
            <Compass className="w-3.5 h-3.5 text-[#008751]" />
            OUR CORE PURPOSE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-slate-900 tracking-tight">
            ABOUT THE FOUNDATION
          </h2>
          <div className="w-20 h-1.5 bg-[#008751] mx-auto mt-4 rounded-full" />
        </div>

        {/* Large Image + Text Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Photo 2 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 group aspect-[4/5]">
              <FounderImage
                photoKey="about"
                alt="Dr. Halima Sulaiman Zakari - Traditional Red Attire"
                containerClassName="w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-100 text-xs font-montserrat font-bold text-[#008751] shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                Founder & Visionary
              </div>
            </div>
            {/* Background Decorative Frame */}
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-2 border-[#008751]/20 -z-10 hidden sm:block" />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-slate-900 leading-snug">
                Dedicated to Sustainable Humanitarian Impact & Grassroots Upliftment
              </h3>
              <p className="font-poppins text-slate-600 text-base leading-relaxed">
                The <strong className="text-slate-900 font-semibold">Nana Halima Empowerment Initiative</strong> is a non-profit organization committed to youth development, education, healthcare, and economic empowerment in Jigawa State and across Nigeria.
              </p>
              <p className="font-poppins text-slate-600 text-base leading-relaxed">
                Founded by <strong className="text-[#008751] font-semibold">{FOUNDER_INFO.name}</strong>, {FOUNDER_INFO.title}, our mission is to create opportunities that lift families out of poverty and build a self-reliant generation.
              </p>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Vision Card */}
              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-md group">
                <div className="w-12 h-12 rounded-xl bg-[#008751] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Eye className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-slate-900 mb-2">
                  OUR VISION
                </h4>
                <p className="font-poppins text-sm text-slate-700 leading-relaxed">
                  A Jigawa where every youth and woman has access to skills, health and dignity.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200/60 hover:border-amber-300 transition-all hover:shadow-md group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Target className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-slate-900 mb-2">
                  OUR MISSION
                </h4>
                <p className="font-poppins text-sm text-slate-700 leading-relaxed">
                  To empower communities through education, sports, digital skills and humanitarian support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
