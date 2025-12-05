
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { navLinks, locations } from '../data/mockData';
import ReportModal from './ReportModal';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Search, 
  Activity, 
  ChevronDown,
  Clock
} from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0].name);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: View) => {
    setIsMobileMenuOpen(false);
    onNavigate(view);
    if (view === View.CONTACT) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      <ReportModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />

      {/* Top Bar - Premium Dark Teal/Navy */}
      <div className="bg-primary text-white text-[11px] md:text-xs py-2.5 hidden md:block tracking-wide">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer group">
              <Phone className="h-3.5 w-3.5 text-secondary group-hover:text-white transition-colors" />
              <span className="font-semibold">24/7 Helpline: <span className="text-secondary group-hover:text-white">911-000</span></span>
            </div>
            <div className="flex items-center gap-2 hidden lg:flex">
              <Clock className="h-3.5 w-3.5 opacity-70" />
              <span className="opacity-80">Mon-Sun: 7:00 AM - 10:00 PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <a href="#" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">For Doctors</a>
             <span className="opacity-30">|</span>
             <a href="#" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">Corporate</a>
             <span className="opacity-30">|</span>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-secondary transition-colors">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent border-none text-white text-xs font-semibold focus:ring-0 cursor-pointer outline-none uppercase tracking-wide"
              >
                {locations.map(loc => (
                  <option key={loc.id} value={loc.name} className="text-gray-800">
                    {loc.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-3 w-3 opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-gray-100' 
            : 'bg-white py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onNavigate(View.HOME)}
            >
              <div className="bg-gradient-to-br from-primary to-blue-800 p-2.5 rounded-xl shadow-lg group-hover:shadow-blue-900/20 transition-all duration-300">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-primary leading-none tracking-tight">NeuroDiag</span>
                <span className="text-[10px] text-teal font-bold tracking-[0.2em] uppercase mt-0.5">Excellence in Care</span>
              </div>
            </div>

            {/* Desktop Nav Links - Centered */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                    currentView === link.view
                      ? 'text-primary bg-blue-50' 
                      : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
               <button 
                onClick={() => setIsReportModalOpen(true)}
                className="text-xs font-bold text-primary hover:text-white border-2 border-primary/10 hover:bg-primary hover:border-primary rounded-full px-5 py-2.5 transition-all duration-300"
               >
                 Download Report
               </button>

              <button
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="bg-secondary hover:bg-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 hover:-translate-y-0.5"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-[60] transform transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <span className="text-lg font-heading font-bold text-primary">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-primary hover:bg-white rounded-full transition-all shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                className={`w-full text-left px-4 py-4 rounded-xl text-base font-semibold transition-colors flex items-center justify-between group ${
                    currentView === link.view ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
                {currentView === link.view && <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>}
              </button>
            ))}
            
            <div className="my-4 border-t border-gray-100"></div>
            
             <button
                onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsReportModalOpen(true);
                }}
                className="w-full text-left px-4 py-4 rounded-xl text-base font-semibold text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors flex items-center justify-between"
              >
                Download Report
              </button>
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <button
              onClick={() => {
                onNavigate(View.APPOINTMENT);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-900/10 active:scale-95 transition-transform"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;