import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Building, Clock } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { 
      icon: <Users className="h-6 w-6" />,
      value: '10,000+', 
      label: 'Patients Served',
      description: 'Trusted by thousands for quality care'
    },
    { 
      icon: <Award className="h-6 w-6" />,
      value: '50+', 
      label: 'Certified Specialists',
      description: 'Expert doctors in various fields' 
    },
    { 
      icon: <Building className="h-6 w-6" />,
      value: '5', 
      label: 'State-of-Art Facilities',
      description: 'Modern healthcare centers' 
    },
    { 
      icon: <Clock className="h-6 w-6" />,
      value: '20+', 
      label: 'Years of Experience',
      description: 'Decades of healthcare excellence' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-blue-50 rounded-xl p-6 text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-lg font-medium text-blue-600">{stat.label}</p>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;