
export enum View {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  WELLNESS = 'WELLNESS',
  ASSISTANT = 'ASSISTANT',
  APPOINTMENT = 'APPOINTMENT',
  LOCATOR = 'LOCATOR',
  HEALTH_CONCERNS = 'HEALTH_CONCERNS'
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
