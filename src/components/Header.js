import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const dropdownMenus = {
    "Calls": [
      { label: "Call for paper", link: "/call-for-paper" },
      { label: "Call for poster presentation", link: "/call-for-poster" }
    ],
    "For Author": [
      { label: "Guidelines for paper submission", link: "/guidelines-paper" },
      { label: "Presentation guidelines", link: "/presentation-guidelines" },
      { label: "Guidelines for poster session", link: "/poster-guidelines" }
    ],
    "Registration": [
      { label: "Registration details", link: "/registration" }
    ],
    "Program": [
      { label: "Program flyer", link: "/program-flyer" },
      { label: "Technical program", link: "/technical-program" },
      { label: "Conference proceedings", link: "/proceedings" },
      { label: "Keynote speakers", link: "/keynote-speakers" },
      { label: "Special Sessions", link: "/special-sessions" }
    ],
    "Travel and Venue": [
      { label: "Check travel and venue details", link: "/travel-venue" }
    ],
    "Sponsors": [
      { label: "ADRI CSEC", link: "/sponsor-adri-csec" },
      { label: "Indian Meteorogical Society", link: "/sponsor-ims" },
      { label: "Mahavir Cancer Sansthan", link: "/sponsor-mcs" }
    ]
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const handleMenuItemClick = () => {
    // Simply close the dropdowns - React Router will handle the navigation
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
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-green-700 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <a href='/'>
              <FontAwesomeIcon icon={faLeaf} className="mr-2" />
              <p>ICC1H</p>
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
                        href={item.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                        onClick={handleMenuItemClick}
                      >
                        {item.label}
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
                        href={item.link}
                        className="block py-2 text-gray-600 hover:text-green-600"
                        onClick={handleMenuItemClick}
                      >
                        {item.label}
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