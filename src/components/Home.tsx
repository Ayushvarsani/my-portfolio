import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ayush Varsani
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
            >
              <Typewriter
                words={['Full Stack Developer', 'React Enthusiast', 'Frontend + Backend']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/Ayush_Varsani_Resume.pdf" // make sure to place your resume in public folder
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/ayushvarsani" // replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ayushvarsani" // replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Linkedin size={24} className="text-blue-600" />
            </motion.a>
            <motion.a
              href="mailto:ayush@example.com" // replace with your email
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Mail size={24} className="text-gray-700" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
