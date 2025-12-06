
import React from 'react';
import { HealthPackage } from '../types';
import { ShoppingCart, Clock, ShieldCheck, Zap } from 'lucide-react';

interface PackageCardProps {
  pkg: HealthPackage;
  onBook?: (id: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBook }) => {
  const discountPercentage = Math.round(((pkg.price - pkg.discountedPrice) / pkg.price) * 100);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-5 flex flex-col h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
      
      {/* Badges */}
      <div className="flex justify-between items-start mb-4">
         {pkg.isBestSeller ? (
             <span className="bg-orange-50 text-orange-700 border border-orange-100 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1">
                 <Zap className="h-3 w-3 fill-current" /> Best Seller
             </span>
         ) : (
            <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                Recommended
            </span>
         )}
         <span className="bg-green-50 text-green-700 border border-green-100 text-[10px] font-bold px-2 py-1 rounded-md">
             {discountPercentage}% OFF
         </span>
      </div>

      {/* Title */}
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">
            {pkg.title}
        </h3>
      </div>

      {/* Description / Features */}
      <div className="flex-grow">
         <p className="text-xs text-gray-500 mb-4 font-medium bg-gray-50 inline-block px-2 py-1 rounded">
            Includes {pkg.testCount} Tests
         </p>
         
         <div className="space-y-2 mb-6">
             <div className="flex items-center gap-2 text-xs text-gray-600">
                 <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Clock className="h-3 w-3" />
                 </div>
                 <span>Reports within 24 Hours</span>
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-600">
                 <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <ShieldCheck className="h-3 w-3" />
                 </div>
                 <span>NABL Accredited Labs</span>
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-600">
                 <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <Zap className="h-3 w-3" />
                 </div>
                 <span>Free Home Collection</span>
             </div>
         </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-200 my-3"></div>

      {/* Price & Action */}
      <div className="flex items-center justify-between">
         <div>
             <p className="text-xs text-gray-400 line-through">₹{pkg.price}</p>
             <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-gray-900">₹{pkg.discountedPrice}</span>
             </div>
         </div>
         <button 
           onClick={() => onBook?.(pkg.id)}
           className="bg-white border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm"
         >
             ADD <ShoppingCart className="h-3 w-3" />
         </button>
      </div>
    </div>
  );
};

export default PackageCard;
