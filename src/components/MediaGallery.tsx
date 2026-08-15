import React, { useState } from 'react';
import { MEDIA_GALLERY_DATA } from '../data/foundationData';
import { MediaItem } from '../types';
import { Image as ImageIcon, X, ZoomIn, Calendar, Tag } from 'lucide-react';

export const MediaGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<MediaItem | null>(null);

  const categories = ['All', 'Athletics', 'Teacher Training', 'Donations', 'Empowerment', 'Community'];

  const filteredMedia = activeCategory === 'All'
    ? MEDIA_GALLERY_DATA
    : MEDIA_GALLERY_DATA.filter(m => m.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#008751] font-montserrat font-bold text-xs uppercase tracking-wider mb-3 border border-emerald-200">
              <ImageIcon className="w-3.5 h-3.5 text-[#008751]" />
              VISUAL REPOSITORY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-slate-900">
              MEDIA GALLERY
            </h2>
            <p className="font-poppins text-slate-600 text-sm mt-2">
              Moments of impact, empowerment events, and community engagements in Jigawa.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-poppins font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#008751] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3] bg-slate-100 border border-slate-200/80"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-montserrat font-bold text-[#FFD700] uppercase bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
                    {item.category}
                  </span>
                  <ZoomIn className="w-5 h-5 text-white/80" />
                </div>
                <h4 className="font-montserrat font-bold text-sm text-white line-clamp-1">
                  {item.title}
                </h4>
                <p className="font-poppins text-xs text-slate-300 line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>

              {/* Top Tag Badge when not hovered */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-montserrat font-bold text-[#008751] shadow-sm group-hover:opacity-0 transition-opacity">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full p-6 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden mb-6 bg-slate-950 flex items-center justify-center">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-montserrat font-bold text-[#FFD700] uppercase bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                {lightboxImage.category}
              </span>
              {lightboxImage.date && (
                <span className="text-xs font-poppins text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {lightboxImage.date}
                </span>
              )}
            </div>

            <h3 className="text-xl font-montserrat font-bold text-white mb-2">
              {lightboxImage.title}
            </h3>
            <p className="font-poppins text-sm text-slate-300">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
