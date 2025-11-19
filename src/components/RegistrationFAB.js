import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationFAB = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    window.location.href = '/registration';
  };

  const registrationStartDate = new Date('2026-02-15');
  const currentDate = new Date();
  const isRegistrationOpen = currentDate >= registrationStartDate;

  return (
    <div className="fixed max-sm:right-[1rem] max-sm:top-[31rem] lg:right-[8rem] lg:top-[20rem] -translate-y-1/2 z-50 sm:block sm:top-[14rem] sm:right-[5rem] md:block">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          // Circular Button with Ping Animation
          <motion.div
            key="circle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onHoverStart={() => setIsExpanded(true)}
            onClick={() => setIsExpanded(true)}
          >
            {/* Ping Animation Rings */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping animation-delay-500"></span>
            </span>
            
            {/* Registration Status Badge */}
            {!isRegistrationOpen && (
              <motion.div
                className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
              >
                Soon
              </motion.div>
            )}
            
            {/* Main Circle Button */}
            <motion.button
              className="relative max-sm:w-12 max-sm:h-12 w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-7 h-7 max-sm:w-5 max-sm:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
                />
              </svg>
            </motion.button>
          </motion.div>
        ) : (
          // Expanded Registration Card
          <motion.div
            key="card"
            initial={{ scale: 0, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 100 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            onHoverEnd={() => setIsExpanded(false)}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 backdrop-blur-lg border border-gray-200">
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-3"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Register Now</h3>
                <p className="text-sm text-gray-600">Secure your spot at ICC1H 2026</p>
              </div>

              {/* Registration Status Banner */}
              <motion.div
                className={`mb-4 p-3 rounded-lg border ${
                  isRegistrationOpen 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-amber-50 border-amber-200'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className={`w-3 h-3 rounded-full ${
                        isRegistrationOpen ? 'bg-green-500' : 'bg-amber-500'
                      }`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <span className={`text-sm font-semibold ${
                      isRegistrationOpen ? 'text-green-800' : 'text-amber-800'
                    }`}>
                      {isRegistrationOpen ? 'Registration Open!' : 'Registration Opens Soon'}
                    </span>
                  </div>
                  <motion.div
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      isRegistrationOpen 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {isRegistrationOpen ? 'Live' : 'Feb 15, 2026'}
                  </motion.div>
                </div>
                {!isRegistrationOpen && (
                  <motion.p 
                    className="text-xs text-amber-700 mt-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Registration starts February 15, 2026
                  </motion.p>
                )}
              </motion.div>

              {/* Benefits List */}
              <motion.div 
                className="space-y-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { icon: "✓", text: "Access to all sessions" },
                  { icon: "✓", text: "Networking opportunities" },
                  { icon: "✓", text: "Conference materials" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {benefit.icon}
                    </span>
                    <span className="text-sm text-gray-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={handleRegister}
                disabled={!isRegistrationOpen}
                className={`w-full font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isRegistrationOpen
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:shadow-xl cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={isRegistrationOpen ? { scale: 1.02 } : {}}
                whileTap={isRegistrationOpen ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span>
                  {isRegistrationOpen ? 'Register Now' : 'Registration Soon'}
                </span>
                {isRegistrationOpen && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </motion.button>

              {/* Footer */}
              <motion.p 
                className="text-xs text-gray-500 text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Mar 23 - 24, 2026 • BASU, Patna, India
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default RegistrationFAB;