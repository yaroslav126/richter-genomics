export interface InstrumentSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface Instrument {
  id: string;
  name: string;
  modelCode: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  image: string;
  fabricationSite: string;
  leadTime: string;
  overview: string;
  keySpecs: InstrumentSpec[];
  detailedSpecs: {
    category: string;
    specs: InstrumentSpec[];
  }[];
  compatibleConsumables: string[];
  certifications: string[];
  isAvailable?: boolean;
  statusLabel?: string;
}

export interface CatalogCategory {
  id: string;
  label: string;
  description: string;
  instruments: Instrument[];
}

const ALL_INSTRUMENTS: Instrument[] = [
  // ==========================================
  // CATEGORY 1: DNA SEQUENCING SYSTEMS
  // ==========================================
  {
    id: 'vr-900',
    name: 'VR-900 Prominence™',
    modelCode: 'VR-900-NGS-PRO',
    category: 'ngs',
    categoryLabel: 'DNA Sequencing',
    tagline: 'Dual-flowcell massively parallel sequencer with laser interferometry',
    image: '/images/sequencer-vr900.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '3–4 weeks',
    overview: 'The VR-900 Prominence™ represents our premier high-throughput sequencing platform, built specifically for national genome centers, clinical molecular pathology institutes, and large-scale agrarian genomics facilities. Engineered around dual independent vacuum-locked flowcell bays, the system permits asynchronous operation: a laboratory can initiate a rapid 2×50 bp clinical exome run on Flowcell A while Flowcell B processes a deep 2×300 bp whole-genome or metagenomic sequencing project without interruption.\n\nAt the core of the imaging architecture is a proprietary quad-wavelength solid-state laser module (450 nm, 532 nm, 640 nm, and 785 nm) direct-coupled to dual 65-megapixel TDI sCMOS sensors. An active laser interferometer tracks z-axis focal drift with sub-nanometer accuracy (< 15 nm), allowing continuous diffraction-limited scanning across high-density patterned flowcells at a 280 nm cluster pitch. The resulting data delivers ≥ 88% base accuracy at Q30 across all supported read configurations, with run outputs scalable from 800 Gb up to 9.6 Tb per dual-cell cycle.\n\nAll fluidic blocks are 5-axis CNC-machined from Grade 5 medical titanium in our certified cleanroom facility, eliminating micro-crevice stagnation zones and reducing dead volume to near zero. Reversible terminator chemistries and synthetic dyes are actively refrigerated on-board at 4.0°C ± 0.3°C. An integrated high-performance computing node equipped with dual AMD EPYC 9654 processors and 4× NVIDIA L40S Tensor Core GPUs executes real-time basecalling, streaming quality scores, and demultiplexing directly into FASTQ format without post-run secondary compute bottlenecks.',
    keySpecs: [
      { label: 'Output per run', value: '800 Gb – 9.6 Tb' },
      { label: 'Read length', value: '2×50 to 2×300 bp' },
      { label: 'Base accuracy', value: '≥ 88% bases ≥ Q30' },
      { label: 'Laser engine', value: '4-color solid-state (450/532/640/785 nm)' },
      { label: 'Fluidic manifold', value: 'Titanium Grade 5, zero dead-volume' },
      { label: 'Compute node', value: 'Dual AMD EPYC (192 Cores) + 4× NVIDIA L40S' },
      { label: 'Dimensions', value: '1180 × 820 × 940 mm, 245 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Optics & Detection System',
        specs: [
          { label: 'Sensor Architecture', value: 'Dual Time-Delay Integration (TDI) sCMOS arrays, 65 MP per sensor' },
          { label: 'Optical Resolution', value: 'Sub-micron 0.35 µm spatial discrimination with immersion oil lens' },
          { label: 'Autofocus Mechanism', value: 'Active laser interferometer with continuous real-time z-drift compensation (< 15 nm)' },
          { label: 'Laser Safety Class', value: 'Class 1 laser product (enclosed Class 4 internal pump sources)' }
        ]
      },
      {
        category: 'Fluidics & Reagent Delivery',
        specs: [
          { label: 'Flowcell Capacity', value: 'Dual independent vacuum-locked stage bays (independent asynchronous runs)' },
          { label: 'Chemistry System', value: '4-color fluorophore reversible terminator direct-flow conjugation' },
          { label: 'Flow Rate Precision', value: '1.2 µL/min to 8.5 µL/min with ±0.05% volumetric displacement' },
          { label: 'Reagent Chilling', value: 'Active Peltier refrigeration maintained at 4.0°C ± 0.3°C' }
        ]
      },
      {
        category: 'Compute & Physical Infrastructure',
        specs: [
          { label: 'Processing Core', value: 'Dual AMD EPYC 9654 (192 Cores) + 4× NVIDIA L40S Tensor GPUs' },
          { label: 'Storage & I/O', value: '30.72 TB NVMe PCIe 5.0 primary cache; Dual 100 GbE QSFP28 optical uplinks' },
          { label: 'Power Requirements', value: '200–240 VAC, 50/60 Hz, 16A dedicated, 1,800 VA nominal' },
          { label: 'Environmental Conditions', value: '18°C – 24°C, 30% – 60% non-condensing relative humidity' }
        ]
      }
    ],
    compatibleConsumables: [
      'Richter High-Output Reagent Kit (300/600 Cycles)',
      'Richter NanoFlow Quartz Patterned Flowcells',
      'Direct-Terminator Cleavage & Extension Mix v4.2'
    ],
    certifications: ['CE-IVD Directive 98/79/EC', 'ISO 13485:2016 Medical Devices', 'IEC 61010-1 Safety Standard', 'RoHS 3 Compliant']
  },
  {
    id: 'vr-600',
    name: 'VR-600 NovaBench™',
    modelCode: 'VR-600-NGS-CLIN',
    category: 'ngs',
    categoryLabel: 'DNA Sequencing',
    tagline: 'High-speed clinical benchtop sequencer for oncology panels and targeted exomes',
    image: '/images/sequencer-vr600.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '2–3 weeks',
    overview: 'The VR-600 NovaBench™ is an agile, benchtop next-generation sequencer engineered specifically for hospital molecular diagnostics, clinical oncology testing laboratories, and rapid viral surveillance centers. With a footprint optimized for standard lab benches, the VR-600 delivers fast-turnaround sequencing from 10 Gb to 120 Gb per run with run times as short as 6.5 hours.\n\nThe optical system integrates dual-channel solid-state laser diodes coupled to a wide-field scientific CMOS camera, eliminating complex moving optical sleds in favor of stationary telecentric imaging. This compact architecture provides exceptional cluster sharpness while dramatically lowering consumable cartridge complexity.\n\nPre-packaged, plug-and-play reagent cartridges incorporate RFID authentication and vacuum-sealed enzymatic formulations prepared in certified ISO Class 5 cleanrooms. The on-board FPGA accelerator processes raw fluorescence frames directly into aligned BAM files and variant call formats (VCF) in under 45 minutes post-run, allowing clinical oncologists to deliver somatic mutation reports within the same clinical shift.',
    keySpecs: [
      { label: 'Output per run', value: '10 Gb – 120 Gb' },
      { label: 'Read length', value: '2×75 bp, 2×150 bp, 1×300 bp' },
      { label: 'Run duration', value: '6.5 to 18 hours' },
      { label: 'Base accuracy', value: '≥ 90% bases ≥ Q30' },
      { label: 'Footprint', value: 'Benchtop: 680 × 580 × 610 mm, 82 kg' },
      { label: 'Laser engine', value: 'Dual solid-state 532 nm / 660 nm' },
    ],
    detailedSpecs: [
      {
        category: 'Optics & Sensor Engine',
        specs: [
          { label: 'Detection Sensor', value: 'High-sensitivity back-illuminated sCMOS 20.48 MP' },
          { label: 'Illumination', value: 'Dual-line direct laser diodes with diffractive beam homogenizer' },
          { label: 'Autofocus', value: 'Piezo-driven active focal tracking (< 20 nm step response)' }
        ]
      },
      {
        category: 'Clinical Fluidics & Cartridges',
        specs: [
          { label: 'Cartridge Type', value: 'Single-use pre-filled RFID tracked titanium-seam reagent cassette' },
          { label: 'Dead Volume', value: '< 12 µL total residual volume' },
          { label: 'Waste Containment', value: 'Enclosed internal 2-liter sealed biohazard receptacle' }
        ]
      },
      {
        category: 'On-Board Computing & Connectivity',
        specs: [
          { label: 'Compute Core', value: 'Integrated AMD Ryzen Threadripper PRO + Xilinx UltraScale+ FPGA' },
          { label: 'Network Interface', value: 'Dual 10 GbE RJ45 + TLS encrypted hospital LIMS connector' },
          { label: 'Power Consumption', value: '100–240 VAC, 50/60 Hz, 650 VA' }
        ]
      }
    ],
    compatibleConsumables: [
      'NovaBench Rapid Clinical Flowcells (150/300 Cycles)',
      'Richter OncoPanel Reagent Cartridge v2.1',
      'Direct-Terminator QuickMix Buffer'
    ],
    certifications: ['CE-IVD Directive 98/79/EC', 'ISO 13485:2016 Certified Plant', 'IEC 61010-2-081']
  },

  // ==========================================
  // CATEGORY 2: GENE & OLIGO SYNTHESIS
  // ==========================================
  {
    id: 'gs-400',
    name: 'GS-400 OligoSynthetix™',
    modelCode: 'GS-400-SYN-384',
    category: 'synthesis',
    categoryLabel: 'Gene & Oligo Synthesis',
    tagline: 'High-throughput 96/384-well solid-phase phosphoramidite synthesizer',
    image: '/images/synthesizer-gs400.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: 'Unavailable (Archived / Inactive)',
    isAvailable: false,
    statusLabel: 'Unavailable',
    overview: 'The GS-400 OligoSynthetix™ is an automated industrial-grade solid-phase nucleic acid synthesis platform designed for molecular core facilities, CRISPR guide RNA synthesis facilities, and synthetic biology manufacturing centers. Supporting both SBS-standard 96-well and 384-well formats, the instrument synthesizes up to 384 concurrent oligonucleotides per cycle, scaling dynamically from 5 nmol diagnostic screening libraries up to 10 µmol high-yield therapeutic primer and probe batches.\n\nEngineered with uncompromising precision, the instrument features a monolithic CNC-machined titanium block housing 48 independent monomer ports and 6 universal wash channels. Ultra-fast ceramic micro-solenoid valves achieve actuation response times under 8 milliseconds, rated for over 50 million uninterrupted switching cycles. An integrated 384-channel fiber-optic spectrophotometer measures dimethoxytrityl (DMT) cation release at 495 nm in real time during deblocking, continuously reporting per-cycle coupling efficiency (consistently verified ≥ 99.6% step yield) and pinpointing premature truncation before run termination.\n\nTo ensure synthesis fidelity for fragile chemistries, the synthesis reaction bay is maintained in a hermetically sealed argon or nitrogen atmosphere with moisture levels held strictly under 3 ppm. This protective environment makes the GS-400 exceptionally suited for complex RNA synthesis, modified 2\'-O-Methyl and 2\'-Fluoro ribonucleotides, Locked Nucleic Acids (LNA), and sulfurized phosphorothioate backbones. Tri-channel waste segregation safely isolates chlorinated organic waste from non-halogenated and aqueous wash streams for streamlined regulatory compliance.',
    keySpecs: [
      { label: 'Throughput', value: 'Up to 384 oligos per run (96/384 format)' },
      { label: 'Synthesis scale', value: '5 nmol – 10 µmol flexible range' },
      { label: 'Coupling efficiency', value: '≥ 99.6% step yield (in-line trityl)' },
      { label: 'Max oligo length', value: 'Up to 180-mer full-length synthesis' },
      { label: 'Reagent ports', value: '48 monomer + 6 wash lines' },
      { label: 'Atmosphere barrier', value: 'Sealed Argon/N₂, < 3 ppm moisture' },
      { label: 'Dimensions', value: '920 × 740 × 680 mm, 135 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Synthesis Performance & Chemistry',
        specs: [
          { label: 'Supported Chemistries', value: 'Standard DNA, RNA, 2\'-O-Methyl, 2\'-Fluoro, LNA, Phosphorothioate backbone' },
          { label: 'Trityl Monitoring', value: '384-channel real-time fiber-optic spectrophotometric array (495 nm)' },
          { label: 'Reagent Delivery Mechanism', value: 'Positive-displacement argon gas pressure (0.2–1.8 bar adjustable)' },
          { label: 'Washing Cycle Velocity', value: 'Under 12 seconds per 96-well column purge cycle' }
        ]
      },
      {
        category: 'Chassis & Environmental Protection',
        specs: [
          { label: 'Atmospheric Chamber', value: 'Hermetically sealed nitrogen/argon chamber (< 3 ppm atmospheric moisture)' },
          { label: 'Waste Segregation', value: 'Tri-channel segregated hazardous waste lines (chlorinated, non-halogenated, wash)' },
          { label: 'Exhaust Interface', value: 'Standard 75 mm flange for laboratory fume duct integration' }
        ]
      },
      {
        category: 'Facility & Electrical Demands',
        specs: [
          { label: 'Power Requirements', value: '110–240 VAC, 50/60 Hz, 850 VA' },
          { label: 'Inlet Gas Supply', value: 'Argon or Nitrogen 99.999% purity, 4.0–6.0 bar inlet' },
          { label: 'Operating Noise', value: '< 48 dBA quiet laboratory profile' }
        ]
      }
    ],
    compatibleConsumables: [
      'Richter CPG Solid Support Columns (500Å & 1000Å)',
      'Richter Ultra-Dry Anhydrous Acetonitrile Reservoir Packets',
      'High-Purity Phosphoramidite Bottle Manifolds'
    ],
    certifications: ['ISO 9001:2015 Quality Management', 'ISO 13485:2016 Certified Plant', 'CE Machine Directive 2006/42/EC']
  },
  {
    id: 'gs-200',
    name: 'GS-200 CompactSynth™',
    modelCode: 'GS-200-SYN-48',
    category: 'synthesis',
    categoryLabel: 'Gene & Oligo Synthesis',
    tagline: 'Agile 24/48-column benchtop DNA/RNA synthesizer for rapid turnaround research',
    image: '/images/synthesizer-gs200.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '1–2 weeks',
    overview: 'The GS-200 CompactSynth™ is designed for research laboratories, academic biochemistry groups, and custom primer synthesis services requiring on-demand, same-day oligonucleotide delivery. Featuring a flexible 24 to 48 column format, the GS-200 provides rapid turnarounds for PCR primers, sequencing adaptors, and fluorescent hybridization probes without waiting for external commercial suppliers.\n\nThe system utilizes an engineered ceramic rotary valve matrix, drastically reducing solvent volume requirements and purging dead volumes in under 5 milliseconds. Real-time trityl monitoring across all active lines provides instantaneous visual feedback on synthesis yield step-by-step.\n\nWith an ultra-compact benchtop footprint of only 540 × 460 mm, the GS-200 operates under standard laboratory nitrogen lines or compact argon cylinders, featuring an intuitive touch-screen software suite pre-programmed with over 60 standard and modified coupling protocols.',
    keySpecs: [
      { label: 'Throughput', value: 'Up to 48 concurrent oligos' },
      { label: 'Synthesis scale', value: '25 nmol – 1 µmol' },
      { label: 'Cycle time', value: '2.5 min per base addition' },
      { label: 'Coupling yield', value: '≥ 99.4% average step efficiency' },
      { label: 'Reagent positions', value: '16 monomer ports + 4 wash bottles' },
      { label: 'Dimensions', value: '540 × 460 × 480 mm, 45 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Fluidic & Valve Architecture',
        specs: [
          { label: 'Valve Technology', value: 'Ceramic shear face micro-valves with zero elastomer wear' },
          { label: 'Pressure System', value: 'Inert N2/Ar gas regulated drive (0.4–1.2 bar)' },
          { label: 'Detection', value: 'Dual-wavelength 495/412 nm optical trityl sensor' }
        ]
      },
      {
        category: 'Synthesis Chemistries',
        specs: [
          { label: 'Compatible Monomers', value: 'Standard dA, dC, dG, dT, Fluorescent labels, Phosphorothioate backbones' },
          { label: 'Column Formats', value: 'Standard luer-lock columns and 48-well micro-manifold trays' }
        ]
      },
      {
        category: 'Electrical & Installation',
        specs: [
          { label: 'Power Requirements', value: '100–240 VAC, 50/60 Hz, 350 VA' },
          { label: 'Exhaust Requirements', value: 'Standard benchtop duct connection (50 mm)' }
        ]
      }
    ],
    compatibleConsumables: [
      'Richter QuickColumn™ CPG Support Cartridges',
      'Ultra-Pure Activator & Deblock Reagents',
      'Modular Monomer Bottle Couplers'
    ],
    certifications: ['ISO 9001:2015', 'CE Machine Directive 2006/42/EC', 'RoHS 3']
  },

  // ==========================================
  // CATEGORY 3: DIGITAL PCR ANALYSIS
  // ==========================================
  {
    id: 'dp-200',
    name: 'DP-200 AbsoluteQuant™',
    modelCode: 'DP-200-DDPCR-96',
    category: 'ddpcr',
    categoryLabel: 'Digital PCR',
    tagline: 'Automated droplet partitioning with 5-color absolute quantification',
    image: '/images/ddpcr-dp200.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '2 weeks',
    overview: 'The DP-200 AbsoluteQuant™ is a precision microfluidic Droplet Digital PCR (ddPCR) workstation developed for translational research, oncology liquid biopsies, and gene therapy vector characterization. Unlike conventional qPCR which relies on standard calibration curves susceptible to PCR inhibition and amplification drift, the DP-200 performs true absolute nucleic acid quantification based on Poisson statistics, enabling reliable detection of rare mutant alleles down to 0.005% frequency against high wild-type genomic backgrounds.\n\nThe system integrates automated sample emulsification with optical readouts in a continuous walk-away workflow. Each 20 µL sample reaction is micro-partitioned into 20,000 to 45,000 monodisperse nanoliter droplets (0.85 nL ± 2% volume uniformity) inside disposable fluorinated micro-channel cartridges. This massive partitioning physically isolates single target templates into discrete nanoliter reaction vessels, eliminating cross-droplet competition and drastically increasing tolerance to biological inhibitors (such as heparin, heme, or humic acid) common in clinical plasma and environmental samples.\n\nFollowing thermal cycling, droplets flow through a quartz hydrodynamic focusing capillary past three collinear diode laser lines (488 nm, 532 nm, and 638 nm) at a reading velocity of 1,800 droplets per second per channel. An advanced 5-color optical multiplex detection array (FAM, HEX/VIC, Texas Red, Cy5, and Quasar 705) captures fluorescence emissions simultaneously. Built-in machine learning boundary-gating algorithms distinguish positive and negative droplet clusters automatically, streaming raw copy concentrations, MIQE-compliant reports, and audit trails directly into hospital and laboratory information management systems (LIMS).',
    keySpecs: [
      { label: 'Droplets per sample', value: '20,000 – 45,000 (0.85 nL ± 2%)' },
      { label: 'Sample throughput', value: '96 samples in 75 minutes' },
      { label: 'Detection channels', value: '5 Optical Multiplex Channels' },
      { label: 'Dynamic range', value: '6 Orders of Magnitude' },
      { label: 'Precision (CV)', value: '< 1.5% at 50 copies/µL' },
      { label: 'Block uniformity', value: '±0.12°C across all 96 wells' },
      { label: 'Dimensions', value: '640 × 580 × 520 mm, 78 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Droplet Generation & Optical Detection',
        specs: [
          { label: 'Carrier Oil Chemistry', value: 'Fluorinated biocompatible carrier oil with ultra-low surfactant leakage' },
          { label: 'Detection Principle', value: 'Continuous-flow capillary hydrodynamic focusing past laser beam spot' },
          { label: 'Excitation Sources', value: 'Triple high-coherence diode lasers (488 nm, 532 nm, 638 nm)' },
          { label: 'Droplet Reading Velocity', value: '1,800 droplets per second per channel' }
        ]
      },
      {
        category: 'Software, Algorithms & Regulatory Compliance',
        specs: [
          { label: 'Clustering Algorithms', value: 'Automated Poisson statistical clustering with ML boundary gates' },
          { label: 'Data Export Formats', value: 'Raw photon counts, CSV, MIQE-compliant XML, LIMS REST API connector' },
          { label: 'Regulatory Compliance', value: 'Full 21 CFR Part 11 audit trails, electronic signatures, user role control' }
        ]
      },
      {
        category: 'Physical & Thermal Specifications',
        specs: [
          { label: 'Thermal Module', value: 'Dual Peltier thermal control with ±0.12°C block uniformity' },
          { label: 'Electrical Requirements', value: '100–240 VAC, 50/60 Hz, 600 VA' },
          { label: 'Chassis Design', value: 'Benchtop format, brushed aluminum with anti-vibration rubber mounts' }
        ]
      }
    ],
    compatibleConsumables: [
      'Richter MicroPartition™ 96-Well Droplet Cartridges',
      'FluoroShield™ Droplet Generation Oil v3',
      'AbsoluteQuant MasterMix 2X for Probe Assays'
    ],
    certifications: ['CE-IVD Directive 98/79/EC', 'ISO 13485:2016 Certified Plant', 'IEC 61326-1 EMC Standard']
  },
  {
    id: 'dp-100',
    name: 'DP-100 BenchQuant™',
    modelCode: 'DP-100-DDPCR-24',
    category: 'ddpcr',
    categoryLabel: 'Digital PCR',
    tagline: 'Compact 2-color digital PCR analyzer for targeted clinical copy number verification',
    image: '/images/ddpcr-dp100.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '1–2 weeks',
    overview: 'The DP-100 BenchQuant™ brings absolute Poisson digital quantification to everyday diagnostic benches. Specifically tailored for small-to-midsize pathology suites and prenatal testing labs, the DP-100 processes up to 24 samples per run with rapid 45-minute droplet reading.\n\nFeaturing a streamlined dual-laser optical module (FAM and HEX/VIC), the instrument eliminates fluorescent spectral deconvolution algorithms in favor of direct physical dichroic separation, delivering zero optical crosstalk and unsurpassed signal-to-noise ratios.\n\nThe DP-100 requires zero oil priming lines or dedicated vacuum pumps: its integrated micro-piston generator creates up to 25,000 uniform nanoliter droplets per sample within an enclosed, disposable chip, eliminating maintenance overhead and aerosol contamination risks.',
    keySpecs: [
      { label: 'Droplets per sample', value: '20,000 – 25,000 monodisperse' },
      { label: 'Sample capacity', value: '1 to 24 samples per run' },
      { label: 'Detection channels', value: '2 Optical Channels (FAM, HEX/VIC)' },
      { label: 'Reading speed', value: '45 minutes for 24 samples' },
      { label: 'Dynamic range', value: '5 Orders of Magnitude' },
      { label: 'Dimensions', value: '460 × 420 × 380 mm, 38 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Optical Detection',
        specs: [
          { label: 'Light Sources', value: 'Dual solid-state 488 nm / 532 nm laser diodes' },
          { label: 'Detector', value: 'High-gain low-noise silicon photomultiplier (SiPM)' },
          { label: 'Discrimination', value: 'Real-time dual-threshold Poisson clustering' }
        ]
      },
      {
        category: 'Sample Format & Consumables',
        specs: [
          { label: 'Cartridge Format', value: '8-sample microfluidic partition strip' },
          { label: 'Input Reaction Volume', value: '20 µL total reaction volume' }
        ]
      },
      {
        category: 'Facility Requirements',
        specs: [
          { label: 'Electrical', value: '100–240 VAC, 50/60 Hz, 300 VA' },
          { label: 'Interface', value: '10.1-inch capacitive HD touch screen + USB / Ethernet' }
        ]
      }
    ],
    compatibleConsumables: [
      'BenchQuant MicroStrip Droplet Cartridges (8-Well)',
      'Richter BioOil Droplet Matrix v2',
      'DualProbe MasterMix 2X'
    ],
    certifications: ['CE-IVD Directive 98/79/EC', 'ISO 13485:2016 Certified Plant', 'IEC 61010-1']
  },
  {
    id: 'dp-400',
    name: 'DP-400 MultiPlex™',
    modelCode: 'DP-400-DDPCR-384',
    category: 'ddpcr',
    categoryLabel: 'Digital PCR',
    tagline: 'Ultra-high-throughput 6-color digital emulsion PCR workstation for biopharma screening',
    image: '/images/ddpcr-dp400.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '3–4 weeks',
    overview: 'The DP-400 MultiPlex™ represents our most powerful digital quantification platform, built for high-throughput biopharmaceutical quality control, AAV viral vector genome integrity assays, and large-scale environmental pathogen screening. Capable of processing up to 384 digital PCR reactions in a continuous 3-hour automated workflow, the DP-400 bridges the throughput gap between digital PCR and next-generation sequencing.\n\nThe detection engine integrates six independent laser-interrogated optical channels (FAM, HEX, TAMRA, Texas Red, Cy5, and Cy5.5), enabling comprehensive 6-target multiplexing per reaction well. With up to 50,000 droplets per well, the system delivers unmatched analytical sensitivity capable of detecting 1 mutant copy in 100,000 wild-type templates (0.001% limit of detection).\n\nAn automated robotic plate loader interfaces directly with institutional laboratory automation tracks and high-capacity stackers, making the DP-400 the benchmark for GMP-compliant gene therapy release testing and high-volume clinical monitoring.',
    keySpecs: [
      { label: 'Throughput', value: 'Up to 384 samples per run' },
      { label: 'Droplets per well', value: '30,000 – 50,000 droplets' },
      { label: 'Multiplexing', value: '6 Optical Multiplex Channels' },
      { label: 'Sensitivity (LOD)', value: '0.001% mutant allele frequency' },
      { label: 'Automation', value: 'Integrated robotic plate handler' },
      { label: 'Dimensions', value: '880 × 720 × 660 mm, 115 kg' },
    ],
    detailedSpecs: [
      {
        category: 'High-Plex Detection Engine',
        specs: [
          { label: 'Lasers', value: 'Quad collinear laser array (405, 488, 532, 640 nm)' },
          { label: 'Fluorescence Channels', value: '6 independent photomultiplier detector arrays' },
          { label: 'Reading Rate', value: '3,200 droplets per second hydrodynamic throughput' }
        ]
      },
      {
        category: 'Automation & GMP Compliance',
        specs: [
          { label: 'Integration', value: 'ANSI/SLAS robotic plate nest with gripper compatibility' },
          { label: 'Data Integrity', value: '21 CFR Part 11, automated encrypted audit trails, LIMS connector' }
        ]
      },
      {
        category: 'Power & Installation',
        specs: [
          { label: 'Electrical Requirements', value: '200–240 VAC, 50/60 Hz, 900 VA' },
          { label: 'Chassis', value: 'Anti-vibration floor-bench chassis with HEPA exhaust filter' }
        ]
      }
    ],
    compatibleConsumables: [
      'MultiPlex 384-Well Emulsion Cartridges',
      'High-Tension Biocompatible Partition Oil v4',
      'MultiPlex 6X MasterMix Master Kit'
    ],
    certifications: ['CE-IVD Directive 98/79/EC', 'ISO 13485:2016 Certified Plant', 'GMP Annex 11 Compliant']
  },

  // ==========================================
  // CATEGORY 4: SINGLE-CELL GENOMICS
  // ==========================================
  {
    id: 'sc-600',
    name: 'SC-600 CellMatrix™',
    modelCode: 'SC-600-CELL-AUTO',
    category: 'singlecell',
    categoryLabel: 'Single-Cell Genomics',
    tagline: 'Microfluidic single-cell partitioning and automated library preparation robotics',
    image: '/images/singlecell-sc600.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: 'Unavailable (Archived / Inactive)',
    isAvailable: false,
    statusLabel: 'Unavailable',
    overview: 'The SC-600 CellMatrix™ is a fully enclosed, robotic single-cell isolation and library preparation workstation engineered to remove the manual bottlenecks of single-cell biology. Combining microfluidic cell isolation with automated 8-channel liquid handling, the SC-600 takes heterogeneous primary tissue suspensions, whole blood, or cultured lines and transforms them directly into fully indexed NGS libraries ready for sequencer loading, completely eliminating technician-to-technician variability.\n\nInside the instrument, single cells are gently channeled across an advanced microfluidic chip featuring up to 120,000 barcoded nanowells. The system accommodates challenging cell populations spanning 5 µm to 65 µm in diameter (including delicate primary neurons, large tumor cells, and plant protoplasts) with single-cell capture yields exceeding 78%. An integrated high-resolution optical inspection system verifies cell viability and suspension concentration in the sample loop prior to dispensing, actively controlling droplet volume and bead co-encapsulation to enforce a doublet rate strictly under 1.8% at 10,000 targeted cells.\n\nDownstream reactions—including cell lysis, barcoded reverse transcription, second-strand synthesis, cDNA enzymatic fragmentation, and magnetic bead cleanup—are executed autonomously across a 14-position ANSI/SLAS deck. The robotic gantry is propelled by frictionless linear magnetic levitation motors calibrated via laser interferometry to ±3 µm spatial repeatability. The entire operational area is shielded by an ISO Class 5 laminar HEPA H14 filtration module with automated germicidal UV-C (254 nm) decontamination cycles, safeguarding low-input RNA samples from ambient RNase degradation.',
    keySpecs: [
      { label: 'Cell capture rate', value: '> 78% viable cells captured' },
      { label: 'Cell size range', value: '5 µm to 65 µm cell diameter' },
      { label: 'Nanowell density', value: 'Up to 120,000 barcoded wells' },
      { label: 'Liquid handling', value: '8-Channel independent, 0.2–200 µL (CV < 1.2%)' },
      { label: 'Thermal modules', value: '2× Integrated 4°C–99°C Peltier blocks' },
      { label: 'Clean enclosure', value: 'HEPA H14 + UV-C 254 nm, ISO Class 5' },
      { label: 'Dimensions', value: '1260 × 780 × 910 mm, 195 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Robotics & Liquid Handling Deck',
        specs: [
          { label: 'Drive Mechanism', value: 'Brushless linear magnetic levitation drives with zero-contact wear' },
          { label: 'Positional Repeatability', value: '±3 µm in X-Y-Z axes monitored by optical glass scales' },
          { label: 'Liquid Level Sensing', value: 'Dual capacitive and pressure-differential surface detection' },
          { label: 'Deck Capacity', value: '14 standard ANSI/SLAS microplate positions + magnetic bead separator bay' }
        ]
      },
      {
        category: 'Single-Cell Partitioning & Chemistries',
        specs: [
          { label: 'Supported Protocols', value: '3\' and 5\' single-cell RNA-seq, scATAC-seq, CITE-seq antibody barcoding' },
          { label: 'Doublet Rate', value: '< 1.8% at 10,000 cells targeted recovery' },
          { label: 'Cell Viability Monitoring', value: 'Integrated optical mini-camera for sample suspension pre-dispense check' }
        ]
      },
      {
        category: 'Enclosure & Facilities',
        specs: [
          { label: 'Cleanliness Class', value: 'HEPA H14 laminar air flow, ISO 14644-1 Cleanroom Class 5' },
          { label: 'Power Requirements', value: '200–240 VAC, 50/60 Hz, 1,400 VA' },
          { label: 'Acoustic Emission', value: '< 52 dBA during full robotic execution' }
        ]
      }
    ],
    compatibleConsumables: [
      'CellMatrix Single-Cell Partition Chip Sets',
      'Universal Barcode Bead Oligo Libraries',
      'Conductive Filter Automation Tips (10 µL, 50 µL, 200 µL)'
    ],
    certifications: ['ISO 13485:2016 Medical Devices', 'CE Machinery Directive 2006/42/EC', 'ISO 14644-1 Cleanroom Class 5']
  },
  {
    id: 'sc-300',
    name: 'SC-300 MicroDrop™',
    modelCode: 'SC-300-CELL-BENCH',
    category: 'singlecell',
    categoryLabel: 'Single-Cell Genomics',
    tagline: 'Compact benchtop microfluidic single-cell partitioner for pilot studies and rare cell isolates',
    image: '/images/singlecell-sc300.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '2 weeks',
    overview: 'The SC-300 MicroDrop™ provides accessible, high-efficiency single-cell microfluidic encapsulation in a streamlined benchtop instrument. Engineered for immunology laboratories, stem cell cores, and neuroscience groups, the SC-300 partitions up to 8 samples in parallel in under 18 minutes.\n\nUtilizing precision micro-machined quartz chips, the instrument generates monodisperse hydrogel micro-droplets containing single cells alongside barcoded primer beads with capture efficiencies exceeding 75%. Its gentle hydrodynamic focusing channel preserves cell viability and RNA transcript integrity even for delicate primary cells.\n\nIntuitive one-touch protocol initiation and automated chip priming ensure rapid adoption by laboratory technicians with minimal training, while disposable closed fluidic paths eliminate sample carryover risk between experiments.',
    keySpecs: [
      { label: 'Sample capacity', value: '1 to 8 samples in parallel' },
      { label: 'Run duration', value: '< 18 minutes per 8-sample run' },
      { label: 'Cell recovery', value: 'Up to 20,000 single cells / sample' },
      { label: 'Capture efficiency', value: '> 75% viable cell recovery' },
      { label: 'Doublet rate', value: '< 2.0% at 8,000 cells' },
      { label: 'Dimensions', value: '480 × 390 × 360 mm, 32 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Microfluidic Engine',
        specs: [
          { label: 'Chip Architecture', value: 'Quartz micro-channel array with fluorosilane surface treatment' },
          { label: 'Pressure Control', value: 'Digital micro-pneumatic flow regulators with ±0.1 mbar precision' },
          { label: 'Cell Size Capability', value: '6 µm to 45 µm diameter range' }
        ]
      },
      {
        category: 'Supported Assays',
        specs: [
          { label: 'Chemistry Compatibility', value: '3\' scRNA-seq, single-cell TCR/BCR immune profiling, barcoded genomic DNA' },
          { label: 'Sample Inputs', value: 'Primary tissue dissociates, PBMCs, sorted nuclei' }
        ]
      },
      {
        category: 'Chassis & Power',
        specs: [
          { label: 'Electrical Requirements', value: '100–240 VAC, 50/60 Hz, 220 VA' },
          { label: 'Operating Noise', value: '< 45 dBA quiet operation' }
        ]
      }
    ],
    compatibleConsumables: [
      'MicroDrop Single-Cell Quartz Partition Cartridges',
      'Richter MicroBarcoding Gel Bead Kit',
      'Cell Isolation Suspension Buffer v2'
    ],
    certifications: ['ISO 13485:2016 Certified Plant', 'CE Machine Directive 2006/42/EC', 'RoHS 3']
  },
  {
    id: 'sc-800',
    name: 'SC-800 MegaCell™',
    modelCode: 'SC-800-CELL-CORE',
    category: 'singlecell',
    categoryLabel: 'Single-Cell Genomics',
    tagline: 'Dual-arm high-throughput robotic core facility single-cell multiomics library workstation',
    image: '/images/singlecell-sc800.jpg',
    fabricationSite: 'ISO 13485 Cleanroom',
    leadTime: '4–5 weeks',
    overview: 'The SC-800 MegaCell™ is our flagship robotic single-cell platform, built for national genome centers, international cell atlas consortia, and pharmaceutical discovery cores processing thousands of single-cell libraries weekly. Powered by dual independent robotic gantries—combining a 96-channel high-velocity pipetting head with an ultra-fine 8-channel micro-dispenser—the SC-800 runs walk-away single-cell multiomics protocols from primary cell loading through to final indexed NGS library pools.\n\nThe system incorporates an advanced active optical cell-sorting sorter inline with microfluidic partitioning, enabling fluorescence-activated cell gating (FACS-on-chip) before barcode droplet encapsulation. An on-board chilled reagent carousel maintains delicate enzymes, antibody-oligonucleotide conjugates (CITE-seq), and reverse transcriptase master mixes at a stable 4.0°C ± 0.2°C throughout multi-hour library builds.\n\nA HEPA-filtered laminar airflow enclosure with continuous active air-sampling and UV decontamination ensures an ultraclean ISO Class 5 workspace, while dual motorized thermal cyclers with automatic heated lids carry out PCR amplification directly on the deck without human intervention.',
    keySpecs: [
      { label: 'Deck capacity', value: '32 ANSI/SLAS plate nests + 4 chilled bays' },
      { label: 'Robotic arms', value: 'Dual independent gantries (96-ch + 8-ch)' },
      { label: 'Throughput', value: 'Up to 96 single-cell libraries / day' },
      { label: 'On-deck PCR', value: '2× Motorized 96-well Peltier cyclers' },
      { label: 'Enclosure', value: 'Full HEPA H14 cleanroom cabinet with UV-C' },
      { label: 'Dimensions', value: '1680 × 940 × 1120 mm, 310 kg' },
    ],
    detailedSpecs: [
      {
        category: 'Robotics & Liquid Handling',
        specs: [
          { label: 'Arm Architecture', value: 'Dual linear magnetic levitation arms with sub-micron optical encoders' },
          { label: 'Pipetting Range', value: '0.1 µL to 1,000 µL with dynamic capacitive liquid level sensing' },
          { label: 'Repeatability', value: '±1.5 µm positional precision across 32 deck nests' }
        ]
      },
      {
        category: 'Multiomics Chemistry Capabilities',
        specs: [
          { label: 'Supported Protocols', value: 'Full-length Smart-seq3, scRNA-seq 3\'/5\', scATAC-seq, CITE-seq, spatial transcriptomics indexing' },
          { label: 'FACS-on-Chip', value: 'Integrated 3-color laser fluorescence pre-dispense cell gating' }
        ]
      },
      {
        category: 'Facility & Integration',
        specs: [
          { label: 'Power Requirements', value: '200–240 VAC, 50/60 Hz, 2,200 VA dedicated' },
          { label: 'Automation Track', value: 'SiLA 2 and OPC-UA compliant API for central robotic core integration' }
        ]
      }
    ],
    compatibleConsumables: [
      'MegaCell High-Capacity Partition Chip Arrays',
      'Ultra-Clean Automation Tips (10 µL, 50 µL, 200 µL, 1000 µL)',
      'Multiomics Master Library Construction Kits'
    ],
    certifications: ['ISO 13485:2016 Medical Devices', 'CE Machinery Directive 2006/42/EC', 'ISO 14644-1 Cleanroom Class 5']
  }
];

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'ngs',
    label: 'DNA Sequencing Systems',
    description: 'High-throughput next-generation sequencers for whole genome, exome, and targeted panel sequencing.',
    instruments: ALL_INSTRUMENTS.filter(i => i.category === 'ngs'),
  },
  {
    id: 'synthesis',
    label: 'Gene & Oligo Synthesis',
    description: 'Automated solid-phase synthesizers for oligonucleotides, gene fragments, and modified nucleic acids.',
    instruments: ALL_INSTRUMENTS.filter(i => i.category === 'synthesis'),
  },
  {
    id: 'ddpcr',
    label: 'Digital PCR Analysis',
    description: 'Droplet digital PCR systems for absolute nucleic acid quantification without standard curves.',
    instruments: ALL_INSTRUMENTS.filter(i => i.category === 'ddpcr'),
  },
  {
    id: 'singlecell',
    label: 'Single-Cell Genomics Workstations',
    description: 'Automated robotic platforms for single-cell isolation, barcoding, and library construction.',
    instruments: ALL_INSTRUMENTS.filter(i => i.category === 'singlecell'),
  },
];

export const INSTRUMENTS = ALL_INSTRUMENTS;
