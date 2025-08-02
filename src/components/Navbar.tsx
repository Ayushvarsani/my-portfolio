import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  // Determine text colors based on active section and scroll state
  const isHomeActive = activeSection === 'home' && !scrolled;
  const textColor = isHomeActive ? 'text-white' : 'text-gray-700';
  const hoverColor = isHomeActive ? 'hover:text-cyan-400' : 'hover:text-blue-600';
  const activeColor = isHomeActive ? 'text-cyan-400' : 'text-blue-600';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <img 
                src="/av.svg" 
                alt="Ayush Varsani" 
                width={57} 
                height={30} 
                className={`transition-all duration-300 ${
                  isHomeActive 
                    ? 'filter brightness-0 invert' // Make it white for dark background
                    : 'bg-transparent'
                }`}
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold transition-all duration-300 ${
                isHomeActive
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}
            >
              Ayush Varsani
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? activeColor
                    : `${textColor} ${hoverColor}`
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-md -z-10 transition-all duration-300 ${
                      isHomeActive 
                        ? 'bg-cyan-400/20' 
                        : 'bg-blue-100'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 ${textColor} ${hoverColor}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md rounded-lg mt-2 shadow-lg ${
              isHomeActive 
                ? 'bg-slate-800/95' 
                : 'bg-white/95'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? `${activeColor} ${isHomeActive ? 'bg-cyan-400/20' : 'bg-blue-50'}`
                      : `${textColor} ${hoverColor} ${isHomeActive ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}`
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 