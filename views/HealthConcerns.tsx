
import React from 'react';
import { View } from '../types';
import { healthConcerns } from '../data/mockData';
import { 
  Thermometer, 
  Droplet, 
  Filter, 
  FlaskConical, 
  Activity, 
  Heart, 
  Sun, 
  Flower, 
  Baby, 
  Search,
  Stethoscope,
  Wind,
  ArrowRight
} from 'lucide-react';

interface HealthConcernsProps {
  onNavigate?: (view: View) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Thermometer,
  Droplet,
  Filter,
  FlaskConical,
  Activity,
  Heart,
  Sun,
  Flower,
  Baby,
  Search,
  Stethoscope,
  Wind
};

const HealthConcerns: React.FC<HealthConcernsProps> = ({ onNavigate }) => {
  // Filter or prioritize the requested items for the premium look
  // (Kidneys, Thyroid, Vitamins, Infertility, Liver, Heart, Allergy, Cancer)
  const priorityIds = ['kidney', 'thyroid', 'vitamin', 'infertility', 'liver', 'heart', 'allergy', 'cancer'];
  
  // Sort data to put priority items first, or just map through them if we want strictly those.
  // For now, let's just display the main ones to fit the 4-column grid nicely (8 items).
  const displayConcerns = healthConcerns.filter(c => priorityIds.includes(c.id));

  return (
    <div className="relative w-full py-20 md:py-28 overflow-hidden">
      
      {/* 
        PREMIUM GRADIENT BACKGROUND 
        #007A5A → #009E60 → #00B274
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007A5A] via-[#009E60] to-[#00B274] z-0"></div>
      
      {/* Vignette / Glow Effects for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] z-0 pointer-events-none"></div>
      
      {/* Subtle Particles (Optional for high-end feel) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px] mix-blend-overlay"></div>
         <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-[120px] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm font-heading">
            Find Tests by Health Concern
          </h2>
          <p className="text-[#F4FFFD] text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
            Choose a category to find relevant tests and packages tailored to your specific health needs.
          </p>
        </div>

        {/* 
           GRID LAYOUT 
           Mobile: 2 columns
           Desktop: 4 columns
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayConcerns.map((concern) => {
            const Icon = iconMap[concern.iconName] || Activity;
            
            return (
              <button
                key={concern.id}
                onClick={() => onNavigate?.(View.SERVICES)}
                className="
                  group relative 
                  flex flex-col items-center justify-center 
                  p-8 
                  rounded-[24px]
                  transition-all duration-300 ease-out
                  
                  /* Glassmorphism Styles */
                  bg-white/10 
                  backdrop-blur-md 
                  border border-white/30 
                  
                  /* Shadow */
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  
                  /* Hover Effects */
                  hover:scale-105 
                  hover:bg-white/15 
                  hover:border-white/50
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                "
              >
                {/* Icon Container: Soft Mint Pill */}
                <div className="
                  w-16 h-16 
                  rounded-full 
                  bg-[#E9FFF5] 
                  flex items-center justify-center 
                  mb-5 
                  shadow-inner
                  group-hover:rotate-6 transition-transform duration-300
                ">
                  <Icon 
                    className="h-8 w-8 text-[#007A5A]" 
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <span className="
                  text-white 
                  text-lg 
                  font-semibold 
                  tracking-wide
                  group-hover:text-[#E9FFF5]
                  transition-colors
                ">
                  {concern.title}
                </span>

                {/* Subtle Arrow on Hover (Optional detail) */}
                <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                   <ArrowRight className="h-4 w-4 text-white/70" />
                </div>
              </button>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
             <button 
                onClick={() => onNavigate?.(View.SERVICES)}
                className="
                    inline-flex items-center gap-2 
                    px-8 py-3 
                    rounded-full 
                    bg-white text-[#007A5A] 
                    font-bold text-sm uppercase tracking-wider
                    shadow-lg hover:shadow-xl hover:bg-[#E9FFF5]
                    transition-all transform hover:-translate-y-1
                "
             >
                View All Concerns <ArrowRight className="h-4 w-4" />
             </button>
        </div>

      </div>
    </div>
  );
};

export default HealthConcerns;
