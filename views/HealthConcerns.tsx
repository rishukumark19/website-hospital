
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
    <div className="bg-primary py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Look for Tests by Health Concern
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Choose a category to find relevant tests and packages tailored to your specific health needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {healthConcerns.map((concern) => {
            const Icon = iconMap[concern.iconName] || Activity;
            
            return (
              <button
                key={concern.id}
                onClick={() => onNavigate?.(View.SERVICES)}
                className="group flex flex-col items-center justify-center bg-white hover:bg-secondary p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white mb-3 transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-primary group-hover:text-white font-bold text-sm sm:text-base transition-colors text-center">
                  {concern.title}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HealthConcerns;
