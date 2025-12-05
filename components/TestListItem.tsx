
import React from 'react';
import { TestItem } from '../types';
import { Clock, AlertCircle, ChevronRight, TestTube } from 'lucide-react';

interface TestListItemProps {
  test: TestItem;
  onBook?: (id: string) => void;
}

const TestListItem: React.FC<TestListItemProps> = ({ test, onBook }) => {
  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200">
      
      {/* Left: Info */}
      <div className="flex items-start gap-4 mb-4 sm:mb-0">
        <div className="w-10 h-10 rounded-lg bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
            <TestTube className="h-5 w-5" />
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">{test.name}</h4>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                    {test.code}
                </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                    <Clock className="h-3 w-3" /> {test.tat}
                </span>
                {test.isFastingRequired && (
                    <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        <AlertCircle className="h-3 w-3" /> Fasting Required
                    </span>
                )}
                <span className="text-secondary font-medium px-2 py-1 rounded bg-blue-50/50">
                    {test.category}
                </span>
            </div>
        </div>
      </div>

      {/* Right: Price & Action */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-6 ml-auto sm:ml-0">
        <div className="text-right">
            <p className="font-bold text-lg text-primary">${test.price}</p>
        </div>
        <button 
            onClick={() => onBook?.(test.id)}
            className="bg-white border border-secondary text-secondary hover:bg-secondary hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 group/btn"
        >
            Book <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
};

export default TestListItem;
