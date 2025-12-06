
import React from 'react';
import { HealthPackage } from '../types';
import { ShoppingCart, Clock, CheckCircle2, Zap, ArrowRight, Star } from 'lucide-react';

interface PackageCardProps {
  pkg: HealthPackage;
  onBook?: (id: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBook }) => {
  const discountPercentage = Math.round(((pkg.price - pkg.discountedPrice) / pkg.price) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col h-full relative group">
      
      {/* Top Banner / Badge */}
      <div className="flex justify-between items-start pt-4 px-4">
         <div className="flex gap-2">
            {pkg.isBestSeller ? (
                <span className="bg-[#FFF4E5] text-[#B95000] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 border border-[#FFD8B2]">
                    <Star className="h-3 w-3 fill-current" /> Best Seller
                </span>
            ) : (
                <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    Popular
                </span>
            )}
         </div>
         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors cursor-pointer">
             <div className="text-lg">♥</div> 
         </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-3 pb-2 flex-grow">
          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors">
            {pkg.title}
          </h3>
          <p className="text-xs text-gray-500 mb-4 line-clamp-2 min-h-[32px]">
              {pkg.description || 'Comprehensive health assessment including vital organ function tests.'}
          </p>

          {/* Features Box */}
          <div className="bg-[#F8FAFC] rounded-xl p-3 mb-4 border border-gray-100">
              <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2 border-dashed">
                  <span className="text-xs font-bold text-gray-600">Includes {pkg.testCount} Tests</span>
                  <span className="text-[10px] font-bold text-primary bg-green-50 px-2 py-0.5 rounded-full">NABL Labs</span>
              </div>
              <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                      <span>Same Day Reporting</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                      <span>Free Home Collection</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                      <span>Doctor Consultation</span>
                  </div>
              </div>
          </div>
      </div>

      {/* Footer / Price Action */}
      <div className="px-5 py-4 border-t border-gray-100 bg-white mt-auto">
          <div className="flex items-center justify-between">
              <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-gray-400 line-through decoration-gray-400">₹{pkg.price}</span>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 rounded">{discountPercentage}% OFF</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 block">₹{pkg.discountedPrice}</span>
              </div>
              
              <button 
                onClick={() => onBook?.(pkg.id)}
                className="bg-primary hover:bg-green-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-green-200 flex items-center gap-2 group/btn"
              >
                  ADD <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default PackageCard;
