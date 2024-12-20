import React from "react";

const Navbar: React.FC = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur z-50 shadow-md">
      <ul className="flex justify-center space-x-8 py-4 text-sm text-white">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleNavClick(id)}
              className="hover:text-blue-500 transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
