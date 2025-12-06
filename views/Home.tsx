
import React, { useState } from 'react';
import { View } from '../types';
import { popularPackages, locations } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import BookingModal from '../components/BookingModal';
import ReportModal from '../components/ReportModal';
import HealthConcerns from './HealthConcerns';
import TestimonialCard from '../components/TestimonialCard';
import LocationCard from '../components/LocationCard';
import { 
  MapPin, 
  Search, 
  Upload,
  ChevronDown,
  Star,
  Check,
  ArrowRight,
  Activity,
  Thermometer,
  Droplet,
  Navigation,
  Phone
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState('');
  
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bank More');
  const locationNames = locations.map(l => l.name.split('-')[1]?.trim() || l.name); // Simple extraction

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bank More, Dhanbad",
      rating: 5,
      text: "The home collection service was incredibly punctual. The phlebotomist was professional and painless. Got reports on email same day!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Rahul Verma",
      location: "Jharia",
      rating: 5,
      text: "Avishkar is the only place I trust for my parents' diabetes monitoring. Accurate reports and very helpful staff.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Anjali Gupta",
      location: "Hirapur",
      rating: 4,
      text: "Very clean and hygienic lab. The wait time was minimal and the staff guided me well for my MRI scan.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-soft-blue">
      
      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      {/* 
        HERO SECTION - PREMIUM REDESIGN
        Goals: Clean, Minimal, Single Search Bar
      */}
      <section className="relative pt-10 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        
        {/* Soft Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-teal-light via-white to-soft-blue"></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
            
            <div className="flex flex-col items-center text-center">
                
                {/* 1. Headline */}
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                   Precision Diagnostics, <br className="hidden md:block"/>
                   <span className="text-primary">Personalized Care.</span>
                </h1>
                
                <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
                   Dhanbad's most trusted NABL accredited laboratory. <br className="hidden md:block"/> Accurate reports, home collection, and expert care.
                </p>

                {/* 
                  2. UNIFIED SEARCH BAR (Desktop & Mobile Optimized)
                */}
                <div className="w-full max-w-3xl mx-auto relative z-20">
                    <div className="bg-white rounded-2xl shadow-premium border border-gray-100 p-2 flex flex-col md:flex-row items-center gap-2">
                        
                        {/* Location Dropdown (Desktop: Left, Mobile: Top) */}
                        <div className="w-full md:w-56 relative border-b md:border-b-0 md:border-r border-gray-100">
                             <button 
                                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                                className="w-full h-14 px-4 flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors text-left"
                             >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
                                    <div className="truncate">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                                        <p className="text-sm font-bold text-gray-800 truncate">{selectedLocation}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${locationDropdownOpen ? 'rotate-180' : ''}`} />
                             </button>

                             {/* Dropdown Menu */}
                             {locationDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95">
                                    {locationNames.map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => {
                                                setSelectedLocation(loc);
                                                setLocationDropdownOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50 flex items-center justify-between"
                                        >
                                            {loc}
                                            {selectedLocation === loc && <Check className="h-4 w-4 text-primary" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Input */}
                        <div className="flex-grow w-full relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input 
                               type="text" 
                               placeholder="Search for tests (e.g. CBC, Thyroid)..."
                               value={heroSearch}
                               onChange={(e) => setHeroSearch(e.target.value)}
                               className="w-full h-14 pl-12 pr-4 bg-transparent outline-none text-gray-800 font-medium placeholder-gray-400 text-base"
                            />
                        </div>

                        {/* Search Button */}
                        <button 
                           onClick={() => onNavigate(View.SERVICES)}
                           className="w-full md:w-auto bg-primary hover:bg-green-700 text-white h-12 md:h-14 px-8 rounded-xl font-bold text-sm shadow-lg shadow-green-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            Search
                        </button>

                    </div>
                    
                    {/* Secondary Actions */}
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <button 
                            onClick={() => setIsReportModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-sm font-semibold text-gray-600 shadow-sm border border-gray-100 hover:border-primary/30 hover:text-primary transition-all"
                        >
                            <Upload className="h-4 w-4 text-secondary" /> Upload Prescription
                        </button>
                         <button 
                            onClick={() => onNavigate(View.SERVICES)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-sm font-semibold text-gray-600 shadow-sm border border-gray-100 hover:border-primary/30 hover:text-primary transition-all"
                        >
                            <Activity className="h-4 w-4 text-secondary" /> Popular Tests
                        </button>
                    </div>

                    {/* Quick Tags - Very Clean */}
                    <div className="mt-6 flex justify-center gap-2">
                        {['Diabetes', 'Fever', 'Full Body'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-teal-light text-teal-800 text-xs font-bold rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </div>
      </section>

      {/* Stats - Minimal */}
      <div className="border-y border-gray-100 bg-white">
          <div className="container mx-auto max-w-6xl px-4 grid grid-cols-3 divide-x divide-gray-100">
             {[
                 { label: 'Patients', val: '10 Lakh+' },
                 { label: 'Labs', val: '6 Centers' },
                 { label: 'Experience', val: '15 Years' },
             ].map((stat, idx) => (
                 <div key={idx} className="py-6 text-center">
                     <p className="text-2xl font-bold text-gray-900">{stat.val}</p>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                 </div>
             ))}
          </div>
      </div>

      <HealthConcerns onNavigate={onNavigate} />

      {/* Popular Packages */}
      <section className="py-20 bg-gray-50" aria-labelledby="packages-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <h2 id="packages-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Selling Packages</h2>
                <p className="text-gray-500 text-lg">
                   Checkups tailored for your lifestyle in Dhanbad.
                </p>
            </div>
            <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Packages <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularPackages.slice(0, 4).map(pkg => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                onBook={(id) => onNavigate(View.APPOINTMENT)} 
              />
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
             <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 mx-auto"
            >
              View All Packages <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block px-3 py-1 bg-white border border-gray-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                 Testimonials
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm font-bold text-gray-500">
               <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</span>
               <span>•</span>
               <span>2000+ Google Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 
        LOCAL PRESENCE SECTION (Replaced Map)
        Option 3: Locations Grid + Stylized Local Visual
      */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
            
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        <MapPin className="h-3.5 w-3.5" /> Local Leaders
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        We are Dhanbad's <br/> Largest Network.
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        With 6+ collection centers and a central processing lab in Bank More, quality diagnostics is always within your reach.
                    </p>
                    
                    <div className="mt-8 flex gap-4">
                        <button 
                            onClick={() => onNavigate(View.LOCATOR)}
                            className="bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20"
                        >
                            Find Nearest Lab
                        </button>
                        <button 
                            onClick={() => onNavigate(View.HOME_COLLECTION)}
                            className="bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary px-6 py-3 rounded-xl font-bold transition-all"
                        >
                            Book Home Visit
                        </button>
                    </div>
                </div>

                {/* Stylized Visual (Not a functional map, but a premium graphic) */}
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white rounded-3xl -rotate-2 transform"></div>
                    <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        {/* Mock Visual of Centers */}
                        <div className="grid grid-cols-2 gap-4">
                             {locations.slice(0, 4).map((loc, i) => (
                                 <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                                     <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary shrink-0 mt-1">
                                         <span className="font-bold text-xs">{i+1}</span>
                                     </div>
                                     <div>
                                         <p className="font-bold text-gray-800 text-sm">{loc.name.replace('Avishkar Diagnostic - ', '')}</p>
                                         <p className="text-xs text-gray-500">{loc.address.split(',')[0]}</p>
                                     </div>
                                 </div>
                             ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                            <p className="text-xs text-gray-400 font-medium">Headquarters: Bank More, Dhanbad</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
