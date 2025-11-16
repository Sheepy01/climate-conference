import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      // We're on the home page - scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page - navigate to home page first, then scroll
      navigate('/', { 
        state: { scrollTo: id }
      });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Effect to handle scrolling after navigation (if needed)
  React.useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent repeated scrolling
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

  const dropdownMenus = {
    "Calls": [
      { 
        label: "Call for paper", 
        link: "https://easychair.org/conferences/?conf=icc1h",
        external: true 
      },
      { 
        label: "Call for poster presentation", 
        link: "/call-for-poster",
        external: false 
      }
    ],
    "For Author": [
      { label: "Guidelines for paper submission", link: "/guidelines-paper", external: false },
      { label: "Presentation guidelines", link: "/presentation-guidelines", external: false },
      { label: "Guidelines for poster session", link: "/poster-guidelines", external: false }
    ],
    "Registration": [
      { label: "Registration details", link: "/registration", external: false }
    ],
    "Program": [
      { label: "Program flyer", link: "/program-flyer", external: false },
      { label: "Technical program", link: "/technical-program", external: false },
      { label: "Conference proceedings", link: "/proceedings", external: false },
      { label: "Keynote speakers", link: "/keynote-speakers", external: false },
      { label: "Invited Speakers", link: "/invited-speakers", external: false }
    ],
    "Travel and Venue": [
      { label: "Check travel and venue details", link: "/travel-venue", external: false }
    ],
    "Sponsors": [
      { label: "ADRI CSEC", link: "https://www.adriindia.org/centre/csec", external: true },
      { label: "Indian Meteorogical Society", link: "https://imetsociety.org/", external: true },
      { label: "Mahavir Cancer Sansthan", link: "https://www.mahavircancersansthan.com/", external: true },
      { label: "Bihar Animal Sciences University", link: "https://basu.org.in/", external: true },
    ]
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const handleMenuItemClick = (item) => {
    if (item.external) {
      // For external links, open in new tab
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
    // Close dropdowns regardless
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <motion.header 
      className="fixed w-full bg-white bg-opacity-95 shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-3 max-sm:py-0 sm:py-1">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-green-700 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <a href='/'>
              <FontAwesomeIcon icon={faLeaf} className="mr-2 max-sm:text-lg sm:text-2xl md:text-2xl lg:text-3xl" />
              <p className='max-sm:text-lg sm:text-lg md:text-2xl lg:text-2xl'>ICC1H</p>
            </a>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {Object.keys(dropdownMenus).map((menu) => (
              <div key={menu} className="relative group">
                <button
                  className="text-gray-700 hover:text-green-600 font-medium flex items-center py-2"
                  onClick={() => toggleDropdown(menu)}
                >
                  {menu}
                  <FontAwesomeIcon 
                    icon={activeDropdown === menu ? faChevronUp : faChevronDown} 
                    className="ml-1 text-sm" 
                  />
                </button>
                
                {activeDropdown === menu && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownMenus[menu].map((item, index) => (
                      <a
                        key={index}
                        href={item.external ? item.link : item.link}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 flex items-center justify-between ${
                          item.external ? 'font-semibold' : ''
                        }`}
                        onClick={(e) => {
                          if (item.external) {
                            e.preventDefault();
                            handleMenuItemClick(item);
                          } else {
                            handleMenuItemClick(item);
                          }
                        }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.label}</span>
                        {item.external && (
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs ml-2" />
                        )}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div className="md:flex gap-5 hidden">
            {/* Regular navigation items */}
            {['themes', 'speakers', 'sponsors'].map((item) => (
              <motion.button
                key={item}
                className="text-gray-700 hover:text-green-600 font-medium capitalize"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none text-xl"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden fixed top-16 left-0 w-full h-full bg-white bg-opacity-95 overflow-y-auto"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4 px-6">
            {Object.keys(dropdownMenus).map((menu) => (
              <div key={menu} className="border-b border-gray-100 py-2">
                <button
                  className="w-full text-left text-lg font-medium text-gray-700 py-2 flex justify-between items-center"
                  onClick={() => toggleDropdown(menu)}
                >
                  {menu}
                  <FontAwesomeIcon 
                    icon={activeDropdown === menu ? faChevronUp : faChevronDown} 
                    className="ml-1 text-sm" 
                  />
                </button>
                
                {activeDropdown === menu && (
                  <motion.div 
                    className="pl-4 py-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownMenus[menu].map((item, index) => (
                      <a
                        key={index}
                        href={item.external ? item.link : item.link}
                        className={`block py-2 text-gray-600 hover:text-green-600 flex items-center justify-between ${
                          item.external ? 'font-semibold' : ''
                        }`}
                        onClick={(e) => {
                          if (item.external) {
                            e.preventDefault();
                            handleMenuItemClick(item);
                          } else {
                            handleMenuItemClick(item);
                          }
                        }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.label}</span>
                        {item.external && (
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs ml-2" />
                        )}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Regular navigation items */}
            {['themes', 'speakers', 'sponsors'].map((item) => (
              <button
                key={item}
                className="text-left text-lg font-medium text-gray-700 py-3 border-b border-gray-100 capitalize"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;