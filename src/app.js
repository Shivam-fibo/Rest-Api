// src/app.js
const express = require('express');
const cors = require('cors');
const studentRoutes = require('./features/students/student.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root endpoint for API health check
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Student Management REST API',
  });
});

// Student feature routes
app.use('/api/students', studentRoutes);

module.exports = app;
