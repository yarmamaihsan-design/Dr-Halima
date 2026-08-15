import React, { useState, useEffect } from 'react';
import { Sparkles, X, Send, ArrowRight } from 'lucide-react';

interface ApplicationPopupProps {
  onApply: () => void;
  onViewPrograms: () => void;
}

export const ApplicationPopup: React.FC<ApplicationPopupProps> = ({ onApply, onViewPrograms }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed in session
    const dismissed = sessionStorage.getItem('nh_popup_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('nh_popup_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm w-full bg-slate-900 text-white rounded-2xl shadow-2xl border-2 border-[#008751] p-5 animate-slideUp">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-montserrat font-bold text-[#FFD700] uppercase tracking-wider">
          ENROLLMENT OPEN
        </span>
      </div>

      <h4 className="font-montserrat font-extrabold text-base text-white mb-1">
        APPLICATIONS ARE OPEN
      </h4>

      <p className="font-poppins text-xs text-slate-300 leading-relaxed mb-4">
        Join one of Nana Halima Empowerment Initiative's current empowerment programs.
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            handleDismiss();
            onApply();
          }}
          className="flex-1 py-2 px-3 rounded-lg bg-[#008751] hover:bg-[#00683e] font-poppins font-bold text-xs text-white transition-all shadow-md flex items-center justify-center gap-1 border border-[#FFD700]/30"
        >
          <Send className="w-3 h-3" />
          Apply Now
        </button>
        <button
          onClick={() => {
            handleDismiss();
            onViewPrograms();
          }}
          className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-poppins font-medium text-xs text-slate-300 flex items-center gap-1 border border-slate-700"
        >
          View Programs
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
