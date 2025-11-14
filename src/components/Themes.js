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
      color: "bg-blue-100"
    },
    {
      theme: "Biodiversity and Ecosystem Resilience",
      points: [
        "Climate impacts on species distribution and ecosystem services",
        "Conservation strategies for climate-stressed habitats"
      ],
      icon: "🌿",
      color: "bg-green-100"
    },
    {
      theme: "Agriculture and Food Security in a Warming World",
      points: [
        "Climate-smart agriculture and sustainable farming practices",
        "Impacts of extreme weather on crop yield and food supply chains"
      ],
      icon: "🌾",
      color: "bg-amber-100"
    },
    {
      theme: "Extreme Weather and Impact Based Early Warning",
      points: [
        "Heatwaves, floods, droughts, and their cascading socio-economic impacts",
        "Integrating impact based early warning systems with community-based adaptation"
      ],
      icon: "🌪️",
      color: "bg-red-100"
    },
    {
      theme: "Animal Science and Climate Adaptation",
      points: [
        "Climate impacts on livestock health and productivity",
        "Sustainable animal husbandry practices in changing climates"
      ],
      icon: "🐄",
      color: "bg-orange-100"
    },
    {
      theme: "Cross-sectoral Adaptation and Mitigation Strategies",
      points: [
        "Policy frameworks connecting health, biodiversity, agriculture, and animal science",
        "Nature-based solutions for climate resilience",
        "Modelling interactions between climate, health, biodiversity, and food systems",
        "One Health and Climate Change"
      ],
      icon: "🤝",
      color: "bg-purple-100"
    },
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

        {/* Solution: Use flexbox with wrap and justify-center for proper centering */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${theme.color} w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{theme.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{theme.theme}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {theme.points.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed">{point}</li>
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