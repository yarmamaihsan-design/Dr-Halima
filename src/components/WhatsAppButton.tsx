import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/2349032356601?text=Hello%20Nana%20Halima%20Empowerment%20Initiative,%20I%20would%20like%20to%20inquire%20about...";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 font-poppins font-bold text-xs transition-all hover:scale-105 border-2 border-white/20 group"
      aria-label="Chat with Us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
      <span className="hidden sm:inline">Chat with Us</span>
      <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
    </a>
  );
};
