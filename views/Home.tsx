
import React, { useState } from 'react';
import { View } from '../types';
import { popularPackages, quickActions } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import BookingModal from '../components/BookingModal';
import ReportModal from '../components/ReportModal';
import HealthConcerns from './HealthConcerns';
import TestimonialCard from '../components/TestimonialCard';
import { 
  ArrowRight, 
  MapPin, 
  Home as HomeIcon, 
  FileText, 
  Users, 
  ChevronRight,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Star,
  Calendar,
  Search,
  Upload,
  ChevronDown
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState('');
  
  const handleQuickAction = (link: string) => {
    if (link === '/locator') onNavigate(View.LOCATOR);
    else if (link === '/book-visit') onNavigate(View.HOME_COLLECTION);
    else if (link === '/reports') onNavigate(View.REPORT_DOWNLOAD);
  };

  const iconMap: Record<string, React.ElementType> = {
    Home: HomeIcon,
    MapPin: MapPin,
    FileText: FileText
  };

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
    <div className="flex flex-col w-full">
      
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
        HERO SECTION - NEUBERG STYLE CLEAN & ELEGANT
        Minimalist, Image First, Subtle Buttons
      */}
      <section className="relative bg-white pb-8 overflow-hidden">
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 pt-4">
                
                {/* 1. Doctor Image - Order 1 on Mobile (Top), Order 1 on Desktop (Left) */}
                <div className="w-full lg:w-5/12 order-1 relative">
                     {/* Mobile Image Container - Full Width & Clean */}
                     <div className="block lg:hidden w-full h-[280px] rounded-2xl overflow-hidden bg-gray-50 mb-6 relative shadow-sm">
                        <img 
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=800" 
                            alt="Avishkar Doctor" 
                            className="w-full h-full object-cover object-top"
                        />
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <p className="text-white font-medium text-sm">Dr. Rajesh Kumar</p>
                            <p className="text-white/80 text-xs">Chief Pathologist</p>
                        </div>
                     </div>

                     {/* Desktop Image - Clean & Professional */}
                     <div className="hidden lg:block relative z-10 mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                            alt="Professional Doctor" 
                            className="relative z-10 w-full max-w-md mx-auto h-auto object-contain rounded-2xl" 
                        />
                     </div>
                </div>

                {/* 2. Content Zone - Order 2 on Mobile, Order 2 on Desktop */}
                <div className="w-full lg:w-7/12 order-2 flex flex-col">
                    
                    {/* Top Bar: Location & Trust (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                        <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-1.5 border border-gray-100 text-sm font-medium text-gray-700">
                             <MapPin className="h-4 w-4 text-primary" /> Bank More, Dhanbad
                        </div>
                        <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
                             <ShieldCheck className="h-4 w-4" /> 13+ Years of Trust
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="mb-6 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-2 tracking-tight">
                            Avishkar <span className="text-primary">Diagnostic</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-500 font-medium">
                            Accurate Reports. Advanced Technology. Affordable Care.
                        </p>
                    </div>

                    {/* Mobile Location Pill - Subtle */}
                    <div className="lg:hidden flex justify-center mb-6">
                         <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full pl-3 pr-4 py-1.5 shadow-sm">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-semibold text-gray-700">Bank More, Dhanbad</span>
                        </div>
                    </div>

                    {/* Search Bar - Clean & Simple */}
                    <div className="w-full bg-white rounded-xl border border-gray-200 mb-8 flex items-center gap-3 px-4 py-2 shadow-sm focus-within:ring-1 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                        <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <input 
                            type="text" 
                            value={heroSearch}
                            onChange={(e) => setHeroSearch(e.target.value)}
                            placeholder="Search for tests & packages..." 
                            className="flex-grow bg-transparent border-none focus:ring-0 text-gray-700 text-sm md:text-base placeholder-gray-400 py-2"
                        />
                         <button 
                            onClick={() => onNavigate(View.TEST_DIRECTORY)}
                            className="bg-primary hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors hidden md:block"
                        >
                            Search
                        </button>
                    </div>

                    {/* Action Buttons - ELEGANT OUTLINE STYLE */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 w-full sm:w-auto">
                        <button 
                            onClick={() => onNavigate(View.APPOINTMENT)}
                            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-green-50 bg-white px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                        >
                            <Calendar className="h-4 w-4" /> 
                            <span>Book Appointment</span>
                        </button>
                        <button 
                            onClick={() => onNavigate(View.HOME_COLLECTION)}
                            className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-red-50 bg-white px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                        >
                            <HomeIcon className="h-4 w-4" /> 
                            <span>Home Collection</span>
                        </button>
                    </div>

                    {/* Secondary Text Links - Minimal */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-sm text-gray-500">
                         <button onClick={() => setIsReportModalOpen(true)} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                             <FileText className="h-4 w-4" /> <span>Download Report</span>
                         </button>
                         <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                             <Upload className="h-4 w-4" /> <span>Upload Prescription</span>
                         </button>
                    </div>

                </div>

            </div>
        </div>
      </section>

      {/* Stats Section - Clean Strip */}
      <div className="bg-white border-t border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-gray-100 py-4">
                <div className="text-center px-2">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">10L+</p>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Patients</p>
                </div>
                <div className="text-center px-2">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">24/7</p>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Support</p>
                </div>
                <div className="text-center px-2">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">500+</p>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Tests</p>
                </div>
            </div>
        </div>
      </div>

      {/* Quick Actions Bar - Clean Minimal Style */}
      <div className="bg-gray-50 py-4 md:py-8 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => {
              const Icon = iconMap[action.iconName] || FileText;
              return (
                <div 
                  key={index} 
                  onClick={() => handleQuickAction(action.link)}
                  className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-50 group-hover:bg-primary group-hover:text-white text-primary rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-primary transition-colors">{action.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 font-medium mt-0.5">
                      <span>Tap to proceed</span> <ChevronRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <HealthConcerns onNavigate={onNavigate} />

      {/* Popular Packages */}
      <section className="py-20 bg-soft-blue" aria-labelledby="packages-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="packages-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">Best Selling Packages</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive health checkups tailored for every age and lifestyle in Dhanbad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularPackages.slice(0, 4).map(pkg => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                onBook={(id) => onNavigate(View.APPOINTMENT)} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <button 
              onClick={() => onNavigate(View.WELLNESS)}
              className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all text-lg shadow-sm"
            >
              View All Health Packages
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                 Testimonials
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here is what our patients from Dhanbad have to say.
            </p>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose <span className="text-secondary">Avishkar?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine technological excellence with a human touch right here in Dhanbad. Our rigorous quality control ensures that every report is accurate.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                    "NABL & CAP Accredited Laboratories",
                    "Home Sample Collection Available",
                    "Smart Reports with Historical Trends",
                    "Affordable & Transparent Pricing"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-white border border-green-200 flex items-center justify-center text-secondary flex-shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                            <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{item}</span>
                    </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate(View.ABOUT)}
                className="bg-primary hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-900/10 hover:shadow-green-900/20"
              >
                Learn More About Us
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto bg-gray-200">
                    <img 
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
                        alt="Dr. Rajesh Kumar at Avishkar Diagnostic Dhanbad" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-bold text-lg">Dr. Rajesh Kumar</p>
                        <p className="text-sm opacity-90">Senior Pathologist, Avishkar Diagnostic</p>
                    </div>
                </div>

                <div className="absolute top-10 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-[160px] animate-bounce-slow">
                    <div className="flex items-center gap-3 mb-1">
                        <Users className="h-5 w-5 text-secondary" />
                        <span className="font-bold text-2xl text-primary">10L+</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Happy Patients</p>
                </div>

                <div className="absolute bottom-20 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-[180px] animate-bounce-delayed">
                    <div className="flex items-center gap-3 mb-1">
                        <Activity className="h-5 w-5 text-primary" />
                        <span className="font-bold text-2xl text-primary">24hrs</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Report Turnaround</p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Promo Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 relative flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                24/7 AI Health Support
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Chat with AvishkarBot
              </h2>
              <p className="text-green-50 text-lg mb-8 leading-relaxed">
                Unsure about test preparations? Need to understand a medical term? Our AI assistant is here to help you anytime, anywhere.
              </p>
              <button 
                onClick={() => onNavigate(View.ASSISTANT)}
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 mx-auto md:mx-0"
              >
                <Activity className="h-5 w-5" /> Start Chatting
              </button>
            </div>
            
             <div className="relative z-10 hidden lg:block">
               <div className="w-72 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                  <div className="flex gap-3 mb-4">
                     <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">AB</div>
                     <div className="bg-white/20 rounded-xl rounded-tl-none p-3 text-sm text-white flex-1">
                        How do I prepare for a Lipid Profile?
                     </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                     <div className="bg-white rounded-xl rounded-tr-none p-3 text-sm text-primary shadow-sm flex-1">
                        Fasting of 10-12 hours is required. Water is allowed.
                     </div>
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
