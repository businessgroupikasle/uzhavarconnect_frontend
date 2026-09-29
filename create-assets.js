import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

// 1. Hero Agricultural Landscape
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4ea8de" />
      <stop offset="55%" stop-color="#90e0ef" />
      <stop offset="85%" stop-color="#fdf0d5" />
      <stop offset="100%" stop-color="#e9edc9" />
    </linearGradient>
    <radialGradient id="sunGlow" cx="82%" cy="25%" r="35%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="25%" stop-color="#fef08a" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#fbbf24" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#fef08a" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3a5a40" />
      <stop offset="100%" stop-color="#588157" />
    </linearGradient>
    <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#344e41" />
      <stop offset="100%" stop-color="#283618" />
    </linearGradient>
    <linearGradient id="cropGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#52b788" />
      <stop offset="100%" stop-color="#2d6a4f" />
    </linearGradient>
    <linearGradient id="cropGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#74c69d" />
      <stop offset="100%" stop-color="#1b4332" />
    </linearGradient>
    <linearGradient id="soilRow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#99582a" />
      <stop offset="100%" stop-color="#6f1d1b" />
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="1600" height="900" fill="url(#skyGrad)" />
  
  <!-- Sun & Rays -->
  <circle cx="1300" cy="220" r="280" fill="url(#sunGlow)" />
  <circle cx="1300" cy="220" r="45" fill="#FFFBEB" />

  <!-- Far Mountains (Western Ghats style) -->
  <path d="M0 460 Q320 320 640 430 T1280 380 Q1440 330 1600 420 L1600 900 L0 900 Z" fill="url(#mountain1)" opacity="0.6" />
  <path d="M-50 490 Q220 360 520 450 T1100 410 Q1380 370 1650 480 L1650 900 L-50 900 Z" fill="url(#mountain2)" opacity="0.8" />

  <!-- Midground Hills and Forest Lines -->
  <path d="M0 540 Q400 480 850 530 T1600 500 L1600 900 L0 900 Z" fill="#2d6a4f" />
  
  <!-- Distant Village & Trees -->
  <g fill="#1b4332" opacity="0.9">
    <circle cx="350" cy="510" r="25" />
    <circle cx="380" cy="515" r="20" />
    <circle cx="410" cy="508" r="28" />
    <circle cx="920" cy="520" r="22" />
    <circle cx="950" cy="515" r="30" />
    <circle cx="980" cy="525" r="24" />
    <circle cx="1400" cy="495" r="32" />
    <circle cx="1440" cy="502" r="28" />
  </g>

  <!-- Terraced Cultivated Fields with Perspective Rows -->
  <path d="M0 580 Q800 540 1600 570 L1600 900 L0 900 Z" fill="url(#cropGrad1)" />
  
  <!-- Curved Plantation Rows -->
  <g stroke="#1b4332" stroke-width="6" opacity="0.45" fill="none">
    <path d="M-100 620 Q700 570 1700 610" />
    <path d="M-100 660 Q700 610 1700 650" />
    <path d="M-100 710 Q700 655 1700 700" />
    <path d="M-100 765 Q700 705 1700 755" />
    <path d="M-100 825 Q700 760 1700 815" />
    <path d="M-100 890 Q700 820 1700 880" />
  </g>
  <g stroke="#95d5b2" stroke-width="4" opacity="0.7" fill="none">
    <path d="M-100 635 Q700 585 1700 625" />
    <path d="M-100 680 Q700 630 1700 670" />
    <path d="M-100 735 Q700 680 1700 725" />
    <path d="M-100 795 Q700 735 1700 785" />
    <path d="M-100 860 Q700 795 1700 850" />
  </g>

  <!-- Coconut / Areca Nut Palm Trees Silhouettes on Side -->
  <g transform="translate(1420, 260) scale(1.1)">
    <!-- Trunk -->
    <path d="M70 380 Q60 220 85 80" stroke="#4a3525" stroke-width="12" stroke-linecap="round" fill="none"/>
    <!-- Palm fronds -->
    <g stroke="#1b4332" stroke-width="5" fill="none">
      <path d="M85 80 Q140 30 190 60" />
      <path d="M85 80 Q130 0 170 10" />
      <path d="M85 80 Q80 -30 95 -60" />
      <path d="M85 80 Q40 0 0 20" />
      <path d="M85 80 Q10 40 -30 75" />
      <path d="M85 80 Q70 110 90 140" />
    </g>
    <!-- Detailed leaflets -->
    <path d="M190 60 Q130 50 85 80 Q140 10 170 10" fill="#2d6a4f" opacity="0.8"/>
    <path d="M95 -60 Q70 10 85 80 Q30 20 0 20" fill="#40916c" opacity="0.8"/>
  </g>

  <g transform="translate(1500, 310) scale(0.9)">
    <path d="M50 360 Q70 200 45 70" stroke="#4a3525" stroke-width="11" fill="none"/>
    <path d="M45 70 Q100 20 140 50 Q110 5 45 70 Q0 30 -20 60" fill="#2d6a4f" opacity="0.85"/>
  </g>

  <g transform="translate(30, 280) scale(1)">
    <path d="M60 400 Q80 230 50 80" stroke="#4a3525" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M50 80 Q110 20 160 50 Q110 -10 50 80 Q-20 10 -40 50" fill="#2d6a4f" opacity="0.85"/>
  </g>

  <!-- Foreground lush tea / crop bushes -->
  <g fill="#1b4332">
    <ellipse cx="200" cy="910" rx="260" ry="90" fill="#1b4332"/>
    <ellipse cx="580" cy="920" rx="300" ry="95" fill="#2d6a4f"/>
    <ellipse cx="1000" cy="915" rx="320" ry="100" fill="#1b4332"/>
    <ellipse cx="1450" cy="925" rx="280" ry="90" fill="#2d6a4f"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'hero-farm.svg'), heroSvg);

// 2. Featured Farm House SVG
const farmhouseSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
  <defs>
    <linearGradient id="fhSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#f0fdf4"/>
    </linearGradient>
    <linearGradient id="roofGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <linearGradient id="lawnGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
  </defs>

  <rect width="1000" height="650" fill="url(#fhSky)"/>

  <!-- Background Palms and Trees -->
  <g fill="#166534" opacity="0.8">
    <circle cx="120" cy="260" r="110"/>
    <circle cx="280" cy="270" r="120"/>
    <circle cx="780" cy="250" r="130"/>
    <circle cx="900" cy="270" r="110"/>
  </g>

  <!-- Palm Trunks -->
  <path d="M120 400 L120 280" stroke="#78350f" stroke-width="8"/>
  <path d="M880 400 L880 270" stroke="#78350f" stroke-width="8"/>

  <!-- Farmhouse Building Structure -->
  <!-- Main Wall -->
  <rect x="220" y="320" width="560" height="170" rx="4" fill="url(#wallGrad)" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Base Plinth -->
  <rect x="200" y="480" width="600" height="25" fill="#e2e8f0" stroke="#94a3b8"/>
  
  <!-- Front Porch / Verandah Columns -->
  <g fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5">
    <rect x="250" y="340" width="16" height="140" />
    <rect x="360" y="340" width="16" height="140" />
    <rect x="470" y="340" width="16" height="140" />
    <rect x="580" y="340" width="16" height="140" />
    <rect x="690" y="340" width="16" height="140" />
  </g>

  <!-- Roof - Terracotta Pitched Roof -->
  <polygon points="180,325 500,210 820,325" fill="url(#roofGrad)" stroke="#7c2d12" stroke-width="3"/>
  <polygon points="500,210 500,230 820,325 800,325" fill="#c2410c" opacity="0.7"/>

  <!-- Windows with Wooden / Dark Green Shutters -->
  <g fill="#0284c7" stroke="#334155" stroke-width="3">
    <!-- Window 1 -->
    <rect x="285" y="360" width="55" height="70" rx="3" fill="#bae6fd"/>
    <line x1="312.5" y1="360" x2="312.5" y2="430"/>
    <line x1="285" y1="395" x2="340" y2="395"/>

    <!-- Window 2 -->
    <rect x="395" y="360" width="55" height="70" rx="3" fill="#bae6fd"/>
    <line x1="422.5" y1="360" x2="422.5" y2="430"/>
    <line x1="395" y1="395" x2="450" y2="395"/>

    <!-- Main Teak Wooden Double Door -->
    <rect x="505" y="355" width="60" height="125" rx="2" fill="#78350f" stroke="#451a03" stroke-width="2"/>
    <line x1="535" y1="355" x2="535" y2="480" stroke="#451a03" stroke-width="2"/>
    <circle cx="528" cy="420" r="3" fill="#fbbf24"/>
    <circle cx="542" cy="420" r="3" fill="#fbbf24"/>

    <!-- Window 3 -->
    <rect x="605" y="360" width="55" height="70" rx="3" fill="#bae6fd"/>
    <line x1="632.5" y1="360" x2="632.5" y2="430"/>
    <line x1="605" y1="395" x2="660" y2="395"/>
  </g>

  <!-- Front Lawn and Pathway -->
  <path d="M0 500 Q500 480 1000 500 L1000 650 L0 650 Z" fill="url(#lawnGrad)"/>
  
  <!-- Stone Paver Walkway -->
  <polygon points="505,505 565,505 640,650 430,650" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/>
  <g stroke="#94a3b8" stroke-width="2">
    <line x1="485" y1="530" x2="575" y2="530"/>
    <line x1="465" y1="565" x2="595" y2="565"/>
    <line x1="445" y1="605" x2="615" y2="605"/>
  </g>

  <!-- Decorative Shrubs & Flowering Plants -->
  <g fill="#15803d">
    <ellipse cx="230" cy="505" rx="40" ry="25"/>
    <ellipse cx="770" cy="505" rx="40" ry="25"/>
    <circle cx="210" cy="500" r="6" fill="#f43f5e"/>
    <circle cx="240" cy="495" r="5" fill="#fbbf24"/>
    <circle cx="760" cy="495" r="6" fill="#ec4899"/>
    <circle cx="785" cy="502" r="5" fill="#f43f5e"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'featured-farmhouse.svg'), farmhouseSvg);

// 3. Journey Steps SVGs
const journey1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="j1Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#fef08a"/></linearGradient>
    <linearGradient id="j1Ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#78350f"/></linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#j1Sky)"/>
  <path d="M0 240 Q200 210 400 240 L400 400 L0 400 Z" fill="url(#j1Ground)"/>
  <!-- Topo contour grid lines -->
  <path d="M20 270 Q200 250 380 270 M10 310 Q200 280 390 310 M0 360 Q200 320 400 360" stroke="#fef3c7" stroke-width="1.5" stroke-dasharray="4,4" fill="none"/>
  <!-- Survey Theodolite Tripod -->
  <g transform="translate(140, 110)">
    <!-- Tripod Legs -->
    <line x1="60" y1="90" x2="10" y2="230" stroke="#f59e0b" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="90" x2="60" y2="240" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="90" x2="110" y2="230" stroke="#b45309" stroke-width="7" stroke-linecap="round"/>
    <!-- Theodolite Body -->
    <rect x="42" y="55" width="36" height="35" rx="4" fill="#047857"/>
    <circle cx="60" cy="72" r="10" fill="#065f46" stroke="#fbbf24" stroke-width="2"/>
    <!-- Lens Tube -->
    <polygon points="35,65 95,65 90,80 30,80" fill="#0f172a"/>
    <circle cx="95" cy="72" r="8" fill="#38bdf8"/>
    <!-- Target laser / measurement line -->
    <line x1="95" y1="72" x2="220" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
  </g>
  <!-- Background Palms -->
  <g fill="#166534" opacity="0.6">
    <circle cx="40" cy="200" r="40"/>
    <circle cx="360" cy="190" r="45"/>
  </g>
</svg>`;

const journey2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="j2Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#e0f2fe"/></linearGradient>
    <linearGradient id="j2Soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#713f12"/></linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#j2Sky)"/>
  <path d="M0 220 Q200 200 400 220 L400 400 L0 400 Z" fill="url(#j2Soil)"/>
  <!-- Furrows -->
  <g stroke="#451a03" stroke-width="4" fill="none">
    <path d="M20 250 Q200 240 380 270"/>
    <path d="M10 290 Q200 280 390 320"/>
    <path d="M0 340 Q200 320 400 370"/>
  </g>
  <!-- Heavy Tractor -->
  <g transform="translate(100, 140)">
    <!-- Cabin -->
    <rect x="60" y="30" width="65" height="60" rx="6" fill="#15803d"/>
    <rect x="70" y="40" width="45" height="35" rx="3" fill="#bae6fd"/>
    <rect x="120" y="55" width="80" height="35" rx="4" fill="#16a34a"/>
    <!-- Exhaust pipe -->
    <rect x="175" y="25" width="8" height="30" fill="#334155"/>
    <!-- Big Rear Wheel -->
    <circle cx="65" cy="110" r="38" fill="#1e293b"/>
    <circle cx="65" cy="110" r="24" fill="#cbd5e1" stroke="#eab308" stroke-width="4"/>
    <!-- Small Front Wheel -->
    <circle cx="170" cy="120" r="25" fill="#1e293b"/>
    <circle cx="170" cy="120" r="14" fill="#cbd5e1" stroke="#eab308" stroke-width="3"/>
    <!-- Tillage Implement attached -->
    <path d="M20 110 L50 110 M25 125 L10 145 M35 125 L20 145" stroke="#475569" stroke-width="5"/>
  </g>
</svg>`;

const journey3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="j3Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#ecfdf5"/></linearGradient>
    <linearGradient id="j3Soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#854d0e"/><stop offset="100%" stop-color="#3f2305"/></linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#j3Sky)"/>
  <path d="M0 240 L400 240 L400 400 L0 400 Z" fill="url(#j3Soil)"/>
  <!-- Drip Pipes -->
  <line x1="0" y1="300" x2="400" y2="300" stroke="#0f172a" stroke-width="10"/>
  <line x1="0" y1="350" x2="400" y2="350" stroke="#0f172a" stroke-width="10"/>
  <!-- Water Drippers & Droplets -->
  <circle cx="80" cy="300" r="5" fill="#0284c7"/>
  <circle cx="200" cy="300" r="5" fill="#0284c7"/>
  <circle cx="320" cy="300" r="5" fill="#0284c7"/>
  <circle cx="80" cy="315" r="4" fill="#38bdf8"/>
  <circle cx="200" cy="315" r="4" fill="#38bdf8"/>
  <circle cx="320" cy="315" r="4" fill="#38bdf8"/>
  <!-- Young Healthy Plant Saplings -->
  <g transform="translate(60, 210)">
    <path d="M20 90 Q20 40 20 10" stroke="#16a34a" stroke-width="4"/>
    <path d="M20 40 Q40 20 60 30 Q40 50 20 40" fill="#22c55e"/>
    <path d="M20 30 Q-5 10 -20 20 Q-5 40 20 30" fill="#4ade80"/>
  </g>
  <g transform="translate(180, 200)">
    <path d="M20 100 Q20 40 20 0" stroke="#16a34a" stroke-width="4.5"/>
    <path d="M20 40 Q50 15 70 30 Q45 55 20 40" fill="#22c55e"/>
    <path d="M20 25 Q-15 5 -30 20 Q-10 45 20 25" fill="#4ade80"/>
  </g>
  <g transform="translate(300, 210)">
    <path d="M20 90 Q20 40 20 10" stroke="#16a34a" stroke-width="4"/>
    <path d="M20 40 Q40 20 60 30 Q40 50 20 40" fill="#22c55e"/>
    <path d="M20 30 Q-5 10 -20 20 Q-5 40 20 30" fill="#4ade80"/>
  </g>
</svg>`;

const journey4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="j4Sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#fef08a"/></linearGradient>
    <linearGradient id="j4Grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#14532d"/></linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#j4Sky)"/>
  <path d="M0 260 Q200 240 400 260 L400 400 L0 400 Z" fill="url(#j4Grass)"/>
  <!-- Orchard Fruit Tree -->
  <path d="M200 320 L200 180" stroke="#78350f" stroke-width="22" stroke-linecap="round"/>
  <!-- Lush Canopy -->
  <circle cx="160" cy="140" r="70" fill="#15803d"/>
  <circle cx="240" cy="130" r="75" fill="#16a34a"/>
  <circle cx="200" cy="90" r="65" fill="#22c55e"/>
  <!-- Rich Fruit Yield (Mangoes / Citrus) -->
  <circle cx="150" cy="120" r="14" fill="#eab308"/>
  <circle cx="180" cy="150" r="13" fill="#f59e0b"/>
  <circle cx="220" cy="115" r="15" fill="#ea580c"/>
  <circle cx="250" cy="145" r="13" fill="#eab308"/>
  <circle cx="190" cy="85" r="12" fill="#fbbf24"/>
  <circle cx="130" cy="160" r="11" fill="#ea580c"/>
  <!-- Harvest Crate with Fresh Produce -->
  <g transform="translate(140, 290)">
    <rect x="0" y="20" width="120" height="70" rx="5" fill="#d97706" stroke="#92400e" stroke-width="3"/>
    <line x1="0" y1="42" x2="120" y2="42" stroke="#92400e" stroke-width="2"/>
    <line x1="0" y1="65" x2="120" y2="65" stroke="#92400e" stroke-width="2"/>
    <!-- Stacked produce in crate -->
    <circle cx="25" cy="15" r="16" fill="#ea580c"/>
    <circle cx="55" cy="12" r="17" fill="#eab308"/>
    <circle cx="85" cy="14" r="16" fill="#f59e0b"/>
    <circle cx="40" cy="0" r="14" fill="#fbbf24"/>
    <circle cx="70" cy="-2" r="15" fill="#ea580c"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'journey-1.svg'), journey1);
fs.writeFileSync(path.join(assetsDir, 'journey-2.svg'), journey2);
fs.writeFileSync(path.join(assetsDir, 'journey-3.svg'), journey3);
fs.writeFileSync(path.join(assetsDir, 'journey-4.svg'), journey4);

// 4. CTA Background SVG
const ctaBg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 500" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#072e18" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#0e3922" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#14532d" stop-opacity="0.82"/>
    </linearGradient>
  </defs>
  <!-- Background Nature Art -->
  <rect width="1600" height="500" fill="#0f3d23"/>
  <path d="M0 320 Q400 240 800 300 T1600 260 L1600 500 L0 500 Z" fill="#15803d" opacity="0.6"/>
  <path d="M0 380 Q400 310 800 360 T1600 340 L1600 500 L0 500 Z" fill="#166534" opacity="0.9"/>
  <!-- Palm silhouettes on right -->
  <g fill="#072e18" opacity="0.5">
    <ellipse cx="1400" cy="200" rx="120" ry="120"/>
    <ellipse cx="1500" cy="230" rx="140" ry="140"/>
  </g>
  <rect width="1600" height="500" fill="url(#ctaGrad)"/>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'cta-bg.svg'), ctaBg);

console.log('Static core SVG assets successfully created in public/assets/');
