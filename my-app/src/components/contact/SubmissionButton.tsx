import React from 'react';
import { Send } from 'lucide-react';

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
    >
      <span>Send Message</span>
      <Send className="w-4 h-4" />
    </button>
  );
};

export default SubmitButton;