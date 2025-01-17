import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmissionButton';
import { CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submit', formData); // Updated URL for production
      console.log('Form submitted:', response.data);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000); 
    } catch (error) {
      console.error('Error submitting form:', error); // Log the error for debugging
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred while submitting the form');
      }
      setTimeout(() => setError(null), 3000); // Hide error message after 3 seconds
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
    >
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Send Message</h2>
      
      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center justify-center space-x-2 text-green-400"
        >
          <CheckCircle className="w-8 h-8" />
          <span>Form submitted successfully!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />

          <FormInput
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message subject"
            required
          />

          <FormTextArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            required
          />

          <SubmitButton />
        </form>
      )}

      {error && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center justify-center space-x-2 text-red-400 mt-4"
        >
          <AlertCircle className="w-8 h-8" />
          <span>{error}</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;