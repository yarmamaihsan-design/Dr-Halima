import React, { useState } from 'react';
import { NEWS_EVENTS_DATA } from '../data/foundationData';
import { NewsItem } from '../types';
import { Newspaper, Calendar, MapPin, ArrowRight, Sparkles, CheckCircle, Clock, X } from 'lucide-react';

interface NewsEventsProps {
  onOpenApplyForProgram: (programName: string) => void;
}

export const NewsEvents: React.FC<NewsEventsProps> = ({ onOpenApplyForProgram }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const featuredEvent = NEWS_EVENTS_DATA.find(n => n.isFeatured) || NEWS_EVENTS_DATA[0];
  const regularNews = NEWS_EVENTS_DATA.filter(n => n.id !== featuredEvent.id);

  return (
    <section id="news" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#008751] font-montserrat font-bold text-xs uppercase tracking-wider mb-3 border border-emerald-200">
            <Newspaper className="w-3.5 h-3.5 text-[#008751]" />
            FOUNDATION ANNOUNCEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-slate-900">
            NEWS & UPCOMING EVENTS
          </h2>
          <p className="font-poppins text-slate-600 text-sm mt-2">
            Stay updated with current program enrollees, call for applications, and foundation field reports.
          </p>
        </div>

        {/* Featured Banner Event Card */}
        {featuredEvent && (
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            {/* Status Ribbon */}
            <div className="absolute top-6 right-6 bg-[#008751] text-white px-4 py-1.5 rounded-full font-montserrat font-extrabold text-xs tracking-wider flex items-center gap-1.5 shadow-lg border border-[#FFD700]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              {featuredEvent.status}
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-montserrat font-bold text-[#FFD700] uppercase tracking-wider bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                FEATURED UPCOMING PROGRAM
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-white leading-tight">
                {featuredEvent.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-poppins text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Calendar className="w-4 h-4 text-[#FFD700]" />
                  <span>Date: <strong>{featuredEvent.date}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <MapPin className="w-4 h-4 text-[#008751]" />
                  <span>Venue: <strong>{featuredEvent.venue}</strong></span>
                </div>
              </div>

              <p className="font-poppins text-sm text-slate-300 leading-relaxed">
                {featuredEvent.summary}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenApplyForProgram(featuredEvent.title)}
                  className="px-6 py-3.5 rounded-xl bg-[#008751] hover:bg-[#00683e] font-poppins font-bold text-sm text-white transition-all shadow-lg flex items-center gap-2 border border-[#FFD700]/30"
                >
                  APPLY NOW
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedArticle(featuredEvent)}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-poppins font-medium text-sm text-slate-200 border border-slate-700"
                >
                  Read Event Details
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-video border-2 border-slate-700 shadow-xl">
                <img
                  src={featuredEvent.imageUrl}
                  alt={featuredEvent.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Regular News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-montserrat font-bold text-[#008751] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase">
                    {item.category}
                  </span>
                  <span className={`text-[10px] font-montserrat font-bold px-2.5 py-1 rounded-full ${
                    item.status === 'APPLICATIONS OPEN'
                      ? 'bg-emerald-600 text-white'
                      : item.status === 'UPCOMING'
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h4 className="font-montserrat font-bold text-lg text-slate-900 group-hover:text-[#008751] transition-colors">
                  {item.title}
                </h4>

                <div className="flex flex-wrap items-center gap-3 text-xs font-poppins text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.venue}
                  </span>
                </div>

                <p className="font-poppins text-xs text-slate-600 line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(item)}
                  className="text-xs font-poppins font-semibold text-[#008751] hover:underline flex items-center gap-1"
                >
                  Read Full Update
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {item.status === 'APPLICATIONS OPEN' && (
                  <button
                    onClick={() => onOpenApplyForProgram(item.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#008751] text-white font-poppins font-bold text-xs"
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-slate-900 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-montserrat font-bold text-[#008751] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              {selectedArticle.category}
            </span>

            <h3 className="text-2xl font-montserrat font-extrabold text-slate-900 mt-4 mb-2">
              {selectedArticle.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-poppins text-slate-600 mb-4 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-[#008751]" />
                Date: {selectedArticle.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#008751]" />
                Venue: {selectedArticle.venue}
              </span>
            </div>

            <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose text-sm font-poppins text-slate-700 leading-relaxed mb-6 space-y-3">
              <p>{selectedArticle.summary}</p>
              {selectedArticle.fullContent && <p>{selectedArticle.fullContent}</p>}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              {selectedArticle.status === 'APPLICATIONS OPEN' && (
                <button
                  onClick={() => {
                    const title = selectedArticle.title;
                    setSelectedArticle(null);
                    onOpenApplyForProgram(title);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#008751] text-white font-poppins font-bold text-sm shadow-md"
                >
                  Apply for this Event
                </button>
              )}
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-poppins font-medium text-sm"
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
