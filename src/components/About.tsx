import { motion } from 'framer-motion';
import { User, Code, Heart, Target } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL', 'Tailwind CSS'
  ];

//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Senior Developer",
//       company: "TechCorp",
//       content: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional. They delivered our project on time and exceeded our expectations.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Project Manager",
//       company: "InnovateLab",
//       content: "Exceptional technical skills combined with great communication. They transformed our complex requirements into a beautiful, functional application that our users love.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Startup Founder",
//       company: "NextGen Solutions",
//       content: "This developer helped us build our MVP from scratch. Their expertise in modern technologies and ability to work under pressure made all the difference in our success.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
//     }
//   ];

//   const achievements = [
//     {
//       id: 1,
//       title: "Best Developer Award",
//       description: "Recognized for outstanding contributions to open-source projects",
//       year: "2023",
//       icon: <Award className="w-8 h-8" />,
//       gradient: "from-yellow-500 to-orange-500"
//     },
//     {
//       id: 2,
//       title: "100+ Projects Completed",
//       description: "Successfully delivered projects across various industries",
//       year: "2023",
//       icon: <Target className="w-8 h-8" />,
//       gradient: "from-green-500 to-emerald-500"
//     },
//     {
//       id: 3,
//       title: "5-Star Client Rating",
//       description: "Consistently receiving top ratings from satisfied clients",
//       year: "2023",
//       icon: <Star className="w-8 h-8" />,
//       gradient: "from-blue-500 to-purple-500"
//     },
//     {
//       id: 4,
//       title: "Technical Excellence",
//       description: "Mastered cutting-edge technologies and frameworks",
//       year: "2023",
//       icon: <Code className="w-8 h-8" />,
//       gradient: "from-purple-500 to-pink-500"
//     }
//   ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 relative overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <User className="h-5 w-5" />
            <span className="font-medium">About Me</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              I'm a passionate Full Stack Developer with a love for creating innovative web applications. 
              With over 3 years of experience in the industry, I've worked on various projects ranging 
              from small business websites to complex enterprise applications.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              My journey in web development started with curiosity and has evolved into a deep passion 
              for building user-centric solutions. I believe in writing clean, maintainable code and 
              staying up-to-date with the latest technologies and best practices.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">3+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50+ Projects</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  What I Do
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                    <span>Create responsive and accessible web applications</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                    <span>Build scalable backend systems and APIs</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                    <span>Optimize performance and user experience</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                    <span>Collaborate with teams and mentor junior developers</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Swiper */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Recognition</h3>
            <p className="text-gray-600">Milestones and accomplishments in my career</p>
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
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="achievements-swiper"
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.id}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white mb-4 inline-block`}>
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                  <span className="text-xs text-blue-600 font-medium">{achievement.year}</span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div> */}

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Technologies I Work With
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="font-medium text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .testimonials-swiper,
        .achievements-swiper {
          padding: 20px 0;
        }
        
        .testimonials-swiper .swiper-slide,
        .achievements-swiper .swiper-slide {
          height: auto;
        }
        
        .testimonials-swiper .swiper-pagination-bullet,
        .achievements-swiper .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active,
        .achievements-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
        }
      `}</style>
    </div>
  );
};

export default About; 