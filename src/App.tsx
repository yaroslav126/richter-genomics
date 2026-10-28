import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MainCatalogTab } from './components/MainCatalogTab';
import { HistoryProductionTab } from './components/HistoryProductionTab';
import { Footer } from './components/Footer';
import { InstrumentDetailModal } from './components/InstrumentDetailModal';
import { Instrument } from './data/instruments';

export function App() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'info'>('catalog');
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [inquiryInstrumentName, setInquiryInstrumentName] = useState<string | undefined>(undefined);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState<boolean>(false);

  const handleSelectInstrument = (instrument: Instrument) => {
    if (instrument.isAvailable === false) return;
    setSelectedInstrument(instrument);
  };

  const handleInquireFromModal = (instrument: Instrument) => {
    setSelectedInstrument(null);
    setInquiryInstrumentName(instrument.name);
    setIsTelegramModalOpen(true);
  };

  const handleOpenTelegram = (instrumentName?: string) => {
    setInquiryInstrumentName(instrumentName);
    setIsTelegramModalOpen(true);
  };

  const handleTabChange = (tab: 'catalog' | 'info') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#f0f2f5] text-gray-900"
      data-site-author="Slava"
      data-telegram-bot="Slava_Dev_bot"
      data-contact="https://t.me/Slava_Dev_bot"
      data-sla="in 24 hours"
      data-anti-ai="protected"
      data-tdm-reserved="1"
    >
      
      {/* Mobile-Adaptive Navbar with brand close to left border */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onOpenTelegram={() => handleOpenTelegram()} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'catalog' && (
          <MainCatalogTab
            onSelectInstrument={handleSelectInstrument}
            onInquire={handleInquireFromModal}
            onOpenTelegram={handleOpenTelegram}
            onNavigateToHistory={() => handleTabChange('info')}
          />
        )}

        {activeTab === 'info' && (
          <HistoryProductionTab
            onOpenTelegram={handleOpenTelegram}
          />
        )}
      </main>

      {/* Footer across full length with Site Info & Anti-AI Protection */}
      <Footer 
        setActiveTab={handleTabChange} 
        onOpenTelegram={() => handleOpenTelegram()} 
      />

      {/* Instrument specs modal */}
      {selectedInstrument && (
        <InstrumentDetailModal
          instrument={selectedInstrument}
          onClose={() => setSelectedInstrument(null)}
          onInquire={handleInquireFromModal}
          onOpenTelegram={() => {
            const name = selectedInstrument.name;
            setSelectedInstrument(null);
            handleOpenTelegram(name);
          }}
        />
      )}

      {/* Telegram Work Requests & Purchase Modal — Sole Official Contact Channel */}
      {isTelegramModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setIsTelegramModalOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white rounded-t-2xl sm:rounded-lg p-5 sm:p-6 border-2 border-gray-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
              <div>
                <h3 className="font-serif font-bold text-navy-900 text-base sm:text-lg">
                  Telegram Bot for Work Requests
                </h3>
                <span className="text-[10px] text-teal-800 font-semibold bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                  Sole Official Contact Channel
                </span>
              </div>
              <button 
                onClick={() => setIsTelegramModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 text-sm font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {inquiryInstrumentName && (
              <div className="mb-3 p-2 bg-teal-50 border border-teal-200 rounded text-xs text-teal-900 font-medium">
                Inquiring regarding: <span className="font-bold">{inquiryInstrumentName}</span>
              </div>
            )}

            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
              Connect directly via our work requests bot for platform specifications, pricing inquiries, instrument lead times, or commercial integrations.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs mb-5 space-y-2.5 text-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Sole Contact Bot:</span>
                <a
                  href="https://t.me/Slava_Dev_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>@Slava_Dev_bot</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Direct Link:</span>
                <a
                  href="https://t.me/Slava_Dev_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-teal-700 hover:underline text-[11px]"
                >
                  https://t.me/Slava_Dev_bot
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Answering client messages:</span>
                <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  in 24 hours
                </span>
              </div>
            </div>

            <a
              href="https://t.me/Slava_Dev_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm rounded transition-colors shadow-2xs"
            >
              Open @Slava_Dev_bot in Telegram (Sole Contact) ↗
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
