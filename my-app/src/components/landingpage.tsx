import React from "react";
import { motion } from "framer-motion";
import Picture from "../pictures/Portfolio3.jpg";
import Button from "@mui/material/Button"; 

const LandingPage: React.FC = () => {
  const handleScrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      const yOffset = -70; 
      const yPosition = homeSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
        <img
          src={Picture}
          alt="Moody corridor with light"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 inset-x-0 flex items-center justify-center max-w-xs mx-auto">
          <p className="text-xs md:text-sm italic text-gray-300 text-center">
            "Technology has the power to ignite a brighter future, connecting ideas and inspiring progress across the world."
          </p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-6 py-4 md:px-12 md:py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
        >
          Welcome to my <span className="text-gray-400">Portfolio Website</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-2 md:space-y-4 mb-4 md:mb-6"
        >
          <p className="text-sm md:text-base">
            My name is{" "}
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              Ikageng Thitane
            </a>
            , and I invite you
          </p>
          <p className="text-sm md:text-base">To explore my world as a developer.</p>
          <p className="text-sm md:text-base">Don't hesitate to press the button below to</p>
          <p className="text-sm md:text-base">Dive into my work, skills, and projects.</p>
          <p className="text-sm md:text-base">Let's build something amazing together!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button variant="outlined" onClick={handleScrollToHome}>
            Click Me
          </Button>
        </motion.div>
      </div>
    </main>
  );
};

export default LandingPage;
