import React from 'react';
import NavLink from './NavLinks';

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 p-6 z-50 bg-black/20 backdrop-blur-sm rounded-bl-xl">
      <ul className="flex space-x-8 text-sm">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink href={item.href} onClick={() => handleNavClick(item.href)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;