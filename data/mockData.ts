
import { NavLink, QuickAction, HealthPackage, TestCategory, LabLocation, TestItem, HealthConcern, View } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/', view: View.HOME },
  { name: 'About Us', path: '/about', view: View.ABOUT },
  { name: 'Services', path: '/services', view: View.SERVICES },
  { name: 'Test Menu', path: '/tests', view: View.TEST_DIRECTORY },
  { name: 'Home Visit', path: '/home-collection', view: View.HOME_COLLECTION },
  { name: 'Contact & Locations', path: '/contact', view: View.CONTACT },
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
    price: 2000,
    discountedPrice: 1500,
    testCount: 45,
    isBestSeller: true,
    category: 'Full Body',
    description: 'Essential screening for liver, kidney, and blood sugar.'
  },
  {
    id: 2,
    title: 'Advanced Heart Care',
    price: 3500,
    discountedPrice: 2500,
    testCount: 62,
    isBestSeller: true,
    category: 'Specialized',
    description: 'Comprehensive cardiac risk assessment including Lipid Profile & ECG.'
  },
  {
    id: 3,
    title: 'Diabetes Screening Pack',
    price: 1500,
    discountedPrice: 1000,
    testCount: 18,
    isBestSeller: false,
    category: 'Chronic',
    description: 'Monitor your blood sugar levels effectively.'
  },
  {
    id: 4,
    title: 'Women Wellness Plus',
    price: 4000,
    discountedPrice: 3000,
    testCount: 55,
    isBestSeller: false,
    category: 'Women',
    description: 'Tailored for women including Thyroid, Iron, and Hormone study.'
  },
  {
    id: 5,
    title: 'Senior Citizen Care Premium',
    price: 5000,
    discountedPrice: 3500,
    testCount: 85,
    isBestSeller: true,
    category: 'Senior',
    description: 'Complete geriatric profile covering bone health, heart, and vital organs.'
  },
  {
    id: 6,
    title: 'Executive Health Check',
    price: 6000,
    discountedPrice: 4500,
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
    name: 'Avishkar Diagnostic - Bank More',
    address: 'Bank More, Dhanbad, Jharkhand 826001',
    phone: '+91 326 230 XXXX',
    coordinates: { lat: 23.7957, lng: 86.4304 },
    availableServices: ['Radiology', 'Pathology', 'Cardiology', '24/7 Open', 'Home Collection']
  },
  {
    id: 2,
    name: 'Hirapur Collection Center',
    address: 'Hirapur, Dhanbad, Jharkhand 826001',
    phone: '+91 999 999 XXXX',
    coordinates: { lat: 23.8054, lng: 86.4251 },
    availableServices: ['Pathology', 'Home Collection']
  },
  {
    id: 3,
    name: 'Saraidhela Branch',
    address: 'Steel Gate, Saraidhela, Dhanbad 828127',
    phone: '+91 888 888 XXXX',
    coordinates: { lat: 23.8168, lng: 86.4526 },
    availableServices: ['Radiology', 'Pathology', 'Cardiology']
  },
  {
    id: 4,
    name: 'Jharia City Lab',
    address: 'Main Road, Jharia, Dhanbad 828111',
    phone: '+91 777 777 XXXX',
    coordinates: { lat: 23.7431, lng: 86.4150 },
    availableServices: ['Pathology', 'Biochemistry']
  },
  {
    id: 5,
    name: 'Govindpur Center',
    address: 'GT Road, Govindpur, Dhanbad 828109',
    phone: '+91 666 666 XXXX',
    coordinates: { lat: 23.8422, lng: 86.5160 },
    availableServices: ['Radiology', 'MRI', 'CT Scan']
  },
  {
    id: 6,
    name: 'Dhanbad City Center',
    address: 'City Center, Dhanbad, Jharkhand 826001',
    phone: '+91 555 555 XXXX',
    coordinates: { lat: 23.7989, lng: 86.4323 },
    availableServices: ['Radiology', 'Pathology', '24/7 Open']
  }
];

export const testDirectory: TestItem[] = [
  { id: 't1', code: 'GLU-F', name: 'Glucose - Fasting', category: 'Diabetes', price: 200, tat: '6 Hours', isFastingRequired: true, sampleType: 'Blood', description: 'Measures blood sugar levels after an overnight fast.' },
  { id: 't2', code: 'GLU-PP', name: 'Glucose - Post Prandial', category: 'Diabetes', price: 200, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Measures blood sugar levels 2 hours after a meal.' },
  { id: 't3', code: 'HBA1C', name: 'HbA1c', category: 'Diabetes', price: 600, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Average blood sugar level over the past 2-3 months.' },
  { id: 't4', code: 'LIPID', name: 'Lipid Profile', category: 'Heart', price: 1100, tat: '24 Hours', isFastingRequired: true, sampleType: 'Blood', description: 'Complete cholesterol test including HDL, LDL, and Triglycerides.' },
  { id: 't5', code: 'CBC', name: 'Complete Blood Count (CBC)', category: 'Hematology', price: 400, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Evaluates overall health and detects disorders like anemia and infection.' },
  { id: 't6', code: 'TSH', name: 'Thyroid Stimulating Hormone (TSH)', category: 'Thyroid', price: 500, tat: '12 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Screening test for thyroid function.' },
  { id: 't7', code: 'T3T4', name: 'Total T3 & T4', category: 'Thyroid', price: 800, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Detailed thyroid hormone analysis.' },
  { id: 't8', code: 'LFT', name: 'Liver Function Test (LFT)', category: 'Liver', price: 900, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Checks how well the liver is working.' },
  { id: 't9', code: 'KFT', name: 'Kidney Function Test (KFT)', category: 'Kidney', price: 900, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Tests for Urea, Creatinine and Electrolytes.' },
  { id: 't10', code: 'VIT-D', name: 'Vitamin D (25-OH)', category: 'Vitamins', price: 1500, tat: '48 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Checks for Vitamin D deficiency.' },
  { id: 't11', code: 'VIT-B12', name: 'Vitamin B12', category: 'Vitamins', price: 1200, tat: '48 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Essential for nerve tissue health and brain function.' },
  { id: 't12', code: 'URINE-R', name: 'Urine Routine & Microscopy', category: 'Pathology', price: 200, tat: '4 Hours', isFastingRequired: false, sampleType: 'Urine', description: 'Screening test for UTI, kidney disease, and diabetes.' },
  { id: 't13', code: 'CRP', name: 'C-Reactive Protein (CRP)', category: 'Heart', price: 600, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Marker for inflammation in the body.' },
  { id: 't14', code: 'IRON', name: 'Iron Studies', category: 'Hematology', price: 1000, tat: '24 Hours', isFastingRequired: true, sampleType: 'Blood', description: 'Checks iron levels to diagnose anemia.' },
  { id: 't15', code: 'CALCIUM', name: 'Calcium - Total', category: 'Bone', price: 300, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Measures calcium levels in blood.' },
  { id: 't16', code: 'ELECT', name: 'Electrolytes (Na, K, Cl)', category: 'Kidney', price: 500, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Essential for heart and nerve function.' },
  { id: 't17', code: 'PSA', name: 'Prostate Specific Antigen (PSA)', category: 'Cancer Marker', price: 1200, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Screening for prostate cancer.' },
  { id: 't18', code: 'FERR', name: 'Ferritin', category: 'Hematology', price: 800, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Measures iron storage.' },
  { id: 't19', code: 'URIC', name: 'Uric Acid', category: 'Kidney', price: 300, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'High levels can cause gout or kidney stones.' },
  { id: 't20', code: 'AMYL', name: 'Amylase', category: 'Pancreas', price: 600, tat: '12 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Diagnoses pancreas problems.' },
  { id: 't21', code: 'COVID', name: 'COVID-19 RT-PCR', category: 'Infection', price: 800, tat: '24 Hours', isFastingRequired: false, sampleType: 'Swab', description: 'Gold standard test for COVID-19 infection.' },
  { id: 't22', code: 'FEVER', name: 'Fever Panel Basic', category: 'Infection', price: 1500, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Includes CBC, MP, Widal (Typhoid), and Urine Routine.' },
  { id: 't23', code: 'PREG', name: 'Beta HCG (Pregnancy)', category: 'Hormones', price: 600, tat: '24 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Confirms pregnancy by measuring HCG hormone.' },
  { id: 't24', code: 'DENGUE', name: 'Dengue NS1 Antigen', category: 'Infection', price: 1000, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Early detection of Dengue virus.' },
  { id: 't25', code: 'TYPHOID', name: 'Typhoid (Widal)', category: 'Infection', price: 300, tat: '6 Hours', isFastingRequired: false, sampleType: 'Blood', description: 'Screening for Typhoid fever.' },
];
