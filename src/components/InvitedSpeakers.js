import React from 'react';
import { motion } from 'framer-motion';

const InvitedSpeakers = () => {
  const invitedSpeakers = [
    {
      name: "Dr. Anindita Mehta",
      title: "CEO, CERC, Trustee, Consumer International",
      image: "/images/keynote_speakers/dr_anindita_mehta.jpg"
    },
    {
      name: "Dr. Nupur Bose",
      title: "Ex Professor, A.N. College, Patna",
      image: "/images/keynote_speakers/dr_nupur_bose.png"
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 text-white py-20 px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <div className="h-1 w-12 bg-white rounded"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Invited Speakers
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto font-light">
              Esteemed experts contributing their valuable insights to our conference
            </p>
            <div className="mt-6 text-sm text-emerald-100">
              ICC1H 2026 • April 2-3 • Patna, India
            </div>
          </motion.div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {invitedSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-emerald-200">
                {/* Image Container - Larger for invited speakers */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50">
                  <div className="aspect-[4/3] relative">
                    <motion.img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Invited Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Invited</span>
                    </div>
                  </div>
                </div>

                {/* Content - More spacious */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  
                  <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full mb-5 group-hover:w-32 transition-all duration-500"></div>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {speaker.title}
                  </p>

                  {/* Additional Info */}
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      <span className="font-medium">Expert Speaker</span>
                    </div>
                    <div className="text-emerald-600 font-semibold text-sm">
                      ICC1H 2026
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="text-emerald-600">
                    <circle cx="50" cy="50" r="40" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-10 max-w-3xl mx-auto border border-emerald-100">
            <svg className="w-12 h-12 text-emerald-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Engaging Discussions Await
            </h3>
            <p className="text-gray-600 text-lg">
              Our invited speakers bring diverse perspectives and deep expertise to enrich the conference dialogue
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 text-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the Conversation
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Experience these insightful presentations in person at ICC1H 2026
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Register Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default InvitedSpeakers;