const express = require('express');
const { getPaginatedStudents } = require('./pagination.controller');

const router = express.Router();

router.get('/students', getPaginatedStudents);

module.exports = router;
