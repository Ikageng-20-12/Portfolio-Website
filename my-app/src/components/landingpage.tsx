import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface LandingPageProps {
  onExploreClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onExploreClick }) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
      <div className="relative h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Welcome to my{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Digital Space
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Hi, I'm{" "}
            <span className="text-blue-400 font-semibold">Ikageng Thitane.</span>
            <br /> Transforming ideas into elegant solutions through code.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-blue-500 rounded-full hover:border-blue-400"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <ChevronDown className="w-6 h-6" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Explore My Work
            </span>
            <span className="relative invisible">Explore My Work</span>
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
};

export default LandingPage;
