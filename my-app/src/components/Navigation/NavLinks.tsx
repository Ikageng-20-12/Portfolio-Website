import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="hover:text-blue-500 transition-colors duration-300 relative group cursor-pointer"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;