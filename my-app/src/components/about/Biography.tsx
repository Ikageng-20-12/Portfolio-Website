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
            <p className="text-sm text-gray-400">South Africa, Gauteng, Pretoria</p>
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
        <p className="text-gray-300 leading-relaxed">👩‍💻 Full-Stack Developer | Data Engineering Specialist</p>
        <p className="text-xs text-gray-300 leading-relaxed">
        Hi there! I'm a full-stack developer with a growing specialization in data engineering, and I’m someone who lives and breathes coding. My passion for programming isn’t just about solving problems—it's about how coding aligns with who I am as a person.

        I believe in the power of continuous learning. For me, coding is more than a career—it’s a never-ending journey of discovery and growth. Technology is always evolving, and that excites me because it means there’s always something new to learn! 🌱

        Whether I’m building interactive front-end experiences with React or designing efficient server-side logic with Python and Flask, I strive to create solutions that are both functional and beautiful. I love using tools like Figma to elevate my projects with intuitive UI/UX designs that leave users impressed.

        📈 As I dive deeper into data engineering, I’m equipping myself with the skills to handle large-scale data challenges and extract meaningful insights. My proficiency in Azure Cosmos DB reflects my ability to manage and optimize database interactions with ease.

        ✨ I’m driven by a curiosity to explore new technologies, a desire to grow with every project, and an unwavering belief in the transformative power of coding. Let’s create something amazing together! 🚀
                </p>
      </div>
    </motion.div>
  );
}

export default Biography;