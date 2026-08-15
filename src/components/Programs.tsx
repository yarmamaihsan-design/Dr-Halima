import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../data/foundationData';
import { ProgramItem } from '../types';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, X, Layers, Calendar, MapPin } from 'lucide-react';

interface ProgramsProps {
  onOpenApplyForProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenApplyForProgram }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);

  const categories = ['All', 'Education & Tech', 'Youth & Sports', 'Economic Growth', 'Humanitarian'];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-montserrat font-bold text-xs uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#FFD700]" />
              KEY INITIATIVES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white">
              OUR PROGRAMS
            </h2>
            <p className="font-poppins text-slate-400 text-sm mt-2 max-w-xl">
              Targeted development programs providing skills, resources, and opportunities across Jigawa State.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-poppins font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#008751] text-white shadow-md border border-[#FFD700]/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-[#008751] transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/40 flex flex-col group cursor-pointer"
              onClick={() => setActiveModalProgram(program)}
            >
              {/* Program Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-montserrat font-bold text-emerald-400 border border-emerald-500/30">
                  {program.category}
                </div>

                {/* Impact Metric Badge */}
                <div className="absolute bottom-3 left-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-poppins text-slate-200 border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-[#FFD700] text-[11px]">{program.impactMetrics}</span>
                  <span className="text-[10px] text-slate-400 font-mono">Verified Impact</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-white group-hover:text-emerald-400 transition-colors leading-snug mb-2">
                    {program.title}
                  </h3>
                  <p className="font-poppins text-xs font-semibold text-[#FFD700] mb-3">
                    {program.subtitle}
                  </p>
                  <p className="font-poppins text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {program.details}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs font-poppins text-emerald-400 group-hover:underline font-semibold flex items-center gap-1">
                    Learn Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenApplyForProgram(program.title);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#008751] hover:bg-[#00683e] text-white text-xs font-poppins font-bold transition-all shadow-sm flex items-center gap-1"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs Footer Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-poppins font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:border-emerald-500"
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            View All Programs
          </button>
        </div>
      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-white relative animate-fadeIn shadow-2xl">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-montserrat font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              {activeModalProgram.category}
            </span>

            <h3 className="text-2xl font-montserrat font-extrabold text-white mt-4 mb-2">
              {activeModalProgram.title}
            </h3>

            <p className="font-poppins text-sm font-semibold text-[#FFD700] mb-4">
              {activeModalProgram.subtitle}
            </p>

            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-slate-700">
              <img
                src={activeModalProgram.imageUrl}
                alt={activeModalProgram.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-montserrat font-bold text-base text-white">Program Overview</h4>
              <p className="font-poppins text-sm text-slate-300 leading-relaxed">
                {activeModalProgram.details}
              </p>

              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#008751]" />
                  <span><strong>Impact Scope:</strong> {activeModalProgram.impactMetrics}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <MapPin className="w-4 h-4 text-[#FFD700]" />
                  <span><strong>Target Region:</strong> Jigawa Central LGAs & State-wide</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onOpenApplyForProgram(title);
                }}
                className="flex-1 py-3 rounded-xl bg-[#008751] hover:bg-[#00683e] font-poppins font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
              >
                Apply for this Program
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-poppins font-medium text-sm text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
