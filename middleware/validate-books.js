import Joi from "joi";

// define validator for addbook

export const addBookValidator = Joi.object({
  title: Joi.string().optional(),
  summary: Joi.string().optional(),
  author: Joi.string().optional(),
  genre: Joi.string().optional(),
  description: Joi.string().optional(),
  publishDate: Joi.number(),
  image: Joi.string(),
  pdf: Joi.string(),
});

export const updateBookValidator = Joi.object({
  title: Joi.string(),
  summary: Joi.string(),
  author: Joi.string(),
  genre: Joi.string(),
  description: Joi.string(),
  publishDate: Joi.number(),
  image: Joi.string(),
  pdf: Joi.string(),
});
