import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Cloud, Server, Palette, Globe, Zap, Shield, Cpu, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon: LucideIcon;
  description: string;
}

const SkillBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayMode, setDisplayMode] = useState<'cards' | 'progress' | 'radar' | 'cloud'>('cards');

  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 95, category: 'frontend', icon: Code, description: 'Advanced React with hooks, context, and performance optimization' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: Code, description: 'Type-safe development with advanced type patterns' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: Code, description: 'ES6+, modern JavaScript features and best practices' },
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: Palette, description: 'Semantic HTML and modern CSS with animations' },
    { name: 'SASS/SCSS', level: 85, category: 'frontend', icon: Palette, description: 'Advanced styling with preprocessors' },
    
    // Backend
    { name: 'Node.js', level: 90, category: 'backend', icon: Server, description: 'Server-side JavaScript with Express and NestJS' },
    { name: 'Express.js', level: 85, category: 'backend', icon: Server, description: 'RESTful API development and middleware' },
    { name: 'NestJS', level: 80, category: 'backend', icon: Server, description: 'Enterprise-grade Node.js framework' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'database', icon: Database, description: 'NoSQL database design and optimization' },
    { name: 'PostgreSQL', level: 80, category: 'database', icon: Database, description: 'Relational database management' },
    { name: 'MySQL', level: 75, category: 'database', icon: Database, description: 'Database design and query optimization' },
    
    // Cloud & DevOps
    { name: 'AWS', level: 85, category: 'cloud', icon: Cloud, description: 'EC2, Lambda, S3, and cloud architecture' },
    { name: 'Docker', level: 80, category: 'cloud', icon: Cloud, description: 'Containerization and deployment' },
    { name: 'CI/CD', level: 75, category: 'cloud', icon: Zap, description: 'Continuous integration and deployment' },
    
    // APIs & Integrations
    { name: 'REST APIs', level: 90, category: 'api', icon: Globe, description: 'API design and development' },
    { name: 'Stripe', level: 85, category: 'api', icon: Shield, description: 'Payment processing integration' },
    { name: 'Plaid', level: 80, category: 'api', icon: Shield, description: 'Financial data integration' },
    { name: 'Sanity CMS', level: 85, category: 'api', icon: Layers, description: 'Headless CMS integration' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: Cpu },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'api', name: 'APIs & Integrations', icon: Globe },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-green-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-gray-500 to-slate-500';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  // Card Display Mode
  const CardDisplay = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${getSkillColor(skill.level)}`}>
              <skill.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{skill.name}</h3>
              <p className="text-sm text-gray-600">{getLevelText(skill.level)}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-600">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );

  // Progress Bar Display Mode
  const ProgressDisplay = () => (
    <div className="space-y-6">
      {filteredSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <skill.icon className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">{skill.name}</h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">{getLevelText(skill.level)}</span>
              <span className="text-sm text-gray-500">({skill.level}%)</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} shadow-sm`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Radar/Spider Chart Display Mode
  const RadarDisplay = () => (
    <div className="flex justify-center">
      <div className="relative w-80 h-80">
        {/* Radar grid lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
          {/* Grid circles */}
          {[1, 2, 3, 4, 5].map((level) => (
            <circle
              key={level}
              cx="150"
              cy="150"
              r={level * 25}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
              className="opacity-50"
            />
          ))}
          
          {/* Skill points */}
          {filteredSkills.slice(0, 8).map((skill, index) => {
            const angle = (index / filteredSkills.slice(0, 8).length) * 2 * Math.PI - Math.PI / 2;
            const radius = (skill.level / 100) * 100;
            const x = 150 + radius * Math.cos(angle);
            const y = 150 + radius * Math.sin(angle);
            
            return (
              <g key={skill.name}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill={`url(#${getSkillColor(skill.level).replace('from-', '').replace('to-', '-')})`}
                  className="animate-pulse"
                />
                <text
                  x={x + (Math.cos(angle) * 20)}
                  y={y + (Math.sin(angle) * 20)}
                  className="text-xs font-medium fill-gray-700"
                  textAnchor="middle"
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );

  // Cloud Display Mode (Original)
  const CloudDisplay = () => (
    <div className="relative w-full h-96 md:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          {filteredSkills.map((skill, index) => {
            const angle = (index / filteredSkills.length) * 2 * Math.PI;
            const radius = 150 + Math.sin(index * 0.5) * 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.1, 1],
                  x: [x, x + Math.sin(index) * 20, x],
                  y: [y, y + Math.cos(index) * 20, y],
                }}
                transition={{ 
                  duration: 4 + Math.random() * 2,
                  delay: index * 0.1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.3, zIndex: 10 }}
                className={`absolute text-white font-bold cursor-pointer select-none hover:text-blue-300 transition-all duration-300`}
                style={{
                  textShadow: '0 0 20px currentColor, 0 0 40px currentColor',
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 10px currentColor)',
                }}
              >
                {skill.name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Display Mode Toggle */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { id: 'cards', label: 'Skill Cards', icon: '📋' },
          { id: 'progress', label: 'Progress Bars', icon: '📊' },
          { id: 'radar', label: 'Radar Chart', icon: '🎯' },
          { id: 'cloud', label: 'Skill Cloud', icon: '☁️' },
        ].map((mode) => (
          <button
            key={mode.id}
            onClick={() => setDisplayMode(mode.id as 'cards' | 'progress' | 'radar' | 'cloud')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              displayMode === mode.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="mr-2">{mode.icon}</span>
            {mode.label}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <category.icon className="w-4 h-4" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Display Content */}
      <div className="min-h-[400px]">
        {displayMode === 'cards' && <CardDisplay />}
        {displayMode === 'progress' && <ProgressDisplay />}
        {displayMode === 'radar' && <RadarDisplay />}
        {displayMode === 'cloud' && <CloudDisplay />}
      </div>
    </div>
  );
};

export default SkillBoard; 