import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Target, Brain, Shield, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleJoinButton = () => {
        navigate('/registration');
    }

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scholarly Platform",
      description: "Advancing dialogue, research, and solutions to address unprecedented global climate challenges"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Innovation",
      description: "Leveraging cutting-edge technology for early detection systems and predictive climate analysis"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Integrated Approach",
      description: "Breaking traditional silos to foster cross-disciplinary collaboration and holistic solutions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Crisis Response",
      description: "Addressing immediate climate impacts across ecosystems, agriculture, and health sectors"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "International Collaboration",
      description: "Bringing together global experts to share knowledge and drive meaningful change"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sustainable Solutions",
      description: "Developing practical strategies for biodiversity conservation and climate resilience"
    }
  ];

  const keyThemes = [
    "One Health Integration",
    "Climate Change Impacts", 
    "Biodiversity Preservation",
    "Agricultural Sustainability",
    "Extreme Weather Analysis",
    "Animal Science Research",
    "AI & ML Applications",
    "Ecosystem Resilience"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About The{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Conference
            </span>
          </motion.h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-8"></div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Pioneering integrated solutions for global climate challenges through innovation and collaboration
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mr-4"></span>
                Conference Vision
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  The First International conference <strong>"Climate Change Crossroads: One Health, Biodiversity, Agriculture, Extreme Weather and Animal Science (ICC1H)"</strong> has been conceptualized as a scholarly platform for advancing dialogue, research, and solutions to some of the global challenges of this era.
                </p>
                
                <p>
                  Climate change has emerged as an unprecedented global crisis which impacts across ecosystems, agriculture, human health, animal health and biodiversity. This conference will address these challenges with the latest technological advancement on early detection system using AI & ML.
                </p>
                
                <p>
                  This meeting aims to fill the gap by breaking traditional siloed working and fostering an integrated perspective.
                </p>
              </div>
            </motion.div>

            {/* Key Themes */}
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Key Conference Themes</h4>
              <div className="flex flex-wrap gap-3">
                {keyThemes.map((theme, index) => (
                  <motion.span
                    key={theme}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {theme}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-500 group hover:transform hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500 mt-4"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "International Experts" },
            { number: "20+", label: "Countries Represented" },
            { number: "5", label: "Core Themes" },
            { number: "2", label: "Days of Innovation" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button 
            className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            onClick={handleJoinButton}
          >
            <span className="flex items-center justify-center">
              Join the Movement
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;