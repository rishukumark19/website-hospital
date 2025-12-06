
import React, { useRef } from 'react';
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
  ChevronLeft,
  ChevronRight
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

// Pastel colors for icon backgrounds to mimic Redcliffe/Premium style
const pastelColors = [
  'bg-blue-50 text-blue-600',
  'bg-green-50 text-green-600',
  'bg-orange-50 text-orange-600',
  'bg-purple-50 text-purple-600',
  'bg-pink-50 text-pink-600',
  'bg-teal-50 text-teal-600',
];

const HealthConcerns: React.FC<HealthConcernsProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Priority items to show
  const priorityIds = ['kidney', 'thyroid', 'vitamin', 'infertility', 'liver', 'heart', 'allergy', 'diabetes', 'fever', 'gut', 'lungs', 'cancer'];
  const displayConcerns = healthConcerns.filter(c => priorityIds.includes(c.id));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Find Tests by Health Concern</h2>
                <p className="text-gray-500 text-sm md:text-base">Target specific organs and conditions.</p>
            </div>
            
            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex gap-2">
                <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-primary transition-colors text-gray-600">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-primary transition-colors text-gray-600">
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>

        {/* Scrolling Grid Container */}
        <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-6 md:gap-6 md:overflow-visible scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayConcerns.map((concern, index) => {
            const Icon = iconMap[concern.iconName] || Activity;
            const colorClass = pastelColors[index % pastelColors.length];
            
            return (
              <button
                key={concern.id}
                onClick={() => onNavigate?.(View.SERVICES)}
                className="
                  snap-start flex-shrink-0 w-[140px] md:w-auto
                  flex flex-col items-center justify-center
                  bg-white rounded-2xl p-4
                  border border-gray-100 shadow-soft
                  hover:shadow-card hover:border-green-200 hover:-translate-y-1
                  transition-all duration-300 group
                  h-[160px] md:h-[180px]
                "
              >
                <div className={`
                  w-16 h-16 rounded-full mb-4 flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-110
                  ${colorClass}
                `}>
                   <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                
                <span className="text-gray-800 font-bold text-sm text-center group-hover:text-primary transition-colors px-2">
                  {concern.title}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Mobile View All */}
        <div className="md:hidden text-center mt-6">
            <button 
               onClick={() => onNavigate?.(View.SERVICES)}
               className="text-primary font-bold text-sm flex items-center justify-center gap-1"
            >
                View All Categories <ChevronRight className="h-4 w-4" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default HealthConcerns;
