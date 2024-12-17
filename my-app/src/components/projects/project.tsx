import React, { useState } from 'react';
import ProjectCategory from './projectcategory';
import ProjectList from './projectlist';

type CategoryType = 'ongoing' | 'completed' | 'collab' | null;

const projectsData = {
  ongoing: [
    {
      id: 1,
      title: "Banking App",
      description: "A modern banking application with real-time transactions and secure authentication.",
      githubLink: "https://github.com/yourusername/banking-app",
      zipLink: "/downloads/banking-app.zip"
    },
    // Add more ongoing projects...
  ],
  completed: [
    {
      id: 2,
      title: "The Odin Recipe",
      description: "A recipe sharing platform built with React and Node.js.",
      githubLink: "https://github.com/yourusername/odin-recipe",
      zipLink: "/downloads/odin-recipe.zip"
    },
    // Add more completed projects...
  ],
  collab: [
    {
      id: 3,
      title: "HangMan",
      description: "A collaborative word-guessing game with multiplayer support.",
      githubLink: "https://github.com/yourusername/hangman",
      zipLink: "/downloads/hangman.zip"
    },
    // Add more collab projects...
  ]
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Projects Category
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ProjectCategory
            title="On Going"
            color="amber"
            isSelected={selectedCategory === 'ongoing'}
            onClick={() => setSelectedCategory(selectedCategory === 'ongoing' ? null : 'ongoing')}
          />
          <ProjectCategory
            title="Completed"
            color="green"
            isSelected={selectedCategory === 'completed'}
            onClick={() => setSelectedCategory(selectedCategory === 'completed' ? null : 'completed')}
          />
          <ProjectCategory
            title="Collab"
            color="blue"
            isSelected={selectedCategory === 'collab'}
            onClick={() => setSelectedCategory(selectedCategory === 'collab' ? null : 'collab')}
          />
        </div>

        <div className="mt-8">
          <ProjectList
            projects={selectedCategory ? projectsData[selectedCategory] : []}
            isVisible={selectedCategory !== null}
          />
        </div>

        <p className="text-center text-gray-400 mt-8">
          Total of {Object.values(projectsData).flat().length} Projects
        </p>
      </div>
    </div>
  );
};

export default Projects;