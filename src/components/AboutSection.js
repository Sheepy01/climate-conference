import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate('/registration');
  }

  const features = [
    {
      icon: "🌍",
      title: "Global Scholarly Platform",
      description: "Advancing dialogue, research, and solutions to address unprecedented global climate challenges across ecosystems and human-animal health"
    },
    {
      icon: "🤖",
      title: "AI & ML Early Detection",
      description: "Leveraging latest technological advancements in artificial intelligence and machine learning for early detection systems and predictive analysis"
    },
    {
      icon: "🔄",
      title: "Breaking Traditional Silos",
      description: "Fostering integrated perspectives by bridging gaps between disconnected fields and promoting cross-disciplinary collaboration"
    },
    {
      icon: "⚡",
      title: "Crisis Response Framework",
      description: "Addressing immediate climate impacts through innovative solutions that span human health, agriculture, and biodiversity conservation"
    }
  ];

  const keyAreas = [
    "One Health Integration",
    "Climate Change Impacts",
    "Biodiversity Preservation", 
    "Agricultural Sustainability",
    "Extreme Weather Analysis",
    "Animal Science Research",
    "AI & ML Early Warning Systems",
    "Ecosystem Resilience",
    "Cross-Disciplinary Solutions",
    "Global Crisis Management"
  ];

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About the Conference
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            The First International Conference on <span className="text-green-300 font-semibold">Climate Change Crossroads: One Health, Biodiversity, Agriculture, Extreme Weather and Animal Science (ICC1H) </span> 
            has been conceptualized as a scholarly platform for advancing dialogue, research, and solutions to some of the global challenges of this era.
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Climate change has emerged as an unprecedented global crisis which impacts across ecosystems, agriculture, human health, animal health and biodiversity. This conference will address these challenges with the latest technological advancement on early detection system using AI & ML.This meeting aims to fill the gap by breaking traditional siloed working and fostering an integrated perspective.
          </p>

          {/* Key Areas */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Key Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {keyAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8 pt-6 border-t border-white border-opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-200 mb-4">
          Ready to be part of this transformative journey?
        </p>
        <button 
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={handleJoinUsClick}
        >
          Join Us Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;