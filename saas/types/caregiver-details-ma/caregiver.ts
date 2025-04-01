export interface FeatureItem {
  title: string;
  description: string;
}

/**
 * Interface for certification items
 */
export interface CertificationItemType {
  title: string;
  date: string;
  issuer: string;
  description?: string;
}

/**
 * Interface for available features
 */
export interface AvailableFeatures {
  caregiverSpecificity: FeatureItem[];
  keyFeatures: FeatureItem[];
  generalFeatures: FeatureItem[];
}

/**
 * Interface for the complete caregiver data structure
 */
export interface CaregiverData {
  id: string;
  name: string;
  caregiverName: string;
  caregiverId: string;
  tagline: string;
  photo: string;
  about: string;
  totalClients: number;
  yearsOfExcellence: number;
  liveIn: string;
  clientSatisfactionRate: string;
  caregiverSpecificity: FeatureItem[];
  keyFeatures: FeatureItem[];
  generalFeatures: FeatureItem[];
  certifications: CertificationItem[];
  availableFeatures: AvailableFeatures;
}
