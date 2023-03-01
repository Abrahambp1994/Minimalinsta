const Joi = require("joi");

const postIdSchema = Joi.number().positive().required();

module.exports = postIdSchema;
