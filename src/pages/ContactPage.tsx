import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AppointmentForm from '../components/ui/AppointmentForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help with any questions about our services or to schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 p-2 bg-blue-100 rounded-full text-blue-600 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600">
                      123 Healthcare Blvd<br />
                      Medical District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 p-2 bg-blue-100 rounded-full text-blue-600 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      Main: (212) 555-1234<br />
                      Appointments: (212) 555-1235<br />
                      Emergency: (212) 555-1236
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 p-2 bg-blue-100 rounded-full text-blue-600 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@healthcarecenter.com<br />
                      Appointments: appointments@healthcarecenter.com<br />
                      Billing: billing@healthcarecenter.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 p-2 bg-blue-100 rounded-full text-blue-600 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Hours of Operation</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed (Emergency services available)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-medium text-gray-900 mb-3">Find Us</h3>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.39000601394!2d-74.11808334474305!3d40.69766374733664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1630498876078!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Healthcare Center Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AppointmentForm />
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I schedule an appointment?</h3>
              <p className="text-gray-600">
                You can schedule an appointment by calling our appointment line at (212) 555-1235, using our online appointment form on this page, or emailing appointments@healthcarecenter.com.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What should I bring to my appointment?</h3>
              <p className="text-gray-600">
                Please bring your insurance card, photo ID, list of current medications, and any relevant medical records or previous imaging results. If you're a new patient, please arrive 15 minutes early to complete registration forms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I prepare for an MRI or CT scan?</h3>
              <p className="text-gray-600">
                Preparation varies depending on the type of scan and body area being examined. Our staff will provide specific instructions when you schedule your appointment. Generally, you may need to avoid eating or drinking for a few hours before certain scans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How long does it take to get results?</h3>
              <p className="text-gray-600">
                Most diagnostic results are available within 24-48 hours. Our radiologists analyze images promptly, and reports are sent to your referring physician who will discuss the findings with you. Urgent results are expedited and may be available same-day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;