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
    overview: 'Uzhavar Connect provides comprehensive, professional land preparation and site development services across Tamil Nadu. Proper groundwork is the foundational pillar of any successful agricultural venture. Whether transforming barren land, clearing overgrown scrub vegetation, or preparing fields for high-density fruit orchards, our team utilizes heavy-duty machinery—including laser land levelers, heavy rotavators, disc harrows, and JCB excavators. We carefully analyze soil depth, natural drainage slopes, and elevation contours to ensure your soil structure, water retention, and root penetration are optimized right from day one.',
    scopeOfWork: [
      'Comprehensive site clearing, removal of deep-rooted weeds, bushes, and rocks',
      'Precision laser land leveling for uniform flood & drip water distribution',
      'Deep subsoil ripping and primary disc ploughing to break hard pans',
      'Secondary tillage with rotavators for fine soil tilth & aeration',
      'Contour bunding and natural rainwater drainage channel formation',
      'Organic soil enrichment with basal farmyard manure (FYM) & bio-fertilizers',
      'Field boundary marking and cadastral land survey alignment'
    ],
    whyTitle: 'Why professional land preparation matters for your farm:',
    whyPoints: [
      'Prevents waterlogging and ensures uniform water distribution across every plot',
      'Promotes deep root penetration and healthy mycorrhizal soil biology',
      'Saves up to 35% in labor and diesel costs during subsequent farming operations',
      'Eliminates trial-and-error mistakes for non-resident and absentee farmland owners',
      'Creates a long-lasting structural foundation for drip irrigation & high-density orchards'
    ],
    visualsSubtitle: 'On-ground field images of our land development machinery and finished plots.',
    visuals: [
      { title: 'Laser Land Levelling & Grading', image: '/assets/services/visuals/visual-land-levelling.jpg' },
      { title: 'Tractor Ploughing & Rotavator Tillage', image: '/assets/services/visuals/visual-ploughing.jpg' },
      { title: 'Fully Prepared & Aerated Field', image: '/assets/services/visuals/visual-prepared-field.jpg' },
    ],
    faqs: [
      {
        question: 'How is the land development cost estimated by Uzhavar Connect?',
        answer: 'Costs are calculated based on acreage size, soil density (clay vs red soil vs rocky terrain), degree of weed/bush growth, and machine hours required (Tractor / JCB / Laser Leveler).'
      },
      {
        question: 'What details should I provide before requesting a site visit?',
        answer: 'Please share your land location/district, total acreage, current land condition (barren, rocky, overgrown), borewell availability, and your target crop or tree plantation plan.'
      },
      {
        question: 'Can land preparation be bundled with drip irrigation and tree planting?',
        answer: 'Yes! Uzhavar Connect specializes in turnkey end-to-end farm setup. We seamlessly transition from land levelling directly into farm layout design, drip installation, and sapling planting.'
      },
      {
        question: 'How long does land preparation take for a 5-acre farmland?',
        answer: 'Typically, a 5-acre farmland preparation takes 2 to 4 working days depending on initial land vegetation, soil hardness, and weather conditions.'
      }
    ],
  },

  'farm-layout-and-planning': {
    slug: 'farm-layout-and-planning',
    title: 'Farm Layout & Planning',
    image: '/assets/services/farm-layout-planning.jpg',
    overview: 'Scientific farm layout and spatial planning is essential for maximizing farmland productivity, resource management, and accessibility. At Uzhavar Connect, our experienced agronomists and land survey engineers design tailored architectural master blueprints for agricultural properties. We integrate elevation contours, internal tractor access roads, plot block divisions, borewell placement, HDPE farm ponds, drip mainlines, and boundary security fencing. Our designs are engineered specifically for absentee landowners, NRI farm investors, and progressive farmers across South India.',
    scopeOfWork: [
      'Drone aerial survey, contour mapping, and boundary demarcation',
      'Internal access road design (12ft to 18ft tractor and harvest truck pathways)',
      'Crop block zoning based on soil depth, sunlight orientation, and micro-climates',
      'Strategic positioning of borewells, sumps, solar pump sets, and farm quarters',
      'Perimeter security planning: concrete post barbed wire, chainlink, or bio-fencing',
      'Water pipeline distribution grid and zone manifold layout design',
      'Phased investment roadmap tailored for commercial returns and aesthetics'
    ],
    whyTitle: 'Why invest in a scientific farm layout plan?',
    whyPoints: [
      'Eliminates expensive trial-and-error construction mistakes',
      'Ensures seamless machinery and harvest vehicle access to every single plot',
      'Maximizes net cultivable acreage while safeguarding natural water runoff channels',
      'Enhances long-term property valuation and aesthetic farm appeal',
      'Provides crystal-clear execution guidelines for project managers and labor teams'
    ],
    visualsSubtitle: 'Sample blueprints, boundary plans, and aerial farm design maps.',
    visuals: [
      { title: 'Perimeter Fencing & Boundary Markings', image: '/assets/gallery/gallery-land-dev-fencing-work.jpg' },
      { title: 'Farm Road & Crop Block Zoning Plan', image: '/assets/hero-farm.png' },
      { title: 'Irrigation Pipeline & Hydro-Station Layout', image: '/assets/drip-farm-stage.jpg' },
    ],
    faqs: [
      {
        question: 'What is included in the Farm Layout Blueprint deliverable?',
        answer: 'You receive a high-resolution master site map with precise measurements for internal roads, crop block sizes, pipeline routes, borewell positioning, fence lines, and elevation contours.'
      },
      {
        question: 'Do you conduct on-site land surveys in Tamil Nadu?',
        answer: 'Yes, our engineering team visits your property in person to conduct GPS/Total Station surveys, elevation mapping, and soil sample collection.'
      },
      {
        question: 'Can I request custom placement for farmhouses or solar structures?',
        answer: 'Absolutely. We customize every blueprint to incorporate your personal farm house preferences, solar panel structures, livestock sheds, and rainwater storage tanks.'
      }
    ],
  },

  'drip-irrigation-installation': {
    slug: 'drip-irrigation-installation',
    title: 'Drip Irrigation Installation',
    image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg',
    overview: 'Uzhavar Connect delivers state-of-the-art micro-irrigation and precision fertigation systems designed for crop-specific root zone hydration. Water scarcity is a critical challenge in modern agriculture; our drip irrigation solutions save up to 60% of irrigation water while delivering soluble nutrients straight to plant roots. We utilize ISI-certified heavy-duty HDPE mainlines, pressure-compensating inline drippers, disc & screen filter assemblies, automatic solenoid valves, and venturi fertigation systems to ensure maximum yield with minimal labor.',
    scopeOfWork: [
      'Hydraulic calculation and crop-specific emitter discharge designing (2LPH/4LPH)',
      'Trenching and laying of heavy-duty HDPE mainline and PVC sub-main pipes',
      'Installation of inline / online pressure compensating (PC) drip lateral lines',
      'Head-unit assembly: Sand, Disc, or Screen filtration systems with pressure gauges',
      'Venturi injector / fertilizer tank setup for uniform fertigation dosing',
      'Automation setup: Solenoid valves and digital/GSM mobile controller options',
      'System testing, pressure balancing, and line-flushing demonstration'
    ],
    whyTitle: 'Why drip irrigation is indispensable for modern farming:',
    whyPoints: [
      'Saves up to 60% water compared to conventional flood irrigation methods',
      'Prevents weed growth in un-irrigated row spaces, cutting weed management costs',
      'Delivers liquid fertilizers directly to roots, improving nutrient uptake by 40%',
      'Allows reliable irrigation on uneven terrain and sandy/porous soils',
      'Enables automated smartphone-controlled watering schedules for absentee owners'
    ],
    visualsSubtitle: 'Photos of our 4-zone solenoid manifolds, filtration units, and drip laterals.',
    visuals: [
      { title: '4-Zone Automated Solenoid Manifold', image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg' },
      { title: 'Head Unit Filtration & Venturi Setup', image: '/assets/drip-farm-stage.jpg' },
      { title: 'In-Field Drip Lateral Root Zone Hydration', image: '/assets/services/service-drip-irrigation.jpg' },
    ],
    faqs: [
      {
        question: 'Does Uzhavar Connect assist with government drip irrigation subsidies?',
        answer: 'Yes, we provide necessary technical estimates, invoice documentation, and coordination required for state horticulture drip subsidy applications.'
      },
      {
        question: 'How do I choose between online and inline drip laterals?',
        answer: 'Inline drip (emitters molded inside pipe) is ideal for close-spaced row crops and closely spaced trees. Online drip (punch drippers) is preferred for wide-spaced timber or fruit trees.'
      },
      {
        question: 'Can I control the drip irrigation system remotely from my mobile phone?',
        answer: 'Yes, we offer GSM-based smart controllers that allow you to start/stop pumps, switch zones, and receive electricity alerts via mobile SMS or app.'
      }
    ],
  },

  'water-tank-works': {
    slug: 'water-tank-works',
    title: 'Water Tank & Farm Pond Works',
    image: '/assets/gallery/gallery-land-dev-circular-tank.jpg',
    overview: 'Uninterrupted water availability is the lifeline of any successful farm. UzhavarConnect constructs durable agricultural water storage systems including RCC circular storage tanks, masonry sumps, and high-density polyethylene (HDPE) geomembrane farm ponds. Our water storage structures harvest rainwater runoff during monsoon seasons and store borewell yield, safeguarding your crops against acute summer droughts and power fluctuations.',
    scopeOfWork: [
      'Site elevation selection and hydraulic gravity-flow design',
      'Earthwork excavation and side-slope compaction for farm ponds',
      'High-grade 500/750/1000 micron UV-stabilized HDPE geomembrane lining',
      'Circular RCC / reinforced masonry storage tank construction',
      'Borewell inlet connection, overflow bypass, and drain valve assembly',
      'Pump house platform construction and suction piping installation',
      'Safety fencing around open water storage reservoirs'
    ],
    whyTitle: 'Why every farm needs dedicated water storage:',
    whyPoints: [
      'Drought-proofs your crops during peak summer months and dry spells',
      'Allows high-volume rapid irrigation without relying on low borewell flow',
      'Harvests millions of liters of free rainwater surface runoff during monsoons',
      'Provides reliable water pressure for automated multi-zone drip manifolds',
      'Increases groundwater recharge and farm ecosystem sustainability'
    ],
    visualsSubtitle: 'Recent RCC circular tanks and lined farm pond installations.',
    visuals: [
      { title: 'Excavation & Slope Grading', image: '/assets/services/visuals/visual-land-levelling.jpg' },
      { title: 'Reinforced Circular RCC Water Tank', image: '/assets/gallery/gallery-land-dev-circular-tank.jpg' },
      { title: 'High-Capacity HDPE Farm Pond', image: '/assets/drip-farm-stage.jpg' },
    ],
    faqs: [
      {
        question: 'What capacity water tank or pond is recommended for 5 acres?',
        answer: 'Typically, a 1-lakh to 3-lakh liter storage capacity provides a 15-to-30 day water backup for 5 acres under drip irrigation during peak summer.'
      },
      {
        question: 'What is the lifespan of HDPE geomembrane farm pond lining?',
        answer: 'We use premium UV-stabilized 500+ micron virgin HDPE sheets with an operational lifespan of 10 to 15 years.'
      }
    ],
  },

  'all-types-of-tree-plantation': {
    slug: 'all-types-of-tree-plantation',
    title: 'All Types of Tree Plantation',
    image: '/assets/gallery/gallery-plantation-grafted-sapling.jpg',
    overview: 'Uzhavar Connect provides end-to-end commercial tree plantation services, specializing in high-value timber, commercial fruit orchards, and dense bio-fencing greenbelts across Tamil Nadu. We supply certified, disease-resistant grafted saplings from trusted government-recognized nurseries. Our agronomists carefully analyze your regional climate, soil pH, and water availability to select optimal species such as Mahogany, Teak, Red Sanders, Coconut, Guava, Mango, Amla, and Avocado.',
    scopeOfWork: [
      'Soil sample testing and crop-suitability recommendation report',
      'Precision pit digging (3x3ft or 2x2ft) with JCB / tractor post-hole auger',
      'Basal pit filling with vermicompost, neem cake, FYM, and bio-fungicides',
      'Procurement and transport of premium certified grafted/tissue-culture saplings',
      'Systematic grid alignment planting with bamboo staking support',
      'Initial root-zone drenching and mulching for rapid sapling establishment',
      'Drip lateral extension and individual emitter positioning'
    ],
    whyTitle: 'Why commercial tree plantation is a lucrative investment:',
    whyPoints: [
      'Generates long-term multi-crore capital wealth through valuable timber & fruits',
      'Improves micro-climate, soil organic carbon, and natural water retention',
      'Requires minimal daily labor compared to intensive annual vegetable crops',
      'Ideal hands-free investment strategy for absentee landowners and NRI investors',
      'Protects land from unauthorized encroachments while establishing green boundaries'
    ],
    visualsSubtitle: 'Images of our sapling supply, pit preparation, and established orchards.',
    visuals: [
      { title: 'Mechanized Pit Digging & Alignment', image: '/assets/illustrations/land-preparation.png' },
      { title: 'Certified Grafted Saplings Ready for Planting', image: '/assets/gallery/gallery-plantation-grafted-sapling.jpg' },
      { title: 'Thriving Commercial Fruit Orchard', image: '/assets/services/premium-farm-orchard.jpg' },
    ],
    faqs: [
      {
        question: 'Which tree species offer the best ROI for absentee landowners?',
        answer: 'Mahogany, Teak, Red Sanders, Coconut, and Hybrid Guava/Mango offer excellent long-term capital appreciation with low daily maintenance requirements.'
      },
      {
        question: 'What size saplings does Uzhavar Connect supply?',
        answer: 'We supply sturdy 1.5-year to 3-year-old mature grafted/bagged saplings (3ft to 6ft height) to ensure 95%+ field survival rates.'
      }
    ],
  },

  'farm-maintenance-amc': {
    slug: 'farm-maintenance-amc',
    title: 'Farm Maintenance (AMC)',
    image: '/assets/gallery/gallery-land-dev-landscape-path.jpg',
    overview: 'Uzhavar Connect offers comprehensive Annual Maintenance Contract (AMC) packages tailored for non-resident farmland owners, busy professionals, and commercial orchard investors. Maintaining a farm remotely can be challenging. Our dedicated mobile farm maintenance teams visit your property on a structured monthly or bi-weekly schedule to carry out mechanical inter-cultivation, weed management, canopy pruning, organic pest sprays, drip line flushing, and soil fertilization.',
    scopeOfWork: [
      'Periodic mechanical de-weeding and tractor rotavation between tree rows',
      'Canopy management, structural pruning, and deadwood removal for maximum sunlight',
      'Scheduled organic/biopesticide sprays and micro-nutrient foliar application',
      'Drip irrigation line flushing, filter cleaning, and emitter unclogging',
      'Soil bund repair, basin clearing, and organic mulching around root zones',
      'Fence inspection, gate maintenance, and security check',
      'Monthly geo-tagged digital photo & video progress reports delivered to your phone'
    ],
    whyTitle: 'Why non-resident owners choose Uzhavar Connect AMC:',
    whyPoints: [
      '100% stress-free farm ownership with zero daily supervision required',
      'Protects your financial investment through timely disease control and watering',
      'Eliminates dependence on un-reliable local farm labor',
      'Provides full transparency with detailed monthly photo/video updates',
      'Ensures continuous tree growth and early fruit bearing'
    ],
    visualsSubtitle: 'Operational photos of our maintenance teams and inter-crop rotavation.',
    visuals: [
      { title: 'Pathway & Landscape Upkeep', image: '/assets/gallery/gallery-land-dev-landscape-path.jpg' },
      { title: 'Drip Line Maintenance & Filter Flushing', image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg' },
      { title: 'Field Crop Inspection & Soil Testing', image: '/assets/who-we-are.png' },
    ],
    faqs: [
      {
        question: 'How are AMC charges structured?',
        answer: 'AMC fees are based on total acreage, tree count, location, and preferred visit frequency (monthly or bi-weekly).'
      },
      {
        question: 'How do I monitor my farm if I live far away or abroad?',
        answer: 'Our field supervisors upload high-resolution photos, drone video clips, and maintenance checklists to WhatsApp after every scheduled visit.'
      }
    ],
  },

  'harvest-support': {
    slug: 'harvest-support',
    title: 'Harvest Support Services',
    image: '/assets/services/service-harvest-support.jpg',
    overview: 'Uzhavar Connect provides efficient harvesting and post-harvest management services to minimize crop damage and maximize farm-gate returns. Finding skilled seasonal labor during peak harvest time is one of the biggest challenges for farmers. We deploy trained agricultural labor crews equipped with modern harvesting tools, fruit pickers, grading tables, and weighing scales to ensure your harvest is completed swiftly at peak crop maturity.',
    scopeOfWork: [
      'Deployment of experienced, trained harvest labor crews',
      'Gentle fruit picking, crop cutting, and field aggregation',
      'On-field sorting, size grading, and quality categorization',
      'Standardized crate packaging, bag stitching, and weighing',
      'Farm-gate truck loading and dispatch preparation',
      'Post-harvest crop residue clearing and field cleanup'
    ],
    whyTitle: 'Why choose professional harvest support:',
    whyPoints: [
      'Prevents crop spoilage and financial loss from harvesting delays',
      'Ensures proper size sorting for higher market selling prices',
      'Eliminates peak-season local labor shortages and wage inflation',
      'Minimizes physical damage and bruising during harvesting',
      'Streamlines direct transfer from farm to buyer trucks'
    ],
    visualsSubtitle: 'Field harvesting operations and sorting/grading in progress.',
    visuals: [
      { title: 'Field Harvesting Operations', image: '/assets/services/service-harvest-support.jpg' },
      { title: 'On-Field Quality Sorting & Grading', image: '/assets/services/service-buyback.jpg' },
      { title: 'Crating & Truck Loading', image: '/assets/services/service-harvest-support.jpg' },
    ],
    faqs: [
      {
        question: 'How is harvest support billed?',
        answer: 'Harvesting services can be billed per-tonnage harvested, per-crate packed, or on a daily crew rate.'
      }
    ],
  },

  'buyback-assistance': {
    slug: 'buyback-assistance',
    title: 'Buyback Assistance & Market Linkage',
    image: '/assets/services/service-buyback.jpg',
    overview: 'Uzhavar Connect connects farmers directly with wholesale agricultural buyers, food processors, timber merchants, and exporters across South India. Securing fair market prices without middleman exploitation is vital for profitable farming. Through our buyback facilitation network, we assist in establishing pre-harvest agreements for timber crops (Mahogany, Teak) and commercial fruit produce (Guava, Coconut, Mango, Lemon), ensuring transparent weighing and direct payment to your bank account.',
    scopeOfWork: [
      'Pre-harvest buyer matching and demand alignment',
      'Crop quality inspection and grade certification',
      'Contract pricing agreement negotiation',
      'Direct farm-gate pickup logistics and transport coordination',
      'Transparent digital weighing at farm gate',
      'Prompt, secure financial settlement'
    ],
    whyTitle: 'Why use Uzhavar Connect buyback assistance:',
    whyPoints: [
      'Guarantees a ready market buyer for your harvest',
      'Eliminates middleman price cuts and commissions',
      'Ensures honest, accurate weighing at your farm site',
      'Saves transport hassle by organizing direct farm-gate loading',
      'Provides pricing clarity right from crop planting stage'
    ],
    visualsSubtitle: 'Market packaging, quality checks, and buyer loading.',
    visuals: [
      { title: 'Quality Check & Produce Inspection', image: '/assets/services/service-buyback.jpg' },
      { title: 'Standardized Market Packaging', image: '/assets/services/visuals/visual-prepared-field.jpg' },
      { title: 'Direct Buyer Farm-Gate Transport', image: '/assets/services/service-buyback.jpg' },
    ],
    faqs: [
      {
        question: 'When should I sign up for buyback assistance?',
        answer: 'For long-term timber crops (Mahogany/Teak), buyback agreements are executed during planting. For fruit and seasonal crops, sign-up is recommended 30 days prior to expected harvest.'
      }
    ],
  },

  'labour-house': {
    slug: 'labour-house',
    title: 'Labour House Construction',
    image: '/assets/gallery/project-3.svg',
    overview: 'Uzhavar Connect builds durable, cost-effective on-site farm worker quarters, caretaker houses, and tool rooms. Having resident caretakers or farm workers on site is crucial for security, livestock management, and daily irrigation operations. We construct durable brick/block masonry or quick pre-fabricated units complete with basic plumbing, electrical wiring, and solar lighting integration.',
    scopeOfWork: [
      'Site elevation selection and foundation earthwork',
      'Solid concrete block / red brick masonry wall construction',
      'Weather-proof sheet roofing or RCC roof slab construction',
      'Basic bathroom, sanitary, and septic tank plumbing',
      'Electrical wiring and solar light readiness',
      'Secure metal doors and window installation'
    ],
    whyTitle: 'Why construct farm quarters on your property:',
    whyPoints: [
      'Ensures 24/7 on-site caretaker presence and crop security',
      'Provides comfortable living conditions for farm labor',
      'Protects valuable tools, pumps, and fertilizers from theft',
      'Increases overall property functionality and resale value'
    ],
    visualsSubtitle: 'Civil foundation and completed caretaker quarters.',
    visuals: [
      { title: 'Foundation & Masonry Construction', image: '/assets/illustrations/land-preparation.png' },
      { title: 'Roofing & Finishing Work', image: '/assets/services/visuals/visual-prepared-field.jpg' },
      { title: 'Completed Farm Caretaker Unit', image: '/assets/services/service-water-tank.jpg' },
    ],
    faqs: [
      {
        question: 'What is the estimated cost of a 1-BHK farm caretaker house?',
        answer: 'Costs depend on square footage (e.g. 250 to 500 sq ft) and material selection (pre-fab vs brick masonry).'
      }
    ],
  },

  'farm-house': {
    slug: 'farm-house',
    title: 'Farm House Development',
    image: '/assets/featured-farmhouse.svg',
    overview: 'Uzhavar Connect designs and constructs beautiful custom weekend farmhouses, country villas, and eco-retreats integrated into your farmland landscape. We combine traditional South Indian architectural elements—such as spacious verandas, natural stone paving, brick facades, and large windows—with modern interior amenities. Our turnkey service handles everything from architectural design to structural execution and surrounding landscape gardens.',
    scopeOfWork: [
      'Architectural planning, 3D elevation design, and floor layouts',
      'Structural RCC foundation and column construction',
      'Natural stone, exposed brick, and timber architectural finishes',
      'Spacious veranda, patio, and outdoor seating integration',
      'Complete interior plumbing, electrical, and sanitary fitting',
      'Surrounding lawn, landscape path, and garden tree integration'
    ],
    whyTitle: 'Why build a country farmhouse with Uzhavar Connect:',
    whyPoints: [
      'Creates a peaceful weekend family retreat away from city pollution',
      'Significantly boosts total farmland resale and capital valuation',
      'Harmoniously blends living spaces with your surrounding crops and orchard',
      'Single-window construction management with complete price transparency'
    ],
    visualsSubtitle: 'Architectural elevations and surrounding farmhouse landscapes.',
    visuals: [
      { title: 'Site Planning & Landscape Integration', image: '/assets/who-we-are.png' },
      { title: 'Country Veranda & Architectural Elevation', image: '/assets/hero-farm.png' },
      { title: 'Integrated Farmhouse & Fruit Orchard', image: '/assets/services/premium-farm-orchard.jpg' },
    ],
    faqs: [
      {
        question: 'How long does farmhouse construction take?',
        answer: 'A standard 1,000 to 1,500 sq ft farmhouse typically takes 4 to 6 months for complete turnkey construction.'
      }
    ],
  },

  'end-to-end-farm-management': {
    slug: 'end-to-end-farm-management',
    title: 'End-to-End Farm Management Services',
    image: '/assets/services/premium-farm-orchard.jpg',
    overview: 'Uzhavar Connect offers flagship Turnkey End-to-End Farm Management services for absentee landowners, NRI investors, and commercial farm developers across Tamil Nadu. We take full responsibility for transforming raw land into a thriving, revenue-generating agricultural estate. From initial land survey, clearing, and levelling to farm layout design, drip installation, high-density tree planting, ongoing maintenance, and harvest marketing—our agronomists handle every single aspect under one accountable umbrella.',
    scopeOfWork: [
      'Complete single-window farm setup from raw land to mature harvest',
      'Cadastral survey, land levelling, and boundary fencing',
      'Scientific farm layout, internal road, and water pond creation',
      'Drip irrigation installation with automated pump systems',
      'Commercial timber & fruit sapling procurement and planting',
      'Scheduled AMC maintenance, weed control, and monthly mobile reports',
      'Harvest execution and direct buyer buyback marketing'
    ],
    whyTitle: 'Why choose Uzhavar Connect End-to-End Farm Management:',
    whyPoints: [
      '100% hassle-free for non-resident and NRI farmland owners',
      'Single point of contact and accountability for all agricultural works',
      'Disciplined agronomic management for maximum crop yields and profitability',
      'Phased financial planning with transparent Capex & Opex breakdowns',
      'Transforms idle land into a productive, high-value eco-asset'
    ],
    visualsSubtitle: 'Groundwork to mature thriving orchard development.',
    visuals: [
      { title: 'Phase 1: Groundwork & Land Levelling', image: '/assets/services/visuals/visual-land-levelling.jpg' },
      { title: 'Phase 2: Drip Irrigation & Orchard Planting', image: '/assets/illustrations/tree-plantation.png' },
      { title: 'Phase 3: Mature Productive Revenue Farmland', image: '/assets/services/premium-farm-orchard.jpg' },
    ],
    faqs: [
      {
        question: 'How do I initiate an End-to-End Farm Management project?',
        answer: 'Contact our team via phone or WhatsApp. We will conduct an initial site survey, analyze soil and water availability, and present a comprehensive project proposal and budget estimate.'
      }
    ],
  },
};

export const getServiceDetails = (slug: string): ServiceDetailExtended => {
  if (SERVICE_DETAILS_MAP[slug]) {
    return SERVICE_DETAILS_MAP[slug];
  }
  return SERVICE_DETAILS_MAP['land-preparation-and-development'];
};
