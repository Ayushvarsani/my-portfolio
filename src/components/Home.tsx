import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Terminal, Database, Cpu, Zap, Globe, Shield, Cloud } from 'lucide-react';
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

  // Floating tech particles animation
  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 360, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Tech stack icons animation
  const techStackVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Code typing animation
  const codeVariants = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Pulse animation for background elements
  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Matrix-style falling code
  const matrixVariants = {
    animate: {
      y: [-100, 1000],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  // Tech stack data
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { name: 'AWS', icon: '☁️', color: 'text-orange-400' },
    { name: 'AI/ML', icon: '🤖', color: 'text-purple-400' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-400' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
    { name: 'Git', icon: '📦', color: 'text-red-400' },
    { name: 'Firebase', icon: '🔥', color: 'text-orange-500' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative bg-cover bg-center bg-no-repeat overflow-hidden" 
    >
      {/* Tech-themed Background Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-blue-400 opacity-30"
      >
        <Code size={24} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-40 right-20 text-purple-400 opacity-20"
      >
        <Terminal size={28} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-40 left-20 text-cyan-400 opacity-25"
      >
        <Database size={20} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "3s" }}
        className="absolute top-60 right-40 text-green-400 opacity-20"
      >
        <Cpu size={26} />
      </motion.div>

      {/* Additional Tech Icons */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
        className="absolute top-1/3 left-1/3 text-yellow-400 opacity-25"
      >
        <Zap size={22} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "5s" }}
        className="absolute bottom-1/3 right-1/3 text-pink-400 opacity-20"
      >
        <Globe size={24} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "6s" }}
        className="absolute top-1/2 left-1/4 text-indigo-400 opacity-25"
      >
        <Shield size={20} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "7s" }}
        className="absolute bottom-1/2 right-1/4 text-emerald-400 opacity-20"
      >
        <Cloud size={26} />
      </motion.div>

      {/* Tech Stack Icons */}
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={techStackVariants}
          animate="animate"
          style={{ 
            animationDelay: `${index * 0.5}s`,
            left: `${10 + (index % 3) * 25}%`,
            top: `${20 + Math.floor(index / 3) * 15}%`
          }}
          className={`absolute text-2xl opacity-30 hover:opacity-60 transition-opacity duration-300 ${tech.color}`}
          title={tech.name}
        >
          {tech.icon}
        </motion.div>
      ))}

      {/* Matrix-style Code Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            variants={matrixVariants}
            animate="animate"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
            className="absolute text-2xl opacity-30 text-white"
          >
            {/* {['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'async', 'await', 'import', 'export', 'useState', 'useEffect'][Math.floor(Math.random() * 16)]} */}
            {['⚛️', '🟢', '🐍', '☁️', '🤖', '🔷', '⚡', '🛡️', '💻', '🚀'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>


      {/* Tech-themed Pulsing Circles */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full"
      />
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
      />
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full"
      />
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "6s" }}
        className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full"
      />

      {/* Animated Code Brackets */}
      <motion.div
        variants={codeVariants}
        animate="animate"
        className="absolute top-1/4 left-8 text-blue-400 text-4xl font-mono opacity-30"
      >
        {'{'}
      </motion.div>
      <motion.div
        variants={codeVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-1/4 right-8 text-purple-400 text-4xl font-mono opacity-30"
      >
        {'}'}
      </motion.div>

      {/* Animated Tech Labels */}
      <motion.div
        variants={codeVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-1/3 right-8 text-cyan-400 text-sm font-mono opacity-30"
      >
        {'<React />'}
      </motion.div>
      <motion.div
        variants={codeVariants}
        animate="animate"
        style={{ animationDelay: "3s" }}
        className="absolute bottom-1/3 left-8 text-green-400 text-sm font-mono opacity-30"
      >
        {'Node.js'}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-blue-400 text-lg font-mono mb-4"
            >
              {'<Software Developer />'}
            </motion.div>

            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                Ayush Varsani
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto relative"
            >
              <Typewriter
                words={[
                  'Full Stack Developer', 
                  'Lead Potential',
                  'Frontend + Backend',
                  'Problem Solver',
                  'Code Craftsman', 
                  "System Design Architect",
                  'AI/ML Enthusiast',
                  'Cloud Developer'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1"
              >
                <span className="text-cyan-400">|</span>
              </motion.div>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Crafting digital experiences with clean code, innovative solutions, and cutting-edge technologies.
              <br />
              <span className="text-cyan-400 font-mono">Passionate about turning ideas into reality.</span>
            </motion.p>

            {/* Tech Stack Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {techStack.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`flex items-center gap-2 px-3 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 ${tech.color}`}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-mono">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/Ayush_Varsani_Resume.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <Download size={20} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View My Work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/ayushvarsani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                rotate: 360,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
              }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-700"
            >
              <Github size={24} className="text-gray-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ayushvarsani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                rotate: 360,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-700"
            >
              <Linkedin size={24} className="text-blue-400" />
            </motion.a>
            <motion.a
              href="mailto:ayushvarsani203@gmail.com"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                rotate: 360,
                boxShadow: "0 10px 25px rgba(239, 68, 68, 0.4)"
              }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-700"
            >
              <Mail size={24} className="text-gray-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Tech-themed Scroll Indicator - Moved outside main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
          {/* Tech-themed rotating elements around scroll indicator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -left-2 w-2 h-2 bg-blue-500 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-500 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-2 -right-2 w-2 h-2 bg-green-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
