import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/book.js";

// create a router
const bookRouter = Router();

// create routes
bookRouter.post("/books", addBook);

bookRouter.get("/book/:id", getBook);

bookRouter.get("/books", getBooks);

bookRouter.patch("/book/:id", updateBook);

bookRouter.delete("/book", deleteBook);

// export router
export default bookRouter;
