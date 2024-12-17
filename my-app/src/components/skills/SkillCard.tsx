import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  Icon: LucideIcon;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
};

export default SkillCard;