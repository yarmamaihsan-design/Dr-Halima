import React, { useState } from 'react';
import { DONATION_AMOUNTS } from '../data/foundationData';
import { Heart, Copy, Check, CreditCard, Landmark, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [copiedBank, setCopiedBank] = useState<boolean>(false);
  const [paymentGateway, setPaymentGateway] = useState<'paystack' | 'flutterwave'>('paystack');
  const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');

  const activeOption = DONATION_AMOUNTS.find(d => d.amount === selectedAmount);

  const handleCopyBank = () => {
    const text = `Account Name: NANA HALIMA EMPOWERMENT INITIATIVE\nBank: [Insert Bank]\nAccount No: [Insert No]`;
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const getEffectiveAmount = () => {
    if (isCustom && customAmount) {
      return parseInt(customAmount, 10) || 0;
    }
    return selectedAmount;
  };

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-montserrat font-bold text-xs uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
            FOUNDATION DONATION PORTAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white">
            SUPPORT OUR WORK
          </h2>
          <p className="font-poppins text-slate-300 text-sm mt-3">
            Your donation helps us reach more people in Jigawa and Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Selectable Amounts & Impact Note */}
          <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <h3 className="text-xl font-montserrat font-bold text-white pb-3 border-b border-slate-800 flex items-center justify-between">
              <span>Choose Contribution Tier</span>
              <span className="text-xs font-mono text-emerald-400">NGN (₦)</span>
            </h3>

            {/* Selectable Amount Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DONATION_AMOUNTS.map((opt) => (
                <button
                  key={opt.amount}
                  onClick={() => {
                    setSelectedAmount(opt.amount);
                    setIsCustom(false);
                  }}
                  className={`py-3.5 px-4 rounded-xl font-montserrat font-extrabold text-base transition-all border ${
                    !isCustom && selectedAmount === opt.amount
                      ? 'bg-[#008751] text-white border-[#FFD700] shadow-lg scale-105'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-emerald-500'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
              <button
                onClick={() => setIsCustom(true)}
                className={`py-3.5 px-4 rounded-xl font-montserrat font-extrabold text-xs transition-all border col-span-2 sm:col-span-1 ${
                  isCustom
                    ? 'bg-[#008751] text-white border-[#FFD700] shadow-lg scale-105'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-emerald-500'
                }`}
              >
                Custom Amount
              </button>
            </div>

            {/* Custom Amount Input */}
            {isCustom && (
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 animate-fadeIn">
                <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase mb-1">
                  Enter Custom NGN (₦) Amount
                </label>
                <input
                  type="number"
                  placeholder="e.g. 100000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white font-montserrat font-bold text-lg focus:border-[#008751] focus:ring-1 focus:ring-[#008751]"
                />
              </div>
            )}

            {/* Impact Statement Banner */}
            <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-800/60 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
              <div>
                <p className="font-montserrat font-bold text-xs text-emerald-400 uppercase tracking-wider">
                  DIRECT COMMUNITY IMPACT
                </p>
                <p className="font-poppins text-xs text-slate-200 mt-1 leading-relaxed">
                  {isCustom
                    ? `Your custom donation of ₦${(parseInt(customAmount, 10) || 0).toLocaleString()} will fund educational kits, micro-grants, and medical relief.`
                    : activeOption?.impactNote}
                </p>
              </div>
            </div>

            {/* Payment Gateway Toggle */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase">
                Select Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentGateway('paystack')}
                  className={`p-4 rounded-xl border flex items-center justify-center gap-2 font-montserrat font-bold text-sm transition-all ${
                    paymentGateway === 'paystack'
                      ? 'bg-slate-800 border-[#008751] text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#008751]" />
                  Paystack
                </button>
                <button
                  onClick={() => setPaymentGateway('flutterwave')}
                  className={`p-4 rounded-xl border flex items-center justify-center gap-2 font-montserrat font-bold text-sm transition-all ${
                    paymentGateway === 'flutterwave'
                      ? 'bg-slate-800 border-[#FFD700] text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#FFD700]" />
                  Flutterwave
                </button>
              </div>
            </div>

            <button
              onClick={() => setPaymentModalOpen(true)}
              className="w-full py-4 rounded-xl bg-[#008751] hover:bg-[#00683e] text-white font-montserrat font-extrabold text-sm tracking-wide transition-all shadow-xl flex items-center justify-center gap-2 border border-[#FFD700]/30"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              PROCEED TO DONATE ₦{getEffectiveAmount().toLocaleString()}
            </button>
          </div>

          {/* Right Column: Bank Transfer Details */}
          <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-bold text-white">
                  Direct Bank Transfer
                </h3>
                <p className="text-xs font-poppins text-slate-400">
                  Official Foundation Account
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 font-poppins">
              <div>
                <span className="text-[10px] font-montserrat font-bold text-slate-500 uppercase tracking-wider block">
                  ACCOUNT NAME
                </span>
                <span className="font-montserrat font-bold text-sm text-white">
                  NANA HALIMA EMPOWERMENT INITIATIVE
                </span>
              </div>

              <div>
                <span className="text-[10px] font-montserrat font-bold text-slate-500 uppercase tracking-wider block">
                  BANK NAME
                </span>
                <span className="font-montserrat font-bold text-sm text-[#FFD700]">
                  [Insert Bank]
                </span>
              </div>

              <div>
                <span className="text-[10px] font-montserrat font-bold text-slate-500 uppercase tracking-wider block">
                  ACCOUNT NUMBER
                </span>
                <span className="font-mono font-bold text-lg text-emerald-400 tracking-widest">
                  [Insert No]
                </span>
              </div>

              <button
                onClick={handleCopyBank}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-poppins font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                {copiedBank ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Bank Details Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Account Details</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-poppins space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Audited NGO Transparency</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Donations directly support youth athletics, teacher digital programs, women starter toolkits, and medical emergency relief in Jigawa State.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Online Payment Modal */}
      {paymentModalOpen && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn text-slate-900"
          onClick={() => setPaymentModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-1">
              <span className="text-xs font-montserrat font-bold text-[#008751] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {paymentGateway.toUpperCase()} GATEWAY INTEGRATION
              </span>
              <h3 className="text-2xl font-montserrat font-extrabold text-slate-900 mt-2">
                Donate ₦{getEffectiveAmount().toLocaleString()}
              </h3>
              <p className="font-poppins text-xs text-slate-600">
                Nana Halima Empowerment Initiative
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                  Donor Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hajiya Fatima"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-poppins"
                />
              </div>

              <div>
                <label className="block text-xs font-montserrat font-bold text-slate-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="donor@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-poppins"
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] font-poppins text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <span>
                  Online payment credentials for {paymentGateway.toUpperCase()} will be activated upon merchant key configuration.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => {
                  alert(`Thank you ${donorName || 'Donor'}! Simulated donation of ₦${getEffectiveAmount().toLocaleString()} via ${paymentGateway.toUpperCase()} recorded.`);
                  setPaymentModalOpen(false);
                }}
                className="flex-1 py-3 rounded-xl bg-[#008751] text-white font-montserrat font-bold text-xs hover:bg-[#00683e] transition-all shadow-md"
              >
                PAY ₦{getEffectiveAmount().toLocaleString()} NOW
              </button>
              <button
                onClick={() => setPaymentModalOpen(false)}
                className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-poppins font-semibold text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
