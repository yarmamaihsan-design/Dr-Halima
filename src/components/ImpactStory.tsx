import React from 'react';
import { FounderImage } from './FounderImage';
import { BookOpen, Wrench, Briefcase, HeartHandshake, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ImpactStory: React.FC = () => {
  const steps = [
    {
      title: "Education",
      desc: "Providing classroom rehabilitation, teacher digital literacy, and student learning supplies.",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      color: "bg-emerald-600"
    },
    {
      title: "Skills",
      desc: "Intensive 5-day training + 25-day mentorship in tech, sports, tailoring, and enterprise.",
      icon: <Wrench className="w-5 h-5 text-white" />,
      color: "bg-[#008751]"
    },
    {
      title: "Opportunity",
      desc: "Connecting trained educators and youth athletes to real-world opportunities.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: "bg-emerald-700"
    },
    {
      title: "Empowerment",
      desc: "Distributing micro-SME grants, equipment, and mentorship for self-reliance.",
      icon: <HeartHandshake className="w-5 h-5 text-white" />,
      color: "bg-[#004D25]"
    },
    {
      title: "Community Impact",
      desc: "Lifting families out of poverty and fostering a vibrant Jigawa Central.",
      icon: <Globe className="w-5 h-5 text-slate-950" />,
      color: "bg-[#FFD700]"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-montserrat font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            STRATEGIC HUMANITARIAN ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white mt-3">
            BUILDING OPPORTUNITIES. CHANGING COMMUNITIES.
          </h2>
          <p className="font-poppins text-slate-300 text-sm mt-3">
            How Nana Halima Empowerment Initiative creates sustainable change from grassroots learning to economic self-reliance.
          </p>
        </div>

        {/* Story Journey Diagram */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col items-start relative group hover:border-[#008751] transition-all hover:translate-y-[-4px]"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                  <span className="font-montserrat font-bold text-xs text-slate-500 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-montserrat font-bold text-base text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="font-poppins text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Photorealistic Narrative Block with Photo 3 */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950/60 rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-emerald-500/30">
              <FounderImage
                photoKey="impact"
                alt="Dr. Halima Sulaiman Zakari - Purple Traditional Attire"
                containerClassName="w-full h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-montserrat font-bold text-[#FFD700] uppercase tracking-wider">
              HUMANITARIAN STORYTELLING
            </span>
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-white">
              Sustained Grassroots Presence Across All 14 LGAs
            </h3>
            <p className="font-poppins text-sm text-slate-300 leading-relaxed">
              Every initiative launched under the leadership of Her Excellency Dr. Ambassador Halima Sulaiman Zakari is designed around long-term sustainability rather than temporary publicity.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-xs font-poppins text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0 mt-0.5" />
                <span><strong>Rigorous Selection:</strong> Ensuring transparent, merit-based inclusion for teachers, athletes, and women groups.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs font-poppins text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <span><strong>Long-term Mentorship:</strong> 25-day post-training support for educators to embed digital tools in daily teaching.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs font-poppins text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0 mt-0.5" />
                <span><strong>Community Partnerships:</strong> Collaborating with traditional and administrative leaders in Jigawa Central.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
