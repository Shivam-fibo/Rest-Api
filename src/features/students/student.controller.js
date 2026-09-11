// src/features/students/student.controller.js
const mongoose = require('mongoose');
const Student = require('./student.model');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const { name, email, age, course } = req.body;

    // Validate required fields
    if (!name || !email || !age || !course) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, email, age, course',
      });
    }

    const student = await Student.create({ name, email, age, course });

    return res.status(201).json({
      message: 'Student created successfully',
      student,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    return res.status(200).json({
      students,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get a single student by ID
const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid student ID format' });
    }
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, course } = req.body;

    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid student ID format' });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, age, course },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({
      message: 'Student updated successfully',
      student: updatedStudent,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid student ID format' });
    }

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({
      message: 'Student deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
