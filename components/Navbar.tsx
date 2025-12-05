
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { navLinks, locations } from '../data/mockData';
import ReportModal from './ReportModal';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
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
      {/* Top Bar - Avishkar Green */}
      <div className="bg-primary text-white text-[11px] md:text-xs py-2.5 hidden md:block tracking-wide">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer group">
              <Phone className="h-3.5 w-3.5 text-white group-hover:text-white transition-colors" />
              <span className="font-semibold">Helpline: <span className="text-white font-bold">0326-230-XXXX</span></span>
            </div>
            <div className="flex items-center gap-2 hidden lg:flex">
              <Clock className="h-3.5 w-3.5 opacity-70" />
              <span className="opacity-80">Mon-Sun: 7:00 AM - 9:00 PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <a href="#" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">For Doctors</a>
             <span className="opacity-30">|</span>
             <a href="#" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">Corporate</a>
             <span className="opacity-30">|</span>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
              <MapPin className="h-3.5 w-3.5 text-white" />
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
        className={`sticky top-0 z-50 transition-all duration-300 border-b relative ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-gray-100' 
            : 'bg-white py-4 md:py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo - Avishkar Style */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onNavigate(View.HOME)}
            >
              <div className="bg-white border-2 border-primary p-2 rounded-xl shadow-md group-hover:shadow-green-900/10 transition-all duration-300">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-heading font-bold text-primary leading-none tracking-tight">Avishkar</span>
                <span className="text-[10px] text-secondary font-bold tracking-[0.2em] uppercase mt-0.5">Diagnostic Centre</span>
              </div>
            </div>

            {/* Desktop Nav Links - Centered */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                    currentView === link.view
                      ? 'text-primary bg-green-50' 
                      : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Side Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
               <button 
                onClick={() => onNavigate(View.REPORT_DOWNLOAD)}
                className="text-xs font-bold text-primary hover:text-white border-2 border-primary hover:bg-primary rounded-full px-5 py-2.5 transition-all duration-300"
               >
                 Download Report
               </button>

              <button
                onClick={() => onNavigate(View.APPOINTMENT)}
                className="bg-secondary hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-red-500/20 flex items-center gap-2 hover:-translate-y-0.5"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Toggle - Minimal */}
            <button
              className="xl:hidden group p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 active:scale-95 touch-manipulation z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
               {isMobileMenuOpen ? (
                 <X className="h-6 w-6 text-gray-800" />
               ) : (
                 <Menu className="h-6 w-6 text-primary" strokeWidth={2.5} />
               )}
            </button>
          </div>
        </div>

        {/* Minimal Mobile Dropdown - Slide Down from Top */}
        <div 
            className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg transform transition-all duration-300 ease-in-out origin-top xl:hidden ${
                isMobileMenuOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-4 invisible pointer-events-none'
            }`}
        >
            <div className="flex flex-col py-4 px-4 space-y-1">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => handleLinkClick(link.view)}
                        className={`text-left w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                            currentView === link.view
                            ? 'text-primary bg-green-50/50'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
