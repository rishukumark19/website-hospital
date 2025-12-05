
import { NavLink, QuickAction, HealthPackage, TestCategory, LabLocation, TestItem, HealthConcern } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Health Packages', path: '/wellness' },
  { name: 'Lab Locator', path: '/locator' },
  { name: 'Contact', path: '/contact' },
];

export const quickActions: QuickAction[] = [
  { title: 'Book Home Visit', iconName: 'Home', link: '/book-visit' },
  { title: 'Find a Lab', iconName: 'MapPin', link: '/locator' },
  { title: 'Download Report', iconName: 'FileText', link: '/reports' },
];

export const popularPackages: HealthPackage[] = [
  {
    id: 1,
    title: 'Full Body Checkup Basic',
    price: 1500,
    discountedPrice: 999,
    testCount: 45,
    isBestSeller: true,
    category: 'Full Body',
    description: 'Essential screening for liver, kidney, and blood sugar.'
  },
  {
    id: 2,
    title: 'Advanced Heart Care',
    price: 2800,
    discountedPrice: 1999,
    testCount: 62,
    isBestSeller: true,
    category: 'Specialized',
    description: 'Comprehensive cardiac risk assessment including Lipid Profile & ECG.'
  },
  {
    id: 3,
    title: 'Diabetes Screening Pack',
    price: 1000,
    discountedPrice: 699,
    testCount: 18,
    isBestSeller: false,
    category: 'Chronic',
    description: 'Monitor your blood sugar levels effectively.'
  },
  {
    id: 4,
    title: 'Women Wellness Plus',
    price: 3200,
    discountedPrice: 2499,
    testCount: 55,
    isBestSeller: false,
    category: 'Women',
    description: 'Tailored for women including Thyroid, Iron, and Hormone study.'
  },
  {
    id: 5,
    title: 'Senior Citizen Care Premium',
    price: 4500,
    discountedPrice: 3499,
    testCount: 85,
    isBestSeller: true,
    category: 'Senior',
    description: 'Complete geriatric profile covering bone health, heart, and vital organs.'
  },
  {
    id: 6,
    title: 'Executive Health Check',
    price: 5000,
    discountedPrice: 3999,
    testCount: 90,
    isBestSeller: false,
    category: 'Full Body',
    description: 'For working professionals leading a high-stress lifestyle.'
  }
];

export const testCategories: TestCategory[] = [
  { name: 'Diabetes', iconName: 'Droplet' },
  { name: 'Heart', iconName: 'Heart' },
  { name: 'Thyroid', iconName: 'Activity' },
  { name: 'Kidney', iconName: 'Filter' },
  { name: 'Liver', iconName: 'FlaskConical' },
  { name: 'Vitamins', iconName: 'Sun' },
];

export const healthConcerns: HealthConcern[] = [
  { id: 'fever', title: 'Fever', iconName: 'Thermometer' },
  { id: 'diabetes', title: 'Diabetes', iconName: 'Droplet' },
  { id: 'kidney', title: 'Kidneys', iconName: 'Filter' },
  { id: 'liver', title: 'Liver', iconName: 'FlaskConical' },
  { id: 'thyroid', title: 'Thyroid', iconName: 'Activity' },
  { id: 'heart', title: 'Heart', iconName: 'Heart' },
  { id: 'vitamin', title: 'Vitamins', iconName: 'Sun' },
  { id: 'allergy', title: 'Allergy', iconName: 'Flower' },
  { id: 'infertility', title: 'Infertility', iconName: 'Baby' },
  { id: 'cancer', title: 'Cancer Screening', iconName: 'Search' },
  { id: 'gut', title: 'Gut Health', iconName: 'Stethoscope' },
  { id: 'lungs', title: 'Lungs', iconName: 'Wind' },
];

export const locations: LabLocation[] = [
  {
    id: 1,
    name: 'NeuroDiag Main Hub',
    address: '123 Medical District, Downtown, NY 10001',
    phone: '+1 (555) 012-3456',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    availableServices: ['Radiology', 'Pathology', 'Cardiology', '24/7 Open', 'Home Collection']
  },
  {
    id: 2,
    name: 'Westside Collection Center',
    address: '456 West Avenue, Manhattan, NY 10011',
    phone: '+1 (555) 012-7890',
    coordinates: { lat: 40.7505, lng: -73.9934 },
    availableServices: ['Pathology', 'Home Collection']
  },
  {
    id: 3,
    name: 'Brooklyn Diagnostics',
    address: '789 Kings Hwy, Brooklyn, NY 11223',
    phone: '+1 (555) 012-4567',
    coordinates: { lat: 40.6782, lng: -73.9442 },
    availableServices: ['Radiology', 'Pathology', 'Cardiology']
  },
  {
    id: 4,
    name: 'Queens Pathology Lab',
    address: '321 Queens Blvd, Queens, NY 11101',
    phone: '+1 (555) 012-1111',
    coordinates: { lat: 40.7282, lng: -73.7949 },
    availableServices: ['Pathology', 'Biochemistry']
  },
  {
    id: 5,
    name: 'North Shore Imaging',
    address: '555 Northern Blvd, Great Neck, NY 11021',
    phone: '+1 (555) 012-2222',
    coordinates: { lat: 40.7770, lng: -73.7300 },
    availableServices: ['Radiology', 'MRI', 'CT Scan']
  },
  {
    id: 6,
    name: 'Staten Island Health',
    address: '999 Richmond Rd, Staten Island, NY 10304',
    phone: '+1 (555) 012-3333',
    coordinates: { lat: 40.5795, lng: -74.1502 },
    availableServices: ['Radiology', 'Pathology', '24/7 Open']
  }
];

export const testDirectory: TestItem[] = [
  { id: 't1', code: 'GLU-F', name: 'Glucose - Fasting', category: 'Diabetes', price: 10, tat: '6 Hours', isFastingRequired: true },
  { id: 't2', code: 'GLU-PP', name: 'Glucose - Post Prandial', category: 'Diabetes', price: 10, tat: '6 Hours', isFastingRequired: false },
  { id: 't3', code: 'HBA1C', name: 'HbA1c (Glycosylated Hemoglobin)', category: 'Diabetes', price: 25, tat: '24 Hours', isFastingRequired: false },
  { id: 't4', code: 'LIPID', name: 'Lipid Profile', category: 'Heart', price: 40, tat: '24 Hours', isFastingRequired: true },
  { id: 't5', code: 'CBC', name: 'Complete Blood Count (CBC)', category: 'Hematology', price: 15, tat: '6 Hours', isFastingRequired: false },
  { id: 't6', code: 'TSH', name: 'Thyroid Stimulating Hormone (TSH)', category: 'Thyroid', price: 20, tat: '12 Hours', isFastingRequired: false },
  { id: 't7', code: 'T3T4', name: 'Total T3 & T4', category: 'Thyroid', price: 30, tat: '24 Hours', isFastingRequired: false },
  { id: 't8', code: 'LFT', name: 'Liver Function Test (LFT)', category: 'Liver', price: 35, tat: '24 Hours', isFastingRequired: false },
  { id: 't9', code: 'KFT', name: 'Kidney Function Test (KFT)', category: 'Kidney', price: 35, tat: '24 Hours', isFastingRequired: false },
  { id: 't10', code: 'VIT-D', name: 'Vitamin D (25-OH)', category: 'Vitamins', price: 50, tat: '48 Hours', isFastingRequired: false },
  { id: 't11', code: 'VIT-B12', name: 'Vitamin B12', category: 'Vitamins', price: 45, tat: '48 Hours', isFastingRequired: false },
  { id: 't12', code: 'URINE-R', name: 'Urine Routine & Microscopy', category: 'Pathology', price: 10, tat: '4 Hours', isFastingRequired: false },
  { id: 't13', code: 'CRP', name: 'C-Reactive Protein (CRP)', category: 'Heart', price: 25, tat: '24 Hours', isFastingRequired: false },
  { id: 't14', code: 'IRON', name: 'Iron Studies', category: 'Hematology', price: 40, tat: '24 Hours', isFastingRequired: true },
  { id: 't15', code: 'CALCIUM', name: 'Calcium - Total', category: 'Bone', price: 15, tat: '6 Hours', isFastingRequired: false },
  { id: 't16', code: 'ELECT', name: 'Electrolytes (Na, K, Cl)', category: 'Kidney', price: 20, tat: '6 Hours', isFastingRequired: false },
  { id: 't17', code: 'PSA', name: 'Prostate Specific Antigen (PSA)', category: 'Cancer Marker', price: 55, tat: '24 Hours', isFastingRequired: false },
  { id: 't18', code: 'FERR', name: 'Ferritin', category: 'Hematology', price: 35, tat: '24 Hours', isFastingRequired: false },
  { id: 't19', code: 'URIC', name: 'Uric Acid', category: 'Kidney', price: 12, tat: '6 Hours', isFastingRequired: false },
  { id: 't20', code: 'AMYL', name: 'Amylase', category: 'Pancreas', price: 30, tat: '12 Hours', isFastingRequired: false },
];
