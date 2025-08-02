import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,  EffectCoverflow } from 'swiper/modules';



const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "Pharma 24/7",
      description: "A comprehensive pharmaceutical management system designed for 24/7 pharmacy operations. Features include inventory management, prescription tracking, and customer management.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Sarthibus",
      description: "A modern bus booking and management platform that connects passengers with bus services. Features real-time tracking, seat booking, and payment integration.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d7116?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Transportation"
    },
    {
      id: 3,
      title: "NexQcard",
      description: "A digital business card platform that allows users to create, share, and manage professional digital cards with QR code integration and contact management.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["React", "QR Code API", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Business"
    },
    {
      id: 4,
      title: "Trestalent",
      description: "A talent management and recruitment platform that connects employers with skilled professionals. Features include job posting, candidate matching, and interview scheduling.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Recruitment"
    },
    {
      id: 5,
      title: "Boss",
      description: "A comprehensive business management system designed for entrepreneurs and small business owners. Features include project management, financial tracking, and team collaboration.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Health & Fitness"
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "An intelligent chatbot powered by machine learning that provides customer support, answers queries, and integrates with multiple platforms.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecadf8a?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "AI/ML"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 relative overflow-hidden">
    {/* <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 relative overflow-hidden"> */}
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
          className="absolute top-20 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-30"
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
          className="absolute bottom-40 left-20 w-4 h-4 bg-green-400 rounded-full opacity-25"
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
            <span className="font-medium">Featured Work</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Custom Navigation Buttons - Hidden on mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hidden md:block">
            <button className="swiper-button-prev-custom bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hidden md:block">
            <button className="swiper-button-next-custom bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white p-3 rounded-full shadow-lg"
                        >
                          <Eye className="w-5 h-5 text-gray-700" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white p-3 rounded-full shadow-lg"
                        >
                          <Github className="w-5 h-5 text-gray-700" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 font-medium text-sm"
                      >
                        <span>Code</span>
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        > */}
          {/* <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a> */}
        {/* </motion.div> */}
      </div>

      <style>{`
        .projects-swiper {
          padding: 20px 0;
        }
        
        .projects-swiper .swiper-slide {
          height: auto;
        }
        
        .projects-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
        }
        
        .projects-swiper .swiper-button-prev-custom,
        .projects-swiper .swiper-button-next-custom {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
        }
        
        .projects-swiper .swiper-button-prev-custom {
          left: 10px;
        }
        
        .projects-swiper .swiper-button-next-custom {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Projects; 