import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLinkClick = (item) => {
    if (location.pathname === '/') {
      // We're on the home page - scroll to section
      const element = document.getElementById(item);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page - navigate to home page first, then scroll
      navigate('/', { 
        state: { scrollTo: item },
        replace: true 
      });
    }
  };

  // Effect to handle scrolling after navigation (if needed)
  React.useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent repeated scrolling
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Climate Change Crossroads</h3>
            <p className="text-gray-400">
              Addressing the critical intersections between one health, climate change, biodiversity, agriculture, and animal science.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['themes', 'speakers', 'sponsors'].map((item) => (
                <li key={item}>
                  <button 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => handleQuickLinkClick(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">climatecrossroads01@gmail.com</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Asian Development Research Institute. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;