
import React, { useState } from 'react';
import { ServiceItem } from '../types';
import TestCard from '../components/TestCard';
import TestListItem from '../components/TestListItem';
import { testDirectory, testCategories } from '../data/mockData';
import { Search, Stethoscope, Microscope, Zap, Filter, LayoutGrid, List } from 'lucide-react';

// Data for Core Services
const coreServicesData: ServiceItem[] = [
  { id: 'c1', title: 'Pathology & Laboratory Medicine', description: 'Comprehensive diagnostic testing for precise disease management.', price: 50, category: 'Pathology', iconName: 'Microscope' },
  { id: 'c2', title: 'Genetics & Genomics', description: 'Advanced molecular diagnostics for genetic conditions.', price: 300, category: 'Pathology', iconName: 'Dna' },
  { id: 'c3', title: 'Biochemistry', description: 'Analysis of chemical processes within and related to living organisms.', price: 40, category: 'Pathology', iconName: 'FlaskConical' },
  { id: 'c4', title: 'Microbiology', description: 'Study of microscopic organisms, such as bacteria, viruses, archaea, fungi and protozoa.', price: 45, category: 'Pathology', iconName: 'Bug' },
  { id: 'c5', title: 'Hematology', description: 'Diagnosis and treatment of blood diseases and disorders.', price: 35, category: 'Pathology', iconName: 'Droplet' },
  { id: 'c6', title: 'Histopathology', description: 'Microscopic examination of tissue in order to study the manifestations of disease.', price: 100, category: 'Pathology', iconName: 'Slice' },
  { id: 'c7', title: 'Newborn Screening', description: 'Screening for harmful or potentially fatal disorders that aren\'t otherwise apparent at birth.', price: 80, category: 'Pathology', iconName: 'Baby' },
  { id: 'c8', title: 'Metabolomics & Proteomics', description: 'Large-scale study of small molecules and proteins.', price: 400, category: 'Pathology', iconName: 'Activity' },
];

// Data for Imaging & Radiology
const imagingServicesData: ServiceItem[] = [
  { id: 'i1', title: 'High-Definition MRI', description: 'Detailed imaging of organs and structures within the body.', price: 250, category: 'Radiology', iconName: 'Brain' },
  { id: 'i2', title: 'CT Scan', description: 'Detailed cross-sectional images of the body.', price: 180, category: 'Radiology', iconName: 'Scan' },
  { id: 'i3', title: 'Digital X-Ray', description: 'Quick and painless imaging of bone structures.', price: 50, category: 'Radiology', iconName: 'Bone' },
  { id: 'i4', title: 'Digital Mammography', description: 'Specialized medical imaging that uses a low-dose x-ray system to see inside the breasts.', price: 120, category: 'Radiology', iconName: 'Scan' },
  { id: 'i5', title: 'Ultrasound / Sonography', description: 'Using high-frequency sound waves to capture live images from the inside of your body.', price: 90, category: 'Radiology', iconName: 'Activity' },
  { id: 'i6', title: 'Cardiology Diagnostics', description: 'Includes ECG, Echo, and TMT for comprehensive heart health.', price: 150, category: 'Cardiology', iconName: 'HeartPulse' },
  { id: 'i7', title: 'Wellness Services', description: 'Holistic wellness checks and consultations.', price: 60, category: 'Checkup', iconName: 'Sun' },
];

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter logic for Departments
  const filterServices = (services: ServiceItem[]) => {
    return services.filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCore = filterServices(coreServicesData);
  const filteredImaging = filterServices(imagingServicesData);

  // Filter logic for Test Directory
  const filteredTests = testDirectory.filter(test => {
     const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           test.code.toLowerCase().includes(searchTerm.toLowerCase());
     const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
     return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(testDirectory.map(t => t.category)))];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services & Tests</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our comprehensive menu of diagnostic services. Search by name, code, or health concern.
          </p>
        </div>

        {/* Sticky Search & Filter Bar */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 mb-8 border-b border-gray-100">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search for a test (e.g., HbA1c, MRI)..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                </div>
            </div>

             {/* Categories (Health Concerns) */}
             <div className="max-w-6xl mx-auto mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Browse by Health Concern</p>
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === cat 
                                ? 'bg-primary text-white shadow-md' 
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-secondary hover:text-secondary'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
             </div>
        </div>

        {/* SECTION 1: DEPARTMENTS (Hidden if filtering by specific test category to focus on results) */}
        {selectedCategory === 'All' && !searchTerm && (
            <div className="space-y-16 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Core Services */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-100 rounded-lg text-primary">
                        <Microscope className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Core Departments</h3>
                        <div className="h-px bg-gray-200 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredCore.map((service) => (
                            <TestCard key={service.id} test={service} />
                        ))}
                    </div>
                </div>

                {/* Imaging */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-100 rounded-lg text-primary">
                        <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Imaging & Radiology</h3>
                        <div className="h-px bg-gray-200 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImaging.map((service) => (
                            <TestCard key={service.id} test={service} />
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* SECTION 2: TEST DIRECTORY */}
        <div id="test-directory" className="scroll-mt-32">
            <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                        <List className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Test Directory</h3>
                </div>
                <div className="text-sm text-gray-500 font-medium">
                    {filteredTests.length} Tests Found
                </div>
            </div>

            {filteredTests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredTests.map(test => (
                        <TestListItem key={test.id} test={test} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                    <p className="text-gray-500 mb-2">No specific tests found matching "{searchTerm}".</p>
                    <button 
                        onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                        className="text-secondary font-semibold hover:underline"
                    >
                        Reset Search
                    </button>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default Services;
