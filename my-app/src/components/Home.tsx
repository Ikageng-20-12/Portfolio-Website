import React from "react";
import { Github, Linkedin, Mail, Code2, Database, BarChart, Download } from "lucide-react";
import Image from "../pictures/Portfolio4.jpg";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="min-h-screen pt-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex flex-col justify-center items-center px-8 lg:px-16 relative z-10">
          <div className="space-y-6 text-center lg:text-left w-full lg:max-w-xl">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Full Stack Software Developer
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Software Development Student at WeThinkCode
              <br />
              Specializing in{" "}
              <span className="text-blue-400 font-semibold">
                Data Engineering
              </span>
            </p>

            <div className="flex flex-col space-y-4">
              <div className="flex space-x-6 justify-center lg:justify-start">
                {[
                  { Icon: Code2, label: "Full Stack Development" },
                  { Icon: Database, label: "Data Engineering" },
                  { Icon: BarChart, label: "Data Analytics" },
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
                  {
                    Icon: Github,
                    href: "https://github.com/Ikageng-20-12",
                    label: "GitHub",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://linkedin.com/in/ikageng-thitane-308a312b7",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Mail,
                    href: "mailto:ikagengthitane@gmail.com",
                    label: "Email",
                  },
                  {
                    Icon: Download,
                    href: "/CV/Ikageng_Thitane_CV.pdf", 
                    label: "Download CV",
                  },
                ].map(({ Icon, href, label }) => (
                  <div key={label} className="relative group">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 text-blue-400 hover:text-blue-300" />
                    </a>
                    {label === "Download CV" && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-blue-100 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        CV
                      </span>
                    )}
                  </div>
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

      <div className="absolute top-20 bottom-20 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden lg:block"></div>
    </div>
  );
};

export default Home;