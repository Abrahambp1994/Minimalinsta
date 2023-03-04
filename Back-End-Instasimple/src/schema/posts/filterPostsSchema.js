const Joi = require("joi");

const filterPostsSchema = Joi.object({
  description: Joi.string().max(5000).messages({
    "string.max": "Description has to be less than 5000 characters long",
    "string.base": "Description has to be a string",
  }),
});

module.exports = filterPostsSchema;
