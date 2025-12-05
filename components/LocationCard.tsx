import React from 'react';
import { LabLocation } from '../types';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';

interface LocationCardProps {
  location: LabLocation;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Map Placeholder or Header Image */}
      <div className="h-32 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-primary/20" />
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-2">{location.name}</h3>
        
        <div className="space-y-4 mb-6 flex-grow">
            <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <p>{location.address}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <p>{location.phone}</p>
            </div>
             <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-secondary flex-shrink-0" />
                <p>Mon - Sat: 7:00 AM - 9:00 PM</p>
            </div>
        </div>

        <button className="w-full bg-secondary hover:bg-cyan-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]">
           <Navigation className="h-4 w-4" /> Get Directions
        </button>
      </div>
    </div>
  );
};

export default LocationCard;