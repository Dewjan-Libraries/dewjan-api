import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "../controllers/author.js";

const authorRouter = Router();

authorRouter.post("/author", addAuthor);

authorRouter.get("/author/:id", getAuthor);

authorRouter.get("/authors", getAuthors);

authorRouter.patch("/author/:id", updateAuthor);

authorRouter.delete("/author", deleteAuthor);

export default authorRouter;
