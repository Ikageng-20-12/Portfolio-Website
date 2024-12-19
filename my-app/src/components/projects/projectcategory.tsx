import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCategoryProps {
  title: string;
  color: string; 
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, color, isSelected, onClick }) => {
  const colorClass = {
    green: 'border-green-500 bg-green-500',
    blue: 'border-blue-500 bg-blue-500',
    amber: 'border-amber-400 bg-amber-400',
  }[color] || 'border-gray-500 bg-gray-500'; 

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-xl p-8
        ${isSelected ? 'bg-gray-800/80' : 'bg-gray-800/40'}
        backdrop-blur-sm border-2 transition-all duration-300
        ${isSelected ? colorClass.split(' ')[0] : 'border-gray-700/50'}
        hover:${colorClass.split(' ')[0]}
      `}
    >
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <div className={`w-3 h-3 rounded-full ${colorClass.split(' ')[1]} absolute top-4 right-4`}></div>
    </motion.div>
  );
};

export default ProjectCategory;
