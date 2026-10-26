import React from 'react';

interface HistoryProductionTabProps {
  onOpenTelegram: (topic?: string) => void;
  onNavigateToContact: () => void;
}

export const HistoryProductionTab: React.FC<HistoryProductionTabProps> = ({
  onOpenTelegram,
  onNavigateToContact,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy-900 leading-tight">
          Heritage, Engineering Philosophy &amp; In-House Production
        </h1>
        <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
          The history and manufacturing architecture of Richter Biosystems AG — combining Jena's legendary optical precision with Basel's microfluidic and molecular biochemistry leadership.
        </p>
      </div>

      {/* Featured Cleanroom Facility Banner */}
      <div className="rounded-lg overflow-hidden border-2 border-gray-300 shadow-xs">
        <div className="h-60 sm:h-80 bg-gray-100 overflow-hidden relative">
          <img
            src="/images/factory-cleanroom.jpg"
            alt="Richter cleanroom manufacturing line in Basel and Jena"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded backdrop-blur-xs">
            ISO Class 5 Certified Cleanroom · Basel &amp; Jena
          </div>
        </div>
        <div className="p-4 bg-gray-50 border-t-2 border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed">
          Inside Richter's primary optical alignment bay. Precision multi-laser engines, sCMOS arrays, and 5-axis CNC titanium fluidics are assembled under positive-pressure HEPA H14 laminar airflow, ensuring zero particulate contamination before factory seal.
        </div>
      </div>

      {/* Chapter 1: The Founding Vision & History Timeline */}
      <section className="border-t-2 border-gray-200 pt-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Chapter I</span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 mt-1">
            Forty Years of European Precision (1984 – Present)
          </h2>
        </div>

        <div className="prose max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            Richter Biosystems AG was established in 1984 in <strong>Jena, Germany</strong>—the historic cradle of European scientific optics, where Ernst Abbe and Carl Zeiss revolutionized diffraction physics a century earlier. Founded by optical physicist Dr. Heinrich Richter and a team of senior laser mechanics specialists from the Jena Physics Research Institute, the company began as an elite prototyping workshop designing diffraction-limited laser collimators, confocal scanning mirrors, and sub-micron positioning stages for university physics departments.
          </p>

          <p>
            As the molecular biology revolution accelerated in the early 2000s, traditional Sanger sequencing and early capillary electrophoresis systems began reaching their fundamental physical limits. In 2008, Richter expanded operations to <strong>Basel, Switzerland</strong>, opening Fab 2 directly within the Rhine Valley biopharmaceutical cluster. The goal was singular: synthesize German optomechanical rigidity with Swiss microfluidic precision to build instruments capable of resolving millions of single-molecule fluorescence events simultaneously.
          </p>

          <p>
            By 2016, Richter made a pivotal strategic decision that disrupted conventional life science distribution: <strong>the complete abolition of regional resellers and third-party distributors</strong>. Observing that scientific distributors routinely levied 40% to 60% markups while providing inadequate post-sale technical support, Richter transitioned to a 100% direct-from-factory model. Today, whether a machine is installed in a university core facility in Zurich, a clinical diagnostics lab in Berlin, or a genome center in Tokyo, the laboratory works directly with the systems engineers who designed and assembled the hardware.
          </p>
        </div>

        {/* Milestone Cards with Visual Lines */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="font-serif font-bold text-lg text-teal-700">1984</div>
            <div className="font-semibold text-navy-900 text-xs mt-1">Founded in Jena</div>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              Precision optical mechanics, laser collimation benches, and confocal scanning stages.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="font-serif font-bold text-lg text-teal-700">2008</div>
            <div className="font-semibold text-navy-900 text-xs mt-1">Basel Microfluidics Core</div>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              Fab 2 opened in Switzerland, developing titanium manifolds and fluorophore imaging chips.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="font-serif font-bold text-lg text-teal-700">2016</div>
            <div className="font-semibold text-navy-900 text-xs mt-1">Direct-From-Factory</div>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              Eliminated 3rd-party distributors. Direct factory pricing, direct Tier-3 engineer support.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded border-2 border-gray-200">
            <div className="font-serif font-bold text-lg text-teal-700">Today</div>
            <div className="font-semibold text-navy-900 text-xs mt-1">Global Genomics Fleet</div>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              High-throughput NGS sequencers, oligo synthesizers, and single-cell robotics worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: In-House Manufacturing Standards */}
      <section className="border-t-2 border-gray-200 pt-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Chapter II</span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 mt-1">
            Manufacturing Discipline &amp; Quality Architecture
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            How Richter instruments achieve sub-nanometer tolerances and multi-year mechanical resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              01
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              ISO Class 5 Cleanrooms
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every instrument chassis is assembled inside positive-pressure ISO 14644-1 Class 5 cleanrooms equipped with continuous HEPA H14 laminar airflow. This eliminates airborne particulates down to 0.1 µm, safeguarding optical lenses, sCMOS sensor covers, and micro-channels from contamination.
            </p>
          </div>

          {/* Column 2 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              02
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              Grade 5 Titanium Monoliths
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Instead of glued plastic fluidics or joined tubing prone to dead-volume stagnation, all Richter fluidic blocks are 5-axis CNC-machined from single billets of medical-grade Grade 5 titanium. Each manifold undergoes factory helium mass-spectrometer leak checks below 10⁻⁹ mbar·L/s.
            </p>
          </div>

          {/* Column 3 */}
          <div className="border-2 border-gray-200 rounded-lg p-5 bg-white space-y-3">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-teal-700 text-sm">
              03
            </div>
            <h3 className="font-serif font-bold text-base text-navy-900">
              168-Hour Continuous Stress Run
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Before any machine is cleared for crating, it completes an uninterrupted 7-day automated stress run replicating over 50,000 valve actuations, continuous optical laser pulses, and thermal cycles. Only systems maintaining zero deviation receive our lead engineer's certificate.
            </p>
          </div>

        </div>
      </section>

      {/* Chapter 3: The Factory Direct Guarantee */}
      <section className="border-t-2 border-gray-200 pt-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Chapter III</span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 mt-1">
            The Richter Direct Guarantee
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Guaranteed peace of mind for institutional procurement and lab directors.
          </p>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">3-Year All-Inclusive Factory Warranty</strong>
              <p className="text-gray-600 text-xs leading-relaxed">
                Covers every solid-state laser diode, sCMOS sensor, magnetic levitation gantry, Peltier thermal block, and titanium fluidic valve. No hidden service exclusions.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">48-Hour Air Freight Module Dispatch</strong>
              <p className="text-gray-600 text-xs leading-relaxed">
                Pre-calibrated replacement modules and critical spares are dispatched worldwide within 48 hours directly from our Basel and Jena reserve stockpiles.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-navy-900 block font-serif font-bold text-sm">Direct Tier-3 Engineering Support</strong>
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
            Procure Directly from the European Production Line
          </h3>
          <p className="text-xs text-gray-600 mt-1 max-w-xl leading-relaxed">
            All work requests, instrument specifications, and factory quotations are routed exclusively via our verified Telegram engineering bot @Slava_Dev_bot.
          </p>
          <div className="mt-2 text-xs text-teal-800 font-medium flex flex-wrap items-center gap-2">
            <span>Sole Contact: <a href="https://t.me/Slava_Dev_bot" target="_blank" rel="noopener noreferrer" className="underline font-bold">@Slava_Dev_bot</a></span>
            <span>·</span>
            <span>Response in 24 hours</span>
            <span>·</span>
            <span className="bg-teal-50 border border-teal-200 px-2 py-0.5 rounded text-[11px]">🛡️ Anti-AI Protected</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto shrink-0">
          <button
            onClick={() => onOpenTelegram('Production & Factory Tour Inquiry')}
            className="px-4 py-2.5 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors text-center shadow-2xs"
          >
            Buy through Telegram
          </button>
          <button
            onClick={onNavigateToContact}
            className="px-4 py-2.5 text-xs font-medium text-navy-900 hover:bg-gray-100 rounded border border-gray-300 transition-colors text-center"
          >
            Procurement &amp; Contact Desk
          </button>
        </div>
      </section>

    </div>
  );
};
