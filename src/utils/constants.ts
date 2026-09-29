import { ContactInfo } from '../types';

export const COMPANY_NAME = "Uzhavar Connect";
export const COMPANY_TAGLINE = "Agriculture Farm Land Developer";
export const COMPANY_MOTTO = "Grow Your Land. Grow Your Future.";

export const CONTACT_DETAILS: ContactInfo = {
  phone: "+917550119994",
  phoneDisplay: "+91 755 011 9994",
  whatsapp: "+917550119994",
  whatsappDisplay: "+91 755 011 9994",
  whatsappMessage: "Hello Uzhavar Connect, I am interested in developing my agricultural farmland and would like a free consultation.",
  email: "info@uzhavarconnect.com",
  building: "No. 263/1B",
  street: "SENTAMIL NAGAR PHASE 2, PAPPAMPATTI",
  locality: "EDAYARPALAYAM",
  city: "Coimbatore",
  state: "Tamil Nadu",
  pincode: "641016",
  address: "No. 263/1B, SENTAMIL NAGAR PHASE 2, PAPPAMPATTI, EDAYARPALAYAM, Coimbatore, Tamil Nadu - 641016",
  fullAddress: "No. 263/1B, SENTAMIL NAGAR PHASE 2, PAPPAMPATTI, EDAYARPALAYAM, Coimbatore, Tamil Nadu - 641016",
  workingHours: "Mon - Sat: 8:00 AM - 7:00 PM",
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const TRUST_STATS = [
  { value: "500+", label: "Acres Developed", subtext: "Across multiple districts" },
  { value: "300+", label: "Happy Farmers", subtext: "Long-term relationships" },
  { value: "High", label: "Productivity Farms", subtext: "Yield-optimized methods" },
  { value: "Better", label: "ROI Opportunities", subtext: "Sustainable agriculture" },
];

export const FARM_JOURNEY_STEPS = [
  {
    step: 1,
    title: "Assess Land",
    subtitle: "Soil analysis & land evaluation",
    description: "Detailed on-site topography survey, soil test, water quality check, and elevation assessment.",
  },
  {
    step: 2,
    title: "Develop",
    subtitle: "Land preparation & infra development",
    description: "Land clearing, leveling, bunding, fencing, borewell drilling, and water storage construction.",
  },
  {
    step: 3,
    title: "Cultivate",
    subtitle: "Plantation, irrigation & ongoing support",
    description: "Automated drip irrigation setup, high-yield sapling plantation, mulching, and nutrient scheduling.",
  },
  {
    step: 4,
    title: "Harvest",
    subtitle: "Harvest support & market linkages",
    description: "Systematic harvesting, post-harvest grading, cold chain support, and buyback market linkages.",
  },
];

export const DISTRICTS_TAMIL_NADU = [
  "Coimbatore", "Tiruppur", "Erode", "Salem", "Dindigul", "Madurai", 
  "Theni", "Karur", "Namakkal", "Dharmapuri", "Krishnagiri", "Tiruchirappalli", 
  "Thanjavur", "Pudukkottai", "Sivaganga", "Virudhunagar", "Tirunelveli", 
  "Tenkasi", "Thoothukudi", "Kanyakumari", "Ramanathapuram", "Ariyalur", 
  "Perambalur", "Cuddalore", "Villupuram", "Kallakurichi", "Tiruvannamalai", 
  "Vellore", "Ranipet", "Tirupathur", "Kanchipuram", "Chengalpattu", 
  "Tiruvallur", "Chennai", "Nagapattinam", "Mayiladuthurai", "Tiruvarur", "Nilgiris",
  "Other / Outside TN"
];
