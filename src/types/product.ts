export interface ProductVariant {
  name: string;
  description: string;
  price: number;
  original_price?: number;
  billingCycle: 'monthly' | 'annual' | 'once';
  discountPercentage: number;
  features: string[];
}

export interface ProductMetadata {
  shortDescription: string;
  longDescription: string;
  features: string[];
  specifications: string[];
  compatibility: string[];
  valuePropositions: string[];
  commonUses: string[];
  advantages: string[];
  whyBuy: string[];
  mainBenefits: string[];
  targetAudience: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image?: string;
  images?: string[];
  category?: string;
  rating?: number;
  reviews?: number;
  slug?: string;
  variants?: ProductVariant[];
  isAvailable: number;
  metadata?: ProductMetadata;
}