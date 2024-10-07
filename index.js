import express from "express";
import bookRouter from "./routes/book.js";
import cors from "cors";

//  create  an express app

const app = express();

// creating middlewares
app.use(express.json());
app.use(cors);
app.use(bookRouter);

// create server
app.listen(3000, () => {
  console.log("app is listening");
});
