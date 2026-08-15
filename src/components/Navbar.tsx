import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Send } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down - hide header
          setIsVisible(false);
        } else {
          // Scrolling up - show header
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Media Gallery', href: '#gallery' },
    { name: 'News & Events', href: '#news' },
    { name: 'Apply', href: '#apply' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-[68px] transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 text-slate-900'
          : 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Text-Based Wordmark Logo - No "N" Box */}
        <a 
          href="#home" 
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008751] rounded-md p-1"
        >
          <span
            className={`font-montserrat font-black tracking-tight text-sm sm:text-base leading-none transition-colors ${
              isScrolled ? 'text-slate-900 group-hover:text-[#008751]' : 'text-white group-hover:text-emerald-300'
            }`}
          >
            NANA HALIMA
          </span>
          <span className="font-montserrat font-bold text-[#008751] text-[9px] sm:text-[10px] tracking-widest uppercase leading-tight mt-0.5">
            EMPOWERMENT INITIATIVE
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs xl:text-sm font-poppins font-medium transition-colors hover:text-[#008751] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008751] rounded px-1 py-0.5 ${
                isScrolled ? 'text-slate-700 hover:text-[#008751]' : 'text-slate-200 hover:text-emerald-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={onOpenApply}
            type="button"
            className={`px-3.5 py-1.5 rounded-lg text-xs font-poppins font-semibold transition-all border flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008751] ${
              isScrolled
                ? 'border-[#008751] text-[#008751] hover:bg-emerald-50 active:bg-emerald-100'
                : 'border-white/40 text-white hover:bg-white/10 active:bg-white/20'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            Apply Now
          </button>
          <button
            onClick={onOpenDonate}
            type="button"
            className="px-4 py-1.5 rounded-lg text-xs font-poppins font-bold bg-[#008751] hover:bg-[#00683e] active:bg-[#005231] text-white transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 border border-[#FFD700]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#008751]"
          >
            <Heart className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
            Donate
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenDonate}
            type="button"
            className="px-3 py-1.5 rounded-lg text-xs font-poppins font-bold bg-[#008751] text-white flex items-center gap-1 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008751]"
          >
            <Heart className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
            Donate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008751] ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-slate-900/98 backdrop-blur-xl text-white z-40 flex flex-col p-6 border-t border-slate-800 shadow-2xl overflow-y-auto max-h-[calc(100vh-68px)]">
          <div className="flex flex-col gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-montserrat font-medium text-slate-200 hover:text-[#008751] active:text-emerald-400 py-2.5 px-3 rounded-lg hover:bg-slate-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              type="button"
              className="w-full py-2.5 rounded-xl text-sm font-poppins font-semibold border border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/40 active:bg-emerald-950/60 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Apply Now
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              type="button"
              className="w-full py-2.5 rounded-xl text-sm font-poppins font-bold bg-[#008751] hover:bg-[#00683e] active:bg-[#005231] text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 border border-[#FFD700]/30"
            >
              <Heart className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              Donate
            </button>
          </div>

          <div className="mt-6 pt-4 text-center border-t border-slate-800/80">
            <p className="font-montserrat font-bold text-xs text-slate-300">NANA HALIMA EMPOWERMENT INITIATIVE</p>
            <p className="mt-1 text-[11px] text-slate-400">Dutse, Jigawa State, Nigeria</p>
          </div>
        </div>
      )}
    </header>
  );
};
