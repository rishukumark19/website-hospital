
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
  // Priority items for the premium view
  const priorityIds = ['kidney', 'thyroid', 'vitamin', 'infertility', 'liver', 'heart', 'allergy', 'cancer'];
  const displayConcerns = healthConcerns.filter(c => priorityIds.includes(c.id));

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Tests by Health Concern</h2>
                <p className="text-gray-500 text-lg max-w-2xl font-light">
                    Select a health category to find the most relevant diagnostic tests tailored to your needs.
                </p>
            </div>
            <button 
                onClick={() => onNavigate?.(View.SERVICES)}
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-green-700 transition-colors bg-green-50 px-5 py-2 rounded-full"
             >
                View All Concerns <ArrowRight className="h-4 w-4" />
             </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayConcerns.map((concern) => {
            const Icon = iconMap[concern.iconName] || Activity;
            
            return (
              <button
                key={concern.id}
                onClick={() => onNavigate?.(View.SERVICES)}
                className="
                  group flex flex-col items-center p-6 
                  bg-white rounded-2xl border border-gray-100 
                  hover:border-green-200 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 ease-out h-full
                "
              >
                <div className="
                  w-16 h-16 rounded-full bg-green-50 
                  flex items-center justify-center mb-4 
                  group-hover:bg-primary group-hover:text-white
                  transition-colors duration-300
                ">
                   <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                
                <span className="text-gray-800 font-bold text-base group-hover:text-primary transition-colors">
                  {concern.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 md:hidden text-center">
             <button 
                onClick={() => onNavigate?.(View.SERVICES)}
                className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
             >
                View All Concerns
             </button>
        </div>

      </div>
    </section>
  );
};

export default HealthConcerns;
