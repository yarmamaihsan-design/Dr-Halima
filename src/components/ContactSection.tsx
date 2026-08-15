import React, { useState } from 'react';
import { FOUNDER_INFO } from '../data/foundationData';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Globe, Clock, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#008751] font-montserrat font-bold text-xs uppercase tracking-wider mb-3 border border-emerald-200">
            <MessageSquare className="w-3.5 h-3.5 text-[#008751]" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-slate-900">
            LET'S BUILD A STRONGER JIGAWA TOGETHER
          </h2>
          <p className="font-poppins text-slate-600 text-sm mt-3">
            Reach out to our leadership team for partnerships, volunteer opportunities, and program inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#008751]/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-montserrat font-bold text-xl text-white">
                Contact Information
              </h3>

              <div className="space-y-4 font-poppins text-sm">
                <a
                  href={`tel:${FOUNDER_INFO.phone}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-montserrat font-bold text-slate-400 uppercase tracking-wider block">
                      PHONE NUMBER
                    </span>
                    <span className="font-montserrat font-bold text-base text-white group-hover:text-emerald-400">
                      {FOUNDER_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${FOUNDER_INFO.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-montserrat font-bold text-slate-400 uppercase tracking-wider block">
                      EMAIL ADDRESS
                    </span>
                    <span className="font-montserrat font-bold text-sm text-white group-hover:text-emerald-400 break-all">
                      {FOUNDER_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-montserrat font-bold text-slate-400 uppercase tracking-wider block">
                      OFFICE LOCATION
                    </span>
                    <span className="font-montserrat font-bold text-sm text-white">
                      {FOUNDER_INFO.location}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium block mt-0.5">
                      ({FOUNDER_INFO.virtualConnect})
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-poppins">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#008751]" />
                  Mon - Sat: 8:00 AM - 6:00 PM
                </span>
                <span className="text-[#FFD700]">Jigawa State</span>
              </div>
            </div>

            {/* Simulated Google Maps Area */}
            <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 h-64 relative shadow-md">
              <iframe
                title="Jigawa State Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996162.8340157077!2d9.24523315!3d12.1645318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae43b85d30bd05%3A0x8aaef51d7c356b6b!2sDutse%2C%20Jigawa!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                className="w-full h-full border-0 filter grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold text-slate-900 border border-slate-200 shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#008751]" />
                Dutse & Birnin Kudu, Jigawa
              </div>
            </div>
          </div>

          {/* Right Column Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {isSent ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#008751] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="font-poppins text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Nana Halima Empowerment Initiative. Our team will review your message and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-montserrat font-bold text-slate-900 pb-2 border-b border-slate-200">
                  Send Us a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ibrahim Abubakar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="09032356601"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Program Sponsorship"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your inquiry or partnership request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#008751] hover:bg-[#00683e] text-white font-montserrat font-extrabold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 border border-[#FFD700]/30"
                >
                  <Send className="w-4 h-4" />
                  SEND MESSAGE TO FOUNDATION
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
