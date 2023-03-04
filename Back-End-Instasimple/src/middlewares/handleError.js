const handleError = (error, req, res, next) => {
  console.error(error);
  res
    .status(error.statusCode || 500)
    .send({ status: "error", message: error.message });
};

module.exports = handleError;
