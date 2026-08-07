/* ===========================================
   IAIS UAE - News & Insights Data
   File: assets/js/news-data.js
=========================================== */

const ARTICLES = [

{
id:1,
cat:"NDT",
title:"The Importance of Non-Destructive Testing (NDT) in Industrial Asset Integrity",
img:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
excerpt:"Non-Destructive Testing (NDT) enables engineers to evaluate material integrity without causing damage. Modern inspection techniques improve safety, reduce maintenance costs and extend equipment life.",
date:"06 August 2026",
author:"IAIS UAE Technical Team",
read:"5 min read"
},

{
id:2,
cat:"PWHT",
title:"Why Post Weld Heat Treatment (PWHT) Is Critical for Pressure Equipment",
img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
excerpt:"PWHT reduces residual welding stresses, improves toughness and minimizes cracking risks in pressure vessels, piping systems and structural weldments operating under high temperatures.",
date:"02 August 2026",
author:"Welding Engineering Team",
read:"6 min read"
},

{
id:3,
cat:"Asset Integrity",
title:"Risk-Based Inspection (RBI): Optimizing Inspection Planning",
img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
excerpt:"Risk-Based Inspection helps organizations prioritize inspections based on equipment criticality, improving plant reliability while reducing unnecessary inspection costs.",
date:"28 July 2026",
author:"Integrity Management Team",
read:"7 min read"
},

{
id:4,
cat:"Ultrasonic Testing",
title:"Ultrasonic Thickness Measurement for Corrosion Monitoring",
img:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
excerpt:"Routine ultrasonic thickness measurement identifies wall loss caused by corrosion before equipment reaches minimum allowable thickness limits.",
date:"20 July 2026",
author:"NDT Inspection Team",
read:"4 min read"
},

{
id:5,
cat:"Radiographic Testing",
title:"Radiographic Testing (RT) for Internal Weld Defect Detection",
img:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
excerpt:"Radiographic Testing identifies internal discontinuities such as porosity, slag inclusions and lack of fusion without damaging welded components.",
date:"15 July 2026",
author:"Radiography Division",
read:"6 min read"
},

{
id:6,
cat:"Magnetic Particle Testing",
title:"Detecting Surface Cracks Using Magnetic Particle Inspection",
img:"https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
excerpt:"Magnetic Particle Testing is widely used to locate surface and near-surface discontinuities in ferromagnetic materials during fabrication and maintenance.",
date:"10 July 2026",
author:"Inspection Services",
read:"5 min read"
},

{
id:7,
cat:"Liquid Penetrant Testing",
title:"Liquid Penetrant Testing for Precision Surface Inspection",
img:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
excerpt:"Liquid Penetrant Testing provides an effective method for detecting fine surface-breaking cracks in stainless steel, aluminium and non-ferromagnetic materials.",
date:"05 July 2026",
author:"Quality Assurance Team",
read:"5 min read"
},

{
id:8,
cat:"Engineering",
title:"Shutdown Inspection Planning: Best Practices for Industrial Facilities",
img:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
excerpt:"Proper shutdown planning ensures inspections are completed safely and efficiently while minimizing plant downtime and production losses.",
date:"28 June 2026",
author:"Engineering Division",
read:"7 min read"
},

{
id:9,
cat:"Inspection Standards",
title:"Understanding ASME Section V Requirements for NDT",
img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
excerpt:"ASME Section V establishes internationally recognized requirements for performing ultrasonic, radiographic, magnetic particle and liquid penetrant examinations.",
date:"20 June 2026",
author:"Standards & Compliance Team",
read:"8 min read"
},

{
id:10,
cat:"Oil & Gas",
title:"Corrosion Under Insulation (CUI): One of the Industry's Biggest Challenges",
img:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
excerpt:"Corrosion Under Insulation remains a leading cause of piping failures. Regular inspections and predictive maintenance significantly reduce operational risks.",
date:"12 June 2026",
author:"Asset Integrity Team",
read:"6 min read"
},

{
id:11,
cat:"Company News",
title:"IAIS UAE Expands Inspection & Engineering Services Across the GCC",
img:"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
excerpt:"IAIS UAE continues expanding its NDT, PWHT, engineering and asset integrity services to support Oil & Gas, Petrochemical, Power and Marine industries throughout the GCC.",
date:"05 June 2026",
author:"Corporate Communications",
read:"3 min read"
},

{
id:12,
cat:"Innovation",
title:"Digital Inspection Reporting: Improving Accuracy and Traceability",
img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
excerpt:"Digital inspection reporting improves data quality, enables faster client reporting and provides complete traceability for inspection activities.",
date:"30 May 2026",
author:"Digital Solutions Team",
read:"5 min read"
}

];

/*====================================================
 IAIS UAE NEWS MODULE DATA
 File : assets/js/news-data.js
====================================================*/


/*====================================================
 FAQ
====================================================*/

const FAQS = [

{
q:"What industries does IAIS UAE serve?",
a:"IAIS UAE provides inspection, Non-Destructive Testing (NDT), PWHT, Asset Integrity and Engineering services for Oil & Gas, Petrochemical, Power Generation, Marine, Manufacturing and Infrastructure industries across the GCC."
},

{
q:"Which NDT methods do you provide?",
a:"Our capabilities include Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Visual Testing (VT), Eddy Current Testing (ECT), Positive Material Identification (PMI) and Thickness Measurement."
},

{
q:"Do you provide Post Weld Heat Treatment (PWHT)?",
a:"Yes. IAIS UAE offers controlled Local PWHT services using calibrated equipment in accordance with ASME, API and customer specifications."
},

{
q:"Are your inspection personnel certified?",
a:"Yes. Our inspectors and technicians are qualified and certified in accordance with internationally recognized standards including ASNT, PCN and client-specific requirements."
},

{
q:"Can IAIS UAE support plant shutdowns?",
a:"Yes. We mobilize experienced inspection teams for shutdowns, turnarounds, commissioning, maintenance and emergency inspection activities."
},

{
q:"Do you provide digital inspection reports?",
a:"Yes. Inspection findings are delivered using digital reporting formats with complete traceability, photographs and engineering recommendations."
}

];


/*====================================================
 POPULAR TOPICS
====================================================*/

const TOPICS = [

"Non-Destructive Testing",
"Ultrasonic Testing (UT)",
"Radiographic Testing (RT)",
"Magnetic Particle Testing (MT)",
"Liquid Penetrant Testing (PT)",
"Visual Inspection (VT)",
"Eddy Current Testing",
"Positive Material Identification",
"Corrosion Mapping",
"Thickness Measurement",
"Asset Integrity",
"Risk Based Inspection",
"Remaining Life Assessment",
"Fitness For Service",
"Pressure Vessel Inspection",
"Pipeline Inspection",
"Storage Tank Inspection",
"Welding Inspection",
"Post Weld Heat Treatment",
"ASME Section V",
"API 510",
"API 570",
"API 653",
"ISO 17020"

];


/*====================================================
 DOWNLOAD CENTER
====================================================*/

const DOWNLOADS = [

{
title:"IAIS UAE Company Profile",
type:"PDF",
size:"5.2 MB",
icon:"file",
link:"#",
description:"Corporate profile, capabilities and engineering services."
},

{
title:"NDT Services Brochure",
type:"PDF",
size:"3.8 MB",
icon:"file",
link:"#",
description:"Overview of Ultrasonic, Radiography, MPI, PT and advanced NDT solutions."
},

{
title:"PWHT Services",
type:"PDF",
size:"2.5 MB",
icon:"file",
link:"#",
description:"Local PWHT procedures, equipment and technical specifications."
},

{
title:"Asset Integrity Solutions",
type:"PDF",
size:"4.1 MB",
icon:"file",
link:"#",
description:"Inspection planning, RBI, corrosion monitoring and engineering support."
},

{
title:"Inspection Capability Statement",
type:"PDF",
size:"2.9 MB",
icon:"file",
link:"#",
description:"Inspection manpower, certifications and project experience."
},

{
title:"ISO Certifications",
type:"PDF",
size:"1.7 MB",
icon:"file",
link:"#",
description:"Quality management certifications and compliance documents."
}

];


/*====================================================
 ARTICLE CATEGORIES
====================================================*/

const CATEGORIES = [

"All",

"NDT",

"PWHT",

"Asset Integrity",

"Engineering",

"Inspection Standards",

"Ultrasonic Testing",

"Radiographic Testing",

"Magnetic Particle Testing",

"Liquid Penetrant Testing",

"Oil & Gas",

"Innovation",

"Company News"

];


/*====================================================
 SIDEBAR STATISTICS
====================================================*/

const NEWS_STATS = [

{
label:"Technical Articles",
value:"120+"
},

{
label:"Inspection Projects",
value:"2500+"
},

{
label:"Engineering Experts",
value:"50+"
},

{
label:"Years of Experience",
value:"20+"
}

];


/*====================================================
 FEATURED TAGS
====================================================*/

const FEATURED_TAGS = [

"Trending",

"Engineering",

"Safety",

"NDT",

"Inspection",

"PWHT",

"Oil & Gas",

"Innovation"

];