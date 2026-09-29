import React from 'react';

interface IconProps {
  className?: string;
}

/**
 * 1. Land Preparation & Development Works - Tractor
 */
export const TractorIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Large Rear Wheel */}
    <circle cx="15" cy="31" r="8" strokeWidth="3" />
    <circle cx="15" cy="31" r="2.8" fill="currentColor" />
    {/* Small Front Wheel */}
    <circle cx="36" cy="33" r="5" strokeWidth="2.6" />
    <circle cx="36" cy="33" r="1.8" fill="currentColor" />
    {/* Tractor Cab & Body */}
    <path d="M15 23 V14 H25 V23" />
    <path d="M25 18 H37 L39 26 H42 C42.6 26 43 26.4 43 27 V33 H31" />
    <path d="M25 25 H15" />
    {/* Exhaust Pipe */}
    <line x1="33" y1="18" x2="33" y2="11" strokeWidth="2.4" />
    <path d="M33 11 L35 9" strokeWidth="2" />
    {/* Steering Wheel */}
    <path d="M22 16 L19 18" strokeWidth="2.2" />
  </svg>
);

/**
 * 2. Farm Layout & Planning - Map Grid with Location Pin
 */
export const FarmLayoutIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Isometric Farm Map Grid */}
    <path d="M6 34 L18 19 H38 L26 34 Z" fill="currentColor" fillOpacity="0.06" />
    <line x1="12" y1="26.5" x2="32" y2="26.5" />
    <line x1="24.5" y1="19" x2="12.5" y2="34" />
    <line x1="31.5" y1="19" x2="19.5" y2="34" />
    {/* Outer boundary */}
    <path d="M6 34 L18 19 H38 L26 34 Z" />
    {/* Location Pin */}
    <path d="M35 7 C31.7 7 29 9.7 29 13 C29 17.5 35 23 35 23 C35 23 41 17.5 41 13 C41 9.7 38.3 7 35 7 Z" fill="currentColor" stroke="none" />
    <circle cx="35" cy="13" r="2.2" fill="#ffffff" stroke="none" />
  </svg>
);

/**
 * 3. Drip Irrigation Installation - Water Droplet
 */
export const DripIrrigationIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="M24 7 C24 7 13 20 13 28.5 C13 34.9 17.9 40 24 40 C30.1 40 35 34.9 35 28.5 C35 20 24 7 24 7 Z"
      fill="currentColor"
    />
    {/* Reflection Highlight */}
    <path
      d="M19.5 22 C17.5 25 17.5 29 19.5 32"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * 4. Water Tank Works - Cylindrical Storage Tank
 */
export const WaterTankIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Top Rim */}
    <ellipse cx="24" cy="14" rx="14" ry="4.5" />
    {/* Outer Tank Walls */}
    <line x1="10" y1="14" x2="10" y2="35" />
    <line x1="38" y1="14" x2="38" y2="35" />
    {/* Reinforcing Ring 1 */}
    <path d="M10 21 C10 23.5 16.3 25.5 24 25.5 C31.7 25.5 38 23.5 38 21" />
    {/* Reinforcing Ring 2 */}
    <path d="M10 28 C10 30.5 16.3 32.5 24 32.5 C31.7 32.5 38 30.5 38 28" />
    {/* Base Curve */}
    <path d="M10 35 C10 37.5 16.3 39.5 24 39.5 C31.7 39.5 38 37.5 38 35" />
    {/* Top Supply Pipe */}
    <path d="M30 11.5 V7 H34" strokeWidth="2.2" />
  </svg>
);

/**
 * 5. All Types of Tree Plantation - Sprout / Seedling
 */
export const TreePlantationIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
    {/* Central Stem */}
    <path d="M22.5 40 V24 C22.5 20.5 23 17.5 24 15.5 C25 17.5 25.5 20.5 25.5 24 V40 H22.5 Z" />
    {/* Left Leaf */}
    <path d="M23 23 C17 21 11 15 13 8 C19 8 23 15 23 23 Z" />
    {/* Right Leaf */}
    <path d="M25 23 C31 21 37 15 35 8 C29 8 25 15 25 23 Z" />
    {/* Base Soil Line */}
    <path d="M16 40 Q24 38 32 40 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/**
 * 6. Farm Maintenance (AMC) - Cog / Gear
 */
export const FarmMaintenanceIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Inner Central Hole */}
    <circle cx="24" cy="24" r="5.5" strokeWidth="2.8" />
    {/* Teeth */}
    <path d="M22 6 H26 V10 H22 Z" fill="currentColor" />
    <path d="M22 38 H26 V42 H22 Z" fill="currentColor" />
    <path d="M6 22 H10 V26 H6 Z" fill="currentColor" />
    <path d="M38 22 H42 V26 H38 Z" fill="currentColor" />
    <path d="M11.3 11.3 L14.1 14.1 L11.3 16.9 L8.5 14.1 Z" fill="currentColor" />
    <path d="M33.9 33.9 L36.7 36.7 L33.9 39.5 L31.1 36.7 Z" fill="currentColor" />
    <path d="M33.9 14.1 L36.7 11.3 L39.5 14.1 L36.7 16.9 Z" fill="currentColor" />
    <path d="M11.3 36.7 L8.5 33.9 L11.3 31.1 L14.1 33.9 Z" fill="currentColor" />
    {/* Gear Body Circle */}
    <circle cx="24" cy="24" r="12.5" />
  </svg>
);

/**
 * 7. Harvest Support - Wheat / Grain Stalk
 */
export const HarvestSupportIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
    {/* Central Stem */}
    <line x1="24" y1="42" x2="24" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    {/* Top Tip */}
    <path d="M24 7 C22 9 22 13 24 15 C26 13 26 9 24 7 Z" />
    {/* Pair 1 */}
    <path d="M23 15 C18 14 16 18 19 21 C22 21 23 18 23 15 Z" />
    <path d="M25 15 C30 14 32 18 29 21 C26 21 25 18 25 15 Z" />
    {/* Pair 2 */}
    <path d="M23 21 C17 20 15 24 18 27 C21 27 23 24 23 21 Z" />
    <path d="M25 21 C31 20 33 24 30 27 C27 27 25 24 25 21 Z" />
    {/* Pair 3 */}
    <path d="M23 27 C17 26 15 30 18 33 C21 33 23 30 23 27 Z" />
    <path d="M25 27 C31 26 33 30 30 33 C27 33 25 30 25 27 Z" />
    {/* Pair 4 */}
    <path d="M23 33 C18 32 16 36 19 38 C22 38 23 35 23 33 Z" />
    <path d="M25 33 C30 32 32 36 29 38 C26 38 25 35 25 33 Z" />
  </svg>
);

/**
 * 8. Buyback Assistance - Handshake
 */
export const BuybackAssistanceIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Left Sleeve */}
    <path d="M6 31 L12 25 L16 28 L11 35 Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M12 25 L21 18 C22.5 16.5 25 16.5 26.5 18 L29 20.5" />
    {/* Right Sleeve */}
    <path d="M42 31 L36 25 L32 28 L37 35 Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M36 25 L27 18 C25.5 16.5 23 16.5 21.5 18 L19 20.5" />
    {/* Fingers */}
    <path d="M20 22 C19.5 24 21 26 23 26 H27 C28.5 26 29.5 24.5 29 23" />
    <path d="M21 26 C20.5 28 22 30 24 30 H26 C27.5 30 28.5 28.5 28 27" />
  </svg>
);

/**
 * 9. Labour House - Simple House Silhouette with Door
 */
export const LabourHouseIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
    {/* Roof and House Body */}
    <path d="M24 7 L6 22 H11 V39 H37 V22 H42 Z" />
    {/* Cutout Doorway */}
    <rect x="20" y="26" width="8" height="13" rx="1" fill="#ffffff" />
  </svg>
);

/**
 * 10. Farm House - Farmhouse Silhouette with Trees
 */
export const FarmHouseIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
    {/* Trees Behind House */}
    <circle cx="37" cy="18" r="7" />
    <circle cx="34" cy="24" r="6" />
    <circle cx="42" cy="23" r="5" />
    <rect x="36" y="24" width="3" height="15" />
    {/* House Body */}
    <path d="M20 14 L8 24 H12 V39 H32 V24 H36 Z" />
    {/* Chimney */}
    <rect x="25" y="12" width="3" height="6" />
    {/* Cutout Door & Window */}
    <rect x="18" y="28" width="6" height="11" fill="#ffffff" />
    <rect x="26" y="25" width="4" height="4" fill="#ffffff" />
  </svg>
);

/**
 * 11. End-to-End Farm Management Services - Rising Sun Over Farmland Furrows
 */
export const FarmManagementIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
    {/* Rising Sun Disk */}
    <circle cx="24" cy="20" r="6" />
    {/* Radiating Sun Rays */}
    <line x1="24" y1="8" x2="24" y2="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="12" x2="18" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="12" x2="30" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="12" y1="19" x2="15" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="36" y1="19" x2="33" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Furrow Rows */}
    <path d="M8 30 Q24 23 40 30 Q24 26 8 30 Z" />
    <path d="M6 35 Q24 28 42 35 Q24 31 6 35 Z" />
    <path d="M4 40 Q24 33 44 40 Q24 36 4 40 Z" />
    {/* Furrow Accents */}
    <line x1="16" y1="27" x2="12" y2="40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="25" x2="24" y2="40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="27" x2="36" y2="40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Map service slugs / iconNames to their exact SVG icons
 */
export const getServiceIcon = (slugOrIcon: string, className = "w-10 h-10 text-[#15803d]") => {
  switch (slugOrIcon) {
    case 'land-preparation-and-development':
    case 'Tractor':
      return <TractorIcon className={className} />;
    case 'farm-layout-and-planning':
    case 'Map':
      return <FarmLayoutIcon className={className} />;
    case 'drip-irrigation-installation':
    case 'Droplets':
      return <DripIrrigationIcon className={className} />;
    case 'water-tank-works':
    case 'Database':
      return <WaterTankIcon className={className} />;
    case 'all-types-of-tree-plantation':
    case 'Sprout':
      return <TreePlantationIcon className={className} />;
    case 'farm-maintenance-amc':
    case 'Wrench':
      return <FarmMaintenanceIcon className={className} />;
    case 'harvest-support':
    case 'HandCoins':
      return <HarvestSupportIcon className={className} />;
    case 'buyback-assistance':
    case 'Handshake':
      return <BuybackAssistanceIcon className={className} />;
    case 'labour-house':
    case 'Home':
      return <LabourHouseIcon className={className} />;
    case 'farm-house':
    case 'Building':
      return <FarmHouseIcon className={className} />;
    case 'end-to-end-farm-management':
    case 'ShieldCheck':
      return <FarmManagementIcon className={className} />;
    default:
      return <TreePlantationIcon className={className} />;
  }
};
