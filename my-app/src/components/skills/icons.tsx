import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileJson, 
  Database, 
  Terminal,
  Server,
  Blocks,
  Braces,
  Binary,
  Container,
  Cpu,
  Code,
  MonitorDot,
  Boxes,
  Wrench,
  GitBranch,
  Workflow
} from 'lucide-react';

const icons = [
  { Icon: FileJson, color: 'text-blue-400', name: 'JavaScript' },
  { Icon: Code2, color: 'text-blue-400', name: 'TypeScript' },
  { Icon: Blocks, color: 'text-cyan-400', name: 'React' },
  { Icon: Terminal, color: 'text-blue-400', name: 'Python' },
  { Icon: Database, color: 'text-blue-400', name: 'SQL' },
  { Icon: Server, color: 'text-blue-400', name: 'Node.js' },
  { Icon: Braces, color: 'text-blue-400', name: 'HTML' },
  { Icon: Binary, color: 'text-blue-400', name: 'CSS' },
  { Icon: Cpu, color: 'text-blue-600', name: 'C++' },
  { Icon: Container, color: 'text-blue-500', name: 'Docker' },
  { Icon: MonitorDot, color: 'text-blue-300', name: 'VS Code' },
  { Icon: Boxes, color: 'text-blue-400', name: 'AWS' },
  { Icon: Wrench, color: 'text-blue-400', name: 'Tools' },
  { Icon: GitBranch, color: 'text-blue-400', name: 'Git' },
  { Icon: Code, color: 'text-blue-400', name: 'APIs' },
  { Icon: Workflow, color: 'text-blue-400', name: 'CI/CD' }
];

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((IconData, i) => (
        <motion.div
          key={i}
          className={`absolute ${IconData.color} opacity-20 hover:opacity-50 transition-opacity duration-300`}
          initial={{ 
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: 0.8 + Math.random() * 0.4,
            rotate: 0
          }}
          animate={{
            x: [
              Math.random() * 200,
              Math.random() * 200
            ],
            y: [
              Math.random() * 200,
              Math.random() * 200
            ],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 25}%`,
          }}
        >
          <div className="relative group">
            <IconData.Icon className="w-8 h-8" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           text-xs whitespace-nowrap bg-gray-800 px-2 py-1 rounded z-50">
              {IconData.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;