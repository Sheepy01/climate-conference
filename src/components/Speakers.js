import React from 'react';
import { motion } from 'framer-motion';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Mrutyunjay Mohapatra",
      title: "Director General of Meteorology, India Meteorological Department, Permanent Representative of India to WMO, 3rd Vice President of WMO  for extreme weather theme",
      image: "/images/keynote_speakers/dr_mrityunjay_imd.jpg"
    },
    {
      name: "Dr. S. C. Bhan",
      title: "Ex-Scientist G IMD and Head of Agrometeorology for agriculture theme",
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
      title: "NCDC - ICMR",
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
    {
      name: "Dr. Anindita Mehta",
      title: "CEO, CERC, Trustee, Consumer International",
      image: "/images/keynote_speakers/dr_anindita_mehta.jpg"
    },
    {
      name: "Dr. Nupur Bose",
      title: "Ex Professor, A.N. College, Patna",
      image: "/images/keynote_speakers/dr_nupur_bose.png"
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
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Keynote Speakers
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experts from various fields coming together to address climate change challenges
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;