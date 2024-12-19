import React, { useState } from 'react';
import ProjectCategory from './projectcategory';
import ProjectList from './projectlist';

type CategoryType = 'ongoing' | 'completed' | 'collab' | null;

const projectsData = {
  ongoing: [
    {
      id: 1,
      title: "Farm-Wise",
      description: "Built with: Python, Flask, Docker, HTML, CSS,FarmWise is an educational platform for new farmers, providing valuable information  on various farming techniques, types of farms, and essential resources to promote sustainable agriculture.",
      githubLink: "https://github.com/Ikageng-20-12/FarmWise",
      zipLink: "/github_zips/FarmWise-main.zip"
    },

  ],
  completed: [
    {
      id: 2,
      title: "The Odin Recipe",
      description: "A recipe sharing platform built with html and css",
      githubLink: "https://github.com/Ikageng-20-12/odin-recipes",
      zipLink: "/github_zips/odin-recipes-main.zip"
    },
    {
      id: 4,
      title: "Odin-landing-page",
      description: "A landing page built with html and css",
      githubLink: "https://github.com/Ikageng-20-12/Odin-landing-page",
      zipLink: "/github_zips/Odin-landing-page-main.zip"
    },
    {
      id: 5,
      title: "CamaroCupWeb",
      description: "Built with: Next.js, TypeScript, Tailwind CSS,A Next.js web clone of an existing Camaro racing website, capturing theoriginal’s design and interactivity",
      githubLink: "https://github.com/Ikageng-20-12/CamaroCupWeb",
      zipLink: "/github_zips/CamaroCupWeb-main.zip"
    },
    {
      id: 6,
      title: "Odin-RPS",
      description: "A Rock Paper Scissors game built with html,css and java script",
      githubLink: "https://github.com/Ikageng-20-12/Odin-RPS",
      zipLink: "/github_zips/Odin-RPS-main.zip"
    },
    {
      id: 7,
      title: "Portfolio-Website",
      description: "A portfolio website built with React, Typescript and Tailwind CSS",
      githubLink: "https://github.com/Ikageng-20-12/Portfolio-Website",
      zipLink: "/github_zips/Portfolio-Website-main.zip"
    },
    

  ],
  collab: [
    {
      id: 3,
      title: "Businessyakokasi",
      description: "A collaborative project that was meant to help local business owners to advertise their businesses so they can reach more customers and be recognized",
      githubLink: "https://github.com/innotech012/businessyakokasi",
      zipLink: "/github_zips/businessyakokasi-main.zip"
    },

    {
      id: 8,
      title: "Data Engineering Linkedin Practical",
      description: "A collaborative project to build a data engineering pipeline handling cvs files and pushing the summarised data to a cloud based db which is neonDB.",
      githubLink: "https://github.com/Ikageng-20-12/Data-Engineering-Linkedin-Practical",
      zipLink: "/github_zips/Data-Engineering-Linkedin-Practical-main.zip"
    },
    {
      id: 9,
      title: "Docker Your First Project from a Linkedin Course",
      description: "A collaborative project to dockerize a simple python project",
      githubLink: "https://github.com/Ikageng-20-12/docker-your-first-project-4485003",
      zipLink: "/github_zips/docker-your-first-project-4485003-main.zip"
    },
    {
      id: 10,
      title: "Python Fundamentals101",
      description: "A collaborative project with basic pytohn script meant to be used as tutorial for beginners",
      githubLink: "https://github.com/Ikageng-20-12/Python_Fundamentals101",
      zipLink: "/github_zips/Python_Fundamentals101-main.zip"
    },

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
            title="Collab/Forked"
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