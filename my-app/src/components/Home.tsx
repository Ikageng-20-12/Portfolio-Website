import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import Picture from '../pictures/Portfolio4.jpg'; // Import the picture

const Home: React.FC = () => {
  return (
    <div id="home" className="min-h-screen bg-black text-white relative">
      <nav className="absolute top-0 right-0 p-6">
        <ul className="flex space-x-6 text-sm">
          <li><span className="hover:text-blue-500 cursor-pointer">Home</span></li>
          <li><span className="text-blue-500 hover:text-blue-400 cursor-pointer">About Me</span></li>
          <li><span className="hover:text-blue-500 cursor-pointer">Skills</span></li>
          <li><span className="hover:text-blue-500 cursor-pointer">Projects</span></li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center items-center px-12">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Full Stack Software<br />Developer
          </h1>
          <p className="text-sm text-gray-300 mb-8 text-center">
            I am a Software Development Student<br />
            At WeThinkCode Specializing in<br />
            <span className="text-blue-500">Data Engineering</span>
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com" className="text-blue-500 hover:text-blue-400">
              <FaGithub size={24} className="text-blue-500 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" className="text-blue-500 hover:text-blue-400">
              <FaLinkedin size={24} className="text-blue-500 hover:text-blue-400" />
            </a>
            <a href="mailto:example@example.com" className="text-blue-500 hover:text-blue-400">
              <FaEnvelope size={24} className="text-blue-500 hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Picture} alt="Portfolio" className="w-1/3 h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="absolute top-10 bottom-10 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400 shadow-lg"></div>
    </div>
  );
};

export default Home;