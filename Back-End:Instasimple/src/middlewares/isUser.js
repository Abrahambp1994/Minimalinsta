const { generateError } = require("../utils");

const isUser = (req, res, next) => {
  if (req.auth) return next();

  generateError("Debes ser usuario para continuar", 400);
};

module.exports = isUser;
