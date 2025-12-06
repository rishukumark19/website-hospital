
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
    <div className="bg-primary py-16 md:py-20 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Find Tests by Health Concern
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto font-light">
            Select a category below to explore relevant diagnostic packages tailored to your needs.
          </p>
        </div>

        <div className="relative group/container">
            {/* 
                Mobile: 2-row horizontal scroll (grid-rows-2 + grid-flow-col)
                Desktop: Standard grid
            */}
            <div className="
                grid grid-rows-2 grid-flow-col gap-3 overflow-x-auto snap-x snap-mandatory px-4 -mx-4 pb-6
                md:grid-rows-none md:grid-flow-row md:grid-cols-4 lg:grid-cols-6 md:gap-6 md:px-0 md:mx-0
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
            ">
            {healthConcerns.map((concern) => {
                const Icon = iconMap[concern.iconName] || Activity;
                
                return (
                <button
                    key={concern.id}
                    onClick={() => onNavigate?.(View.SERVICES)}
                    className="
                        snap-start w-[160px] md:w-auto h-full min-h-[140px]
                        flex flex-col items-center justify-center gap-3
                        bg-white hover:bg-white/90
                        p-5 rounded-2xl
                        shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-1
                        border border-white/20
                        transition-all duration-300 ease-out
                        group
                        text-center
                    "
                >
                    <div className="
                        w-12 h-12 md:w-14 md:h-14 rounded-xl 
                        bg-green-50 group-hover:bg-primary 
                        flex items-center justify-center 
                        text-primary group-hover:text-white 
                        transition-colors duration-300
                        shadow-inner
                    ">
                       <Icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <span className="
                        text-gray-700 group-hover:text-primary 
                        font-bold text-sm
                        leading-tight
                        transition-colors
                    ">
                       {concern.title}
                    </span>
                </button>
                );
            })}
            </div>
            
            {/* Fade effect on edges for mobile to indicate scroll */}
            <div className="absolute top-0 bottom-6 left-[-1px] w-8 bg-gradient-to-r from-primary to-transparent md:hidden pointer-events-none"></div>
            <div className="absolute top-0 bottom-6 right-[-1px] w-8 bg-gradient-to-l from-primary to-transparent md:hidden pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default HealthConcerns;
