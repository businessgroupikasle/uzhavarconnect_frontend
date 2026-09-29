export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Lucide icon name mapping
  heroImage: string;
  galleryImages: string[];
  scopeOfWork: string[];
  benefits: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  category: 'development' | 'infrastructure' | 'cultivation' | 'management';
  highlightBadge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  area: string;
  category: 'Land Development' | 'Irrigation' | 'Plantation' | 'Farm House' | 'Harvest';
  description: string;
  image: string;
  completionYear: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  farmType: string;
  acres: string;
  rating: number;
  avatar?: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export interface EnquiryFormData {
  fullName: string;
  mobile: string;
  email?: string;
  district: string;
  service: string;
  farmSize?: string;
  preferredTime?: string;
  details?: string;
  fileName?: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay?: string;
  whatsappMessage: string;
  email: string;
  address: string;
  building?: string;
  street?: string;
  locality?: string;
  city?: string;
  state?: string;
  pincode?: string;
  fullAddress?: string;
  workingHours: string;
}

