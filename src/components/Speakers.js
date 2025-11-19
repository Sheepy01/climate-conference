import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Star, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Speakers = () => {
  const navigate = useNavigate();

    const handleJoinButton = () => {
        navigate('/registration');
    }

  const keynoteSpeakers = [
    {
      name: "Dr. Ashok Ghosh",
      title: "Mahavir Cancer Sansthan and Research Centre",
      role: "Professor & Head, Former Chairman at Bihar State Pollution Control Board Member",
      theme: "Health",
      image: "/images/keynote_speakers/dr_ashok_ghosh.jpg",
      featured: true,
    },
    {
      name: "Dr. Mrutyunjay Mohapatra",
      title: "Director General of Meteorology, India Meteorological Department",
      role: "Permanent Representative of India to WMO, 3rd Vice President of WMO",
      theme: "Extreme Weather",
      image: "/images/keynote_speakers/dr_mrityunjay_imd.jpg",
      featured: true
    },
    {
      name: "Dr. S. C. Bhan",
      title: "Ex-Scientist G IMD and Head of Agrometeorology",
      role: "Agriculture Theme Expert",
      theme: "Agriculture",
      image: "/images/keynote_speakers/dr_sc_bhan.jpeg",
      featured: true
    },
    {
      name: "Prof. David Polya",
      title: "University of Manchester",
      role: "Environmental Research",
      theme: "Climate Science",
      image: "/images/keynote_speakers/prof_david_polya.png",
      featured: true
    },
    {
      name: "Prof. Prosun Bhattacharya",
      title: "Stockholm University",
      role: "Environmental Science",
      theme: "One Health",
      image: "/images/keynote_speakers/prof_prosun.webp",
      featured: true
    },
    {
      name: "Dr. Meera Dhuriya",
      title: "NCDC - ICMR",
      role: "Public Health Specialist",
      theme: "Health & Climate",
      image: "/images/keynote_speakers/dr_meera.jpg",
      featured: true
    },
    {
      name: "Dr. Harpreet Singh",
      title: "ICMR, Scientist E & Head",
      role: "Medical Research",
      theme: "Health Sciences",
      image: "/images/keynote_speakers/dr_harpreet_singh.jpg",
      featured: true
    },
    {
      name: "Prof. Alok Sinha",
      title: "IIT ISM, HOD",
      role: "Environmental Science and Engineering",
      theme: "Environmental Tech",
      image: "/images/keynote_speakers/dr_alok_sinha.jpg",
      featured: true
    },
  ];

  const invitedSpeakers = [
    {
      name: "Dr. Anindita Mehta",
      title: "CEO, CERC",
      role: "Trustee, Consumer International",
      theme: "Policy & Governance",
      image: "/images/keynote_speakers/dr_anindita_mehta.jpg"
    },
    {
      name: "Dr. Nupur Bose",
      title: "Ex Professor, A.N. College, Patna",
      role: "Academic Research",
      theme: "Climate Education",
      image: "/images/keynote_speakers/dr_nupur_bose.jpg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="speakers" className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">Distinguished Speakers</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Speakers
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            World-renowned experts and thought leaders pioneering solutions at the intersection of climate science, technology, and sustainable development
          </motion.p>
        </motion.div>

        {/* Keynote Speakers Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Keynote Speakers</h3>
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
            </motion.div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {keynoteSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-xs overflow-hidden border border-gray-100"
                variants={itemVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Featured Badge */}
                {speaker.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Keynote
                    </div>
                  </div>
                )}

                {/* Theme Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                    {speaker.theme}
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 20%" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <ExternalLink className="w-4 h-4 text-gray-700 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-green-700 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-green-600 mb-2 leading-tight">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {speaker.role}
                  </p>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-green-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Invited Speakers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Users className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Invited Speakers</h3>
            </motion.div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {invitedSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 w-full max-w-xs overflow-hidden border border-gray-100"
                variants={itemVariants}
                whileHover="hover"
              >
                {/* Theme Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {speaker.theme}
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 20%" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mb-2 leading-tight">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {speaker.role}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Join Distinguished Experts</h4>
            <p className="text-gray-600 mb-6">
              Be part of the conversation with leading minds shaping the future of climate science and sustainable development.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" onClick={handleJoinButton}>
              Register to Attend
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;