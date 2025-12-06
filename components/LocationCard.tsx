
import React from 'react';
import { LabLocation } from '../types';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';

interface LocationCardProps {
  location: LabLocation;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Map Placeholder or Header Image */}
      <div className="h-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
            <MapPin className="h-10 w-10 text-primary/20" />
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{location.name}</h3>
        
        <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p>{location.address}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <p>{location.phone}</p>
            </div>
             <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <p>Mon - Sat: 7:00 AM - 9:00 PM</p>
            </div>
        </div>

        <button className="w-full bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 group-hover:bg-green-50">
           <Navigation className="h-4 w-4" /> Get Directions
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
