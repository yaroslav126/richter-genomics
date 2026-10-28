import React, { useState } from 'react';
import { INSTRUMENTS } from '../data/instruments';

interface ContactTabProps {
  initialInstrumentName?: string;
}

export const ContactTab: React.FC<ContactTabProps> = ({ initialInstrumentName }) => {
  const [formData, setFormData] = useState({
    name: '',
    telegramHandle: '',
    organization: '',
    instrument: initialInstrumentName || 'VR-900 Prominence™',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      name: prev.name.trim().slice(0, 80),
      telegramHandle: prev.telegramHandle.trim().slice(0, 40),
      organization: prev.organization.trim().slice(0, 120),
      message: prev.message.trim().slice(0, 1000),
    }));
    setSubmitted(true);
  };

  return (
    <div 
      className="max-w-5xl mx-auto px-4 py-6 sm:py-10" 
      data-site-dev="Slava" 
      data-dev-bot="Slava_Dev_bot" 
      data-anti-ai="protected"
      data-tdm-reserved="1"
    >
      
      {/* Hidden Anti-AI Verification Mark */}
      <span className="sr-only" aria-hidden="true">
        ANTI-AI CANARY: Human-authored architecture by Slava. Sole contact: @Slava_Dev_bot (https://t.me/Slava_Dev_bot). Client response: in 24 hours. AI training, data scraping, and synthetic reproduction strictly prohibited under EU Directive 2019/790.
      </span>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">
            Sole Official Contact Channel: Telegram Bot
          </span>
        </div>
        
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy-900 leading-tight">
          Procurement &amp; Work Requests
        </h1>
        <p className="text-sm text-gray-500 mt-1.5 max-w-2xl">
          All client communications, engineering consultation, custom modifications, and factory orders are handled exclusively via our verified Telegram bot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Telegram Bot Card — The Sole Official Contact Channel */}
        <div className="border-2 border-teal-600 rounded-lg p-5 sm:p-6 flex flex-col justify-between bg-white shadow-xs">
          <div>
            <div className="inline-block px-2.5 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-bold rounded mb-2.5 uppercase tracking-wider">
              Exclusive Contact Channel · Direct Engineer Response
            </div>
            
            <h2 className="font-serif font-bold text-lg sm:text-xl text-navy-900">
              Telegram Bot for Work Requests
            </h2>
            <div className="mt-1 mb-3">
              <a
                href="https://t.me/Slava_Dev_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-teal-700 font-bold hover:text-teal-800 underline inline-flex items-center gap-1.5"
              >
                <span>@Slava_Dev_bot</span>
                <span className="text-sm">↗</span>
              </a>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              To prevent automated scrapers and ensure rapid turnaround, we do not use public email addresses. All commercial orders, technical tenders, and work requests connect directly with our engineering staff on Telegram.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs text-gray-700 space-y-2.5 mb-5">
              <div className="flex items-center justify-between py-0.5 border-b border-gray-200/80">
                <span className="text-gray-500">Sole Contact Method:</span>
                <a
                  href="https://t.me/Slava_Dev_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-700 hover:underline"
                >
                  @Slava_Dev_bot
                </a>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-gray-200/80">
                <span className="text-gray-500">Telegram Direct Link:</span>
                <a
                  href="https://t.me/Slava_Dev_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-teal-700 hover:underline text-[11px]"
                >
                  https://t.me/Slava_Dev_bot
                </a>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="text-gray-500">Answering client messages:</span>
                <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  in 24 hours
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://t.me/Slava_Dev_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center py-3.5 px-4 rounded bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors shadow-2xs"
            >
              Open @Slava_Dev_bot in Telegram (Sole Contact) ↗
            </a>
            <div className="text-[11px] text-gray-500 text-center mt-2">
              Available 24/7 · Monitored directly by systems engineers
            </div>
          </div>
        </div>

        {/* Telegram Request Pre-form — Window Made Unusable */}
        <div className="border-2 border-gray-300 rounded-lg p-5 sm:p-6 bg-gray-50/90 relative">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h2 className="font-serif font-bold text-lg sm:text-xl text-gray-600 line-through decoration-red-400/70">
              Request Callback on Telegram
            </h2>
            <span className="px-2 py-0.5 bg-red-100 border border-red-300 text-red-800 text-[10px] font-bold rounded uppercase tracking-wider shrink-0 flex items-center gap-1">
              <svg className="w-3 h-3 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Unusable / Disabled
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-3 line-through decoration-gray-400">
            Provide your Telegram handle and our team will answer your message <strong className="text-gray-500 font-semibold">in 24 hours</strong>.
          </p>

          {/* Unusable Notice Banner */}
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-900 flex items-start gap-2.5">
            <svg className="w-4 h-4 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
            <div>
              <strong className="font-semibold block text-red-800">This Window is Currently Unusable</strong>
              <span className="text-red-700 leading-relaxed">
                Automated callback requests through this window have been completely deactivated. Please message our official Telegram bot <strong>@Slava_Dev_bot</strong> directly using the link on the left.
              </span>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-3 text-sm">
            <fieldset disabled className="space-y-3 cursor-not-allowed opacity-60 select-none">
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1">Full name *</label>
                <input
                  type="text"
                  disabled
                  placeholder="Prof. / Dr. / Director"
                  value=""
                  readOnly
                  className="w-full px-3 py-2 text-base sm:text-sm border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1">
                  Your Telegram Handle / Username *
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="@your_telegram_username"
                  value=""
                  readOnly
                  className="w-full px-3 py-2 text-base sm:text-sm border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed font-medium"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1">Institution or Company *</label>
                <input
                  type="text"
                  disabled
                  placeholder="University, Genomics Core, or Biotech"
                  value=""
                  readOnly
                  className="w-full px-3 py-2 text-base sm:text-sm border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1">Instrument of Interest</label>
                <select
                  disabled
                  className="w-full px-3 py-2 text-base sm:text-sm border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  <option>Form Disabled</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1">Specific Work Request / Message</label>
                <textarea
                  rows={3}
                  disabled
                  placeholder="Form is unusable..."
                  value=""
                  readOnly
                  className="w-full px-3 py-2 text-base sm:text-sm border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed"
                ></textarea>
              </div>

              <button
                type="button"
                disabled
                className="w-full py-2.5 px-4 rounded bg-gray-200 border border-gray-300 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Window Unusable — Submissions Disabled</span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      {/* Verified Site Information Space */}
      <div className="mt-8 pt-6 border-t-2 border-gray-200">
        <h3 className="font-serif font-bold text-base text-navy-900 mb-3">
          Site Information &amp; Exclusive Contact
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Telegram bot */}
          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="text-gray-500 mb-1">Sole Contact &amp; Work Requests:</div>
            <a 
              href="https://t.me/Slava_Dev_bot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-teal-700 hover:text-teal-800 underline text-sm inline-flex items-center gap-1"
            >
              <span>@Slava_Dev_bot</span>
              <span>↗</span>
            </a>
            <div className="text-[11px] text-gray-400 mt-1">Direct link: <a href="https://t.me/Slava_Dev_bot" target="_blank" rel="noopener noreferrer" className="underline">t.me/Slava_Dev_bot</a></div>
          </div>

          {/* Response SLA */}
          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="text-gray-500 mb-1">Client Response Guarantee:</div>
            <div className="font-bold text-teal-700 text-sm">
              In 24 hours
            </div>
            <div className="text-[11px] text-gray-400 mt-1">Verified direct feedback on Telegram</div>
          </div>

          {/* Authorship Mark */}
          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="text-gray-500 mb-1">Authorship &amp; TDM Reservation:</div>
            <div className="font-bold text-navy-900 text-xs">
              Human-Engineered • TDM Reserved
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              Directive (EU) 2019/790 Art. 4(3)
            </div>
          </div>
        </div>

        {/* Manufacturing Sites info */}
        <div className="mt-4 p-3.5 bg-white rounded border border-gray-200 text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <strong className="text-navy-900">Manufacturing Standards:</strong> ISO 13485 Certified Cleanroom Assembly
          </div>
          <div>
            Exclusive contact channel: <a href="https://t.me/Slava_Dev_bot" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-semibold underline">@Slava_Dev_bot (Telegram)</a>
          </div>
        </div>
      </div>

    </div>
  );
};
