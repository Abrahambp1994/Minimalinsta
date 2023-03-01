const Joi = require("joi");

const createUserSchema = Joi.object({
  email: Joi.string().email().min(5).max(100).required(),
  password: Joi.string().min(4).max(100).required(),
  name: Joi.string().min(4).max(50).required(),
});

module.exports = createUserSchema;