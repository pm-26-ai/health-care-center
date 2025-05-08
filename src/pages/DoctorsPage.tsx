import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import DoctorCard from '../components/ui/DoctorCard';

const DoctorsPage: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Chief Radiologist',
      imageUrl: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Specializing in advanced MRI and CT diagnostics with over 15 years of experience in neurological and oncological imaging.',
      email: 'sarah.johnson@healthcarecenter.com',
      phone: '(212) 555-1001'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Robotic Surgery Director',
      imageUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Pioneer in minimally invasive robotic surgical techniques with specialization in orthopedic and neurological procedures.',
      email: 'michael.chen@healthcarecenter.com',
      phone: '(212) 555-1002'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Diagnostic Specialist',
      imageUrl: 'https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Expert in comprehensive diagnostics with research focus on AI-assisted medical image analysis and treatment planning.',
      email: 'emily.rodriguez@healthcarecenter.com',
      phone: '(212) 555-1003'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Neurosurgery',
      imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Specializes in complex brain and spine surgeries using robotic assistance and advanced imaging for precise procedures.',
      email: 'james.wilson@healthcarecenter.com',
      phone: '(212) 555-1004'
    },
    {
      name: 'Dr. Aisha Patel',
      specialty: 'Cardiothoracic Surgeon',
      imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Leader in minimally invasive cardiac procedures with extensive experience in robotic-assisted heart surgeries.',
      email: 'aisha.patel@healthcarecenter.com',
      phone: '(212) 555-1005'
    },
    {
      name: 'Dr. Robert Thompson',
      specialty: 'Rehabilitation Medicine',
      imageUrl: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Expert in robotic-assisted rehabilitation therapy and recovery programs for neurological and orthopedic conditions.',
      email: 'robert.thompson@healthcarecenter.com',
      phone: '(212) 555-1006'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="pt-16 pb-16">
      <Hero 
        title="Meet Our Specialist Team"
        subtitle="Our healthcare center is home to world-class specialists dedicated to providing exceptional care using the latest medical technologies."
        imageUrl="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Doctors Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Experts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our healthcare center with their expertise, innovation, and commitment to patient care.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {doctors.map((doctor, index) => (
              <motion.div key={index} variants={itemVariants}>
                <DoctorCard 
                  name={doctor.name}
                  specialty={doctor.specialty}
                  imageUrl={doctor.imageUrl}
                  description={doctor.description}
                  email={doctor.email}
                  phone={doctor.phone}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented medical professionals to join our innovative healthcare center. If you're passionate about advancing medical care through technology and personalized treatment, we'd love to hear from you.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Career Opportunities
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;