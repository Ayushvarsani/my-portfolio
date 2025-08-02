import { motion } from 'framer-motion';
import {  Database, Palette, Cloud, Zap, Award,  TrendingUp, Users, Lightbulb, Smartphone, Cpu, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette className="h-8 w-8" />,
      color: 'pink',
      gradient: 'from-pink-500 to-purple-500',
      description: 'Creating beautiful and responsive user interfaces',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML/CSS', level: 90, icon: '🌐' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'Next.js', level: 80, icon: '⚡' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-8 w-8" />,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500',
      description: 'Building robust and scalable server-side applications',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚀' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'MongoDB', level: 82, icon: '🍃' },
        { name: 'REST APIs', level: 90, icon: '🔗' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Cloud className="h-8 w-8" />,
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500',
      description: 'Streamlining development and deployment processes',
      skills: [
        { name: 'Git', level: 92, icon: '📝' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'CI/CD', level: 78, icon: '🔄' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'Nginx', level: 72, icon: '🌐' }
      ]
    },
    {
      title: 'Other Technologies',
      icon: <Zap className="h-8 w-8" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Modern tools and frameworks for enhanced development',
      skills: [
        { name: 'GraphQL', level: 75, icon: '🔮' },
        { name: 'Firebase', level: 80, icon: '🔥' },
        { name: 'Redux', level: 85, icon: '📦' },
        { name: 'Jest', level: 78, icon: '🧪' },
        { name: 'Webpack', level: 70, icon: '📦' },
        { name: 'Figma', level: 65, icon: '🎨' }
      ]
    }
  ];

  const additionalSkills = [
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      gradient: 'from-green-500 to-emerald-500',
      skills: ['React Native', 'Flutter', 'Progressive Web Apps']
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="h-6 w-6" />,
      gradient: 'from-orange-500 to-red-500',
      skills: ['TensorFlow', 'Python ML', 'Data Analysis']
    },
    {
      title: 'Security',
      icon: <Shield className="h-6 w-6" />,
      gradient: 'from-yellow-500 to-orange-500',
      skills: ['OAuth', 'JWT', 'HTTPS', 'Security Best Practices']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 bg-gradient-to-t from-purple-50 via-blue-50 to-slate-50 pt-20 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative dot */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
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
            <Award className="h-6 w-6" />
            <span className="font-semibold text-lg">Skills & Expertise</span>
          </motion.div>
          <h1 className="text-7xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            I've developed a diverse set of skills through years of experience and continuous learning. 
            Here's what I bring to the table to help bring your ideas to life and create something amazing together.
          </p>
        </motion.div>

        {/* New Interactive Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600 text-xl">Explore my expertise across different domains</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mr-6 shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                          <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 font-mono group-hover:text-gray-700 transition-colors duration-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                          className={`h-3 rounded-full bg-gradient-to-r ${category.gradient} shadow-lg relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-white/20"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Additional Expertise</h3>
            <p className="text-gray-600 text-xl">Beyond core technical skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 5
                }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${skill.gradient} rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg group-hover:text-gray-800 transition-colors duration-300">{skill.title}</h4>
                </div>
                <div className="space-y-4">
                  {skill.skills.map((skillItem, skillIndex) => (
                    <motion.div
                      key={skillItem}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${skill.gradient} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{skillItem}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-12 shadow-2xl mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Skills Summary</h3>
            <p className="text-gray-600 text-xl">A comprehensive overview of my capabilities</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mr-4 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">Soft Skills</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-700">Team Leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-700">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-700">Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-700">Time Management</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mr-4 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">Methodologies</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Agile/Scrum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Test-Driven Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Continuous Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Code Review</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200 hover:border-indigo-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mr-4 shadow-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">Languages</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-700">English (Native)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-700">Spanish (Fluent)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-700">French (Intermediate)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-700">German (Basic)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 