import fs from 'fs';
import path from 'path';

const servicesDir = path.resolve('public/assets/services');
const galleryDir = path.resolve('public/assets/gallery');
const blogDir = path.resolve('public/assets/blog');

[servicesDir, galleryDir, blogDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function createBannerSvg(title, subtitle, category, bgHue = '145') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
    <defs>
      <linearGradient id="grad_${category}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="hsl(${bgHue}, 65%, 22%)"/>
        <stop offset="60%" stop-color="hsl(${bgHue}, 60%, 35%)"/>
        <stop offset="100%" stop-color="hsl(${bgHue}, 55%, 15%)"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="800" height="500" fill="url(#grad_${category})"/>
    <rect width="800" height="500" fill="url(#grid)"/>

    <!-- Decorative nature circles -->
    <circle cx="700" cy="100" r="140" fill="rgba(255,255,255,0.05)"/>
    <circle cx="100" cy="420" r="180" fill="rgba(255,255,255,0.03)"/>

    <!-- Top Badge -->
    <rect x="50" y="50" width="160" height="32" rx="16" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <text x="130" y="71" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" fill="#86efac" text-anchor="middle" letter-spacing="1.5">${category.toUpperCase()}</text>

    <!-- Main Typography -->
    <text x="50" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="34" fill="#FFFFFF">${title}</text>
    <text x="50" y="285" font-family="'Inter', sans-serif" font-weight="400" font-size="18" fill="#dcfce7">${subtitle}</text>

    <!-- Agricultural accent line -->
    <line x1="50" y1="320" x2="250" y2="320" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Watermark Brand -->
    <text x="750" y="460" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="16" fill="rgba(255,255,255,0.25)" text-anchor="end">UZHAVAR CONNECT</text>
  </svg>`;
}

// 11 services
const services = [
  { slug: 'land-preparation-and-development', title: 'Land Preparation & Development', sub: 'Bush clearing, grading, stone removal & leveling', hue: '135' },
  { slug: 'farm-layout-and-planning', title: 'Farm Layout & Planning', sub: 'Master zoning, pathways, plots & water source planning', hue: '145' },
  { slug: 'drip-irrigation-installation', title: 'Drip Irrigation Installation', sub: 'High-precision micro-irrigation & automated drippers', hue: '190' },
  { slug: 'water-tank-works', title: 'Water Tank Works', sub: 'Pond liners, RCC tanks, sump & rainwater harvesting', hue: '205' },
  { slug: 'all-types-of-tree-plantation', title: 'All Types of Tree Plantation', sub: 'Coconut, Teak, Mahogany, Guava, Mango & Timber', hue: '120' },
  { slug: 'farm-maintenance-amc', title: 'Farm Maintenance (AMC)', sub: 'Weeding, pruning, fertilizing & year-round care', hue: '150' },
  { slug: 'harvest-support', title: 'Harvest Support', sub: 'Skilled labour, crop harvesting & grading operations', hue: '40' },
  { slug: 'buyback-assistance', title: 'Buyback Assistance', sub: 'Direct market linkages, mandi pricing & buyer tie-ups', hue: '35' },
  { slug: 'labour-house', title: 'Labour House Construction', sub: 'Durable, cost-effective on-farm staff accommodation', hue: '25' },
  { slug: 'farm-house', title: 'Farm House Development', sub: 'Luxury weekend villas, green retreats & modular homes', hue: '160' },
  { slug: 'end-to-end-farm-management', title: 'End-to-End Farm Management', sub: 'Comprehensive turnkey farm development & monitoring', hue: '140' }
];

services.forEach(s => {
  fs.writeFileSync(path.join(servicesDir, `${s.slug}.svg`), createBannerSvg(s.title, s.sub, 'Service', s.hue));
});

// Gallery projects
const projects = [
  { id: '1', title: '25-Acre Integrated Coconut Farm', cat: 'Land Development', sub: 'Pollachi, Coimbatore District', hue: '140' },
  { id: '2', title: 'Automated Drip & Water Storage Pond', cat: 'Irrigation', sub: 'Dharapuram, Tiruppur', hue: '195' },
  { id: '3', title: 'High-Density Mango Orchard', cat: 'Plantation', sub: 'Theni Valley Estate', hue: '125' },
  { id: '4', title: 'Eco-Luxury Weekend Farm House', cat: 'Farm House', sub: 'Sirumalai Foothills, Dindigul', hue: '165' },
  { id: '5', title: 'Teak & Mahogany Boundary Plantation', cat: 'Plantation', sub: 'Kangeyam, Tiruppur', hue: '115' },
  { id: '6', title: '1-Lakh Litre Farm Water Sump', cat: 'Irrigation', sub: 'Udumalpet, Tiruppur', hue: '210' },
  { id: '7', title: 'Dragon Fruit Trellis & Micro Drip', cat: 'Harvest', sub: 'Erode Agricultural Zone', hue: '330' },
  { id: '8', title: 'Permanent Modular Farm Staff Quarters', cat: 'Farm House', sub: 'Sathyamangalam, Erode', hue: '28' }
];

projects.forEach(p => {
  fs.writeFileSync(path.join(galleryDir, `project-${p.id}.svg`), createBannerSvg(p.title, p.sub, p.cat, p.hue));
});

// Blog posts
const blogs = [
  { id: '1', slug: 'how-to-turn-barren-land-into-productive-farm', title: 'From Dry Land to Yielding Farm', sub: 'Step-by-step roadmap for virgin land preparation', hue: '135' },
  { id: '2', slug: 'drip-irrigation-roi-and-water-saving-guide', title: 'Maximizing ROI with Drip Irrigation', sub: 'Save 60% water while boosting crop yields', hue: '195' },
  { id: '3', slug: 'high-value-tree-plantation-in-tamil-nadu', title: 'Top Timber & Fruit Trees for 2026', sub: 'Teak, Sandalwood, Coconut & Mango economics', hue: '125' },
  { id: '4', slug: 'building-cost-effective-farm-houses', title: 'Farm House Construction Guide', sub: 'Sustainable materials, council norms & budget planning', hue: '155' }
];

blogs.forEach(b => {
  fs.writeFileSync(path.join(blogDir, `${b.slug}.svg`), createBannerSvg(b.title, b.sub, 'Farming Guide', b.hue));
});

console.log('All static service, gallery, and blog SVGs generated successfully.');
