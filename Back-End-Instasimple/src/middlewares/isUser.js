const { generateError } = require("../utils");

const isUser = (req, res, next) => {
  if (req.auth) return next();

  generateError("You must be an user to continue. Please, sign up!", 400);
};

module.exports = isUser;
