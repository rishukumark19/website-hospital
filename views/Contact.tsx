
import React, { useState } from 'react';
import { locations } from '../data/mockData';
import LocationCard from '../components/LocationCard';
import { Phone, Mail, Clock, MessageCircle, MapPin, Search, Filter, Check, Map } from 'lucide-react';

const Contact: React.FC = () => {
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
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact & Locations</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Get in touch with our team or find the nearest Avishkar Diagnostic center for your needs.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                 <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                     <Phone className="h-7 w-7" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Care</h3>
                 <p className="text-gray-500 mb-4 text-sm">24/7 Support Line</p>
                 <a href="tel:9700369700" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">9700 36 9700</a>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                 <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                     <Mail className="h-7 w-7" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                 <p className="text-gray-500 mb-4 text-sm">For reports & inquiries</p>
                 <a href="mailto:info@avishkardiagnostic.com" className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">info@avishkardiagnostic.com</a>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                 <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                     <MessageCircle className="h-7 w-7" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                 <p className="text-gray-500 mb-4 text-sm">Instant Chat Support</p>
                 <a href="https://wa.me/" target="_blank" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">Chat Now</a>
             </div>
        </div>

        {/* Corporate Office */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-20 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 relative">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123456789!2d86.4304!3d23.7957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzQ0LjUiTiA4NsKwMjUnNDkuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Head Office Map"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                 ></iframe>
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                 <div className="inline-block px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                    Corporate Headquarters
                 </div>
                 <h2 className="text-3xl font-bold text-primary mb-6">Head Office</h2>
                 <div className="space-y-6">
                     <div className="flex items-start gap-4">
                         <div className="p-3 bg-gray-50 rounded-xl">
                            <MapPin className="h-6 w-6 text-secondary" />
                         </div>
                         <div>
                             <p className="font-bold text-gray-800 text-lg">Avishkar Diagnostic Centre</p>
                             <p className="text-gray-600 leading-relaxed">Bank More, Dhanbad,<br/>Jharkhand 826001</p>
                         </div>
                     </div>
                     <div className="flex items-start gap-4">
                         <div className="p-3 bg-gray-50 rounded-xl">
                            <Clock className="h-6 w-6 text-secondary" />
                         </div>
                         <div>
                             <p className="font-bold text-gray-800 text-lg">Opening Hours</p>
                             <p className="text-gray-600">Monday - Sunday<br/>7:00 AM - 9:00 PM</p>
                         </div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Merged Locator Section */}
        <div id="locator-section" className="scroll-mt-24 border-t border-gray-100 pt-16">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
                    <Map className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Find a Lab Near You</h2>
                <p className="text-gray-600">Locate our nearest centre for home visits or walk-in appointments.</p>
            </div>

            {/* Search Bar */}
            <div className="mb-10 relative max-w-4xl mx-auto">
                <div className="relative shadow-lg shadow-gray-200/50 rounded-2xl">
                    <input 
                        type="text" 
                        placeholder="Search by area, city or pincode..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-14 pr-4 py-5 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all text-lg placeholder-gray-400 border border-gray-100"
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
                                className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none text-gray-700 font-medium shadow-sm"
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
                    <div className="mb-4 text-sm text-gray-500 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
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
    </div>
  );
};

export default Contact;
