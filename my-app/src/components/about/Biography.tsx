import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Code2 } from 'lucide-react';

const Biography: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Biography</h2>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <User className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Ikageng Thitane</h3>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <MapPin className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-sm text-gray-400">South Africa</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Code2 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Focus Area</h3>
            <p className="text-sm text-gray-400">Data Engineering & Full Stack Development</p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          I am a passionate software developer with a strong foundation in full-stack development
          and a special interest in data engineering. My journey in tech started with a curiosity
          about how things work, which led me to pursue software development at WeThinkCode.
        </p>
      </div>
    </motion.div>
  );
}

export default Biography;