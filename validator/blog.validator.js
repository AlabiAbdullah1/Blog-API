const Joi = require("joi");

const BlogAddSchema = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  tag: Joi.string().email().required(),
  author: Joi.string().min(8).max(10),
  createdAt: Joi.date().default(Date.now),
  lastUpdateAt: Joi.date().default(Date.now),
  body: Joi.string().max(255).required(),
  state: Joi.string().max(255),
  read_count: Joi.number(),
  reading_time: Joi.number(),
});

module.exports = { BlogAddSchema };
