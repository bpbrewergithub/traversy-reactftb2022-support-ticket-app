// Configuration
const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Initialisation
const app = express();

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Welcome to the support desk API' });
});

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
