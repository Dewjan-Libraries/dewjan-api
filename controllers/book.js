import { BookModel } from "../models/book.js";

//
export const addBook = async (req, res, next) => {
  try {
    // fetch books from database
    await BookModel.create(req.body);
    // return response
    res.status(201).json("book was added");
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  // fetch books from database
  await BookModel.findById();
  // return response
  res.json("book was added");
};
export const getBooks = async (req, res, next) => {
  await BookModel.find();
  res.json("books were added");
};
export const updateBook = async (req, res, next) => {
  await BookModel.updateOne(req.body);
  res.json("book was update");
};
export const deleteBook = async (req, res, next) => {
  await BookModel.deleteOne(req.body);
  res.json("book was deleted");
};
