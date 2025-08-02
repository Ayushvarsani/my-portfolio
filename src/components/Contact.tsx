import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock, Heart, Sparkles, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-16 w-6 h-6 bg-pink-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-60 right-24 w-4 h-4 bg-blue-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-60 left-32 w-5 h-5 bg-purple-400 rounded-full opacity-25"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="font-medium">Get In Touch</span>
          </motion.div>
          <h1 className="text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start a project or just want to chat? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Send a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 group-hover:border-blue-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 group-hover:border-blue-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 group-hover:border-blue-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none group-hover:border-blue-300"
                ></textarea>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">your.email@example.com</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">Your City, Country</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Availability</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-blue-400 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-purple-400 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mr-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-2xl border border-white/10 hover:border-blue-400 transition-all duration-300 group"
                >
                  <Globe className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">GitHub</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-white/10 hover:border-blue-400 transition-all duration-300 group"
                >
                  <Globe className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <Globe className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">Twitter</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-white/10 hover:border-purple-400 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">Email</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8"
            >
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Ready to Start?</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality! I'm excited to collaborate with you and create something amazing together.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg group"
            >
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span>Start a Conversation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 