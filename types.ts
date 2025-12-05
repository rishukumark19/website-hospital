
export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  DEPARTMENTS = 'DEPARTMENTS',
  WELLNESS = 'WELLNESS',
  ASSISTANT = 'ASSISTANT',
  APPOINTMENT = 'APPOINTMENT',
  LOCATOR = 'LOCATOR',
  CONTACT = 'CONTACT',
  HEALTH_CONCERNS = 'HEALTH_CONCERNS',
  FAQ = 'FAQ',
  BLOG = 'BLOG',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS',
  SERVICEDETAIL_CT = 'SERVICEDETAIL_CT',
  SERVICEDETAIL_MRI = 'SERVICEDETAIL_MRI',
  SERVICEDETAIL_FULL_BODY = 'SERVICEDETAIL_FULL_BODY',
  SERVICEDETAIL_DIABETES = 'SERVICEDETAIL_DIABETES',
  SERVICEDETAIL_CARDIAC = 'SERVICEDETAIL_CARDIAC',
  TEST_DIRECTORY = 'TEST_DIRECTORY',
  HOME_COLLECTION = 'HOME_COLLECTION',
  REPORT_DOWNLOAD = 'REPORT_DOWNLOAD'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  iconName: string; // Mapping to Lucide icon name
  category: string;
}

export interface TestItem {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  tat: string; // Turnaround time
  isFastingRequired: boolean;
  sampleType?: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface NavLink {
  name: string;
  path: string;
  view: View;
}

export interface QuickAction {
  title: string;
  iconName: string;
  link: string;
}

export interface HealthPackage {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  testCount: number;
  isBestSeller: boolean;
  category?: string;
  description?: string;
}

export interface TestCategory {
  name: string;
  iconName: string;
}

export interface HealthConcern {
  id: string;
  title: string;
  iconName: string;
}

export interface LabLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  availableServices: string[];
}
