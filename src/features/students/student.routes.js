const express = require('express');
const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require('./student.controller');

const router = express.Router();

router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', getStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
