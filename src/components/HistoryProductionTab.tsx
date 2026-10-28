import React from 'react';

interface HistoryProductionTabProps {
  onOpenTelegram: (topic?: string) => void;
}

export const HistoryProductionTab: React.FC<HistoryProductionTabProps> = ({
  onOpenTelegram,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy-900 leading-tight">
          Product Quality &amp; Engineering Standards
        </h1>
        <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
          Comprehensive manufacturing discipline, cleanroom tolerances, and metrological quality assurance behind every Richter Biosystems instrument.
        </p>
      </div>

      {/* Featured Cleanroom Facility Banner */}
      <div className="rounded-lg overflow-hidden border-2 border-gray-300 shadow-xs bg-white">
        <div className="h-60 sm:h-80 bg-gray-100 overflow-hidden relative">
          <img
            src="/images/factory-cleanroom.jpg"
            alt="Richter ISO Class 5 cleanroom manufacturing facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded backdrop-blur-xs">
            ISO Class 5 Certified Cleanroom Facility
          </div>
        </div>
        <div className="p-4 bg-gray-50 border-t-2 border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed">
          Inside Richter's primary optical alignment bay. Precision multi-laser engines, sCMOS arrays, and 5-axis CNC titanium fluidics are assembled under positive-pressure HEPA H14 laminar airflow, ensuring zero particulate contamination before factory seal.
        </div>
      </div>

      {/* Product Quality Architecture */}
      <section className="border-t-2 border-gray-200 pt-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Quality Assurance</span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 mt-1">
            Manufacturing Discipline &amp; Metrological Standards
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            How Richter instruments achieve sub-nanometer tolerances, low background noise, and multi-year mechanical resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3 shadow-2xs">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              01
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              ISO Class 5 Cleanrooms
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every instrument chassis is assembled inside positive-pressure ISO 14644-1 Class 5 cleanrooms equipped with continuous HEPA H14 laminar airflow. This eliminates airborne particulates down to 0.1 µm, safeguarding optical lenses, sCMOS sensor covers, and microfluidic channels from contamination.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3 shadow-2xs">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              02
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              Grade 5 Titanium Monoliths
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Instead of glued plastic fluidics or joined tubing prone to dead-volume stagnation and chemical degradation, all Richter fluidic blocks are 5-axis CNC-machined from single billets of Grade 5 titanium. Each manifold undergoes helium mass-spectrometer leak checks below 10⁻⁹ mbar·L/s.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3 shadow-2xs">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              03
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              168-Hour Continuous Stress Run
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Before any machine is cleared for delivery, it completes an uninterrupted 7-day automated stress run replicating over 50,000 valve actuations, continuous optical laser pulses, and thermal cycles. Only systems maintaining zero deviation receive our lead engineer's certificate.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3 shadow-2xs">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              04
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              Sub-Nanometer Optical Alignment
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Optical carriages utilize magnetic levitation linear motors and dual HeNe laser interferometry encoders. Scanning stages achieve 0.2 nm positional feedback resolution, ensuring diffraction-limited photon capture across multi-gigabase sequencing runs.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3 shadow-2xs">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              05
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              Thermal Stability (±0.05°C)
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Reaction chambers and flow-cell beds incorporate multi-zone Peltier elements coupled with recirculating liquid heat exchangers. Temperature uniformity across the entire active area is verified to within ±0.05°C, preventing enzymatic kinetic bias.
            </p>
          </div>

          {/* Card 6 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3 shadow-2xs">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              06
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              ISO 13485 Quality System
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our quality management system is fully certified under ISO 13485:2016 for medical and in-vitro diagnostic devices. Every subcomponent carries full raw-material lot traceability, dimensional inspection logs, and certificate of conformance.
            </p>
          </div>

        </div>
      </section>

      {/* Quality & Warranty Guarantee */}
      <section className="border-t-2 border-gray-200 pt-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Reliability Commitment</span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 mt-1">
            The Richter Quality Guarantee
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Guaranteed peace of mind for institutional procurement, core facilities, and research directors.
          </p>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">3-Year All-Inclusive Comprehensive Warranty</strong>
              <p className="text-gray-600 text-xs leading-relaxed">
                Covers every solid-state laser diode, sCMOS sensor, magnetic levitation gantry, Peltier thermal block, and titanium fluidic valve. No hidden exclusions.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">48-Hour Module Dispatch</strong>
              <p className="text-gray-600 text-xs leading-relaxed">
                Pre-calibrated replacement modules and critical spares are dispatched worldwide within 48 hours directly from our certified reserve stockpiles.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">Direct Systems Engineering Support</strong>
              <p className="text-gray-600 text-xs leading-relaxed">
                Zero call-center bureaucracy. You communicate directly with the optical, mechanical, and software engineers who calibrated your specific machine serial number.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">10-Year Guaranteed Parts Availability</strong>
              <p className="text-gray-600 text-xs leading-relaxed">
                We guarantee long-term backward compatibility, spare parts availability, and reagent support for at least 10 years following initial platform deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Contact Strip */}
      <section className="bg-white border-2 border-teal-600 rounded-lg p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <h3 className="font-serif font-bold text-base text-navy-900">
            Direct Technical Inquiry &amp; Instrumentation Procurement
          </h3>
          <p className="text-xs text-gray-600 mt-1 max-w-xl leading-relaxed">
            All work requests, instrument specifications, and quotations are routed exclusively via our verified Telegram engineering bot @Slava_Dev_bot.
          </p>
          <div className="mt-2 text-xs text-teal-800 font-medium flex flex-wrap items-center gap-2">
            <span>Sole Contact: <a href="https://t.me/Slava_Dev_bot" target="_blank" rel="noopener noreferrer" className="underline font-bold">@Slava_Dev_bot</a></span>
            <span>·</span>
            <span>Response in 24 hours</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto shrink-0">
          <button
            onClick={() => onOpenTelegram('Quality & Technical Inquiry')}
            className="px-4 py-2.5 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors text-center shadow-2xs"
          >
            Buy through Telegram
          </button>
        </div>
      </section>

    </div>
  );
};
