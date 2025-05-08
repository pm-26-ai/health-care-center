import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Microscope, ArrowRight, Stethoscope } from 'lucide-react';
import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import StatsSection from '../components/ui/StatsSection';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Advanced Imaging',
      description: 'State-of-the-art MRI, CT scans, and X-rays with detailed diagnostic reports by expert radiologists.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Diagnostic Excellence',
      description: 'Comprehensive diagnostic services with quick and accurate results for informed medical decisions.',
      link: '/diagnostics',
      imageUrl: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Robotic Surgery',
      description: 'Minimally invasive procedures with advanced robotic systems for faster recovery and better outcomes.',
      link: '/treatments',
      imageUrl: 'https://images.pexels.com/photos/8472864/pexels-photo-8472864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      testimonial: 'The MRI diagnostics team was incredibly professional. They explained the entire process and made me feel comfortable. The detailed report helped my doctor prescribe the right treatment.',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      service: 'MRI Diagnostic Services'
    },
    {
      name: 'Michael Thompson',
      testimonial: 'My experience with the robotic surgery team was remarkable. The precision of the procedure and the reduced recovery time allowed me to return to normal activities much faster than expected.',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      service: 'Robotic Surgery'
    },
    {
      name: 'Emily Rodriguez',
      testimonial: 'The care I received during my diagnostic testing was exceptional. The staff was attentive, and the results were provided promptly with a clear explanation of my condition.',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
      service: 'Comprehensive Diagnostics'
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
    <div className="pb-16">
      <Hero 
        title="Advanced Healthcare for a Better Tomorrow"
        subtitle="Cutting-edge diagnostics, imaging, and treatments with compassionate care tailored to your needs."
        primaryButtonText="Book Appointment"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />

      <StatsSection />

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premier Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience healthcare excellence with our comprehensive range of diagnostic, imaging, and treatment services.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredServices.map((service, index) => (
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

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Healthcare Center?</h2>
              <p className="text-lg text-gray-600 mb-6">
                At our healthcare center, we combine cutting-edge technology with compassionate care to provide you with the best possible healthcare experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Expert Medical Team</h3>
                    <p className="text-gray-600">Our specialists are leaders in their fields with extensive experience and advanced training.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">We invest in the latest medical technologies and equipment for accurate diagnostics and effective treatments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Advanced Robotic Surgery</h3>
                    <p className="text-gray-600">Our robotic surgical systems allow for minimally invasive procedures with greater precision and faster recovery times.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Medical professionals at work" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from patients who have experienced our services and the difference we've made in their lives.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TestimonialCard 
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  imageUrl={testimonial.imageUrl}
                  rating={testimonial.rating}
                  service={testimonial.service}
                />
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Advanced Healthcare?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Book an appointment today and take the first step towards better health with our comprehensive services.
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;