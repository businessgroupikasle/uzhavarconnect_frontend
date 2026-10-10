export interface GalleryItem {
  id: string;
  title: string;
  category: 'Land Development' | 'Irrigation' | 'Plantation' | 'Farm Infrastructure' | 'Harvest' | 'Farm Maintenance';
  image: string;
  description?: string;
  columnSpan?: number;
  rowSpan?: number;
}

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  // --- LAND DEVELOPMENT ---
  {
    id: '1',
    title: 'Farmland Contour Surveying',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-aerial.webp',
    description: 'Precision contour surveying and structured farmland layout development.',
  },
  {
    id: 'ld-1',
    title: 'Chain-Link Security Fencing',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-fencing-work.webp',
    description: 'Perimeter chain-link security fencing installation with concrete posts on farmland boundary.',
  },
  {
    id: 'ld-2',
    title: 'Farm Boundary Demarcation',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-fence-boundary.webp',
    description: 'Completed perimeter boundary demarcation fencing along red soil farmland.',
  },
  {
    id: 'ld-3',
    title: 'Farmland Landscape & Pathways',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-landscape-path.webp',
    description: 'Integrated farmland landscape, turf ground development, and stone pathway layout.',
  },
  {
    id: 'ld-4',
    title: 'Orchard Soil Preparation & Leveling',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-orchard-leveling.webp',
    description: 'Red soil tilling, leveling, and structured ground development across mature plantation.',
  },
  {
    id: 'ld-5',
    title: 'Fencing Post Foundation Alignment',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-fencing-pillars.webp',
    description: 'Galvanized fencing post alignment and concrete foundation grouting along perimeter boundary.',
  },
  {
    id: 'ld-6',
    title: 'Perimeter GI Chain-Link Fencing',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-gi-chainlink.webp',
    description: 'Heavy-duty galvanized iron chain-link fencing installed for comprehensive farm security.',
  },
  {
    id: 'ld-7',
    title: 'Red Soil Boundary Demarcation Fencing',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-red-fence.webp',
    description: 'Granite pillar chain-link fencing with corner supports along red soil farmland.',
  },
  {
    id: 'ld-8',
    title: 'Farmland Turf & Paved Path Development',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-dev-turf-walkway.webp',
    description: 'Curved stone pathways and turf grass installation across coconut grove estate.',
  },
  {
    id: '3',
    title: 'Land Preparation & Ploughing',
    category: 'Land Development',
    image: '/assets/gallery/gallery-land-prep-tractor.webp',
    description: 'Heavy tractor ploughing and soil preparation across fertile acres.',
  },

  // --- IRRIGATION ---
  {
    id: '4',
    title: 'Drip Irrigation System',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-drip-irrigation.webp',
    description: 'Targeted root-zone micro-irrigation for optimal moisture balance.',
  },
  {
    id: 'ir-1',
    title: 'Drip Filtration & Control Manifold',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-disc-filters.webp',
    description: 'Commercial dual disc filter system with PVC distribution manifold for micro-irrigation.',
  },
  {
    id: 'ir-2',
    title: 'Pipeline Trench & Valve Assembly',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-pipeline-trench.webp',
    description: 'Subsurface irrigation pipe trenching with solenoid flow control and tee manifold.',
  },
  {
    id: 'ir-3',
    title: 'Drip Filtration Unit Assembly',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-disc-station.webp',
    description: 'Commercial disc filtration unit setup for pressurized drip irrigation lines.',
  },
  {
    id: 'ir-4',
    title: 'Hillside Irrigation Trench & Mains',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-hill-pipeline.webp',
    description: 'Mainline water pipeline trenching across contour slope with control valves.',
  },
  {
    id: 'ir-5',
    title: 'Field Pipeline Risers & Control Valves',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-field-risers.webp',
    description: 'Riser pipeline installation with dual blue isolation valves along contour slope.',
  },
  {
    id: 'ir-6',
    title: 'Subsurface Distribution Pipeline Trench',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-trench-valves.webp',
    description: 'Underground pipeline network with tee junctions and flow control valves.',
  },
  {
    id: 'ir-7',
    title: 'Dual Filter Station & Field Inspection',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-filter-setup.webp',
    description: 'Dual cylinder disc filtration manifold with pressure monitoring in coconut plantation.',
  },
  {
    id: 'ir-8',
    title: 'Orchard Micro-Irrigation Trench Network',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-grove-manifold.webp',
    description: 'Secondary filtration manifold and supply pipe trenches in coconut orchard.',
  },
  {
    id: 'ir-9',
    title: 'Coconut Grove Channel Irrigation Trench',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-grove-channel-pipe.webp',
    description: 'Long-run PVC water supply pipeline and control risers along orchard boundary trench.',
  },
  {
    id: 'ir-10',
    title: 'Excavator Hillside Pipeline Trenching',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-jcb-hill-trench.webp',
    description: 'Mechanized earth excavation by backhoe for mainline irrigation piping down hillside slope.',
  },
  {
    id: 'ir-11',
    title: 'Multi-Zone Solenoid Valve Manifold',
    category: 'Irrigation',
    image: '/assets/gallery/gallery-irrigation-4zone-manifold.webp',
    description: 'Automated 4-zone solenoid control manifold with Finolex PVC distribution pipes.',
  },
  {
    id: '14',
    title: 'Automated Irrigation Head Unit',
    category: 'Irrigation',
    image: '/assets/drip-farm-stage.webp',
    description: 'Mainline fertigation and filtration manifold for uniform field watering.',
  },

  // --- PLANTATION ---
  {
    id: '5',
    title: 'Nursery Polybag Saplings',
    category: 'Plantation',
    image: '/assets/gallery/gallery-polybag-nursery.webp',
    description: 'High-density saplings nurtured in nursery polybags ready for field plantation.',
  },
  {
    id: '2',
    title: 'Young Sapling Care',
    category: 'Plantation',
    image: '/assets/gallery/gallery-plantation-farmer.webp',
    description: 'Farmer nurturing vigorous young commercial tree saplings in nursery.',
  },
  {
    id: '6',
    title: 'Field Tree Plantation',
    category: 'Plantation',
    image: '/assets/gallery/gallery-tree-planting-field.webp',
    description: 'Systematic pit digging, alignment, and tree plantation in the field.',
  },
  {
    id: 'pl-1',
    title: 'Field Nursery Seedling Rows',
    category: 'Plantation',
    image: '/assets/gallery/gallery-nursery-field-seedlings.webp',
    description: 'Commercial seedling cultivation nursery with aligned rows for orchard planting.',
  },
  {
    id: 'pl-2',
    title: 'Polybag Sapling Propagation',
    category: 'Plantation',
    image: '/assets/gallery/gallery-sapling-polybags-pair.webp',
    description: 'High-density saplings nurtured in black polybags ready for field plantation.',
  },
  {
    id: 'pl-3',
    title: 'Nursery Plant Seedlings',
    category: 'Plantation',
    image: '/assets/gallery/gallery-polybag-plants-row.webp',
    description: 'Vigorous young nursery plants in polybags for commercial farm establishment.',
  },
  {
    id: 'pl-4',
    title: 'Nursery Seedling Hand-Collection',
    category: 'Plantation',
    image: '/assets/gallery/gallery-plantation-seedling-harvest.webp',
    description: 'Field nursery team collecting robust young seedlings for agricultural planting.',
  },
  {
    id: 'pl-5',
    title: 'Farm Sapling Transport & Dispatch',
    category: 'Plantation',
    image: '/assets/gallery/gallery-plantation-sapling-truck.webp',
    description: 'Truckload of vigorous polybag saplings dispatched directly for farmland planting.',
  },
  {
    id: 'pl-6',
    title: 'Grafted Sapling Propagation',
    category: 'Plantation',
    image: '/assets/gallery/gallery-plantation-grafted-sapling.webp',
    description: 'High-yield grafted fruit sapling displaying successful graft union in nursery polybag.',
  },
  {
    id: 'pl-7',
    title: 'Stacked Polybag Sapling Dispatch',
    category: 'Plantation',
    image: '/assets/gallery/gallery-plantation-stacked-polybags.webp',
    description: 'Layered arrangement of high-yield grafted saplings loaded for farm distribution.',
  },

  // --- FARM INFRASTRUCTURE ---
  {
    id: 'fi-1',
    title: 'Concrete Water Storage Reservoir',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-land-dev-concrete-tank.webp',
    description: 'Reinforced concrete water storage reservoir excavation and civil tank construction.',
  },
  {
    id: 'fi-2',
    title: 'Circular Orchard Irrigation Tank',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-land-dev-water-tank-grove.webp',
    description: 'Circular concrete farm irrigation water storage reservoir in coconut orchard.',
  },
  {
    id: 'fi-3',
    title: 'Groundwater Storage Tank',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-land-dev-circular-tank.webp',
    description: 'Completed circular irrigation water tank filled with fresh groundwater.',
  },
  {
    id: 'fi-4',
    title: 'Farmhouse Villa & Grounds',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-farmhouse-grounds.webp',
    description: 'Modern rural farmhouse villa surrounded by coconut grove and developed grounds.',
  },
  {
    id: 'fi-5',
    title: 'Farm Cottage & Quarters',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-farmhouse-cottage.webp',
    description: 'Rural farm cottage with tiled roof, verandah, and modern accommodation amenities.',
  },
  {
    id: 'fi-6',
    title: 'Estate Farmhouse & Accommodation',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-farmhouse-estate-building.webp',
    description: 'Two-story farm administration and residence building with landscaped lawn and perimeter illumination.',
  },
  {
    id: 'fi-7',
    title: 'Covered Filtration & Fertigation Shed',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-infra-filter-shed.webp',
    description: 'Protected pump station structure housing sand media filter and primary manifold.',
  },
  {
    id: '7',
    title: 'High-Capacity Farm Water Tank',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-water-tank.webp',
    description: 'High-capacity farm water storage tank on concrete base with distribution lines.',
  },
  {
    id: '8',
    title: 'Country Farmhouse Retreat',
    category: 'Farm Infrastructure',
    image: '/assets/gallery/gallery-farmhouse-palms.webp',
    description: 'Traditional country farmhouse and eco-living retreat with palm trees.',
  },

  // --- HARVEST ---
  {
    id: '9',
    title: 'Harvest Crates & Grading',
    category: 'Harvest',
    image: '/assets/gallery/gallery-harvest-crates.webp',
    description: 'Farm-fresh vegetable harvest graded and packed in field crates.',
  },
  {
    id: '11',
    title: 'Mechanized Field Harvester',
    category: 'Harvest',
    image: '/assets/gallery/gallery-combine-harvester.webp',
    description: 'Mechanized harvest operations in golden fields during peak maturity.',
  },

  // --- FARM MAINTENANCE ---
  {
    id: '10',
    title: 'Tree Canopy Pruning & Care',
    category: 'Farm Maintenance',
    image: '/assets/gallery/gallery-farmer-pruning.webp',
    description: 'Periodic canopy pruning and maintenance for productive tree health.',
  },
  {
    id: 'fm-2',
    title: 'Plantation Trunk Painting & Pest Care',
    category: 'Farm Maintenance',
    image: '/assets/gallery/gallery-maintenance-trunk-care.webp',
    description: 'Whitewashing and blue banding on mature coconut trunks for sun protection and pest prevention.',
  },
];

export const ADDITIONAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '12',
    title: 'Farm Layout & Topography',
    category: 'Land Development',
    image: '/assets/who-we-are.webp',
    description: 'Agronomists and surveyors reviewing on-site farm layout blueprints.',
  },
  {
    id: '13',
    title: 'High-Density Mango Orchard',
    category: 'Plantation',
    image: '/assets/services/premium-farm-orchard.webp',
    description: 'Lush fruit orchard rows under active management and drip watering.',
  },
  {
    id: '15',
    title: 'Farmland Mountain Panoramic',
    category: 'Land Development',
    image: '/assets/hero-farm.webp',
    description: 'Panoramic views of developed farmland with clean drainage and access bunds.',
  },
  {
    id: '16',
    title: 'Vegetable Collection & Transport',
    category: 'Harvest',
    image: '/assets/services/service-buyback.webp',
    description: 'Quality sorting and crating for direct buyer procurement.',
  },
  {
    id: '17',
    title: 'Commercial Timber Plantation',
    category: 'Plantation',
    image: '/assets/illustrations/tree-plantation.webp',
    description: 'High-yield timber agroforestry trees established in aligned grids.',
  },
];
