const Joi = require("joi");

const userIdSchema = Joi.number().positive().required();

module.exports = userIdSchema;