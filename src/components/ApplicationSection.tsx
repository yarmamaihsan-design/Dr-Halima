import React, { useState } from 'react';
import { JIGAWA_LGAS, PROGRAMS_DATA } from '../data/foundationData';
import { ApplicationFormData } from '../types';
import { Send, Upload, CheckCircle2, AlertCircle, Loader2, Sparkles, FileText, UserCheck } from 'lucide-react';

interface ApplicationSectionProps {
  initialProgramName?: string;
  onSuccess?: () => void;
}

export const ApplicationSection: React.FC<ApplicationSectionProps> = ({ initialProgramName }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    phone: '',
    email: '',
    lga: JIGAWA_LGAS[0],
    program: initialProgramName || PROGRAMS_DATA[0].title,
    cvFileName: '',
    statement: ''
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFormData(prev => ({ ...prev, cvFileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.fullName.trim()) {
      setFormError('Please enter your Full Name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please enter a valid Phone Number (e.g. 09032356601).');
      return;
    }
    if (!formData.statement.trim()) {
      setFormError('Please write a brief statement on why you wish to join.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      lga: JIGAWA_LGAS[0],
      program: PROGRAMS_DATA[0].title,
      cvFileName: '',
      statement: ''
    });
    setFileName('');
  };

  return (
    <section id="apply" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Program Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#008751] font-montserrat font-bold text-xs uppercase tracking-wider border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-[#008751]" />
              ONLINE ENROLLMENT
            </div>

            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-slate-900 leading-tight">
              JOIN OUR EMPOWERMENT PROGRAMS
            </h2>

            <p className="font-poppins text-slate-600 text-sm leading-relaxed">
              We are currently accepting applications for candidates across all local government areas in Jigawa State:
            </p>

            {/* Currently Accepting List */}
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#008751] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-slate-900">
                    Teachers Digital Skills Program
                  </h4>
                  <p className="font-poppins text-xs text-slate-600 mt-0.5">
                    Computer literacy, MS Office & AI for primary & secondary school educators.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-[#FFD700] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-slate-900">
                    Youth Sports Competition
                  </h4>
                  <p className="font-poppins text-xs text-slate-600 mt-0.5">
                    Dr. Halima Olympic Athletics Trials 2026 for track & field talents.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#008751] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-slate-900">
                    Women Skills Acquisition
                  </h4>
                  <p className="font-poppins text-xs text-slate-600 mt-0.5">
                    Tailoring, soap making, micro-SME startup capital & grants.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs font-poppins space-y-1">
              <p className="font-semibold text-[#FFD700] flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#FFD700]" />
                Transparent Selection Process
              </p>
              <p className="text-slate-300">
                All candidates are screened by the program committee based on community commitment and LGA distribution.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#008751] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-slate-900">
                    Application Received!
                  </h3>
                  <p className="font-poppins text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your application for <strong className="text-[#008751]">{formData.program}</strong> has been received and queued for Jigawa committee review.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-600 max-w-xs mx-auto text-left space-y-1">
                    <p><strong>Ref Code:</strong> NHI-{Math.floor(100000 + Math.random() * 900000)}</p>
                    <p><strong>LGA:</strong> {formData.lga}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-xl bg-[#008751] text-white font-poppins font-bold text-sm hover:bg-[#00683e] transition-all"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-montserrat font-bold text-slate-900 pb-2 border-b border-slate-200 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#008751]" />
                    Candidate Application Form
                  </h3>

                  {formError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-poppins flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aminu Suleiman"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09032356601"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="applicant@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                      />
                    </div>
                  </div>

                  {/* LGA & Program Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Jigawa LGA *
                      </label>
                      <select
                        value={formData.lga}
                        onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                      >
                        {JIGAWA_LGAS.map((lga) => (
                          <option key={lga} value={lga}>
                            {lga} LGA
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Program Applying For *
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                      >
                        {PROGRAMS_DATA.map((prog) => (
                          <option key={prog.id} value={prog.title}>
                            {prog.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Upload CV/Photo */}
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Upload CV / Passport Photograph (Optional)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-white hover:border-[#008751] transition-colors relative cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <Upload className="w-6 h-6 text-[#008751]" />
                        <span className="text-xs font-poppins text-slate-600 font-medium">
                          {fileName ? (
                            <strong className="text-[#008751]">{fileName}</strong>
                          ) : (
                            'Click or drag file to attach (PDF, JPG, PNG)'
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Statement of Purpose */}
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Why do you wish to participate? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly state your current occupation, school, or community goals..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 text-sm font-poppins bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#008751] hover:bg-[#00683e] text-white font-montserrat font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 border border-[#FFD700]/30 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SUBMIT APPLICATION NOW
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
