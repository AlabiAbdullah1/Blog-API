const Joi = require("joi");

const UserAddSchema = Joi.object({
  firstName: Joi.string().max(255).required(),
  lastName: Joi.string().max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(10),
  createdAt: Joi.date().default(Date.now),
  lastUpdateAt: Joi.date().default(Date.now),
});

module.exports = { UserAddSchema };
