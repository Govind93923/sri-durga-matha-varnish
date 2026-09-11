export interface ColorOption {
  name: string;
  hex: string;
  borderHex?: string;
  description?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt?: string;
  applications: string[];
  colours: ColorOption[];
  packagingOptions: string[];
  technicalInfo: string;
  badge?: string;
  recommendedFor?: string;
}

export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  liquidColor: string;
  glowColor: string;
  description: string;
  image: string;
  badge?: string;
  popularUse?: string;
}

export interface PackagingOption {
  id: string;
  title: string;
  capacity: string;
  category: 'bottle' | 'can' | 'drum' | 'box';
  material: string;
  description: string;
  image: string;
  secondaryImage?: string;
  dimensions?: string;
  suitableFor: string;
  badge?: string;
}

export interface EnquiryFormState {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  productInterestedIn: string;
  requiredColour: string;
  packagingRequirement: string;
  quantity: string;
  message: string;
}
