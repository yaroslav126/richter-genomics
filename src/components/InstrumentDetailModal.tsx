import React from 'react';
import { Instrument } from '../data/instruments';

interface InstrumentDetailModalProps {
  instrument: Instrument | null;
  onClose: () => void;
  onInquire: (instrument: Instrument) => void;
  onOpenTelegram: (instrumentName?: string) => void;
}

export const InstrumentDetailModal: React.FC<InstrumentDetailModalProps> = ({
  instrument,
  onClose,
  onInquire,
  onOpenTelegram,
}) => {
  if (!instrument || instrument.isAvailable === false) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="w-full max-h-[92vh] sm:max-h-[85vh] sm:max-w-3xl bg-white rounded-t-2xl sm:rounded-lg overflow-hidden flex flex-col shadow-2xl border border-gray-300 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-200 bg-gray-50 shrink-0">
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-navy-900 leading-tight">
              {instrument.name}
            </h3>
            <span className="text-xs text-gray-500">
              {instrument.modelCode} · {instrument.fabricationSite}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5">
          
          {/* Photo */}
          <div className="h-48 sm:h-60 bg-gray-100 rounded border border-gray-200 overflow-hidden">
            <img
              src={instrument.image}
              alt={instrument.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Detailed Multi-Paragraph Description */}
          <div className="border border-gray-200 rounded p-4 bg-gray-50/50">
            <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">
              Engineering Architecture &amp; System Overview
            </h4>
            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2.5">
              {instrument.overview.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Detailed specs */}
          <div>
            <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
              Full Technical Specifications
            </h4>
            <div className="border border-gray-200 rounded overflow-hidden divide-y divide-gray-200 text-xs">
              {instrument.detailedSpecs.map((cat, i) => (
                <div key={i}>
                  <div className="bg-gray-100 px-3 py-1.5 font-semibold text-navy-900 border-l-2 border-teal-600">
                    {cat.category}
                  </div>
                  <div className="divide-y divide-gray-100">
                    {cat.specs.map((s, idx) => (
                      <div key={idx} className="flex flex-col sm:grid sm:grid-cols-3 px-3 py-2 gap-0.5 sm:gap-2">
                        <span className="text-gray-500">{s.label}</span>
                        <span className="text-gray-900 font-medium sm:col-span-2">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consumables & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
              <h4 className="font-semibold text-navy-900 mb-1.5">Compatible Consumables</h4>
              <ul className="space-y-1 text-gray-600">
                {instrument.compatibleConsumables.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-3 bg-gray-50/50">
              <h4 className="font-semibold text-navy-900 mb-1.5">Quality Certifications</h4>
              <ul className="space-y-1 text-gray-600">
                {instrument.certifications.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lead time notice */}
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs text-gray-600 flex justify-between items-center">
            <span>Production Lead Time: <strong className="text-navy-900">{instrument.leadTime}</strong></span>
            <span>Site: <strong className="text-navy-900">{instrument.fabricationSite}</strong></span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 sm:px-5 py-3 border-t border-gray-200 bg-gray-50 shrink-0 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-2 px-3 text-xs text-gray-600 hover:bg-gray-200 rounded border border-gray-300 font-medium text-center"
          >
            Close
          </button>
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
            <button
              onClick={() => onInquire(instrument)}
              className="py-2 px-3 text-xs bg-navy-900 hover:bg-navy-800 text-white rounded font-medium text-center"
            >
              Telegram Inquiry
            </button>
            <button
              onClick={() => onOpenTelegram(instrument.name)}
              className="py-2 px-3 text-xs bg-teal-600 hover:bg-teal-700 text-white rounded font-semibold text-center shadow-2xs"
            >
              Buy through Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
