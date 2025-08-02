import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Heart, Sparkles, ArrowRight, Linkedin } from 'lucide-react';

const Contact = () => {
  // Contact information with links
  const contactInfo = {
    email: "ayushvarsani203@gmail.com",
    phone: "+91 98790 96790",
    whatsapp: "+91 98790 96790",
    linkedin: "https://www.linkedin.com/in/ayushvarsani/",
    location: "Ahmedabad, Gujarat, India"
  };

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value.replace(/\D/g, '')}`, '_blank');
        break;
      case 'linkedin':
        window.open(value, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative dot */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
            // opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-30 blur-[2px] shadow-lg"
        />
        
        {/* Medium dot with rotation */}
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-80 right-32 w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full opacity-40 blur-[1px] shadow-md"
        />
        
        {/* Small floating dot */}
        <motion.div
          animate={{ 
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-80 left-40 w-6 h-6 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full opacity-35 blur-[1px] shadow-sm"
        />
        
        {/* Tiny sparkle dot */}
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-60 right-60 w-4 h-4 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 rounded-full opacity-25 blur-[0.5px]"
        />
        
        {/* Medium dot with pulse */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-20 w-10 h-10 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-30 blur-[1.5px] shadow-lg"
        />
        
        {/* Small dot with circular motion */}
        <motion.div
          animate={{ 
            x: [0, 30, 0, -30, 0],
            y: [0, -30, 0, 30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 left-60 w-5 h-5 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 rounded-full opacity-30 blur-[0.5px]"
        />
        
        {/* Large background dot */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-full opacity-20 blur-[3px]"
        />
        
        {/* Corner accent dots */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300 rounded-full opacity-20 blur-[2px]"
        />
        
        <motion.div
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 w-14 h-14 bg-gradient-to-br from-blue-300 via-cyan-300 to-teal-300 rounded-full opacity-20 blur-[2px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="font-semibold text-lg">Get In Touch</span>
          </motion.div>
          <h1 className="text-7xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Ready to start a project or just want to chat? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-10 shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mr-4 shadow-lg">
                <Send className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Send a Message</h2>
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
                    className="w-full bg-white/50 backdrop-blur-sm border border-gray-300 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-all duration-300 group-hover:border-pink-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/50 backdrop-blur-sm border border-gray-300 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-all duration-300 group-hover:border-pink-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-all duration-300 group-hover:border-pink-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full bg-white/50 backdrop-blur-sm border border-gray-300 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-all duration-300 resize-none group-hover:border-pink-300"
                ></textarea>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mr-4 shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContactClick('email', contactInfo.email)}
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer border border-pink-200 hover:border-pink-300 shadow-lg hover:shadow-xl"
                >
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold">Email</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{contactInfo.email}</p>
                  </div>
                  <div className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </motion.div>
                
                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContactClick('phone', contactInfo.phone)}
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl hover:from-purple-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer border border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold">Phone</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{contactInfo.phone}</p>
                  </div>
                  <div className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </motion.div>
                
                {/* WhatsApp */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContactClick('whatsapp', contactInfo.whatsapp)}
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 cursor-pointer border border-green-200 hover:border-green-300 shadow-lg hover:shadow-xl"
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold">WhatsApp</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{contactInfo.whatsapp}</p>
                  </div>
                  <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </motion.div>
                
                {/* LinkedIn */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContactClick('linkedin', contactInfo.linkedin)}
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer border border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold">LinkedIn</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Connect with me</p>
                  </div>
                  <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </motion.div>
                
                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-2xl hover:from-indigo-100 hover:to-pink-100 transition-all duration-300 border border-indigo-200 hover:border-indigo-300 shadow-lg hover:shadow-xl"
                >
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">Location</h3>
                    <p className="text-gray-600">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                // rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl"
            >
              <Sparkles className="h-6 w-6" />
              <span className="font-semibold text-lg">Ready to Start?</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-700 mb-8 text-xl max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality! I'm excited to collaborate with you and create something amazing together.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl group"
            >
              <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-lg">Start a Conversation</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 