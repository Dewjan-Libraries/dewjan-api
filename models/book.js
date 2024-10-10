import { Schema, model, Types } from "mongoose";

// create a new table, stored in bookModel
const bookModel = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  author: { type: Types.ObjectId, ref: "Author" },
  genre: { type: String, required: true },content: { type: String, required: true },
  publishDate: { type: Number },
  image: { type: String },
  pdf: { type: String },
});

// export the stored values as a class
export const BookModel = model("Books", bookModel);
