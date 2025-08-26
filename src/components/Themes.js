import React from 'react';
import { motion } from 'framer-motion';

const Themes = () => {
  const themes = [
    {
      theme: "One Health and Climate Change",
      points: [
        "Linking human, and ecosystem health under a changing climate",
        "Emerging infectious diseases and climate-sensitive health risks"
      ],
      icon: "🌡️",
      color: "bg-blue-50"
    },
    {
      theme: "Biodiversity and Ecosystem Resilience",
      points: [
        "Climate impacts on species distribution and ecosystem services",
        "Conservation strategies for climate-stressed habitats"
      ],
      icon: "🌿",
      color: "bg-green-50"
    },
    {
      theme: "Agriculture and Food Security in a Warming World",
      points: [
        "Climate-smart agriculture and sustainable farming practices",
        "Impacts of extreme weather on crop yield and food supply chains"
      ],
      icon: "🌾",
      color: "bg-amber-50"
    },
    {
      theme: "Extreme Weather and Impact Based Early Warning",
      points: [
        "Heatwaves, floods, droughts, and their cascading socio-economic impacts",
        "Integrating impact based early warning systems with community-based adaptation"
      ],
      icon: "🌪️",
      color: "bg-red-50"
    },
    {
      theme: "Cross-sectoral Adaptation and Mitigation Strategies",
      points: [
        "Policy frameworks connecting health, biodiversity, and agriculture",
        "Nature-based solutions for climate resilience"
      ],
      icon: "🤝",
      color: "bg-purple-50"
    },
    {
      theme: "Integrated Assessment and Future Pathways",
      points: [
        "Modelling interactions between climate, health, biodiversity, and food systems",
        "Pathways to sustainable development under climate change crossroads",
        "One Health and Climate Change"
      ],
      icon: "📊",
      color: "bg-cyan-50"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="themes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Conference Themes
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Exploring the critical intersections between climate change and various sectors
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${theme.color}`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{theme.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{theme.theme}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {theme.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Themes;