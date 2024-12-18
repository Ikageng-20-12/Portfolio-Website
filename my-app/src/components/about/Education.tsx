import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Book } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Education</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">WeThinkCode</h3>
            <p className="text-sm text-gray-400">Software Development</p>
            <p className="text-xs text-gray-500">2023 - Present</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Award className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Certifications</h3>
            <p className="text-sm text-gray-400">Various Technical Certifications</p>
            <ul className="text-xs text-gray-500 mt-1 list-disc list-inside">
              <li>Data Engineering Fundamentals</li>
              <li>SQL Essensial Training</li>
              <li>Relational Databases</li>
              <li>Docker Foundations Professional Certificate</li>
              <li>Learning SFTP</li>
              <li>React Essential Training</li>
              <li>Node.js Essential Training</li>
              <li>Learning Data Governance</li>
              <li>Database Design</li>
              <li>Introduction to CyberSecurity</li>
              <li>Next.js</li>
              <li>Information Technology Foundations</li>

            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Book className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Continuous Learning</h3>
            <p className="text-sm text-gray-400">Self-Paced Education</p>
            <p className="text-xs text-gray-500">Online Courses & Personal Projects</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;