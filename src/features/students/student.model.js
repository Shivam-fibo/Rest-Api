// src/features/students/student.model.js
const mongoose = require('mongoose');

// Define the schema for Student data
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Student email is required'],
      trim: true,
      lowercase: true,
    },
    age: {
      type: Number,
      required: [true, 'Student age is required'],
    },
    course: {
      type: String,
      required: [true, 'Student course is required'],
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Create and export the Mongoose model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
