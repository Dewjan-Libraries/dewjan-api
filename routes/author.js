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

authorRouter.get("/author", getAuthors);

authorRouter.patch("/author", updateAuthor);

authorRouter.delete("/author", deleteAuthor);

export default authorRouter;
