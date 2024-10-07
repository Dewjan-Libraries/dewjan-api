import { Schema, model, Types } from "mongoose";


// create a new table, stored in bookModel
const bookModel = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  author: { type: Types.ObjectId, ref: "Author" },
  cover: { type: String, required: true },
  content: { type: String, required: true },
});

// export the stored values as a class
export const BookModel = model("Books", bookModel);
