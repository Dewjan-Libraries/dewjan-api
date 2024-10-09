import express from "express";
import bookRouter from "./routes/book.js";
import cors from "cors";
import mongoose from "mongoose";
import reviewRouter from "./routes/reviews.js";
import authorRouter from "./routes/author.js";

// connect database
await mongoose.connect(process.env.MONGO_URI);

//  create  an express app

const app = express();

// creating middlewares
app.use(express.json());
app.use(cors());
app.use(bookRouter);
app.use(reviewRouter);
app.use(authorRouter);

// create server
app.listen(3000, () => {
  console.log("app is listening");
});
