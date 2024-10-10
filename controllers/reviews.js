import { ReviewModel } from "../models/reviews.js";

// /add reviews
export const addReviews = async (req, res, next) => {
  try {
    const newReview = await ReviewModel.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await ReviewModel.find(req.body);
    res.status(201).json(reviews);
  } catch (error) {
    next(error);
  }
};
