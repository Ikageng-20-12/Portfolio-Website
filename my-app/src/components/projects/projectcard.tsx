import React from 'react';
import { Github, Download } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  zipLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, zipLink }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>View on GitHub</span>
        </a>
        <a
          href={zipLink}
          className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Download ZIP</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;