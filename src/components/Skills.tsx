import { motion } from 'framer-motion';
import { Code, Database, Palette, Cloud, Zap, Globe, Award,  TrendingUp, Users, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette className="h-8 w-8" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
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
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
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
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
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
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
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

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: <Globe className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'React Developer',
      issuer: 'Meta (Facebook)',
      year: '2023',
      icon: <Code className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'MongoDB Developer',
      issuer: 'MongoDB University',
      year: '2022',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2022',
      icon: <Cloud className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            x: [0, 15, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full opacity-25"
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Award className="h-5 w-5" />
            <span className="font-medium">Skills & Expertise</span>
          </motion.div>
          <h1 className="text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I've developed a diverse set of skills through years of experience and continuous learning. 
            Here's what I bring to the table to help bring your ideas to life.
          </p>
        </motion.div>

        {/* Skills Categories Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-300">Explore my expertise across different domains</p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="skills-prev-btn bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button className="skills-next-btn bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.skills-next-btn',
              prevEl: '.skills-prev-btn',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="skills-swiper"
          >
            {skillCategories.map((category, index) => (
              <SwiperSlide key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full"
                >
                  <div className="flex items-center mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mr-6 shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
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
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-3 backdrop-blur-sm overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                            className={`h-3 rounded-full bg-gradient-to-r ${category.gradient} shadow-lg relative overflow-hidden`}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 shadow-2xl mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-white mb-4">Additional Skills</h3>
            <p className="text-gray-300 text-lg">Beyond technical expertise</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10 hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Soft Skills</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Team Leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Time Management</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-white/10 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Methodologies</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Agile/Scrum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Test-Driven Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Continuous Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Code Review</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white text-lg">Languages</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">English (Native)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Spanish (Fluent)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">French (Intermediate)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">German (Basic)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-white mb-4">Certifications</h3>
            <p className="text-gray-300 text-lg">Professional achievements and qualifications</p>
          </motion.div>
          
          {/* Certifications Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="certs-prev-btn bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button className="certs-next-btn bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCards]}
            effect="cards"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.certs-next-btn',
              prevEl: '.certs-prev-btn',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                effect: "slide",
              },
              1024: {
                slidesPerView: 3,
                effect: "slide",
              },
            }}
            className="certifications-swiper"
          >
            {certifications.map((cert) => (
              <SwiperSlide key={cert.title}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10 hover:border-blue-400 transition-all duration-300 h-full"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${cert.gradient} rounded-xl`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <p className="text-xs text-blue-400 mt-1">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .skills-swiper,
        .certifications-swiper {
          padding: 20px 0;
        }
        
        .skills-swiper .swiper-slide,
        .certifications-swiper .swiper-slide {
          height: auto;
        }
        
        .skills-swiper .swiper-pagination-bullet,
        .certifications-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .skills-swiper .swiper-pagination-bullet-active,
        .certifications-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
        }
        
        .certifications-swiper .swiper-slide {
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }
        
        .certifications-swiper .swiper-slide-active {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default Skills; 