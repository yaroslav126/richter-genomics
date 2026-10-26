import React, { useState } from 'react';
import { CATALOG_CATEGORIES, Instrument } from '../data/instruments';

interface MainCatalogTabProps {
  onSelectInstrument: (instrument: Instrument) => void;
  onInquire: (instrument: Instrument) => void;
  onOpenTelegram: (instrumentName?: string) => void;
  onNavigateToHistory: () => void;
}

export const MainCatalogTab: React.FC<MainCatalogTabProps> = ({
  onSelectInstrument,
  onOpenTelegram,
}) => {
  // REQUIREMENT: Initially close all categories!
  // Only opens when the client explicitly clicks to open a specific one.
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // REQUIREMENT: Machine photos, specs, etc. are initially folded off!
  // Only opens when the user presses on the machine's name.
  const [expandedInstruments, setExpandedInstruments] = useState<Set<string>>(new Set());

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleInstrument = (item: Instrument) => {
    // If instrument is unavailable, do NOT allow opening!
    if (item.isAvailable === false) {
      return;
    }
    setExpandedInstruments(prev => {
      const next = new Set(prev);
      if (next.has(item.id)) {
        next.delete(item.id);
      } else {
        next.add(item.id);
      }
      return next;
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Page header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-bold rounded uppercase tracking-wider">
            European Factory Direct Catalog
          </span>
          <span className="px-2.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 text-[10px] font-bold rounded uppercase tracking-wider">
            Basel (CH) &amp; Jena (DE)
          </span>
        </div>

        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy-900 leading-tight">
          Genetics Instrument Catalogue
        </h1>
        <p className="text-sm text-gray-500 mt-1.5 max-w-2xl leading-relaxed">
          Select a category below to explore available manufacturing positions. Each machine's photography, full technical specifications, and direct procurement channels can be expanded by pressing the instrument's name.
        </p>
      </div>

      {/* Catalogue categories accordion — ALL INITIALLY CLOSED */}
      <div className="space-y-6">
        {CATALOG_CATEGORIES.map((category) => {
          const isCategoryExpanded = expandedCategories.has(category.id);
          const itemCount = category.instruments.length;

          return (
            <section 
              key={category.id} 
              className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-2xs transition-all"
            >
              {/* Category Header Row — Click to open/close */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors focus:outline-none ${
                  isCategoryExpanded ? 'bg-navy-900 text-white' : 'bg-gray-50 hover:bg-gray-100 text-navy-900'
                }`}
                aria-expanded={isCategoryExpanded}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full shrink-0 ${isCategoryExpanded ? 'bg-teal-400 ring-2 ring-teal-200/40' : 'bg-teal-600'}`}></span>
                    <h2 className="font-serif font-bold text-lg sm:text-xl tracking-tight">
                      {category.label}
                    </h2>
                    <span className={`text-xs px-2 py-0.5 rounded font-semibold ${
                      isCategoryExpanded ? 'bg-navy-800 text-teal-300' : 'bg-white border border-gray-300 text-gray-600'
                    }`}>
                      {itemCount} {itemCount === 1 ? 'Model' : 'Models'}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm mt-1.5 line-clamp-1 ${
                    isCategoryExpanded ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded transition-colors hidden sm:inline-block ${
                    isCategoryExpanded 
                      ? 'bg-teal-600 text-white' 
                      : 'bg-white text-teal-800 border border-teal-200 hover:bg-teal-50'
                  }`}>
                    {isCategoryExpanded ? 'Close Category' : 'Click to Open Category'}
                  </span>
                  <span 
                    className={`text-2xl font-bold transition-transform duration-200 ${
                      isCategoryExpanded ? 'rotate-180 text-teal-300' : 'text-teal-600'
                    }`}
                  >
                    ▾
                  </span>
                </div>
              </button>

              {/* Machines inside the category — rendered only when category is open */}
              {isCategoryExpanded && (
                <div className="p-4 sm:p-5 bg-gray-50/50 border-t-2 border-gray-300 space-y-4 animate-fadeIn">
                  
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Available Instruments in this Category:</span>
                    <span>Press name to inspect equipment photo &amp; specs</span>
                  </div>

                  {category.instruments.map((item) => {
                    const isAvailable = item.isAvailable !== false;
                    const isInstrumentOpen = isAvailable && expandedInstruments.has(item.id);

                    return (
                      <div 
                        key={item.id} 
                        className={`border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                          isAvailable 
                            ? 'border-gray-300 bg-white shadow-2xs' 
                            : 'border-gray-300 bg-gray-50/80'
                        }`}
                      >
                        {/* Machine Name Bar — Visually separated by distinct lines */}
                        <div
                          onClick={() => toggleInstrument(item)}
                          role="button"
                          tabIndex={isAvailable ? 0 : -1}
                          aria-disabled={!isAvailable}
                          title={isAvailable ? undefined : 'This instrument is unavailable and cannot be opened.'}
                          onKeyDown={(e) => {
                            if (isAvailable && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              toggleInstrument(item);
                            }
                          }}
                          className={`w-full text-left px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 select-none transition-colors ${
                            !isAvailable
                              ? 'cursor-not-allowed bg-gray-100/90 text-gray-500 border-b-2 border-gray-200'
                              : isInstrumentOpen 
                                ? 'cursor-pointer bg-navy-800 text-white' 
                                : 'cursor-pointer bg-white hover:bg-gray-50 text-navy-900 border-b-2 border-gray-200'
                          }`}
                          aria-expanded={isInstrumentOpen}
                        >
                          {/* Left: Indicator, Machine Name, Model code, Facility */}
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span 
                              className={`w-2 h-2 rounded-full transition-colors ${
                                !isAvailable
                                  ? 'bg-red-500 ring-2 ring-red-200'
                                  : isInstrumentOpen 
                                    ? 'bg-teal-400' 
                                    : 'bg-teal-600'
                              }`}
                            ></span>
                            
                            {/* Machine Name — Pressing here toggles the photo & specs view (only if available) */}
                            <span className={`font-serif font-bold text-base sm:text-lg tracking-tight ${
                              !isAvailable
                                ? 'text-gray-500 line-through decoration-red-400/60'
                                : 'hover:underline'
                            }`}>
                              {item.name}
                            </span>

                            {/* Unavailable Badge */}
                            {!isAvailable && (
                              <span className="px-2 py-0.5 bg-red-100 border border-red-300 text-red-800 text-[10px] font-bold rounded uppercase tracking-wider">
                                {item.statusLabel || 'Unavailable'}
                              </span>
                            )}

                            {/* Separator line */}
                            <span className={`hidden sm:inline-block ${
                              !isAvailable ? 'text-gray-300' : isInstrumentOpen ? 'text-navy-600' : 'text-gray-300'
                            }`}>|</span>

                            <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                              !isAvailable
                                ? 'bg-gray-200 text-gray-500'
                                : isInstrumentOpen 
                                  ? 'bg-navy-900 text-gray-300' 
                                  : 'bg-gray-100 border border-gray-300 text-gray-700'
                            }`}>
                              {item.modelCode}
                            </span>

                            <span className={`text-[11px] hidden md:inline-block ${
                              !isAvailable ? 'text-gray-400' : isInstrumentOpen ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              · {item.fabricationSite.split('—')[0]}
                            </span>
                          </div>

                          {/* Right: Toggle Prompt & Lock / Arrow */}
                          <div className="flex items-center gap-3 shrink-0">
                            {!isAvailable ? (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-200 text-gray-600 border border-gray-300 flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <span>Unavailable to open</span>
                              </span>
                            ) : (
                              <>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded transition-colors hidden sm:inline-block ${
                                  isInstrumentOpen 
                                    ? 'bg-teal-600 text-white' 
                                    : 'bg-gray-50 text-teal-800 border border-teal-200 hover:bg-teal-100'
                                }`}>
                                  {isInstrumentOpen ? 'Fold Details' : 'Press Name to View Photo & Specs'}
                                </span>
                                <span 
                                  className={`text-xl font-bold transition-transform duration-200 ${
                                    isInstrumentOpen ? 'rotate-180 text-teal-300' : 'text-teal-600'
                                  }`}
                                >
                                  ▾
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Initially folded off: Photo, specifications, description & buy buttons */}
                        {isAvailable && isInstrumentOpen && (
                          <div className="border-t-2 border-gray-300 animate-fadeIn">
                            
                            {/* Main Window Grid: Photo left, Specs right */}
                            <div className="flex flex-col md:flex-row">
                              
                              {/* Real Machine Photo with clean border separator */}
                              <div className="md:w-72 lg:w-80 h-60 md:h-auto bg-gray-100 shrink-0 overflow-hidden md:border-r-2 border-b md:border-b-0 border-gray-200 relative group">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover object-center"
                                  loading="lazy"
                                />
                                <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                                  European Factory Calibration
                                </div>
                              </div>

                              {/* Content Pane */}
                              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                                <div>
                                  
                                  {/* Title & Tagline */}
                                  <div className="border-b border-gray-200 pb-3">
                                    <h3 className="font-serif font-bold text-lg sm:text-xl text-navy-900 leading-snug">
                                      {item.name}
                                    </h3>
                                    <p className="text-xs text-teal-700 font-semibold mt-0.5">
                                      {item.tagline}
                                    </p>
                                  </div>

                                  {/* Key Specifications Table with dividing lines */}
                                  <div className="mt-3">
                                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                      Core Specifications
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs bg-gray-50/80 p-2.5 rounded border border-gray-200">
                                      {item.keySpecs.map((spec, i) => (
                                        <div key={i} className="flex justify-between items-start gap-2 py-0.5 border-b border-gray-200/80 last:border-0 sm:last:border-b">
                                          <span className="text-gray-500 shrink-0">{spec.label}:</span>
                                          <span className="font-semibold text-navy-900 text-right">{spec.value}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Detailed System Architecture Description */}
                                  <div className="mt-4 border-t-2 border-gray-200 pt-3">
                                    <div className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                                      Detailed System Description
                                    </div>
                                    <div className="p-3.5 bg-gray-50 rounded border border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2.5">
                                      {item.overview.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="leading-relaxed">
                                          {paragraph}
                                        </p>
                                      ))}
                                    </div>
                                  </div>

                                </div>

                                {/* Action Row separated by top border line */}
                                <div className="mt-5 pt-3.5 border-t-2 border-gray-200 flex flex-wrap items-center justify-between gap-2.5">
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => onOpenTelegram(item.name)}
                                      className="px-4 py-2 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors shadow-2xs"
                                    >
                                      Buy through Telegram
                                    </button>
                                    <button
                                      onClick={() => onSelectInstrument(item)}
                                      className="px-3.5 py-2 text-xs font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-100 rounded border border-gray-300 transition-colors"
                                    >
                                      Full specifications dossier
                                    </button>
                                  </div>
                                  
                                  <div className="text-[11px] text-gray-500">
                                    Assembly: <span className="font-medium text-navy-900">{item.fabricationSite}</span> · Lead time: <span className="font-medium text-navy-900">{item.leadTime}</span>
                                  </div>
                                </div>

                              </div>

                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};
