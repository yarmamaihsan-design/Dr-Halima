import React, { useEffect, useState, useRef } from 'react';
import { IMPACT_STATS } from '../data/foundationData';
import { ImpactStat } from '../types';
import { Award, GraduationCap, MapPin, Users, Coins } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case 'teachers':
        return <GraduationCap className="w-7 h-7 text-[#FFD700]" />;
      case 'lgas':
        return <MapPin className="w-7 h-7 text-[#FFD700]" />;
      case 'youths':
        return <Users className="w-7 h-7 text-[#FFD700]" />;
      case 'invested':
        return <Coins className="w-7 h-7 text-[#FFD700]" />;
      default:
        return <Award className="w-7 h-7 text-[#FFD700]" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#008751]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-montserrat font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            MEASURABLE PROGRESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-white mt-3">
            OUR GROUNDED IMPACT IN JIGAWA
          </h2>
          <p className="font-poppins text-slate-300 text-sm mt-2">
            Verifiable metrics reflecting direct community empowerment and investment.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} animate={hasAnimated} icon={getIcon(stat.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: ImpactStat;
  animate: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ stat, animate, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const end = stat.value;
    const duration = 1500;
    const steps = 40;
    const increment = end / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [animate, stat.value]);

  return (
    <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-[#008751] transition-all hover:translate-y-[-4px] shadow-xl group">
      <div className="w-14 h-14 rounded-2xl bg-[#008751] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
        {icon}
      </div>

      <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black text-white mb-2">
        {stat.prefix && <span className="text-[#FFD700]">{stat.prefix}</span>}
        <span>{count.toLocaleString()}</span>
        <span className="text-[#008751]">{stat.suffix}</span>
      </div>

      <h3 className="font-montserrat font-bold text-lg text-slate-100 mb-2">
        {stat.label}
      </h3>

      <p className="font-poppins text-xs text-slate-400 leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};
