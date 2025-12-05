import React, { useState } from 'react';
import { ServiceItem, View } from '../types';
import TestCard from '../components/TestCard';
import TestListItem from '../components/TestListItem';
import { testDirectory } from '../data/mockData';
import { Search, Microscope, Zap, List, ShieldCheck, Home, Download } from 'lucide-react';

// Data for Core Services
const pathologyServices: ServiceItem[] = [
  { id: 'c1', title: 'Pathology & Laboratory Medicine', description: 'Comprehensive diagnostic testing including blood, urine, and tissue analysis.', price: 500, category: 'Pathology', iconName: 'Microscope' },
  { id: 'c3', title: 'Biochemistry', description: 'Analysis of chemical processes for liver, kidney, and metabolic health.', price: 800, category: 'Pathology', iconName: 'FlaskConical' },
  { id: 'c4', title: 'Microbiology', description: 'Identification of infectious agents like bacteria and viruses.', price: 1000, category: 'Pathology', iconName: 'Bug' },
  { id: 'c5', title: 'Hematology', description: 'Complete blood count and diagnosis of blood disorders.', price: 600, category: 'Pathology', iconName: 'Droplet' },
];

// Data for Imaging
const imagingServices: ServiceItem[] = [
  { id: 'i1', title: 'High-Definition MRI', description: 'Detailed imaging of soft tissues, brain, and spine.', price: 7500, category: 'Radiology', iconName: 'Brain' },
  { id: 'i2', title: 'CT Scan', description: 'Fast, detailed cross-sectional images for trauma and diagnostics.', price: 5000, category: 'Radiology', iconName: 'Scan' },
  { id: 'i3', title: 'Digital X-Ray', description: 'Quick imaging for bone fractures and chest infections.', price: 800, category: 'Radiology', iconName: 'Bone' },
  { id: 'i5', title: 'Ultrasound / Sonography', description: 'Safe imaging for pregnancy, abdomen, and pelvis.', price: 1800, category: 'Radiology', iconName: 'Activity' },
];

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
            Comprehensive diagnostic solutions at Bank More, Dhanbad.
          </p>
        </div>

        {/* 5 Main Categories Section (Feature 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {[
                { title: 'Pathology', icon: Microscope, desc: 'Advanced blood & tissue analysis', color: 'bg-blue-50 text-blue-600' },
                { title: 'Radiology', icon: Zap, desc: 'MRI, CT, X-Ray & Ultrasound', color: 'bg-orange-50 text-orange-600' },
                { title: 'Wellness', icon: ShieldCheck, desc: 'Full body health packages', color: 'bg-green-50 text-green-600' },
                { title: 'Home Visit', icon: Home, desc: 'Sample collection at your door', color: 'bg-purple-50 text-purple-600' },
                { title: 'Reports', icon: Download, desc: 'Download digital reports', color: 'bg-teal-50 text-teal-600' },
            ].map((cat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group cursor-pointer">
                    <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                        <cat.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{cat.title}</h3>
                    <p className="text-xs text-gray-500">{cat.desc}</p>
                </div>
            ))}
        </div>

        {/* Search Bar */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 mb-8 border-b border-gray-100">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
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
             <div className="max-w-6xl mx-auto mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Browse by Category</p>
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

        {/* Detailed Service Cards */}
        {selectedCategory === 'All' && !searchTerm && (
            <div className="space-y-16 mb-20">
                {/* Pathology */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-100 rounded-lg text-primary">
                        <Microscope className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Pathology & Lab Tests</h3>
                        <div className="h-px bg-gray-200 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pathologyServices.map((service) => (
                            <TestCard key={service.id} test={service} />
                        ))}
                    </div>
                </div>

                {/* Imaging */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                        <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Imaging & Radiology</h3>
                        <div className="h-px bg-gray-200 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {imagingServices.map((service) => (
                            <TestCard key={service.id} test={service} />
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* Test Directory List */}
        <div id="test-directory">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <List className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Test Directory</h3>
                <div className="h-px bg-gray-200 flex-grow ml-4"></div>
            </div>

            {filteredTests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredTests.map(test => (
                        <TestListItem key={test.id} test={test} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                    <p className="text-gray-500 mb-2">No tests found matching "{searchTerm}".</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default Services;
