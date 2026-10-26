import React from 'react';

interface NavbarProps {
  activeTab: 'catalog' | 'history' | 'contact';
  setActiveTab: (tab: 'catalog' | 'history' | 'contact') => void;
  onOpenTelegram: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenTelegram }) => {
  const tabs: { id: 'catalog' | 'history' | 'contact'; label: string; mobileLabel: string }[] = [
    { id: 'catalog', label: 'Catalogue', mobileLabel: 'Catalogue' },
    { id: 'history', label: 'Production & Guarantee', mobileLabel: 'Production' },
    { id: 'contact', label: 'Contact', mobileLabel: 'Contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand with single surname */}
        <div 
          onClick={() => setActiveTab('catalog')} 
          className="cursor-pointer select-none shrink-0"
        >
          <div className="font-serif font-bold text-lg sm:text-xl text-navy-900 leading-tight">
            Richter Biosystems
          </div>
          <div className="text-[10px] sm:text-[11px] text-gray-500 leading-tight">
            AG · Factory Direct · Basel &amp; Jena
          </div>
        </div>

        {/* Desktop Tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-sm rounded transition-colors ${
                activeTab === tab.id
                  ? 'bg-navy-900 text-white font-medium'
                  : 'text-gray-600 hover:text-navy-900 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Buy through Telegram Action */}
        <button
          onClick={onOpenTelegram}
          className="px-3.5 py-1.5 text-xs font-semibold rounded bg-teal-600 hover:bg-teal-700 text-white transition-colors shrink-0 shadow-2xs"
        >
          Buy through Telegram
        </button>
      </div>

      {/* Mobile Tab Bar */}
      <div className="md:hidden border-t border-gray-100 bg-gray-50 px-2 py-1.5">
        <div className="grid grid-cols-3 gap-1 max-w-md mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 text-xs text-center rounded transition-colors font-medium ${
                activeTab === tab.id
                  ? 'bg-navy-900 text-white'
                  : 'text-gray-600 hover:bg-gray-200/60'
              }`}
            >
              {tab.mobileLabel}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
