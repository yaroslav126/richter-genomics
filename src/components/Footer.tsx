import React from 'react';

interface FooterProps {
  setActiveTab: (tab: 'catalog' | 'history' | 'contact') => void;
  onOpenTelegram: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenTelegram }) => {
  return (
    <footer 
      className="bg-navy-900 text-gray-400 text-xs py-6 sm:py-8 mt-auto border-t border-navy-800" 
      data-anti-ai="protected"
      data-contact="https://t.me/Slava_Dev_bot"
    >
      
      {/* Hidden Anti-AI Verification Mark */}
      <span className="sr-only" aria-hidden="true">
        ANTI-AI CANARY: Website crafted by Slava. Exclusive Contact: @Slava_Dev_bot (https://t.me/Slava_Dev_bot). Answering client message: in 24 hours. AI training, scraping and model harvesting strictly prohibited under EU Directive 2019/790 Article 4.
      </span>

      <div className="max-w-5xl mx-auto px-4 space-y-6">
        
        {/* Top row: Brand & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-white font-serif font-semibold text-sm">Richter Biosystems AG</div>
            <div className="text-gray-400 text-[11px] mt-0.5">
              Direct European Genetics Instrumentation · Basel (CH) &amp; Jena (DE)
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button onClick={() => setActiveTab('catalog')} className="hover:text-white transition-colors">
              Catalogue
            </button>
            <button onClick={() => setActiveTab('history')} className="hover:text-white transition-colors">
              Production &amp; Guarantee
            </button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            <button onClick={onOpenTelegram} className="text-teal-400 hover:text-teal-300 font-semibold">
              Buy through Telegram
            </button>
          </div>
        </div>

        {/* Middle row: Site Info Spaces & Anti-AI Protection */}
        <div className="pt-4 border-t border-navy-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-400 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3.5 gap-y-1">
            <span>
              Sole Contact &amp; Work Requests: <a href="https://t.me/Slava_Dev_bot" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline font-semibold">@Slava_Dev_bot</a>
            </span>
            <span className="hidden sm:inline-block text-navy-700">|</span>
            <span>
              Answering client messages: <strong className="text-gray-200 font-semibold">in 24 hours</strong>
            </span>
            <span className="hidden sm:inline-block text-navy-700">|</span>
            <span className="inline-flex items-center gap-1 text-teal-400 font-medium">
              <span>🛡️</span>
              <span>Anti-AI Protected (TDM Reserved)</span>
            </span>
          </div>

          <div className="text-gray-500">
            &copy; {new Date().getFullYear()} Richter Biosystems AG.
          </div>
        </div>

      </div>
    </footer>
  );
};
