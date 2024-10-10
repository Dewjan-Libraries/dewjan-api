import Joi from "joi";

// define validator for addbook

export const addBookValidator = Joi.object({
  title: Joi.string().required(),
  summary: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  description: Joi.string().required(),
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
