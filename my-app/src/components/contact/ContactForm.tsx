import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmissionButton';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
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
    </motion.div>
  );
};

export default ContactForm;