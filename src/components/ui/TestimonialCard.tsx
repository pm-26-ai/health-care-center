import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  imageUrl: string;
  rating: number;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  testimonial, 
  imageUrl, 
  rating,
  service 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{service}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </motion.div>
  );
};

export default TestimonialCard;