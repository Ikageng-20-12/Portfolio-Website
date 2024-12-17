import React from 'react';
import { Code2, Database, Brain } from 'lucide-react';
import SkillCard from './SkillCard';

const skills = [
  { Icon: Code2, label: "Full Stack Development" },
  { Icon: Database, label: "Data Engineering" },
  { Icon: Brain, label: "Machine Learning" }
];

const SkillsSection: React.FC = () => {
  return (
    <div className="flex space-x-6 justify-center lg:justify-start">
      {skills.map((skill) => (
        <SkillCard key={skill.label} {...skill} />
      ))}
    </div>
  );
};

export default SkillsSection;