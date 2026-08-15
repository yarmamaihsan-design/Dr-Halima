import React, { useState } from 'react';
import heroImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033740.jpg';
import aboutImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033743.jpg';
import impactImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033744.jpg';
import closingImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033742.jpg';

interface FounderImageProps {
  photoKey: 'hero' | 'about' | 'impact' | 'closing';
  alt: string;
  className?: string;
  containerClassName?: string;
  badgeText?: string;
}

export const FounderImage: React.FC<FounderImageProps> = ({
  photoKey,
  alt,
  className = '',
  containerClassName = '',
  badgeText
}) => {
  // Map photoKey to imported assets
  const imageMap = {
    hero: { primary: heroImg, alt: 'Dr. Halima — Hero Portrait', accent: 'Green & Gold Royal Attire' },
    about: { primary: aboutImg, alt: 'Youth Mentor — Sports & Digital', accent: 'Traditional Red & Blue Gele' },
    impact: { primary: impactImg, alt: 'Key Initiatives Banner', accent: 'Vibrant Patterned Banner' },
    closing: { primary: closingImg, alt: 'Her Excellency — Founder Portrait', accent: 'Pure White Traditional Attire' }
  } as const;

  const current = imageMap[photoKey];
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Use the imported primary asset as the source
  const sources = [current.primary];

  const handleError = () => {
    if (attempt < sources.length - 1) {
      setAttempt(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden group ${containerClassName}`}>
      {!hasError ? (
        <img
          src={sources[attempt]}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={handleError}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${className}`}
        />
      ) : (
        <div className="w-full h-full min-h-[360px] bg-gradient-to-br from-[#008751] via-[#004D25] to-slate-900 text-white flex flex-col items-center justify-center p-8 text-center relative">
          <div className="w-24 h-24 rounded-full border-4 border-[#FFD700] flex items-center justify-center text-3xl font-extrabold mb-4 font-montserrat shadow-lg bg-[#008751]/80">
            HZ
          </div>
          <h4 className="font-montserrat font-bold text-lg text-white">Her Excellency Dr. Ambassador</h4>
          <p className="font-montserrat font-semibold text-[#FFD700] text-sm mt-1">Halima Sulaiman Zakari</p>
          <span className="text-xs text-emerald-200 mt-2 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">Jigawa Central Philanthropist</span>
        </div>
      )}

      {/* Subtle overlay highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {badgeText && (
        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 shadow-lg text-xs font-medium flex items-center justify-between">
          <span className="text-emerald-400 font-semibold">{badgeText}</span>
          <span className="text-slate-300 font-mono text-[10px]">Official Photograph</span>
        </div>
      )}
    </div>
  );
};
