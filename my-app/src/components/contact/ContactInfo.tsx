import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h2>
      
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <a 
              href="mailto:ikagengthitane@gmail.com"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              ikagengthitane@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <MapPin className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-sm text-gray-400">South Africa</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Clock className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Response Time</h3>
            <p className="text-sm text-gray-400">Within 24 hours</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-500/5 rounded-lg border border-blue-500/10">
          <p className="text-gray-300 leading-relaxed">
            Feel free to reach out for collaboration opportunities, questions about my work,
            or just to say hello. I'm always open to discussing new projects and ideas.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;