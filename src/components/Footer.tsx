import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com",
      color: "hover:bg-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com",
      color: "hover:bg-blue-400"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:your.email@example.com",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Name
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful and functional web applications. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>your.email@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 ${social.color} text-gray-300 hover:text-white`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Your Name</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 