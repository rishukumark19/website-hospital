
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
  Wind
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
  return (
    <div className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Look for Tests by Health Concern
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Choose a category to find relevant tests and packages tailored to your specific health needs.
          </p>
        </div>

        <div className="relative">
            {/* Mobile Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-primary to-transparent z-10 md:hidden pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-primary to-transparent z-10 md:hidden pointer-events-none"></div>

            {/* Carousel Container */}
            <div className="
                flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 -mx-4 
                md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-6 md:pb-0 md:px-0 md:mx-0
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
            ">
            {healthConcerns.map((concern) => {
                const Icon = iconMap[concern.iconName] || Activity;
                
                return (
                <button
                    key={concern.id}
                    onClick={() => onNavigate?.(View.SERVICES)}
                    className="
                        snap-center shrink-0 w-[40vw] sm:w-[30vw] md:w-auto
                        group flex flex-col items-center justify-center 
                        bg-white hover:bg-secondary 
                        p-6 rounded-2xl 
                        transition-all duration-300 transform md:hover:-translate-y-1 
                        shadow-md md:hover:shadow-xl
                        border border-white/10
                    "
                >
                    <div className="w-14 h-14 rounded-full bg-blue-50 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white mb-3 transition-colors shrink-0">
                       <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-primary group-hover:text-white font-bold text-sm sm:text-base transition-colors text-center leading-tight">
                       {concern.title}
                    </span>
                </button>
                );
            })}
            </div>
            
            {/* Mobile Swipe Hint */}
            <div className="flex justify-center gap-1.5 md:hidden opacity-40 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HealthConcerns;
