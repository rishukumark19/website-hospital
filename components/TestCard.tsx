import React from 'react';
import { ServiceItem } from '../types';
import { ChevronRight, Bone, Activity, Heart, Zap, Brain, Droplet, Scan, FlaskConical } from 'lucide-react';

interface TestCardProps {
  test: ServiceItem;
  onBook?: (id: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Brain, 
  Scan, 
  Droplet, 
  Heart, 
  HeartPulse: Heart, 
  Activity, 
  Bone, 
  Zap,
  FlaskConical
};

const TestCard: React.FC<TestCardProps> = ({ test, onBook }) => {
  const Icon = iconMap[test.iconName] || Activity;

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-blue-50 group-hover:bg-primary/5 rounded-xl flex items-center justify-center text-primary transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <span className="bg-gray-50 text-gray-700 font-bold text-sm px-3 py-1 rounded-lg">
          ${test.price}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
        {test.title}
      </h3>
      
      <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
        {test.description}
      </p>
      
      <button 
        onClick={() => onBook?.(test.id)}
        className="w-full mt-auto flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300"
      >
        Book Now <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default TestCard;