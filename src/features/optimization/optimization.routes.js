const express = require('express');
const {
  getStudentsByCourseInefficient,
  getStudentsByCourseOptimized,
} = require('./optimization.controller');

const router = express.Router();

router.get('/students/inefficient', getStudentsByCourseInefficient);
router.get('/students/optimized', getStudentsByCourseOptimized);

module.exports = router;
