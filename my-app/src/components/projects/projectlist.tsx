import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './projectcard';

interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  zipLink: string;
}

interface ProjectListProps {
  projects: Project[];
  isVisible: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectList;