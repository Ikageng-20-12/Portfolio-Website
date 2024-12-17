import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Users, Lightbulb, Target, MessageSquare } from 'lucide-react';

const softSkills = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Problem Solving',
    description: 'Analytical thinking and creative solution finding'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Time Management',
    description: 'Efficient prioritization and deadline management'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Collaboration',
    description: 'Effective communication and team coordination'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Adaptability',
    description: 'Quick learning and flexibility in new situations'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Project Management',
    description: 'Planning, execution, and delivery of projects'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Communication',
    description: 'Clear and effective technical communication'
  }
];

const SoftSkills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-8 text-blue-400">Soft Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-medium mb-1">{skill.title}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SoftSkills;