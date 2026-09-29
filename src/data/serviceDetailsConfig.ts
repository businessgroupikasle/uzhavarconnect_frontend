export interface ServiceVisual {
  title: string;
  image: string;
}

export interface ServiceDetailExtended {
  slug: string;
  title: string;
  image: string;
  overview: string;
  scopeOfWork: string[];
  whyTitle: string;
  whyPoints: string[];
  visualsSubtitle: string;
  visuals: ServiceVisual[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_DETAILS_MAP: Record<string, ServiceDetailExtended> = {
  'land-preparation-and-development': {
    slug: 'land-preparation-and-development',
    title: 'Land Preparation & Development Works',
    image: '/assets/illustrations/land-preparation.png',
    overview: 'Land levelling, ploughing and preparation works planned around your land condition and intended use.',
    scopeOfWork: [
      'Land levelling',
      'Ploughing and soil preparation',
      'Farm groundwork',
      'Site-specific development planning',
    ],
    whyTitle: 'Why prepare your land?',
    whyPoints: [
      'Easier farm setup',
      'Better use of available land',
      'A foundation for plantation and irrigation',
    ],
    visualsSubtitle: '',
    visuals: [
      { title: 'Land levelling', image: '/assets/services/visuals/visual-land-levelling.jpg' },
      { title: 'Ploughing and soil preparation', image: '/assets/services/visuals/visual-ploughing.jpg' },
      { title: 'Prepared field', image: '/assets/services/visuals/visual-prepared-field.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'The scope and estimate depend on land size, site condition and the work required.',
      },
      {
        question: 'What details should I share?',
        answer: 'Share your land size, location/district, existing soil or water condition, and your intended cultivation or plantation plans.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, we frequently combine land preparation with drip irrigation installation, farm layout planning, and tree plantation for a complete turnkey farm setup.',
      },
    ],
  },
  'farm-layout-and-planning': {
    slug: 'farm-layout-and-planning',
    title: 'Farm Layout & Planning',
    image: '/assets/gallery/gallery-land-dev-fencing-work.jpg',
    overview: 'Practical layouts for efficient land use, zoning, internal roads, and water distribution networks.',
    scopeOfWork: [
      'Contour and elevation survey',
      'Internal access road design',
      'Water distribution network layout',
      'Plot boundary & fencing planning',
    ],
    whyTitle: 'Why plan your farm layout?',
    whyPoints: [
      'Prevents costly redesigns later',
      'Maximizes arable land efficiency',
      'Ensures seamless machinery access',
    ],
    visualsSubtitle: 'Examples of farm layout and planning blueprints.',
    visuals: [
      { title: 'Perimeter fencing & boundary planning', image: '/assets/gallery/gallery-land-dev-fencing-work.jpg' },
      { title: 'Farm road & zoning layout', image: '/assets/hero-farm.png' },
      { title: 'Pipeline & block layout', image: '/assets/drip-farm-stage.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Estimates are based on the total acreage, topography complexity, and detailed survey requirements.',
      },
      {
        question: 'What details should I share?',
        answer: 'Provide your survey map/patta copy, borewell locations, and planned crop or livestock activities.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, layout planning pairs perfectly with land leveling, water tank installation, and drip irrigation.',
      },
    ],
  },
  'drip-irrigation-installation': {
    slug: 'drip-irrigation-installation',
    title: 'Drip Irrigation Installation',
    image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg',
    overview: 'Water-efficient micro-irrigation systems designed for crop-specific root zone watering and nutrient delivery.',
    scopeOfWork: [
      'Mainline and sub-main piping',
      'Pressure-compensating drippers',
      'Filter & fertigation venturi setup',
      'Automated valve installation',
    ],
    whyTitle: 'Why install drip irrigation?',
    whyPoints: [
      'Saves up to 60% water',
      'Delivers precise fertilizer nutrition',
      'Boosts crop yield and uniform growth',
    ],
    visualsSubtitle: 'Examples of drip irrigation installation work.',
    visuals: [
      { title: 'Automated solenoid valve manifold', image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg' },
      { title: 'Irrigation head unit setup', image: '/assets/drip-farm-stage.jpg' },
      { title: 'Crop watering in field', image: '/assets/services/service-drip-irrigation.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Costs are determined by acreage, crop spacing, topography, and filtration automation requirements.',
      },
      {
        question: 'What details should I share?',
        answer: 'Share your water source discharge (GPH/litres), electricity phase details, and planned crop types.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, drip installation is typically installed right after land preparation and before sapling planting.',
      },
    ],
  },
  'water-tank-works': {
    slug: 'water-tank-works',
    title: 'Water Tank Works',
    image: '/assets/gallery/gallery-land-dev-circular-tank.jpg',
    overview: 'Farm water storage construction and installation including HDPE geomembrane farm ponds and RCC storage tanks.',
    scopeOfWork: [
      'Pond excavation & levelling',
      'HDPE geomembrane sheet lining',
      'RCC / masonry storage tanks',
      'Pump house & overflow connectivity',
    ],
    whyTitle: 'Why build farm water storage?',
    whyPoints: [
      'Drought-proofs your crops year-round',
      'Harvests seasonal rainwater runoff',
      'Maintains steady hydraulic pressure',
    ],
    visualsSubtitle: 'Examples of farm water storage construction.',
    visuals: [
      { title: 'Excavation & site grading', image: '/assets/services/visuals/visual-land-levelling.jpg' },
      { title: 'Circular RCC farm reservoir', image: '/assets/gallery/gallery-land-dev-circular-tank.jpg' },
      { title: 'Pipeline connection & testing', image: '/assets/drip-farm-stage.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Pricing depends on storage capacity (e.g. 50,000 to 10 lakh litres), material type, and soil excavation depth.',
      },
      {
        question: 'What details should I share?',
        answer: 'Let us know your water requirement, borewell yield, and preferred storage location on the farm.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, water tank works integrate directly with drip irrigation and solar pumping systems.',
      },
    ],
  },
  'all-types-of-tree-plantation': {
    slug: 'all-types-of-tree-plantation',
    title: 'All Types of Tree Plantation',
    image: '/assets/gallery/gallery-plantation-grafted-sapling.jpg',
    overview: 'Fruit, timber and green-belt planting planned around your climate, soil depth, and commercial goals.',
    scopeOfWork: [
      'Pit digging and organic basal mixing',
      'Certified high-yield sapling supply',
      'Systematic planting in grid alignment',
      'Mulching and initial establishment care',
    ],
    whyTitle: 'Why plant high-value trees?',
    whyPoints: [
      'Long-term wealth creation from timber & fruits',
      'Improves soil health and microclimate',
      'Requires minimal daily supervision once established',
    ],
    visualsSubtitle: 'Examples of tree plantation and orchard development.',
    visuals: [
      { title: 'Pit digging & alignment', image: '/assets/illustrations/land-preparation.png' },
      { title: 'Certified grafted sapling supply', image: '/assets/gallery/gallery-plantation-grafted-sapling.jpg' },
      { title: 'Established orchard rows', image: '/assets/services/premium-farm-orchard.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Cost depends on species selected (Teak, Mahogany, Coconut, Guava, Mango), sapling maturity, and pit size.',
      },
      {
        question: 'What details should I share?',
        answer: 'Share your soil type (red, black, clay), water availability, and whether you prefer timber or fruit crops.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, plantation is ideally bundled with drip irrigation and annual maintenance contracts (AMC).',
      },
    ],
  },
  'farm-maintenance-amc': {
    slug: 'farm-maintenance-amc',
    title: 'Farm Maintenance (AMC)',
    image: '/assets/gallery/gallery-land-dev-landscape-path.jpg',
    overview: 'Ongoing and annual care for your farm, protecting plant health and keeping agricultural infrastructure in top condition.',
    scopeOfWork: [
      'Periodic weed clearing and rotavation',
      'Tree pruning and canopy management',
      'Scheduled organic pest & nutrient sprays',
      'Drip system maintenance and line flushing',
    ],
    whyTitle: 'Why opt for annual farm care?',
    whyPoints: [
      'Hands-free management for absentee landowners',
      'Protects your investment through consistent care',
      'Maximizes crop health and harvest yield',
    ],
    visualsSubtitle: 'Examples of ongoing farm maintenance work.',
    visuals: [
      { title: 'Farm landscaping & turf upkeep', image: '/assets/gallery/gallery-land-dev-landscape-path.jpg' },
      { title: 'Drip flush & fertigation', image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg' },
      { title: 'Crop health & soil monitoring', image: '/assets/who-we-are.png' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'AMC packages are based on acreage, tree count, visit frequency (monthly/quarterly), and maintenance scope.',
      },
      {
        question: 'What details should I share?',
        answer: 'Let us know current farm condition, existing crops/trees, and irrigation setup.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, AMC is frequently paired with harvest support and produce buyback.',
      },
    ],
  },
  'harvest-support': {
    slug: 'harvest-support',
    title: 'Harvest Support',
    image: '/assets/services/service-harvest-support.jpg',
    overview: 'Harvesting and post-harvest assistance with skilled farm labor, equipment, grading, and field handling.',
    scopeOfWork: [
      'Experienced harvest crew deployment',
      'Gentle picking and field gathering',
      'On-field grading and sorting',
      'Weighing, crating and dispatch preparation',
    ],
    whyTitle: 'Why choose professional harvest support?',
    whyPoints: [
      'Minimizes harvest losses and crop damage',
      'Ensures timely harvest at peak maturity',
      'Eliminates local labor shortages and delays',
    ],
    visualsSubtitle: 'Examples of field harvesting and post-harvest care.',
    visuals: [
      { title: 'Field harvesting operations', image: '/assets/services/service-harvest-support.jpg' },
      { title: 'Produce sorting & grading', image: '/assets/services/service-buyback.jpg' },
      { title: 'Crating and dispatch loading', image: '/assets/services/service-harvest-support.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Costs are calculated based on harvest volume (tonnage/crates) or per-acre harvesting days required.',
      },
      {
        question: 'What details should I share?',
        answer: 'Inform us about crop type, estimated yield, harvest readiness date, and access road conditions.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, harvest support links seamlessly with buyback assistance and market linkage.',
      },
    ],
  },
  'buyback-assistance': {
    slug: 'buyback-assistance',
    title: 'Buyback Assistance',
    image: '/assets/services/service-buyback.jpg',
    overview: 'Support for produce buyback and market connections, ensuring direct farm-gate access to buyers.',
    scopeOfWork: [
      'Market demand alignment and pricing guidance',
      'Quality testing and standard certification',
      'Buyer contract negotiation',
      'Direct farm-gate pickup logistics',
    ],
    whyTitle: 'Why use buyback assistance?',
    whyPoints: [
      'Guaranteed market connection for your harvest',
      'Eliminates middleman price exploitation',
      'Ensures transparent weighing and prompt payment',
    ],
    visualsSubtitle: 'Examples of produce buyback and market logistics.',
    visuals: [
      { title: 'Produce grading & quality check', image: '/assets/services/service-buyback.jpg' },
      { title: 'Market packaging & crating', image: '/assets/services/visuals/visual-prepared-field.jpg' },
      { title: 'Direct mandi & buyer dispatch', image: '/assets/services/service-buyback.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'We offer performance-based commission or fixed facilitation terms depending on produce category.',
      },
      {
        question: 'What details should I share?',
        answer: 'Share expected harvest date, crop variety, organic or conventional status, and estimated tonnage.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, buyback agreements can be planned right from plantation selection!',
      },
    ],
  },
  'labour-house': {
    slug: 'labour-house',
    title: 'Labour House Construction',
    image: '/assets/gallery/project-3.svg',
    overview: 'Practical accommodation development for farm workers, caretakers, and security staff.',
    scopeOfWork: [
      'Foundation and civil masonry',
      'Pre-fab or brick construction',
      'Basic plumbing and sanitary installation',
      'Wiring and solar light readiness',
    ],
    whyTitle: 'Why build on-site farm quarters?',
    whyPoints: [
      'Ensures 24/7 security and caretaker presence',
      'Durable and weather-proof construction',
      'Economical design optimized for farm budgets',
    ],
    visualsSubtitle: 'Examples of labour quarters construction.',
    visuals: [
      { title: 'Foundation & masonry work', image: '/assets/illustrations/land-preparation.png' },
      { title: 'Roofing & finishing', image: '/assets/services/visuals/visual-prepared-field.jpg' },
      { title: 'Completed caretaker unit', image: '/assets/services/service-water-tank.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Cost is based on square footage, material selection (pre-fab vs RCC/brick), and amenities.',
      },
      {
        question: 'What details should I share?',
        answer: 'Specify number of rooms needed, budget, and power/water availability at the site.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, usually constructed alongside water tanks and fencing.',
      },
    ],
  },
  'farm-house': {
    slug: 'farm-house',
    title: 'Farm House Development',
    image: '/assets/featured-farmhouse.svg',
    overview: 'Farm house development and related support, creating serene country retreats customized to your landscape.',
    scopeOfWork: [
      'Architectural design and 3D elevation',
      'Natural stone, brick, and wood finishes',
      'Landscape integration and patio gardens',
      'Turnkey construction management',
    ],
    whyTitle: 'Why develop a farm retreat?',
    whyPoints: [
      'Comfortable weekend getaway for your family',
      'Increases farmland capital appreciation',
      'Harmonizes with surrounding nature',
    ],
    visualsSubtitle: 'Examples of farmhouse architecture and landscaping.',
    visuals: [
      { title: 'Site orientation & landscape', image: '/assets/who-we-are.png' },
      { title: 'Veranda & country elevation', image: '/assets/hero-farm.png' },
      { title: 'Surrounding farm integration', image: '/assets/services/premium-farm-orchard.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Depends on built-up area (sq ft), structural specification, and luxury interior finishes.',
      },
      {
        question: 'What details should I share?',
        answer: 'Share your land survey, preferred architectural style, and timeline expectations.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'Yes, perfectly paired with full-farm layout planning and orchards.',
      },
    ],
  },
  'end-to-end-farm-management': {
    slug: 'end-to-end-farm-management',
    title: 'End-to-End Farm Management Services',
    image: '/assets/services/premium-farm-orchard.jpg',
    overview: 'One coordinated service, from land preparation to ongoing maintenance and harvest marketing.',
    scopeOfWork: [
      'Single-window farm creation',
      'Agronomist-supervised execution',
      'Precision irrigation & infrastructure setup',
      'Complete crop cycle management to harvest',
    ],
    whyTitle: 'Why choose turnkey farm management?',
    whyPoints: [
      '100% stress-free for non-resident landowners',
      'Single point of accountability for all farm works',
      'Disciplined agronomy for sustained farm profitability',
    ],
    visualsSubtitle: 'Examples of end-to-end farm management.',
    visuals: [
      { title: 'Groundwork & land leveling', image: '/assets/services/visuals/visual-land-levelling.jpg' },
      { title: 'Irrigation & orchard setup', image: '/assets/illustrations/tree-plantation.png' },
      { title: 'Mature productive farmland', image: '/assets/services/premium-farm-orchard.jpg' },
    ],
    faqs: [
      {
        question: 'How is the service cost decided?',
        answer: 'Turnkey plans are phased into development capital expenditure (Capex) and operating management (Opex).',
      },
      {
        question: 'What details should I share?',
        answer: 'Provide your land details, location, water source, and long-term farm vision.',
      },
      {
        question: 'Can I combine this with other services?',
        answer: 'This is the comprehensive package that bundles all our agricultural services!',
      },
    ],
  },
};

export const getServiceDetails = (slug: string): ServiceDetailExtended => {
  if (SERVICE_DETAILS_MAP[slug]) {
    return SERVICE_DETAILS_MAP[slug];
  }
  // Default to land-preparation if unknown slug
  return SERVICE_DETAILS_MAP['land-preparation-and-development'];
};
