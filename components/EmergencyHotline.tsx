import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyHotline: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2 animate-slide-up hidden md:flex">
      <div className="bg-secondary text-white px-4 py-2 rounded-t-xl rounded-br-xl shadow-lg text-xs font-bold uppercase tracking-wider animate-bounce-slow">
        24/7 Emergency Support
      </div>
      <a 
        href="tel:+91326230XXXX" 
        className="flex items-center gap-3 bg-white hover:bg-green-50 text-primary border-2 border-primary pl-3 pr-6 py-3 rounded-full shadow-xl transition-all hover:scale-105 group"
      >
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors">
          <Phone className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase">Call Now</p>
          <p className="text-lg font-bold leading-none text-primary group-hover:text-secondary transition-colors">0326-230-XXXX</p>
        </div>
      </a>
    </div>
  );
};

export default EmergencyHotline;
