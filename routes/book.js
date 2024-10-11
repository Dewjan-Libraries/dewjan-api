import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  searchBooks,
  updateBook,
} from "../controllers/book.js";

// create a router
const bookRouter = Router();

// create routes
bookRouter.post("/books", addBook);

bookRouter.get("/books/:id", getBook);

bookRouter.get("/books", getBooks);

bookRouter.patch("/books/:id", updateBook);

bookRouter.delete("/book/:id", deleteBook);

bookRouter.get("/books/search", searchBooks);

// export router
export default bookRouter;
