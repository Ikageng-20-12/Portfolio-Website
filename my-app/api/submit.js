const supabase = require('./db');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Check if a submission with the same email already exists
    const { data: existingSubmission, error: existingError } = await supabase
      .from('submissions')
      .select('*')
      .eq('email', email)
      .single();

    if (existingError && existingError.code !== 'PGRST116') {
      throw existingError;
    }

    if (existingSubmission) {
      return res.status(400).json({ error: 'A submission with this email already exists' });
    }

    // Insert the new submission
    const { data, error } = await supabase
      .from('submissions')
      .insert([{ name, email, subject, message }]);

    if (error) {
      throw error;
    }

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error); // Log the error for debugging
    res.status(500).json({ error: 'Error submitting form', details: error.message });
  }
};