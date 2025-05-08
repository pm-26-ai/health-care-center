import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
  description: string;
  email: string;
  phone: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ 
  name, 
  specialty, 
  imageUrl, 
  description, 
  email, 
  phone 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className="h-64 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{specialty}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Mail className="h-4 w-4 mr-2 text-blue-500" />
            <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
              {email}
            </a>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="h-4 w-4 mr-2 text-blue-500" />
            <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;