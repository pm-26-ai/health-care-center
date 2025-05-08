import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="relative bg-blue-50">
      {/* Background Image with Overlay */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div> */}
      <video autoPlay muted loop id="myVideo" className="absolute">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-blue-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {primaryButtonText && primaryButtonLink && (
            <Link to={primaryButtonLink}>
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          )}

          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <motion.button
                className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryButtonText}
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
