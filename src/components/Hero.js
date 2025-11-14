import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Conference date: April 2, 2026
  const conferenceDate = new Date('2026-04-02T09:00:00');

  // Headline ribbon content
  const headlines = [
    {
      text: "📢 Call for Papers Now Open!",
      link: "https://easychair.org/conferences/?conf=icc1h",
      isExternal: true
    },
    {
      text: "🎫 Registration Details Available",
      link: "/registration",
      isExternal: false
    },
    {
      text: "🌟 Early Bird Registration Opening Soon",
      link: null,
      isExternal: false
    },
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = conferenceDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleHeadlineClick = (headline) => {
    if (headline.link) {
      if (headline.isExternal) {
        window.open(headline.link, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = headline.link;
      }
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg-3.png')`
      }}
    >
      {/* Moving Headline Ribbon with Tailwind Animation */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-green-600 to-green-700 text-white max-sm:mt-[3.7rem] sm:mt-[4.2rem] md:mt-[5.8rem] lg:mt-[4.5rem] py-3 overflow-hidden z-40">
        <div className="flex max-sm:animate-scrollfast animate-scroll whitespace-nowrap">
          {[...headlines, ...headlines].map((headline, index) => (
            <div
              key={index}
              className={`mx-8 flex items-center text-sm font-medium ${
                headline.link ? 'cursor-pointer hover:text-green-200 transition-colors duration-200' : 'cursor-default'
              }`}
              onClick={() => handleHeadlineClick(headline)}
            >
              <span>{headline.text}</span>
              {headline.link && (
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-white px-4 w-full max-w-6xl mx-auto max-sm:mt-10 sm:mt-10 md:mt-16 lg:mt-14">
        {/* Main Conference Title */}
        <div className="mb-6">
          <motion.h1 
            className="text-2xl md:text-3xl font-normal mb-2 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            First International Conference <br /> on
          </motion.h1>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Climate Change Crossroads
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            One Health, Biodiversity, Agriculture, Extreme Weather, and Animal Science
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('themes').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Themes
          </button>
        </motion.div>

        {/* Countdown Timer - Compact Version */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto border border-white border-opacity-20">
            <h3 className="text-sm font-semibold mb-3 text-green-300 uppercase tracking-wide">
              Conference Starts In
            </h3>
            <div className="flex justify-center space-x-3">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 rounded-lg px-3 py-2 min-w-[60px]">
                    <div className="text-xl font-bold text-white">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-gray-200 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Date and Venue */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-48 h-0.5 bg-green-500 rounded-full"></div>
            <div className="space-y-1">
              <p className="text-lg md:text-xl font-medium">
                📅 April 2 - 3, 2026
              </p>
              <p className="text-lg md:text-xl font-medium">
                📍 Patna, Bihar, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conference Description */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-200 max-sm:hidden">
            Addressing the critical intersections between one health, climate change, biodiversity, and agriculture through international collaboration and scientific discourse.
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-5 h-5 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;