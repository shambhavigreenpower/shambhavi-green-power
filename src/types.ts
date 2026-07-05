export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  gujaratiTagline?: string;
  owner: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  address: string;
  googleMapsEmbed: string;
  hours: string;
}

export interface PartnerBrand {
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  caption: string;
  location: string;
  type: 'residential' | 'commercial' | 'agricultural' | string;
  size: string;
  date: string;
  image: string;
}

export interface PricingOption {
  size: string;
  cost?: string;
  subsidy: string;
  netCost?: string;
  savings: string;
  description: string;
}

export interface TechnicalSpec {
  name: string;
  value: string;
}

export interface ProcessStep {
  num: number;
  title: string;
  text: string;
}

export interface ServiceDetail {
  title: string;
  gujaratiTitle: string;
  description: string;
  detailedDescription: string;
  heroImage: string;
  subsidyBadge: string;
  features: string[];
  pricingOptions: PricingOption[];
  specs: TechnicalSpec[];
  steps: ProcessStep[];
  faqs: { q: string; a: string; }[];
}

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  stars: number;
  text: string;
}

export interface WhyChooseUsCard {
  icon: string;
  title: string;
  desc: string;
}

export interface QuoteFormValues {
  name: string;
  phone: string;
  email?: string;
  city: string;
  serviceType: string;
  systemSize: string;
  monthlyBill: string;
  message?: string;
}
