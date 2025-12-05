
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
  ChevronDown 
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

  // Helper to map text links to App Views
  const handleLinkClick = (linkName: string) => {
    setIsMobileMenuOpen(false);
    switch (linkName) {
      case 'Home':
        onNavigate(View.HOME);
        break;
      case 'Services':
        onNavigate(View.SERVICES);
        break;
      case 'Health Packages':
        onNavigate(View.WELLNESS);
        break;
      case 'Lab Locator':
        onNavigate(View.LOCATOR);
        break;
      case 'Contact':
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
      default:
        console.log(`Navigating to ${linkName}`);
        break;
    }
  };

  return (
    <>
      <ReportModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />

      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Phone className="h-3 w-3" />
              <span className="font-medium">24/7 Care: 911-000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80">Support:</span>
              <span className="font-medium hover:text-secondary cursor-pointer transition-colors">help@neurodiag.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-secondary" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent border-none text-white text-xs font-medium focus:ring-0 cursor-pointer outline-none"
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

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => onNavigate(View.HOME)}
            >
              <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-primary leading-none">NeuroDiag</span>
                <span className="text-xs text-secondary font-medium tracking-wide uppercase">Centre</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    (link.name === 'Home' && currentView === View.HOME) || 
                    (link.name === 'Services' && currentView === View.SERVICES) ||
                    (link.name === 'Health Packages' && currentView === View.WELLNESS)
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
                     (link.name === 'Home' && currentView === View.HOME) || 
                     (link.name === 'Services' && currentView === View.SERVICES) ||
                     (link.name === 'Health Packages' && currentView === View.WELLNESS) ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Right Side Actions (Search + CTA) */}
            <div className="hidden md:flex items-center gap-4">
               <button 
                onClick={() => setIsReportModalOpen(true)}
                className="text-xs font-semibold text-primary hover:text-secondary border border-primary/20 hover:border-secondary rounded-full px-4 py-2 transition-all"
               >
                 Download Report
               </button>

              {/* CTA Button */}
              <button
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="bg-primary hover:bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2 hover:-translate-y-0.5"
              >
                Book a Test
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar / Drawer */}
      <div 
        className={`fixed inset-0 z-50 transform transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar Content */}
        <div 
          className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-md">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-primary">NeuroDiag</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.name)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors flex items-center justify-between group"
              >
                {link.name}
              </button>
            ))}
             <button
                onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsReportModalOpen(true);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors flex items-center justify-between group"
              >
                Download Report
              </button>
          </div>

          {/* Sidebar Footer/Actions */}
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <button
              onClick={() => {
                onNavigate(View.APPOINTMENT);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-900/10 active:scale-95 transition-transform"
            >
              Book a Test
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
