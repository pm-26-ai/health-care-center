import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-xl font-bold">HealthCare Center</span>
            </div>
            <p className="text-blue-100 mb-4">
              Providing world-class healthcare services with advanced technology and compassionate care since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/diagnostics" className="text-blue-200 hover:text-white transition-colors">Imaging & Diagnostics</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-blue-200 hover:text-white transition-colors">Treatments & Robotics</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-blue-200 hover:text-white transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diagnostics" className="text-blue-200 hover:text-white transition-colors">MRI Scanning</Link>
              </li>
              <li>
                <Link to="/diagnostics" className="text-blue-200 hover:text-white transition-colors">X-Ray Services</Link>
              </li>
              <li>
                <Link to="/diagnostics" className="text-blue-200 hover:text-white transition-colors">Ultrasound</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-blue-200 hover:text-white transition-colors">Robotic Surgery</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-blue-200 hover:text-white transition-colors">Physical Therapy</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">All Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-blue-100">123 Healthcare Blvd<br />Medical District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+12125551234" className="text-blue-100 hover:text-white transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:info@healthcarecenter.com" className="text-blue-100 hover:text-white transition-colors">
                  info@healthcarecenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} HealthCare Center. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;