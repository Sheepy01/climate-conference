import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">This page will be updated soon!</p>
        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;