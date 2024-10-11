import { Schema, model, Types } from "mongoose";

// create a new table, stored in bookModel
const bookModel = new Schema({
  title: { type: String },
  summary: { type: String },
  author: { type: Types.ObjectId, ref: "Author" },
  genre: { type: String },
  description: { type: String },
  publishDate: { type: Number },
  image: { type: String },
  pdf: { type: String },
});

// export the stored values as a class
export const BookModel = model("Books", bookModel);
