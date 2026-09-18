const Student = require('../students/student.model');

const getStudentsByCourseInefficient = async (req, res) => {
  try {
    const { course } = req.query;

    if (!course) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a course query parameter (e.g., ?course=Computer Science)',
      });
    }

    const allStudents = await Student.find();

    const filteredStudents = allStudents.filter(
      (student) => student.course.toLowerCase() === course.toLowerCase()
    );

    return res.status(200).json({
      success: true,
      approach: 'Non-Optimized (Application-Level Filtering)',
      totalFetchedFromDB: allStudents.length,
      totalReturnedToClient: filteredStudents.length,
      data: filteredStudents,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error.message,
    });
  }
};

const getStudentsByCourseOptimized = async (req, res) => {
  try {
    const { course } = req.query;

    if (!course) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a course query parameter (e.g., ?course=Computer Science)',
      });
    }

    const filteredStudents = await Student.find({
      course: { $regex: new RegExp(`^${course}$`, 'i') },
    });

    return res.status(200).json({
      success: true,
      approach: 'Optimized (Database-Level Filtering)',
      totalFetchedFromDB: filteredStudents.length,
      totalReturnedToClient: filteredStudents.length,
      data: filteredStudents,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error.message,
    });
  }
};

module.exports = {
  getStudentsByCourseInefficient,
  getStudentsByCourseOptimized,
};
