/* ============================================================
   ICON LIBRARY (inline SVG line icons, Feather-style)
   ============================================================ */
const ICONS = {
  wave: '<path d="M2 12s3-4 5-4 3 4 5 4 3-4 5-4 3 4 5 4"/><path d="M2 18s3-4 5-4 3 4 5 4 3-4 5-4 3 4 5 4"/>',
  rope: '<circle cx="12" cy="6" r="3"/><path d="M12 9v11M9 13l3-2 3 2M8 18l4-3 4 3"/>',
  drone: '<circle cx="12" cy="12" r="2.5"/><path d="M5 5l4.5 4.5M19 5l-4.5 4.5M5 19l4.5-4.5M19 19l-4.5-4.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>',
  flame: '<path d="M12 2c1 4-4 5-4 10a4 4 0 0 0 8 0c0-2-1-3-1-3s1 3-1 4c1-3-2-4-2-7Z"/>',
  thermo: '<path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 13l3-3 3 3 5-6"/>',
  scale: '<path d="M12 3v18M5 8h14M5 8l-3 6h6l-3-6ZM19 8l-3 6h6l-3-6Z"/>',
  micro: '<circle cx="12" cy="8" r="4"/><path d="M12 12v3M8 21h8M10 18h4"/>',
  oil: '<path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z"/>',
  factory: '<path d="M3 21V10l6 4v-4l6 4V7l6 4v10Z"/>',
  ship: '<path d="M3 18l2-7h14l2 7M6 11V4h5v7M2 21c1.5 1 3 1 4.5 0S9 20 10.5 21s3 1 4.5 0 3-1 4.5 0"/>',
  rig: '<path d="M12 2v6M6 22l2-14h8l2 14M9 8h6"/>',
  bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
  building: '<rect x="4" y="3" width="16" height="18"/><path d="M9 21v-4h6v4M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-5 5-11 12-11 0 7-3 12-8 15 1 1 2 2 3 3"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/>',
  pin: '<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>'
};
function ic(name, cls=''){ return `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${ICONS[name]||''}</svg>`; }

/* ============================================================
   SERVICES (with deep-dive fields for services.html)
   ============================================================ */
const SERVICES = [
  {icon:'wave', title:'NDT Inspection', short:'Ultrasonic, radiographic, magnetic particle and dye penetrant testing to detect flaws before they become failures.',
   desc:'Our Non-Destructive Testing division applies internationally recognised methods to identify surface and sub-surface flaws in welds, castings and forgings without compromising the component. Every technician is certified to ASNT SNT-TC-1A / PCN Level II & III, and every result is issued as a fully traceable, code-referenced report.',
   img:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop',
   tags:['UT','RT','MT','PT','VT','Phased Array UT'],
   points:['Weld and material integrity verification to ASME / API / ISO codes','Portable digital radiography for fast, safe turnaround','Phased array &amp; TOFD for complex weld geometries','Fully traceable digital reporting with photographic evidence']},
  {icon:'rope', title:'Rope Access', short:'IRATA-certified technicians reaching difficult structures without scaffolding, minimising downtime and cost.',
   desc:'IRATA-certified rope access technicians give you inspection and maintenance access to flare stacks, tank shells, columns and offshore structures without the cost, footprint or lead-time of scaffolding — cutting access-related downtime dramatically while maintaining full HSE compliance.',
   img:'https://iaisindia.com/wp-content/uploads/2023/03/ONE-OF-OUR-IRATA-APPROVED-ROPE-CREW-PERFORMING-NDT-INSPECTION-@-NIPPON-STEEL-HAZIRA-SURAT-INDIA-IN-GAS-HOLDER..jpeg',
   tags:['IRATA L1-L3','Confined Space','Working at Height'],
   points:['Rapid mobilisation with minimal site footprint','Combined access + NDT technicians for single-visit efficiency','Confined-space and rescue-certified crews','Full rigging plans and JSA before every deployment']},
  {icon:'drone', title:'Drone Inspection', short:'High-resolution aerial and thermal inspection of flare stacks, tanks and offshore structures.',
   desc:'Our licensed UAV pilots capture high-resolution visual and thermal imagery of flare stacks, tank roofs, pipe racks and offshore platforms — reaching areas that would otherwise require shutdown or hazardous manned access, with data delivered as an annotated digital report.',
   img:'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=900&auto=format&fit=crop',
   tags:['Visual','Thermal','Live Flare Survey','3D Mapping'],
   points:['Inspection of live flare stacks without shutdown','Thermal imaging for insulation and hot-spot detection','High-resolution 4K visual defect mapping','GIS-tagged reporting integrated with asset registers']},
  {icon:'flame', title:'PWHT', short:'Post-weld heat treatment services ensuring stress relief and metallurgical integrity of critical welds.',
   desc:'Post-Weld Heat Treatment relieves residual stress and restores metallurgical stability in critical welds. Our crews design and execute PWHT cycles with calibrated thermocouples and continuous chart-recorded monitoring to meet exact code requirements.',
   img:'https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg',
   tags:['Local PWHT','Furnace PWHT','Chart Recording'],
   points:['Resistance and induction heating systems','Calibrated multi-point thermocouple control','Chart-recorded, code-compliant thermal cycles','On-site and workshop-based treatment options']},
  {icon:'thermo', title:'Heat Treatment', short:'Controlled thermal processing for hardness, stress relief and material property optimisation.',
   desc:'From annealing to normalising and hardening, our heat treatment programmes are engineered to deliver precise material properties for fabrication and repair work, backed by full documentation for QA/QC and client audit requirements.',
   img:'https://iaisindia.com/wp-content/uploads/2022/12/OUR-TEAM-IS-CONDUCTING-POST-WELD-HEAT-TREATMENT-PROCESS-at-TOSHIBA-JSW-POWER-SYSTEMS-INDIA-PVT-LTD.jpeg',
   tags:['Annealing','Normalising','Hardening','Tempering'],
   points:['Controlled heating and cooling rate management','Hardness verification pre- and post-treatment','Compliance with ASME, API and client specifications','Detailed thermal cycle documentation']},
  {icon:'shield', title:'Asset Integrity', short:'Risk-based inspection (RBI) and integrity management programmes across the asset lifecycle.',
   desc:'We build risk-based inspection (RBI) frameworks that prioritise inspection effort where it matters most — combining probability and consequence of failure analysis to extend asset life while keeping regulatory compliance and safety front and centre.',
   img:'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=900&auto=format&fit=crop',
   tags:['RBI','Fitness-for-Service','Life Extension'],
   points:['API 580/581-aligned risk-based inspection planning','Fitness-for-service assessments to API 579','Integrity operating windows and KPI dashboards','Long-term asset life extension strategy']},
  {icon:'chart', title:'Corrosion Monitoring', short:'Real-time and periodic corrosion assessment protecting pipelines, vessels and structures.',
   desc:'Corrosion is the single biggest driver of unplanned downtime in process industries. Our monitoring programmes combine UT thickness mapping, corrosion coupons and real-time probes to track degradation trends before they become integrity threats.',
   img:'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=900&auto=format&fit=crop',
   tags:['UT Mapping','Coupons','ER Probes','Trend Analysis'],
   points:['Automated ultrasonic corrosion mapping','Corrosion coupon installation and analysis','Real-time electrical resistance (ER) probe monitoring','Long-term degradation trend reporting']},
  {icon:'scale', title:'Mechanical Testing', short:'Tensile, impact, hardness and bend testing performed to international material standards.',
   desc:'Our accredited laboratory performs destructive mechanical testing — tensile, impact (Charpy), hardness and bend testing — to verify that materials and welds meet the mechanical properties specified by design codes and project specifications.',
   img:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=900&auto=format&fit=crop',
   tags:['Tensile','Charpy Impact','Hardness','Bend Test'],
   points:['Tensile and yield strength verification','Charpy V-notch impact testing at temperature','Macro/micro hardness surveys','Guided bend and fillet weld break tests']},
  {icon:'micro', title:'Metallurgical Services', short:'Failure analysis, metallography and material verification from our accredited laboratory.',
   desc:'When something fails, our metallurgists find out why. Combining metallography, positive material identification (PMI) and root-cause failure analysis, we give clients the evidence needed to prevent recurrence and satisfy regulatory investigations.',
   img:'https://iaisindia.com/wp-content/uploads/2026/08/Metallurgy-services-scaled-1.jpeg',
   tags:['Failure Analysis','PMI','Metallography'],
   points:['Root-cause failure analysis and reporting','Positive Material Identification (PMI) on site','Metallographic replication and lab sectioning','Weld procedure qualification support']},
];

/* ============================================================
   INDUSTRIES
   ============================================================ */
const INDUSTRIES = [
  {icon:'oil', img:'https://iaisindia.com/wp-content/uploads/2022/12/JOB-DONE-The-Maintenance-project-using-Rope-IRATA-technique-has-been-successful-completed-as-per-scope-of-work-client-Digboi-RefineryIndian-Oil-Corporation-Limited-Assam-India.jpeg', title:'Oil & Gas',
   desc:'From upstream wellheads to downstream refining, we deliver full-scope NDT, corrosion monitoring and integrity programmes engineered for high-pressure, high-consequence assets.',
   points:['Refinery turnaround inspection','Pipeline integrity &amp; corrosion mapping','Wellhead &amp; pressure vessel testing']},
  {icon:'flame', img:'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=900&auto=format&fit=crop', title:'Petrochemical',
   desc:'Complex process units and reactive chemistries demand rigorous inspection. We support petrochemical plants with RBI programmes and shutdown-critical NDT.',
   points:['Reactor &amp; column inspection','Turnaround planning support','PWHT for critical process piping']},
  {icon:'ship', img:'https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg', title:'Marine',
   desc:'Hull, ballast tank and structural inspection for tankers, bulk carriers and support vessels, delivered by class-familiar surveyors.',
   points:['Hull thickness gauging','Ballast tank condition surveys','Class society liaison support']},
  {icon:'rig', img:'https://iaisindia.com/wp-content/uploads/2026/08/Holstein_at_Dusk-1-scaled.jpg', title:'Offshore',
   desc:'Rope-access and drone-enabled inspection of platforms, jackets and risers, minimising the need for costly offshore shutdowns.',
   points:['Topside &amp; jacket structural inspection','Riser &amp; pipeline integrity','Live flare stack drone survey']},
  {icon:'bolt', img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop', title:'Power Plants',
   desc:'Boiler tube integrity, turbine component testing and RBI programmes that keep generation assets running reliably.',
   points:['Boiler tube RBI programmes','Turbine &amp; generator component NDT','Heat exchanger inspection']},
  {icon:'building', img:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop', title:'Construction',
   desc:'Structural steel and weld verification for major construction projects, ensuring compliance before handover.',
   points:['Structural weld inspection','Pre-handover integrity certification','Mechanical testing of structural materials']},
  {icon:'cog', img:'https://iaisindia.com/wp-content/uploads/2026/08/mauafacturing-1-1.png', title:'Manufacturing',
   desc:'In-process and final inspection for fabricators and OEMs, protecting quality before products leave the shop floor.',
   points:['In-process weld inspection','Final product NDT &amp; PMI','Material traceability support']},
  {icon:'leaf', img:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=900&auto=format&fit=crop', title:'Renewable Energy',
   desc:'Blade, tower and foundation inspection support for wind and solar assets entering a fast-growing regional sector.',
   points:['Wind turbine tower &amp; foundation NDT','Solar structure integrity checks','Balance-of-plant inspection']},
];

/* ============================================================
   PROCESS
   ============================================================ */
const PROCESS = [
  {t:'Scope & Survey', d:'Site assessment and inspection scope definition against applicable codes.'},
  {t:'Mobilisation', d:'Certified crews and calibrated equipment deployed on schedule.'},
  {t:'Inspection', d:'Field data captured using calibrated, code-compliant NDT methods.'},
  {t:'Analysis', d:'Engineers evaluate results against acceptance criteria and standards.'},
  {t:'Reporting', d:'Auditable digital reports delivered with clear recommendations.'},
];

/* ============================================================
   PROJECTS
   ============================================================ */
const PROJECTS = [
  {img:'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=900&auto=format&fit=crop', tag:'Oil & Gas', title:'Refinery Turnaround NDT', desc:'Full-scope UT/RT inspection during a scheduled refinery turnaround.', challenge:'6-week turnaround window with zero tolerance for schedule slippage.', loc:'Ruwais, UAE', dur:'6 Weeks'},
  {img:'https://iaisindia.com/wp-content/uploads/2026/08/ai-generated-two-men-standing-on-top-of-a-tall-building-free-photo.jpeg', tag:'Offshore', title:'Platform Rope Access Survey', desc:'Structural integrity survey across three offshore production platforms.', challenge:'Access to jacket splash-zone members without vessel shutdown.', loc:'Arabian Gulf', dur:'4 Weeks'},
  {img:'https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg', tag:'Marine', title:'Hull & Ballast Tank Inspection', desc:'Thickness gauging and visual inspection for a VLCC tanker fleet.', challenge:'Confined-space entry across 14 ballast tanks in dry-dock.', loc:'Jebel Ali, UAE', dur:'3 Weeks'},
  {img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop', tag:'Power', title:'Boiler Tube Integrity Programme', desc:'Risk-based inspection programme for combined-cycle power plant boilers.', challenge:'Thousands of tube welds to prioritise under a fixed outage budget.', loc:'Taweelah, UAE', dur:'8 Weeks'},
  {img:'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=900&auto=format&fit=crop', tag:'Oil & Gas', title:'Pipeline Corrosion Mapping', desc:'Automated UT corrosion mapping across a 40km cross-country pipeline.', challenge:'Mapping wall-loss trends across varied terrain and coating conditions.', loc:'Fujairah, UAE', dur:'5 Weeks'},
  {img:'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=900&auto=format&fit=crop', tag:'Offshore', title:'Drone Flare Stack Survey', desc:'Thermal and visual drone inspection of live flare stack structures.', challenge:'Inspecting a live flare without process interruption.', loc:'Das Island, UAE', dur:'1 Week'},
  {img:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop', tag:'Oil & Gas', title:'Storage Tank Floor Scan', desc:'Robotic MFL floor scanning for above-ground crude storage tanks.', challenge:'Scanning 10 tank floors while keeping farm throughput unaffected.', loc:'Abu Dhabi, UAE', dur:'7 Weeks'},
  {img:'https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg', tag:'Marine', title:'FPSO Structural Survey', desc:'Class-aligned structural and coating condition survey aboard an FPSO.', challenge:'Coordinating access across a live production vessel.', loc:'Arabian Gulf', dur:'5 Weeks'},
  {img:'https://iaisindia.com/wp-content/uploads/2026/08/Heat-treatment-1.png', tag:'Power', title:'Heat Exchanger Bundle Inspection', desc:'Eddy current testing of heat exchanger tube bundles.', challenge:'Screening 12,000+ tubes within a 10-day outage window.', loc:'Jebel Ali, UAE', dur:'10 Days'},
];

/* ============================================================
   CERTIFICATIONS
   ============================================================ */
const CERTS = [
  {icon:'award', name:'ISO 9001:2015', desc:'Quality Management Systems', scope:'Company-wide QMS covering all inspection, testing and reporting activities.'},
  {icon:'shield', name:'ISO 17020', desc:'Inspection Body Accreditation', scope:'Third-party accreditation for the competence of our inspection body.'},
  {icon:'check', name:'ASNT SNT-TC-1A', desc:'NDT Personnel Certification', scope:'Employer-based certification programme for NDT technicians (Level I-III).'},
  {icon:'award', name:'PCN Level II/III', desc:'Personnel Certification in NDT', scope:'BINDT-scheme certification recognised across the GCC and Europe.'},
  {icon:'shield', name:'IRATA Access', desc:'Rope Access Certification', scope:'International rope access trade association certified technicians.'},
  {icon:'check', name:'API 510 / 570', desc:'Pressure Vessel & Piping Inspector', scope:'API-certified inspectors for in-service vessels and piping systems.'},
];

/* ============================================================
   CLIENTS / TESTIMONIALS
   ============================================================ */
const CLIENTS = ['ADNOC','TAQA','DEWA','ENOC','Borouge','Emirates Global Aluminium','GASCO','Fertiglobe','Masdar','Dolphin Energy'];

const SECTORS = [
  {icon:'oil', label:'Oil & Gas Operators'},
  {icon:'bolt', label:'Power &amp; Utilities'},
  {icon:'ship', label:'Marine &amp; Shipping'},
  {icon:'building', label:'EPC Contractors'},
  {icon:'cog', label:'Manufacturing'},
  {icon:'rig', label:'Offshore Operators'},
  {icon:'flame', label:'Petrochemical'},
  {icon:'leaf', label:'Renewable Energy'},
];

const TESTIMONIALS = [
  {q:'IAIS mobilised a full NDT crew within 48 hours for our turnaround — accurate reporting and zero schedule slippage.', n:'Maintenance Director', r:'Refining & Petrochemicals'},
  {q:'Their rope access team handled a complex flare structure survey with excellent safety discipline and clear documentation.', n:'HSE Manager', r:'Offshore Operator'},
  {q:'Consistent, code-compliant inspection reports that our regulators accept without a single query. A dependable partner.', n:'Asset Integrity Lead', r:'Power Generation'},
];

const TESTIMONIALS_EXT = TESTIMONIALS.concat([
  {q:'Drone thermal survey of our live flare saved us a full shutdown cycle. Sharp, professional and fast.', n:'Operations Manager', r:'Gas Processing'},
  {q:'Their metallurgical lab identified a root cause our internal team had missed for months.', n:'Reliability Engineer', r:'Petrochemical Plant'},
  {q:'Corrosion mapping data integrated cleanly into our RBI system — exactly the format we needed.', n:'Integrity Engineer', r:'Pipeline Operator'},
]);

/* ============================================================
   CAREERS
   ============================================================ */
const JOBS = [
  {title:'Senior NDT Technician (UT/RT Level II)', type:'Full-Time', loc:'Abu Dhabi, UAE', dept:'Inspection Operations'},
  {title:'IRATA Level 3 Rope Access Supervisor', type:'Full-Time', loc:'Dubai, UAE', dept:'Access & Field Services'},
  {title:'UAV / Drone Inspection Pilot', type:'Full-Time', loc:'Abu Dhabi, UAE', dept:'Digital Inspection'},
  {title:'Asset Integrity Engineer (RBI)', type:'Full-Time', loc:'Abu Dhabi, UAE', dept:'Engineering'},
  {title:'Metallurgist / Failure Analyst', type:'Full-Time', loc:'Sharjah, UAE', dept:'Laboratory Services'},
  {title:'QA/QC Coordinator', type:'Full-Time', loc:'Abu Dhabi, UAE', dept:'Quality Assurance'},
];

const PERKS = [
  {icon:'award', t:'Certification Support', d:'Sponsored PCN, ASNT and IRATA certification pathways.'},
  {icon:'globe', t:'Regional Exposure', d:'Projects across the UAE, GCC and wider international sites.'},
  {icon:'heart', t:'Health Coverage', d:'Comprehensive medical insurance for you and dependents.'},
  {icon:'users', t:'Collegial Teams', d:'Work alongside 150+ experienced inspection professionals.'},
];

/* ============================================================
   NEWS
   ============================================================ */
const ARTICLES = [

{
cat:'NDT',
title:'The Importance of Non-Destructive Testing in Industrial Asset Integrity',
img:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=900&auto=format&fit=crop',
excerpt:'Discover how Non-Destructive Testing (NDT) techniques such as UT, MT, PT and RT help identify defects without damaging critical industrial assets, improving safety and reducing operational risks.',
date:'August 2026'
},

{
cat:'PWHT',
title:'Why Post Weld Heat Treatment (PWHT) Is Essential for Pressure Equipment',
img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
excerpt:'PWHT reduces residual stresses, improves weld toughness and extends the service life of pressure vessels, pipelines and structural components operating under demanding conditions.',
date:'July 2026'
},

{
cat:'Inspection Standards',
title:'Understanding ASME Section V for NDT Inspection',
img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
excerpt:'ASME Section V establishes internationally recognized requirements for performing ultrasonic, radiographic, magnetic particle and liquid penetrant testing in fabrication and maintenance.',
date:'July 2026'
},

{
cat:'Ultrasonic Testing',
title:'Ultrasonic Thickness Measurement for Corrosion Monitoring',
img:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop',
excerpt:'Routine ultrasonic thickness surveys help identify corrosion damage before equipment reaches minimum allowable wall thickness, reducing unexpected shutdowns.',
date:'June 2026'
},

{
cat:'Asset Integrity',
title:'Risk-Based Inspection (RBI): Optimizing Maintenance Planning',
img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
excerpt:'Risk-Based Inspection enables plant operators to prioritize inspection activities based on equipment risk, improving reliability while minimizing maintenance costs.',
date:'June 2026'
},

{
cat:'Radiographic Testing',
title:'Detecting Internal Weld Defects Using Radiographic Testing',
img:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
excerpt:'Radiographic Testing (RT) identifies internal weld discontinuities such as porosity, slag inclusions and lack of fusion without damaging the component.',
date:'May 2026'
},

{
cat:'Magnetic Particle Testing',
title:'Surface Crack Detection with Magnetic Particle Inspection',
img:'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=900&auto=format&fit=crop',
excerpt:'Magnetic Particle Testing (MT) is widely used to locate surface and near-surface cracks in ferromagnetic materials during fabrication and maintenance inspections.',
date:'May 2026'
},

{
cat:'Company News',
title:'IAIS UAE Expands Inspection & Engineering Services Across the GCC',
img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=900&auto=format&fit=crop',
excerpt:'IAIS UAE continues expanding its inspection, NDT, PWHT and asset integrity services to support Oil & Gas, Petrochemical, Power and Marine industries throughout the GCC region.',
date:'April 2026'
}

];

/* ============================================================
   TEAM / TIMELINE / VALUES (about.html)
   ============================================================ */
const TEAM = [
  {name:'Rajesh Kumar', role:'Group Managing Director', img:'https://iaisindia.com/wp-content/uploads/2026/08/faces.png'},
  {name:'Fatima Al Suwaidi', role:'UAE Operations Director', img:'https://iaisindia.com/wp-content/uploads/2026/08/faces.png'},
  {name:'Arjun Menon', role:'Head of Engineering & RBI', img:'https://iaisindia.com/wp-content/uploads/2026/08/faces.png'},
  {name:'Sara Al Marzooqi', role:'QA/QC & Accreditation Lead', img:'https://iaisindia.com/wp-content/uploads/2026/08/faces.png'},
];

const TIMELINE = [
  {y:'2005', t:'IAIS Founded in India', d:'Industrial Analysis & Inspection Services established, serving refineries and process plants across India.'},
  {y:'2011', t:'ISO 17020 Accreditation', d:'Achieved inspection body accreditation, formalising quality across all service lines.'},
  {y:'2015', t:'Regional Expansion Begins', d:'First projects delivered across the GCC for oil & gas and marine clients.'},
  {y:'2019', t:'Drone & Digital Inspection Launched', d:'UAV and digital reporting capability added to complement traditional NDT.'},
  {y:'2022', t:'IAIS UAE Established', d:'Dedicated UAE entity opened in Abu Dhabi to serve the region directly.'},
  {y:'2026', t:'5,000+ Projects Milestone', d:'Crossed 5,000 completed projects across 25+ countries with 150+ engineers.'},
];

const VALUES = [
  {icon:'target', t:'Precision', d:'Every measurement, every report, held to code — no shortcuts.'},
  {icon:'shield', t:'Safety First', d:'HSE discipline built into every access plan and field procedure.'},
  {icon:'compass', t:'Integrity', d:'Honest reporting, even when the finding is inconvenient.'},
  {icon:'users', t:'Partnership', d:'We work as an extension of your maintenance and engineering team.'},
];

const FAQS = [
  {q:'What areas does IAIS UAE cover?', a:'We operate across the UAE and wider GCC, with rapid mobilisation from our Abu Dhabi base to Dubai, Sharjah, Fujairah and offshore sites in the Arabian Gulf.'},
  {q:'How quickly can a crew be mobilised?', a:'Standard NDT and rope access crews can typically be mobilised within 24-48 hours for scheduled work, and faster for emergency call-outs.'},
  {q:'Are your technicians internationally certified?', a:'Yes — our personnel hold ASNT SNT-TC-1A, PCN, IRATA and API certifications, and our inspection body is accredited to ISO 17020.'},
  {q:'Can IAIS UAE support turnarounds and shutdowns?', a:'Absolutely — turnaround support is a core part of our business, with scalable crew sizes and 24/7 shift coverage for planned outages.'},
  {q:'Is IAIS UAE related to IAIS India?', a:'Yes — IAIS UAE is part of the IAIS Group, extending the inspection expertise built at iaisindia.com into the UAE and GCC market.'},
];



