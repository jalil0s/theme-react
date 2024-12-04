import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image?: string;
  images?: string[];
  category?: string;
  isAvailable: number;
  metadata?: {
    shortDescription: string;
    features: string[];
    specifications: string[];
    compatibility: string[];
    valuePropositions: string[];
    commonUses: string[];
    advantages: string[];
    whyBuy: string[];
    mainBenefits: string[];
    targetAudience: string[];
  };
}

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [
    {
      id: '1',
      name: 'Professional Suite 2024',
      description: 'Complete software suite for professional work',
      price: 199.99,
      originalPrice: 299.99,
      discount: 33,
      category: 'Office',
      isAvailable: 1,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      metadata: {
        shortDescription: 'All-in-one professional software suite',
        features: ['Word Processing', 'Spreadsheets', 'Presentations'],
        specifications: ['Windows/Mac Compatible', 'Cloud Storage'],
        compatibility: ['Windows 10/11', 'macOS'],
        valuePropositions: ['Increased Productivity', 'Professional Templates'],
        commonUses: ['Business', 'Education', 'Personal'],
        advantages: ['Easy to Use', 'Regular Updates'],
        whyBuy: ['Best Value', 'Complete Solution'],
        mainBenefits: ['Time Saving', 'Professional Results'],
        targetAudience: ['Professionals', 'Students']
      }
    },
    {
      id: '2',
      name: 'Security Plus',
      description: 'Advanced security software for complete protection',
      price: 89.99,
      originalPrice: 129.99,
      discount: 30,
      category: 'Security',
      isAvailable: 1,
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500',
      metadata: {
        shortDescription: 'Complete digital security solution',
        features: ['Antivirus', 'Firewall', 'VPN'],
        specifications: ['Real-time Protection', 'Cloud Backup'],
        compatibility: ['All Devices'],
        valuePropositions: ['Complete Protection', '24/7 Security'],
        commonUses: ['Personal', 'Business'],
        advantages: ['Easy Setup', 'Low Resource Usage'],
        whyBuy: ['Comprehensive Protection', 'Affordable'],
        mainBenefits: ['Peace of Mind', 'Data Protection'],
        targetAudience: ['Home Users', 'Small Business']
      }
    },
    {
      id: '3',
      name: 'Creative Studio Pro',
      description: 'Professional creative suite for designers',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      category: 'Design',
      isAvailable: 1,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500',
      metadata: {
        shortDescription: 'Complete creative design suite',
        features: ['Photo Editing', 'Vector Graphics', 'Digital Art'],
        specifications: ['4K Support', 'GPU Acceleration'],
        compatibility: ['Windows/Mac'],
        valuePropositions: ['Professional Tools', 'Industry Standard'],
        commonUses: ['Design', 'Photography', 'Digital Art'],
        advantages: ['Professional Features', 'Regular Updates'],
        whyBuy: ['Industry Leading', 'Complete Package'],
        mainBenefits: ['Professional Results', 'Creative Freedom'],
        targetAudience: ['Designers', 'Artists', 'Photographers']
      }
    }
  ],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Products are already in the initial state
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch products', isLoading: false });
    }
  }
}));