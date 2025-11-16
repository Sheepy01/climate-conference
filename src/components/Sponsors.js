import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "images/sponsors/adri_csec.jpg"
    },
    {
      name: "Sponsor 2",
      logo: "images/sponsors/ims.jpeg"
    },
    {
      name: "Sponsor 3",
      logo: "images/sponsors/mcs.jpg"
    },
    {
      name: "Sponsor 4",
      logo: "images/sponsors/basu.png"
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
    <section id="sponsors" className="py-20 bg-gradient-to-br from-green-500 to-green-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Sponsors
        </motion.h2>
        <motion.p 
          className="text-center text-gray-100 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Organizations supporting our mission to address climate change challenges
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-40"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="max-w-full max-h-32 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;