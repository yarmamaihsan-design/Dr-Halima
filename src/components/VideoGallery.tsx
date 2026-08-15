import React, { useState } from 'react';
import { VIDEO_GALLERY_DATA } from '../data/foundationData';
import { VideoItem } from '../types';
import { Play, Tv, Youtube, X, Clock } from 'lucide-react';

export const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-montserrat font-bold text-xs uppercase tracking-wider mb-3">
            <Tv className="w-3.5 h-3.5 text-[#FFD700]" />
            DOCUMENTARY & SPEECHES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white">
            WATCH OUR WORK
          </h2>
          <p className="font-poppins text-slate-400 text-sm mt-2">
            Official YouTube Channel: <span className="text-emerald-400 font-semibold">Nana Halima Empowerment Initiative</span>
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_GALLERY_DATA.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-[#008751] transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/40 flex flex-col group cursor-pointer"
            >
              {/* Thumbnail with Play Button */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#008751] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-[#FFD700]">
                    <Play className="w-7 h-7 fill-white ml-1 text-white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono font-medium text-slate-300 flex items-center gap-1 border border-slate-700">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-montserrat font-bold text-emerald-400 border border-emerald-800">
                  {video.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-montserrat font-bold text-base text-white group-hover:text-emerald-400 transition-colors leading-snug mb-2">
                    {video.title}
                  </h3>
                  <p className="font-poppins text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs font-poppins text-slate-400">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>Nana Halima Channel</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-montserrat font-bold text-white mb-4 pr-10">
              {activeVideo.title}
            </h3>

            {/* Video Player Display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-8 text-center mb-4">
              <div className="w-20 h-20 rounded-full bg-[#008751] text-white flex items-center justify-center mb-4 shadow-xl border-2 border-[#FFD700]">
                <Play className="w-10 h-10 fill-white ml-1" />
              </div>
              <p className="font-montserrat font-bold text-lg text-white">
                Official Foundation Video Stream
              </p>
              <p className="font-poppins text-xs text-slate-400 mt-1 max-w-md">
                Official YouTube channel link will be connected upon channel release.
              </p>
            </div>

            <p className="font-poppins text-xs text-slate-300">
              {activeVideo.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
