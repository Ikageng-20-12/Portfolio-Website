import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const timelineEvents = [
  {
    year: '2020',
    title: 'Started my self-learning journey in programming',
    description: 'JavaScript, Python, and Web Development'
  },
  {
    year: '2021',
    title: 'Explored the world of startups',
    description: 'Began researching and understanding startup ecosystems'
  },
  {
    year: '2023',
    title: 'Began my journey as a student at WeThinkCode',
    description: 'Software Engineering School'
  },
  {
    year: '2024',
    title: 'Data Engineering Focus',
    description: 'Specialized in data engineering concepts'
  },
  {
    year: '2024',
    title: 'Portfolio Development',
    description: 'Created personal portfolio website'
  },
  {
    year: '2024',
    title: 'Completed my learning journey at WeThinkCode',
    description: 'Explored full stack development and data engineering'
  }
];


const Timeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Journey Timeline</h2>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-500/20"></div>
        
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              <Circle className="absolute left-2.5 top-2 w-3 h-3 text-blue-400 transform -translate-x-1/2" />
              <div className="bg-gray-800/50 rounded-lg p-4">
                <span className="text-xs text-blue-400 font-semibold">{event.year}</span>
                <h3 className="font-medium mt-1">{event.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Timeline;