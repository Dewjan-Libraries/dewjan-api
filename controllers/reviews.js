import { ReviewModel } from "../models/reviews.js";

// /add reviews
const addReviews = async (req, res, next) => {
    await ReviewModel.create(req.body)
};