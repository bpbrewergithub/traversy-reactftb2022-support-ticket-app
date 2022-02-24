// Configuration
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Initialisation
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Welcome to the support desk API' });
});

// Routes from 'userRoutes' file
app.use('/api/users', require('./routes/userRoutes'));

// Routes from 'ticketRoutes' file
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
