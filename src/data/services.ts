import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    slug: 'land-preparation-and-development',
    title: 'Land Preparation & Development Works',
    shortDescription: 'Clearing, leveling, stone removal, and soil conditioning to transform wild or barren land into high-yield farmland.',
    fullDescription: 'Comprehensive agricultural land development that turns overgrown, rocky, or uneven dry lands into ready-to-cultivate fertile acreage. We deploy modern heavy machinery including JCBs, excavators, and precision laser land levelers alongside traditional agricultural wisdom to build lasting soil fertility and proper water runoff slopes.',
    iconName: 'Tractor',
    heroImage: '/assets/services/land-preparation-and-development.svg',
    galleryImages: [
      '/assets/journey-2.svg',
      '/assets/gallery/project-1.svg',
      '/assets/services/land-preparation-and-development.svg',
    ],
    scopeOfWork: [
      'Thorn bush, wild shrub, and unwanted tree root removal (clearing & grubbing)',
      'Rock breaking, surface boulder clearing, and sub-surface stone separation',
      'Precision laser land leveling for uniform water distribution and soil conservation',
      'Peripheral bund formation, drainage channel trenching, and field compartmentalization',
      'Deep ripping, disc ploughing, rotavation, and organic compost enrichment'
    ],
    benefits: [
      'Eliminates waterlogging and erosion through engineered natural slopes',
      'Allows 100% mechanized tractor operations across the farm',
      'Drastically increases root penetration depth and aeration for saplings',
      'Prevents pest habitats from overgrown wild undergrowth',
      'Lays a stable foundation for drip irrigation piping and plantation grids'
    ],
    processSteps: [
      { step: 1, title: 'Land Survey & Topography Assessment', description: 'Detailed contour study, drone mapping, and soil depth measurement.' },
      { step: 2, title: 'Heavy Bush & Debris Clearing', description: 'Clearing prosopis juliflora (seemai karuvelam), wild bushes, and roots.' },
      { step: 3, title: 'Earthmoving & Laser Grading', description: 'Excavation, grading, and leveling to achieve optimal agricultural slope.' },
      { step: 4, title: 'Deep Plowing & Soil Conditioning', description: 'Deep ripping, adding gypsum/lime if required, and final rotavator till.' }
    ],
    faqs: [
      {
        question: 'How long does it take to prepare 5 to 10 acres of dry land?',
        answer: 'Typically, 5 to 10 acres of land clearing and laser leveling takes between 7 to 14 days, depending on rocky terrain density and vegetation thickness.'
      },
      {
        question: 'Do you remove deep root systems like Seemai Karuvelam?',
        answer: 'Yes, we use heavy excavators with specialized root rakes to uproot trees from their taproots so they do not regenerate.'
      },
      {
        question: 'Will leveling disturb fertile topsoil?',
        answer: 'No, we preserve valuable topsoil by stockpiling it before deeper leveling and re-spreading it across the top cultivation layer.'
      }
    ],
    category: 'development',
    highlightBadge: 'Core Service'
  },
  {
    id: '2',
    slug: 'farm-layout-and-planning',
    title: 'Farm Layout & Planning',
    shortDescription: 'Master zoning, internal farm roads, fencing layout, plot divisions, and water distribution network design.',
    fullDescription: 'Professional farm architectural blueprints designed by experienced agronomists and land surveyors. We formulate a master plan that maximizes acreage utility, ensures optimal sunlight and wind protection, places borewells and pump houses at hydraulic sweet spots, and provides wide tractor-friendly internal access roads.',
    iconName: 'Map',
    heroImage: '/assets/services/farm-layout-planning.jpg',
    galleryImages: [
      '/assets/services/farm-layout-planning.jpg',
      '/assets/gallery/project-1.svg',
      '/assets/gallery/gallery-land-dev-fencing-work.jpg',
    ],
    scopeOfWork: [
      'Drone aerial survey, cadastral boundary demarcation, and contour mapping',
      'Internal road network design (12ft to 18ft tractor & harvest truck pathways)',
      'Crop zoning based on soil texture variations and micro-climates',
      'Strategic positioning of borewells, sumps, solar arrays, and farm stay areas',
      'Boundary security planning: barbed wire, chainlink, or green bio-fencing'
    ],
    benefits: [
      'Eliminates costly trial-and-error mistakes during execution',
      'Ensures convenient vehicle access to every single tree or plot',
      'Maximizes usable cultivable area while safeguarding natural water flows',
      'Provides a crystal-clear phased investment roadmap for absentee landowners'
    ],
    processSteps: [
      { step: 1, title: 'Boundary Demarcation & GPS Mapping', description: 'Accurate boundary marking according to patta/FMB records.' },
      { step: 2, title: 'Agronomic Zoning Consultation', description: 'Discussion of owner objectives (commercial, agroforestry, weekend retreat).' },
      { step: 3, title: '2D & 3D Master Plan Drafting', description: 'Architectural drafting of roads, zones, pipe mains, and building footprints.' },
      { step: 4, title: 'On-Ground Pegging & Handover', description: 'Physical pegging on the farm to guide land development teams.' }
    ],
    faqs: [
      {
        question: 'Can you work with irregular or hilly terrain?',
        answer: 'Yes, our team specializes in contour layouts and terrace planning for undulating terrains to stop soil wash-off.'
      },
      {
        question: 'Do you provide CAD drawings and PDF maps?',
        answer: 'Yes, you receive high-resolution laminated color prints, PDF digital copies, and CAD files of the complete farm master plan.'
      }
    ],
    category: 'development'
  },
  {
    id: '3',
    slug: 'drip-irrigation-installation',
    title: 'Drip Irrigation Installation',
    shortDescription: 'Modern micro-irrigation systems, inline/online drippers, fertigation venturi units, and automated valves.',
    fullDescription: 'Save up to 60% water while maximizing crop yields through custom-engineered drip and micro-sprinkler systems. We design, supply, and install commercial-grade UV-stabilized ISI pipes, sand/disc filters, venturi fertilizer injectors, and pressure regulators tailored to your water source capacity.',
    iconName: 'Droplets',
    heroImage: '/assets/services/drip-irrigation-installation.svg',
    galleryImages: [
      '/assets/journey-3.svg',
      '/assets/gallery/project-2.svg',
      '/assets/services/drip-irrigation-installation.svg',
    ],
    scopeOfWork: [
      'Hydraulic design, pipe friction loss calculation, and pump capacity sizing',
      'Mainline and sub-main PVC/HDPE trenching and laying',
      'Automated disc filter and sand gravel filter manifold assembly',
      'Venturi injector setup for direct soluble fertigation and root feeding',
      'Pressure-compensating (PC) inline drip laterals or button drippers installation',
      'Testing, pressure flushing, and operational training for farm hands'
    ],
    benefits: [
      'Saves 50% to 70% water compared to conventional flood irrigation',
      'Direct fertigation delivers nutrients directly into the active root zone',
      'Dramatically curtails weed growth between tree rows',
      'Operates reliably even with low-yield borewells or limited power hours'
    ],
    processSteps: [
      { step: 1, title: 'Water Source & Flow Test', description: 'Testing borewell yield (GPH/LPH) and water TDS/salinity levels.' },
      { step: 2, title: 'Hydraulic Sectoring', description: 'Dividing farm into balanced watering sectors based on pump power.' },
      { step: 3, title: 'Underground Mainline Trenching', description: 'Laying class-3/4 PVC mainlines safely 2 to 3 feet underground.' },
      { step: 4, title: 'Laterals & Dripper Commissioning', description: 'Connecting UV laterals, flush valves, and conducting flow trial.' }
    ],
    faqs: [
      {
        question: 'Can the drip system be controlled via smartphone?',
        answer: 'Yes, we provide optional GSM/IoT smart controllers to schedule valves and pumps remotely from anywhere.'
      },
      {
        question: 'What is the lifespan of the drip pipes installed?',
        answer: 'We use premium Virgin UV-stabilized materials with an expected lifespan of 8 to 12 years with routine filter backwashing.'
      }
    ],
    category: 'infrastructure',
    highlightBadge: 'Popular'
  },
  {
    id: '4',
    slug: 'water-tank-works',
    title: 'Water Tank Works',
    shortDescription: 'Excavation & HDPE geomembrane farm ponds, RCC storage tanks, overhead tanks, and rainwater harvesting structures.',
    fullDescription: 'Reliable water security is the lifeline of any successful agricultural venture. We build heavy-duty farm ponds lined with 500-micron multilayer geomembranes, reinforced concrete (RCC) ground sumps, and elevated overhead pressure tanks to store millions of liters of rainwater and seasonal canal runoff.',
    iconName: 'Database',
    heroImage: '/assets/services/water-tank-works.svg',
    galleryImages: [
      '/assets/gallery/project-6.svg',
      '/assets/gallery/project-2.svg',
      '/assets/services/water-tank-works.svg',
    ],
    scopeOfWork: [
      'Excavation of large-scale farm ponds (5 lakh to 50 lakh liters capacity)',
      'Sub-grade dressing, geotextile cushioning, and HDPE geomembrane thermal welding',
      'Reinforced cement concrete (RCC) underground water sumps construction',
      'Overhead staging towers for gravity-fed farm supply',
      'Silt trap chambers, inlet runoff channels, and emergency overflow spillways'
    ],
    benefits: [
      'Guarantees round-the-year water availability during dry summer months',
      'Enables fish farming (aquaculture) as an additional farm revenue stream',
      'Harvests millions of liters of free natural rainwater during monsoons',
      'Reduces strain on borewells and recharges local shallow aquifers'
    ],
    processSteps: [
      { step: 1, title: 'Catchment & Geo-Investigation', description: 'Assessing natural runoff direction and soil bearing capacity.' },
      { step: 2, title: 'Excavation & Slope Stabilisation', description: 'Excavating 1:1.5 or 1:2 angled embankments to prevent cave-ins.' },
      { step: 3, title: 'Geomembrane Hot-Wedge Welding', description: 'Laying leak-proof puncture-resistant liner anchored in perimeter trenches.' },
      { step: 4, title: 'Pumping Infrastructure & Enclosure', description: 'Installing suction floats, safety fencing, and delivery lines.' }
    ],
    faqs: [
      {
        question: 'How long does a geomembrane farm pond liner last?',
        answer: 'Our high-density UV-treated polyethylene (HDPE) liners come with a material life expectancy of 15+ years.'
      },
      {
        question: 'Can the pond store water pumped from borewells during off-peak power hours?',
        answer: 'Yes! Storing water in the pond lets you irrigate your entire farm via high-discharge booster pumps in just a few hours.'
      }
    ],
    category: 'infrastructure'
  },
  {
    id: '5',
    slug: 'all-types-of-tree-plantation',
    title: 'All Types of Tree Plantation',
    shortDescription: 'High-density commercial horticulture, timber agroforestry (Teak, Mahogany, Melia Dubia), coconut groves, and fruit orchards.',
    fullDescription: 'Scientific tree plantation designed for commercial ROI and long-term land wealth. We source certified, disease-free disease-resistant grafts and tissue-cultured saplings, dig precision auger pits, enrich pit soil with enriched vermicompost and bio-fertilizers, and plant them at optimal scientific spacings for maximum yield.',
    iconName: 'Sprout',
    heroImage: '/assets/services/all-types-of-tree-plantation.svg',
    galleryImages: [
      '/assets/journey-4.svg',
      '/assets/gallery/project-3.svg',
      '/assets/gallery/project-5.svg',
    ],
    scopeOfWork: [
      'Commercial Coconut (Tall x Dwarf hybrids, West Coast Tall, Pollachi Green)',
      'High-Density Fruit Orchards: Guava (Taiwan Pink), Mango, Citrus, Pomegranate, Dragon Fruit',
      'Valuable Timber: Teakwood, African Mahogany, Malabar Neem (Melia Dubia), Red Sanders',
      'Post-hole auger pit digging (2.5ft x 2.5ft or 3ft x 3ft)',
      'Soil blending with neem cake, trichoderma viride, bone meal, and well-rotted farmyard manure',
      'Staking with bamboo poles, initial drenching, and shade protection'
    ],
    benefits: [
      'Substantial recurring income from fruit crops and long-term capital appreciation from timber',
      'Scientific pit preparation reduces sapling mortality rate to under 2%',
      'Enhanced micro-climate, biodiversity, and soil organic carbon enrichment',
      'Clear spacing schemes enable inter-cropping with pulses, vegetables, or fodder'
    ],
    processSteps: [
      { step: 1, title: 'Soil & Climatic Suitability Check', description: 'Matching crop varieties to soil pH, rainfall pattern, and local market demand.' },
      { step: 2, title: 'Tractor/Auger Pit Digging', description: 'Auger drilling precise pit grids aligned with drip lines.' },
      { step: 3, title: 'Organic Pit Filling & Curing', description: 'Filling pits with organic matter, bio-fungicides, and resting for 10 days.' },
      { step: 4, title: 'Plantation & Immediate Irrigation', description: 'Planting certified saplings, staking firmly, and activating drip watering.' }
    ],
    faqs: [
      {
        question: 'Where do you source your saplings from?',
        answer: 'We source exclusively from government-certified agri-university nurseries and accredited private mother-plant centers.'
      },
      {
        question: 'Do you replace saplings that fail to survive?',
        answer: 'Yes, under our turnkey execution and AMC contracts, we provide free mortality replacement within the initial establishment period.'
      }
    ],
    category: 'cultivation',
    highlightBadge: 'High ROI'
  },
  {
    id: '6',
    slug: 'farm-maintenance-amc',
    title: 'Farm Maintenance (AMC)',
    shortDescription: 'Professional annual maintenance contracts: periodic weeding, pruning, spray schedules, fertigation, and farm supervision.',
    fullDescription: 'Hassle-free farm upkeep for NRI land owners, busy professionals, and commercial farm investors. Our dedicated agricultural supervisor and mobile labor teams handle systematic weed management, canopy pruning, pest surveillance, fertilizer dosing, and drip maintenance, sending you detailed digital photo & video reports every month.',
    iconName: 'Wrench',
    heroImage: '/assets/services/farm-maintenance-amc.svg',
    galleryImages: [
      '/assets/journey-3.svg',
      '/assets/gallery/project-1.svg',
      '/assets/services/farm-maintenance-amc.svg',
    ],
    scopeOfWork: [
      'Periodic mechanical de-weeding and tractor rotavation between tree lines',
      'Customized organic and inorganic nutrition schedules through drip fertigation',
      'Proactive pest and fungal disease management through IPM (Integrated Pest Management)',
      'Canopy management, sanitary tree pruning, and suckers de-shooting',
      'Borewell pump inspection, drip filter backwashing, and emitter descaling',
      'Monthly geo-tagged photo/video inspection report sent directly to your phone'
    ],
    benefits: [
      'Eliminates the stress of hiring and managing daily casual laborers',
      'Guarantees your trees grow at peak vigor without neglect or stunted growth',
      'Peace of mind for absentee owners knowing a trustworthy team is on-site',
      'Early detection and rapid containment of pest outbreaks before yield damage'
    ],
    processSteps: [
      { step: 1, title: 'Farm Health Audit', description: 'Comprehensive inspection of existing trees, soil nutrition, and irrigation health.' },
      { step: 2, title: 'Custom AMC Calendar Formulation', description: 'Preparing 12-month calendar detailing monthly actions and fertilizer doses.' },
      { step: 3, title: 'Scheduled Bi-Weekly / Monthly Visits', description: 'Deploying our skilled crew with machinery and organic inputs.' },
      { step: 4, title: 'Digital Health Report & Video Call', description: 'Sharing drone shots, growth metrics, and upcoming task notifications.' }
    ],
    faqs: [
      {
        question: 'Can I choose between monthly or quarterly maintenance visits?',
        answer: 'Yes, we provide flexible AMC packages ranging from bi-weekly visits for active vegetable crops to monthly visits for mature orchards.'
      },
      {
        question: 'How do I know what work was carried out while I am away?',
        answer: 'Every visit is logged in a digital report with before/after photos, GPS timestamps, and supervisor notes sent to your WhatsApp and email.'
      }
    ],
    category: 'management'
  },
  {
    id: '7',
    slug: 'harvest-support',
    title: 'Harvest Support',
    shortDescription: 'Skilled harvesting crews, specialized equipment, grading, post-harvest packaging, and field handling.',
    fullDescription: 'Maximize market price realization with timely, damage-free crop harvesting. We mobilize experienced harvesting laborers equipped with safety gear, fruit pluckers, cutting blades, sorting tarpaulins, and field transport crates to harvest produce at peak maturity without injuring crops or trees.',
    iconName: 'HandCoins',
    heroImage: '/assets/services/harvest-support.svg',
    galleryImages: [
      '/assets/journey-4.svg',
      '/assets/gallery/project-7.svg',
      '/assets/services/harvest-support.svg',
    ],
    scopeOfWork: [
      'Mobilization of skilled harvesting labor teams (trained for coconut, mango, guava, vegetables, etc.)',
      'Quality grading: sorting into A-grade export, B-grade retail, and processing lots',
      'Field crating, weighing, and hygienic post-harvest washing/curing if required',
      'On-farm loading onto transport vehicles with proper protective cushioning',
      'Minimizing harvest drop damage and post-harvest physiological loss'
    ],
    benefits: [
      'Eliminates last-minute labor shortages during peak harvest windows',
      'Prevents tree damage caused by untrained casual laborers',
      'Proper grading fetches 15% to 30% higher wholesale prices at mandis',
      'Fast turnaround from tree to truck keeps produce farm-fresh'
    ],
    processSteps: [
      { step: 1, title: 'Maturity Index Evaluation', description: 'Assessing crop ripeness, sugar brix levels, or harvest indicators.' },
      { step: 2, title: 'Harvest Plan & Logistics Booking', description: 'Scheduling labor crew size and arranging crates and transport trucks.' },
      { step: 3, title: 'Careful Plucking & In-Field Sorting', description: 'Manual harvesting using telescopic poles, shears, and protective nets.' },
      { step: 4, title: 'Weighment & Gate Pass Dispatch', description: 'Digital weighment slips and dispatch to designated buyer hubs.' }
    ],
    faqs: [
      {
        question: 'Do you provide harvesting for tall traditional coconut palms?',
        answer: 'Yes, our certified climbers use mechanical palm climbing machines and safety ropes for accident-free harvesting.'
      }
    ],
    category: 'cultivation'
  },
  {
    id: '8',
    slug: 'buyback-assistance',
    title: 'Buyback Assistance',
    shortDescription: 'Direct market linkages, institutional buyer contracts, mandi tie-ups, and agro-processing firm connections.',
    fullDescription: 'Solve the farmer’s biggest challenge: getting a fair, guaranteed price for produce. We connect you with verified food processors, organic retail chains, export consolidators, and timber paper mills, setting up forward contracts and transparent market linkages to ensure you never have to sell distressingly.',
    iconName: 'Handshake',
    heroImage: '/assets/services/buyback-assistance.svg',
    galleryImages: [
      '/assets/gallery/project-7.svg',
      '/assets/gallery/project-1.svg',
      '/assets/services/buyback-assistance.svg',
    ],
    scopeOfWork: [
      'Pre-harvest buyback agreements with verified wholesale aggregators',
      'Tie-ups with paper & plywood industries for timber species (Melia Dubia, Teak)',
      'Contract farming links for medicinal plants, moringa leaves, and specialty fruits',
      'Transparent spot-pricing and weight documentation',
      'Direct payment transfer coordination from buyers to landowner bank accounts'
    ],
    benefits: [
      'Protects farmers from predatory middlemen commissions',
      'Provides predictability and confidence before planting commercial crops',
      'Access to premium corporate buyers and organic grocery chains',
      'Facilitates bulk truck-load pickups directly from your farm gate'
    ],
    processSteps: [
      { step: 1, title: 'Crop Volume & Quality Forecasting', description: 'Estimating harvest volume and grade 30 days before harvest.' },
      { step: 2, title: 'Buyer Matchmaking & Pricing Quote', description: 'Presenting lots to multiple institutional buyers for competitive rates.' },
      { step: 3, title: 'Contract Terms Confirmation', description: 'Clear agreement on harvest dates, payment terms, and delivery point.' },
      { step: 4, title: 'Farm-Gate Collection & Payment', description: 'Buyer trucks collect at farm gate; direct payment settled.' }
    ],
    faqs: [
      {
        question: 'Is buyback guaranteed for timber plantations?',
        answer: 'Yes, for timber crops like Malabar Neem and Teak, we connect you with paper mills and timber merchants with pre-agreed base formulas.'
      }
    ],
    category: 'management'
  },
  {
    id: '9',
    slug: 'labour-house',
    title: 'Labour House Construction',
    shortDescription: 'Economical, weather-proof, durable farm staff quarters, watchman cabins, and tool storage rooms.',
    fullDescription: 'Retain dependable farm workers with comfortable on-site living accommodations. We construct cost-effective, weather-resistant staff quarters with attached restrooms, cooking spaces, and secure tool storage sheds using modern precast concrete, hollow blocks, or PUF insulated panels designed for farm environments.',
    iconName: 'Home',
    heroImage: '/assets/services/labour-house.svg',
    galleryImages: [
      '/assets/gallery/project-8.svg',
      '/assets/featured-farmhouse.svg',
      '/assets/services/labour-house.svg',
    ],
    scopeOfWork: [
      'Compact 1BHK / 2-room staff quarters layout with kitchen and attached bathroom',
      'Durable precast solid block or stone masonry construction',
      'GI sheet or insulated PUF sandwich panel roofing with heat insulation',
      'Plumbing, septic tank, and soak pit sanitation installation',
      'Secure lockable tractor shed, tool room, and fertilizer storage chamber',
      'Basic electrical wiring, solar lighting, and water tap lines'
    ],
    benefits: [
      'Attracts and retains full-time resident farm caretakers and watchmen',
      'Provides 24/7 on-site farm security against crop theft and wildlife trespassing',
      'Fast turnaround: constructed within 30 to 45 days at budget-friendly rates',
      'Safeguards costly farm tools, drip filters, and power pumps from weather damage'
    ],
    processSteps: [
      { step: 1, title: 'Site Selection on Farm Master Plan', description: 'Locating near farm entrance or water source with clear visibility.' },
      { step: 2, title: 'Plinth Foundation & Masonry', description: 'Constructing elevated stone plinth to keep monsoon runoff away.' },
      { step: 3, title: 'Roofing, Windows & Doors', description: 'Installing sturdy metal doors, ventilation windows, and insulated roof.' },
      { step: 4, title: 'Plumbing & Septic Connection', description: 'Installing bathroom fixtures, soak pit, and external water tank.' }
    ],
    faqs: [
      {
        question: 'What is the typical size of a farm labour quarter?',
        answer: 'Our standard worker unit is approximately 300 to 450 sq.ft., featuring a bedroom, cooking alcove, tool storage, and attached toilet.'
      }
    ],
    category: 'infrastructure'
  },
  {
    id: '10',
    slug: 'farm-house',
    title: 'Farm House Development',
    shortDescription: 'Bespoke country villas, weekend eco-cottages, verandas, courtyards, and scenic farm retreat architecture.',
    fullDescription: 'Transform your agricultural estate into a rejuvenating weekend haven for your family. We build custom country cottages, eco-friendly verandah farm villas, and modern rustic retreats complete with sprawling lawns, outdoor sit-outs, swimming plunge pools, and solar power integration blending seamlessly into the green countryside.',
    iconName: 'Building',
    heroImage: '/assets/services/farm-house.svg',
    galleryImages: [
      '/assets/featured-farmhouse.svg',
      '/assets/gallery/project-4.svg',
      '/assets/services/farm-house.svg',
    ],
    scopeOfWork: [
      'Architectural designing with traditional Chettinad, Kerala, or Contemporary Rustic aesthetics',
      'RCC column structure or exposed brick/stone masonry with terracotta tiled pitched roofs',
      'Expansive semi-open verandahs (Thinnai) for peaceful morning garden views',
      'Complete interior woodwork, modular kitchen, sanitary fittings, and ventilation',
      'Landscape design: soft lawn grass, flowering hedges, gazebo, and stone pathways',
      'Solar power backup and decentralized wastewater filtration'
    ],
    benefits: [
      'A serene family escape away from urban pollution and noise',
      'Significantly increases overall agricultural property valuation',
      'Potential for luxury agro-tourism or Airbnb weekend farm stay revenue',
      'Eco-sustainable design with passive natural cooling and energy efficiency'
    ],
    processSteps: [
      { step: 1, title: 'Architectural Concept & 3D Render', description: 'Customizing layout to your aesthetic preferences and family size.' },
      { step: 2, title: 'Civil Foundation & Superstructure', description: 'High-strength structural construction engineered for farm soil conditions.' },
      { step: 3, title: 'Roofing, Finishes & Carpentry', description: 'Mangalore tiles, teakwood doors, vitrified/terracotta tile flooring.' },
      { step: 4, title: 'Landscaping & Interior Fit-Out', description: 'Lawn turfing, lighting, stone walkways, and turnkey handover.' }
    ],
    faqs: [
      {
        question: 'Do you manage building plan approvals for farm houses in Tamil Nadu?',
        answer: 'Yes, our team assists with rural local body (Panchayat / DTCP) norms and farm building classification approvals.'
      },
      {
        question: 'Can you build off-grid solar and rainwater systems for the house?',
        answer: 'Yes, 100% off-grid packages with hybrid solar inverters, lithium batteries, and RO water filtration are available.'
      }
    ],
    category: 'infrastructure',
    highlightBadge: 'Premium'
  },
  {
    id: '11',
    slug: 'end-to-end-farm-management',
    title: 'End-to-End Farm Management Services',
    shortDescription: 'Turnkey 360-degree farm creation: from raw land acquisition planning to harvest and steady annual profits.',
    fullDescription: 'Our flagship turnkey service designed for landowners who want zero headaches and 100% professionalism. Uzhavar Connect takes charge of the entire lifecycle: soil assessment, earthmoving, fencing, borewells, drip networks, plantation, daily workforce management, crop protection, harvest, and sales, delivering a thriving, productive agricultural asset.',
    iconName: 'ShieldCheck',
    heroImage: '/assets/services/end-to-end-farm-management.svg',
    galleryImages: [
      '/assets/featured-farmhouse.svg',
      '/assets/journey-1.svg',
      '/assets/journey-3.svg',
    ],
    scopeOfWork: [
      'Comprehensive feasibility, agronomic study, and phased project report',
      'Land preparation, boundary fencing, internal roadways, and drainage',
      'Complete water infrastructure (borewell, storage sump, automated drip)',
      'High-yield crop selection and certified sapling plantation',
      'Resident caretaker quarters and storage facility setup',
      'Dedicated agricultural officer supervision with monthly KPI tracking',
      'Harvesting, post-harvest logistics, and buyback distribution'
    ],
    benefits: [
      'Complete single-point accountability for your entire agricultural investment',
      'Ideal for NRIs, city professionals, and non-agricultural background investors',
      'Optimized capital expenditure with bulk material procurement discounts',
      'Transforms underutilized dry land into an appreciating, income-generating farm'
    ],
    processSteps: [
      { step: 1, title: 'Comprehensive Land Feasibility', description: 'Soil, water, solar, and market potential assessment with financial model.' },
      { step: 2, title: 'Infrastructure Buildout Phase', description: 'Roads, fencing, water ponds, drip lines, and quarters construction.' },
      { step: 3, title: 'Scientific Cultivation Phase', description: 'Pit preparation, high-quality sapling planting, and initial care.' },
      { step: 4, title: 'Ongoing Turnkey Operation', description: 'Year-round supervision, pruning, nutrition, harvest, and profit settlement.' }
    ],
    faqs: [
      {
        question: 'Who is this turnkey management service best suited for?',
        answer: 'Landowners living in cities or abroad who own agricultural land but lack the time, machinery, or agricultural expertise to run it themselves.'
      },
      {
        question: 'What is the minimum land size required for end-to-end management?',
        answer: 'We undertake turnkey projects starting from 2 acres up to large 100+ acre corporate farming estates.'
      }
    ],
    category: 'management',
    highlightBadge: 'Flagship'
  }
];
