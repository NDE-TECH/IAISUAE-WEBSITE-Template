/* ============================================================
   IAIS UAE — CENTRAL SERVICE DATA
   Edit this file when you want to change:
   - service name
   - route
   - category
   - image
   - description
   - tags
   - bullet points
   - SEO data

   services.html and every /services/<slug>/ route read from this file.
   ============================================================ */

const SERVICE_CATEGORIES = [
  {
    "name": "Conventional NDT",
    "icon": "wave",
    "description": "Core surface, volumetric, material verification and condition-assessment techniques for fabrication and in-service assets.",
    "count": 15
  },
  {
    "name": "PWHT & Thermal Treatment",
    "icon": "flame",
    "description": "Controlled preheat, PWHT, stress relieving and furnace heat-treatment solutions for welded and fabricated components.",
    "count": 7
  },
  {
    "name": "Shipping Class Approved Inspection",
    "icon": "ship",
    "description": "Marine and ship inspection capabilities covering hulls, underwater thickness measurement and advanced weld examination.",
    "count": 8
  },
  {
    "name": "IBR Approved Inspection",
    "icon": "bolt",
    "description": "Ultrasonic, magnetic particle, penetrant and PWHT support for boiler and pressure-part inspection scopes.",
    "count": 4
  },
  {
    "name": "IAIS Group Solutions",
    "icon": "layers",
    "description": "Broader IAIS Group capabilities including advanced NDT, API inspection, drones, rope access, shutdowns, pipelines, tanks and specialist services.",
    "count": 30
  }
];

const IAIS_SERVICES = [
  {
    "slug": "conventional-non-destructive-testing",
    "route": "services/conventional-non-destructive-testing/",
    "category": "Conventional NDT",
    "icon": "shield",
    "title": "Conventional Non-Destructive Testing",
    "short": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods.",
    "desc": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "NDT",
      "INSPECTION"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Conventional Non-Destructive Testing UAE | IAIS UAE",
      "description": "Conventional Non-Destructive Testing in the UAE from IAIS UAE. Conventional non-destructive testing for welds, materials and in-service assets using.",
      "canonical": "https://iaisuae.com/services/conventional-non-destructive-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/conventional-non-destructive-testing/"
  },
  {
    "slug": "eddy-current-testing",
    "route": "services/eddy-current-testing/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Eddy Current Testing",
    "short": "Electromagnetic inspection for detecting surface and near-surface discontinuities and assessing conductive components without damaging the item.",
    "desc": "Electromagnetic inspection for detecting surface and near-surface discontinuities and assessing conductive components without damaging the item. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "ECT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Eddy Current Testing UAE | IAIS UAE",
      "description": "Eddy Current Testing in the UAE from IAIS UAE. Electromagnetic inspection for detecting surface and near-surface discontinuities and assessing.",
      "canonical": "https://iaisuae.com/services/eddy-current-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/eddy-current-testing/"
  },
  {
    "slug": "ferrite-testing",
    "route": "services/ferrite-testing/",
    "category": "Conventional NDT",
    "icon": "micro",
    "title": "Ferrite Testing",
    "short": "Ferrite-content measurement for stainless, duplex and welded materials where ferrite level is part of fabrication or quality requirements.",
    "desc": "Ferrite-content measurement for stainless, duplex and welded materials where ferrite level is part of fabrication or quality requirements. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2026/08/Metallurgy-services-scaled-1.jpeg",
    "tags": [
      "FERRITE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Ferrite Testing UAE | IAIS UAE",
      "description": "Ferrite Testing in the UAE from IAIS UAE. Ferrite-content measurement for stainless, duplex and welded materials where ferrite level is part of.",
      "canonical": "https://iaisuae.com/services/ferrite-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/ferrite-testing/"
  },
  {
    "slug": "hardness-testing",
    "route": "services/hardness-testing/",
    "category": "Conventional NDT",
    "icon": "scale",
    "title": "Hardness Testing",
    "short": "Material hardness verification for welds, heat-affected zones and components before or after fabrication, heat treatment or service.",
    "desc": "Material hardness verification for welds, heat-affected zones and components before or after fabrication, heat treatment or service. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2026/08/Metallurgy-services-scaled-1.jpeg",
    "tags": [
      "HARDNESS"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Hardness Testing UAE | IAIS UAE",
      "description": "Hardness Testing in the UAE from IAIS UAE. Material hardness verification for welds, heat-affected zones and components before or after fabrication.",
      "canonical": "https://iaisuae.com/services/hardness-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/hardness-testing/"
  },
  {
    "slug": "heat-treatment-services",
    "route": "services/heat-treatment-services/",
    "category": "Conventional NDT",
    "icon": "flame",
    "title": "Heat Treatment Services (Local & Stress Relieving)",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "Heat Treatment Services (Local & Stress Reliev UAE | IAIS UAE",
      "description": "Heat Treatment Services (Local & Stress Relieving) in the UAE from IAIS UAE. Controlled thermal treatment for welded or fabricated components using.",
      "canonical": "https://iaisuae.com/services/heat-treatment-services/"
    },
    "reference": "https://pwhtsolutions.com/conventional/heat-treatment-services-local-stress-relieve/"
  },
  {
    "slug": "holiday-inspection",
    "route": "services/holiday-inspection/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Holiday Inspection",
    "short": "Coating holiday inspection for locating pinholes, voids and discontinuities that can reduce the protection provided by an applied coating.",
    "desc": "Coating holiday inspection for locating pinholes, voids and discontinuities that can reduce the protection provided by an applied coating. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "NDT",
      "INSPECTION"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Holiday Inspection UAE | IAIS UAE",
      "description": "Holiday Inspection in the UAE from IAIS UAE. Coating holiday inspection for locating pinholes, voids and discontinuities that can reduce the.",
      "canonical": "https://iaisuae.com/services/holiday-inspection/"
    },
    "reference": "https://pwhtsolutions.com/conventional/hoilday-inspection/"
  },
  {
    "slug": "leak-testing",
    "route": "services/leak-testing/",
    "category": "Conventional NDT",
    "icon": "shield",
    "title": "Leak Testing (LT)",
    "short": "Leak-testing support for verifying containment integrity of joints, systems, vessels and fabricated assemblies using a method suited to the required sensitivity.",
    "desc": "Leak-testing support for verifying containment integrity of joints, systems, vessels and fabricated assemblies using a method suited to the required sensitivity. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "NDT",
      "INSPECTION"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Leak Testing (LT) UAE | IAIS UAE",
      "description": "Leak Testing (LT) in the UAE from IAIS UAE. Leak-testing support for verifying containment integrity of joints, systems, vessels and fabricated.",
      "canonical": "https://iaisuae.com/services/leak-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/leak-testing-lt/"
  },
  {
    "slug": "liquid-penetrant-testing",
    "route": "services/liquid-penetrant-testing/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Liquid Penetrant Testing",
    "short": "Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous metallic and non-metallic materials.",
    "desc": "Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous metallic and non-metallic materials. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "PT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Liquid Penetrant Testing UAE | IAIS UAE",
      "description": "Liquid Penetrant Testing in the UAE from IAIS UAE. Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous.",
      "canonical": "https://iaisuae.com/services/liquid-penetrant-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/liquid-penetrant-testing/"
  },
  {
    "slug": "magnetic-particle-testing",
    "route": "services/magnetic-particle-testing/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Magnetic Particle Testing",
    "short": "Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and structural components.",
    "desc": "Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and structural components. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "MT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Magnetic Particle Testing UAE | IAIS UAE",
      "description": "Magnetic Particle Testing in the UAE from IAIS UAE. Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and.",
      "canonical": "https://iaisuae.com/services/magnetic-particle-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/magnetic-particle-testing/"
  },
  {
    "slug": "positive-material-identification",
    "route": "services/positive-material-identification/",
    "category": "Conventional NDT",
    "icon": "micro",
    "title": "Positive Material Identification (PMI)",
    "short": "Positive Material Identification for verifying alloy chemistry and reducing material mix-up risk during fabrication, maintenance and commissioning.",
    "desc": "Positive Material Identification for verifying alloy chemistry and reducing material mix-up risk during fabrication, maintenance and commissioning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2026/08/Metallurgy-services-scaled-1.jpeg",
    "tags": [
      "PMI"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Positive Material Identification (PMI) UAE | IAIS UAE",
      "description": "Positive Material Identification (PMI) in the UAE from IAIS UAE. Positive Material Identification for verifying alloy chemistry and reducing material.",
      "canonical": "https://iaisuae.com/services/positive-material-identification/"
    },
    "reference": "https://pwhtsolutions.com/conventional/positive-material-identification-pmi/"
  },
  {
    "slug": "radiography-testing",
    "route": "services/radiography-testing/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Radiography Testing",
    "short": "Volumetric radiographic examination of welds and components where internal discontinuities must be evaluated through image-based inspection.",
    "desc": "Volumetric radiographic examination of welds and components where internal discontinuities must be evaluated through image-based inspection. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "RT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Radiography Testing UAE | IAIS UAE",
      "description": "Radiography Testing in the UAE from IAIS UAE. Volumetric radiographic examination of welds and components where internal discontinuities must be.",
      "canonical": "https://iaisuae.com/services/radiography-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/radiography-testing/"
  },
  {
    "slug": "ultrasonic-thickness-gauging",
    "route": "services/ultrasonic-thickness-gauging/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Ultrasonic Thickness Gauging",
    "short": "Ultrasonic thickness measurement for monitoring remaining wall thickness, corrosion and erosion without cutting or damaging the inspected component.",
    "desc": "Ultrasonic thickness measurement for monitoring remaining wall thickness, corrosion and erosion without cutting or damaging the inspected component. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "UT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Ultrasonic Thickness Gauging UAE | IAIS UAE",
      "description": "Ultrasonic Thickness Gauging in the UAE from IAIS UAE. Ultrasonic thickness measurement for monitoring remaining wall thickness, corrosion and erosion.",
      "canonical": "https://iaisuae.com/services/ultrasonic-thickness-gauging/"
    },
    "reference": "https://pwhtsolutions.com/conventional/ultrasonic-thickness-gauging/"
  },
  {
    "slug": "ultrasonic-weld-scan",
    "route": "services/ultrasonic-weld-scan/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Ultrasonic Weld Scan",
    "short": "Ultrasonic weld examination for locating and evaluating internal reflectors in welded joints using suitable straight-beam and angle-beam techniques.",
    "desc": "Ultrasonic weld examination for locating and evaluating internal reflectors in welded joints using suitable straight-beam and angle-beam techniques. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "UT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Ultrasonic Weld Scan UAE | IAIS UAE",
      "description": "Ultrasonic Weld Scan in the UAE from IAIS UAE. Ultrasonic weld examination for locating and evaluating internal reflectors in welded joints using.",
      "canonical": "https://iaisuae.com/services/ultrasonic-weld-scan/"
    },
    "reference": "https://pwhtsolutions.com/conventional/ultrasonic-weld-scan/"
  },
  {
    "slug": "vacuum-box-testing",
    "route": "services/vacuum-box-testing/",
    "category": "Conventional NDT",
    "icon": "shield",
    "title": "Vacuum Box Testing",
    "short": "Localized leak detection for selected weld seams and plate joints using a controlled vacuum box and indicating solution.",
    "desc": "Localized leak detection for selected weld seams and plate joints using a controlled vacuum box and indicating solution. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "NDT",
      "INSPECTION"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Vacuum Box Testing UAE | IAIS UAE",
      "description": "Vacuum Box Testing in the UAE from IAIS UAE. Localized leak detection for selected weld seams and plate joints using a controlled vacuum box and.",
      "canonical": "https://iaisuae.com/services/vacuum-box-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/vacuum-box-testing/"
  },
  {
    "slug": "visual-testing",
    "route": "services/visual-testing/",
    "category": "Conventional NDT",
    "icon": "wave",
    "title": "Visual Testing (VT)",
    "short": "Direct or remote visual examination for identifying visible weld conditions, corrosion, deformation, damage and surface anomalies.",
    "desc": "Direct or remote visual examination for identifying visible weld conditions, corrosion, deformation, damage and surface anomalies. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "VT"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Visual Testing (VT) UAE | IAIS UAE",
      "description": "Visual Testing (VT) in the UAE from IAIS UAE. Direct or remote visual examination for identifying visible weld conditions, corrosion, deformation.",
      "canonical": "https://iaisuae.com/services/visual-testing/"
    },
    "reference": "https://pwhtsolutions.com/conventional/visual-testing-vt/"
  },
  {
    "slug": "electrical-pre-heat-and-pwht-of-piping",
    "route": "services/electrical-pre-heat-and-pwht-of-piping/",
    "category": "PWHT & Thermal Treatment",
    "icon": "flame",
    "title": "Electrical Pre-Heat and PWHT of Piping",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "PWHT",
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "PWHT of Piping UAE | IAIS UAE",
      "description": "Electrical Pre-Heat and PWHT of Piping in the UAE from IAIS UAE. Controlled thermal treatment for welded or fabricated components using monitored.",
      "canonical": "https://iaisuae.com/services/electrical-pre-heat-and-pwht-of-piping/"
    },
    "reference": "https://pwhtsolutions.com/pwht/electrical-pre-heat-and-pwht-of-piping/"
  },
  {
    "slug": "electrical-pre-heat-and-pwht-of-pressure-vessels",
    "route": "services/electrical-pre-heat-and-pwht-of-pressure-vessels/",
    "category": "PWHT & Thermal Treatment",
    "icon": "flame",
    "title": "Electrical Pre-heat and PWHT of Pressure Vessels",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "PWHT",
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "PWHT of Pressure Vessels UAE | IAIS UAE",
      "description": "Electrical Pre-heat and PWHT of Pressure Vessels in the UAE from IAIS UAE. Controlled thermal treatment for welded or fabricated components using.",
      "canonical": "https://iaisuae.com/services/electrical-pre-heat-and-pwht-of-pressure-vessels/"
    },
    "reference": "https://pwhtsolutions.com/pwht/electrical-pre-heat-and-pwht-of-pressure-vessels/"
  },
  {
    "slug": "electrical-heating-of-structural-steel-for-expansion",
    "route": "services/electrical-heating-of-structural-steel-for-expansion/",
    "category": "PWHT & Thermal Treatment",
    "icon": "shield",
    "title": "Electrical heating of structural steel for expansion",
    "short": "Electrical heating of structural steel for expansion support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Electrical heating of structural steel for expansion support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "THERMAL"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Electrical heating of structural steel for exp UAE | IAIS UAE",
      "description": "Electrical heating of structural steel for expansion in the UAE from IAIS UAE. Electrical heating of structural steel for expansion support for.",
      "canonical": "https://iaisuae.com/services/electrical-heating-of-structural-steel-for-expansion/"
    },
    "reference": "https://pwhtsolutions.com/pwht/electrical-heating-of-structural-steel-for-expansion/"
  },
  {
    "slug": "gas-and-oil-combustion-heating-pwht-for-pressure-vessels",
    "route": "services/gas-and-oil-combustion-heating-pwht-for-pressure-vessels/",
    "category": "PWHT & Thermal Treatment",
    "icon": "flame",
    "title": "Gas and oil Combustion heating PWHT for Pressure Vessels",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "PWHT",
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "Combustion Heating PWHT for Pressure Vessels UAE | IAIS UAE",
      "description": "Gas and oil Combustion heating PWHT for Pressure Vessels in the UAE from IAIS UAE. Controlled thermal treatment for welded or fabricated components.",
      "canonical": "https://iaisuae.com/services/gas-and-oil-combustion-heating-pwht-for-pressure-vessels/"
    },
    "reference": "https://pwhtsolutions.com/pwht/gas-and-oil-combustion-heating-pwht-for-pressure-vessels/"
  },
  {
    "slug": "gas-and-oil-combustion-heating-of-welded-fabrications-in-portable-furnaces",
    "route": "services/gas-and-oil-combustion-heating-of-welded-fabrications-in-portable-furnaces/",
    "category": "PWHT & Thermal Treatment",
    "icon": "flame",
    "title": "Gas and oil Combustion heating of welded fabrications in Portable Furnaces",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "Combustion Heating of welded fabrications in P UAE | IAIS UAE",
      "description": "Gas and oil Combustion heating of welded fabrications in Portable Furnaces in the UAE from IAIS UAE. Controlled thermal treatment for welded or.",
      "canonical": "https://iaisuae.com/services/gas-and-oil-combustion-heating-of-welded-fabrications-in-portable-furnaces/"
    },
    "reference": "https://pwhtsolutions.com/pwht/gas-and-oil-combustion-heating-of-welded-fabrications-in-portable-furnaces/"
  },
  {
    "slug": "gas-and-oil-combustion-heating-of-welded-fabrications-in-permanent-furnaces",
    "route": "services/gas-and-oil-combustion-heating-of-welded-fabrications-in-permanent-furnaces/",
    "category": "PWHT & Thermal Treatment",
    "icon": "flame",
    "title": "Gas and oil Combustion heating of welded fabrications in Permanent Furnaces",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "Combustion Heating of welded fabrications in P UAE | IAIS UAE",
      "description": "Gas and oil Combustion heating of welded fabrications in Permanent Furnaces in the UAE from IAIS UAE. Controlled thermal treatment for welded or.",
      "canonical": "https://iaisuae.com/services/gas-and-oil-combustion-heating-of-welded-fabrications-in-permanent-furnaces/"
    },
    "reference": "https://pwhtsolutions.com/pwht/gas-and-oil-combustion-heating-of-welded-fabrications-in-permanent-furnaces/"
  },
  {
    "slug": "steel-heat-treatment-of-specialty-welded-components-in-a-portable-furnace",
    "route": "services/steel-heat-treatment-of-specialty-welded-components-in-a-portable-furnace/",
    "category": "PWHT & Thermal Treatment",
    "icon": "flame",
    "title": "Steel heat treatment of specialty welded components in a Portable Furnace",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "Steel heat treatment of specialty welded compo UAE | IAIS UAE",
      "description": "Steel heat treatment of specialty welded components in a Portable Furnace in the UAE from IAIS UAE. Controlled thermal treatment for welded or.",
      "canonical": "https://iaisuae.com/services/steel-heat-treatment-of-specialty-welded-components-in-a-portable-furnace/"
    },
    "reference": "https://pwhtsolutions.com/pwht/steel-heat-treatment-of-specialty-welded-components-in-a-portable-furnace/"
  },
  {
    "slug": "shipping-class-approved-ship-hull-inspection-services",
    "route": "services/shipping-class-approved-ship-hull-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Ship Hull Inspection Services",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Ship Hull Inspection UAE | IAIS UAE",
      "description": "Shipping Class Approved Ship Hull Inspection Services in the UAE from IAIS UAE. Marine inspection support for hulls, tanks, structures and submerged.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-ship-hull-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-ship-hull-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-underwater-thickness-gauge-inspection-services",
    "route": "services/shipping-class-approved-underwater-thickness-gauge-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Underwater Thickness Gauge Inspection Services",
    "short": "Ultrasonic thickness measurement for monitoring remaining wall thickness, corrosion and erosion without cutting or damaging the inspected component.",
    "desc": "Ultrasonic thickness measurement for monitoring remaining wall thickness, corrosion and erosion without cutting or damaging the inspected component. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "UNDERWATER",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Underwater Thickness Gauge Insp UAE | IAIS UAE",
      "description": "Shipping Class Approved Underwater Thickness Gauge Inspection Services in the UAE from IAIS UAE. Ultrasonic thickness measurement for monitoring.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-underwater-thickness-gauge-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-underwater-thickness-gauge-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-ultrasonic-inspection-services",
    "route": "services/shipping-class-approved-ultrasonic-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Ultrasonic Inspection Services",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "UT",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Ultrasonic Inspection UAE | IAIS UAE",
      "description": "Shipping Class Approved Ultrasonic Inspection Services in the UAE from IAIS UAE. Marine inspection support for hulls, tanks, structures and submerged.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-ultrasonic-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-ultrasonic-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-magnetic-particle-inspection-services",
    "route": "services/shipping-class-approved-magnetic-particle-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Magnetic Particle Inspection Services",
    "short": "Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and structural components.",
    "desc": "Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and structural components. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "MT",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Magnetic Particle Inspection UAE | IAIS UAE",
      "description": "Shipping Class Approved Magnetic Particle Inspection Services in the UAE from IAIS UAE. Surface and near-surface crack detection for ferromagnetic.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-magnetic-particle-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-magnetic-particle-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-liquid-penetrant-inspection-services",
    "route": "services/shipping-class-approved-liquid-penetrant-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Liquid Penetrant Inspection Services",
    "short": "Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous metallic and non-metallic materials.",
    "desc": "Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous metallic and non-metallic materials. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "PT",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Liquid Penetrant Inspection UAE | IAIS UAE",
      "description": "Shipping Class Approved Liquid Penetrant Inspection Services in the UAE from IAIS UAE. Surface examination for revealing fine surface-breaking.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-liquid-penetrant-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-liquid-penetrant-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-radiography-testing-inspection-services",
    "route": "services/shipping-class-approved-radiography-testing-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Radiography Testing Inspection Services",
    "short": "Volumetric radiographic examination of welds and components where internal discontinuities must be evaluated through image-based inspection.",
    "desc": "Volumetric radiographic examination of welds and components where internal discontinuities must be evaluated through image-based inspection. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "RT",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Radiography Testing Inspection UAE | IAIS UAE",
      "description": "Shipping Class Approved Radiography Testing Inspection Services in the UAE from IAIS UAE. Volumetric radiographic examination of welds and components.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-radiography-testing-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-radiography-testing-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-time-of-flight-diffraction-inspection-services",
    "route": "services/shipping-class-approved-time-of-flight-diffraction-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Time Of Flight Diffraction (TOFD) Inspection Services",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "TOFD",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Time Of Flight Diffraction (TOF UAE | IAIS UAE",
      "description": "Shipping Class Approved Time Of Flight Diffraction (TOFD) Inspection Services in the UAE from IAIS UAE. Marine inspection support for hulls, tanks.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-time-of-flight-diffraction-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-time-of-flight-diffraction-tofd-inspection-services/"
  },
  {
    "slug": "shipping-class-approved-phased-array-ultrasonic-testing-inspection-services",
    "route": "services/shipping-class-approved-phased-array-ultrasonic-testing-inspection-services/",
    "category": "Shipping Class Approved Inspection",
    "icon": "ship",
    "title": "Shipping Class Approved Phased Array Ultrasonic Testing (PAUT) Inspection Services",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "PAUT",
      "UT",
      "CLASS"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Class-Approved Phased Array Ultrasonic Testing UAE | IAIS UAE",
      "description": "Shipping Class Approved Phased Array Ultrasonic Testing (PAUT) Inspection Services in the UAE from IAIS UAE. Marine inspection support for hulls.",
      "canonical": "https://iaisuae.com/services/shipping-class-approved-phased-array-ultrasonic-testing-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/irinspection/ir-class-approved-phased-array-ultrasonic-testing-paut-inspection-services/"
  },
  {
    "slug": "ibr-approved-ultrasonic-inspection-services",
    "route": "services/ibr-approved-ultrasonic-inspection-services/",
    "category": "IBR Approved Inspection",
    "icon": "bolt",
    "title": "IBR Approved Ultrasonic Inspection Services",
    "short": "Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment practices for project and statutory documentation.",
    "desc": "Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment practices for project and statutory documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "UT",
      "IBR"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Boilers",
      "Steam piping",
      "Pressure parts",
      "Power-plant maintenance"
    ],
    "seo": {
      "title": "IBR Approved Ultrasonic Inspection UAE | IAIS UAE",
      "description": "IBR Approved Ultrasonic Inspection Services in the UAE from IAIS UAE. Inspection support for boiler, steam and pressure-part work using controlled NDT.",
      "canonical": "https://iaisuae.com/services/ibr-approved-ultrasonic-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/ibrinspection/ibr-approved-ultrasonic-inspection-services/"
  },
  {
    "slug": "ibr-approved-magnetic-particle-inspection-services",
    "route": "services/ibr-approved-magnetic-particle-inspection-services/",
    "category": "IBR Approved Inspection",
    "icon": "bolt",
    "title": "IBR Approved Magnetic Particle Inspection Services",
    "short": "Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and structural components.",
    "desc": "Surface and near-surface crack detection for ferromagnetic welds, forgings, castings and structural components. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "MT",
      "IBR"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Boilers",
      "Steam piping",
      "Pressure parts",
      "Power-plant maintenance"
    ],
    "seo": {
      "title": "IBR Approved Magnetic Particle Inspection UAE | IAIS UAE",
      "description": "IBR Approved Magnetic Particle Inspection Services in the UAE from IAIS UAE. Surface and near-surface crack detection for ferromagnetic welds.",
      "canonical": "https://iaisuae.com/services/ibr-approved-magnetic-particle-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/ibrinspection/ibr-approved-magnetic-particle-inspection-services/"
  },
  {
    "slug": "ibr-approved-liquid-penetrant-inspection-services",
    "route": "services/ibr-approved-liquid-penetrant-inspection-services/",
    "category": "IBR Approved Inspection",
    "icon": "bolt",
    "title": "IBR Approved Liquid Penetrant Inspection Services",
    "short": "Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous metallic and non-metallic materials.",
    "desc": "Surface examination for revealing fine surface-breaking discontinuities in suitable non-porous metallic and non-metallic materials. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "PT",
      "IBR"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Boilers",
      "Steam piping",
      "Pressure parts",
      "Power-plant maintenance"
    ],
    "seo": {
      "title": "IBR Approved Liquid Penetrant Inspection UAE | IAIS UAE",
      "description": "IBR Approved Liquid Penetrant Inspection Services in the UAE from IAIS UAE. Surface examination for revealing fine surface-breaking discontinuities in.",
      "canonical": "https://iaisuae.com/services/ibr-approved-liquid-penetrant-inspection-services/"
    },
    "reference": "https://pwhtsolutions.com/ibrinspection/ibr-liquid-penetrant-inspection-services/"
  },
  {
    "slug": "ibr-approved-post-weld-heat-treatment-services",
    "route": "services/ibr-approved-post-weld-heat-treatment-services/",
    "category": "IBR Approved Inspection",
    "icon": "flame",
    "title": "IBR Approved Post Weld Heat Treatment Services",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "IBR",
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "IBR Approved PWHT Services UAE | IAIS UAE",
      "description": "IBR Approved Post Weld Heat Treatment Services in the UAE from IAIS UAE. Controlled thermal treatment for welded or fabricated components using.",
      "canonical": "https://iaisuae.com/services/ibr-approved-post-weld-heat-treatment-services/"
    },
    "reference": "https://pwhtsolutions.com/ibrinspection/ibr-approved-post-weld-heat-treatment-services/"
  },
  {
    "slug": "advanced-ndt",
    "route": "services/advanced-ndt/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Advanced NDT",
    "short": "Advanced NDT for complex welds and critical assets using encoded and higher-resolution inspection methods where conventional coverage needs to be extended.",
    "desc": "Advanced NDT for complex welds and critical assets using encoded and higher-resolution inspection methods where conventional coverage needs to be extended. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Advanced NDT UAE | IAIS UAE",
      "description": "Advanced NDT in the UAE from IAIS UAE. Advanced NDT for complex welds and critical assets using encoded and higher-resolution inspection methods where.",
      "canonical": "https://iaisuae.com/services/advanced-ndt/"
    },
    "reference": "https://iaisindia.com/solution/advanced-ndt/"
  },
  {
    "slug": "aerospace-inspection",
    "route": "services/aerospace-inspection/",
    "category": "IAIS Group Solutions",
    "icon": "compass",
    "title": "Aerospace Inspection",
    "short": "Aerospace Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Aerospace Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Aerospace Inspection UAE | IAIS UAE",
      "description": "Aerospace Inspection in the UAE from IAIS UAE. Aerospace Inspection support for industrial projects in the UAE and GCC, delivered as a defined field.",
      "canonical": "https://iaisuae.com/services/aerospace-inspection/"
    },
    "reference": "https://iaisindia.com/solution/aerospace-inspection/"
  },
  {
    "slug": "api-inspection",
    "route": "services/api-inspection/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "API Inspection",
    "short": "API Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "API Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "API"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "API Inspection UAE | IAIS UAE",
      "description": "API Inspection in the UAE from IAIS UAE. API Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or.",
      "canonical": "https://iaisuae.com/services/api-inspection/"
    },
    "reference": "https://iaisindia.com/solution/api-inspection/"
  },
  {
    "slug": "boiler-inspection",
    "route": "services/boiler-inspection/",
    "category": "IAIS Group Solutions",
    "icon": "bolt",
    "title": "Boiler inspection",
    "short": "Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment practices for project and statutory documentation.",
    "desc": "Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment practices for project and statutory documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Boilers",
      "Steam piping",
      "Pressure parts",
      "Power-plant maintenance"
    ],
    "seo": {
      "title": "Boiler inspection UAE | IAIS UAE",
      "description": "Boiler inspection in the UAE from IAIS UAE. Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment.",
      "canonical": "https://iaisuae.com/services/boiler-inspection/"
    },
    "reference": "https://iaisindia.com/solution/boiler-inspection/"
  },
  {
    "slug": "calibration-services",
    "route": "services/calibration-services/",
    "category": "IAIS Group Solutions",
    "icon": "target",
    "title": "Calibration services",
    "short": "Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment practices for project and statutory documentation.",
    "desc": "Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment practices for project and statutory documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2026/08/Metallurgy-services-scaled-1.jpeg",
    "tags": [
      "IBR"
    ],
    "points": [
      "Defined assessment or verification scope",
      "Controlled equipment or personnel checks",
      "Traceable records",
      "Support for quality and competence systems"
    ],
    "applications": [
      "Boilers",
      "Steam piping",
      "Pressure parts",
      "Power-plant maintenance"
    ],
    "seo": {
      "title": "Calibration services UAE | IAIS UAE",
      "description": "Calibration services in the UAE from IAIS UAE. Inspection support for boiler, steam and pressure-part work using controlled NDT or heat-treatment.",
      "canonical": "https://iaisuae.com/services/calibration-services/"
    },
    "reference": "https://iaisindia.com/solution/calibration-services/"
  },
  {
    "slug": "civil-inspection-and-maintenance",
    "route": "services/civil-inspection-and-maintenance/",
    "category": "IAIS Group Solutions",
    "icon": "building",
    "title": "Civil Inspection and Maintenance",
    "short": "Civil Inspection and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Civil Inspection and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Civil Inspection and Maintenance UAE | IAIS UAE",
      "description": "Civil Inspection and Maintenance in the UAE from IAIS UAE. Civil Inspection and Maintenance support for industrial projects in the UAE and GCC.",
      "canonical": "https://iaisuae.com/services/civil-inspection-and-maintenance/"
    },
    "reference": "https://iaisindia.com/solution/civil-inspection-and-maintenance/"
  },
  {
    "slug": "condition-monitoring",
    "route": "services/condition-monitoring/",
    "category": "IAIS Group Solutions",
    "icon": "chart",
    "title": "Condition Monitoring",
    "short": "Condition-monitoring support for tracking equipment health, degradation trends and maintenance priorities using repeatable inspection and measurement data.",
    "desc": "Condition-monitoring support for tracking equipment health, degradation trends and maintenance priorities using repeatable inspection and measurement data. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Condition Monitoring UAE | IAIS UAE",
      "description": "Condition Monitoring in the UAE from IAIS UAE. Condition-monitoring support for tracking equipment health, degradation trends and maintenance.",
      "canonical": "https://iaisuae.com/services/condition-monitoring/"
    },
    "reference": "https://iaisindia.com/solution/condition-monitoring/"
  },
  {
    "slug": "conventional-ndt",
    "route": "services/conventional-ndt/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Conventional NDT",
    "short": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods.",
    "desc": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Conventional NDT UAE | IAIS UAE",
      "description": "Conventional NDT in the UAE from IAIS UAE. Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and.",
      "canonical": "https://iaisuae.com/services/conventional-ndt/"
    },
    "reference": "https://iaisindia.com/solution/conventional-ndt/"
  },
  {
    "slug": "heat-treatment-services-iais-group-solutio",
    "route": "services/heat-treatment-services-iais-group-solutio/",
    "category": "IAIS Group Solutions",
    "icon": "flame",
    "title": "Heat Treatment Services",
    "short": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records.",
    "desc": "Controlled thermal treatment for welded or fabricated components using monitored heating, soaking and cooling cycles with traceable temperature records. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/09/Our-team-performing-PWHT-of-Large-Impeller-at-Howden-India..jpg",
    "tags": [
      "THERMAL"
    ],
    "points": [
      "Controlled heating and cooling sequence",
      "Thermocouple placement and temperature monitoring",
      "Soak-temperature control and thermal-cycle recording",
      "Project documentation for QA/QC and engineering review"
    ],
    "applications": [
      "Pressure piping",
      "Pressure vessels",
      "Fabricated assemblies",
      "Repair and shutdown welds"
    ],
    "seo": {
      "title": "Heat Treatment Services UAE | IAIS UAE",
      "description": "Heat Treatment Services in the UAE from IAIS UAE. Controlled thermal treatment for welded or fabricated components using monitored heating, soaking.",
      "canonical": "https://iaisuae.com/services/heat-treatment-services-iais-group-solutio/"
    },
    "reference": "https://iaisindia.com/solution/heat-treatment-services/"
  },
  {
    "slug": "in-services-inspections",
    "route": "services/in-services-inspections/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "In-Services Inspections",
    "short": "In-Services Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "In-Services Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "In-Services Inspections UAE | IAIS UAE",
      "description": "In-Services Inspections in the UAE from IAIS UAE. In-Services Inspections support for industrial projects in the UAE and GCC, delivered as a defined.",
      "canonical": "https://iaisuae.com/services/in-services-inspections/"
    },
    "reference": "https://iaisindia.com/solution/in-services-inspections/"
  },
  {
    "slug": "indoor-drone-inspections-and-surveys",
    "route": "services/indoor-drone-inspections-and-surveys/",
    "category": "IAIS Group Solutions",
    "icon": "drone",
    "title": "Indoor Drone Inspections & Surveys",
    "short": "Remote visual inspection using UAV technology for elevated, enclosed or difficult-access industrial assets where high-resolution imagery supports condition assessment.",
    "desc": "Remote visual inspection using UAV technology for elevated, enclosed or difficult-access industrial assets where high-resolution imagery supports condition assessment. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "UAV"
    ],
    "points": [
      "Remote visual data capture",
      "High-resolution inspection imagery",
      "Thermal or mapping options where required",
      "Digital defect documentation"
    ],
    "applications": [
      "Flare stacks",
      "Tank roofs",
      "Indoor industrial spaces",
      "Offshore and renewable assets"
    ],
    "seo": {
      "title": "Indoor Drone Inspections & Surveys UAE | IAIS UAE",
      "description": "Indoor Drone Inspections & Surveys in the UAE from IAIS UAE. Remote visual inspection using UAV technology for elevated, enclosed or difficult-access.",
      "canonical": "https://iaisuae.com/services/indoor-drone-inspections-and-surveys/"
    },
    "reference": "https://iaisindia.com/solution/indoor-drone-inspections-surveys/"
  },
  {
    "slug": "iso-ndt-services",
    "route": "services/iso-ndt-services/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "ISO NDT SERVICES",
    "short": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods.",
    "desc": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "ISO NDT SERVICES UAE | IAIS UAE",
      "description": "ISO NDT SERVICES in the UAE from IAIS UAE. Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and.",
      "canonical": "https://iaisuae.com/services/iso-ndt-services/"
    },
    "reference": "https://iaisindia.com/solution/iso-ndt-services/"
  },
  {
    "slug": "lifting-gear-inspection",
    "route": "services/lifting-gear-inspection/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Lifting Gear Inspection",
    "short": "Lifting Gear Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Lifting Gear Inspection support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Lifting Gear Inspection UAE | IAIS UAE",
      "description": "Lifting Gear Inspection in the UAE from IAIS UAE. Lifting Gear Inspection support for industrial projects in the UAE and GCC, delivered as a defined.",
      "canonical": "https://iaisuae.com/services/lifting-gear-inspection/"
    },
    "reference": "https://iaisindia.com/solution/ship-hull-inspection/"
  },
  {
    "slug": "marine-and-offshore-inspections",
    "route": "services/marine-and-offshore-inspections/",
    "category": "IAIS Group Solutions",
    "icon": "ship",
    "title": "Marine & Offshore Inspections",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Marine & Offshore Inspections UAE | IAIS UAE",
      "description": "Marine & Offshore Inspections in the UAE from IAIS UAE. Marine inspection support for hulls, tanks, structures and submerged components with condition.",
      "canonical": "https://iaisuae.com/services/marine-and-offshore-inspections/"
    },
    "reference": "https://iaisindia.com/solution/marine-offshore-inspections/"
  },
  {
    "slug": "metalurgical-services",
    "route": "services/metalurgical-services/",
    "category": "IAIS Group Solutions",
    "icon": "shield",
    "title": "Metalurgical Services",
    "short": "Metalurgical Services support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Metalurgical Services support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Metalurgical Services UAE | IAIS UAE",
      "description": "Metalurgical Services in the UAE from IAIS UAE. Metalurgical Services support for industrial projects in the UAE and GCC, delivered as a defined field.",
      "canonical": "https://iaisuae.com/services/metalurgical-services/"
    },
    "reference": "https://iaisindia.com/solution/metalurgical-services/"
  },
  {
    "slug": "ndt-equipment-rental-overseas",
    "route": "services/ndt-equipment-rental-overseas/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "NDT Equipment Rental-Overseas",
    "short": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods.",
    "desc": "Conventional non-destructive testing for welds, materials and in-service assets using suitable surface and volumetric inspection methods. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "NDT Equipment Rental-Overseas UAE | IAIS UAE",
      "description": "NDT Equipment Rental-Overseas in the UAE from IAIS UAE. Conventional non-destructive testing for welds, materials and in-service assets using suitable.",
      "canonical": "https://iaisuae.com/services/ndt-equipment-rental-overseas/"
    },
    "reference": "https://iaisindia.com/solution/ndt-equipment-rental-overseas/"
  },
  {
    "slug": "oil-and-gas-inspection-and-maintenance",
    "route": "services/oil-and-gas-inspection-and-maintenance/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Oil and Gas Inspection and Maintenance",
    "short": "Oil and Gas Inspection and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Oil and Gas Inspection and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Oil and Gas Inspection and Maintenance UAE | IAIS UAE",
      "description": "Oil and Gas Inspection and Maintenance in the UAE from IAIS UAE. Oil and Gas Inspection and Maintenance support for industrial projects in the UAE and.",
      "canonical": "https://iaisuae.com/services/oil-and-gas-inspection-and-maintenance/"
    },
    "reference": "https://iaisindia.com/solution/oil-and-gas-inspection-and-maintenance/"
  },
  {
    "slug": "outdoor-drone-inspections-and-surveys",
    "route": "services/outdoor-drone-inspections-and-surveys/",
    "category": "IAIS Group Solutions",
    "icon": "drone",
    "title": "Outdoor Drone Inspections & Surveys",
    "short": "Remote visual inspection using UAV technology for elevated, enclosed or difficult-access industrial assets where high-resolution imagery supports condition assessment.",
    "desc": "Remote visual inspection using UAV technology for elevated, enclosed or difficult-access industrial assets where high-resolution imagery supports condition assessment. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "UAV"
    ],
    "points": [
      "Remote visual data capture",
      "High-resolution inspection imagery",
      "Thermal or mapping options where required",
      "Digital defect documentation"
    ],
    "applications": [
      "Flare stacks",
      "Tank roofs",
      "Indoor industrial spaces",
      "Offshore and renewable assets"
    ],
    "seo": {
      "title": "Outdoor Drone Inspections & Surveys UAE | IAIS UAE",
      "description": "Outdoor Drone Inspections & Surveys in the UAE from IAIS UAE. Remote visual inspection using UAV technology for elevated, enclosed or difficult-access.",
      "canonical": "https://iaisuae.com/services/outdoor-drone-inspections-and-surveys/"
    },
    "reference": "https://iaisindia.com/solution/outdoor-drone-inspections-surveys/"
  },
  {
    "slug": "pipeline-integrity-inspection-services",
    "route": "services/pipeline-integrity-inspection-services/",
    "category": "IAIS Group Solutions",
    "icon": "chart",
    "title": "Pipeline Integrity Inspection Services",
    "short": "Pipeline integrity inspection support for corrosion, wall loss, weld condition and maintenance planning across operating and project assets.",
    "desc": "Pipeline integrity inspection support for corrosion, wall loss, weld condition and maintenance planning across operating and project assets. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Process pipelines",
      "Cross-country pipelines",
      "Terminal piping",
      "Pipeline repairs"
    ],
    "seo": {
      "title": "Pipeline Integrity Inspection UAE | IAIS UAE",
      "description": "Pipeline Integrity Inspection Services in the UAE from IAIS UAE. Pipeline integrity inspection support for corrosion, wall loss, weld condition and.",
      "canonical": "https://iaisuae.com/services/pipeline-integrity-inspection-services/"
    },
    "reference": "https://iaisindia.com/solution/pipeline-integrity-inspection-services/"
  },
  {
    "slug": "proficiency-assessment",
    "route": "services/proficiency-assessment/",
    "category": "IAIS Group Solutions",
    "icon": "shield",
    "title": "Proficiency Assessment",
    "short": "Proficiency Assessment support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Proficiency Assessment support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2026/08/Metallurgy-services-scaled-1.jpeg",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Defined assessment or verification scope",
      "Controlled equipment or personnel checks",
      "Traceable records",
      "Support for quality and competence systems"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Proficiency Assessment UAE | IAIS UAE",
      "description": "Proficiency Assessment in the UAE from IAIS UAE. Proficiency Assessment support for industrial projects in the UAE and GCC, delivered as a defined.",
      "canonical": "https://iaisuae.com/services/proficiency-assessment/"
    },
    "reference": "https://iaisindia.com/solution/proficiency-assessment/"
  },
  {
    "slug": "rig-inspections",
    "route": "services/rig-inspections/",
    "category": "IAIS Group Solutions",
    "icon": "rig",
    "title": "Rig Inspections",
    "short": "Rig Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Rig Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2026/08/Holstein_at_Dusk-1-scaled.jpg",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Rig Inspections UAE | IAIS UAE",
      "description": "Rig Inspections in the UAE from IAIS UAE. Rig Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or.",
      "canonical": "https://iaisuae.com/services/rig-inspections/"
    },
    "reference": "https://iaisindia.com/solution/rig-inspections/"
  },
  {
    "slug": "rope-access-inspection-and-maintenance",
    "route": "services/rope-access-inspection-and-maintenance/",
    "category": "IAIS Group Solutions",
    "icon": "rope",
    "title": "Rope Access inspection and maintenance",
    "short": "Rope-access inspection and maintenance support for elevated and difficult-to-reach industrial structures while reducing dependence on conventional scaffolding.",
    "desc": "Rope-access inspection and maintenance support for elevated and difficult-to-reach industrial structures while reducing dependence on conventional scaffolding. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2023/03/ONE-OF-OUR-IRATA-APPROVED-ROPE-CREW-PERFORMING-NDT-INSPECTION-@-NIPPON-STEEL-HAZIRA-SURAT-INDIA-IN-GAS-HOLDER..jpeg",
    "tags": [
      "ROPE ACCESS"
    ],
    "points": [
      "Difficult-access inspection support",
      "Reduced scaffolding dependency",
      "Combined access and NDT scopes",
      "Task planning and controlled field execution"
    ],
    "applications": [
      "Flare stacks",
      "Tank shells",
      "Offshore structures",
      "Elevated industrial assets"
    ],
    "seo": {
      "title": "Rope Access inspection and maintenance UAE | IAIS UAE",
      "description": "Rope Access inspection and maintenance in the UAE from IAIS UAE. Rope-access inspection and maintenance support for elevated and difficult-to-reach.",
      "canonical": "https://iaisuae.com/services/rope-access-inspection-and-maintenance/"
    },
    "reference": "https://iaisindia.com/solution/rope-access-inspection-and-maintenance/"
  },
  {
    "slug": "ship-hull-survey",
    "route": "services/ship-hull-survey/",
    "category": "IAIS Group Solutions",
    "icon": "ship",
    "title": "Ship Hull Survey",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Ship Hull Survey UAE | IAIS UAE",
      "description": "Ship Hull Survey in the UAE from IAIS UAE. Marine inspection support for hulls, tanks, structures and submerged components with condition data.",
      "canonical": "https://iaisuae.com/services/ship-hull-survey/"
    },
    "reference": "https://iaisindia.com/solution/ship-hull-survey/"
  },
  {
    "slug": "ship-tank-calibration",
    "route": "services/ship-tank-calibration/",
    "category": "IAIS Group Solutions",
    "icon": "ship",
    "title": "Ship Tank Calibration",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "IBR"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Ship Tank Calibration UAE | IAIS UAE",
      "description": "Ship Tank Calibration in the UAE from IAIS UAE. Marine inspection support for hulls, tanks, structures and submerged components with condition data.",
      "canonical": "https://iaisuae.com/services/ship-tank-calibration/"
    },
    "reference": "https://iaisindia.com/solution/tank-calibration/"
  },
  {
    "slug": "shutdown-and-turnaround-services",
    "route": "services/shutdown-and-turnaround-services/",
    "category": "IAIS Group Solutions",
    "icon": "shield",
    "title": "Shutdown and Turnaround Services",
    "short": "Shutdown and Turnaround Services support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Shutdown and Turnaround Services support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Shutdown and Turnaround Services UAE | IAIS UAE",
      "description": "Shutdown and Turnaround Services in the UAE from IAIS UAE. Shutdown and Turnaround Services support for industrial projects in the UAE and GCC.",
      "canonical": "https://iaisuae.com/services/shutdown-and-turnaround-services/"
    },
    "reference": "https://iaisindia.com/solution/shutdown-and-turnaround-services/"
  },
  {
    "slug": "tank-inspection-and-maintenance",
    "route": "services/tank-inspection-and-maintenance/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Tank Inspection and Maintenance",
    "short": "Tank Inspection and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Tank Inspection and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Tank Inspection and Maintenance UAE | IAIS UAE",
      "description": "Tank Inspection and Maintenance in the UAE from IAIS UAE. Tank Inspection and Maintenance support for industrial projects in the UAE and GCC.",
      "canonical": "https://iaisuae.com/services/tank-inspection-and-maintenance/"
    },
    "reference": "https://iaisindia.com/solution/tank-inspection/"
  },
  {
    "slug": "third-party-inspection",
    "route": "services/third-party-inspection/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Third Party inspection",
    "short": "Independent third-party inspection support for vendor, fabrication, construction and project quality activities with traceable reporting.",
    "desc": "Independent third-party inspection support for vendor, fabrication, construction and project quality activities with traceable reporting. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Third Party inspection UAE | IAIS UAE",
      "description": "Third Party inspection in the UAE from IAIS UAE. Independent third-party inspection support for vendor, fabrication, construction and project quality.",
      "canonical": "https://iaisuae.com/services/third-party-inspection/"
    },
    "reference": "https://iaisindia.com/solution/third-party-inspection/"
  },
  {
    "slug": "tube-inspections",
    "route": "services/tube-inspections/",
    "category": "IAIS Group Solutions",
    "icon": "wave",
    "title": "Tube Inspections",
    "short": "Tube Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Tube Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Tube Inspections UAE | IAIS UAE",
      "description": "Tube Inspections in the UAE from IAIS UAE. Tube Inspections support for industrial projects in the UAE and GCC, delivered as a defined field or.",
      "canonical": "https://iaisuae.com/services/tube-inspections/"
    },
    "reference": "https://iaisindia.com/solution/tube-inspections/"
  },
  {
    "slug": "underwater-inspections-and-maintenance",
    "route": "services/underwater-inspections-and-maintenance/",
    "category": "IAIS Group Solutions",
    "icon": "ship",
    "title": "Underwater Inspections and Maintenance",
    "short": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning.",
    "desc": "Marine inspection support for hulls, tanks, structures and submerged components with condition data suitable for maintenance and survey planning. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://iaisindia.com/wp-content/uploads/2022/06/Marine-NDT-Inspection-and-UTM-Survey-Company-11.jpeg",
    "tags": [
      "UNDERWATER"
    ],
    "points": [
      "Visual and NDT condition assessment",
      "Thickness or structural survey where applicable",
      "Inspection of difficult-access marine areas",
      "Traceable findings for owner and maintenance review"
    ],
    "applications": [
      "Ship hulls and tanks",
      "Marine structural steel",
      "Shipyard repair work",
      "Offshore and submerged assets"
    ],
    "seo": {
      "title": "Underwater Inspections and Maintenance UAE | IAIS UAE",
      "description": "Underwater Inspections and Maintenance in the UAE from IAIS UAE. Marine inspection support for hulls, tanks, structures and submerged components with.",
      "canonical": "https://iaisuae.com/services/underwater-inspections-and-maintenance/"
    },
    "reference": "https://iaisindia.com/solution/underwater-inspections-and-maintenance/"
  },
  {
    "slug": "wind-turbine-inspections-and-maintenance",
    "route": "services/wind-turbine-inspections-and-maintenance/",
    "category": "IAIS Group Solutions",
    "icon": "leaf",
    "title": "Wind Turbine Inspections and Maintenance",
    "short": "Wind Turbine Inspections and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation.",
    "desc": "Wind Turbine Inspections and Maintenance support for industrial projects in the UAE and GCC, delivered as a defined field or engineering scope with traceable inspection documentation. IAIS UAE can integrate this service into fabrication inspection, plant maintenance, shutdown, integrity and project-quality scopes. The final inspection method, coverage, equipment and reporting format are confirmed against the actual asset and client requirement. For UAE and GCC projects, this service can also be coordinated with complementary NDT, access, thermal-treatment, materials or engineering support where a multi-discipline scope is required.",
    "img": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop",
    "tags": [
      "INSPECTION",
      "IAIS UAE"
    ],
    "points": [
      "Review of the asset and inspection objective",
      "Selection of the suitable inspection technique",
      "Controlled field execution by qualified personnel",
      "Traceable inspection records and reporting"
    ],
    "applications": [
      "Fabrication and weld inspection",
      "Shutdown and turnaround work",
      "Operating industrial assets",
      "QA/QC and maintenance programmes"
    ],
    "seo": {
      "title": "Wind Turbine Inspections and Maintenance UAE | IAIS UAE",
      "description": "Wind Turbine Inspections and Maintenance in the UAE from IAIS UAE. Wind Turbine Inspections and Maintenance support for industrial projects in the UAE.",
      "canonical": "https://iaisuae.com/services/wind-turbine-inspections-and-maintenance/"
    },
    "reference": "https://iaisindia.com/solution/wind-turbine-inspections-and-maintenance/"
  }
];

function getIAISService(slug) {
  return IAIS_SERVICES.find(service => service.slug === slug);
}

function getIAISServicesByCategory(category) {
  return category === 'All'
    ? IAIS_SERVICES
    : IAIS_SERVICES.filter(service => service.category === category);
}
