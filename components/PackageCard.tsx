import React from 'react';
import { HealthPackage } from '../types';
import { ShoppingCart, Check, Star } from 'lucide-react';

interface PackageCardProps {
  pkg: HealthPackage;
  onBook?: (id: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBook }) => {
  const discountPercentage = Math.round(((pkg.price - pkg.discountedPrice) / pkg.price) * 100);

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Badges */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
        {pkg.isBestSeller && (
          <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Star className="h-3 w-3 fill-current" /> Best Seller
          </div>
        )}
        <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {discountPercentage}% OFF
        </div>
      </div>

      {/* Header */}
      <div className="mb-6 mt-2">
        <h3 className="text-xl font-bold text-primary mb-2 pr-12">{pkg.title}</h3>
        <p className="text-sm text-gray-500 font-medium">{pkg.testCount}+ Tests Included</p>
      </div>

      {/* Features Preview */}
      <div className="space-y-3 mb-8 flex-grow">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="p-1 rounded-full bg-green-50 text-green-600">
            <Check className="h-3 w-3" />
          </div>
          <span>Lipid Profile & Heart Check</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
           <div className="p-1 rounded-full bg-green-50 text-green-600">
            <Check className="h-3 w-3" />
          </div>
          <span>Liver & Kidney Function</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
           <div className="p-1 rounded-full bg-green-50 text-green-600">
            <Check className="h-3 w-3" />
          </div>
          <span>Complete Blood Count</span>
        </div>
      </div>

      {/* Footer / Price */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex justify-between items-end mb-4">
          <div>
             <p className="text-xs text-gray-400 font-medium line-through mb-1">${pkg.price}</p>
             <p className="text-2xl font-bold text-primary">${pkg.discountedPrice}</p>
          </div>
          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
            Save ${pkg.price - pkg.discountedPrice}
          </span>
        </div>
        
        <button 
          onClick={() => onBook?.(pkg.id)}
          className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-900/10"
        >
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PackageCard;