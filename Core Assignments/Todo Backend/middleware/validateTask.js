// Middleware for validating task input

exports.validateTask = (req, res, next) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({
      error: "Validation failed. Task is mandatory",
    });
  }

  next();
};
