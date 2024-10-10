import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "../controllers/author.js";

const authorRouter = Router();

authorRouter.post("/authors", addAuthor);

authorRouter.get("/authors/:id", getAuthor);

authorRouter.get("/authors", getAuthors);

authorRouter.patch("/authors/:id", updateAuthor);

authorRouter.delete("/authors/:id", deleteAuthor);

export default authorRouter;
