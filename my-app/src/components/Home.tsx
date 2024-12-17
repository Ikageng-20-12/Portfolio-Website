import React from "react";
import { Github, Linkedin, Mail, Code2, Database, BarChart } from 'lucide-react';
import Image from '../pictures/Portfolio4.jpg';

const Home: React.FC = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
      <nav className="absolute top-0 right-0 p-6 z-10">
        <ul className="flex space-x-8 text-sm">
          <li>
            <a href="../" className="hover:text-blue-500 transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          {["Projects", "Skills", "About Me"].map((item) => (
            <li key={item}>
              <a className="hover:text-blue-500 transition-colors duration-300 relative group cursor-pointer">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex flex-col justify-center items-center px-8 lg:px-16 relative z-10">
          <div className="space-y-6 text-center lg:text-left w-full lg:max-w-xl">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Full Stack Software Developer
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Software Development Student at WeThinkCode
              <br />
              Specializing in <span className="text-blue-400 font-semibold">Data Engineering</span>
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-6 justify-center lg:justify-start">
                {[
                  { Icon: Code2, label: "Full Stack Development" },
                  { Icon: Database, label: "Data Engineering" },
                  { Icon: BarChart, label: "Data Analytics" }
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-6 justify-center lg:justify-start pt-6">
                {[
                  { Icon: Github, href: "https://github.com/Ikageng-20-12", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/ikageng-thitane-308a312b7", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:ikagengthitane@gmail.com", label: "Email" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-blue-400 hover:text-blue-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative">
          <div className="w-96 h-96 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black-500/20 to-cyan-400/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden">
              <img
                src={Image}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 bottom-20 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  );
};

export default Home;