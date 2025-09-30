import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const location = useLocation();
  const currentHash = location.hash;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (hash) => currentHash === hash;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { to: '#concierge', label: 'Concierge' },
    { to: '#experience', label: 'Experience' },
    { to: '#how-it-works', label: 'How it Works' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#2a4e4e",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
      <motion.nav 
        className={`bg-[#FFFCEA] `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="flex items-center"
            >
              <Link to="/" className="text-2xl font-serif italic text-gray-900 hover:text-gray-700 transition-colors">
                ForeverYOU
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                >
                  <Link
                    to={item.to}
                    className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
                      isActive(item.to)
                        ? 'bg-gray-900/5 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-900/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              className="hidden md:block"
            >
              <button className="bg-[#1a3e3e] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow">
                Join Waitlist
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-900/5 hover:bg-gray-900/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-6 border-t border-gray-200/50 mt-4">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            delay: index * 0.1,
                            duration: 0.3
                          }
                        }}
                      >
                        <Link
                          to={item.to}
                          className={`block text-base font-semibold px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive(item.to)
                              ? 'bg-gray-900/5 text-gray-900 border-l-4 border-[#1a3e3e]'
                              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-900/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: navItems.length * 0.1,
                          duration: 0.3
                        }
                      }}
                      className="pt-2"
                    >
                      <button className="w-full bg-[#1a3e3e] text-white px-6 py-3.5 rounded-xl text-base font-medium shadow-lg hover:bg-[#2a4e4e] transition-colors">
                        Join Waitlist
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

     
    </>
  );
};

export default Nav;