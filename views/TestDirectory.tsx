
import React, { useState } from 'react';
import { View } from '../types';
import { testDirectory } from '../data/mockData';
import { Search, Filter, Clock, AlertCircle, Beaker, ChevronRight, ShoppingCart, TestTube } from 'lucide-react';

interface Props {
  onNavigate: (view: View) => void;
}

const TestDirectory: React.FC<Props> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFastingOnly, setShowFastingOnly] = useState(false);

  const categories = ['All', ...Array.from(new Set(testDirectory.map(t => t.category)))];

  const filteredTests = testDirectory.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          test.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    const matchesFasting = showFastingOnly ? test.isFastingRequired : true;
    
    return matchesSearch && matchesCategory && matchesFasting;
  });

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Diagnostic Test Directory</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Search from over 500+ pathology and radiology tests available at Avishkar Diagnostic.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10 sticky top-20 z-30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search test name (e.g. CBC, Thyroid)..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none font-medium text-gray-700"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Checkbox Filter */}
            <div className="flex items-center justify-center md:justify-start">
              <label className="flex items-center gap-2 cursor-pointer select-none bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 w-full hover:bg-gray-100 transition-colors">
                <input 
                  type="checkbox" 
                  checked={showFastingOnly}
                  onChange={(e) => setShowFastingOnly(e.target.checked)}
                  className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300"
                />
                <span className="text-gray-700 font-medium text-sm">Fasting Tests Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-6 text-sm text-gray-500 font-semibold">
           Found {filteredTests.length} tests matching your criteria
        </div>

        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTests.map(test => (
              <div key={test.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 group flex flex-col">
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <TestTube className="h-6 w-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-primary transition-colors">{test.name}</h3>
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{test.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">₹{test.price}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 line-clamp-2 min-h-[40px]">
                  {test.description || `Comprehensive ${test.name} test for accurate diagnosis and monitoring.`}
                </p>

                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-500 mb-6 bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                     <Beaker className="h-4 w-4 text-secondary" />
                     <span>Sample: <span className="font-semibold text-gray-700">{test.sampleType || 'Blood'}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Clock className="h-4 w-4 text-secondary" />
                     <span>Report: <span className="font-semibold text-gray-700">{test.tat}</span></span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                     <AlertCircle className={`h-4 w-4 ${test.isFastingRequired ? 'text-red-500' : 'text-green-500'}`} />
                     <span>
                        {test.isFastingRequired 
                          ? <span className="text-red-600 font-semibold">Fasting Required</span> 
                          : <span className="text-green-600 font-semibold">No Fasting Required</span>}
                     </span>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate(View.APPOINTMENT)}
                  className="mt-auto w-full bg-primary hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" /> Book This Test
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No tests found</h3>
            <p className="text-gray-500">We couldn't find any tests matching "{searchTerm}".</p>
            <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All'); setShowFastingOnly(false);}}
                className="mt-6 text-primary font-bold hover:underline"
            >
                Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TestDirectory;
