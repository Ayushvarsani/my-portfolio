import { motion } from 'framer-motion';
import { User, Code, Target, Globe, Zap, Coffee, BookOpen, Users, Award, Star, TrendingUp, Rocket, Shield } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      },
    },
  };



  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Software Engineer",
      company: "TechFlow Solutions Inc.",
      description: "Leading enterprise-level application development, architecting scalable solutions, mentoring junior developers, and implementing industry best practices. Specialized in React.js, Node.js, and cloud-native applications.",
      achievements: ["Reduced application load time by 40%", "Led team of 8 developers", "Implemented CI/CD pipelines"]
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "DigitalCraft Studio",
      description: "Developed high-performance web applications and RESTful APIs using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver user-centric solutions.",
      achievements: ["Built 15+ client applications", "Optimized database queries", "Improved UX metrics by 60%"]
    },
    {
      year: "2020 - 2021",
      title: "Frontend Developer",
      company: "WebInnovate Technologies",
      description: "Created responsive user interfaces and implemented modern design systems. Worked extensively with React.js, TypeScript, and modern CSS frameworks.",
      achievements: ["Developed 8 responsive websites", "Implemented design systems", "Achieved 95% accessibility score"]
    }
  ];

  const achievements = [
    { icon: Award, title: "Best Developer Award 2023", description: "Recognized for outstanding contributions to open-source projects and technical excellence", metric: "Industry Recognition" },
    { icon: TrendingUp, title: "Performance Optimization Expert", description: "Consistently improving application performance and user experience metrics", metric: "40% Faster Load Times" },
    { icon: Users, title: "Team Leadership", description: "Successfully mentored 15+ junior developers and led development teams", metric: "15+ Mentees" },
    { icon: Rocket, title: "Project Delivery Excellence", description: "Delivered 75+ projects on time with 98% client satisfaction rate", metric: "98% Success Rate" }
  ];

  const interests = [
    { icon: Coffee, title: "Coffee Connoisseur", description: "Exploring artisanal brewing methods and specialty coffee culture" },
    { icon: BookOpen, title: "Tech Evangelist", description: "Contributing to open-source projects and sharing knowledge" },
    { icon: Globe, title: "Global Tech Explorer", description: "Attending international tech conferences and workshops" },
    { icon: Users, title: "Community Leader", description: "Organizing local developer meetups and hackathons" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 relative overflow-hidden">
      {/* Enhanced SEO Meta Content */}
      <div className="sr-only">
        <h1>Senior Full Stack Developer - React.js, TypeScript, Node.js Expert</h1>
        <p>Experienced software engineer specializing in modern web development, cloud architecture, and scalable application design. Expert in React.js, TypeScript, Node.js, and AWS cloud solutions.</p>
      </div>

      {/* Enhanced Floating Elements with SEO Keywords */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-25"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -12, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section with SEO Keywords */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full mb-8 shadow-xl"
          >
            <User className="h-6 w-6" />
            <span className="font-semibold">Senior Software Engineer</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Full Stack Development Expert
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Specializing in <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong> development. 
            Creating scalable, high-performance web applications with modern cloud architecture and exceptional user experiences.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-10"
          />
        </motion.div>

        {/* Professional Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Rocket className="w-8 h-8 mr-4 text-blue-500" />
                Engineering Excellence
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                With over <strong>4+ years</strong> of professional experience in software development, 
                I've evolved from crafting simple web pages to architecting enterprise-level applications 
                that serve millions of users worldwide.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                My expertise spans the entire development stack - from <strong>frontend optimization</strong> 
                and <strong>user experience design</strong> to <strong>backend architecture</strong> and 
                <strong> cloud infrastructure</strong>. I believe in writing clean, maintainable code that 
                scales with your business needs.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500 rounded-xl">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-2xl">4+ Years</p>
                    <p className="text-sm text-gray-600">Professional Experience</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-500 rounded-xl">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-2xl">75+ Projects</p>
                    <p className="text-sm text-gray-600">Successfully Delivered</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-yellow-500" />
                Core Competencies
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 mt-1 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Enterprise Architecture</h4>
                    <p className="text-gray-600">Designing scalable, maintainable systems for large-scale applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 mt-1 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Performance Optimization</h4>
                    <p className="text-gray-600">Implementing best practices for speed, SEO, and user experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 mt-1 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Cloud-Native Development</h4>
                    <p className="text-gray-600">Building applications optimized for AWS, Docker, and modern infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 mt-1 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Team Leadership</h4>
                    <p className="text-gray-600">Mentoring developers and leading successful project deliveries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Streamlined Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Key Achievements
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-xs mb-3">{achievement.description}</p>
                <span className="text-blue-600 font-semibold text-xs">{achievement.metric}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Streamlined Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Professional Journey
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-blue-600">{exp.year}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                <p className="text-gray-600 font-semibold mb-3">{exp.company}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="space-y-1">
                  {exp.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Cloud Board */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-32"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Technical Skills & Expertise
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <SkillBoard />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 mt-8 max-w-2xl mx-auto"
          >
            A comprehensive skill set spanning frontend, backend, cloud infrastructure, and modern development tools. 
            Each technology represents real-world experience and expertise in building scalable applications.
          </motion.p>
        </motion.div> */}

        {/* Streamlined Personal Interests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Beyond the Code
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">{interest.title}</h4>
                <p className="text-gray-600 text-xs">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default About; 