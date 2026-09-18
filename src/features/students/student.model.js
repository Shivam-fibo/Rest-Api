const mongoose = require('mongoose');

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
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
