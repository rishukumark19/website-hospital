
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { navLinks } from '../data/mockData';
import { 
  Activity,
  Menu
} from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: View) => {
    onNavigate(view);
    if (view === View.CONTACT) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-lg py-2' 
          : 'bg-primary py-3'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0" 
            onClick={() => onNavigate(View.HOME)}
          >
            <div className="bg-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col text-white">
              <span className="text-xl md:text-2xl font-heading font-bold leading-none tracking-tight">Avishkar</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 opacity-90">Diagnostic Centre</span>
            </div>
          </div>

          {/* Nav Links - Scrollable Horizontal List on Mobile */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex items-center gap-1 md:gap-2 min-w-max">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.view)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    currentView === item.view
                      ? 'bg-white text-primary shadow-md transform scale-105' 
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
