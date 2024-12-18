import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart, Coffee, Gamepad2, Music, Users, Dumbbell, BookOpen, Footprints } from 'lucide-react';

const interests = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Coding',
    description: 'Building and experimenting with new technologies'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Engineering',
    description: 'Working with data pipelines and analytics'
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Data Analytics',
    description: 'Exploring artificial intelligence applications'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Coffee & Code',
    description: 'Perfect combination for problem-solving'
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: 'Gaming',
    description: 'I am a gamer, I like playing video games'
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Music',
    description: 'I like to listen to music most of the time just to keep me relaxed'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Networking',
    description: 'Attending events and connecting with people to balance social life'
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: 'Working Out',
    description: 'Occasionally working out to maintain health balance'
  },
  {
    icon: <Footprints className="w-6 h-6" />,
    title: 'Walking',
    description: 'Taking peaceful walks to refresh the mind'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Reading',
    description: 'Reading books to keep my brain active even during breaks'
  }
];

const Interests: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Interests & Hobbies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors duration-300"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                {interest.icon}
              </div>
              <div>
                <h3 className="font-medium text-sm">{interest.title}</h3>
                <p className="text-xs text-gray-400">{interest.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Interests;