import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OnSpotRegistrationNote from './OnSpotRegistrationNote';

const RegistrationPage = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('fees');

  const registrationData = [
    { category: 'Student', inr: 3000, description: 'Full-time students with valid ID' },
    { category: 'Academicians', inr: 5000, description: 'Faculty members and researchers' },
    { category: 'Industry Professionals', inr: 8000, description: 'Corporate and industry participants' },
  ];

  const calculateUSD = (inrAmount) => {
    if (!exchangeRate) return 'Loading...';
    return (inrAmount / exchangeRate).toFixed(2);
  };

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=INR');
        if (response.ok) {
          const data = await response.json();
          setExchangeRate(data.rates.INR);
        }
      } catch (error) {
        setExchangeRate(83.0);
      } finally {
        setLoading(false);
      }
    };
    fetchExchangeRate();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-20">
      {/* Professional Header Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white max-sm:mt-14 sm:mt-14 md:mt-20 lg:mt-0 py-5 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Conference Registration
          </motion.h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto px-2">
            International Conference on Climate Change, One Health, Biodiversity, Agriculture, Extreme Weather, and Animal Science
          </p>
          <div className="mt-3 lg:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="bg-green-600 px-2 sm:px-3 py-1 rounded-full">📅 2-3 Apr 2026</div>
            <div className="bg-green-600 px-2 sm:px-3 py-1 rounded-full">📍 Patna, Bihar, India</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 -mt-6 lg:-mt-8">
        <motion.div 
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Trust Indicators Bar */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-gray-600">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                  <span>Secure Registration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
                  <span>Official Conference</span>
                </div>
              </div>
              <div className="text-green-700 font-semibold text-xs sm:text-sm text-center sm:text-right">
                Organized by: Asian Development Research Institute
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-6 lg:mb-8 overflow-x-auto">
              <nav className="flex space-x-4 sm:space-x-8 min-w-max">
                {[
                  { id: 'fees', label: 'Registration Fees' },
                  { id: 'information', label: 'Important Information' },
                  { id: 'contact', label: 'Contact & Support' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-2 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Fees Tab Content */}
            {activeTab === 'fees' && (
              <div className="space-y-6 lg:space-y-8">
                {/* Header Section */}
                <div className="text-center mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 lg:mb-3">Registration Fee Structure</h2>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
                    Complete pricing details for all participant categories. Fees include access to all technical sessions, conference materials, meals, and certification.
                  </p>
                </div>

                <OnSpotRegistrationNote exchangeRate={exchangeRate}></OnSpotRegistrationNote>

                {/* Exchange Rate Banner */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg lg:rounded-xl p-4 sm:p-6 text-white shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                        <span className="text-xl sm:text-2xl">💱</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">Live Exchange Rate</h3>
                        <p className="text-blue-100 text-sm sm:text-base">
                          {exchangeRate ? `1 USD = ₹${exchangeRate.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Fetching current rates...'}
                        </p>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <div className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm inline-block">
                        🔄 Auto-updating
                      </div>
                      <p className="text-blue-100 text-xs sm:text-sm mt-1">Rates sourced from international forex markets</p>
                    </div>
                  </div>
                </div>

                {/* Main Fees Table - Mobile Card View / Desktop Table View */}
                <div className="bg-white rounded-lg lg:rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 sm:px-6 py-3 lg:py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <h3 className="text-white font-bold text-lg sm:text-xl">Conference Registration Fees</h3>
                      <div className="bg-green-500 bg-opacity-30 px-2 sm:px-3 py-1 rounded-full text-green-100 text-xs sm:text-sm">
                        All prices inclusive of GST
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Table */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 sm:px-6 py-3 lg:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Participant Category
                          </th>
                          <th className="px-4 sm:px-6 py-3 lg:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Eligibility & Description
                          </th>
                          <th className="px-4 sm:px-6 py-3 lg:py-4 text-center text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Indian Rupee (INR)
                          </th>
                          <th className="px-4 sm:px-6 py-3 lg:py-4 text-center text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            US Dollar (USD)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {registrationData.map((item, index) => (
                          <tr 
                            key={index} 
                            className="hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <td className="px-4 sm:px-6 py-4 lg:py-5 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3 ${
                                  item.category === 'Student' ? 'bg-blue-500' :
                                  item.category === 'Academicians' ? 'bg-green-500' :
                                  'bg-purple-500'
                                }`}></div>
                                <div className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">{item.category}</div>
                              </div>
                            </td>
                            <td className="px-4 sm:px-6 py-4 lg:py-5">
                              <div className="text-xs sm:text-sm text-gray-600 max-w-xs">{item.description}</div>
                              {item.category === 'Student' && (
                                <div className="mt-1">
                                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                    Valid ID Required
                                  </span>
                                </div>
                              )}
                            </td>
                            <td className="px-4 sm:px-6 py-4 lg:py-5 whitespace-nowrap text-center">
                              <div className="flex flex-col items-center">
                                <span className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">₹{item.inr.toLocaleString('en-IN')}</span>
                                <span className="text-xs text-gray-500 mt-1">Indian Participants</span>
                              </div>
                            </td>
                            <td className="px-4 sm:px-6 py-4 lg:py-5 whitespace-nowrap text-center">
                              <div className="flex flex-col items-center">
                                <span className="font-bold text-green-700 text-sm sm:text-base lg:text-lg">${calculateUSD(item.inr)}</span>
                                <span className="text-xs text-gray-500 mt-1">International Participants</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="lg:hidden p-4 space-y-4">
                    {registrationData.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${
                              item.category === 'Student' ? 'bg-blue-500' :
                              item.category === 'Academicians' ? 'bg-green-500' :
                              'bg-purple-500'
                            }`}></div>
                            <h4 className="font-bold text-gray-900 text-base">{item.category}</h4>
                          </div>
                          {item.category === 'Student' && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              ID Required
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center bg-white rounded-lg p-3 border border-gray-200">
                            <div className="font-bold text-gray-900 text-lg">₹{item.inr.toLocaleString('en-IN')}</div>
                            <div className="text-xs text-gray-500 mt-1">INR</div>
                          </div>
                          <div className="text-center bg-white rounded-lg p-3 border border-gray-200">
                            <div className="font-bold text-green-700 text-lg">${calculateUSD(item.inr)}</div>
                            <div className="text-xs text-gray-500 mt-1">USD</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits & Inclusions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* What's Included */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg lg:rounded-xl p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <span className="text-green-600 text-lg sm:text-xl">🎁</span>
                      </div>
                      <h3 className="font-bold text-green-800 text-base sm:text-lg">Registration Benefits</h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        'Complete Conference Kit & Proceedings',
                        'Lunch & Refreshments (Both Days)',
                        'Access to All Technical Sessions',
                        'Digital Certificate of Participation',
                        'Conference Dinner & Networking',
                        'Abstract Book & Materials'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                          <span className="text-green-700 text-xs sm:text-sm leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Notes */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg lg:rounded-xl p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <span className="text-blue-600 text-lg sm:text-xl">📋</span>
                      </div>
                      <h3 className="font-bold text-blue-800 text-base sm:text-lg">Registration Notes</h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        'Student registration requires valid student ID',
                        'Fees include 18% GST as applicable',
                        'Accommodation not included',
                        'Early bird discounts may apply',
                        'Group registrations available',
                        'Contact organizers for queries'
                      ].map((note, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                          <span className="text-blue-700 text-xs sm:text-sm leading-relaxed">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white border border-gray-200 rounded-lg lg:rounded-xl p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <span className="text-purple-600 text-lg sm:text-xl">💳</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-base sm:text-lg">Accepted Payment Methods</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {[
                      { method: 'Bank Transfer', desc: 'Domestic & International', icon: '🏦' },
                      { method: 'Credit Card', desc: 'Visa/Mastercard/Amex', icon: '💳' },
                      { method: 'UPI Payment', desc: 'Indian Participants', icon: '📱' },
                      { method: 'Demand Draft', desc: 'Payable to ADRI', icon: '📄' }
                    ].map((payment, index) => (
                      <div key={index} className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{payment.icon}</div>
                        <div className="font-semibold text-gray-800 text-xs sm:text-sm">{payment.method}</div>
                        <div className="text-xs text-gray-600 mt-1 leading-tight">{payment.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg lg:rounded-xl p-6 sm:p-8 text-center text-white shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Ready to Secure Your Spot?</h3>
                  <p className="text-green-100 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                    Join leading researchers, academicians, and industry professionals at this premier international conference.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button 
                      className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                      onClick={() => alert('Registration portal opening soon!')}
                    >
                      Register Now ›
                    </button>
                    <button 
                      className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base"
                      onClick={() => setActiveTab('contact')}
                    >
                      Contact Organizers
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Information Tab Content */}
            {activeTab === 'information' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Important Registration Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                    <h3 className="font-semibold text-blue-800 text-base sm:text-lg mb-2 sm:mb-3">📋 Registration Process</h3>
                    <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-blue-700 text-sm sm:text-base">
                      <li>Complete the online registration form</li>
                      <li>Make payment via available methods</li>
                      <li>Receive confirmation email within 24 hours</li>
                      <li>Present confirmation at venue for kit collection</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
                    <h3 className="font-semibold text-green-800 text-base sm:text-lg mb-2 sm:mb-3">💳 Payment Methods</h3>
                    <ul className="space-y-1 sm:space-y-2 text-green-700 text-sm sm:text-base">
                      <li>• Bank Transfer (Domestic & International)</li>
                      <li>• Credit/Debit Cards</li>
                      <li>• UPI Payments</li>
                      <li>• On-site Payment (Limited availability)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold text-yellow-800 text-base sm:text-lg mb-2 sm:mb-3">⚠️ Important Notes</h3>
                  <ul className="space-y-1 sm:space-y-2 text-yellow-700 text-sm sm:text-base">
                    <li>• Registration fees are non-refundable</li>
                    <li>• Student registration requires valid student ID</li>
                    <li>• All fees include 18% GST as applicable</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Contact Tab Content */}
            {activeTab === 'contact' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Registration Support</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">📞 Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                          📧
                        </div>
                        <div>
                          <div className="font-medium text-sm sm:text-base">Registration Queries</div>
                          <div className="text-green-600 text-sm sm:text-base">climatecrossroads01@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                          💬
                        </div>
                        <div>
                          <div className="font-medium text-sm sm:text-base">Technical Support</div>
                          <div className="text-blue-600 text-sm sm:text-base">+91-XXX-XXXX-XXXX</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">🏢 Conference Secretariat</h3>
                    <div className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                      <p><strong>Asian Development Research Institute (ADRI)</strong></p>
                      <p>Patna, Bihar, India</p>
                      <p>Email: info@adriindia.org</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 text-center">
                  <h3 className="font-semibold text-green-800 text-base sm:text-lg mb-2">Ready to Register?</h3>
                  <p className="text-green-600 mb-3 sm:mb-4 text-sm sm:text-base">Secure your participation in this premier international conference</p>
                  <button 
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
                    onClick={() => alert('Registration portal will be available soon!')}
                  >
                    Proceed to Registration
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-3">
              <button 
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 sm:px-6 rounded text-sm sm:text-base order-2 sm:order-1"
                onClick={() => window.history.back()}
              >
                ← Back
              </button>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 sm:px-8 rounded-lg flex items-center justify-center text-sm sm:text-base order-1 sm:order-2"
                onClick={() => alert('Registration portal will be available soon!')}
              >
                Start Registration ›
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationPage;