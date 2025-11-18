import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationFAB from './RegistrationFAB';
import { Calendar, MapPin, ArrowRight, Zap } from 'lucide-react';
import AboutSection from './AboutSection';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showAbout, setShowAbout] = useState(false); // Added missing state
  const aboutButtonRef = useRef(null); // Added missing ref
  const aboutSectionRef = useRef(null); // Added missing ref

  // Conference date: March 23, 2026
  const conferenceDate = new Date('2026-03-23T09:00:00');

  const sub_heading = `"Addressing the critical intersections between one health, animal health, climate change, biodiversity, agriculture, and the role of artifical intelligence and machine learning through international collaboration and scientific discourse."`

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
    {
      text: "📃 Paper Submission Deadline: Jan 10, 2026",
      link: null,
      isExternal: false
    },
    {
      text: "🔔 Acceptance Notification: Jan 31, 2026",
      link: null,
      isExternal: false
    },
    {
      text: "🧑‍💻 Registration Starting: Feb 15, 2026",
      link: null,
      isExternal: false
    },
  ];

  const toggleAboutSection = () => {
    setShowAbout(!showAbout);
  };

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
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-8 overflow-hidden"
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
      
      <div className="text-center text-white px-4 w-full max-w-6xl mx-auto max-sm:mt-10 sm:mt-10 md:mt-16 lg:mt-14 relative z-20">
        {/* Main Conference Title */}
        <div className="mb-6">
          <motion.h1 
            className="text-2xl max-sm:text-[1rem] md:text-3xl font-normal mt-10 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            First International Conference <br /> on
          </motion.h1>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text drop-shadow-2xl block">Climate Change</span>
            <span className="gradient-text drop-shadow-2xl block">Crossroads</span>
          </motion.h1>

          <motion.p className="text-sm mb-3 max-w-[50rem] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="max-sm:text-[0.9rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]">{sub_heading}</span>
          </motion.p>

          {/* Theme Tags with Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { name: "One Health", icon: "🫀", color: "from-green-500 to-emerald-500" },
              { name: "Biodiversity", icon: "🌿", color: "from-blue-500 to-cyan-500" },
              { name: "Agriculture", icon: "🌾", color: "from-amber-500 to-orange-500" },
              { name: "Extreme Weather", icon: "🌪️", color: "from-purple-500 to-pink-500" },
              { name: "Animal Science", icon: "🐾", color: "from-red-500 to-rose-500" }
            ].map((theme, index) => (
              <motion.div
                key={theme.name}
                className="group relative bg-slate-900 bg-opacity-60 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl px-5 py-4 cursor-default hover:border-opacity-40 transition-all duration-300 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.1 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-xl">{theme.icon}</span>
                  <span className="text-white font-semibold max-sm:text-sm sm:text-sm md:text-sm lg:text-lg whitespace-nowrap">
                    {theme.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button 
            className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px] overflow-hidden"
            onClick={() => document.getElementById('themes').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Explore Themes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* About Reveal Button - Simplified */}
          <div className="relative">
            <button 
              className="group relative bg-slate-900 border-2 border-white hover:border-green-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px] overflow-hidden"
              onClick={toggleAboutSection}
            >
              <span className="relative z-10 flex items-center justify-center">
                About Conference
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAbout ? 'rotate-180' : 'group-hover:rotate-180'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>

        {/* About Section Reveal */}
        <AnimatePresence>
          {showAbout && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 overflow-hidden"
            >
              <AboutSection />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Countdown Timer */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white border-opacity-20 shadow-xl">
            <h3 className="text-sm font-semibold mb-4 text-green-300 uppercase tracking-wide flex items-center justify-center">
              <Zap className="w-4 h-4 mr-2" />
              Conference Starts In
            </h3>
            <div className="flex justify-center space-x-4">
              {[
                { value: timeLeft.days, label: 'Days', color: 'bg-gradient-to-b from-green-500 to-green-600' },
                { value: timeLeft.hours, label: 'Hours', color: 'bg-gradient-to-b from-blue-500 to-blue-600' },
                { value: timeLeft.minutes, label: 'Minutes', color: 'bg-gradient-to-b from-purple-500 to-purple-600' },
                { value: timeLeft.seconds, label: 'Seconds', color: 'bg-gradient-to-b from-amber-500 to-amber-600' },
              ].map((item, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className={`${item.color} rounded-lg px-3 py-3 min-w-[65px] shadow-lg`}>
                    <div className="text-xl font-bold text-white font-mono">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-gray-200 mt-2 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Date and Venue Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <motion.div
            className="bg-slate-900 bg-opacity-60 backdrop-blur-sm rounded-xl px-8 py-4 flex items-center gap-4 group cursor-default border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-150"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "tween", duration: 0.1 }}
          >
            <Calendar className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-150" />
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Conference Dates</span>
              <span className="block text-xl font-bold text-white">March 23-24, 2026</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-900 bg-opacity-60 backdrop-blur-sm rounded-xl px-8 py-4 flex items-center gap-4 group cursor-default border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-150"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "tween", duration: 0.1 }}
          >
            <MapPin className="w-6 h-6 text-teal-400 group-hover:scale-125 transition-transform duration-150" />
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Venue</span>
              <span className="block text-xl font-bold text-white">BASU, Patna, Bihar, India</span>
            </div>
          </motion.div>
        </div>
      </div>

      <RegistrationFAB />
    </section>
  );
};

export default Hero;