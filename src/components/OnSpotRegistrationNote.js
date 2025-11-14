import React from 'react';
import { motion } from 'framer-motion';

const OnSpotRegistrationNote = ({ exchangeRate }) => {
  const calculateUSD = (inrAmount) => {
    if (!exchangeRate) return '...';
    return (inrAmount / exchangeRate).toFixed(2);
  };

  return (
    <motion.div
      className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 lg:mb-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex items-start">
        {/* Icon */}
        <div className="bg-yellow-100 p-2 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
          <span className="text-yellow-600 text-lg sm:text-xl">💰</span>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h3 className="font-bold text-yellow-800 text-base sm:text-lg">
              On-Spot Registration Notice
            </h3>
            <div className="bg-yellow-200 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Additional Charges Apply
            </div>
          </div>
          
          <div className="text-yellow-700 text-sm sm:text-base leading-relaxed">
            <p className="mb-2">
              An additional fee of <span className="font-semibold">₹500</span> 
              {exchangeRate && (
                <span> (approximately <span className="font-semibold">${calculateUSD(500)} USD</span>)</span>
              )} will be charged for on-spot registrations.
            </p>
            <p className="text-xs sm:text-sm text-yellow-600">
              💡 <strong>Pro Tip:</strong> Register online before the deadline to avoid extra charges and secure your spot early!
            </p>
          </div>
          
          {/* Fee Breakdown */}
          <div className="mt-3 pt-3 border-t border-yellow-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="text-center bg-white rounded-lg p-2 border border-yellow-200">
                <div className="font-semibold text-yellow-700">On-Spot Fee</div>
                <div className="font-bold text-yellow-800 text-base">₹500</div>
                <div className="text-yellow-600">Indian Participants</div>
              </div>
              <div className="text-center bg-white rounded-lg p-2 border border-yellow-200">
                <div className="font-semibold text-yellow-700">USD Equivalent</div>
                <div className="font-bold text-yellow-800 text-base">
                  ${calculateUSD(500)}
                </div>
                <div className="text-yellow-600">International Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OnSpotRegistrationNote;