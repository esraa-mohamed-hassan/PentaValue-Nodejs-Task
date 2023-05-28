const express = require('express');
const app = express();
const db = require('../config/database');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');

// Connect to the database
db.authenticate()
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.error('Unable to connect to the database:', error));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/notes', noteRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});