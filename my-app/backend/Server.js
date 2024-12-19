const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://ikagengthitane:SexyBoy09%2A@cluster0.sazib.mongodb.net/UserInfo?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define a schema and model for form submissions
const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Submission = mongoose.model('Submission', submissionSchema);

// Define a route to handle form submissions
app.post('/submit', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const newSubmission = new Submission({ name, email, subject, message });

  try {
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error submitting form' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});