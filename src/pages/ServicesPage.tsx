import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import { Activity, Brain, Microscope, FileText, Stethoscope, Heart, Clipboard, Activity as Pulse } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const allServices = [
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'MRI Scanning',
      description: 'Advanced magnetic resonance imaging with detailed reports by expert radiologists.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'X-Ray Services',
      description: 'Digital X-ray imaging for bone and soft tissue visualization with immediate results.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Pulse className="h-6 w-6" />,
      title: 'CT Scanning',
      description: 'High-resolution computed tomography scans for detailed cross-sectional imaging.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/4226919/pexels-photo-4226919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Ultrasound',
      description: 'Non-invasive imaging of internal organs, tissues, and blood flow using sound waves.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/5795022/pexels-photo-5795022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Robotic Surgery',
      description: 'Minimally invasive surgical procedures using advanced robotic systems for enhanced precision.',
      link: '/treatments',
      imageUrl: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: 'Rehabilitation Robotics',
      description: 'Robot-assisted therapy for physical rehabilitation to improve mobility and function.',
      link: '/treatments',
      imageUrl: 'https://images.pexels.com/photos/16810474/pexels-photo-16810474/free-photo-of-woman-in-a-physical-therapy-session.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Cardiac Care',
      description: 'Comprehensive heart health services including diagnostics and robotic-assisted procedures.',
      link: '/treatments',
      imageUrl: 'https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'General Check-ups',
      description: 'Comprehensive health assessments with advanced diagnostics and personalized care plans.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="pt-16 pb-16">
      <Hero 
        title="Our Comprehensive Healthcare Services"
        subtitle="From advanced diagnostics and imaging to cutting-edge treatments and robotic surgery, we offer a full spectrum of healthcare services."
        imageUrl="https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Book Appointment"
        primaryButtonLink="/contact"
      />

      {/* All Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of healthcare services designed to provide accurate diagnoses, effective treatments, and improved patient outcomes.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {allServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  imageUrl={service.imageUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our specialized service areas designed to address a wide range of healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Imaging & Diagnostics</h3>
              <p className="text-gray-600 mb-4">
                Our advanced imaging and diagnostic services utilize the latest technology to provide accurate and detailed results for informed treatment planning.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• MRI Scanning</li>
                <li>• CT Scans</li>
                <li>• X-Ray Services</li>
                <li>• Ultrasound</li>
              </ul>
              <motion.a 
                href="/diagnostics" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Treatments</h3>
              <p className="text-gray-600 mb-4">
                Our cutting-edge treatment options include robotic surgery and AI-assisted therapy for improved outcomes and faster recovery times.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Robotic Surgery</li>
                <li>• AI-Assisted Treatment</li>
                <li>• Rehabilitation Robotics</li>
                <li>• Minimally Invasive Procedures</li>
              </ul>
              <motion.a 
                href="/treatments" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Care</h3>
              <p className="text-gray-600 mb-4">
                Our specialist services provide targeted care for specific conditions and health needs with personalized treatment plans.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Cardiac Care</li>
                <li>• Neurological Services</li>
                <li>• Orthopedic Treatments</li>
                <li>• General Check-ups</li>
              </ul>
              <motion.a 
                href="/contact" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Information</h2>
              <p className="text-lg text-gray-600">
                We work with most major insurance providers and offer various payment options to make our services accessible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accepted Insurance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Aetna</li>
                  <li>• Cigna</li>
                  <li>• UnitedHealthcare</li>
                  <li>• Medicare</li>
                  <li>• Medicaid</li>
                  <li>• And many more...</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Insurance co-payment</li>
                  <li>• Self-pay options</li>
                  <li>• Flexible payment plans</li>
                  <li>• Health savings accounts (HSA)</li>
                  <li>• Major credit cards</li>
                  <li>• Cash and personal checks</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8 text-gray-600">
              <p>For specific questions about insurance coverage or payment options, please contact our billing department at (212) 555-1234.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;