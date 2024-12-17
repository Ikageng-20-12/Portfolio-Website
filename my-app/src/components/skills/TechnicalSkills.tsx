import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Globe, Server, Shield } from 'lucide-react';
import FloatingIcons from './icons';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', icon: <Code2 className="w-6 h-6" />, level: 90, category: 'Frontend' },
  { name: 'React/Next.js', icon: <Globe className="w-6 h-6" />, level: 85, category: 'Frontend' },
  { name: 'Python', icon: <Terminal className="w-6 h-6" />, level: 80, category: 'Backend' },
  { name: 'SQL/PostgreSQL', icon: <Database className="w-6 h-6" />, level: 75, category: 'Backend' },
  { name: 'Node.js', icon: <Server className="w-6 h-6" />, level: 85, category: 'Backend' },
  { name: 'Security', icon: <Shield className="w-6 h-6" />, level: 70, category: 'Other' },
];

const TechnicalSkills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 relative overflow-hidden"
    >
      <FloatingIcons />
      
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-8 text-blue-400">Technical Skills</h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="ml-auto text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalSkills;