import { Schema, Types, model } from "mongoose";

const reviewModel = new Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String, required: true },
  // userId: { type: Types.ObjectId, ref: "User" },
  // since the user will be the one to give a review or?
});

export const ReviewModel = model("Reviews", reviewModel);
