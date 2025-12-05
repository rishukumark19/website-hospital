import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, location, rating, text, image }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full relative hover:shadow-lg transition-all duration-300">
      <Quote className="absolute top-6 right-6 h-8 w-8 text-green-100" />
      
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-xs text-gray-500 font-medium">{location}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
          />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-grow italic">
        "{text}"
      </p>
    </div>
  );
};

export default TestimonialCard;
