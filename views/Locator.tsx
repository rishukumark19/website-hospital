import React, { useState } from 'react';
import { locations } from '../data/mockData';
import LocationCard from '../components/LocationCard';
import { Search, Map, Filter, Check } from 'lucide-react';

const Locator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('All');

  const filterOptions = ['All', 'Radiology', 'Pathology', 'Cardiology', 'Home Collection', '24/7 Open', 'MRI', 'CT Scan'];

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = selectedService === 'All' || loc.availableServices.includes(selectedService);
    
    return matchesSearch && matchesService;
  });

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
            <Map className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Find a Lab Near You</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Locate our nearest centre for home visits or walk-in appointments.
          </p>
        </div>

        {/* Top Section: Full Width Search */}
        <div className="mb-10 relative">
            <div className="relative shadow-md rounded-2xl">
                <input 
                    type="text" 
                    placeholder="Enter City or Pincode..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-4 py-5 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all text-lg placeholder-gray-400"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Desktop Sidebar Filter */}
            <aside className="hidden lg:block w-72 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24 flex-shrink-0">
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <Filter className="h-5 w-5" />
                    <h3 className="font-bold text-lg">Filter by Service</h3>
                </div>
                <div className="space-y-2">
                    {filterOptions.map(option => (
                        <button
                            key={option}
                            onClick={() => setSelectedService(option)}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                                selectedService === option 
                                ? 'bg-primary text-white shadow-lg shadow-blue-900/10' 
                                : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-primary'
                            }`}
                        >
                            {option}
                            {selectedService === option && <Check className="h-4 w-4" />}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 w-full">
                
                {/* Mobile Filter Dropdown */}
                <div className="lg:hidden mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Filter by Service
                    </label>
                    <div className="relative">
                        <select 
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none text-gray-700 font-medium"
                        >
                            {filterOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-4 text-sm text-gray-500 font-medium">
                    Showing {filteredLocations.length} locations {selectedService !== 'All' && `for ${selectedService}`}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredLocations.map(location => (
                        <LocationCard key={location.id} location={location} />
                    ))}
                </div>

                {filteredLocations.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                        <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
                            <Map className="h-8 w-8 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-700 mb-1">No Locations Found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                        <button 
                            onClick={() => {setSearchTerm(''); setSelectedService('All');}}
                            className="mt-4 text-secondary font-semibold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Locator;