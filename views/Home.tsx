
import React, { useState } from 'react';
import { View } from '../types';
import { popularPackages, quickActions } from '../data/mockData';
import PackageCard from '../components/PackageCard';
import BookingModal from '../components/BookingModal';
import ReportModal from '../components/ReportModal';
import HealthConcerns from './HealthConcerns';
import { 
  ArrowRight, 
  MapPin, 
  Home as HomeIcon, 
  FileText, 
  Microscope, 
  Users, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  const handleQuickAction = (link: string) => {
    if (link === '/locator') onNavigate(View.LOCATOR);
    else if (link === '/book-visit') setIsBookingModalOpen(true);
    else if (link === '/reports') setIsReportModalOpen(true);
  };

  const iconMap: Record<string, React.ElementType> = {
    Home: HomeIcon,
    MapPin: MapPin,
    FileText: FileText
  };

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

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white pt-12 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-primary font-semibold text-xs rounded-full mb-6 tracking-wide uppercase">
                Trusted by 1 Million+ Patients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.15] mb-6">
                Your Health, <br />
                <span className="text-secondary">Our Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                Experience world-class diagnostic services with advanced technology and compassionate care. Accurate reports delivered on time, every time.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full sm:w-auto bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <HomeIcon className="h-5 w-5" /> Book Home Visit
                </button>
                <button 
                  onClick={() => onNavigate(View.LOCATOR)}
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border border-gray-200 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="h-5 w-5 text-secondary" /> Find Nearest Lab
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative w-full max-w-lg md:max-w-none">
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1579684385136-137af18db00f?auto=format&fit=crop&q=80&w=2070" 
                  alt="Doctor with patient" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow hidden sm:flex">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Certified</p>
                  <p className="text-primary font-bold">NABL Accredited</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Quick Actions Bar (Floating) */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 md:-mt-24">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {quickActions.map((action, index) => {
              const Icon = iconMap[action.iconName] || FileText;
              return (
                <div 
                  key={index} 
                  onClick={() => handleQuickAction(action.link)}
                  className="group flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-primary group-hover:text-white text-primary rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">{action.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-secondary font-medium mt-1">
                      <span>Proceed</span>
                      <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* NEW: Health Concerns Grid Section */}
      <HealthConcerns onNavigate={onNavigate} />

      {/* 3. Popular Packages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Best Selling Packages</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive health checkups tailored for every age and lifestyle. Choose the package that suits you best.
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
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary hover:text-secondary transition-colors pb-1"
            >
              View All Health Packages <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Stats) */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose <span className="text-secondary">NeuroDiag?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine technological excellence with a human touch. Our rigorous quality control ensures that every report is accurate, giving you the clarity you need for your health journey.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                    "NABL & CAP Accredited Laboratories",
                    "Home Sample Collection Available",
                    "Smart Reports with Historical Trends",
                    "Affordable & Transparent Pricing"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                            <Clock className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate(View.SERVICES)}
                className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More About Us
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: 'Happy Patients', value: '10M+' },
                { icon: Microscope, label: 'Diagnostic Tests', value: '500+' },
                { icon: MapPin, label: 'Lab Locations', value: '250+' },
                { icon: Clock, label: 'Turnaround Time', value: '24hrs' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:-translate-y-1 transition-transform">
                  <stat.icon className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* AI Promo Section (Preserved as it adds value) */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Chat with NeuroBot
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Unsure about test preparations? Need to understand a medical term? Our AI assistant is here to help you 24/7.
              </p>
              <button 
                onClick={() => onNavigate(View.ASSISTANT)}
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Chatting
              </button>
            </div>
            
             <div className="relative z-10 hidden md:block">
               <div className="w-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex gap-3 mb-3">
                     <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-xs">AI</div>
                     <div className="bg-white/20 rounded-lg p-2 text-xs text-white">How do I prepare for a CT scan?</div>
                  </div>
                  <div className="flex gap-3 justify-end">
                     <div className="bg-white rounded-lg p-2 text-xs text-primary">Wear comfortable clothing...</div>
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
