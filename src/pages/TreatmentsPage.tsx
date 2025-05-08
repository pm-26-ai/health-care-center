import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import { ArrowRight, CheckCircle, Award, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const TreatmentsPage: React.FC = () => {
  const treatmentServices = [
    {
      title: 'Robotic Surgery',
      description: 'Minimally invasive surgical procedures using advanced robotic systems for enhanced precision and control.',
      benefits: [
        'Smaller incisions and reduced scarring',
        'Less blood loss and pain',
        'Shorter hospital stays',
        'Faster recovery times',
        'Higher precision for complex procedures'
      ],
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'AI-Assisted Treatment Planning',
      description: 'Advanced artificial intelligence systems that analyze diagnostic data to develop optimized treatment plans.',
      benefits: [
        'Personalized treatment strategies',
        'Comprehensive analysis of medical imaging',
        'Pattern recognition for early detection',
        'Continuous monitoring and adjustment',
        'Evidence-based decision support'
      ],
      image: 'https://images.pexels.com/photos/8851637/pexels-photo-8851637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Rehabilitation Robotics',
      description: 'Robot-assisted therapy for physical rehabilitation to improve mobility, strength, and function.',
      benefits: [
        'Precise, repeatable therapy movements',
        'Adaptive difficulty based on progress',
        'Quantifiable performance metrics',
        'Engaging interactive exercises',
        'Support for various mobility impairments'
      ],
      image: 'https://images.pexels.com/photos/16810474/pexels-photo-16810474/free-photo-of-woman-in-a-physical-therapy-session.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const roboticSpecialties = [
    {
      name: 'Orthopedic Surgery',
      description: 'Robotic-assisted joint replacements and spine surgery with precise placement and alignment.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    },
    {
      name: 'Neurosurgery',
      description: 'Precision brain and spine procedures with minimal tissue disruption and enhanced visualization.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
    {
      name: 'Cardiac Surgery',
      description: 'Minimally invasive heart procedures with smaller incisions and faster recovery times.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    },
    {
      name: 'Gynecological Surgery',
      description: 'Precise procedures for complex gynecological conditions with reduced complications.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    },
    {
      name: 'Urological Surgery',
      description: 'Enhanced visualization and precision for prostate and kidney procedures.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    },
    {
      name: 'General Surgery',
      description: 'Robotic assistance for abdominal and gastrointestinal surgical procedures.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-9.879a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
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
        title="Advanced Treatments & Robotic Surgery"
        subtitle="Cutting-edge treatment options including state-of-the-art robotic surgery for improved outcomes and faster recovery."
        imageUrl="https://images.pexels.com/photos/8942985/pexels-photo-8942985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Schedule Consultation"
        primaryButtonLink="/contact"
      />

      {/* Treatment Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Advanced Treatment Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our innovative treatment options that combine cutting-edge technology with expert medical care for optimal patient outcomes.
            </p>
          </div>

          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {treatmentServices.map((service, index) => (
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
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn more about this treatment <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Robotic Surgery Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Robotic Surgery Specialties</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our robotic surgery capabilities extend across multiple medical specialties, providing precise and minimally invasive treatment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roboticSpecialties.map((specialty, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-gray-600">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Robotic Surgery */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Robotic Surgery?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Robotic surgery represents the cutting edge of surgical innovation, offering numerous advantages over traditional surgical approaches.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Enhanced Precision</h3>
                    <p className="text-gray-600">Robotic systems provide surgeons with enhanced visualization and dexterity, allowing for more precise movements and better outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Faster Recovery</h3>
                    <p className="text-gray-600">Minimally invasive robotic procedures typically result in less pain, reduced scarring, and significantly faster recovery times.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">Our surgeons are specially trained in robotic surgery techniques and have performed hundreds of successful procedures.</p>
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
                src="https://images.pexels.com/photos/8942980/pexels-photo-8942980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Robotic surgery in action" 
                className="rounded-xl shadow-md w-full h-auto"
              />
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
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Our Advanced Treatment Options?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule a consultation with our specialists to discuss how our advanced treatments can benefit you.
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;