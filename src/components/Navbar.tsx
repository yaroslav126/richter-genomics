import React from 'react';

interface NavbarProps {
  activeTab: 'catalog' | 'info';
  setActiveTab: (tab: 'catalog' | 'info') => void;
  onOpenTelegram: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenTelegram }) => {
  const tabs: { id: 'catalog' | 'info'; label: string; mobileLabel: string }[] = [
    { id: 'catalog', label: 'Catalogue', mobileLabel: 'Catalogue' },
    { id: 'info', label: 'Product Quality & Info', mobileLabel: 'Quality & Info' },
  ];

  return (
    <header className="bg-white/95 border-b border-gray-200/90 sticky top-0 z-30 backdrop-blur-xs">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand placed close to the left border */}
        <div 
          onClick={() => setActiveTab('catalog')} 
          className="cursor-pointer select-none shrink-0 text-left"
        >
          <div className="font-serif font-bold text-lg sm:text-xl text-navy-900 leading-tight">
            Richter Biosystems AG
          </div>
          <div className="text-[10px] sm:text-[11px] text-gray-500 leading-tight">
            Precision Genetics Instrumentation
          </div>
        </div>

        {/* Center / Desktop Tabs: Only Catalogue and Info */}
        <nav className="hidden md:flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 text-sm rounded font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-navy-900 text-white'
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
      <div className="md:hidden border-t border-gray-100 bg-gray-50/90 px-3 py-1.5">
        <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
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
