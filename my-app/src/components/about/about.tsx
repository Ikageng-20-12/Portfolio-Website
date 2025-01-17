import React from 'react';
import { motion } from 'framer-motion';
import Biography from './Biography';
import Education from './Education';
import Interests from './Interest';
import Timeline from './Timeline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Biography />
          <Education />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Interests />
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;