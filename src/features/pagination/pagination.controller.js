const Student = require('../students/student.model');

const getPaginatedStudents = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(req.query.limit, 10) || 5));

    const skip = (page - 1) * limit;

    const [totalItems, students] = await Promise.all([
      Student.countDocuments(),
      Student.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return res.status(200).json({
      success: true,
      message: 'Paginated student records retrieved successfully',
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        pageSize: limit,
        hasNextPage,
        hasPrevPage,
        nextPage: hasNextPage ? page + 1 : null,
        prevPage: hasPrevPage ? page - 1 : null,
      },
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch paginated students',
      error: error.message,
    });
  }
};

module.exports = {
  getPaginatedStudents,
};
