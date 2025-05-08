import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import { ArrowRight, FileText, BookOpen, Cog, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiagnosticsPage: React.FC = () => {
  const diagnosticServices = [
    {
      title: 'MRI Imaging',
      description: 'High-resolution magnetic resonance imaging for detailed visualization of organs, tissues, and structures.',
      features: [
        'Advanced 3T MRI scanners',
        'Whole body, neurological, and specialized scans',
        'Detailed reports by certified radiologists',
        'Same-day emergency appointments available'
      ],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'CT Scans',
      description: 'Computed tomography scans combining X-rays and computer processing for cross-sectional body images.',
      features: [
        'Low-dose CT technology',
        'Full body and targeted scanning',
        'Fast scanning times with minimal waiting',
        'Digital images available immediately'
      ],
      image: 'https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'X-Ray Services',
      description: 'Standard and specialized X-ray imaging for bone, chest, and abdominal diagnostics.',
      features: [
        'Digital X-ray technology',
        'Immediate image processing',
        'Multiple view options',
        'Pediatric-friendly procedures'
      ],
      image: 'https://images.pexels.com/photos/8460125/pexels-photo-8460125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Ultrasound',
      description: 'Non-invasive imaging using sound waves to visualize internal organs, tissues, and vascular structures.',
      features: [
        'General and specialized ultrasound',
        'Obstetric and gynecological services',
        'Abdominal and vascular scanning',
        'Real-time imaging and recording'
      ],
      image: 'https://images.pexels.com/photos/5795022/pexels-photo-5795022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
        title="Advanced Imaging & Diagnostics"
        subtitle="State-of-the-art imaging and diagnostic services with detailed reports for accurate medical diagnosis and treatment planning."
        imageUrl="https://images.pexels.com/photos/4226225/pexels-photo-4226225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Book Diagnostic Service"
        primaryButtonLink="/contact"
      />

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Imaging & Diagnostic Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of advanced imaging and diagnostic services to help identify and treat various medical conditions with precision.
            </p>
          </div>

          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {diagnosticServices.map((service, index) => (
              <motion.div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                variants={itemVariants}
              >
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-xl shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Schedule this service <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Diagnostic Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a seamless diagnostic journey with our systematic approach to imaging and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Consultation</h3>
              <p className="text-gray-600">
                Initial consultation with a specialist to determine the appropriate diagnostic tests based on symptoms and medical history.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <Cog className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Imaging Procedure</h3>
              <p className="text-gray-600">
                State-of-the-art imaging conducted by trained technicians using our advanced equipment with detailed protocols.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Expert Analysis</h3>
              <p className="text-gray-600">
                Thorough analysis and detailed reporting by our specialist radiologists, often available within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Advanced Diagnostic Services?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you with accurate diagnosis using cutting-edge technology.
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Diagnostic Service
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticsPage;