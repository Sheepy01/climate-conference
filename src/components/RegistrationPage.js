import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RegistrationPage = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('fees');

  const registrationData = [
    { category: 'Student', inr: 2000, description: 'Full-time students with valid ID' },
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
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Professional Header Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Conference Registration
          </motion.h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            International Conference on Climate Change, One Health, Biodiversity, Agriculture and Extreme Weather
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4 text-sm">
            <div className="bg-green-600 px-3 py-1 rounded-full">📅 2-3 Apr 2026</div>
            <div className="bg-green-600 px-3 py-1 rounded-full">📍 Patna, Bihar, India</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <motion.div 
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Trust Indicators Bar */}
          <div className="bg-gray-100 border-b border-gray-200 px-8 py-4">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Secure Registration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Official Conference</span>
                </div>
              </div>
              <div className="text-green-700 font-semibold">
                Organized by: Asian Development Research Institute
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'fees', label: 'Registration Fees' },
                  { id: 'information', label: 'Important Information' },
                  { id: 'contact', label: 'Contact & Support' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
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
              <div className="space-y-8">
                {/* Exchange Rate Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-800 text-lg">💱 Current Exchange Rate</h3>
                      <p className="text-blue-600">
                        {exchangeRate ? `1 USD = ₹${exchangeRate.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Loading current rates...'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-blue-600">Rates update automatically</p>
                      <p className="text-xs text-blue-500">Source: International Forex Markets</p>
                    </div>
                  </div>
                </div>

                {/* Registration Fees Table */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration Fee Structure</h2>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-600">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Participant Category</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-white">Description</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-white">Fees (INR)</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-white">Fees (USD)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {registrationData.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-semibold text-gray-900">{item.category}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-600 text-center">{item.description}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <div className="font-semibold text-gray-900">₹{item.inr.toLocaleString('en-IN')}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <div className="font-semibold text-green-700">
                                ${calculateUSD(item.inr)}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 text-lg mb-4">🎁 Registration Includes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-700">Conference Kit & Proceedings</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-700">Lunch & Refreshments (Both Days)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-700">Access to All Technical Sessions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-700">Conference Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Information Tab Content */}
            {activeTab === 'information' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Registration Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 text-lg mb-3">📋 Registration Process</h3>
                    <ol className="list-decimal list-inside space-y-2 text-blue-700">
                      <li>Complete the online registration form</li>
                      <li>Make payment via available methods</li>
                      <li>Receive confirmation email within 24 hours</li>
                      <li>Present confirmation at venue for kit collection</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="font-semibold text-green-800 text-lg mb-3">💳 Payment Methods</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Bank Transfer (Domestic & International)</li>
                      <li>• Credit/Debit Cards</li>
                      <li>• UPI Payments</li>
                      <li>• On-site Payment (Limited availability)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-800 text-lg mb-3">⚠️ Important Notes</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Registration fees are non-refundable</li>
                    <li>• Student registration requires valid student ID</li>
                    <li>• Co-author registration is for additional authors only</li>
                    <li>• All fees include 18% GST as applicable</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Contact Tab Content */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration Support</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-4">📞 Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          📧
                        </div>
                        <div>
                          <div className="font-medium">Registration Queries</div>
                          <div className="text-green-600">climatecrossroads01@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          💬
                        </div>
                        <div>
                          <div className="font-medium">Technical Support</div>
                          <div className="text-blue-600">+91-XXX-XXXX-XXXX</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-4">🏢 Conference Secretariat</h3>
                    <div className="text-gray-600 space-y-2">
                      <p><strong>Asian Development Research Institute (ADRI)</strong></p>
                      <p>Patna, Bihar, India</p>
                      <p>Email: info@adriindia.org</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-green-800 text-lg mb-2">Ready to Register?</h3>
                  <p className="text-green-600 mb-4">Secure your participation in this premier international conference</p>
                  <button 
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                    onClick={() => alert('Registration portal will be available soon!')}
                  >
                    Proceed to Registration
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
              <button 
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded"
                onClick={() => window.history.back()}
              >
                ← Back
              </button>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-8 rounded-lg flex items-center"
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