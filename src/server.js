const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
app.use(cors()); // Use cors middleware

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://atish:1234@cluster0.ke5bvpl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a schema for the login data
const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Login = mongoose.model('Login', loginSchema);

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle login POST request
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Save the login data to MongoDB
    const newLogin = new Login({ username, password });
    await newLogin.save();

    res.status(200).send('Login data saved to MongoDB');
  } catch (error) {
    console.error('Error saving login data:', error);
    res.status(500).send('Error saving login data');
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
