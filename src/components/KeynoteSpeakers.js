import React from 'react';
import { motion } from 'framer-motion';

const KeynoteSpeakers = () => {
  const keynoteSpeakers = [
    {
      name: "Dr. Mrutyunjay Mohapatra",
      title: "Director General of Meteorology, India Meteorological Department, Permanent Representative of India to WMO, 3rd Vice President of WMO for extreme weather theme",
      image: "/images/keynote_speakers/dr_mrityunjay_imd.jpg"
    },
    {
      name: "Dr. S. C. Bhan",
      title: "Ex-Scientist G IMD and Head of Agrometeorology for agriculture theme",
      image: "/images/keynote_speakers/dr_sc_bhan.jpeg"
    },
    {
      name: "Prof. David Polya",
      title: "University of Manchester",
      image: "/images/keynote_speakers/prof_david_polya.png"
    },
    {
      name: "Prof. Prosun Bhattacharya",
      title: "Stockholm University",
      image: "/images/keynote_speakers/prof_prosun.webp"
    },
    {
      name: "Dr. Meera Dhuriya",
      title: "NCDC - ICMR",
      image: "/images/keynote_speakers/dr_meera.jpg"
    },
    {
      name: "Dr. Harpreet Singh",
      title: "ICMR, Scientist E & Head",
      image: "/images/keynote_speakers/dr_harpreet_singh.jpg"
    },
    {
      name: "Prof. Alok Sinha",
      title: "IIT ISM, HOD, Environmental Science and Engineering",
      image: "/images/keynote_speakers/dr_alok_sinha.jpg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white py-20 pt-32 px-4 overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="h-1 w-12 bg-white rounded"></div>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                <div className="h-1 w-12 bg-white rounded"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Keynote Speakers
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light">
              Distinguished thought leaders shaping the future of climate science and sustainability
            </p>
            <div className="mt-6 text-sm text-green-100">
              ICC1H 2026 • April 2-3 • Patna, India
            </div>
          </motion.div>
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {keynoteSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 aspect-square">
                  <motion.img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Speaker Number Badge */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  
                  <div className="h-1 w-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {speaker.title}
                  </p>

                  {/* Decorative Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      <span>Keynote</span>
                    </span>
                    <span className="text-green-600 font-medium">ICC1H 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us for These Inspiring Talks
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't miss the opportunity to hear from these distinguished experts
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Register for ICC1H 2026
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default KeynoteSpeakers;