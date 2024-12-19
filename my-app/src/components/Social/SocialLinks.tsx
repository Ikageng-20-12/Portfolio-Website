import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { Icon: Github, href: "https://github.com/Ikageng-20-12", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/ikageng-thitane-308a312b7", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:ikagengthitane@gmail.com", label: "Email" }
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-6">
        {socialLinks.map(({ Icon, href, label }) => (
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
  );
};

export default SocialLinks;